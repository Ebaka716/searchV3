"use client";
import React, { useState, useRef, Suspense } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { useRouter } from "next/navigation";
import DialogueArea from '@/components/dialogue/DialogueArea';
import LoadingSpinner from "@/components/common/LoadingSpinner";

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

function ResearchRightPanel({ width, handleModeChange }: { width: number, handleModeChange: (m: 'search' | 'research') => void }) {
  return (
    <aside
      className="h-full border-l bg-white flex flex-col p-0 transition-all duration-500 relative overflow-hidden"
      style={{ width }}
    >
      <div className="flex flex-col h-full flex-1 relative overflow-hidden">
        {/* Scrollable chat area and input bar */}
        <div className="flex flex-col h-full min-h-0 relative">
          <div className="flex-1 min-h-0 overflow-y-auto">
            <DialogueArea mode="research" onModeChange={handleModeChange} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function ResearchPage() {
  const router = useRouter();
  // Resizable right panel state
  const minWidth = 320; // px
  const maxWidth = 800; // px
  // Initialize to 480 for SSR/client match, update on mount
  const [rightPanelWidth, setRightPanelWidth] = useState(480);
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

  // Set initial width on mount (client only)
  React.useEffect(() => {
    setRightPanelWidth(Math.max(minWidth, Math.min(maxWidth, window.innerWidth / 2)));
  }, []);

  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
  };

  const handleModeChange = (newMode: 'search' | 'research') => {
    router.push(newMode === 'research' ? '/research' : '/search');
  };

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
          {/* Resizable right panel with DialogueArea */}
          <Suspense fallback={<div className="w-full flex justify-center pt-16"><LoadingSpinner text="Loading research..." /></div>}>
            <ResearchRightPanel
              width={rightPanelWidth}
              handleModeChange={handleModeChange}
            />
          </Suspense>
        </div>
      </MainLayout>
    </div>
  );
} 