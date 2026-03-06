import { Button } from "@/components/ui/button";
import ParticipantRow from "./ParticipantRow";

type RiskParticipantsProps = {
  riskNum: string;
  data: {
    id: number;
    participantName: string;
    participantRole: string;
    sessionIssue: string;
    riskLevel: string;
  }[];
};

const RiskParticipants = ({ riskNum, data }: RiskParticipantsProps) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h6 className="font-semibold">At-risk Participants</h6>
        <div className="px-3 py-2 bg-[#ffebee] text-[#c62828] rounded-full">
          <p className="text-xs">{`${riskNum} Need Attention`}</p>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <ParticipantRow
            key={item.id}
            participantName={item.participantName}
            participantRole={item.participantRole}
            sessionIssue={item.sessionIssue}
            riskLevel={item.riskLevel}
          />
        ))}
      </div>
      <Button variant="outline">View All Participants</Button>
    </div>
  );
};

export default RiskParticipants;
