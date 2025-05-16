import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export type HeaderInputProps = {
  onSmartSuggestOpen: () => void;
  onOpenResearch?: () => void;
};

export function HeaderInput({ onSmartSuggestOpen, onOpenResearch }: HeaderInputProps) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value.trim()) {
      router.push(`/search?query=${encodeURIComponent(value.trim())}`);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full max-w-xl gap-2">
      <div className="relative flex-1 min-w-0">
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
          tabIndex={0}
          role="button"
          aria-label="Open Smart Suggest"
          onClick={value.trim() ? handleSearch : onSmartSuggestOpen}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (value.trim() ? handleSearch() : onSmartSuggestOpen())}
        >
          <Search className="w-5 h-5" />
        </span>
        <Input
          type="text"
          placeholder="What would you like to know…"
          className="pl-10"
          aria-label="Search input"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        type="button"
        onClick={onOpenResearch ? onOpenResearch : () => router.push('/research')}
        aria-label="Open Research View"
        className="p-2 rounded-md hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <img src="/sparkle.svg" alt="Sparkle" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default HeaderInput; 