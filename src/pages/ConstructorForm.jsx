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
import { Link, Navigate } from "react-router";
import { useState } from "react";
import Previews2 from "@/components/Previews2";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { FaDollarSign } from "react-icons/fa";
import CustomRadioGroup from "@/components/CustomRadioGroup";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/shadcn/ui/custom-radio-group";
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
      <Progress value={selectedTab * 25} className="h-2" />
      <div className="mt-12 w-[60%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {selectedTab == 0 && (
              <>
                <h2 className="my-6 text-xl font-semibold text-[#222]">
                Enter your Company Name
                </h2>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
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
                <h2 className="my-6 text-xl font-semibold text-[#222]">
                Your Company Logo
                </h2>
                <Previews limit={1}/>
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
                    <Previews2 />
                  </div>
                  <h2 className="my-6 text-xl font-semibold text-[#222]">
                    Write a brief summary about your company.
                  </h2>
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Type..."
                            className="h-[250px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h2 className="my-6 text-xl font-semibold text-[#222]">
                    Set your starting budget preference
                  </h2>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="relative w-1/3">
                        <FormControl>
                          <Input
                            placeholder="100"
                            {...field}
                            className="px-5 py-4"
                          />
                        </FormControl>
                        <FaDollarSign className="absolute right-6 top-1/2 !mt-0 -translate-y-1/2 text-primary" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CustomRadioGroup form={form} />
                </div>
                <div className="space-x-3">
                  <Button type="button" className="bg-[#9B9B9B]" asChild>
                    <Link to="/constructor-profile">Cancel</Link>
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(3)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 3 && (
              <>
                <h2 className="my-6 text-xl font-semibold text-[#222]">
                  How many employee work in your company?
                </h2>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="self" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              I am a self-employed entrepreneur, without
                              employees
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="twoToFive" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              2-5 employee
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="sixToFifteen" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              6 to 15 employees
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="fifteenPlus" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              More than 15 employees
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <h2 className="my-6 text-xl font-semibold text-[#222]">
                  Select all the language you speak?
                </h2>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="english" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              English
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="italian" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Italian
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="germany" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Germany
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="Spanish" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Spanish
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="portuguese" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Portuguese
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="others" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Others
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <h2 className="my-6 text-xl font-semibold text-[#222]">
                  How did you hear about us?
                </h2>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="social-media" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Social media
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="google" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Google
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                            <FormControl>
                              <RadioGroupItem value="nearest-pearson" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Nearest Pearson
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-x-3">
                  <Button type="button" className="bg-[#9B9B9B]" asChild>
                    <Link to="/constructor-profile">Cancel</Link>
                  </Button>

                  <Button type="button" asChild>
                    <Link to="/constructor-profile">Done</Link>
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
