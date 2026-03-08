import { CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Transcript = {
  speaker: string;
  time: string;
  text: string;
};

type Props = {
  transcripts: Transcript[];
  vconUrl?: string;
  onDownload: () => void;
};

const TranscriptPreview = ({ transcripts, vconUrl, onDownload }: Props) => {
  const [fullText, setFullText] = useState<string>("");

  useEffect(() => {
    if (!vconUrl) return;

    fetch(vconUrl)
      .then((res) => res.json())
      .then((data) => {
        // Find the whisper transcript in the analysis array
        const whisperAnalysis = data.analysis?.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a: any) => a.vendor === "openai-whisper",
        );
        if (whisperAnalysis?.body?.text) {
          setFullText(whisperAnalysis.body.text);
        }
      })
      .catch((err) => console.error("Error fetching vCon transcript:", err));
  }, [vconUrl]);

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <CardHeader className="flex flex-row justify-between items-center px-0">
        <h6 className="font-semibold">Transcript Preview</h6>
        <div className="flex gap-2">
          <Input placeholder="Search transcript..." className="w-60 h-9" />
          <Button variant="outline" size="sm" onClick={onDownload}>
            Download
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 px-0">
        {/* 1. Show the full AI transcript if it exists */}
        {fullText ? (
          <div className="border rounded-md p-4 bg-slate-50">
            <p className="text-sm leading-relaxed text-slate-700">{fullText}</p>
          </div>
        ) : (
          /* 2. Fallback to your manual transcript segments */
          transcripts.map((t, i) => (
            <div key={i} className="border rounded-md p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-6 w-6 rounded-full bg-muted" />
                <span className="font-medium">{t.speaker}</span>
                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))
        )}

        <Button variant="outline" className="w-full">
          View Full Transcript
        </Button>
      </CardContent>
    </div>
  );
};

export default TranscriptPreview;
