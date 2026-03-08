import { Button } from "@/components/ui/button";
import CohortCard from "../dashboard/components/CohortCard";
import { useListCohortsApiV1CohortsGetQuery } from "@/app/app-apis/appApiSlice";
import { useState } from "react";
import CreateCohortModal from "../dashboard/components/CreateCohortModal";

const Cohorts = () => {
  const { data } = useListCohortsApiV1CohortsGetQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="font-bold">Cohorts</h5>
          <p className="text-text-feint">View your cohorts here</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>New Cohort</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data?.data?.map((item) => (
          <CohortCard
            id={item.id}
            status={"active"}
            date={"Week 4/8"}
            topic={item.name}
            description={item?.description ? item.description : ""}
            nextDate={"Tomorrow 10AM"}
          />
        ))}
      </div>

      <CreateCohortModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Cohorts;
