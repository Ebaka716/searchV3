"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import AaplSmallTemplate from "../templates/AaplSmallTemplate";
import AaplMediumTemplate from "../templates/AaplMediumTemplate";
import AaplLargeTemplate from "../templates/AaplLargeTemplate";
import { findDemoSearchMatch } from "@/data/demoSearches";

/**
 * DialogueArea.tsx
 *
 * This component encapsulates the chat-like scroll area for the search page.
 *
 * Responsibilities:
 * - Loads the correct template based on user input or the `query` query param (using findDemoSearchMatch).
 * - Handles the `reset` query param to force a blank state (used by the sidebar's New Search button).
 * - Uses refs and effects to keep new dialogue entries visible and to guard against double-processing (e.g., React double-mounts).
 * - Ensures only one template is loaded per query param, robust against React quirks.
 *
 * Usage:
 *   - Used in the search page as the main dialogue/chat area.
 *   - Interacts with EnhancedInput and HeaderInput for template loading.
 *
 * See also:
 *   - src/data/demoSearches.ts
 *   - src/components/input/EnhancedInput.tsx
 *   - src/app/search/page.tsx
 */
export default function DialogueArea({ headerHeight = 0 }: { headerHeight?: number }) {
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("search");
  const [dialogue, setDialogue] = useState<{ id: number; type: string; text?: string; query?: string }[]>([]);
  const dialogueIdRef = useRef(1);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const lastBigTemplateHeaderRef = useRef<HTMLDivElement>(null);
  const lastLoadingRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const hasHandledQueryParamRef = useRef(false);
  const [readyForInput, setReadyForInput] = useState(false);
  const router = useRouter();

  const getNextDialogueId = () => dialogueIdRef.current++;

  // On mount or when query param changes, trigger template if query is present and dialogue is empty
  useEffect(() => {
    if (hasHandledQueryParamRef.current) return;
    const query = searchParams.get("query") || "";
    if (query && dialogue.length === 0) {
      const trimmed = query.trim();
      const match = findDemoSearchMatch(trimmed);
      if (
        match &&
        match.type === 'ticker' &&
        (match.query.toLowerCase().includes('aapl') ||
          match.aliases.some(alias => alias.toLowerCase().includes('aapl')))
      ) {
        // Add the correct AAPL template based on size
        const id = getNextDialogueId();
        setDialogue(prev => [
          ...prev,
          { id, type: 'loading' },
        ]);
        setTimeout(() => {
          setDialogue(prev => prev.map(entry =>
            entry.id === id
              ? { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
              : entry
          ));
          setReadyForInput(true);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // Fallback: add as plain text
      const id = getNextDialogueId();
      setDialogue(prev => [
        ...prev,
        { id, type: 'text', text: trimmed },
      ]);
      hasHandledQueryParamRef.current = true;
      setValue("");
      setReadyForInput(true);
    } else if (!query) {
      setReadyForInput(true);
    }
  }, [searchParams, dialogue.length]);

  // Reset dialogue and input when the 'reset' query param changes
  useEffect(() => {
    const resetParam = searchParams.get("reset");
    if (resetParam) {
      setDialogue([]);
      setValue("");
      setReadyForInput(true);
      hasHandledQueryParamRef.current = false; // allow query param logic to run again if needed
    }
  }, [searchParams.get("reset")]);

  // Handle EnhancedInput send (only user input, never pre-filled)
  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const match = findDemoSearchMatch(trimmed);
    if (
      match &&
      match.type === 'ticker' &&
      (match.query.toLowerCase().includes('aapl') ||
        match.aliases.some(alias => alias.toLowerCase().includes('aapl')))
    ) {
      const id = getNextDialogueId();
      setDialogue(prev => [
        ...prev,
        { id, type: 'loading' },
      ]);
      setTimeout(() => {
        setDialogue(prev => prev.map(entry =>
          entry.id === id
            ? { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
            : entry
        ));
      }, 1200);
      setValue("");
      return;
    }
    // Fallback: add as plain text
    const id = getNextDialogueId();
    setDialogue(prev => [
      ...prev,
      { id, type: 'text', text: trimmed },
    ]);
    setValue("");
  };

  // Scroll behavior for chat/results area
  useEffect(() => {
    if (dialogue.length > 0) {
      // If loading, scroll loading spinner just into view
      if (dialogue[dialogue.length - 1].type === 'loading') {
        if (lastLoadingRef.current && scrollAreaRef.current) {
          const loadingRect = lastLoadingRef.current.getBoundingClientRect();
          const scrollRect = scrollAreaRef.current.getBoundingClientRect();
          const offset = loadingRect.top - scrollRect.top;
          scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollTop + offset, behavior: 'smooth' });
        }
      // If template, scroll header to top
      } else if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
        const headerRect = lastBigTemplateHeaderRef.current.getBoundingClientRect();
        const scrollRect = scrollAreaRef.current.getBoundingClientRect();
        const offset = headerRect.top - scrollRect.top;
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollTop + offset, behavior: 'smooth' });
      } else if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [dialogue, headerHeight]);

  // Add a handler that updates mode and navigates
  const handleModeChange = (newMode: 'search' | 'research') => {
    setMode(newMode);
    if (newMode === 'research') {
      router.push('/research');
    } else {
      router.push('/search');
    }
  };

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-green-50 relative" style={{ minHeight: '100vh' }}>
      {/* Scrollable content area */}
      <div
        ref={scrollAreaRef}
        className="overflow-y-auto h-full w-full pb-48"
        style={{}}
      >
        <div className="max-w-[984px] mx-auto w-full px-8">
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
              ) : entry.type === '__AAPL_SMALL_TEMPLATE__' ? (
                <AaplSmallTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__AAPL_MEDIUM_TEMPLATE__' ? (
                <AaplMediumTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__AAPL_LARGE_TEMPLATE__' ? (
                <AaplLargeTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : (
                <div
                  key={entry.id}
                  className={
                    entry.text === 'This is a BIG CARD!'
                      ? "p-10 border-4 border-blue-500 bg-blue-100 text-blue-900 rounded-2xl shadow-lg text-2xl font-extrabold flex items-center justify-center mb-8"
                      : "p-4 border-b last:border-b-0 text-zinc-700 bg-white rounded-lg shadow-sm mb-6"
                  }
                >
                  {entry.text}
                </div>
              )
            ))
          )}
        </div>
      </div>
      {/* Fixed input bar at the bottom, centered and sized to green area */}
      {readyForInput && (
        <div className="fixed bottom-0 left-0 w-full z-30 pointer-events-none pb-4">
          <div className="pointer-events-auto w-full max-w-[884px] mx-auto px-8">
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
  );
} 