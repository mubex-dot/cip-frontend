import { CardContent, CardHeader } from "@/components/ui/card";

type EngagementLevel = "none" | "low" | "medium" | "high" | "veryHigh";

type Participant = {
  name: string;
  engagement: EngagementLevel[];
};

const participants: Participant[] = [
  {
    name: "Umar Mukhtar",
    engagement: ["high", "high", "medium", "high", "high", "medium", "high"],
  },
  {
    name: "Farouk Kabir",
    engagement: ["medium", "high", "high", "high", "medium", "high", "high"],
  },
  {
    name: "Usman Bashir",
    engagement: ["high", "low", "none", "low", "low", "none", "low"],
  },
  {
    name: "Abdul Bashir",
    engagement: ["medium", "medium", "low", "low", "low", "low", "low"],
  },
];

const colors: Record<EngagementLevel, string> = {
  none: "bg-gray-200",
  low: "bg-green-200",
  medium: "bg-green-400",
  high: "bg-green-600",
  veryHigh: "bg-green-800",
};

function EngagementHeatmap() {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div className="w-full">
        <CardHeader className="flex flex-row justify-between items-center my-4">
          <h6 className="font-semibold">Engagement Heatmap</h6>
          <p className="text-sm text-muted-foreground">
            Participant activity across sessions
          </p>
        </CardHeader>

        <CardContent className="mt-8">
          <div className="space-y-4">
            {participants.map((participant) => (
              <div key={participant.name} className="flex items-center gap-4">
                <p className="w-28 text-sm text-muted-foreground">
                  {participant.name}
                </p>

                <div className="grid grid-cols-7 gap-2">
                  {participant.engagement.map((level, index) => (
                    <div
                      key={index}
                      className={`w-18 h-18 rounded-sm ${colors[level]}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-6 text-sm">
            <Legend color="bg-gray-200" label="No show" />
            <Legend color="bg-green-200" label="Low" />
            <Legend color="bg-green-400" label="Medium" />
            <Legend color="bg-green-600" label="High" />
            <Legend color="bg-green-800" label="Very High" />
          </div>
        </CardContent>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-sm ${color}`} />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

export default EngagementHeatmap;
