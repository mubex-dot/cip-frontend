import { Button } from "@/components/ui/button";
import CohortStats from "./components/CohortStats";
import Sidebar from "./components/Sidebar";
import SessionTimeline from "./components/SessionTimeline";
import EngagementHeatmap from "./components/EngagementHeatmap";
import MostDiscussed from "./components/MostDiscussed";
import AddSessionModal from "./components/AddSessionModal";
import SessionList from "./components/SessionList";
import { useState } from "react";
import { useParams } from "react-router";
import LinearProgress from "@/components/ui/LinearProgress";
import { useGetSingleCohortQuery } from "@/app/app-apis/cohortsApiSlice";

const SingleCohort = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSessionList, setShowSessionList] = useState(false);
  const { cohort_id } = useParams<{ cohort_id: string }>();
  const cohortId = Number(cohort_id);

  const { data, isLoading } = useGetSingleCohortQuery(
    { cohort_id: cohortId },
    { skip: !cohortId },
  );

  // console.log(data);

  return (
    <div>
      {isLoading && <LinearProgress />}
      {!isLoading && data && (
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-bold">{data?.data?.name}</h5>
              <p className="text-text-feint">{data?.data?.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Export Data</Button>
              <Button onClick={() => setIsModalOpen(true)}>Add Session</Button>
            </div>
          </div>
          <div className="mt-4">
            <CohortStats />
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <div className="w-1/4">
              <Sidebar
                sessions={data?.data?.sessions}
                onSessionClick={() => setShowSessionList(true)}
              />
            </div>
            <div className="w-3/4">
              {showSessionList ? (
                <SessionList
                  sessions={data?.data?.sessions}
                  onBack={() => setShowSessionList(false)}
                />
              ) : (
                <>
                  <EngagementHeatmap />
                  <SessionTimeline />
                  <MostDiscussed />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {!isLoading && !data && (
        <div className="p-10 text-center text-red-500">
          Cohort not found or failed to load.
        </div>
      )}

      <AddSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cohortId={cohortId}
      />
    </div>
  );
};

export default SingleCohort;
