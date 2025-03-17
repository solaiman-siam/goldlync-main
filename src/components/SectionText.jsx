import { cn } from "@/lib/shadcn/utils";
import { forwardRef } from "react";

const SectionText = forwardRef(
  ({ children, className, tagName, ...props }, ref) => {
    const Comp = tagName || "p";
    return (
      <Comp
        className={cn(
          "mx-auto my-2 lg:my-3 w-full max-w-[700px] text-center font-manrope lg:text-lg font-normal lg:leading-[200%] text-[#242424]",
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
SectionText.displayName = "SectionText";

export default SectionText;
