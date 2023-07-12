import { useParams } from "react-router-dom";
import ReturnButton from "../new-article/components/ReturnButton";
import EditArticleForm from "./components/EditArticleForm";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/axiosInstance";
import { Loader2 } from "lucide-react";

async function fetchArticleById(articleId: string | undefined) {
  if (typeof articleId === "undefined") {
    throw new Error("Invalid article id");
  } else {
    const { data } = await axiosInstance.get(`cms/articles/${articleId}`);
    return data;
  }
}

export default function EditArticlePage() {
  const { articleId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchArticleById(articleId),
    queryKey: ["article", articleId],
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
        <EditArticleForm
          title={data.article.title}
          description={data.article.description}
          content={data.article.content}
          articleId={data.article._id}
          isPublished={data.article.isPublished}
        />
      )}
    </div>
  );
}
