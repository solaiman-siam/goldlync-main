import SiteLogo from "@/components/SiteLogo";
import SocialAuth from "@/components/SocialAuth";
import { Link } from "react-router";
import loginImage from "@/assets/images/auth-1.png";
import LoginForm from "@/components/forms/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex h-screen overflow-hidden font-poppins">
      <div className="hidden w-full bg-muted lg:block lg:w-[40%]">
        <img
          src={loginImage}
          alt="banner image"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex w-full flex-col items-center overflow-auto p-6 md:p-10 lg:w-[60%]">
        <div className="flex w-full max-w-xl flex-1 flex-col items-center justify-center">
          <SiteLogo />
          <div className="my-4 space-y-4">
            <div className="space-y-4 text-center">
              <h1 className="text-center text-5xl font-bold leading-[120%]">
                Welcome! Create Your Account
              </h1>
              <p className="text-center text-lg font-normal leading-[150%] text-[#8D8D8D]">
                Sign in to access your personalized dashboard, view policies,
                manage quotes, and more.
              </p>
            </div>
            <LoginForm />
            <div className="relative mx-auto max-w-xs text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-input">
              <span className="relative z-10 bg-background px-2 text-input">
                Or
              </span>
            </div>
            <SocialAuth />
            <div className="text-center text-lg font-medium leading-[120%]">
              You don’t Have an account?
              <Link to="/register" className="ml-1 text-accent">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
