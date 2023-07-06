import axiosInstance from "@/axiosInstance";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ExtendedAxiosError } from "../../../types/ExtendedAxiosError";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { setAccessToken } from "@/accessToken";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

async function sendSignInRequest({
  username,
  password,
}: z.infer<typeof formSchema>) {
  const { data } = await axiosInstance.post("users/sign-in", {
    username,
    password,
  });

  return data;
}

export default function SignInForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: sendSignInRequest,
    onError: (err: ExtendedAxiosError) => {
      if (err.response.data.errors?.[0]) {
        const errorMessage = err.response.data.errors?.[0].msg;
        const errorPath = err.response.data.errors?.[0].path;

        if (errorPath === "username" || errorPath === "password") {
          form.setError(errorPath, {
            message: errorMessage,
          });
        }
      }
    },
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      navigate("/");
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-slate-600">
                Your username:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="text-slate-900 shadow-sm placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-slate-600">
                Your password:
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••••••••••"
                  {...field}
                  className="text-slate-900 shadow-sm placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button
            disabled
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-500 p-4 text-center text-white shadow-sm transition-all hover:bg-blue-600"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
            Sign In
          </Button>
        ) : (
          <Button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-500 p-4 text-center text-white shadow-sm transition-all hover:bg-blue-600"
          >
            Sign In
          </Button>
        )}
      </form>
    </Form>
  );
}
