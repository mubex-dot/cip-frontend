import { ScrollArea } from "@/components/ui/scroll-area";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import type { sessions } from "@/types/sessions.types";

type SideBarProps = {
  sessions: sessions | undefined;
  onSessionClick?: () => void;
};

function SideBar({ sessions, onSessionClick }: SideBarProps) {
  const [isSessionsOpen, setIsSessionsOpen] = useState(false);

  // console.log(sessions);

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 h-full">
      <ScrollArea className="h-full">
        <div className="space-y-2 pr-3">
          {/* Overview Button */}
          <button
            className="w-full text-left px-4 py-3 rounded-md text-sm bg-primary text-primary-foreground font-medium"
            // onClick={() => navigate("/")}
          >
            Overview
          </button>

          {/* Sessions Dropdown Group */}
          <div className="space-y-1">
            <button
              onClick={() => setIsSessionsOpen(!isSessionsOpen)}
              // onClick={onSessionClick()} // NOTE: Comment this out and test when a session has been uploaded
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
                    onClick={(e) => {
                      e.stopPropagation();
                      onSessionClick?.();
                    }}
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
