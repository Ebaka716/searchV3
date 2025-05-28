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
import { demoSearches, DemoSearch, ResourceItem, findDemoSearchMatch } from '@/data/demoSearches';
import { FileText, FileVideo, FileVolume, FileSymlink, X as XIcon, Lightbulb, Info } from 'lucide-react';
import { useRouter } from "next/navigation";

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
  type?: 'default' | 'notices'; // Added to distinguish card types
}

const defaultPanelCards: DefaultCardData[] = [
  {
    title: "Popular searches",
    items: [
      { label: "Open a brokerage account" },
      { label: "Stock trade fees" },
      { label: "Margin account requirements" },
      { label: "Transfer assets to [Brokerage]" },
      { label: "Research stocks" },
    ],
    type: 'default',
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
    type: 'default',
  },
  {
    title: "Notices",
    items: [
      // Placeholder items, will be replaced by custom rendering logic
      { label: "Did you know? (2)" }, 
      { label: "Insights (5)" }
    ],
    type: 'notices', // Special type for the new card
  },
];

// For broad suggestions list (uses .includes())
function findAllMatchingDemoSearches(input: string): DemoSearch[] {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return [];
  return demoSearches.filter(entry =>
    entry.query.toLowerCase().includes(normalized) ||
    entry.aliases.some(alias => alias.toLowerCase().includes(normalized))
  );
}

// Comment out or remove findBestPrefixMatchForResources and findExactDemoSearchMatch
/*
function findBestPrefixMatchForResources(input: string): DemoSearch | undefined { ... }
function findExactDemoSearchMatch(input: string): DemoSearch | undefined { ... }
*/

function getSuggestionMatches(input: string): { label: string; value: string; entry: DemoSearch }[] {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return [];
  const matches: { label: string; value: string; entry: DemoSearch }[] = [];
  for (const entry of demoSearches) {
    // Exact alias match
    for (const alias of entry.aliases) {
      if (alias.toLowerCase() === normalized) {
        matches.push({ label: alias, value: alias, entry });
        break;
      }
    }
    // Substring match in alias
    for (const alias of entry.aliases) {
      if (alias.toLowerCase().includes(normalized) && !matches.find(m => m.value === alias)) {
        matches.push({ label: alias, value: alias, entry });
        if (matches.length >= 5) return matches.slice(0, 5);
      }
    }
    // Substring match in query
    if (entry.query.toLowerCase().includes(normalized) && !matches.find(m => m.value === entry.query)) {
      matches.push({ label: entry.query, value: entry.query, entry });
      if (matches.length >= 5) return matches.slice(0, 5);
    }
    if (matches.length >= 5) return matches.slice(0, 5);
  }
  return matches.slice(0, 5);
}

export function SmartSuggestPanel({ isOpen, onClose, top, className }: SmartSuggestPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [exactMatchAnswer, setExactMatchAnswer] = useState<React.ReactNode | null>(null);
  const router = useRouter();

  // Custom filter for CMDK
  const customFilter = (itemValue: string, searchValue: string): number => {
    if (itemValue.startsWith("resource_item:")) {
      return 1; // Always show resource items
    }
    // Default filtering for other items (e.g., suggestions)
    // Show if search is not empty and item value includes search value
    if (!searchValue) return 0; // Don't show anything if search is empty (matches cmdk default for items without alwaysRender)
    return itemValue.toLowerCase().includes(searchValue.toLowerCase()) ? 1 : 0;
  };

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
      setExactMatchAnswer(null);
    } else {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (inputValue) {
      const match = findDemoSearchMatch(inputValue);
      if (match && typeof match.answer !== 'string') {
        setExactMatchAnswer(match.answer);
      } else {
        setExactMatchAnswer(null);
      }
    } else {
      setExactMatchAnswer(null);
    }
  }, [inputValue]);

  // Handler to trigger navigation to search page with query
  const handleSelectQuery = (query: string) => {
    router.push(`/search?query=${encodeURIComponent(query)}`);
    onClose();
  };

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
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Search, chat, discover</h3>
        <button 
          onClick={onClose} 
          className="p-1 rounded-md hover:bg-gray-100" 
          aria-label="Close panel"
        >
          <XIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <Command filter={customFilter} className="rounded-lg border shadow-sm mb-6">
        <CommandInput 
          ref={inputRef}
          placeholder="What would you like to know?" 
          value={inputValue} 
          onValueChange={setInputValue} 
          onKeyDown={e => {
            if (e.key === 'Enter' && inputValue.trim()) {
              handleSelectQuery(inputValue.trim());
            }
          }}
        />
        {inputValue && (() => {
          const suggestionMatches = getSuggestionMatches(inputValue);
          const matchingSearches = findAllMatchingDemoSearches(inputValue);
          return (
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <div className="flex min-h-[200px]">
                <div className="w-3/5 pr-4">
                  <CommandGroup heading="Suggestions">
                    {suggestionMatches.map((match, idx) => (
                      <CommandItem
                        key={match.value + '-' + idx}
                        value={match.value}
                        onSelect={() => handleSelectQuery(match.value)}
                      >
                        {match.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandGroup heading="Resources">
                    {(() => {
                      const allResourceArrays = matchingSearches.map(search => search.resources || []);
                      const flattenedResources = allResourceArrays.flat();
                      
                      const uniqueResourcesMap = new Map<string, ResourceItem>();
                      flattenedResources.forEach(resource => {
                        if (!uniqueResourcesMap.has(resource.id)) {
                          uniqueResourcesMap.set(resource.id, resource);
                        }
                      });
                      const allResourcesFromMatches = Array.from(uniqueResourcesMap.values());

                      if (allResourcesFromMatches.length > 0) {
                        return allResourcesFromMatches.map(resource => {
                          let Icon = FileText;
                          if (resource.iconType === 'video') Icon = FileVideo;
                          else if (resource.iconType === 'podcast') Icon = FileVolume;
                          else if (resource.iconType === 'sitePage') Icon = FileSymlink;
                          return (
                            <CommandItem 
                              key={resource.id} 
                              value={`resource_item:${resource.id}`}
                              onSelect={() => console.log('Selected Resource:', resource.label)}
                            >
                              <Icon className="mr-2 h-4 w-4" />
                              <span>{resource.label}</span>
                            </CommandItem>
                          );
                        });
                      } else {
                        return <CommandItem disabled className="text-muted-foreground text-sm">No resources found for these suggestions.</CommandItem>;
                      }
                    })()}
                  </CommandGroup>
                </div>
                <div className="w-2/5 pl-4 pt-4">
                  {exactMatchAnswer}
                </div>
              </div>
            </CommandList>
          );
        })()}
      </Command>

      {!inputValue && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {defaultPanelCards.map((cardData) => (
            <Card key={cardData.title} className="gap-2">
              <CardHeader className="px-4">
                <CardTitle className="text-base font-semibold">{cardData.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                {cardData.type === 'notices' ? (
                  // Custom rendering for Notices card
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-md bg-blue-50 border-blue-200">
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="bg-blue-700 rounded-full p-1.5">
                            <Lightbulb className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-blue-700">Did you know?</h4>
                          <p className="text-xs text-blue-600">Helpful features to get the most from your assistant.</p>
                        </div>
                      </div>
                      <span className="text-xl font-bold text-blue-700">2</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md bg-orange-50 border-orange-200">
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="bg-orange-700 rounded-full p-1.5">
                            <Info className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-orange-700">Insights</h4>
                          <p className="text-xs text-orange-600">Summaries and trends from your account activities.</p>
                        </div>
                      </div>
                      <span className="text-xl font-bold text-orange-700">5</span>
                    </div>
                  </div>
                ) : (
                  // Default rendering for other cards
                  <ul className="space-y-1">
                    {cardData.items.map((item) => (
                      <li key={item.label} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                        {item.label}
                      </li>
                    ))}
                  </ul>
                )}
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