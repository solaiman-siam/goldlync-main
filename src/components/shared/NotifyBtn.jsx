import { cn } from "@/lib/shadcn/utils";
import { useState } from "react";

const NotifyBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
  };

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={cn(
        "group relative inline-flex h-10 w-20 flex-shrink-0 items-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out",
        isChecked ? "bg-accent" : "bg-[#E0E0E0]"
      )}
    >
      <span
        className={cn(
          "absolute bottom-1 top-1 flex aspect-square items-center justify-center rounded-full bg-transparent transition-all duration-500 ease-in-out",
          isChecked ? "translate-x-[44px]" : "translate-x-1"
        )}
      >
        <span className="h-full w-full rounded-full border-4 border-white bg-transparent" />
      </span>
    </button>
  );
};

export default NotifyBtn;
