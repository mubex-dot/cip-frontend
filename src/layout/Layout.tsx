import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  const drawerWidth = 0;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex">
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Main drawerWidth={drawerWidth} />
    </div>
  );
}

export default Layout;
