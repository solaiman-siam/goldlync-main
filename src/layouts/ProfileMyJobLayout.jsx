import ProfileSection from "@/components/profile/ProfileSection";
import { cn } from "@/lib/shadcn/utils";
import { NavLink, Outlet, useLocation } from "react-router";

const ProfileMyJobLayout = () => {
  return (
    <ProfileSection title="My Jobs">
      <ProfileMyJobTabs />
      <Outlet/>
    </ProfileSection>
  );
};

const ProfileMyJobTabs = () => {
  return (
    <div className="my-8 grid grid-cols-3 items-center justify-center gap-4 text-center">
      <ProfileMyJobTabItem path="/profile/my-jobs/complete">
        Order completed
      </ProfileMyJobTabItem>
      <ProfileMyJobTabItem path="/profile/my-jobs/pending">
        Pending
      </ProfileMyJobTabItem>
      <ProfileMyJobTabItem path="/profile/my-jobs/cancel">
        Cancel
      </ProfileMyJobTabItem>
    </div>
  );
};

const ProfileMyJobTabItem = ({ path, children }) => {
  const { pathname } = useLocation();

  const isActiveLocation =
    pathname === "/profile/my-jobs" && path === "/profile/my-jobs/complete";

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          "flex items-center justify-center border-b border-border px-8 py-4 text-center font-medium text-foreground",
          isActive && "border-accent text-accent",
          isActiveLocation && "border-accent text-accent"
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default ProfileMyJobLayout;
