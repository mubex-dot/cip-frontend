import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon } from "lucide-react";
import { NavLink } from "react-router";

type Props = {
  drawerWidth: number;
  handleDrawerToggle: () => void;
};

function Header({ drawerWidth, handleDrawerToggle }: Props) {
  // Extract the value for CSS custom properties
  const cssVars = {
    "--drawer-width": `${drawerWidth}px`,
  } as React.CSSProperties;

  const navItems = [
    {
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      text: "Cohorts",
      link: "/cohorts",
    },
    {
      text: "Participants",
      link: "/participants/1",
    },
    {
      text: "Settings",
      link: "/settings",
    },
  ];

  return (
    <div
      style={cssVars}
      className="fixed shadow-none bg-[#FFFFFF] border-b border-[#E7E7E7] py-3 px-4 w-full sm:w-[calc(100%-var(--drawer-width))] sm:ml-(--drawer-width) z-999"
    >
      <div className="w-full flex justify-between items-center">
        <h6 className="font-bold">Cohort Intelligence</h6>
        <ul className="flex items-center gap-10">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="py-1 flex items-center gap-8">
                <NavLink
                  to={item.link}
                  // className={({ isActive }) =>
                  //   isActive ? "text-text-secondary" : "text-text-secondary"
                  // }
                  // onClick={() => navigate(`${item.link}`)}
                  className={({ isActive }) =>
                    `${isActive ? "text-text-feint" : "text-text-primary"}`
                  }
                >
                  <div onClick={handleDrawerToggle}>
                    <span className={`text-sm md:text-base`}>{item.text}</span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-2 w-56">
            <DropdownMenuItem disabled>
              Current organization: Skillup Kopa
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PlusIcon /> Create organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
