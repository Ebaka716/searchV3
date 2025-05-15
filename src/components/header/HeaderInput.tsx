import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import React from "react";

export type HeaderInputProps = {
  onSmartSuggestOpen: () => void;
  onOpenResearch: () => void;
};

export function HeaderInput({ onSmartSuggestOpen, onOpenResearch }: HeaderInputProps) {
  return (
    <div className="flex items-center w-full max-w-xl gap-2">
      <div className="relative flex-1 min-w-0">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer" tabIndex={0} role="button" aria-label="Open Smart Suggest" onClick={onSmartSuggestOpen} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onSmartSuggestOpen()}>
          <Search className="w-5 h-5" />
        </span>
        <Input
          type="text"
          placeholder="What would you like to know…"
          className="pl-10"
          aria-label="Search input"
        />
      </div>
      <button
        type="button"
        onClick={onOpenResearch}
        aria-label="Open Research View"
        className="p-2 rounded-md hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Sparkles className="w-5 h-5" />
      </button>
    </div>
  );
}

export default HeaderInput; 