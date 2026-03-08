import { Button } from "@/components/ui/button";
import SessionStats from "./components/SessionStats";
import SessionTabs from "./components/SessionTabs";
import { useGetSessionApiV1SessionsSessionIdGetQuery } from "@/app/app-apis/appApiSlice";
import { useParams } from "react-router";
import LinearProgress from "@/components/ui/LinearProgress";

const Session = () => {
  const { session_id } = useParams<{ session_id: string }>();
  const sessionId = Number(session_id);

  const { data, isLoading } = useGetSessionApiV1SessionsSessionIdGetQuery(
    { sessionId: sessionId },
    { skip: !sessionId },
  );

  console.log(data);

  const handleDownloadVcon = async () => {
    const url = data?.data?.vcon_url;
    if (!url) return;

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a temporary link in memory
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = downloadUrl;
      // Set the filename (e.g., session-28-data.json)
      link.download = `session-${sessionId}-vcon.json`;

      // Append, click, and cleanup
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: just open in new tab if the fetch fails (CORS issue)
      window.open(url, "_blank");
    }
  };

  const handleDownloadTranscript = async () => {
    const url = data?.data?.vcon_url;
    if (!url) return;

    try {
      // 1. Fetch the vCon JSON
      const response = await fetch(url);
      const vConData = await response.json();

      // 2. Find the whisper transcript text
      const whisperAnalysis = vConData.analysis?.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any) => a.vendor === "openai-whisper",
      );
      const transcriptText = whisperAnalysis?.body?.text;

      if (!transcriptText) {
        alert("No transcript found in this vCon file.");
        return;
      }

      // 3. Create a Blob from the text string
      const blob = new Blob([transcriptText], { type: "text/plain" });
      const downloadUrl = window.URL.createObjectURL(blob);

      // 4. Trigger download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${data.data?.title || "session"}-transcript.txt`;

      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Transcript download failed:", error);
    }
  };

  return (
    <div>
      {isLoading && <LinearProgress />}

      {!isLoading && data && (
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-bold">
                Cohort Intro Call ({data.data?.status}){" "}
                {/* {data.data?.title} ({data.data?.status}){" "} */}
              </h5>
              {/* <p className="text-text-feint">
                {data.data.}
              </p> */}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={handleDownloadVcon}
                disabled={!data?.data?.vcon_url}
              >
                Download VCON
              </Button>{" "}
              <Button variant="outline">Share</Button>
            </div>
          </div>
          <div className="mt-4">
            <SessionStats />
          </div>
          <div className="mt-4">
            <SessionTabs
              summary={data.data?.summary || ""}
              moments={moments}
              actions={data.data?.action_items_json || []}
              participants={participants}
              transcripts={transcripts}
              vconUrl={data?.data?.vcon_url || ""}
              onDownloadTranscript={handleDownloadTranscript}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const moments = [
  {
    title: "RICE Framework Deep Dive",
    time: "32:15 - 45:30",
    description: "High engagement",
  },
  {
    title: "Stakeholder Management Q&A",
    time: "58:20 - 1:12:00",
    description: "8 questions asked",
  },
  {
    title: "Case Study: OKR Rollout",
    time: "1:15:30 - 1:28:00",
    description: "Positive sentiment spike",
  },
];

// const actions = [
//   {
//     title: "Follow up with Michael Chen on stakeholder template",
//     subtitle: "Assigned to: Coach",
//   },
//   {
//     title: "Share RICE prioritization worksheet",
//     subtitle: "Due: Before next session",
//   },
//   {
//     title: "Schedule 1:1 with Emma Rodriguez",
//     subtitle: "Reason: Low participation noted",
//   },
// ];

const participants = [
  { name: "Ziyad Shuaibu", role: "Coach", percentage: 35, minutes: 37 },
  { name: "Umar Mukhtar", percentage: 18, minutes: 19 },
  { name: "Farouk Kabir", percentage: 12, minutes: 13 },
  { name: "Usman Bashir", percentage: 3, minutes: 3 },
  { name: "27 Others", percentage: 32, minutes: 33 },
];

const transcripts = [
  {
    speaker: "Ziyad Shuaibu",
    time: "00:05:32",
    text: "Welcome everyone to Week 4. Today we're diving into strategy execution — how do we actually turn those beautiful roadmaps into shipped features?",
  },
  {
    speaker: "Umar Mukhtar",
    time: "00:08:15",
    text: "This is where I usually hit a wall. My stakeholders love the strategy deck, but when I show them the timeline, they always want it faster.",
  },
  {
    speaker: "Farouk Kabir",
    time: "00:12:44",
    text: "Has anyone tried using the RICE framework with executives? I found it helps when they can see the impact score alongside effort.",
  },
];

export default Session;
