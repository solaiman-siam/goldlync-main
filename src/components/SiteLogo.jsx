import { cn } from "@/lib/shadcn/utils";
import { forwardRef } from "react";
import { Link } from "react-router";
import siteLogo from "@/assets/images/site-logo.png";

const SiteLogo = forwardRef(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    to="/"
    className={cn("flex items-end gap-2", className)}
    {...props}
  >
    <span className="font-manrope text-3xl font-bold uppercase text-accent">
      GOLDLYNC
    </span>
    <img src={siteLogo} alt="Gold Lync site logo" />
  </Link>
));
SiteLogo.displayName = "SiteLogo";

export default SiteLogo;
