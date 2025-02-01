import Footer from "@/components/shared/Footer";
import HomeTopbar from "@/components/shared/HomeTopbar";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <ScrollRestoration/>
      <header className="relative z-50 bg-background">
        <HomeTopbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
