/**
 * EnhancedInput.tsx
 *
 * This component provides the main user input for the search page.
 *
 * Responsibilities:
 * - Accepts user input and uses findDemoSearchMatch to determine if a template should be loaded.
 * - Clears the input after processing a query param or template load.
 * - Interacts with DialogueArea to trigger template loading and state updates.
 * - Ensures consistent, robust input handling for both direct user entry and query param-driven flows.
 *
 * Usage:
 *   - Used in the search page below the dialogue area.
 *   - Shares matching logic with HeaderInput for consistency.
 *
 * See also:
 *   - src/data/demoSearches.ts
 *   - src/components/dialogue/DialogueArea.tsx
 *   - src/app/search/page.tsx
 */
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mic, AtSign, ArrowRight, FlaskConical } from "lucide-react";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import ContextChip, { FileType } from "@/components/common/ContextChip";

export interface EnhancedInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSend: () => void;
  mode?: 'search' | 'research';
  onModeChange?: (mode: 'search' | 'research') => void;
}

interface ServiceContextForChip {
  fileName: string; // Service name will go here
  fileType: FileType; // Using 'other' for services
}

export function EnhancedInput({
  value,
  onChange,
  onSend,
  mode = 'search',
  onModeChange,
}: EnhancedInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Internal state for context files
  const [contextFiles, setContextFiles] = React.useState<{ fileName: string; fileType: FileType }[]>([]);
  // New state for selected services
  const [selectedServices, setSelectedServices] = React.useState<ServiceContextForChip[]>([]);

  // Dropdown menu open state
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const { listening, isSupported, startListening, stopListening } = useSpeechRecognition((transcript) => {
    onChange({ target: { value: transcript } } as React.ChangeEvent<HTMLTextAreaElement>);
  });

  const handleVoiceClick = () => {
    if (!isSupported) {
      alert("Voice input is not supported in this browser.");
      return;
    }
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // File type inference helper
  function inferFileType(fileName: string): FileType {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return 'pdf';
    if (ext === 'doc' || ext === 'docx') return 'docx';
    if (ext === 'txt') return 'txt';
    if (["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"].includes(ext || '')) return 'image';
    return 'other';
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setContextFiles(prev => [
        ...prev,
        { fileName: file.name, fileType: inferFileType(file.name) }
      ]);
      setDropdownOpen(false); // Close dropdown after upload
    }
    // Reset input value so the same file can be uploaded again if needed
    e.target.value = '';
  };

  // Remove context file
  const handleRemoveContextFile = (idx: number) => {
    setContextFiles(prev => prev.filter((_, i) => i !== idx));
  };

  // Handle service selection
  const handleSelectService = (serviceName: string) => {
    if (!selectedServices.find(s => s.fileName === serviceName)) {
      setSelectedServices(prev => [...prev, { fileName: serviceName, fileType: 'service' }]);
    }
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Remove service context
  const handleRemoveService = (serviceName: string) => {
    setSelectedServices(prev => prev.filter(s => s.fileName !== serviceName));
  };

  // File input ref for triggering from dropdown
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div className="w-full max-w-none rounded-xl border bg-white shadow-sm px-4 py-3 flex flex-col gap-2 transition-colors border-zinc-200">
      {/* Context chips row */}
      {(contextFiles.length > 0 || selectedServices.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-1">
          {contextFiles.map((file, idx) => (
            <ContextChip
              key={`file-${file.fileName}-${idx}`}
              fileName={file.fileName}
              fileType={file.fileType}
              onRemove={() => handleRemoveContextFile(idx)}
            />
          ))}
          {selectedServices.map((service, idx) => (
            <ContextChip
              key={`service-${service.fileName}-${idx}`}
              fileName={service.fileName}
              fileType={service.fileType} // will be 'service'
              onRemove={() => handleRemoveService(service.fileName)}
            />
          ))}
        </div>
      )}
      {/* Top row: Auto-growing textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder="What would you like to know..."
        className="w-full border-none outline-none focus:ring-0 focus-visible:ring-0 shadow-none bg-transparent px-2 resize-none overflow-hidden text-base min-h-[40px] max-h-[180px] font-sans text-sm font-normal"
        aria-label="Enhanced input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={1}
        style={{ lineHeight: '1.5' }}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
      />
      {/* Persistent hidden file input for dropdown trigger */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileUpload}
      />
      {/* Bottom row: Tabs toggle and buttons */}
      <div className="flex items-center justify-between gap-2 mt-1">
        <Tabs value={mode} onValueChange={v => onModeChange?.(v as 'search' | 'research')}>
          <TabsList className="h-9 p-1 bg-zinc-100 rounded-full flex gap-1 border border-zinc-200">
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="search"
                  className={clsx(
                    "flex items-center gap-1 px-4 py-1.5 text-xs rounded-full font-medium transition-colors",
                    mode === "search"
                      ? "bg-black text-white shadow"
                      : "bg-transparent text-black hover:bg-zinc-200"
                  )}
                >
                  <Search className="w-4 h-4" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="w-64">
                <div>
                  <div className="font-bold">Search</div>
                  <div>Answers to your financial questions</div>
                  <div className="mt-2 text-xs text-green-700">
                    <span className="font-semibold">Upgrade to abc</span>
                    <br />
                    More personalized advisement blah blah
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="research"
                  className={clsx(
                    "flex items-center gap-1 px-4 py-1.5 text-xs rounded-full font-medium transition-colors",
                    mode === "research"
                      ? "bg-black text-white shadow"
                      : "bg-transparent text-black hover:bg-zinc-200"
                  )}
                >
                  <FlaskConical className="w-4 h-4" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="w-64">
                <div>
                  <div className="font-bold">Research</div>
                  <div>Advanced analysis on any topic and your data</div>
                  <div className="mt-2 text-xs text-green-700">
                    <span className="font-semibold">Upgrade to xyz</span>
                    <br />
                    Do more, get more, learn more
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          {/* Sources Button and Menu */}
          <DropdownMenu
            open={dropdownOpen}
            onOpenChange={setDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              {/* Trigger for Available Sources Menu */}
              <Button variant="outline" size="icon" className="p-2" aria-label="Open available sources menu">
                <AtSign className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            {/* Available Sources Menu Content */}
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onSelect={e => { e.preventDefault(); fileInputRef.current?.click(); }}>
                Upload a file
              </DropdownMenuItem>
              <DropdownMenuItem>Take a screenshot</DropdownMenuItem>
              <DropdownMenuItem>Set source URL</DropdownMenuItem>
              {/* New section for specific services - moved up */}
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onSelect={() => handleSelectService("NetBenefits")}
                disabled={!!selectedServices.find(s => s.fileName === "NetBenefits")}
              >
                NetBenefits
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleSelectService("HealthCare")}
                disabled={!!selectedServices.find(s => s.fileName === "HealthCare")}
              >
                HealthCare
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleSelectService("Stock Plan Services")}
                disabled={!!selectedServices.find(s => s.fileName === "Stock Plan Services")}
              >
                Stock Plan Services
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Add from Excel</DropdownMenuItem>
              <DropdownMenuItem>Add from Google Drive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={listening ? "default" : "outline"}
            size="icon"
            className={`p-2 ${listening ? "bg-green-500 text-white animate-pulse" : ""}`}
            onClick={handleVoiceClick}
            aria-label="Voice input"
          >
            <Mic className="w-5 h-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className={`p-2 transition-colors ${isFocused ? 'bg-black hover:bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'}`}
            onClick={onSend}
            aria-label="Send"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 