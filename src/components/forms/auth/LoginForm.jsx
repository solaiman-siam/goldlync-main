import { MailIcon1 } from "@/assets/icons";
import AuthInput from "@/components/shadcn/AuthInput";
import PasswordField from "@/components/shadcn/PasswordField";
import { Button } from "@/components/shadcn/ui/button";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { loginSchema } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    const userData = {
      email: e.email,
      password: e.password,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response?.data?.access_token;

      console.log("Registration response:", response.data);

      if (token) {
        localStorage.setItem("auth_token", token);
      }

      toast.success("Login successful!");
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
        <div className="flex items-center justify-between gap-2">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer text-input">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />
          <Link
            className="font-medium text-accent hover:underline"
            to="/forget-password"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Login...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
