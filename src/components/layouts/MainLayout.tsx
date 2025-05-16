import React from "react";
import Header from "@/components/header/Header";

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
  return (
    <div className="h-screen flex flex-col">
      <Header variant={headerVariant} onLogout={() => {}} />
      <div className="flex flex-1 h-full min-h-0">
        {leftSidebar}
        <main className="flex-1 min-h-0 bg-white">{children}</main>
        {rightSidebar}
      </div>
    </div>
  );
} 