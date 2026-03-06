import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/pages/auth/authSlice";
// import { Button } from "@/components/ui/button";
import {
  IconCashBanknote,
  IconNotes,
  IconSmartHome,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  drawerWidth: number;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};

function SideNav({ drawerWidth, handleDrawerToggle, mobileOpen }: Props) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectCurrentUser);
  const sideNavRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close mobile drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileOpen &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        handleDrawerToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, handleDrawerToggle]);

  // const handleLogout = () => {
  //   setIsLoading(true);
  //   dispatch(logout());
  //   navigate("/");
  //   setIsLoading(false);
  // };

  const adminNavItems = [
    {
      text: "Dashboard",
      icon: IconSmartHome,
      link: "/dashboard",
    },
    {
      text: "Applications",
      icon: IconNotes,
      link: "/applications",
    },
    {
      text: "Members",
      icon: IconUsersGroup,
      link: "/members",
    },
    {
      text: "Payments",
      icon: IconCashBanknote,
      link: "/payments",
    },
  ];

  const userNavItems = [
    {
      text: "Dashboard",
      icon: IconSmartHome,
      link: "/dashboard",
    },
  ];

  const navItems =
    user?.role === "admin" || user?.role === "super_admin"
      ? adminNavItems
      : userNavItems;

  const drawer = (
    <div className="px-4 h-full overflow-auto">
      <div className="my-12 flex justify-center items-center flex-col">
        <div className="flex items-center gap-2 w-full justify-between">
          <h4 className="font-semibold text-center w-full mt-4 text-text-secondary">
            LRCN.
          </h4>
          <button onClick={handleDrawerToggle} className="block sm:hidden">
            <IconX className="text-text-secondary cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between h-[75%]">
        <ul className="space-y-1 font-secondary">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="py-1">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-text-secondary block w-full border-l-3"
                      : "text-text-secondary block w-full"
                  }

                  // onClick={() => navigate(`${item.link}`)}
                >
                  <div
                    className="flex items-center gap-2 p-3"
                    onClick={handleDrawerToggle}
                  >
                    <item.icon size={20} />
                    <span className={`text-sm md:text-base`}>{item.text}</span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user?.profile_icon} alt="profile image" />
              {/* <AvatarFallback>{`${user?.name.split(" ")[0][0]}${user?.name.split(" ")[1][0]}`}</AvatarFallback> */}
              {/* Change the email to username when provided by backend */}
              <AvatarFallback>{`${user?.email.split(" ")[0][0]}`}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs md:text-sm font-semibold text-text-secondary font-secondary">
                {/* Change the email to username when provided by backend */}
                {user?.email}
              </p>
              <p className="text-xs text-text-secondary">{user?.email}</p>
            </div>
          </div>

          {/* <Button
            className="w-full"
            disabled={isLoading}
            onClick={handleLogout}
          >
            {isLoading ? "Loading..." : "LOGOUT"}
          </Button> */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay for mobile when drawer is open */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-30 sm:hidden
          transition-opacity duration-300 ease-in-out
          ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      <nav
        style={{ "--drawer-width": `${drawerWidth}px` } as React.CSSProperties}
        className="sm:w-(--drawer-width) sm:shrink-0"
      >
        {/* Mobile drawer */}
        <div
          ref={sideNavRef}
          className={`
            fixed inset-y-0 left-0 z-40 
            w-(--drawer-width) 
            transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            bg-primary border-none
            block sm:hidden
          `}
        >
          <div className="h-full overflow-y-auto">{drawer}</div>
        </div>

        {/* Desktop permanent drawer */}
        <div className="hidden sm:block fixed inset-y-0 left-0 z-40 w-(--drawer-width) bg-primary border-none overflow-y-auto">
          {drawer}
        </div>
      </nav>
    </>
  );
}

export default SideNav;
