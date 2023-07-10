import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DeleteButton from "./DeleteButton";
import axiosInstance from "@/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface Props {
  articleId: string;
}

async function deleteArticle(id: string) {
  const { data } = await axiosInstance.delete(`/cms/articles/${id}`);
  return data;
}

export default function DeleteAlertDialog({ articleId }: Props) {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      toast({
        title: "Article deleted",
        description: "The article has been successfully deleted.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Article has not been deleted",
        description:
          "Oops! Something went wrong while deleting the article. Please try again later.",
      });
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <DeleteButton />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete the article</AlertDialogTitle>
          <AlertDialogDescription>
            Are you absolutely sure you want to permanently delete this article?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isLoading ? (
            <AlertDialogAction disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />{" "}
              Delete
            </AlertDialogAction>
          ) : (
            <AlertDialogAction onClick={() => mutate(articleId)}>
              Delete
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
