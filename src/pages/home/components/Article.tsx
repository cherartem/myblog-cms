import { Button } from "@/components/ui/button";
import { IArticle } from "@/types/Article";
import { Edit2, Trash2 } from "lucide-react";
import moment from "moment";

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps) {
  const formattedDate = moment(article.createdAt).format("YYYY-MM-DD");

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-border bg-white p-4 drop-shadow-sm">
      <h1 className="text-xl font-semibold">{article.title}</h1>
      <p className="text-slate-700">{formattedDate}</p>
      {article.isPublished ? (
        <p className="w-fit rounded-md border border-blue-500 p-2 text-blue-500">
          Published
        </p>
      ) : (
        <p className="w-fit rounded-md border border-slate-500 p-2 text-slate-500">
          Not published
        </p>
      )}
      <p className="text-slate-400">{article.description}</p>
      <div className="flex flex-row gap-4">
        <Button
          size="icon"
          className="bg-blue-500 text-blue-200 drop-shadow transition-all hover:bg-blue-600 hover:text-blue-100"
        >
          <Edit2 />
        </Button>
        <Button
          size="icon"
          className="bg-blue-500 text-blue-200 drop-shadow transition-all hover:bg-blue-600 hover:text-blue-100"
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
