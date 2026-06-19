import React from 'react';

export function Badge({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
