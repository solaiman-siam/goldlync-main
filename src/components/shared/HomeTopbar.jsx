import { cn } from "@/lib/shadcn/utils";
import SiteLogo from "@/components/SiteLogo";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/shadcn/ui/button";

const HomeTopbar = () => {
  return (
    <nav className="container my-4 flex items-center justify-between gap-2 bg-background">
      <SiteLogo />
      <ul className="flex list-none items-center gap-8">
        <li>
          <NavItem path="/">Home</NavItem>
        </li>
        <li>
          <NavItem path="/about-us">About us</NavItem>
        </li>
        <li>
          <NavItem path="/services">Services</NavItem>
        </li>
        <li>
          <NavItem path="/features">Features</NavItem>
        </li>
        <li>
          <NavItem path="/contact">Contact</NavItem>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <Button variant="outline" asChild>
          <Link to="/login">log in</Link>
        </Button>
        <Button asChild>
          <Link to="/choose">Sign as a Pro</Link>
        </Button>
      </div>
    </nav>
  );
};

const NavItem = ({ children, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      cn(
        "text-md font-poppins font-medium capitalize transition-colors duration-300",
        isActive ? "text-accent" : "hover:text-accent"
      )
    }
  >
    {children}
  </NavLink>
);

export default HomeTopbar;
