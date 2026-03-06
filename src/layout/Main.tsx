import { Outlet } from "react-router";

type Props = {
  drawerWidth: number;
};

function Main({ drawerWidth }: Props) {
  return (
    <main
      style={{ "--drawer-width": `${drawerWidth}px` } as React.CSSProperties}
      className="sm:w-[calc(100%-var(--drawer-width))] grow min-h-screen flex flex-col w-11/12"
    >
      <div className="py-20 px-6 bg-[#F6F5F4] flex-1">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
