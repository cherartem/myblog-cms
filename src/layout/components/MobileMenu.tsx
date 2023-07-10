import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileMenuTriggerButton from "./MobileMenuTriggerButton";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MobileMenuTriggerButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/new-article">Create a new article</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Sign out of your account</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
