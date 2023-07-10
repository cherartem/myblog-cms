import SignOutDialog from "@/layout/components/SignOutDialog";
import { User2 } from "lucide-react";

export default function Account() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-start gap-2">
        <User2 className="h-4 w-4" />
        <p className="font-semibold">Account</p>
      </div>
      <SignOutDialog />
    </div>
  );
}
