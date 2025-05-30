"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Header from "@/components/header/Header";
import { SmartSuggestPanel } from "@/components/input/SmartSuggestPanel";
import { DialogueHistoryProvider } from "@/context/DialogueHistoryContext";

export type MainLayoutProps = {
  headerVariant: "full" | "short";
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  children: React.ReactNode;
};

export default function MainLayout({
  headerVariant,
  leftSidebar,
  rightSidebar,
  children,
}: MainLayoutProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSmartSuggestOpen, setIsSmartSuggestOpen] = useState(false);

  useLayoutEffect(() => {
    function updateHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <DialogueHistoryProvider>
      <div className="h-screen flex flex-col">
        <div ref={headerRef} className="fixed top-0 left-0 w-full z-40">
          <Header 
            variant={headerVariant} 
            onLogout={() => {}} 
            onSmartSuggestOpen={() => setIsSmartSuggestOpen(true)}
          />
        </div>
        <SmartSuggestPanel 
          isOpen={isSmartSuggestOpen} 
          onClose={() => setIsSmartSuggestOpen(false)} 
          top={headerHeight / 2}
        />
        <div id="maincontentarea" className="flex flex-1 h-full min-h-0" style={{ marginTop: headerHeight }}>{/* dynamic header height */}
          {leftSidebar}
          <main className="flex-1 h-full min-h-0 bg-white">{children}</main>
          {rightSidebar}
        </div>
      </div>
    </DialogueHistoryProvider>
  );
} 