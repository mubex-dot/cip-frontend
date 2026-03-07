import { Button } from "@/components/ui/button";
import CohortCard from "../dashboard/components/CohortCard";

const Cohorts = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold">Cohorts</h5>
          <p className="text-text-feint">View your cohorts here</p>
        </div>
        <Button>New Cohort</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cohortCardData.map((item) => (
          <CohortCard
            id={item.id}
            status={item.status}
            date={item.date}
            topic={item.topic}
            participants={item.participants}
            engagement={item.engagement}
            nextDate={item.nextDate}
          />
        ))}
      </div>
    </div>
  );
};

const cohortCardData = [
  {
    id: 1,
    status: "active",
    date: "Week 4/8",
    topic: "Product Leadership Cohort",
    participants: "32",
    engagement: "87%",
    nextDate: "Today 2PM",
  },
  {
    id: 2,
    status: "active",
    date: "Week 2/6",
    topic: "Design Systems Workshop",
    participants: "18",
    engagement: "72%",
    nextDate: "Today 4:30PM",
  },
  {
    id: 3,
    status: "active",
    date: "ongoing",
    topic: "Executive Coaching Program",
    participants: "8",
    engagement: "91%",
    nextDate: "Tomorrow 10AM",
  },
];

export default Cohorts;
