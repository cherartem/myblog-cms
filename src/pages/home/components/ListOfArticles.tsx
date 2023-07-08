import axiosInstance from "@/axiosInstance";
import { IArticle } from "@/types/Article";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Article from "./Article";
import { useEffect, useRef } from "react";

async function fetchArticles({ pageParam = 0 }) {
  const { data } = await axiosInstance.get("cms/articles?cursor=" + pageParam);
  return data;
}

export default function ListOfArticles() {
  const { data, status, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["articles"],
      queryFn: fetchArticles,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const currentDiv = divRef.current;

    if (currentDiv) {
      observer.observe(currentDiv);
    }

    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  });

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    });
  };

  return (
    <div className="flex justify-center">
      {status === "loading" ? (
        <div className="flex flex-row items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
          <p className="text-slate-500">Loading...</p>
        </div>
      ) : status === "error" ? (
        <p className="text-center text-lg text-slate-500">
          An error occurred while fetching articles.
        </p>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {data.pages.map((group, i) => (
            <div className="flex w-full flex-col gap-4" key={i}>
              {group.data.map((article: IArticle) => (
                <Article key={article._id} article={article} />
              ))}
            </div>
          ))}
          {isFetchingNextPage ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
              <p className="text-slate-500">Loading...</p>
            </div>
          ) : hasNextPage ? (
            <div ref={divRef} className="-mt-4"></div>
          ) : (
            <p className="text-center text-lg text-slate-500">
              Nothing more to load
            </p>
          )}
        </div>
      )}
    </div>
  );
}
