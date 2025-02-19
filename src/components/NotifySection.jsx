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

const NotifySection = () => {
  return (
    <div className="flex gap-2.5 w-fit">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <span className="p-2.5 border border-primary rounded-full block">
            <NotificationIcon />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none bg-transparent shadow-none p-0">
          <Notification />
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/message" className="p-2.5 border border-primary rounded-full block">
        <MessageIcon />
        </Link>
    </div>
  );
};

export default NotifySection;
