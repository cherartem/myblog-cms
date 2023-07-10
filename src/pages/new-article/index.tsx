import NewArticleForm from "./components/NewArticleForm";
import ReturnButton from "./components/ReturnButton";

export default function NewArticlePage() {
  return (
    <div className="flex flex-col gap-8">
      <ReturnButton />
      <NewArticleForm />
    </div>
  );
}
