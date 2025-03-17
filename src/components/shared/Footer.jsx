import { Link } from "react-router";
import SiteLogo from "../SiteLogo";
import {
  FacebookIcon2,
  GithubIcon2,
  InstagramIcon2,
  TwitterIcon2,
} from "@/assets/icons/SocialIcon";
import footerImage from "@/assets/images/footer-image.png";
import Container from "../Container";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { path: "/", text: "Home" },
        { path: "/about-us", text: "About Us" },
        { path: "/services", text: "Services" },
        { path: "/contact", text: "Contact" },
      ],
    },
    {
      title: "Publications",
      links: [
        { path: "/blogs", text: "Blogs" },
        { path: "/#explore-projects", text: "Explore Projects" },
        { path: "#", text: "FAQ" },
        { path: "/#client-review", text: "Client Review" },
      ],
    },
    {
      title: "Help",
      links: [
        {
          path: "tel:+1234567890",
          text: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M15.7496 14.882V12.8497C15.7578 12.5175 15.6435 12.1938 15.4281 11.9402C14.8211 11.2251 12.7391 10.7678 11.9138 10.9434C11.2705 11.0804 10.8204 11.7263 10.3803 12.1655C8.68098 11.2011 7.27393 9.79684 6.30765 8.10079C6.74767 7.66165 7.39491 7.21246 7.53213 6.5704C7.70785 5.74801 7.25109 3.6793 6.54099 3.06982C6.29121 2.85544 5.97185 2.73901 5.64243 2.74225H3.60608C2.83018 2.74298 2.18466 3.4389 2.2553 4.21908C2.25 10.9434 7.50003 16.2422 14.2698 16.2369C15.0542 16.3077 15.7527 15.6589 15.7496 14.882Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.875 5.36719C11.4279 5.47505 11.9767 5.71888 12.375 6.11719C12.7733 6.5155 13.0171 7.06432 13.125 7.61719" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.25 2.74219C12.3986 2.86979 13.4323 3.42549 14.25 4.24219C15.0677 5.05889 15.6209 6.09371 15.75 7.24219" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>+91 0125426521`,
        },
        {
          path: "https://wa.me/1234567890?text=Hello, I need assistance!",
          text: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7256 3.89345C13.2489 2.41501 11.2851 1.60047 9.19271 1.59961C4.88154 1.59961 1.3727 5.10817 1.37102 9.42067C1.37041 10.7993 1.73058 12.1448 2.41508 13.331L1.30542 17.3841L5.4518 16.2964C6.59423 16.9195 7.88052 17.248 9.1896 17.2484H9.19277C9.19252 17.2484 9.19303 17.2484 9.19277 17.2484C13.5035 17.2484 17.0126 13.7395 17.0144 9.42693C17.0152 7.33695 16.2024 5.37182 14.7256 3.89345ZM9.19274 15.9275H9.19011C8.02361 15.927 6.87944 15.6136 5.88129 15.0213L5.64392 14.8804L3.1834 15.5258L3.84018 13.1269L3.68559 12.8809C3.03484 11.8458 2.69115 10.6495 2.69165 9.42111C2.69305 5.83674 5.60947 2.92063 9.19538 2.92063C10.9318 2.92117 12.5641 3.5983 13.7915 4.82712C15.0189 6.05594 15.6945 7.68931 15.6938 9.42639C15.6923 13.0111 12.776 15.9275 9.19274 15.9275Z" fill="#0F172A"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7586 11.0584C12.5632 10.9606 11.6023 10.4879 11.4232 10.4226C11.244 10.3574 11.1137 10.3248 10.9834 10.5204C10.8532 10.7161 10.4786 11.1563 10.3646 11.2868C10.2506 11.4171 10.1366 11.4335 9.94119 11.3356C9.74577 11.2378 9.11604 11.0315 8.36957 10.3656C7.78855 9.84738 7.39634 9.20743 7.28229 9.01172C7.16831 8.81611 7.27017 8.71035 7.36802 8.61288C7.45593 8.52528 7.56347 8.38463 7.6612 8.27048C7.75889 8.15641 7.79147 8.07481 7.85662 7.94448C7.92177 7.81402 7.88923 7.69987 7.84033 7.60208C7.79147 7.50426 7.40063 6.5423 7.23778 6.15092C7.07909 5.76989 6.91799 5.82152 6.79801 5.81545C6.68419 5.80977 6.55373 5.80859 6.42346 5.80859C6.29319 5.80859 6.08142 5.85752 5.90231 6.05313C5.72318 6.24881 5.21826 6.72166 5.21826 7.68352C5.21826 8.64552 5.91857 9.57484 6.0163 9.70523C6.11399 9.83573 7.3944 11.8097 9.3549 12.6562C9.82118 12.8576 10.1852 12.9779 10.469 13.0679C10.9372 13.2167 11.3633 13.1957 11.7 13.1453C12.0755 13.0892 12.8563 12.6726 13.0192 12.2161C13.182 11.7596 13.182 11.3682 13.1331 11.2867C13.0843 11.2052 12.954 11.1563 12.7586 11.0584Z" fill="#0F172A"/>
</svg> +252425323252`,
        },
        {
          path: "mailto:example@example.commailto:example@example.com?subject=Support Request&body=Hello, I need help with...",
          text: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <g clip-path="url(#clip0_18252_11226)">
    <path d="M16.875 3.11719H1.125C0.826631 3.11719 0.540483 3.23571 0.329505 3.44669C0.118526 3.65767 0 3.94382 0 4.24219L0 14.7422C0 15.0406 0.118526 15.3267 0.329505 15.5377C0.540483 15.7487 0.826631 15.8672 1.125 15.8672H16.875C17.1734 15.8672 17.4595 15.7487 17.6705 15.5377C17.8815 15.3267 18 15.0406 18 14.7422V4.24219C18 3.94382 17.8815 3.65767 17.6705 3.44669C17.4595 3.23571 17.1734 3.11719 16.875 3.11719ZM16.635 3.86719L9 9.76969L1.365 3.86719H16.635ZM0.75 14.5884V4.33969L6.52875 8.80594L0.75 14.5884ZM1.27875 15.1172L7.125 9.27094L8.7675 10.5422C8.83307 10.5927 8.9135 10.62 8.99625 10.62C9.079 10.62 9.15943 10.5927 9.225 10.5422L10.875 9.27094L16.7213 15.1172H1.27875ZM17.25 14.5884L11.4713 8.80594L17.25 4.33969V14.5884Z" fill="#0F172A"/>
  </g>
  <defs>
    <clipPath id="clip0_18252_11226">
      <rect width="18" height="18" fill="white" transform="translate(0 0.492188)"/>
    </clipPath>
  </defs>
</svg> hello@gmail.com`,
        },
        {
          path: "/online-help-desk",
          text: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <g clip-path="url(#clip0_18252_11231)">
    <path d="M16.7354 8.33994C16.6713 6.38343 15.8629 4.52515 14.4753 3.14441C13.0119 1.68078 11.0671 0.875 8.99933 0.875C4.82305 0.875 1.41064 4.19909 1.26355 8.33994C0.94153 8.48258 0.66779 8.71555 0.475501 9.01063C0.283211 9.3057 0.180626 9.65021 0.180176 10.0024V12.0448C0.180697 12.5271 0.372521 12.9895 0.713561 13.3306C1.0546 13.6716 1.517 13.8634 1.9993 13.864C2.31135 13.8636 2.61052 13.7395 2.83118 13.5188C3.05183 13.2982 3.17596 12.999 3.17633 12.6869V9.36003C3.17633 8.75056 2.70889 8.25359 2.11461 8.19453C2.33399 4.58694 5.33718 1.71875 8.99933 1.71875C10.8421 1.71875 12.5749 2.43706 13.879 3.74122C15.0766 4.93878 15.7775 6.49972 15.8829 8.19481C15.2892 8.25444 14.8226 8.75113 14.8226 9.36003V12.6867C14.8226 13.3012 15.2974 13.8013 15.8987 13.8533V14.6939C15.8982 15.1491 15.7171 15.5855 15.3952 15.9074C15.0733 16.2292 14.6368 16.4102 14.1816 16.4107H12.9101C12.8244 16.1608 12.6625 15.944 12.4473 15.7907C12.2321 15.6375 11.9742 15.5555 11.71 15.5563H10.3994C10.2112 15.5563 10.0307 15.5962 9.8653 15.6733C9.64386 15.7756 9.4563 15.9391 9.32474 16.1445C9.19318 16.3499 9.12311 16.5886 9.1228 16.8326C9.1228 17.174 9.25583 17.4946 9.49686 17.7345C9.615 17.8536 9.75562 17.9481 9.91055 18.0124C10.0655 18.0767 10.2316 18.1096 10.3994 18.1092H11.71C12.2534 18.1092 12.7324 17.7579 12.911 17.2544H14.1816C15.5938 17.2544 16.7424 16.1058 16.7424 14.6939V13.7031C17.0625 13.5597 17.3344 13.3268 17.5253 13.0325C17.7162 12.7382 17.818 12.3951 17.8185 12.0443V10.0018C17.8185 9.26103 17.3724 8.62316 16.7354 8.33994ZM2.3323 9.36003V12.6867C2.3323 12.8703 2.18296 13.0199 1.99902 13.0199C1.74043 13.0196 1.49251 12.9168 1.30965 12.7339C1.1268 12.5511 1.02394 12.3032 1.02364 12.0446V10.0021C1.02394 9.74353 1.1268 9.49561 1.30965 9.31276C1.49251 9.12991 1.74043 9.02705 1.99902 9.02675C2.18296 9.02675 2.3323 9.17638 2.3323 9.36003ZM12.1333 16.9231C12.1123 17.02 12.0589 17.1068 11.9819 17.1691C11.9049 17.2315 11.8088 17.2656 11.7097 17.266H10.3991C10.2838 17.266 10.1755 17.221 10.0928 17.1383C10.0526 17.0983 10.0207 17.0508 9.99895 16.9984C9.97722 16.946 9.96611 16.8898 9.96627 16.8331C9.96657 16.7184 10.0123 16.6086 10.0934 16.5275C10.1745 16.4464 10.2844 16.4008 10.3991 16.4006H11.7097C11.8251 16.4006 11.9333 16.4453 12.0157 16.528C12.0973 16.6093 12.1423 16.7178 12.1423 16.8331C12.1426 16.8641 12.1392 16.895 12.1333 16.9231ZM16.9747 12.0446C16.9744 12.3032 16.8716 12.5511 16.6887 12.7339C16.5059 12.9168 16.258 13.0196 15.9994 13.0199C15.911 13.0199 15.8263 12.9847 15.7638 12.9222C15.7013 12.8598 15.6662 12.775 15.6661 12.6867V9.36003C15.6661 9.17638 15.8154 9.02675 15.9994 9.02675C16.258 9.02705 16.5059 9.12991 16.6887 9.31276C16.8716 9.49561 16.9744 9.74353 16.9747 10.0021V12.0446Z" fill="#0F172A"/>
    <path d="M11.7314 12.1904C12.2054 12.1899 12.6597 12.0013 12.9949 11.6662C13.33 11.3311 13.5185 10.8767 13.519 10.4028V6.76028C13.519 6.28384 13.3329 5.83497 12.9948 5.49691C12.6567 5.15884 12.2081 4.97266 11.7314 4.97266H6.26785C5.7939 4.97318 5.33952 5.16168 5.00438 5.49681C4.66925 5.83195 4.48075 6.28633 4.48022 6.76028V10.4028C4.48075 10.8767 4.66925 11.3311 5.00438 11.6662C5.33952 12.0013 5.7939 12.1899 6.26785 12.1904H6.30132V13.1343C6.30076 13.2495 6.323 13.3637 6.36674 13.4704C6.41049 13.577 6.47489 13.6739 6.55623 13.7556C6.63757 13.8372 6.73425 13.902 6.84071 13.9462C6.94717 13.9903 7.06131 14.013 7.17657 14.0129C7.29175 14.0131 7.40579 13.9901 7.51191 13.9453C7.61802 13.9006 7.71402 13.8349 7.79419 13.7522L9.36441 12.1904H11.7314ZM8.89332 11.4692L7.19401 13.1593C7.18641 13.1672 7.18079 13.1731 7.16476 13.166C7.14535 13.1582 7.14535 13.1455 7.14535 13.1343V11.7685C7.14535 11.6566 7.1009 11.5493 7.02179 11.4702C6.94267 11.3911 6.83536 11.3466 6.72347 11.3466H6.26813C6.01789 11.3463 5.77799 11.2468 5.60104 11.0698C5.42409 10.8929 5.32455 10.653 5.32426 10.4028V6.76028C5.32455 6.51004 5.42409 6.27014 5.60104 6.09319C5.77799 5.91624 6.01789 5.8167 6.26813 5.81641H11.7317C11.9831 5.81641 12.2197 5.91484 12.3985 6.09344C12.5774 6.27231 12.6756 6.50912 12.6756 6.76028V10.4028C12.6753 10.653 12.5757 10.8929 12.3988 11.0698C12.2218 11.2468 11.9819 11.3463 11.7317 11.3466H9.19088C9.07922 11.3466 8.97235 11.3908 8.89332 11.4692Z" fill="#0F172A"/>
    <path d="M6.95053 8.02637C6.60741 8.02637 6.32812 8.30593 6.32812 8.64877C6.32812 8.99162 6.60769 9.27118 6.95053 9.27118C7.29394 9.27118 7.5735 8.99162 7.5735 8.64877C7.5735 8.30593 7.29422 8.02637 6.95053 8.02637ZM8.99972 8.02637C8.65659 8.02637 8.37731 8.30593 8.37731 8.64877C8.37731 8.99162 8.65688 9.27118 8.99972 9.27118C9.34341 9.27118 9.62269 8.99162 9.62269 8.64877C9.62269 8.30593 9.34341 8.02637 8.99972 8.02637ZM11.0489 8.02637C10.7058 8.02637 10.4265 8.30593 10.4265 8.64877C10.4265 8.99162 10.7061 9.27118 11.0489 9.27118C11.3923 9.27118 11.6719 8.99162 11.6719 8.64877C11.6719 8.30593 11.3923 8.02637 11.0489 8.02637Z" fill="#0F172A"/>
  </g>
  <defs>
    <clipPath id="clip0_18252_11231">
      <rect width="18" height="18" fill="white" transform="translate(0 0.492188)"/>
    </clipPath>
  </defs>
</svg> Online HelpDesk`,
        },
      ],
    },
  ];

  return (
    <footer className="bg-card py-6 lg:py-16">
      <Container>
        <SiteLogo className="mb-4 md:mb-6 lg:mb-8 " />
        <div className="justify-between flex flex-wrap gap-5">
          <FooterLogo />
          {footerLinks?.map((footerLink, idx) => (
            <FooterLinks
              key={`footer-links-${idx}`}
              keyPrefix={`footer-link-${idx}`}
              title={footerLink.title}
              links={footerLink.links}
            />
          ))}
        </div>

        <hr className="my-4 md:my-6 lg:my-8 border-border" />
        <div className="items-center justify-between gap-2 md:flex">
          <p className="font-manrope text-sm font-normal lg:text-base text-center">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
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
      </Container>
    </footer>
  );
};

const FooterLogo = () => (
  <div className="flex-[2] space-y-4 md:space-y-[22px] lg:space-y-7 pb-4 min-w-[250px]">
    <h3 className="font-medium text-[#494949] md:w-[85%] lf:w-[70%] text-sm md:text-base">
      GoldLync is a services marketplace that connects customers with
      professionals for various tasks like home improvement, personal training,
      and event planning.
    </h3>
    <ul className="flex items-center gap-3 md:gap-4 lg:gap-5">
      <SocialLink path="https://x.com">
        <TwitterIcon2 className="fill-current transition-all duration-300 hover:fill-primary" />
      </SocialLink>
      <SocialLink path="https://facebook.com">
        <FacebookIcon2 className="fill-current transition-all duration-300 hover:fill-primary" />
      </SocialLink>
      <SocialLink path="https://instagram.com">
        <InstagramIcon2 className="fill-current transition-all duration-300 hover:fill-primary" />
      </SocialLink>
      <SocialLink path="https://github.com">
        <GithubIcon2 className="fill-current transition-all duration-300 hover:fill-primary" />
      </SocialLink>
    </ul>
    {/* <fieldset className="relative w-fit overflow-hidden rounded-md">
      <input
        type="text"
        placeholder="Your email"
        className="w-[280px] px-6 py-4 outline-none sm:w-[350px] md:w-[380px]"
      />
      <button
        type="button"
        className="absolute bottom-0 right-0 top-0 rounded-md bg-primary px-8 text-lg font-bold text-white"
      >
        Sent
      </button>
    </fieldset> */}
  </div>
);

const SocialLink = ({ path, children }) => (
  <li className=" h-fit">
    <Link
      to={path}
      target="_blank"
      className="inline-flex size-[24px] items-center justify-center xl:size-[35px] [&_svg]:h-full [&_svg]:w-full"
    >
      {children}
    </Link>
  </li>
);

const FooterLinks = ({ keyPrefix, links, title }) => (
  <div className="flex-1 min-w-[160px]">
    <h3 className="md:text-base lg:text-xl font-semibold">{title}</h3>
    <ul className="mt-4 lg:mt-6 space-y-2 md:space-y-3 xl:space-y-4">
      {links.map((link, index) => (
        <li key={`${keyPrefix}-${index}`}>
          <Link
            to={link.path}
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent text-sm md:text-base "
            dangerouslySetInnerHTML={{ __html: link.text }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
