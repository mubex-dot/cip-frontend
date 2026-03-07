import { CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Moment = {
  title: string;
  time: string;
  description: string;
};

type Props = {
  moments: Moment[];
};

const KeyMoments = ({ moments }: Props) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div>
        <CardHeader>
          <h6 className="font-semibold">Key Moments</h6>
        </CardHeader>

        <CardContent className="space-y-4">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >
              <div>
                <p className="font-medium">{moment.title}</p>

                <p className="text-xs text-muted-foreground">
                  {moment.time} • {moment.description}
                </p>
              </div>

              <Button size="sm" variant="outline">
                Play
              </Button>
            </div>
          ))}
        </CardContent>
      </div>
    </div>
  );
};

export default KeyMoments;
