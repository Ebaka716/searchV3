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

export interface EnhancedInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSend: () => void;
  mode?: 'search' | 'research';
  onModeChange?: (mode: 'search' | 'research') => void;
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

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div
      className={`w-full max-w-2xl rounded-xl border bg-white shadow-sm px-4 py-3 flex flex-col gap-2 transition-colors ${isFocused ? 'border-black' : 'border-zinc-200'}`}
    >
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
      {/* Bottom row: Tabs toggle and buttons */}
      <div className="flex items-center justify-between gap-2 mt-1">
        <Tabs value={mode} onValueChange={v => onModeChange?.(v as 'search' | 'research')}>
          <TabsList className="h-8 p-1 bg-muted rounded-lg">
            <TabsTrigger value="search" className="flex items-center gap-1 px-2 py-1 text-xs">
              <Search className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-1 px-2 py-1 text-xs">
              <FlaskConical className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="p-2" aria-label="Open context menu">
                <AtSign className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Upload a file</DropdownMenuItem>
              <DropdownMenuItem>Take a screenshot</DropdownMenuItem>
              <DropdownMenuItem>Set source URL</DropdownMenuItem>
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