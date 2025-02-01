import ProfileSection from "@/components/profile/ProfileSection";
import ProfileUpload from "@/components/profile/ProfileUpload";
import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import Spinner from "@/components/Spinner";
import { profileUpdateSchema } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ConstructorProfileDetails = () => {
  return (
    <ProfileSection title="Profile Details">
      <ProfileUpdateFrom />
    </ProfileSection>
  );
};

const ProfileUpdateFrom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      avatar: null,
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      bio: "",
    },
  });

  const handleSubmit = async (e) => {
    console.log(e);
  };

  console.log(form.getValues("avatar"));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ProfileUpload
                  setValue={field.onChange}
                  value={field.value}
                  setError={(errorMessage) => {
                    form.setError("avatar", errorMessage);
                  }}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mb-5 mt-10 grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    disabled={isLoading}
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Your Email"
                    readOnly
                    disabled
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
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Phone number"
                    disabled={isLoading}
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
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Address"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[200px]"
                    placeholder="Enter you bio here...."
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="rounded" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "update your profile"}
        </Button>
      </form>
    </Form>
  );
};

export default ConstructorProfileDetails;
