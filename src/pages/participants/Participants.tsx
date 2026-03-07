import { Button } from "@/components/ui/button";
import StatsCard from "../dashboard/components/StatsCard";
import EngagementTrends from "../dashboard/components/EngagementTrends";
import SpeakingPattern from "./components/SpeakingPattern";
import RecommendedActions, {
  type Recommendation,
} from "./components/Recommendations";
import SentimentAnalysis from "./components/SentimentAnalysis";
import TopicInterest from "./components/TopicInterest";

const Participants = () => {
  const statsCardInfo = [
    {
      id: 1,
      statName: "Risk level",
      statNum: "HIGH RISK",
      statStat: "Missed 2 of last 4 sessions",
    },

    {
      id: 2,
      statName: "Engagement Score",
      statNum: "42",
      statStat: "-18 from cohort average",
    },

    {
      id: 3,
      statName: "Overall Attendance",
      statNum: "50%",
      statStat: "2 of 4 sessions attended",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold">Michael Chan</h5>
          <p className="text-text-feint">
            Product Leadership Cohort • Joined Jan 15, 2025
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Send Message</Button>
          <Button>Schedule 1:1</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-8">
        {statsCardInfo.map((info) => (
          <StatsCard
            statsName={info.statName}
            statsNum={info.statNum}
            statsStat={info.statStat}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between gap-4">
        <div className=" w-1/2">
          <EngagementTrends />
          <SpeakingPattern />
        </div>
        <div className="w-1/2">
          <RecommendedActions recommendations={recommendations} />
          <SentimentAnalysis />
          <TopicInterest />
        </div>
      </div>
    </div>
  );
};

const recommendations: Recommendation[] = [
  {
    title: "Schedule 1:1 Check-in",
    description:
      "AI Confidence: 92% — Pattern shows disengagement often stems from schedule conflicts or feeling behind",
    type: "risk",
  },
  {
    title: "Share Session Recording",
    description: "Missed content from Week 3 may be creating a knowledge gap",
    type: "warning",
  },
  {
    title: "Assign Buddy/Peer",
    description: "Pair with David Kim (high engager) for async catch up",
    type: "info",
  },
];

export default Participants;
