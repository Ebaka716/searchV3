'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import DialogueArea from "@/components/dialogue/DialogueArea";

function SSRDebugBoundary({ children, label }: { children: React.ReactNode, label: string }) {
  try {
    return <>{children}</>;
  } catch (err) {
    if (typeof window === "undefined") {
      console.error(`SSR error in ${label}:`, err);
      return <div>SSR error in {label}: {String(err)}</div>;
    }
    throw err;
  }
}

function SearchPageClient({ headerHeight = 0 }: { headerHeight?: number }) {
  const [mode] = React.useState<'search' | 'research'>("search");
  const router = useRouter();
  const handleModeChange = (newMode: 'search' | 'research') => {
    if (newMode === 'research') {
      router.push('/research');
    } else if (newMode === 'search') {
      router.push('/search');
    }
  };
  return (
    <SSRDebugBoundary label="SearchPageClient">
      <MainLayout headerVariant="short" leftSidebar={<AppSidebar />}>
        <div className="flex flex-col items-center w-full h-full overflow-hidden" style={{ background: '#f9f7f5' }}>
          <div
            id="mainscrollingarea"
            className="w-full flex flex-col flex-1 relative"
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
          >
            <DialogueArea key={0} headerHeight={headerHeight} mode={mode} onModeChange={handleModeChange} />
          </div>
        </div>
      </MainLayout>
    </SSRDebugBoundary>
  );
}

export default function SearchPage() {
  return (
    <SSRDebugBoundary label="SearchPage">
      <Suspense fallback={<div className="w-full flex justify-center pt-16"><LoadingSpinner text="Loading search..." /></div>}>
        {/* headerHeight will be injected by MainLayout via React.cloneElement */}
        <SearchPageClient />
      </Suspense>
    </SSRDebugBoundary>
  );
}