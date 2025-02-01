import { NavLink, useLocation } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import userImage from "@/assets/images/user-1.png";
import { cn } from "@/lib/shadcn/utils";
import {
  BalanceIcon1,
  BookmarkIcon1,
  FileIcon1,
  LogoutIcon1,
  NotificationIcon1,
  ProfileIcon1,
  SupportIcon1,
} from "@/assets/icons";

const ConstructorProfileSidebar = () => {
  return (
    <aside className="flex w-[420px] flex-shrink-0 flex-col items-start gap-8">
      <div className="flex gap-3 items-center">
        <Avatar className="size-[70px]">
          <AvatarImage src={userImage} alt="user image" />
          <AvatarFallback />
        </Avatar>
        <div className="">
          <div className="font-manrope text-xl font-bold mb-1">YES Innovation</div>
          <button type="button" className="hover:underline">
            View Profile
          </button>
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Account</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/profile/profile-details">
            <FileIcon1 />
            <span>Profile Details</span>
          </SidebarLink>
          <SidebarLink path="/profile/message">
            <ProfileIcon1 />
            <span>Message</span>
          </SidebarLink>
          <SidebarLink path="/profile/my-jobs">
            <BookmarkIcon1 />
            <span>My Job</span>
          </SidebarLink>
          <SidebarLink path="/profile/request-pro">
            <BookmarkIcon1 />
            <span>Request pro</span>
          </SidebarLink>
          <SidebarLink path="/profile/notifications">
            <NotificationIcon1 />
            <span>Notifications</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Payments</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/profile/balance">
            <BalanceIcon1 />
            <span>Balance</span>
          </SidebarLink>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <div className="font-manrope text-xl font-bold">Support</div>
        <ul className="flex w-full flex-col gap-1.5">
          <SidebarLink path="/profile/online-help-desk">
            <SupportIcon1 />
            <span>Online Help desk</span>
          </SidebarLink>
        </ul>
      </div>
      <button
        className="flex w-full items-center gap-5 px-3 py-5 font-manrope text-xl font-normal text-destructive transition-colors duration-300 hover:bg-card [&_svg]:w-[30px]"
        type="button"
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
