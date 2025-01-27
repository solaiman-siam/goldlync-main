import { Link } from "react-router";
import SiteLogo from "../SiteLogo";

const Footer = () => {
  const firstLinks = [
    { path: "#", text: "Post a job" },
    { path: "#", text: "How does it work" },
    { path: "#", text: "Find a professional" },
    { path: "#", text: "Help desk for clients" },
  ];
  const secondLinks = [
    { path: "#", text: "Register as a professional" },
    { path: "#", text: "Register as a professional" },
    { path: "#", text: "Quality requirements" },
    { path: "#", text: "Help desk for professionals" },
  ];
  const thirdLinks = [
    { path: "#", text: "About us" },
    { path: "#", text: "Press and media" },
    { path: "#", text: "Vacancies" },
    { path: "#", text: "Become our partner" },
    { path: "#", text: "Become an affiliate" },
  ];
  const forthLinks = [
    { path: "#", text: "Occupations" },
    { path: "#", text: "Services" },
    { path: "#", text: "To do odd jobs" },
    { path: "#", text: "Find professionals near" },
  ];
  return (
    <footer className="mt-8 bg-card px-4 py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:col-span-3 lg:grid-cols-6">
          <FooterLogo />
          <FooterLinks keyPrefix="first-link" links={firstLinks} />
          <FooterLinks keyPrefix="second-link" links={secondLinks} />
          <FooterLinks keyPrefix="third-link" links={thirdLinks} />
          <FooterLinks keyPrefix="forth-link" links={forthLinks} />
        </div>

        <hr className="my-9 border-border" />
        <div className="flex items-center justify-between gap-2">
          <p className="font-manrope text-[16.789px] font-normal">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
          <ul className="flex items-center gap-2">
            <li>
              <Link
                to="#"
                className="font-manrope text-sm font-normal hover:underline"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-manrope text-sm font-normal hover:underline"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-manrope text-sm font-normal hover:underline"
              >
                General terms and conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const FooterLogo = () => (
  <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
    <SiteLogo />
    <ul className="mt-9 flex items-center space-x-3">
      <SocialLink
        href="#"
        icon={
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.633 7.997..." />
          </svg>
        }
      />
      <SocialLink
        href="#"
        icon={
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.397 20.997v-8.196..." />
          </svg>
        }
      />
      <SocialLink
        href="#"
        icon={
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.999 7.377a4.623 4.623..." />
          </svg>
        }
      />
      <SocialLink
        href="#"
        icon={
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509..."
            />
          </svg>
        }
      />
    </ul>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <li>
    <a
      href={href}
      className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600"
    >
      {icon}
    </a>
  </li>
);

const FooterLinks = ({ keyPrefix, links }) => (
  <div>
    <ul className="mt-6 space-y-4">
      {links.map((link, index) => (
        <li key={`${keyPrefix}-${index}`}>
          <Link
            to={link.path}
            className="text-base transition-colors duration-200 hover:text-accent"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
