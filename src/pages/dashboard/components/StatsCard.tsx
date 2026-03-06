type StatsCardProps = {
  statsName: string;
  statsNum: string;
  statsStat: string;
};

const StatsCard = ({ statsName, statsNum, statsStat }: StatsCardProps) => {
  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2">
      <p className="text-text-feint uppercase font-semibold">{statsName}</p>
      <h4 className="font-bold">{statsNum}</h4>
      <p
        className={`text-sm ${statsStat.includes("+") ? "text-[#4caf50]" : "text-text-feint"}`}
      >
        {statsStat}
      </p>
    </div>
  );
};

export default StatsCard;
