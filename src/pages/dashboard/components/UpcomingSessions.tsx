import { Button } from "@/components/ui/button";
import SessionsRow from "./SessionsRow";

type UpcomingSessionsProps = {
  data: {
    id: number;
    sessionName: string;
    sessionInfo: string;
    sessionTime: string;
    sessionDay: string;
  }[];
};

const UpcomingSessions = ({ data }: UpcomingSessionsProps) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h6 className="font-semibold">Upcoming Sessions</h6>
        <div className="px-3 py-2 bg-[#f5f5f5] text-[#666] rounded-full"></div>
      </div>
      <div>
        {data.map((item) => (
          <SessionsRow
            key={item.id}
            sessionName={item.sessionName}
            sessionInfo={item.sessionInfo}
            sessionTime={item.sessionTime}
            sessionDay={item.sessionDay}
          />
        ))}
      </div>
      <Button variant="outline">View Full Calendar</Button>
    </div>
  );
};

export default UpcomingSessions;
