import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  articleId: string;
}

export default function ReadArticleButton({ articleId }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={`/read/${articleId}`}>
            <Button variant="secondary" className="hover:bg-slate-200">
              <Book className="mr-2 h-4 w-4 text-slate-700" />
              Read Article
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Read this article</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
