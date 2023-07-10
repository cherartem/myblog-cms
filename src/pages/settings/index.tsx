import ReturnButton from "../new-article/components/ReturnButton";
import Settings from "./components/Settings";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <ReturnButton />
      <Settings />
    </div>
  );
}
