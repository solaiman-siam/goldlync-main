
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/custom-radio-group";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/shadcn/ui/custom-form";

const CustomRadioGroup = ({form}) => {
  return (
    <>
      <h2 className="my-6 text-xl font-semibold text-[#222]">
        How long have you been in business?
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
                <FormItem className="flex items-center space-x-3 space-y-0 border py-4 px-5 rounded">
                  <FormControl>
                    <RadioGroupItem value="lessThanOne" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Less than one year
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0 border py-4 px-5 rounded">
                  <FormControl>
                    <RadioGroupItem value="oneToThree" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    1-2 year experience
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0 border py-4 px-5 rounded">
                  <FormControl>
                    <RadioGroupItem value="threeToFive" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    3-5 year experience
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0 border py-4 px-5 rounded">
                  <FormControl>
                    <RadioGroupItem value="fivePlus" />
                  </FormControl>
                  <FormLabel className="font-normal">5 year above</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomRadioGroup;
