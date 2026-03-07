import { Button } from "@/components/ui/button";
import CohortStats from "./components/CohortStats";
import Sidebar from "./components/Sidebar";
import SessionTimeline from "./components/SessionTimeline";
import EngagementHeatmap from "./components/EngagementHeatmap";
import MostDiscussed from "./components/MostDiscussed";

const SingleCohort = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold">Product Leadership Cohort</h5>
          <p className="text-text-feint">
            32 participants • Started Jan 15 • Week 4 of 8
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>Add Session</Button>
        </div>
      </div>
      <div className="mt-4">
        <CohortStats />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <EngagementHeatmap />
          <SessionTimeline />
          <MostDiscussed />
        </div>
      </div>
    </div>
  );
};

export default SingleCohort;
