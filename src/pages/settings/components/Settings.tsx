import { Separator } from "@/components/ui/separator";
import { SettingsIcon } from "lucide-react";
import Account from "./Account";

export default function Settings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row items-center justify-start gap-2">
        <SettingsIcon className="h-4 w-4" />
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>
      <Separator />
      <Account />
    </div>
  );
}
