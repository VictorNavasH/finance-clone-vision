
import React from "react";
import AppSidebar from "./AppSidebar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
