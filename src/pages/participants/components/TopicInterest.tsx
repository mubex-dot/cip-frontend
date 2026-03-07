const TopicInterest = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 mt-4">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Topic Interests</h6>
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
  { id: 1, topic: "Strategy" },
  { id: 2, topic: "Roadmapping" },
  { id: 3, topic: "Stakeholder Management" },
];

export default TopicInterest;
