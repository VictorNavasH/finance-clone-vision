
import React, { useState } from "react";
import AppSidebar from "./AppSidebar";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  // En móviles, el sidebar empieza cerrado
  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar - fixed en desktop, overlay en móvil */}
      <div 
        className={cn(
          "transition-all duration-300 z-50",
          isMobile ? "fixed inset-y-0 left-0 transform" : "relative",
          sidebarOpen ? "translate-x-0" : isMobile ? "-translate-x-full" : ""
        )}
      >
        <AppSidebar
          collapsed={!sidebarOpen}
          onCollapsedChange={setSidebarOpen}
        />
      </div>

      {/* Overlay de fondo cuando el sidebar está abierto en móvil */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Contenido principal */}
      <div className={cn(
        "flex flex-col flex-1 transition-all duration-300 overflow-auto",
        !isMobile && sidebarOpen ? "ml-64" : !isMobile && !sidebarOpen ? "ml-16" : ""
      )}>
        <Header 
          sidebarOpen={sidebarOpen} 
          onSidebarOpenChange={setSidebarOpen} 
        />

        <main className="flex-1 overflow-auto page-content">
          {children}
        </main>

        {/* Botón flotante para abrir sidebar en móvil */}
        {isMobile && !sidebarOpen && (
          <Button
            variant="secondary"
            size="icon"
            className="fixed bottom-6 left-6 rounded-full z-40 shadow-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <ChevronLeft className="h-4 w-4 rotate-180" />
          </Button>
        )}
      </div>
    </div>
  );
}
