import { Progress } from "@/components/shadcn/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Input } from "@/components/shadcn/ui/input";
import { Link, useNavigate } from "react-router";
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
import ConstructorBenefits from "@/components/shared/ConstructorBenefits";
import AddServicesByConstructor from "./public/Services/AddServicesByConstructor";
import { Slider } from "@/components/shadcn/ui/slider";
import AddCategories from "./public/Services/AddCategories";
import CompanyLogoForm from "@/components/shared/CompanyLogoForm";
import axios from "axios";
import toast from "react-hot-toast";
import Container from "@/components/Container";

const items = [
  {
    id: "on-time",
    label: "On-time",
  },
  {
    id: "assure-quality",
    label: "Assure Quality",
  },
  {
    id: "trustworthy",
    label: "Trustworthy",
  },
  {
    id: "detailed-oriented",
    label: "Detailed oriented",
  },
  {
    id: "fastest",
    label: "Fastest",
  },
];

const languages = ["English", "Italian", "Spanish"];

const tabsTitle = [
  "Fill up your company information",
  "Add Services",
  "Add Service Area",
  "Set your budget preference",
  "Additional Information",
];

// const formSchema = z
//   .object({
//     name: z.string().min(2, {
//       message: "Company Name must be at least 2 characters.",
//     }),
//     searchArea: z.string().min(1, "Search area cannot be empty"),
//     type: z.string().min(1, "Please select an option"), // Ensuring radio selection
//     benefits: z
//       .string()
//       .min(20, "Please write at least 20 characters.")
//       .max(1000, "Maximum 1000 characters allowed."),
//     quality: z
//       .array(z.string())
//       .min(3, "Please select at least 3 attributes.")
//       .max(3, "You can only select up to 3 attributes."), // Restricts to exactly 3 selections
//   })
//   .passthrough();

const ConstructorForm = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [logo, setLogo] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [value, setValue] = useState(20);
  const form = useForm({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "",
    // },
  });

  const convertToFormData = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((value) => {
          formData.append(`${key}[]`, value);
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    return formData;
  };

  const navigate = useNavigate();

  async function onSubmit(e) {
    const proProfileData = {
      name: e.name,
      logo: logo,
      details: "This is Details",
      business_duration: e.business_duration,
      team_members: e.team_members,
      competitive_advantages: e.benefits,
      customer_hiring_factors: e.quality,
      service_type: selectedServices,
      licence: logo,
      work_area: e.searchArea,
      service_radius: value + " miles",
      budget_preferences: e.budget_preferences,
      referral_sources: e.referral_sources,
      language: selectedLanguages,
      warrenty: "Yes",
    };
    const formData = convertToFormData(proProfileData);
    const token = localStorage.getItem("auth_token");
    console.log("Token", token);
    console.log("proProfileData", proProfileData);
    try {
      const response = await axios.post(
        "https://goldlync.softvencefsd.xyz/api/company-information/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);
      navigate("/constructor-profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", {
          message: error.message,
          status: error.response?.status || "No status",
          statusText: error.response?.statusText || "No status text",
          data: error.response?.data || "No response data",
        });
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  }

  return (
    <section className="container my-20">
      <h2 className="mb-7 text-3xl font-semibold text-[#222]">
        {tabsTitle[selectedTab]}
      </h2>
      <Progress
        value={(selectedTab / tabsTitle.length) * 100}
        className="h-2"
      />
      <div className="mt-12 w-[60%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {selectedTab == 0 && (
              <>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    Enter your Company Name
                  </h2>
                  <FormField
                    control={form.control}
                    name="name"
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
                </>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    Upload your company logo
                  </h2>
                  <CompanyLogoForm file={logo} setFile={setLogo} />
                </>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    How long have you been in business?
                  </h2>

                  <FormField
                    control={form.control}
                    name="business_duration"
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
                                <RadioGroupItem value="lessThanOne" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Less than one year
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                              <FormControl>
                                <RadioGroupItem value="oneToTwo" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                1-2 year experience
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                              <FormControl>
                                <RadioGroupItem value="threeToFive" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                3-5 year experience
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4">
                              <FormControl>
                                <RadioGroupItem value="fivePlus" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                5 year above
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    How many employee do you have?
                  </h2>

                  <FormField
                    control={form.control}
                    name="team_members"
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
                </>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    what set your company apart from other competitors?{" "}
                    <span className="text-base font-normal text-primary">
                      (Tell us 100 words)
                    </span>
                  </h2>
                  <FormField
                    control={form.control}
                    name="benefits"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Type..."
                            className="h-[180px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    Select 3 attributes why customers should hire you{" "}
                    <span className="text-primary">
                      {form.watch("quality")?.length || 0}/3
                    </span>{" "}
                    ?
                  </h2>
                  <FormField
                    control={form.control}
                    name="quality"
                    render={() => (
                      <FormItem>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="quality"
                            render={({ field }) => {
                              const valueArray = Array.isArray(field.value)
                                ? field.value
                                : [];

                              const isMaxSelected = valueArray.length >= 3;
                              const isChecked = valueArray.includes(item.id);

                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex items-center space-x-3 space-y-0 rounded border px-5 py-4"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={isChecked}
                                      disabled={!isChecked && isMaxSelected} // Disable if max selected
                                      onCheckedChange={(checked) => {
                                        if (checked && isMaxSelected) return; // Prevent selecting more than 3
                                        field.onChange(
                                          checked
                                            ? [...valueArray, item.id]
                                            : valueArray.filter(
                                                (value) => value !== item.id
                                              )
                                        );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
                <div className="mt-8 space-x-3">
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
                <AddCategories
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                />
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    Upload your any license or certification
                  </h2>
                  <Previews2 />
                </>
                <div className="mt-8 space-x-3">
                  <Button
                    type="button"
                    className="bg-[#9B9B9B]"
                    onClick={() => setSelectedTab(0)}
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(2)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 2 && (
              <>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
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
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
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
                </>
                <div className="mt-8 space-x-3">
                  <Button
                    type="button"
                    className="bg-[#9B9B9B]"
                    onClick={() => setSelectedTab(1)}
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(3)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 3 && (
              <>
                <></>
                <h2 className="my-6 text-xl font-semibold text-[#222]">
                  Set your starting budget preference
                </h2>
                <FormField
                  control={form.control}
                  name="budget_preferences"
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
                <figure className="mt-8 h-[350px] w-full overflow-hidden rounded-md">
                  <img
                    src="https://i.ibb.co.com/hFLYHzqX/Rectangle-25152.png"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
                <div className="mt-8 space-x-3">
                  <Button
                    type="button"
                    className="bg-[#9B9B9B]"
                    onClick={() => setSelectedTab(2)}
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={() => setSelectedTab(4)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {selectedTab == 4 && (
              <>
                <>
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
                    How did you hear about us?
                  </h2>

                  <FormField
                    control={form.control}
                    name="referral_sources"
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
                </>
                <AddCategories
                  sectionTitle="What language do you speak?"
                  placeholder="Select Language"
                  data={languages}
                  selectedServices={selectedLanguages}
                  setSelectedServices={setSelectedLanguages}
                />
                <div className="mt-8 space-x-3">
                  <Button
                    type="button"
                    className="bg-[#9B9B9B]"
                    onClick={() => setSelectedTab(3)}
                  >
                    Back
                  </Button>
                  <Button type="submit">Done</Button>
                </div>
              </>
            )}
          </form>
        </Form>
      </div>
      <ConstructorBenefits />
    </section>
  );
};

export default ConstructorForm;
