import React from "react";

export function LoadingSpinner({ text }: { text?: string }) {
  return (
    <div className="flex items-center justify-center w-full h-24">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-400" />
      {text && <span className="ml-4 text-zinc-500">{text}</span>}
    </div>
  );
}

export default LoadingSpinner; 