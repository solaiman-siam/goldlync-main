import loginImage from "@/assets/images/auth-1.png";
import SiteLogo from "@/components/SiteLogo";
import { Button } from "@/components/shadcn/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import axios from "axios";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const VerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const location = useLocation();
  const email = location.state.email;

  const handleSubmit = async () => {
    setIsLoading(true);

    const userData = {
      email: email,
      otp: value,
    };
    console.log(userData);

    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/auth/verify-otp`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/reset-password", { state: { email: email } });
      toast.success(response.data.message);
    } catch (error) {
      console.error("Login error:", error.response?.data?.message);
      const errorMessage =
        error.response?.data?.message || "Login failed! Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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
                Enter 4 digit code
              </h1>
              <p className="mx-auto w-[80%]">
                A four-digit code should have come to your email address that
                you indicated.
              </p>
            </div>
            <div className="mx-auto w-fit">
              <InputOTP
                maxLength={4}
                pattern={REGEXP_ONLY_DIGITS}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="mx-auto w-full max-w-[460px] pt-5">
              <Button onClick={handleSubmit} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
