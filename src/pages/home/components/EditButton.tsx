import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit2 } from "lucide-react";

export default function EditButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon">
            <Edit2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
