import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import Spinner from "@/components/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["stopNotification", "deleteAccount"], {
    required_error: "You need to select a notification type.",
  }),
});

const ManageAccount = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const handleSubmit = async (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Delete account</p>
      </div>
      <div className="">
        <p className="mb-8 text-xl font-semibold">
          Are you sure you want to delete your account?
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="">
                        <FormLabel
                          className={`flex cursor-pointer flex-row-reverse items-center justify-between gap-2 rounded border p-4 ${field.value == "stopNotification" && "border-accent"}`}
                        >
                          <FormControl>
                            <RadioGroupItem
                              value="stopNotification"
                              className="peer"
                            />
                          </FormControl>
                          <span className="textAC text-xl font-normal transition-all duration-300 group-hover:text-accent peer-data-[state=checked]:text-accent">
                            Keep my account but stop notifications
                          </span>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="">
                        <FormLabel
                          className={`flex cursor-pointer flex-row-reverse items-center justify-between gap-2 rounded border p-4 ${field.value == "deleteAccount" && "border-accent"}`}
                        >
                          <FormControl>
                            <RadioGroupItem
                              value="deleteAccount"
                              className="peer"
                            />
                          </FormControl>
                          <span className="textAC text-xl font-normal transition-all duration-300 group-hover:text-accent peer-data-[state=checked]:text-accent">
                            Delete my account
                          </span>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-8 rounded" type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : "Delete my account"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ManageAccount;
