import React from "react";

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`shrink-0 bg-zinc-200 h-[1px] w-full ${className || ""}`}
      {...props}
    />
  );
}
