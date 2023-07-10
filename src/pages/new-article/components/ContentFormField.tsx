import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import NewArticleReactHookFormControl from "@/types/NewArticleReactHookFormControl";

export default function ContentFormField({
  control,
}: NewArticleReactHookFormControl) {
  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder="Write your article here" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name="content"
    />
  );
}
