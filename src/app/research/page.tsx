"use client";
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

function ResearchRightPanel() {
  return (
    <aside className="w-72 min-w-[18rem] max-w-xs h-full border-l bg-white flex flex-col p-4">
      <h2 className="font-semibold text-lg mb-4">Research Tools / Canvas</h2>
      {/* Future: Canvas, widgets, tools, etc. */}
      <div className="flex-1 flex items-center justify-center text-zinc-400">Canvas area (coming soon)</div>
    </aside>
  );
}

export default function ResearchPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("research");

  const handleModeChange = (newMode: 'search' | 'research') => {
    setMode(newMode);
    if (newMode === 'research') {
      router.push('/research');
    } else {
      router.push('/search');
    }
  };

  return (
    <MainLayout headerVariant="short" leftSidebar={<AppSidebar />} rightSidebar={<ResearchRightPanel />}>
      {/* Main research content can go here */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full flex flex-col items-center pointer-events-none">
        <div className="pointer-events-auto w-full max-w-2xl flex flex-col gap-2 items-center">
          <EnhancedInput
            value={value}
            onChange={e => setValue(e.target.value)}
            onSend={() => alert("Send: " + value)}
            mode={mode}
            onModeChange={handleModeChange}
          />
        </div>
      </div>
    </MainLayout>
  );
} 