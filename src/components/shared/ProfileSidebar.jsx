import { NavLink, useLocation, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import userImage from "@/assets/images/user-1.png";
import { cn } from "@/lib/shadcn/utils";
import {
  BookmarkIcon1,
  FileIcon1,
  LogoutIcon1,
  NotificationIcon1,
  ProfileIcon1,
  SupportIcon1,
} from "@/assets/icons";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const ProfileSidebar = () => {
  const token = localStorage.getItem("auth_token");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleLogOut = async () => {
    setLoader(true);
    try {
      const response = await axios.post(
        "https://goldlync.softvencefsd.xyz/api/logout",
        {}, // Empty body
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);
      navigate("/");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user-data");
      localStorage.removeItem("role");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", {
          message: error.message,
          status: error.response?.status || "No status",
          statusText: error.response?.statusText || "No status text",
          data: error.response?.data || "No response data",
        });
      } else {
        console.error("Unexpected Error:", error);
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <aside className="flex w-[420px] flex-shrink-0 flex-col items-start gap-8">
      <div className="flex items-center gap-3">
        <Avatar className="size-[70px]">
          <AvatarImage src={userImage} alt="user image" />
          <AvatarFallback />
        </Avatar>
        <div className="font-manrope text-xl font-bold">Floyd Miles</div>
      </div>
      <div className="mb-20 flex w-full flex-grow flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Account</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/profile/profile-details">
            <FileIcon1 />
            <span>Profile Details</span>
          </SidebarLink>
          <SidebarLink path="/message">
            <ProfileIcon1 />
            <span>Message</span>
          </SidebarLink>
          <SidebarLink path="/profile/my-jobs">
            <BookmarkIcon1 />
            <span>My Job</span>
          </SidebarLink>
          <SidebarLink path="/profile/notifications">
            <NotificationIcon1 />
            <span>Notifications</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Support</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/online-help-desk">
            <SupportIcon1 />
            <span>Online Help Desk</span>
          </SidebarLink>
        </ul>
      </div>
      <button
        className="flex w-full items-center gap-5 px-3 py-5 font-manrope text-xl font-normal text-destructive transition-colors duration-300 hover:bg-card [&_svg]:w-[30px]"
        type="button"
        onClick={handleLogOut}
      >
        {loader ? (
          <Loader2 className="size-[33px] animate-spin" />
        ) : (
          <LogoutIcon1 className="text-destructive" />
        )}
        <span>Log out</span>
      </button>
    </aside>
  );
};

const SidebarLink = ({ path, children }) => {
  const { pathname } = useLocation();

  const isActiveLocation =
    pathname === "/profile" && path === "/profile/profile-details";

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-5 px-3 py-5 font-manrope text-xl font-normal transition-colors duration-300 [&_svg]:w-[30px]",
            isActive ? "bg-card" : "hover:bg-card",
            isActiveLocation ? "bg-card" : "hover:bg-card"
          )
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ProfileSidebar;
