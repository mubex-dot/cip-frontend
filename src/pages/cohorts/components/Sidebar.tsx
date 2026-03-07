import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

const menu = [
  { name: "Overview", active: true },
  { name: "Sessions (12)", link: "session" },
  { name: "Participants (32)" },
  { name: "Topics & Insights" },
  { name: "Engagement Analytics" },
  { name: "Settings" },
];

function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white border border-border rounded-md flex flex-col gap-2 h-full">
      <ScrollArea className="h-full p-4">
        <div className="space-y-2">
          {menu.map((item) => (
            <button
              key={item.name}
              className={cn(
                "w-full text-left px-4 py-3 rounded-md text-sm transition",
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
              )}
              onClick={() => item.link && navigate(item.link)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SideBar;
