import HomeTopbar from "@/components/shared/HomeTopbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <header className="bg-background relative z-50">
        <HomeTopbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
