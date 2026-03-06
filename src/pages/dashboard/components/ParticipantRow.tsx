import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type ParticipantRowProps = {
  participantName: string;
  participantRole: string;
  sessionIssue: string;
  riskLevel: string;
};

const ParticipantRow = ({
  participantName,
  participantRole,
  sessionIssue,
  riskLevel,
}: ParticipantRowProps) => {
  return (
    <div className="my-2">
      <div className="flex items-center justify-between">
        <div className="w-1/12">
          <Avatar className="cursor-pointer">
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>

        <div className="w-9/12">
          <p>{participantName}</p>
          <p className="text-xs text-text-feint">
            {participantRole} • {sessionIssue}
          </p>
        </div>

        <div className="w-2/12">
          <div
            className={`px-3 py-2 ${riskLevel === "high" ? "bg-[#ffebee] text-[#c62828]" : "bg-[#fff3e0] text-[#ef6c00]"} rounded-full w-fit capitalize`}
          >
            <p className="text-xs">{riskLevel} Risk</p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mt-4" />
    </div>
  );
};

export default ParticipantRow;
