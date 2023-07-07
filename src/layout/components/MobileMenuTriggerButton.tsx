import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MobileMenuTriggerButton() {
  return (
    <Button variant="outline" size="icon">
      <Menu className="h-4 w-4" />
    </Button>
  );
}
