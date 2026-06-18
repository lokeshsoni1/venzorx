import zlib
import struct

def parse_png(filename):
    with open(filename, 'rb') as f:
        sig = f.read(8)
        assert sig == b'\x89PNG\r\n\x1a\n'
        chunks = []
        while True:
            length_bytes = f.read(4)
            if not length_bytes:
                break
            length = struct.unpack('>I', length_bytes)[0]
            chunk_type = f.read(4)
            chunk_data = f.read(length)
            crc = f.read(4)
            chunks.append((chunk_type, chunk_data))
            if chunk_type == b'IEND':
                break
    return chunks

def inspect_and_process(input_path, output_path):
    chunks = parse_png(input_path)
    ihdr = next(c[1] for c in chunks if c[0] == b'IHDR')
    width, height, bit_depth, color_type, compression, filter_method, interlace = struct.unpack('>IIBBBBB', ihdr)
    
    print(f"Reading: Width={width}, Height={height}, ColorType={color_type}")
    
    idat_data = b''.join(c[1] for c in chunks if c[0] == b'IDAT')
    decompressed = zlib.decompress(idat_data)
    
    bytes_per_pixel = 4
    scanline_width = 1 + width * bytes_per_pixel
    
    unfiltered = bytearray()
    prev_line = bytearray(width * bytes_per_pixel)
    
    curr_idx = 0
    for y in range(height):
        filter_type = decompressed[curr_idx]
        line_data = decompressed[curr_idx + 1 : curr_idx + scanline_width]
        curr_idx += scanline_width
        
        recon_line = bytearray(width * bytes_per_pixel)
        for x in range(width * bytes_per_pixel):
            x_byte = line_data[x]
            a_val = recon_line[x - bytes_per_pixel] if x >= bytes_per_pixel else 0
            b_val = prev_line[x]
            c_val = prev_line[x - bytes_per_pixel] if x >= bytes_per_pixel else 0
            
            if filter_type == 0:
                recon_val = x_byte
            elif filter_type == 1:
                recon_val = (x_byte + a_val) & 0xFF
            elif filter_type == 2:
                recon_val = (x_byte + b_val) & 0xFF
            elif filter_type == 3:
                recon_val = (x_byte + (a_val + b_val) // 2) & 0xFF
            elif filter_type == 4:
                p = a_val + b_val - c_val
                pa = abs(p - a_val)
                pb = abs(p - b_val)
                pc = abs(p - c_val)
                if pa <= pb and pa <= pc:
                    nearest = a_val
                elif pb <= pc:
                    nearest = b_val
                else:
                    nearest = c_val
                recon_val = (x_byte + nearest) & 0xFF
            recon_line[x] = recon_val
        
        unfiltered.extend(recon_line)
        prev_line = recon_line

    # Inspect corners
    corner_pixels = [
        unfiltered[0:4],
        unfiltered[(width-1)*4 : width*4],
        unfiltered[(height-1)*width*4 : ((height-1)*width+1)*4],
        unfiltered[(height*width-1)*4 : height*width*4]
    ]
    print("Corner pixels (RGBA):", [list(p) for p in corner_pixels])

    # Convert black background to transparent
    # A pixel is background if it is very dark (e.g. R < 12, G < 12, B < 12)
    # Let's count how many pixels are converted
    converted = 0
    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            r, g, b, a = unfiltered[idx : idx + 4]
            # Since the wolf eyes and outline might be cyan or metallic, let's target pure black or very near black background
            if r < 12 and g < 12 and b < 12:
                unfiltered[idx] = 0
                unfiltered[idx+1] = 0
                unfiltered[idx+2] = 0
                unfiltered[idx+3] = 0
                converted += 1
            else:
                unfiltered[idx+3] = 255

    print(f"Converted {converted} pixels of black background to transparent.")

    # Compress the raw pixels back to a PNG
    def save_png(filename, width, height, data):
        def make_chunk(chunk_type, chunk_data):
            length = struct.pack('>I', len(chunk_data))
            crc = struct.pack('>I', zlib.crc32(chunk_type + chunk_data))
            return length + chunk_type + chunk_data + crc

        png_bytes = b'\x89PNG\r\n\x1a\n'
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
        png_bytes += make_chunk(b'IHDR', ihdr_data)
        
        compressed = zlib.compress(data)
        png_bytes += make_chunk(b'IDAT', compressed)
        png_bytes += make_chunk(b'IEND', b'')
        
        with open(filename, 'wb') as f:
            f.write(png_bytes)

    out_decompressed = bytearray()
    for y in range(height):
        out_decompressed.append(0)
        out_decompressed.extend(unfiltered[y * width * bytes_per_pixel : (y + 1) * width * bytes_per_pixel])
        
    save_png(output_path, width, height, bytes(out_decompressed))
    print(f"Saved processed transparent image to {output_path}")

inspect_and_process(
    'C:/Users/hi/.gemini/antigravity-ide/brain/aeebcda9-6d95-4a8e-b0d3-faa834cb6fb6/media__1781801485060.png', 
    'public/images/3d_wolf_logo.png'
)
