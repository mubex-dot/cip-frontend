import { ScrollArea } from "@/components/ui/scroll-area";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";

type Session = {
  action_items_json: string[];
  cohort_id: number;
  created_at: string;
  id: number;
  questions_asked_json: string[];
  status: string;
  summary: string;
  talk_listen_ratios_json: { talk_ratio: number; listen_ratio: number };
  title: string;
  topics_json: string[];
  transcription_url: string;
  updated_at: string;
  vcon_url: string;
};

type SideBarProps = {
  sessions: Session[] | undefined;
};

function SideBar({ sessions }: SideBarProps) {
  const navigate = useNavigate();
  const [isSessionsOpen, setIsSessionsOpen] = useState(false);

  // console.log(sessions);

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 h-full">
      <ScrollArea className="h-full">
        <div className="space-y-2 pr-3">
          {/* Overview Button */}
          <button
            className="w-full text-left px-4 py-3 rounded-md text-sm bg-primary text-primary-foreground font-medium"
            onClick={() => navigate("/")}
          >
            Overview
          </button>

          {/* Sessions Dropdown Group */}
          <div className="space-y-1">
            <button
              onClick={() => setIsSessionsOpen(!isSessionsOpen)}
              className="flex items-center justify-between w-full text-left px-4 py-3 rounded-md text-sm hover:bg-muted transition"
            >
              <span>Sessions ({sessions?.length})</span>
              {isSessionsOpen ? (
                <IconChevronDown size={16} />
              ) : (
                <IconChevronRight size={16} />
              )}
            </button>

            {isSessionsOpen && (
              <div className="pl-6 space-y-1">
                {sessions?.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => navigate(`session/${session.id}`)}
                    className="w-full text-left px-4 py-2 rounded-md text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition truncate"
                  >
                    {session.title || `Session ${session.id}`} ({session.status}
                    )
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other Static Menu Items */}
          {[
            "Participants",
            "Topics & Insights",
            "Engagement Analytics",
            "Settings",
          ].map((name) => (
            <button
              key={name}
              className="w-full text-left px-4 py-3 rounded-md text-sm hover:bg-muted transition"
            >
              {name}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SideBar;
