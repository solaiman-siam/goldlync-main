import ProfileSidebar from "@/components/shared/ProfileSidebar";
import { Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <div className="container mt-10">
      <h1 className="mb-12 font-manrope text-[32px] font-bold">
        Profile
      </h1>
      <div className="flex items-start gap-4">
        <ProfileSidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
