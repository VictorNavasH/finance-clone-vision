
import { Button } from "@/components/ui/button";
import { UserCircle, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold">Financial Planning</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
