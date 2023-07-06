import { CopyrightIcon } from "lucide-react";

export default function Copyright() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 text-slate-600">
      <CopyrightIcon className="h-4 w-4" />
      <p>Chernysh Artem {new Date().getFullYear()}</p>
    </div>
  );
}
