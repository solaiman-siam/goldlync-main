import loginImage from "@/assets/images/auth-1.png";
import ForgetForm from "@/components/forms/auth/ForgetForm";
import SiteLogo from "@/components/SiteLogo";

const ForgetPassword = () => {
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
                Forget Password
              </h1>
            </div>
            <ForgetForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
