import { CardHeader, CardContent } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Progress } from "@/components/ui/progress";

type Participant = {
  name: string;
  role?: string;
  percentage: number;
  minutes: number;
};

type Props = {
  participants: Participant[];
};

const ParticipationBreakdown = ({ participants }: Props) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div>
        <CardHeader className="flex flex-row justify-between">
          <h6 className="font-semibold">Participation Breakdown</h6>

          <p className="text-sm text-muted-foreground">
            Speaking time by participant
          </p>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-6">
          <div className="bg-background">
            <Empty>
              <EmptyHeader>
                <EmptyTitle>No data</EmptyTitle>
                <EmptyDescription>No data found</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <EmptyDescription>
                  Pie/Doughnut Chart: of Talk distribution
                </EmptyDescription>
              </EmptyContent>
            </Empty>
          </div>

          {/* Participant list */}
          <div className="space-y-4">
            {participants.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* avatar placeholder */}
                <div className="h-8 w-8 rounded-full bg-background" />

                <div className="flex-1">
                  <p className="text-sm">
                    {p.name} {p.role && `(${p.role})`}
                  </p>

                  <Progress value={p.percentage} className="h-2 mt-1" />

                  <p className="text-xs text-muted-foreground mt-1">
                    {p.percentage}% ({p.minutes} min)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default ParticipationBreakdown;
