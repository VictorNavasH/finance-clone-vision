
import { Button } from "@/components/ui/button";
import { UserCircle, Bell, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  sidebarOpen: boolean;
  onSidebarOpenChange: (open: boolean) => void;
}

export default function Header({ sidebarOpen, onSidebarOpenChange }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 bg-background z-10">
      <div className="flex items-center">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onSidebarOpenChange(!sidebarOpen)}
            className="mr-2"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
        <h1 className="text-xl font-semibold text-finance-text">
          NÜA Finance
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5 text-finance-text" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserCircle className="h-6 w-6 text-finance-text" />
        </Button>
      </div>
    </header>
  );
}
