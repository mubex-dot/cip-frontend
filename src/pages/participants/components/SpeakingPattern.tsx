import { Separator } from "@/components/ui/separator";

const SpeakingPattern = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <h6 className="font-semibold">Speaking Patterns</h6>

      <div className="flex w-full flex-col gap-3 text-sm mt-4">
        <dl className="flex items-center justify-between">
          <dt>Average Speaking Time</dt>
          <dd className="text-muted-foreground font-semibold">
            4 min / session
          </dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Questions Asked</dt>
          <dd className="text-muted-foreground font-semibold">1 total</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Response Latency</dt>
          <dd className="text-muted-foreground font-semibold">45 sec avg</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Talk-to-Listen Ratio</dt>
          <dd className="text-muted-foreground font-semibold">1:8 (Low)</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Interaction Style</dt>
          <dd className="text-muted-foreground font-semibold">Observer</dd>
        </dl>
      </div>
    </div>
  );
};

export default SpeakingPattern;
