import { MailIcon1 } from "@/assets/icons";
import AuthInput from "@/components/shadcn/AuthInput";
import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { forgetSchema } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgetForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(forgetSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (e) => {
    const userData = {
      email: e.email,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/auth/forgot-password`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("forgot email response:", response.data);
      navigate("/verify-code", { state: { email: e.email } });
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AuthInput
                  type="email"
                  containerClassName="[&_svg]:text-input"
                  icon={<MailIcon1 className="w-6" />}
                  placeholder="Enter Your  Address"
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
              Code Sending...
            </>
          ) : (
            "Forget Password"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ForgetForm;
