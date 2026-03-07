import SessionRow, { type Session } from "./SessionRow";

const SessionHistory = () => {
  return (
    <div>
      <div className="border rounded-lg p-6 bg-white w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Session History</h2>

        <div className="space-y-4">
          {sessions.map((session, index) => (
            <SessionRow key={index} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

const sessions: Session[] = [
  {
    title: "Week 4: Strategy & Execution",
    date: "Feb 12, 2025",
    time: "2:00 PM",
    status: "absent",
  },
  {
    title: "Week 3: Product Discovery",
    date: "Feb 5, 2025",
    time: "2:00 PM",
    status: "absent",
  },
  {
    title: "Week 2: User Research",
    date: "Jan 29, 2025",
    time: "2:00 PM",
    status: "partial",
    progress: 40,
  },
  {
    title: "Week 1: Kickoff & Orientation",
    date: "Jan 22, 2025",
    time: "2:00 PM",
    status: "attended",
    progress: 80,
  },
];

export default SessionHistory;
