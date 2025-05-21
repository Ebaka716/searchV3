import React, { useRef, useLayoutEffect, useState, ReactElement } from "react";
import Header from "@/components/header/Header";
import type { AppSidebarProps } from "@/components/sidebar/AppSidebar";

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
    <div className="h-screen flex flex-col">
      <div ref={headerRef} className="fixed top-0 left-0 w-full z-50">
        <Header variant={headerVariant} onLogout={() => {}} />
      </div>
      <div id="maincontentarea" className="flex flex-1 h-full min-h-0" style={{ marginTop: headerHeight }}>{/* dynamic header height */}
        {leftSidebar && React.isValidElement(leftSidebar) &&
          typeof leftSidebar.type === "function" &&
          leftSidebar.type.name === "AppSidebar"
            ? headerHeight > 0 && React.cloneElement(leftSidebar as ReactElement<AppSidebarProps>, { headerHeight })
            : leftSidebar}
        <main className="flex-1 min-h-0 bg-white">{children}</main>
        {rightSidebar}
      </div>
    </div>
  );
} 