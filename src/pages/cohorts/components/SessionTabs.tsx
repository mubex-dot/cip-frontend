import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SessionSummary from "./SessionSummary";
import KeyMoments from "./KeyMoments";
import ActionItems from "./ActionItems";
import ParticipationBreakdown from "./ParticipantBreakdown";
import TranscriptPreview from "./TranscriptPreview";

type Moment = {
  title: string;
  time: string;
  description: string;
};

type Participant = {
  name: string;
  role?: string;
  percentage: number;
  minutes: number;
};

type Transcript = {
  speaker: string;
  time: string;
  text: string;
};

type Props = {
  summary: string;
  moments: Moment[];
  actions: string[];
  participants: Participant[];
  transcripts: Transcript[];
  vconUrl?: string;
  onDownloadTranscript: () => void; // Add this prop
};

const SessionTabs = ({
  summary,
  moments,
  actions,
  participants,
  transcripts,
  vconUrl,
  onDownloadTranscript,
}: Props) => {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="summary">AI Summary</TabsTrigger>

        <TabsTrigger value="transcript">Transcript</TabsTrigger>

        <TabsTrigger value="moments">Key Moments</TabsTrigger>

        <TabsTrigger value="participation">Participation</TabsTrigger>

        <TabsTrigger value="actions">Action Items</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <div className="grid grid-cols-2 gap-6">
          <SessionSummary summary={summary} />

          <div className="space-y-6">
            <KeyMoments moments={moments} />
            <ActionItems actions={actions} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <ParticipationBreakdown participants={participants} />
          <TranscriptPreview
            transcripts={transcripts}
            vconUrl={vconUrl}
            onDownload={onDownloadTranscript}
          />
        </div>
      </TabsContent>

      <TabsContent value="transcript">
        <div className="text-sm text-muted-foreground">
          Transcript will appear here.
        </div>
      </TabsContent>

      <TabsContent value="moments">
        <KeyMoments moments={moments} />
      </TabsContent>

      <TabsContent value="participation">
        <ParticipationBreakdown participants={participants} />
      </TabsContent>

      <TabsContent value="transcript">
        <TranscriptPreview
          transcripts={transcripts}
          vconUrl={vconUrl}
          onDownload={onDownloadTranscript}
        />
      </TabsContent>

      <TabsContent value="actions">
        <ActionItems actions={actions} />
      </TabsContent>
    </Tabs>
  );
};

export default SessionTabs;
