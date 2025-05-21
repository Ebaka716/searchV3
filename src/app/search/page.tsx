'use client';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import BigTemplate from "@/components/templates/BigTemplate";
import SmallTemplate from "@/components/templates/SmallTemplate";
import AaplBigTemplate from "@/components/templates/AaplBigTemplate";

function SearchPageClient({ headerHeight = 0 }: { headerHeight?: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("search");
  const [dialogue, setDialogue] = useState<{ id: number; type: string; text?: string }[]>([]);
  const [dialogueId, setDialogueId] = useState(1);
  const greenRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [inputStyle, setInputStyle] = useState<{ left: number; width: number } | null>(null);
  const lastBigTemplateHeaderRef = useRef<HTMLDivElement>(null);
  const lastLoadingRef = useRef<HTMLDivElement>(null);

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
      { id, type: 'text', text: trimmed },
    ]);
    setDialogueId(id + 1);
    setValue("");
  };

  // Add Big Template and scroll to bottom
  const handleAddBigTemplate = () => {
    const loadingId = dialogueId;
    setDialogue(prev => [
      ...prev,
      { id: loadingId, type: 'loading' },
    ]);
    setDialogueId(loadingId + 1);
    setTimeout(() => {
      setDialogue(prev => prev.map(entry =>
        entry.id === loadingId
          ? { id: loadingId, type: '__BIG_TEMPLATE__' }
          : entry
      ));
    }, 1200);
  };

  // Add Small Template and scroll to bottom
  const handleAddSmallTemplate = () => {
    const loadingId = dialogueId;
    setDialogue(prev => [
      ...prev,
      { id: loadingId, type: 'loading' },
    ]);
    setDialogueId(loadingId + 1);
    setTimeout(() => {
      setDialogue(prev => prev.map(entry =>
        entry.id === loadingId
          ? { id: loadingId, type: '__SMALL_TEMPLATE__' }
          : entry
      ));
    }, 1200);
  };

  // Add AAPL Big Template and scroll to bottom
  const handleAddAaplBigTemplate = () => {
    const loadingId = dialogueId;
    setDialogue(prev => [
      ...prev,
      { id: loadingId, type: 'loading' },
    ]);
    setDialogueId(loadingId + 1);
    setTimeout(() => {
      setDialogue(prev => prev.map(entry =>
        entry.id === loadingId
          ? { id: loadingId, type: '__AAPL_BIG_TEMPLATE__' }
          : entry
      ));
    }, 1200);
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
    if (
      dialogue.length > 0 &&
      (
        dialogue[dialogue.length - 1].type === '__BIG_TEMPLATE__' ||
        dialogue[dialogue.length - 1].type === '__AAPL_BIG_TEMPLATE__'
      )
    ) {
      if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
        const headerOffset = lastBigTemplateHeaderRef.current.offsetTop;
        scrollAreaRef.current.scrollTo({ top: headerOffset - headerHeight, behavior: 'smooth' });
      }
    } else if (
      dialogue.length > 0 &&
      dialogue[dialogue.length - 1].type === 'loading'
    ) {
      if (lastLoadingRef.current && scrollAreaRef.current) {
        const loadingOffset = lastLoadingRef.current.offsetTop;
        scrollAreaRef.current.scrollTo({ top: loadingOffset - headerHeight, behavior: 'smooth' });
      }
    } else {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [dialogue, headerHeight]);

  return (
    <MainLayout headerVariant="short" leftSidebar={<AppSidebar />}>
      <div className="flex flex-col items-center h-full min-h-0 flex-1 bg-pink-50">
        <div id="mainscrollingarea" ref={greenRef} className="w-full h-full flex flex-col flex-1 bg-green-50 relative mt-2" style={{ minHeight: '100vh' }}>
          {/* Add Big Card and Clear Dialogue Buttons */}
          <div className="fixed bottom-36 left-0 w-full z-30 flex justify-center pointer-events-none">
            <div className="pointer-events-auto w-full max-w-[784px] mx-auto flex gap-4 px-8">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={handleAddBigTemplate}
              >
                Add Big Template
              </button>
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={handleAddSmallTemplate}
              >
                Add Small Template
              </button>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={handleAddAaplBigTemplate}
              >
                Add AAPL Big Template
              </button>
              <button
                className="bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded px-6 py-3 text-lg font-bold shadow transition mb-2"
                onClick={() => setDialogue([])}
              >
                Clear Dialogue
              </button>
            </div>
          </div>
          {/* Scrollable content area */}
          <div
            ref={scrollAreaRef}
            className="overflow-y-auto h-full w-full pb-32"
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
            <div className="max-w-[784px] mx-auto w-full px-8">
              <div style={{ height: 24 }} />
              {dialogue.length === 0 ? (
                <div className="text-zinc-400 text-center mt-12">No dialogue yet. Start by entering a query below.</div>
              ) : (
                dialogue.map((entry, idx) => (
                  entry.type === 'loading' ? (
                    <div
                      key={entry.id}
                      ref={idx === dialogue.length - 1 ? lastLoadingRef : undefined}
                      className="flex justify-center py-8"
                    >
                      <LoadingSpinner text="Thinking..." />
                    </div>
                  ) : entry.type === '__BIG_TEMPLATE__' ? (
                    <BigTemplate
                      key={entry.id}
                      headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                    />
                  ) : entry.type === '__AAPL_BIG_TEMPLATE__' ? (
                    <AaplBigTemplate
                      key={entry.id}
                      headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                    />
                  ) : entry.type === '__SMALL_TEMPLATE__' ? (
                    <SmallTemplate
                      key={entry.id}
                      headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                    />
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
            </div>
            <style jsx>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
          {/* Fixed input bar at the bottom, centered and sized to green area */}
          <div className="fixed bottom-0 left-0 w-full z-30 pointer-events-none pb-4">
            <div className="pointer-events-auto w-full max-w-[784px] mx-auto px-8">
              <EnhancedInput
                value={value}
                onChange={e => setValue(e.target.value)}
                onSend={handleSend}
                mode={mode}
                onModeChange={handleModeChange}
              />
            </div>
          </div>
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