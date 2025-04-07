import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import Notification from "./shared/Notification";
import { MessageIcon, NotificationIcon } from "@/assets/icons";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const NotifySection = () => {
  const { chooseRole } = useContext(AuthContext);
  return (
    <div className="flex h-[56px] w-fit gap-2.5">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <span className="block rounded-full border border-primary p-2.5">
            <NotificationIcon />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none bg-transparent p-0 shadow-none">
          <Notification />
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        to="/message"
        className="block rounded-full border border-primary p-2.5"
      >
        <MessageIcon />
      </Link>
      <Link
        to={chooseRole==="pro" ? "/constructor-profile" : "/profile"}
        className="aspect-square h-full overflow-hidden rounded-full"
      >
        <img
          src="https://i.ibb.co.com/V7XRPhM/image-6-1.png"
          alt=""
          className="size-full object-cover object-center"
        />
      </Link>
    </div>
  );
};

export default NotifySection;
