import { IArticle } from "@/types/Article";
import EditButton from "./EditButton";
import DeleteAlertDialog from "./DeleteAlertDialog";
import { Dot } from "lucide-react";
import { DateTime } from "luxon";
import { Badge } from "@/components/ui/badge";
import he from "he";

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps) {
  const formattedDate = DateTime.fromISO(article.createdAt).toLocaleString(
    DateTime.DATE_HUGE
  );

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-border bg-white p-4 drop-shadow-sm">
      <h1 className="text-xl font-semibold">{he.decode(article.title)}</h1>
      <div className="flex flex-row items-center gap-1 text-slate-700">
        <p>{formattedDate}</p>
        <Dot className="text-slate-300" />
        {article.isPublished ? (
          <Badge variant="outline" className="border-blue-600 text-blue-600">
            Published
          </Badge>
        ) : (
          <Badge variant="outline">Not published</Badge>
        )}
      </div>
      <p className="text-slate-400">{he.decode(article.description)}</p>
      <div className="flex flex-row gap-4">
        <EditButton />
        <DeleteAlertDialog />
      </div>
    </div>
  );
}
