import { CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Transcript = {
  speaker: string;
  time: string;
  text: string;
};

type Props = {
  transcripts: Transcript[];
};

const TranscriptPreview = ({ transcripts }: Props) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div>
        <CardHeader className="flex flex-row justify-between items-center">
          <h6 className="font-semibold my-4">Transcript Preview</h6>

          <div className="flex gap-2">
            <Input placeholder="Search transcript..." className="w-60" />

            <Button variant="outline">Download</Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {transcripts.map((t, i) => (
            <div key={i} className="border rounded-md p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-6 w-6 rounded-full bg-muted" />

                <span className="font-medium">{t.speaker}</span>

                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>

              <p className="text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            View Full Transcript
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default TranscriptPreview;
