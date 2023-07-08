import axiosInstance from "@/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

async function fetchUserData() {
  const { data } = await axiosInstance.get("users/greeting-data");
  return data;
}

export default function Greeting() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["greeting"],
    queryFn: fetchUserData,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:items-start">
      {isLoading ? (
        <>
          <Skeleton className="h-9 w-96 rounded-lg bg-slate-200" />
          <Skeleton className="h-6 w-80 rounded-lg bg-slate-200" />
        </>
      ) : isError ? (
        <p className="text-center text-lg text-slate-500">
          An unexpected error occurred while fetching user data.
        </p>
      ) : (
        <>
          <h1 className="text-4xl font-semibold">Hello, {data?.fullname}</h1>
          <p className="text-lg text-slate-500">
            You have written {data?.numOfArticles} article(s) in total.
          </p>
        </>
      )}
    </div>
  );
}
