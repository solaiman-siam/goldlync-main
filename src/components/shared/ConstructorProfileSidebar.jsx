import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import userImage from "@/assets/images/user-1.png";
import { cn } from "@/lib/shadcn/utils";
import {
  LogoutIcon1,
} from "@/assets/icons";
import { Constructor1, Constructor10, Constructor11, Constructor12, Constructor2, Constructor3, Constructor5, Constructor7, Constructor8 } from "@/assets/icons/ProfileSidebarIcon";
import axios from "axios";
import toast from "react-hot-toast";

const ConstructorProfileSidebar = () => {

  const token = localStorage.getItem("auth_token");
  const navigate = useNavigate();

  const handleLogOut = async() => {
    try {
      const response = await axios.post(
        "https://goldlync.softvencefsd.xyz/api/logout",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);
      Navigate("/");
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
    }
    finally {
      localStorage.removeItem("auth_token");
      navigate("/");
    }
  }

  return (
    <aside className="flex w-[420px] flex-shrink-0 flex-col items-start gap-8">
      <div className="flex gap-3 items-center">
        <Avatar className="size-[70px]">
          <AvatarImage src={userImage} alt="user image" />
          <AvatarFallback />
        </Avatar>
        <div className="">
          <div className="font-manrope text-xl font-bold mb-1">YES Innovation</div>
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Account</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/constructor-profile/profile-details">
            <Constructor1 />
            <span>Company description</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/reviews">
            <Constructor2 />
            <span>Reviews</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/portfolio">
            <Constructor3 />
            <span>Portfolio</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/manage-account">
          <Constructor5 />
            <span>Manage Account</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Settings for jobs</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/constructor-profile/jobs">
          <Constructor7 />
            <span>Jobs</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/working-area">
          <Constructor7 />
            <span>Working area</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/add-services">
          <Constructor8 />
            <span>Add Services</span>
          </SidebarLink>
          <SidebarLink path="/constructor-profile/notification-settings">
          <Constructor10 />
            <span>Notifications</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Payments</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/constructor-profile/balance">
          <Constructor11 />
            <span>Balance</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Support</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/online-help-desk">
          <Constructor12 />
            <span>Online Help Desk</span>
          </SidebarLink>
        </ul>
      </div>
      <button
        className="flex w-full items-center gap-5 px-3 py-5 font-manrope text-xl font-normal text-destructive transition-colors duration-300 hover:bg-card [&_svg]:w-[30px]"
        type="button"
        onClick={handleLogOut}
      >
        <LogoutIcon1 className="text-destructive" />
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

export default ConstructorProfileSidebar;
