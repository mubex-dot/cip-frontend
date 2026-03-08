import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

type CohortCardProps = {
  id: number;
  status: string;
  date: string;
  topic: string;
  description: string;
  nextDate: string;
};

const CohortCard = ({
  id,
  status,
  date,
  topic,
  description,
  nextDate,
}: CohortCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div
          className={`px-3 py-2 bg-[#e8f5e9] text-[#2e7d32] rounded-full w-fit capitalize`}
        >
          <p className="text-xs">{status}</p>
        </div>
        <p className="text-xs text-text-feint">{date}</p>
      </div>
      <div>
        <p className="font-semibold capitalize">{topic}</p>
        <p className="text-xs text-text-feint capitalize">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-text-feint">Next: {nextDate}</p>
        <Button variant="outline" onClick={() => navigate(`/cohorts/${id}`)}>
          View
        </Button>
      </div>
    </div>
  );
};

export default CohortCard;
