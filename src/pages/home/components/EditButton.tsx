import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit } from "lucide-react";

export default function EditButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="hover:bg-slate-200"
          >
            <Edit className="text-slate-700" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
