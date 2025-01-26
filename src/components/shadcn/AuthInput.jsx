import { forwardRef } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/shadcn/utils";

const AuthInput = forwardRef(
  (
    { icon, iconPlace = "left", containerClassName, className, ...props },
    ref
  ) => (
    <div className={cn("relative", containerClassName)}>
      <Input
        ref={ref}
        className={cn(
          "h-14",
          iconPlace === "left" && "pl-12",
          iconPlace === "right" && "pr-12",
          className
        )}
        {...props}
      />
      {icon && (
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2",
            iconPlace === "left" && "left-4",
            iconPlace === "right" && "right-4"
          )}
        >
          {icon}
        </span>
      )}
    </div>
  )
);
AuthInput.displayName = "AuthInput";

export default AuthInput;
