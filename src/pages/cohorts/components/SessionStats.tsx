const SessionStats = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex justify-between gap-2">
      <div>
        <p className="text-text-feint uppercase font-semibold">Duration</p>
        <h4 className="font-bold">1h 45m</h4>
        {/* <p className="text-sm text-[#4caf50]">+3 from last week</p> */}
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">Speaking Time</p>
        <h4 className="font-bold">68%</h4>
        <p className="text-sm text-text-feint">vs 32% silence/pauses</p>
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">
          Questions Asked
        </p>
        <h4 className="font-bold">24</h4>
        <p className="text-sm text-text-feint">
          12 answered, 3 follow-ups needed
        </p>
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">
          Engagement Score
        </p>
        <h4 className="font-bold text-[#4caf50]">85</h4>
        <p className="text-sm text-[#4caf50]">+8 from Week 3</p>
      </div>
    </div>
  );
};

export default SessionStats;
