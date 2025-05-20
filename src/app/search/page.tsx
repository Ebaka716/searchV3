'use client';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useState, useEffect, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { demoSearches, DemoSearch } from "@/data/demoSearches";
import { TickerAnswerTemplate } from "@/components/templates/TickerAnswerTemplate";
import { TermAnswerTemplate } from "@/components/templates/TermAnswerTemplate";
import { QuestionAnswerTemplate } from "@/components/templates/QuestionAnswerTemplate";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { GeneralResultTemplate } from "@/components/templates/GeneralResultTemplate";

function SearchPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("search");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DemoSearch | null>(null);
  const [dialogue, setDialogue] = useState<{
    id: number;
    query: string;
    loading: boolean;
    result: DemoSearch | null;
  }[]>([]);
  const [dialogueId, setDialogueId] = useState(1);
  const greenRef = useRef<HTMLDivElement>(null);
  const [inputStyle, setInputStyle] = useState<{ left: number; width: number } | null>(null);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      setLoading(true);
      setResult(null);
      // Simulate async search
      const timeout = setTimeout(() => {
        // Find a match in demoSearches (by query or alias)
        const match = demoSearches.find(item =>
          item.query.toLowerCase() === query.toLowerCase() ||
          item.aliases.some(alias => alias.toLowerCase() === query.toLowerCase())
        );
        setResult(match || null);
        setLoading(false);
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
    setDialogueId(id + 1);
    setDialogue(prev => [
      { id, query: trimmed, loading: true, result: null },
      ...prev
    ]);
    setValue("");
    setTimeout(() => {
      const match = demoSearches.find(item =>
        item.query.toLowerCase() === trimmed.toLowerCase() ||
        item.aliases.some(alias => alias.toLowerCase() === trimmed.toLowerCase())
      );
      setDialogue(prev => prev.map(d =>
        d.id === id ? { ...d, loading: false, result: match || null } : d
      ));
    }, 900);
  };

  // Render dialogue entries
  const renderDialogue = () => (
    <div className="w-full max-w-2xl flex flex-col-reverse gap-4 mt-8 border rounded-lg bg-white overflow-y-auto" style={{ height: 350 }}>
      {dialogue.map(entry => (
        <div key={entry.id} className="w-full flex flex-col items-center">
          <div className="w-full text-left font-medium text-zinc-800 mb-1">{entry.query}</div>
          {entry.loading ? (
            <LoadingSpinner text="Searching..." />
          ) : entry.result ? (
            entry.result.type === 'ticker' ? (
              <TickerAnswerTemplate query={entry.result.query} answer={entry.result.answer} size={entry.result.size} />
            ) : entry.result.type === 'term' ? (
              <TermAnswerTemplate query={entry.result.query} answer={entry.result.answer} size={entry.result.size} />
            ) : entry.result.type === 'question' ? (
              <QuestionAnswerTemplate query={entry.result.query} answer={entry.result.answer} size={entry.result.size} />
            ) : null
          ) : (
            <div className="text-zinc-500">No results found</div>
          )}
        </div>
      ))}
    </div>
  );

  // Choose template based on result type
  let answerTemplate = null;
  if (result) {
    if (result.type === 'ticker') {
      answerTemplate = <TickerAnswerTemplate query={result.query} answer={result.answer} size={result.size} />;
    } else if (result.type === 'term') {
      answerTemplate = <TermAnswerTemplate query={result.query} answer={result.answer} size={result.size} />;
    } else if (result.type === 'question') {
      answerTemplate = <QuestionAnswerTemplate query={result.query} answer={result.answer} size={result.size} />;
    }
  }

  return (
    <MainLayout headerVariant="short" leftSidebar={<AppSidebar />}>
      <div className="flex flex-col items-center h-full min-h-0 flex-1 bg-pink-50">
        <div ref={greenRef} className="max-w-[784px] mx-auto w-full h-full flex flex-col flex-1 bg-green-50 relative" style={{ minHeight: '100vh' }}>
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-8 pt-16 pb-32" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="p-4 border-b last:border-b-0 text-zinc-700 bg-white rounded-lg shadow-sm">Dialogue entry {i + 1}</div>
            ))}
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
      <SearchPageClient />
    </Suspense>
  );
}

