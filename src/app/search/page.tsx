'use client';
import MainLayout from "@/components/layouts/MainLayout";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import DialogueArea from "@/components/dialogue/DialogueArea";

function SearchPageClient({ headerHeight = 0 }: { headerHeight?: number }) {
  return (
    <MainLayout headerVariant="short" leftSidebar={<AppSidebar />}>
      <div className="flex flex-col items-center w-full h-full bg-pink-50 overflow-hidden">
        <div
          id="mainscrollingarea"
          className="w-full flex flex-col flex-1 bg-green-50 relative"
          style={{ height: `calc(100vh - ${headerHeight}px)` }}
        >
          <DialogueArea key={0} headerHeight={headerHeight} />
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