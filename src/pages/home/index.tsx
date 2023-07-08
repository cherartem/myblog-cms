import Greeting from "./components/Greeting";
import ListOfArticles from "./components/ListOfArticles";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Greeting />
      <ListOfArticles />
    </div>
  );
}
