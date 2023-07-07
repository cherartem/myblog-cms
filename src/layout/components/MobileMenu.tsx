import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileMenuTriggerButton from "./MobileMenuTriggerButton";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MobileMenuTriggerButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>Create a new article</DropdownMenuItem>
        <DropdownMenuItem>Sign out of your account</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
