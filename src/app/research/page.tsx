"use client";
import React, { useState, useRef } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useRouter } from "next/navigation";

function ResearchCanvas() {
  return (
    <main className="flex-1 min-h-0 bg-white flex flex-col items-center justify-center px-2">
      <div className="w-full max-w-3xl flex flex-col gap-2 items-center mb-8 mx-2">
        <h2 className="font-semibold text-lg mb-4">Research Tools / Canvas</h2>
        {/* Future: Canvas, widgets, tools, etc. */}
        <div className="flex-1 flex items-center justify-center text-zinc-400 min-h-[400px]">Canvas area (coming soon)</div>
      </div>
    </main>
  );
}

function ResearchRightPanel({ width, value, setValue, mode, handleModeChange }: { width: number, value: string, setValue: (v: string) => void, mode: 'search' | 'research', handleModeChange: (m: 'search' | 'research') => void }) {
  return (
    <aside
      className="h-full border-l bg-white flex flex-col p-0 transition-all duration-500 relative"
      style={{ width }}
    >
      <div className="flex flex-col h-full flex-1">
        <div className="flex-1 w-full flex flex-col items-center pt-4">
          {/* Dialogue area could go here */}
        </div>
        <div className="w-full flex flex-col gap-2 items-center mb-8 max-w-2xl mx-auto px-4">
          <EnhancedInput
            value={value}
            onChange={e => setValue(e.target.value)}
            onSend={() => alert("Send: " + value)}
            mode={mode}
            onModeChange={handleModeChange}
          />
        </div>
      </div>
    </aside>
  );
}

export default function ResearchPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [mode, setMode] = useState<'search' | 'research'>("research");
  // Resizable right panel state
  const minWidth = 320; // px
  const maxWidth = 800; // px
  const [rightPanelWidth, setRightPanelWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return Math.max(minWidth, Math.min(maxWidth, window.innerWidth * 0.3));
    }
    return 480;
  });
  const dragging = useRef(false);
  const animationFrame = useRef<number | null>(null);

  // Mouse event handlers for resizing
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const newWidth = Math.min(Math.max(window.innerWidth - e.clientX, minWidth), maxWidth);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      animationFrame.current = requestAnimationFrame(() => {
        setRightPanelWidth(newWidth);
      });
    };
    const handleMouseUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
  };

  const handleModeChange = (newMode: 'search' | 'research') => {
    setMode(newMode);
    if (newMode === 'research') {
      router.push('/research');
    } else {
      router.push('/search');
    }
  };

  React.useEffect(() => {
    setRightPanelWidth(Math.max(minWidth, Math.min(maxWidth, window.innerWidth * 0.3)));
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <MainLayout headerVariant="short" leftSidebar={<AppSidebar />} rightSidebar={null}>
        <div className="flex flex-1 h-full min-h-0">
          {/* Central canvas area */}
          <ResearchCanvas />
          {/* Draggable divider */}
          <div
            className="w-2 cursor-col-resize bg-zinc-200 hover:bg-zinc-400 transition-colors"
            onMouseDown={handleDragStart}
            style={{ zIndex: 10, cursor: 'col-resize' }}
          />
          {/* Resizable right panel with EnhancedInput and dialogue */}
          <ResearchRightPanel
            width={rightPanelWidth}
            value={value}
            setValue={setValue}
            mode={mode}
            handleModeChange={handleModeChange}
          />
        </div>
      </MainLayout>
    </div>
  );
} 