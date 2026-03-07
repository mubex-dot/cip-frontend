import { Button } from "@/components/ui/button";
import SessionStats from "./components/SessionStats";
import SessionTabs from "./components/SessionTabs";

const Session = () => {
  const summaryMarkdown = `This session focused on translating product strategy into executable roadmaps.

### Key Themes
- RICE framework application generated significant discussion
- Stakeholder pushback on timeline estimates was a common pain point
- Participants shared success stories from OKR implementations

**Overall Sentiment:** Positive — High energy, collaborative problem-solving
`;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold">Week 4: Strategy & Execution</h5>
          <p className="text-text-feint">
            Feb 12, 2025 • 2:00 PM - 3:45 PM • 32 participants • Zoom
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Download VCON</Button>
          <Button variant="outline">Share</Button>
        </div>
      </div>
      <div className="mt-4">
        <SessionStats />
      </div>
      <div className="mt-4">
        <SessionTabs
          summary={summaryMarkdown}
          moments={moments}
          actions={actions}
          participants={participants}
          transcripts={transcripts}
        />
      </div>
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

const actions = [
  {
    title: "Follow up with Michael Chen on stakeholder template",
    subtitle: "Assigned to: Coach",
  },
  {
    title: "Share RICE prioritization worksheet",
    subtitle: "Due: Before next session",
  },
  {
    title: "Schedule 1:1 with Emma Rodriguez",
    subtitle: "Reason: Low participation noted",
  },
];

const participants = [
  { name: "Sarah Mitchell", role: "Coach", percentage: 35, minutes: 37 },
  { name: "David Kim", percentage: 18, minutes: 19 },
  { name: "Lisa Park", percentage: 12, minutes: 13 },
  { name: "Emma Rodriguez", percentage: 3, minutes: 3 },
  { name: "27 Others", percentage: 32, minutes: 33 },
];

const transcripts = [
  {
    speaker: "Sarah Mitchell",
    time: "00:05:32",
    text: "Welcome everyone to Week 4. Today we're diving into strategy execution — how do we actually turn those beautiful roadmaps into shipped features?",
  },
  {
    speaker: "David Kim",
    time: "00:08:15",
    text: "This is where I usually hit a wall. My stakeholders love the strategy deck, but when I show them the timeline, they always want it faster.",
  },
  {
    speaker: "Lisa Park",
    time: "00:12:44",
    text: "Has anyone tried using the RICE framework with executives? I found it helps when they can see the impact score alongside effort.",
  },
];

export default Session;
