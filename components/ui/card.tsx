import React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm ${className || ""}`}
      {...props}
    />
  );
}
