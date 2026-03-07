import { CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type RecommendationType = "risk" | "warning" | "info";

export type Recommendation = {
  title: string;
  description: string;
  type: RecommendationType;
};

type Props = {
  recommendations: Recommendation[];
};

const RecommendedActions = ({ recommendations }: Props) => {
  const styles: Record<RecommendationType, string> = {
    risk: "bg-red-100 text-red-900",
    warning: "bg-amber-100 text-amber-900",
    info: "bg-blue-100 text-blue-900",
  };

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div>
        <CardHeader>
          <h6 className="font-semibold my-4">Recommended Actions</h6>
        </CardHeader>

        <CardContent className="space-y-4">
          {recommendations.map((rec, i) => (
            <div key={i} className={`p-4 rounded-md ${styles[rec.type]}`}>
              <p className="font-medium text-sm">{rec.title}</p>

              <p className="text-xs opacity-80 mt-1">{rec.description}</p>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2">
            Mark as Addressed
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default RecommendedActions;
