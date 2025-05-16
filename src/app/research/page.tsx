"use client";
import React, { useState, useRef } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import { useRouter } from "next/navigation";

function ResearchRightPanel({ width }: { width: number }) {
  return (
    <aside
      className="h-full border-l bg-white flex flex-col p-4 transition-all duration-500"
      style={{ width }}
    >
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
  // Resizable right panel state
  const minWidth = 320; // px
  const maxWidth = 800; // px
  const [rightPanelWidth, setRightPanelWidth] = useState(480); // SSR-safe default
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
    setRightPanelWidth(window.innerWidth / 2);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <MainLayout headerVariant="short" leftSidebar={<AppSidebar />} rightSidebar={null}>
        <div className="flex flex-1 h-full min-h-0">
          {/* Main content area */}
          <main className="flex-1 min-h-0 bg-white flex flex-col items-center justify-end px-2">
            <div className="w-full max-w-2xl flex flex-col gap-2 items-center mb-8 mx-2">
              <EnhancedInput
                value={value}
                onChange={e => setValue(e.target.value)}
                onSend={() => alert("Send: " + value)}
                mode={mode}
                onModeChange={handleModeChange}
              />
            </div>
          </main>
          {/* Draggable divider */}
          <div
            className="w-2 cursor-col-resize bg-zinc-200 hover:bg-zinc-400 transition-colors"
            onMouseDown={handleDragStart}
            style={{ zIndex: 10, cursor: 'col-resize' }}
          />
          {/* Resizable right panel */}
          <ResearchRightPanel width={rightPanelWidth} />
        </div>
      </MainLayout>
    </div>
  );
} 