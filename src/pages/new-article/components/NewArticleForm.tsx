import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TitleFormField from "./TitleFormField";
import DescriptionFormField from "./DescriptionFormField";
import ContentFormField from "./ContentFormField";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/axiosInstance";
import FormRadioGroup from "./FormRadioGroup";
import { useMutation } from "@tanstack/react-query";
import { ExtendedAxiosError } from "@/types/ExtendedAxiosError";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z.string().nonempty("This field is required").max(70),
  description: z.string().nonempty("This field is required").max(300),
  content: z.string().nonempty("This field is required"),
  type: z.enum(["published", "saved"], {
    required_error: "This field is required",
  }),
});

async function createNewArticle({
  title,
  description,
  content,
  type,
}: z.infer<typeof formSchema>) {
  const { data } = await axiosInstance.post("cms/articles", {
    title,
    description,
    content,
    isPublished: type === "published" ? true : type === "saved" && false,
  });

  return data;
}

export default function NewArticleForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: createNewArticle,
    onError: (err: ExtendedAxiosError) => {
      if (err.response.data.errors?.[0]) {
        const errorMessage = err.response.data.errors?.[0].msg;
        let errorPath = err.response.data.errors?.[0].path;

        if (errorPath === "isPublished") {
          errorPath = "type";
        }

        if (
          errorPath === "title" ||
          errorPath === "description" ||
          errorPath === "content" ||
          errorPath === "type"
        ) {
          form.setError(errorPath, {
            message: errorMessage,
          });
        }
      }
    },
    onSuccess: () => {
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
        className="flex flex-col gap-4"
      >
        <TitleFormField control={form.control} />
        <DescriptionFormField control={form.control} />
        <ContentFormField control={form.control} />
        <FormRadioGroup control={form.control} />
        {isLoading ? (
          <Button
            disabled
            type="submit"
            className="w-fit self-end bg-blue-500 text-white hover:bg-blue-600"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
            Submit
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-fit self-end bg-blue-500 text-white hover:bg-blue-600"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
