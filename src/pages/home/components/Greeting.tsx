import axiosInstance from "@/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

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
          <h1 className=" text-4xl font-semibold">
            Hello,{" "}
            <span className="bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {data?.fullname}
            </span>
          </h1>
          <p className="text-lg text-slate-500">
            You have written {data?.numOfArticles} article(s) in total.
          </p>
        </>
      )}
    </div>
  );
}
