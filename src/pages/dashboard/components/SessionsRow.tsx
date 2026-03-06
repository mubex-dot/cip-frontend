type SessionsRowProps = {
  sessionName: string;
  sessionInfo: string;
  sessionTime: string;
  sessionDay: string;
};

const SessionsRow = ({
  sessionName,
  sessionInfo,
  sessionTime,
  sessionDay,
}: SessionsRowProps) => {
  return (
    <div className="my-2">
      <div className="flex items-center justify-between">
        <div className="w-10/12">
          <p>{sessionName}</p>
          <p className="text-xs text-text-feint">
            {sessionInfo} • {sessionTime}
          </p>
        </div>

        <div className="w-2/12">
          <div
            className={`px-3 py-2 bg-[#f5f5f5] text-[#666] rounded-full w-fit capitalize`}
          >
            <p className="text-xs">{sessionDay}</p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mt-4" />
    </div>
  );
};

export default SessionsRow;
