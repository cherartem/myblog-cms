import { Control } from "react-hook-form";

export default interface NewArticleReactHookFormControl {
  control: Control<{
    title: string;
    description: string;
    content: string;
    type: "published" | "saved";
  }>;
}
