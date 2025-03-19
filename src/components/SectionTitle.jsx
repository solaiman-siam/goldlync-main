import { cn } from "@/lib/shadcn/utils";
import { forwardRef } from "react";

const SectionTitle = forwardRef(
  ({ children, className, tagName, ...props }, ref) => {
    const Comp = tagName || "h3";

    return (
      <Comp
        className={`mx-auto mb-2 lg:mb-3 w-full max-w-[600px] text-center font-manrope text-2xl md:text-3xl lg:text-4xl font-bold leading-[120%] ${className}`}
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
