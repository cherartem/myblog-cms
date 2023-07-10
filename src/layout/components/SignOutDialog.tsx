import { setAccessToken } from "@/accessToken";
import axiosInstance from "@/axiosInstance";
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
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Loader2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

async function signOut() {
  const { data } = await axiosInstance.post("users/sign-out");
  return data;
}

export default function SignOutDialog() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      setAccessToken("");
      navigate("/sign-in");
    },
    onError: () => {
      setAccessToken("");
      navigate("/sign-in");
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-fit">
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to sign out of your account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isLoading ? (
            <AlertDialogAction disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sign out
            </AlertDialogAction>
          ) : (
            <AlertDialogAction onClick={() => mutate()}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
