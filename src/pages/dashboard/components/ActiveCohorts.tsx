import { Button } from "@/components/ui/button";
import CohortCard from "./CohortCard";
import { useListCohortsApiV1CohortsGetQuery } from "@/app/app-apis/appApiSlice";

const ActiveCohorts = () => {
  const { data } = useListCohortsApiV1CohortsGetQuery({});
  console.log(data);

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Active Cohorts</h6>
        <Button>New Cohort</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
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

export default ActiveCohorts;
