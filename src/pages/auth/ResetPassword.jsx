import SiteLogo from "@/components/SiteLogo";
import { Loader2 } from "lucide-react";
import loginImage from "@/assets/images/auth-1.png";
import { useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { useForm } from "react-hook-form";
import PasswordField from "@/components/shadcn/PasswordField";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;

  const form = useForm({
    // resolver: zodResolver(registerSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (e) => {
    const userData = {
      email: email,
      password: e.password,
      password_confirmation: e.confirmPassword,
    };

    console.log(userData);

    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/auth/reset-password`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data?.data?.role == "user") {
        navigate("/profile");
      } else if (response?.data?.data?.role == "pro") {
        navigate("/constructor-profile");
      }
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error:", error.response);
      const errorMessage =
        error.response?.data?.message ||
        "Reset Password failed! Please try again.";
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
                Reset Your Password
              </h1>
              <p className="mx-auto w-[80%]">
                Set a new password to regain access to your account. Make sure
                to choose a strong and secure password.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[460px] pt-5">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <PasswordField placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <PasswordField
                            placeholder="Confirm Password "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Update"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
