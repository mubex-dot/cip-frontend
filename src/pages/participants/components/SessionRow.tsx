type SessionStatus = "attended" | "absent" | "partial";

export interface Session {
  title: string;
  date: string;
  time: string;
  status: SessionStatus;
  progress?: number;
}

const SessionRow = ({ session }: { session: Session }) => {
  const statusStyles = {
    attended: "bg-green-100 text-green-700",
    absent: "bg-red-100 text-red-600",
    partial: "bg-green-100 text-green-700",
  };

  const progressColor = {
    attended: "bg-green-500",
    partial: "bg-orange-400",
    absent: "bg-gray-300",
  };

  return (
    <div className="flex items-center justify-between border-t pt-4 first:border-none first:pt-0">
      <div>
        <p className="font-medium">{session.title}</p>
        <p className="text-sm text-gray-500">
          {session.date} • {session.time}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {session.progress !== undefined && (
          <div className="w-20 h-2 bg-gray-200 rounded">
            <div
              className={`h-2 rounded ${progressColor[session.status]}`}
              style={{ width: `${session.progress}%` }}
            />
          </div>
        )}

        <span
          className={`text-xs px-3 py-1 rounded-full capitalize ${statusStyles[session.status]}`}
        >
          {session.status}
        </span>
      </div>
    </div>
  );
};

export default SessionRow;
