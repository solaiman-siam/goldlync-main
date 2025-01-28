import { Link } from "react-router";
import SiteLogo from "../SiteLogo";
import {
  FacebookIcon2,
  GithubIcon2,
  InstagramIcon2,
  TwitterIcon2,
} from "@/assets/icons/SocialIcon";
import footerImage from "@/assets/images/footer-image.png";

const Footer = () => {
  const footerLinks = [
    {
      links: [
        { path: "#", text: "Post a job" },
        { path: "#", text: "How does it work" },
        { path: "#", text: "Find a professional" },
        { path: "#", text: "Help desk for clients" },
      ],
    },
    {
      links: [
        { path: "#", text: "Register as a professional" },
        { path: "#", text: "Register as a professional" },
        { path: "#", text: "Quality requirements" },
        { path: "#", text: "Help desk for professionals" },
      ],
    },
    {
      links: [
        { path: "#", text: "About us" },
        { path: "#", text: "Press and media" },
        { path: "#", text: "Vacancies" },
        { path: "#", text: "Become our partner" },
        { path: "#", text: "Become an affiliate" },
      ],
    },
    {
      links: [
        { path: "#", text: "Occupations" },
        { path: "#", text: "Services" },
        { path: "#", text: "To do odd jobs" },
        { path: "#", text: "Find professionals near" },
      ],
    },
  ];

  return (
    <footer className="mt-8 bg-card px-4 py-16">
      <div className="container">
        <SiteLogo />
        <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-16 md:col-span-3 lg:grid-cols-6">
          <FooterLogo />
          {footerLinks?.map((footerLink, idx) => (
            <FooterLinks
              key={`footer-links-${idx}`}
              keyPrefix={`footer-link-${idx}`}
              links={footerLink.links}
            />
          ))}
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
    <img src={footerImage} alt="image" />
    <div className="text-base mt-2 font-medium leading-6 text-[#334155] opacity-70">
      4900+ 5 Stars
    </div>
    <ul className="mt-10 flex items-center gap-5">
      <SocialLink path="https://x.com">
        <TwitterIcon2 />
      </SocialLink>
      <SocialLink path="https://facebook.com">
        <FacebookIcon2 />
      </SocialLink>
      <SocialLink path="https://instagram.com">
        <InstagramIcon2 />
      </SocialLink>
      <SocialLink path="https://github.com">
        <GithubIcon2 />
      </SocialLink>
    </ul>
  </div>
);

const SocialLink = ({ path, children }) => (
  <li>
    <Link
      to={path}
      target="_blank"
      className="inline-flex size-[35px] items-center justify-center [&_svg]:w-full"
    >
      {children}
    </Link>
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
