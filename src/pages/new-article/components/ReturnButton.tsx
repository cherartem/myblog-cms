import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReturnButton() {
  return (
    <Link to="/">
      <Button variant="secondary" className="hover:bg-slate-200">
        <ArrowLeft className="mr-2 h-4 w-4" /> Return to the home page
      </Button>
    </Link>
  );
}
