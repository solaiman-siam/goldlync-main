import {
  FacebookIcon1,
  GoogleIcon1,
  InstagramIcon1,
  TwitterIcon1,
} from "@/assets/icons";

const SocialAuth = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <GoogleSocialAuth />
      <SocialAuthItem>
        <FacebookIcon1 />
      </SocialAuthItem>
      <SocialAuthItem>
        <TwitterIcon1 />
      </SocialAuthItem>
      <SocialAuthItem>
        <InstagramIcon1 />
      </SocialAuthItem>
    </div>
  );
};

const GoogleSocialAuth = () => {
  return (
    <SocialAuthItem>
      <GoogleIcon1 />
    </SocialAuthItem>
  );
};

const SocialAuthItem = ({ children }) => {
  return (
    <button
      className="inline-flex h-14 flex-shrink-0 items-center justify-center gap-2 rounded-md border border-[#DEE4F2] bg-[#FAFBFC] px-7 py-3 [&_svg]:w-6 [&_svg]:flex-shrink-0"
      type="button"
    >
      {children}
    </button>
  );
};

export default SocialAuth;
