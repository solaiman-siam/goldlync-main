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
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import Spinner from "@/components/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["yes", "no"], {
    required_error: "You need to select a notification type.",
  }),
});

const ConstructorProfileDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [readMore, setReadMore] = useState(true);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const handleSubmit = async (e) => {
    console.log(e);
  };

  console.log(form.getValues("avatar"));

  return (
    <>
      <h2 className="mb-6 font-manrope text-3xl font-bold">Company Details</h2>
      <div className="mb-10">
        <div className="heading mb-6 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">About your company</p>
          <button type="button" className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M0.819336 22.2002L1.10427 20.7755L2.16022 15.4958L15.9629 1.69309L16.9099 0.746094L17.8569 1.69309L21.3222 5.15842L22.2734 6.10961L21.3264 7.05661L7.52373 20.8593L2.24402 21.9152L0.819336 22.2002ZM6.86167 19.6232L17.5007 8.98831L14.0354 5.52298L3.39634 16.1578L2.52896 20.4905L6.86167 19.6232ZM18.4477 8.04132L20.3752 6.10961L16.9099 2.64428L14.9782 4.57179L18.4435 8.03713L18.4477 8.04132Z"
                fill="#262627"
              />
            </svg>
            Change
          </button>
        </div>
        <p
          className={`${readMore && "line-clamp-3"} mb-1 text-xl leading-[35px]`}
        >
          About Kroolo Innovations BV Kroolo Innovations BV is a
          forward-thinking technology company based in Amsterdam, Netherlands.
          Founded with a mission to simplify and enhance the business processes
          through technology company based in Amsterdam, Netherlands. Founded
          with a mission to simplify and enhance through technology company
          based in Amsterdam, Netherlands. Founded with a mission to simplify
          and enhance business processes through
        </p>
        {readMore && (
          <button
            type="button"
            className="text-lg font-bold"
            onClick={() => setReadMore(false)}
          >
            Read more
          </button>
        )}
      </div>
      <div className="">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Warranty</p>
        </div>
        <p className={`mb-1 text-xl leading-[35px]`}>
          Increase your chances of getting hired by offering a guarantee.
        </p>
        <div className="mb-8 mt-6 flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            className="mt-1"
          >
            <path
              d="M11.2915 2.36679C13.603 2.36679 15.8199 3.28505 17.4544 4.91956C19.0889 6.55408 20.0072 8.77095 20.0072 11.0825C20.0072 13.3941 19.0889 15.6109 17.4544 17.2454C15.8199 18.88 13.603 19.7982 11.2915 19.7982C8.97994 19.7982 6.76306 18.88 5.12855 17.2454C3.49403 15.6109 2.57577 13.3941 2.57577 11.0825C2.57577 8.77095 3.49403 6.55408 5.12855 4.91956C6.76306 3.28505 8.97994 2.36679 11.2915 2.36679ZM11.2915 21.8095C14.1365 21.8095 16.8649 20.6794 18.8766 18.6677C20.8884 16.656 22.0185 13.9275 22.0185 11.0825C22.0185 8.23752 20.8884 5.50905 18.8766 3.49734C16.8649 1.48564 14.1365 0.355469 11.2915 0.355469C8.4465 0.355469 5.71804 1.48564 3.70633 3.49734C1.69462 5.50905 0.564453 8.23752 0.564453 11.0825C0.564453 13.9275 1.69462 16.656 3.70633 18.6677C5.71804 20.6794 8.4465 21.8095 11.2915 21.8095ZM9.61539 14.4347H8.60973V16.446H13.9732V14.4347H12.6324V9.74162H8.60973V11.7529H10.621V14.4347H9.61539ZM12.6324 8.40074V5.71899H9.95061V8.40074H12.6324Z"
              fill="#313133"
            />
          </svg>
          <p className="text-lg">
            Clients are aware that guarantees from professionals differ and that
            the conditions must be discussed in advance.
          </p>
        </div>
      </div>
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
                        className={`flex cursor-pointer flex-row-reverse items-center justify-between gap-2 rounded border p-4 ${field.value == "yes" && "border-accent"}`}
                      >
                        <FormControl>
                          <RadioGroupItem value="yes" className="peer" />
                        </FormControl>
                        <span className="textAC text-xl font-normal transition-all duration-300 group-hover:text-accent peer-data-[state=checked]:text-accent">
                          Yes, I give a guarantee
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="">
                      <FormLabel
                        className={`flex cursor-pointer flex-row-reverse items-center justify-between gap-2 rounded border p-4 ${field.value == "no" && "border-accent"}`}
                      >
                        <FormControl>
                          <RadioGroupItem value="no" className="peer" />
                        </FormControl>
                        <span className="textAC text-xl font-normal transition-all duration-300 group-hover:text-accent peer-data-[state=checked]:text-accent">
                          No, I do not give any guarantees
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-10 rounded" type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "update your profile"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ConstructorProfileDetails;
