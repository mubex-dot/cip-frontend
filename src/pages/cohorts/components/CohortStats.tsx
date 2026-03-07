const CohortStats = () => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex justify-between gap-2">
      <div>
        <p className="text-text-feint uppercase font-semibold">
          Cohort Health Score
        </p>
        <h4 className="font-bold">87/100</h4>
        <p className="text-sm text-[#4caf50]">+3 from last week</p>
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">
          Average Attendance
        </p>
        <h4 className="font-bold">94%</h4>
        <p className="text-sm text-text-feint">30 of 32 avg per session</p>
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">
          Participation rate
        </p>
        <h4 className="font-bold">72%</h4>
        <p className="text-sm text-text-feint">Speaking or asking questions</p>
      </div>

      <div>
        <p className="text-text-feint uppercase font-semibold">At risk count</p>
        <h4 className="font-bold text-[#ff9800]">2</h4>
        <p className="text-sm text-text-feint">Participants need attention</p>
      </div>
    </div>
  );
};

export default CohortStats;
