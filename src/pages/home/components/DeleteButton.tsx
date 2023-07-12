import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2 } from "lucide-react";

export default function DeleteButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" className="hover:bg-slate-200">
            <Trash2 className="mr-2 h-4 w-4 text-slate-700" />
            Delete
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
