import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import NewArticleReactHookFormControl from "@/types/NewArticleReactHookFormControl";

export default function DescriptionFormField({
  control,
}: NewArticleReactHookFormControl) {
  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder="Write a brief description of your article"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name="description"
    />
  );
}
