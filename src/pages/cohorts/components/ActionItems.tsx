import { CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type Action = {
  title: string;
  subtitle: string;
};

type Props = {
  actions: Action[];
};

const ActionItems = ({ actions }: Props) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <div>
        <CardHeader>
          <h6 className="font-semibold">Action Items</h6>
        </CardHeader>

        <CardContent className="space-y-3">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex gap-3 items-start bg-green-50 rounded-md p-3"
            >
              <Checkbox />

              <div>
                <p className="text-sm">{action.title}</p>

                <p className="text-xs text-muted-foreground">
                  {action.subtitle}
                </p>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2">
            View All 8 Actions
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default ActionItems;
