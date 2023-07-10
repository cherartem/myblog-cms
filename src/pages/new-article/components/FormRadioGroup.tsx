import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import NewArticleReactHookFormControl from "@/types/NewArticleReactHookFormControl";

export default function FormRadioGroup({
  control,
}: NewArticleReactHookFormControl) {
  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Is this article going to be published?</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={(value: "published" | "saved") => {
                field.onChange(value);
              }}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="saved" />
                </FormControl>
                <FormLabel className="font-normal">
                  Saved, but not published
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="published" />
                </FormControl>
                <FormLabel className="font-normal">Published</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name="type"
    />
  );
}
