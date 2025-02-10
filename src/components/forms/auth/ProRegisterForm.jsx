import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas/authSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import AuthInput from "@/components/shadcn/AuthInput";
import { AuthUser1, Location1, MailIcon1, PhoneIcon1 } from "@/assets/icons";
import PasswordField from "@/components/shadcn/PasswordField";
import { Button } from "@/components/shadcn/ui/button";
import { useNavigate } from 'react-router';

const ProRegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(e);
    navigate('/constructor-profile');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <p className="text-lg font-medium text-[#161C24]">
                Business Owner*
              </p>
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
              <p className="text-lg font-medium text-[#161C24]">
                Phone Number*
              </p>
              <FormControl>
                <AuthInput
                  type="text"
                  containerClassName="[&_svg]:text-input"
                  icon={<PhoneIcon1 className="w-6" />}
                  placeholder="+1 123 456 7890"
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
              <p className="text-lg font-medium text-[#161C24]">
                Company address*
              </p>
              <FormControl>
                <AuthInput
                  type="text"
                  containerClassName="[&_svg]:text-input"
                  icon={<Location1 className="w-6" />}
                  placeholder="Company Address"
                  {...field}
                />
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
              <p className="text-lg font-medium text-[#161C24]">Email*</p>
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
              <p className="text-lg font-medium text-[#161C24]">Password*</p>
              <FormControl>
                <PasswordField placeholder="Create your password" {...field} />
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
          Register
        </Button>
      </form>
    </Form>
  );
};

export default ProRegisterForm;
