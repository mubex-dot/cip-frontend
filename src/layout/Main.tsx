import { Outlet } from "react-router";
import { useEffect, useState } from "react";

type Props = {
  drawerWidth: number;
};

function Main({ drawerWidth }: Props) {
  const [activeOrganizationId, setActiveOrganizationId] = useState<
    number | null
  >(null);

  useEffect(() => {
    const updateActiveOrg = () => {
      const stored = localStorage.getItem("active_organization_id");
      setActiveOrganizationId(stored ? Number(stored) : null);
    };

    updateActiveOrg();
    window.addEventListener("active_organization_changed", updateActiveOrg);

    return () => {
      window.removeEventListener(
        "active_organization_changed",
        updateActiveOrg,
      );
    };
  }, []);

  return (
    <main
      style={{ "--drawer-width": `${drawerWidth}px` } as React.CSSProperties}
      className="sm:w-[calc(100%-var(--drawer-width))] grow min-h-screen flex flex-col w-11/12"
    >
      <div className="py-20 px-6 bg-[#F6F5F4] flex-1">
        {!activeOrganizationId ? (
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold">
              Choose an active organization
            </h2>
            <p className="mt-4 text-text-feint">
              Before you can use the dashboard, please pick an active
              organization from the menu in the top-right.
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </main>
  );
}

export default Main;
