import {
  useGetMyOrganizationsQuery,
  useSwitchOrganizationMutation,
} from "@/app/app-apis/organizationApiSlice";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateOrganizationModal from "@/pages/dashboard/components/CreateOrganizationModal";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/pages/auth/authSlice";
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
    // {
    //   text: "Participants",
    //   link: "/participants/1",
    // },
    {
      text: "Settings",
      link: "/settings",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOrgId, setActiveOrgId] = useState<number | null>(() => {
    const storedActiveOrg = localStorage.getItem("active_organization_id");
    return storedActiveOrg ? Number(storedActiveOrg) : null;
  });
  const { data: organizations, isLoading } = useGetMyOrganizationsQuery();
  const [switchOrg] = useSwitchOrganizationMutation();
  const dispatch = useDispatch();

  const activeOrganization = organizations?.data?.find(
    (organization) => organization.id === activeOrgId,
  );

  const switchOrganization = async (id: number) => {
    try {
      const newTokens = await switchOrg({ org_id: id }).unwrap();

      if (newTokens?.data) {
        dispatch(
          setCredentials({
            access_token: newTokens.data.access_token,
            refresh_token: newTokens.data.refresh_token,
          }),
        );
      }

      localStorage.setItem("active_organization_id", JSON.stringify(id));
      setActiveOrgId(id);
      window.dispatchEvent(new Event("active_organization_changed"));
    } catch (err) {
      console.error("Failed to switch organizations:", err);
      alert("Failed to switch organizations");
    }
  };

  return (
    <div
      style={cssVars}
      className="fixed shadow-none bg-[#FFFFFF] border-b border-[#E7E7E7] py-3 px-4 w-full sm:w-[calc(100%-var(--drawer-width))] sm:ml-(--drawer-width) z-999"
    >
      <div className="w-full flex justify-between items-center">
        <h6 className="font-bold">vCohort</h6>
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
              Current organization:{" "}
              {activeOrganization?.name ?? "Select an organization"}
            </DropdownMenuItem>

            {isLoading ? (
              <DropdownMenuItem disabled>
                Loading organizations…
              </DropdownMenuItem>
            ) : (
              organizations?.data?.map((organization) => (
                <DropdownMenuItem
                  key={organization.id}
                  onClick={() => switchOrganization(organization.id)}
                >
                  {organization.name}
                </DropdownMenuItem>
              ))
            )}

            <DropdownMenuItem onClick={() => setIsModalOpen(true)}>
              <PlusIcon /> Create organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <CreateOrganizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Header;
