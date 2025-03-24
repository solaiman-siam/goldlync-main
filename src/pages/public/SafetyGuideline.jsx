import {
  CommunicationSafetyIcon,
  OnSiteSafetyIcon,
  PaymentProtection,
  SafetyIcon,
  Support,
} from "@/assets/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/shadcn/ui/button";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Link, useNavigate } from "react-router";
import Container from "@/components/Container";

const SafetyGuideline = () => {
  const FormSchema = z.object({
    consent: z.boolean().refine((val) => val === true, {
      message: "You must provide consent.",
      path: ["consent"],
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    navigate("/submission-complete");
  }

  const rules = {
    Safety: [
      "Always verify the client’s identity before scheduling a job. Ask for full names, phone numbers, and relevant details.",
      "Share your job details and location with a trusted friend or family member before heading to a new client’s place.",
      "Schedule appointments during daylight hours whenever possible.",
      "Trust your instincts — if something feels off, decline the job and report it to us.",
    ],
    OnSiteSafety: [
      "Always verify the client’s identity before scheduling a job. Ask for full names, phone numbers, and relevant details.",
      "Share your job details and location with a trusted friend or family member before heading to a new client’s place.",
      "Schedule appointments during daylight hours whenever possible.",
      "Trust your instincts — if something feels off, decline the job and report it to us.",
    ],
  };

  return (
    <Container>
      <div className="pb-10 md:pb-16 pt-3 md:pt-5 lg:pb-20 lg:pt-10">
        <h2 className="mb-4 text-center text-2xl font-bold lg:mb-6 lg:text-3xl xl:mb-8 xl:text-4xl">
          Safety & Security Guidelines for Professionals
        </h2>
        <p className="mb-6 text-center text-base md:mb-9 md:text-lg xl:mb-12 xl:text-xl">
          At GoldLync, your safety is our top priority. We are committed to
          providing a secure environment for all professionals using our
          platform. Before proceeding to chat with potential clients, please
          carefully read the following safety measures and guidelines. By
          continuing, you acknowledge and consent to these terms.
        </p>
        <div className="mb-4 rounded-2xl border border-primary px-4 py-5 md:mb-7 lg:px-6 lg:py-8 xl:mb-10">
          <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-6">
            <SafetyIcon className="size-10 flex-shrink-0 md:size-16"></SafetyIcon>
            <p className="text-lg font-bold md:text-xl xl:text-2xl">
              Personal Safety Protocols
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {rules?.Safety.map((rule, idx) => (
              <div className="flex gap-1" key={idx}>
                <p className="min-w-6 text-center text-sm md:text-base xl:text-lg">
                  {idx + 1}.
                </p>
                <p className="text-sm md:text-base xl:text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-2xl border border-primary px-4 py-5 md:mb-7 lg:px-6 lg:py-8 xl:mb-10">
          <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-6">
            <OnSiteSafetyIcon className="size-10 flex-shrink-0 md:size-16"></OnSiteSafetyIcon>
            <p className="text-lg font-bold md:text-xl xl:text-2xl">
              On-Site Safety
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {rules?.Safety.map((rule, idx) => (
              <div className="flex gap-1" key={idx}>
                <p className="min-w-6 text-center text-sm md:text-base xl:text-lg">
                  {idx + 1}.
                </p>
                <p className="text-sm md:text-base xl:text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-2xl border border-primary px-4 py-5 md:mb-7 lg:px-6 lg:py-8 xl:mb-10">
          <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-6">
            <CommunicationSafetyIcon className="size-10 flex-shrink-0 md:size-16"></CommunicationSafetyIcon>
            <p className="text-lg font-bold md:text-xl xl:text-2xl">
              Communication Safety
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {rules?.Safety.map((rule, idx) => (
              <div className="flex gap-1" key={idx}>
                <p className="min-w-6 text-center text-sm md:text-base xl:text-lg">
                  {idx + 1}.
                </p>
                <p className="text-sm md:text-base xl:text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-2xl border border-primary px-4 py-5 md:mb-7 lg:px-6 lg:py-8 xl:mb-10">
          <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-6">
            <PaymentProtection className="size-10 flex-shrink-0 md:size-16"></PaymentProtection>
            <p className="text-lg font-bold md:text-xl xl:text-2xl">
              Payment and Legal Protection
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {rules?.Safety.map((rule, idx) => (
              <div className="flex gap-1" key={idx}>
                <p className="min-w-6 text-center text-sm md:text-base xl:text-lg">
                  {idx + 1}.
                </p>
                <p className="text-sm md:text-base xl:text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary px-4 py-5 lg:px-6 lg:py-8">
          <div className="mb-4 flex items-center gap-3 md:mb-7 md:gap-6">
            <Support className="size-10 flex-shrink-0 md:size-16"></Support>
            <p className="text-lg font-bold md:text-xl xl:text-2xl">
              Reporting and Support
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {rules?.Safety.map((rule, idx) => (
              <div className="flex gap-1" key={idx}>
                <p className="min-w-6 text-center text-sm md:text-base xl:text-lg">
                  {idx + 1}.
                </p>
                <p className="text-sm md:text-base xl:text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p className="text-xl font-bold md:text-2xl xl:text-4xl mt-5 md:mt-8 lg:mt-10 mb-3 md:mb-5 lg:mb-7">
            Your Consent:
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={`mt-1.5 ${form.formState.errors.consent && "border-[#ff0000]/80 focus-visible:ring-[#ff0000]/80"}`}
                      />
                    </FormControl>
                    <FormLabel className="leading-[24px] lg:w-[70%] lg:text-base">
                      By proceeding, you confirm that you have read and
                      understood the safety guidelines. You acknowledge that
                      while go strives to ensure safety, you are responsible for
                      exercising caution and best practices during your
                      engagements.
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={`text-sm sm:text-base md:px-40 ${form.formState.errors.consent && "bg-[#ff0000]/80"}`}
              >
                {form.formState.errors.consent
                  ? "You need to give Consent First"
                  : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default SafetyGuideline;
