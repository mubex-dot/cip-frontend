import ActiveCohorts from "./components/ActiveCohorts";
import EngagementTrends from "./components/EngagementTrends";
import RiskParticipants from "./components/RiskParticipants";
import StatsCard from "./components/StatsCard";
import UpcomingSessions from "./components/UpcomingSessions";

const Dashboard = () => {
  const statsCardInfo = [
    {
      id: 1,
      statName: "Active Cohorts",
      statNum: "5",
      statStat: "2 starting this week",
    },

    {
      id: 2,
      statName: "Total Participants",
      statNum: "127",
      statStat: "+12 this month",
    },

    {
      id: 3,
      statName: "Sessions This Week",
      statNum: "12",
      statStat: "8 completed, 4 upcoming",
    },

    {
      id: 4,
      statName: "Avg Engagement",
      statNum: "78%",
      statStat: "+5% vs last week",
    },
  ];

  return (
    <div>
      <div>
        <h5 className="font-bold">Welcome back, Skillup Kopa</h5>
        <p className="text-text-feint">
          Here's what's happening with your programs today
        </p>
        <div className="grid grid-cols-4 gap-2 mt-8">
          {statsCardInfo.map((info) => (
            <StatsCard
              statsName={info.statName}
              statsNum={info.statNum}
              statsStat={info.statStat}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div>
            <RiskParticipants
              riskNum={riskParticipantsData.riskNum}
              data={riskParticipantsData.data}
            />
          </div>
          <div>
            <UpcomingSessions data={upcomingSessionsData.data} />
          </div>
        </div>
        <div className="mt-4">
          <EngagementTrends />
        </div>
        <div className="mt-4">
          <ActiveCohorts />
        </div>
      </div>
    </div>
  );
};

const riskParticipantsData = {
  riskNum: "3",
  data: [
    {
      id: 1,
      participantName: "Michael Chen",
      participantRole: "Product Leadership Cohort",
      sessionIssue: "Missed 2 sessions",
      riskLevel: "high",
    },
    {
      id: 2,
      participantName: "Emma Rodriguez",
      participantRole: "Design Systems Workshop",
      sessionIssue: "Low participation",
      riskLevel: "medium",
    },
    {
      id: 3,
      participantName: "James Wilson",
      participantRole: "Executive Coaching",
      sessionIssue: "Sentiment declining",
      riskLevel: "medium",
    },
  ],
};

const upcomingSessionsData = {
  data: [
    {
      id: 1,
      sessionName: "Week 4: Strategy & Execution",
      sessionInfo: "Product Leadership Cohort",
      sessionTime: "2:00 PM",
      sessionDay: "Today",
    },
    {
      id: 2,
      sessionName: "Design Critique Session",
      sessionInfo: "Design Systems Workshop",
      sessionTime: "4:30 PM",
      sessionDay: "Today",
    },
    {
      id: 3,
      sessionName: "1:1 Coaching - Session 8",
      sessionInfo: "Executive Coaching",
      sessionTime: "Tomorrow 10:00 AM",
      sessionDay: "Tomorrow",
    },
  ],
};

export default Dashboard;
