import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas/authSchema";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import AuthInput from "@/components/shadcn/AuthInput";
import { AuthUser1, Location1, MailIcon1, PhoneIcon1 } from "@/assets/icons";
import SelectLanguage from "@/components/shadcn/SelectLanguage";
import PasswordField from "@/components/shadcn/PasswordField";
import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      language: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (e) => {
    const userData = {
      name: e.name,
      email: e.email,
      password: e.password,
      password_confirmation: e.confirmPassword,
      role: "user",
      address: e.address,
      phone: e.phoneNumber,
      language: e.language,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/register`,
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

      toast.success("Registration successful!");
      setTimeout(() => {
        navigate(-1); // Navigate to the previous path
      }, 5000);
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed! Please try again.";
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AuthInput
                  type="text"
                  containerClassName="[&_svg]:text-input"
                  icon={<AuthUser1 className="w-6" />}
                  placeholder="Enter Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AuthInput
                  type="text"
                  containerClassName="[&_svg]:text-input"
                  icon={<PhoneIcon1 className="w-6" />}
                  placeholder="Enter Your Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AuthInput
                  type="text"
                  containerClassName="[&_svg]:text-input"
                  icon={<Location1 className="w-6" />}
                  placeholder="Enter Your Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLanguage value={field.value} setValue={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  placeholder="Enter Your Email"
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordField placeholder="Confirm Password " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
