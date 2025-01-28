import { cn } from "@/lib/shadcn/utils";
import { Loader } from "lucide-react";

const Spinner = ({ className, size = 20 }) => {
  return (
    <span
      className={cn("animate-spinner inline-block h-fit w-fit", className)}
      role="status"
    >
      <Loader size={size} />
    </span>
  );
};

export default Spinner;
