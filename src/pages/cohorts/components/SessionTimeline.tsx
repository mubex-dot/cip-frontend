import { CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Session = {
  id: number;
  title: string;
  date: string;
  participants: number;
  status: "completed" | "upcoming";
  summaryAvailable?: boolean;
};

const sessions: Session[] = [
  {
    id: 1,
    title: "Week 4: Strategy & Execution",
    date: "Feb 12, 2025 - 2:00 PM",
    participants: 32,
    status: "completed",
    summaryAvailable: true,
  },
  {
    id: 2,
    title: "Week 3: Product Discovery",
    date: "Feb 5, 2025 - 2:00 PM",
    participants: 30,
    status: "completed",
    summaryAvailable: true,
  },
  {
    id: 3,
    title: "Week 2: User Research",
    date: "Jan 29, 2025 - 2:00 PM",
    participants: 31,
    status: "completed",
    summaryAvailable: true,
  },
  {
    id: 4,
    title: "Week 1: Kickoff & Orientation",
    date: "Jan 22, 2025 - 2:00 PM",
    participants: 32,
    status: "completed",
    summaryAvailable: true,
  },
];

function SessionTimeline() {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div>
        <CardHeader className="flex flex-row items-center justify-between my-4">
          <h6 className="font-semibold">Session Timeline</h6>

          <Button size="sm" variant="outline">
            View All
          </Button>
        </CardHeader>

        <CardContent>
          <div className="relative pl-8">
            {/* vertical timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-muted" />

            <div className="space-y-8">
              {sessions.map((session) => (
                <div key={session.id} className="relative group transition">
                  {/* timeline dot */}
                  <div className="absolute -left-0.75 top-2 h-3 w-3 rounded-full bg-green-500 ring-4 ring-background group-hover:scale-125 transition" />

                  <div className="ml-4 space-y-1">
                    <p className="font-medium leading-none">{session.title}</p>

                    <p className="text-sm text-muted-foreground">
                      {session.date} • {session.participants} participants
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      {session.status === "completed" && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Completed
                        </Badge>
                      )}

                      {session.summaryAvailable && (
                        <span className="text-xs text-muted-foreground">
                          AI Summary Available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
}

export default SessionTimeline;
