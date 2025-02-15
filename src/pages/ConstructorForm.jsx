import { Progress } from "@/components/shadcn/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/shadcn/ui/button";
import { Slider } from "@/components/shadcn/ui/slider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import AddServicesByConstructor from "./public/Services/AddServicesByConstructor";
import { Link } from "react-router";
import { useState } from "react";
import Previews from "@/components/Previews";

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company Name must be at least 2 characters.",
  }),
  searchArea: z.string().min(1, "Search area cannot be empty"),
});

const ConstructorForm = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [value, setValue] = useState(33);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      searchArea: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="container my-20">
      <h2 className="mb-7 text-3xl font-semibold text-[#222]">
        Fill up some information
      </h2>
      <Progress value={selectedTab * 33} className="h-2" />
      <div className="mt-12 w-[60%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {selectedTab == 0 && (
              <>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-7 text-lg text-[#494949]">
                        Enter your Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name of your company"
                          {...field}
                          className="px-5 py-4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AddServicesByConstructor />
                <div className="space-x-3">
                  <Button type="button" className="bg-[#9B9B9B]" asChild>
                    <Link to="/constructor-profile">Cancel</Link>
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(1)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 1 && (
              <>
                <div className="">
                  <h2 className="mb-6 text-xl font-semibold text-[#222]">
                    What is your area of work?
                  </h2>
                  <FormField
                    control={form.control}
                    name="searchArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Search your area"
                            {...field}
                            className="px-5 py-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h2 className="my-6 text-xl font-semibold text-[#222]">
                    Set your maximum distance around your area
                  </h2>
                  <Slider
                    defaultValue={[value]}
                    max={50}
                    min={5}
                    step={1}
                    onValueChange={(val) => setValue(val)}
                  />
                  <p className="my-4">Area of Service: {value} Miles</p>
                  <div className="flex h-[450px] w-full items-center justify-center border">
                    Map
                  </div>
                </div>
                <div className="space-x-3">
                  <Button type="button" className="bg-[#9B9B9B]" asChild>
                    <Link to="/constructor-profile">Cancel</Link>
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(2)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 2 && (
              <>
                <div className="">
                  <h2 className="mb-6 text-xl font-semibold text-[#222]">
                    Upload your any license or certification
                  </h2>
                  <div className="flex flex-1 flex-col gap-3">
                    <Previews />
                  </div>
                  <h2 className="my-6 text-xl font-semibold text-[#222]">
                    Set your maximum distance around your area
                  </h2>
                  <Slider
                    defaultValue={[value]}
                    max={50}
                    min={5}
                    step={1}
                    onValueChange={(val) => setValue(val)}
                  />
                  <p className="my-4">Area of Service: {value} Miles</p>
                  <div className="flex h-[450px] w-full items-center justify-center border">
                    Map
                  </div>
                </div>
                <div className="space-x-3">
                  <Button type="button" className="bg-[#9B9B9B]" asChild>
                    <Link to="/constructor-profile">Cancel</Link>
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(2)}>
                    Next
                  </Button>
                </div>
              </>
            )}
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ConstructorForm;
