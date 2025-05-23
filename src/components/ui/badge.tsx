import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "destructive" | "warning";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", className = "", ...props }) => {
  const base = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border";
  const variants = {
    default: "bg-zinc-100 text-zinc-700 border-zinc-200",
    destructive: "bg-red-100 text-red-700 border-red-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };
  return (
    <span
      className={`${base} ${variants[variant] || variants.default} ${className}`.trim()}
      {...props}
    />
  );
}; 