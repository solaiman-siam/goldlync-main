import { cn } from "@/lib/shadcn/utils";
import { forwardRef, useState } from "react";
import { Input } from "./ui/input";
import { EyeOffIcon1, EyeOpenIcon1, LockIcon1 } from "@/assets/icons";

const PasswordField = forwardRef(
  ({ containerClassName, className, ...props }, ref) => {
    const [showIcon, setShowIcon] = useState(false);

    return (
      <div className={cn("relative", containerClassName)}>
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          <LockIcon1 className="w-6 text-input" />
        </span>
        <Input
          ref={ref}
          type={showIcon ? "text" : "password"}
          className={cn("h-14 pl-12 pr-12", className)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowIcon((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 [&_svg]:w-6 [&_svg]:text-input"
        >
          {showIcon ? <EyeOpenIcon1 /> : <EyeOffIcon1 />}
        </button>
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";

export default PasswordField;
