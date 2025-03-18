import * as React from "react"

import { cn } from "@/lib/shadcn/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
