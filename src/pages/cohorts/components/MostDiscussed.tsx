import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

const MostDiscussed = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Most Discussed Topics</h6>
      </div>
      <div className="bg-background">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <EmptyDescription>Bar Chart: Topics by frequency</EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
      <div className="flex flex-wrap gap-2">
        {discussedTopics.map((topic) => (
          <div
            key={topic.id}
            className="px-3 py-2 bg-[#e3f2fd] text-[#1565c0] rounded-sm"
          >
            <p className="text-xs whitespace-nowrap">{topic.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const discussedTopics = [
  { id: 1, topic: "Product Strategy" },
  { id: 2, topic: "User Research" },
  { id: 3, topic: "Stakeholder Management" },
  { id: 4, topic: "Metrics" },
  { id: 5, topic: "Prioritization" },
  { id: 6, topic: "+ 12 more" },
];

export default MostDiscussed;
