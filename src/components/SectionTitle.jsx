import { cn } from "@/lib/shadcn/utils";
import { forwardRef } from "react";

const SectionTitle = forwardRef(
  ({ children, className, tagName, ...props }, ref) => {
    const Comp = tagName || "h2";
    return (
      <Comp
        className={cn(
          "mx-auto my-3 w-full max-w-[600px] text-center font-manrope text-4xl font-bold leading-[120%]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
