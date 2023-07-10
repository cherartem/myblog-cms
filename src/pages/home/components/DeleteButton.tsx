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
          <Button
            size="icon"
            variant="secondary"
            className="hover:bg-slate-200"
          >
            <Trash2 className="text-slate-700" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
