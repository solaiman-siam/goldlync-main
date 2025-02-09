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
    <div className="container my-12">
      <h2 className="mb-9 text-4xl font-bold">
        Safety & Security Guidelines for Professionals
      </h2>
      <p className="mb-12 text-xl">
        At GoldLync, your safety is our top priority. We are committed to
        providing a secure environment for all professionals using our platform.
        Before proceeding to chat with potential clients, please carefully read
        the following safety measures and guidelines. By continuing, you
        acknowledge and consent to these terms.
      </p>
      <div className="mb-10 rounded-2xl border border-primary px-4 py-8">
        <div className="mb-7 flex items-center gap-6">
          <SafetyIcon className="size-16"></SafetyIcon>
          <p className="text-2xl font-bold">Personal Safety Protocols</p>
        </div>
        <div className="space-y-4">
          {rules?.Safety.map((rule, idx) => (
            <div className="flex" key={idx}>
              <p className="w-6 text-center text-lg">{idx + 1}.</p>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-primary px-4 py-8">
        <div className="mb-7 flex items-center gap-6">
          <OnSiteSafetyIcon className="size-16"></OnSiteSafetyIcon>
          <p className="text-2xl font-bold">On-Site Safety</p>
        </div>
        <div className="space-y-4">
          {rules?.Safety.map((rule, idx) => (
            <div className="flex" key={idx}>
              <p className="w-6 text-center text-lg">{idx + 1}.</p>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-primary px-4 py-8">
        <div className="mb-7 flex items-center gap-6">
          <CommunicationSafetyIcon className="size-16"></CommunicationSafetyIcon>
          <p className="text-2xl font-bold">Communication Safety</p>
        </div>
        <div className="space-y-4">
          {rules?.Safety.map((rule, idx) => (
            <div className="flex" key={idx}>
              <p className="w-6 text-center text-lg">{idx + 1}.</p>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-primary px-4 py-8">
        <div className="mb-7 flex items-center gap-6">
          <PaymentProtection className="size-16"></PaymentProtection>
          <p className="text-2xl font-bold">Payment and Legal Protection</p>
        </div>
        <div className="space-y-4">
          {rules?.Safety.map((rule, idx) => (
            <div className="flex" key={idx}>
              <p className="w-6 text-center text-lg">{idx + 1}.</p>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-primary px-4 py-8">
        <div className="mb-7 flex items-center gap-6">
          <Support className="size-16"></Support>
          <p className="text-2xl font-bold">Reporting and Support</p>
        </div>
        <div className="space-y-4">
          {rules?.Safety.map((rule, idx) => (
            <div className="flex" key={idx}>
              <p className="w-6 text-center text-lg">{idx + 1}.</p>
              <p className="text-lg">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p className="mb-7 text-4xl font-bold">Your Consent:</p>
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
                      className="mt-1.5"
                    />
                  </FormControl>
                  <FormLabel className="w-[60%] leading-[24px]">
                    By proceeding, you confirm that you have read and understood
                    the safety guidelines. You acknowledge that while go strives
                    to ensure safety, you are responsible for exercising caution
                    and best practices during your engagements.
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit" className={`px-40 ${form.formState.errors.consent && "bg-[#ff0000]/80"}`}>
              {form.formState.errors.consent ? "You need to give Consent First" : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SafetyGuideline;
