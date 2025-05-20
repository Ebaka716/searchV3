'use client';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/common/LoadingSpinner";

function SearchPageClient({ headerHeight = 0 }: { headerHeight?: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("search");
  const [dialogue, setDialogue] = useState<{ id: number; text: string }[]>([]);
  const [dialogueId, setDialogueId] = useState(1);
  const greenRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [inputStyle, setInputStyle] = useState<{ left: number; width: number } | null>(null);
  const lastBigTemplateHeaderRef = useRef<HTMLDivElement>(null);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      // Simulate async search
      const timeout = setTimeout(() => {
        // (No-op: match logic removed for clean build)
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [query]);

  useEffect(() => {
    function updateInputPosition() {
      if (greenRef.current) {
        const rect = greenRef.current.getBoundingClientRect();
        setInputStyle({ left: rect.left, width: rect.width });
      }
    }
    updateInputPosition();
    window.addEventListener("resize", updateInputPosition);
    return () => window.removeEventListener("resize", updateInputPosition);
  }, []);

  const handleModeChange = (newMode: 'search' | 'research') => {
    setMode(newMode);
    if (newMode === 'research') {
      router.push('/research');
    } else {
      router.push('/search');
    }
  };

  // Handle EnhancedInput send
  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const id = dialogueId;
    setDialogue(prev => [
      ...prev,
      { id, text: trimmed },
    ]);
    setDialogueId(id + 1);
    setValue("");
  };

  // Add Big Template and scroll to bottom
  const handleAddBigTemplate = () => {
    setDialogue(prev => [
      ...prev,
      { id: dialogueId, text: '__BIG_TEMPLATE__' },
    ]);
    setDialogueId(dialogueId + 1);
  };

  /**
   * Scroll behavior for chat/results area:
   * - When a new entry is added, scroll to the bottom (chat-like behavior).
   * - When a new big template is added, scroll so its header appears just below the fixed main page header.
   *
   * This is achieved by:
   *   - Attaching a ref to the header section of the most recent big template entry.
   *   - When a new big template is added, set the scroll area's scrollTop to the header's offsetTop minus the header height (64px).
   *   - This ensures the heading is always fully visible and not hidden behind the fixed header.
   */
  useEffect(() => {
    // If the last entry is a big template, scroll to its header
    if (dialogue.length > 0 && dialogue[dialogue.length - 1].text === '__BIG_TEMPLATE__') {
      if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
        // Get the vertical offset of the header within the scroll area
        const headerOffset = lastBigTemplateHeaderRef.current.offsetTop;
        // Scroll so the header is just below the fixed main page header (64px)
        scrollAreaRef.current.scrollTo({ top: headerOffset - 64, behavior: 'smooth' });
      }
    } else {
      // Otherwise, scroll to bottom as usual (for chat-like UX)
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [dialogue]);

  return (
    <MainLayout headerVariant="short" leftSidebar={<AppSidebar />}>
      <div className="flex flex-col items-center h-full min-h-0 flex-1 bg-pink-50">
        <div id="mainscrollingarea" ref={greenRef} className="max-w-[784px] mx-auto w-full h-full flex flex-col flex-1 bg-green-50 relative" style={{ minHeight: '100vh', marginTop: 24 }}>
          {/* Add Big Card and Clear Dialogue Buttons */}
          {inputStyle && (
            <div
              className="fixed bottom-36 z-30 max-w-[784px] flex justify-end w-full gap-4"
              style={{
                left: inputStyle.left,
                width: inputStyle.width,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={handleAddBigTemplate}
              >
                Add Big Template
              </button>
              <button
                className="bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={() => setDialogue([])}
              >
                Clear Dialogue
              </button>
            </div>
          )}
          {/* Scrollable content area */}
          <div
            ref={scrollAreaRef}
            className="overflow-y-auto px-8 pb-32"
            style={{
              position: 'absolute',
              top: headerHeight,
              left: 0,
              right: 0,
              bottom: 0,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {dialogue.length === 0 ? (
              <div className="text-zinc-400 text-center mt-12">No dialogue yet. Start by entering a query below.</div>
            ) : (
              dialogue.map((entry, idx) => (
                entry.text === '__BIG_TEMPLATE__' ? (
                  <div
                    key={entry.id}
                    className="w-full flex flex-col gap-6 mb-6"
                  >
                    {/* Header Section (inside template)
                        - Attach a ref to the header of the most recent big template entry
                        - Used for scroll alignment below the fixed header */}
                    <div
                      ref={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                      className="w-full p-0 mb-2 flex flex-col gap-2"
                    >
                      <div className="text-2xl font-bold text-zinc-900">Results for your query</div>
                      <div className="text-zinc-600 text-base">Here are the most relevant results based on your search and context. This preamble explains why you are seeing these results.</div>
                      {/* Optional thinking section */}
                      {true && (
                        <div className="mt-2 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
                          <span className="font-semibold">Thinking:</span> This is a placeholder for the model&apos;s reasoning or process. (Optional)
                        </div>
                      )}
                    </div>
                    {/* Row 1: 2/3 and 1/3 cards */}
                    <div className="flex w-full gap-6">
                      <div className="flex-2 basis-2/3 bg-blue-200 border-4 border-blue-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-xl font-extrabold text-blue-900 min-h-[120px]">
                        Card 1 (2/3)
                      </div>
                      <div className="flex-1 basis-1/3 bg-green-200 border-4 border-green-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-green-900 min-h-[120px]">
                        Card 2 (1/3)
                      </div>
                    </div>
                    {/* Row 2: Big card full width */}
                    <div className="w-full bg-purple-200 border-4 border-purple-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-2xl font-extrabold text-purple-900 min-h-[120px]">
                      Big Card (Full Width)
                    </div>
                    {/* Row 3: Two cards, 1/2 width each */}
                    <div className="flex w-full gap-6">
                      <div className="flex-1 basis-1/2 bg-yellow-200 border-4 border-yellow-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-yellow-900 min-h-[120px]">
                        Card 3 (1/2)
                      </div>
                      <div className="flex-1 basis-1/2 bg-pink-200 border-4 border-pink-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-pink-900 min-h-[120px]">
                        Card 4 (1/2)
                      </div>
                    </div>
                    {/* Row 4: Big card full width */}
                    <div className="w-full bg-indigo-200 border-4 border-indigo-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-2xl font-extrabold text-indigo-900 min-h-[120px]">
                      Big Card (Full Width)
                    </div>
                  </div>
                ) : (
                  <div
                    key={entry.id}
                    className={
                      entry.text === 'This is a BIG CARD!'
                        ? "p-10 border-4 border-blue-500 bg-blue-100 text-blue-900 rounded-2xl shadow-lg text-2xl font-extrabold flex items-center justify-center mb-4"
                        : "p-4 border-b last:border-b-0 text-zinc-700 bg-white rounded-lg shadow-sm mb-2"
                    }
                  >
                    {entry.text}
                  </div>
                )
              ))
            )}
            <style jsx>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
          {/* Fixed input bar at the bottom, centered and sized to green area */}
          {inputStyle && (
            <div
              className="fixed bottom-0 z-30 pointer-events-none max-w-[784px]"
              style={{
                left: inputStyle.left,
                width: inputStyle.width,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 16,
              }}
            >
              <div className="pointer-events-auto w-full">
                <EnhancedInput
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  onSend={handleSend}
                  mode={mode}
                  onModeChange={handleModeChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="w-full flex justify-center pt-16"><LoadingSpinner text="Loading search..." /></div>}>
      {/* headerHeight will be injected by MainLayout via React.cloneElement */}
      <SearchPageClient />
    </Suspense>
  );
}