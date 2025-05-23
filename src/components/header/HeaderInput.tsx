import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { findDemoSearchMatch } from "@/data/demoSearches";

export type HeaderInputProps = {
  onSmartSuggestOpen: () => void;
  onOpenResearch?: () => void;
};

export function HeaderInput({ onSmartSuggestOpen, onOpenResearch }: HeaderInputProps) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value.trim()) {
      // Try to match the input to a demo search
      const match = findDemoSearchMatch(value.trim());
      if (match && match.type === 'ticker' && match.query.toLowerCase().includes('aapl')) {
        // Route to /search with the matched query
        router.push(`/search?query=${encodeURIComponent(match.query)}`);
        setValue("");
        return;
      }
      // Fallback: route to /search with the entered value
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
          onFocus={onSmartSuggestOpen}
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        type="button"
        onClick={onOpenResearch ? onOpenResearch : () => router.push('/research')}
        aria-label="Open Research View"
        className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-white hover:bg-zinc-100 text-foreground"
      >
        <Image src="/sparkle.svg" alt="Sparkle" width={20} height={20} />
      </Button>
    </div>
  );
}

export default HeaderInput; 