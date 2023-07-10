import axiosInstance from "@/axiosInstance";
import { IArticle } from "@/types/Article";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2, Newspaper } from "lucide-react";
import Article from "./Article";
import { useEffect, useRef } from "react";
import { Balancer } from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          An error occurred while fetching your articles.
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
          {data.pages[0].data.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-lg text-slate-500">
                <Balancer>
                  No articles yet? No problem! Get your publishing game on and
                  start sharing your stories right away!
                </Balancer>
              </p>
              <Link to="/new-article">
                <Button className="w-fit bg-blue-500 shadow-sm hover:bg-blue-600">
                  <Newspaper className="mr-2 h-4 w-4" />
                  Create your first article
                </Button>
              </Link>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </div>
  );
}
