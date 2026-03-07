import { CardContent, CardHeader } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

type Props = {
  summary: string;
};

const SessionSummary = ({ summary }: Props) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="h-full">
        <CardHeader>
          <h6 className="font-semibold">Session Summary</h6>
        </CardHeader>

        <CardContent className="prose prose-sm max-w-none">
          <ReactMarkdown>{summary}</ReactMarkdown>
        </CardContent>
      </div>
    </div>
  );
};

export default SessionSummary;
