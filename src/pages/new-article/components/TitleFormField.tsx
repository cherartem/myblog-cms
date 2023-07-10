import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import NewArticleReactHookFormControl from "@/types/NewArticleReactHookFormControl";

export default function TitleFormField({
  control,
}: NewArticleReactHookFormControl) {
  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder="Enter the title of your article"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name="title"
    />
  );
}
