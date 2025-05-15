'use client';
import Header from "@/components/header/Header";
import AppSidebar from "@/components/sidebar/AppSidebar";

export default function SearchPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header variant="short" onLogout={() => {}} />
      <div className="flex flex-1 h-full min-h-0">
        <AppSidebar />
        <main className="flex-1 min-h-0 bg-white" />
      </div>
    </div>
  );
}

