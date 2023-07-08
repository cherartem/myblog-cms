import axiosInstance from "@/axiosInstance";
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
        <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
      ) : isError ? (
        <p className="text-lg text-slate-500">
          An error occurred while fetching user data. Please try again later.
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
