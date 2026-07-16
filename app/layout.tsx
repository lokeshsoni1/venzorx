import type { Metadata } from "next";
import { Architects_Daughter, Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-wrapper";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraphy",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venzorx.com"),
  title: {
    default: "VenzorX | Bespoke Digital Architecture & High-Tech Systems",
    template: "%s | VenzorX"
  },
  description: "VenzorX engineers high-tech digital systems, bespoke corporate architectures, and production-grade micro-SaaS platforms optimized for conversion and scalability.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venzorx.com",
    title: "VenzorX | Bespoke Digital Architecture & High-Tech Systems",
    description: "VenzorX engineers high-tech digital systems, bespoke corporate architectures, and production-grade micro-SaaS platforms optimized for conversion and scalability.",
    siteName: "VenzorX",
    images: [
      {
        url: "https://res.cloudinary.com/dbpdexty8/image/upload/v1783590720/IMG_20260709_151908_dbgkrv.png",
        width: 1200,
        height: 630,
        alt: "VenzorX Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VenzorX | Bespoke Digital Architecture & High-Tech Systems",
    description: "VenzorX engineers high-tech digital systems, bespoke corporate architectures, and production-grade micro-SaaS platforms optimized for conversion and scalability.",
    images: ["https://res.cloudinary.com/dbpdexty8/image/upload/v1783590720/IMG_20260709_151908_dbgkrv.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://venzorx.com/#organization",
        "name": "VenzorX",
        "url": "https://venzorx.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://venzorx.com/#logo",
          "url": "https://res.cloudinary.com/dbpdexty8/image/upload/v1783590720/IMG_20260709_151908_dbgkrv.png",
          "caption": "VenzorX Logo"
        },
        "image": {
          "@id": "https://venzorx.com/#logo"
        },
        "sameAs": [
          "https://instagram.com/venzorx.co",
          "https://www.linkedin.com/in/venzorx/",
          "https://x.com/VenzorrX"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@venzorx.com",
          "contactType": "customer support"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://venzorx.com/#website",
        "url": "https://venzorx.com",
        "name": "VenzorX",
        "description": "Bespoke digital architecture, corporate website systems, and high-performance micro-SaaS platforms built from scratch with Next.js.",
        "publisher": {
          "@id": "https://venzorx.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/images/3d_wolf_logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dbpdexty8/image/upload/v1783590720/IMG_20260709_151908_dbgkrv.png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","xnhndy6ry0");
          `}
        </Script>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <GoogleAnalytics gaId="G-VT5K3JHDLL" />
      </body>
    </html>
  );
}

