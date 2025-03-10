import Footer from "@/components/shared/Footer";
import HomeTopbar from "@/components/shared/HomeTopbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const hideFooterPaths = ["/message"];

  return (
    <div className="font-poppins">
      <ScrollRestoration />
      <header className="relative z-50 bg-background">
        <HomeTopbar />
      </header>
      <main>
        <Outlet />
      </main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default MainLayout;
