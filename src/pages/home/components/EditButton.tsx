import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  articleId: string;
}

export default function EditButton({ articleId }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={`/edit/${articleId}`}>
            <Button variant="secondary" className="hover:bg-slate-200">
              <Edit className="mr-2 h-4 w-4 text-slate-700" />
              Edit
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
