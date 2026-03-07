import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

const SentimentAnalysis = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Sentiment Analysis</h6>
      </div>
      <div className="bg-background">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <EmptyDescription>Mini chart: Sentiment over time</EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
      <div className="bg-background p-4">
        <p className="text-text-feint text-xs">AI Observation</p>
        <p>
          "Participant shows positive sentiment when speaking but low overall
          participation. May indicate confidence issues rather than
          disinterest."
        </p>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
