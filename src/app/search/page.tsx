'use client';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { demoSearches } from "@/data/demoSearches";
import { TickerAnswerTemplate } from "@/components/templates/TickerAnswerTemplate";
import { TermAnswerTemplate } from "@/components/templates/TermAnswerTemplate";
import { QuestionAnswerTemplate } from "@/components/templates/QuestionAnswerTemplate";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("search");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [dialogue, setDialogue] = useState<{
    id: number;
    query: string;
    loading: boolean;
    result: any;
  }[]>([]);
  const [dialogueId, setDialogueId] = useState(1);

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
    <div className="w-full max-w-2xl flex flex-col gap-4 mt-8">
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
      <div className="flex flex-col items-center pt-16">
        {query && (
          <div className="w-full max-w-2xl min-h-[120px] flex flex-col items-center justify-center mt-8">
            {loading ? (
              <LoadingSpinner text={`Searching for "${query}"…`} />
            ) : result ? (
              answerTemplate
            ) : (
              <div className="text-zinc-500">No results found for "{query}"</div>
            )}
          </div>
        )}
        {renderDialogue()}
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full flex flex-col items-center pointer-events-none">
        <div className="pointer-events-auto w-full max-w-2xl flex flex-col gap-2 items-center">
          <EnhancedInput
            value={value}
            onChange={e => setValue(e.target.value)}
            onSend={handleSend}
            onVoice={() => alert("Voice input")}
            onSmartSuggest={() => alert("Smart Suggest")}
            mode={mode}
            onModeChange={handleModeChange}
          />
        </div>
      </div>
    </MainLayout>
  );
}

