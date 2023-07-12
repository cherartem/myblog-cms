import { Separator } from "@/components/ui/separator";
import { Calendar, CalendarClock, Dot } from "lucide-react";
import { DateTime } from "luxon";
import { Balancer } from "react-wrap-balancer";

interface Props {
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function ArticleBody({
  title,
  description,
  content,
  createdAt,
  updatedAt,
}: Props) {
  const formattedCreatedAtDate = DateTime.fromISO(createdAt).toLocaleString(
    DateTime.DATE_HUGE
  );

  const formattedUpdatedAtDate = DateTime.fromISO(updatedAt).toLocaleString(
    DateTime.DATE_HUGE
  );

  return (
    <div className="flex flex-col gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Balancer>{title}</Balancer>
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        <Balancer>{description}</Balancer>
      </h3>
      <div className="flex flex-row items-center justify-start gap-4 text-slate-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <Calendar className="h-4 w-4" />
          Created at: {formattedCreatedAtDate}
        </div>
        {createdAt !== updatedAt && (
          <>
            <Dot className="text-slate-300" />
            <div className="flex flex-row items-center justify-center gap-2">
              <CalendarClock className="h-4 w-4" />
              Updated at: {formattedUpdatedAtDate}
            </div>
          </>
        )}
      </div>
      <Separator className="w-full" />
      <p className="leading-7">{content}</p>
    </div>
  );
}
