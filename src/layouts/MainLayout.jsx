import HomeTopbar from "@/components/shared/HomeTopbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <header className="bg-background">
        <HomeTopbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
