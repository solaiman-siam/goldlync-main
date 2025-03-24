import { cn } from "@/lib/shadcn/utils";
import { forwardRef } from "react";

const SectionTitle = forwardRef(
  ({ children, className, tagName, ...props }, ref) => {
    const Comp = tagName || "h3";

    return (
      <Comp
        className={cn(
          "mx-auto mb-2 w-full max-w-[600px] text-center font-manrope text-2xl font-bold leading-[120%] md:text-3xl lg:mb-3 lg:text-4xl",
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
