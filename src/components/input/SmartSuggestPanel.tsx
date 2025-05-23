"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { demoSearches, DemoSearch } from '@/data/demoSearches';
import { FileText, FileVideo, FileVolume, FileSymlink } from 'lucide-react';

interface SmartSuggestPanelProps {
  isOpen: boolean;
  onClose: () => void;
  top: number;
  className?: string;
}

// Data for default cards
interface DefaultCardItem {
  label: string;
}
interface DefaultCardData {
  title: string;
  items: DefaultCardItem[];
}

const defaultPanelCards: DefaultCardData[] = [
  {
    title: "Popular quotes",
    items: [
      { label: "NVDA" }, { label: "LCID" }, { label: "LLY" }, { label: "AMZN" }, { label: "PG" },
    ],
  },
  {
    title: "Popular searches",
    items: [
      { label: "Open a brokerage account" },
      { label: "Stock trade fees" },
      { label: "Margin account requirements" },
      { label: "Transfer assets to [Brokerage]" },
      { label: "Research stocks" },
    ],
  },
  {
    title: "Recent searches",
    items: [
      { label: "How do I fund my new account?" },
      { label: "What are the risks of margin trading?" },
      { label: "Compare ETFs vs mutual funds" },
      { label: "Can I trade options in my IRA?" },
      { label: "Where can I find tax documents?" },
    ],
  },
];

export function SmartSuggestPanel({ isOpen, onClose, top, className }: SmartSuggestPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setInputValue("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={panelRef}
      className={cn(
        "fixed left-0 right-0 bg-white border-t border-b shadow-lg p-6 z-50",
        "min-h-[200px]",
        className
      )}
      style={{ top: `${top}px` }}
      data-testid="smart-suggest-panel"
    >
      <h3 className="text-lg font-medium mb-4">Search, chat, discover</h3>
      <Command className="rounded-lg border shadow-sm mb-6">
        <CommandInput 
          placeholder="What would you like to know?" 
          value={inputValue} 
          onValueChange={setInputValue} 
        />
        {inputValue && (
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <div className="flex min-h-[200px]">
              <div className="w-3/5 pr-4 border-r">
                <CommandGroup heading="Suggestions">
                  {demoSearches.map((search: DemoSearch) => (
                    <CommandItem 
                      key={search.query} 
                      value={search.query} 
                      onSelect={() => {
                        console.log("Selected:", search.query);
                        setInputValue(search.query);
                      }}
                    >
                      {search.query} 
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup heading="Resources">
                  <CommandItem onSelect={() => console.log('Resource: Document 1')}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Document Title 1</span>
                  </CommandItem>
                  <CommandItem onSelect={() => console.log('Resource: Video 1')}>
                    <FileVideo className="mr-2 h-4 w-4" />
                    <span>Video Title 1</span>
                  </CommandItem>
                  <CommandItem onSelect={() => console.log('Resource: Podcast 1')}>
                    <FileVolume className="mr-2 h-4 w-4" />
                    <span>Podcast Episode 1</span>
                  </CommandItem>
                  <CommandItem onSelect={() => console.log('Resource: Site Page 1')}>
                    <FileSymlink className="mr-2 h-4 w-4" />
                    <span>Helpful Site Page</span>
                  </CommandItem>
                </CommandGroup>
              </div>
              <div className="w-2/5 pl-4">
                {/* Answer content will go here. For now, a placeholder. */}
                {/* This div ensures the space is reserved. Content might be conditional. */}
                {/* <p className="text-sm text-muted-foreground">Answer will appear here.</p> */}
              </div>
            </div>
          </CommandList>
        )}
      </Command>

      {!inputValue && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {defaultPanelCards.map((cardData) => (
            <Card key={cardData.title} className="gap-2">
              <CardHeader className="px-4">
                <CardTitle className="text-base font-semibold">{cardData.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <ul className="space-y-1">
                  {cardData.items.map((item) => (
                    <li key={item.label} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                      {item.label}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {/* Further content for the panel will go here based on ss_panel.txt */}
    </div>
  );
}

export default SmartSuggestPanel; 