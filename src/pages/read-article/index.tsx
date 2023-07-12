import axiosInstance from "@/axiosInstance";
import ReturnButton from "../new-article/components/ReturnButton";
import ArticleBody from "./components/ArticleBody";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import he from "he";

async function fetchArticleById(articleId: string | undefined) {
  if (typeof articleId === "undefined") {
    throw new Error("Invalid article id");
  } else {
    const { data } = await axiosInstance.get(`cms/articles/${articleId}`);
    return data;
  }
}

export default function ReadArticlePage() {
  const { articleId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchArticleById(articleId),
    queryKey: ["articles", articleId],
  });

  return (
    <div className="flex flex-col gap-8">
      <ReturnButton />
      {isLoading ? (
        <div className="flex flex-row items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
          <p className="text-slate-500">Loading...</p>
        </div>
      ) : isError ? (
        <p className="text-center text-lg text-slate-500">
          An error occurred while fetching this article.
        </p>
      ) : (
        <ArticleBody
          title={he.decode(data.article.title)}
          createdAt={he.decode(data.article.createdAt)}
          updatedAt={he.decode(data.article.updatedAt)}
          description={he.decode(data.article.description)}
          content={he.decode(data.article.content)}
        />
      )}
    </div>
  );
}
