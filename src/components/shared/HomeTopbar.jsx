import { cn } from "@/lib/shadcn/utils";
import SiteLogo from "@/components/SiteLogo";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/shadcn/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Container from "../Container";
import NotifySection from "../NotifySection";

const HomeTopbar = () => {
  const [isOpen, setOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("auth_token") ? true : false;

  return (
    <Container>
      <nav className="container flex items-center justify-between gap-2 bg-background pb-6 pt-5">
        <SiteLogo />

        <div className="hidden lg:block">
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
              <NavItem path="/contact">Contact</NavItem>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <div className="hidden lg:block">
            {isAuthenticated ? <NotifySection /> : 
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link to="/pro-register">Join as a Pro</Link>
              </Button>
            </div>}
          </div>

          {/* Mobile Menu */}

          {/* bar */}
          <button onClick={() => setOpen(!isOpen)} className="lg:hidden">
            <RxHamburgerMenu className="text-2xl" />
          </button>

          {/* Blur Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
              isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          ></div>

          <div
            className={`fixed right-0 top-0 z-50 h-full w-[250px] border-transparent bg-white px-5 py-4 shadow-lg transition-transform duration-500 md:w-[300px] lg:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div>
                  <Link onClick={() => setOpen(false)} to="/">
                    <div className="flex justify-end">
                      <RxCross2 size={24} />
                    </div>
                  </Link>
                  <SiteLogo className="w-30" />
                </div>
                {/* nav item */}
                <ul className="font-syne mt-5 space-y-3 text-base">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about-us", label: "About us" },
                    { to: "/services", label: "Services" },
                    { to: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.to}>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to={item.to}
                        className={({ isActive }) =>
                          `text-md w-full pb-1 font-poppins font-medium capitalize transition-colors duration-300 ${
                            isActive ? "text-accent" : "hover:text-accent"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* auth button */}
              { !isAuthenticated ?
              <div className="flex flex-col items-center gap-2">
                <Button className="w-full " variant="outline" asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/pro-register">Join as a Pro</Link>
                </Button>
              </div> :
              <NotifySection/>}
            </div>
          </div>
        </div>
      </nav>
    </Container>
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
