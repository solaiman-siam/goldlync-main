import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import { Checkbox } from "@/components/shadcn/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/shadcn/ui/select"

function SetJobPref() {
  return (
    <div className="bg-[#FFF2EB] py-24">
      <div className="container">
        <SectionTitle tagName="h3">Set Your Job Preferences</SectionTitle>
        <SectionText>
          Customize the types of jobs you want to receive based on budget and
          location.
        </SectionText>

        <div className="mx-auto h-full w-full max-w-4xl">
          <form className="h-full w-full py-8 space-y-4" action="">
            <div className="flex h-full w-full flex-col gap-2">
              <label className="text-lg font-medium" htmlFor="">
                1. Minimum Job Budget
              </label>
              <Select>
                <SelectTrigger className="w-full rounded-lg focus:outline-primary px-4 py-8">
                  <SelectValue placeholder="Minimum Job Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex h-full w-full flex-col gap-2">
              <label className="text-lg font-medium" htmlFor="">
                2. Set Job Search Radius
              </label>
              <Select>
                <SelectTrigger className="w-full rounded-lg focus:outline-primary px-4 py-8">
                  <SelectValue placeholder="Enter a custom radius" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
            <Checkbox id={'terms1'} />
            <label htmlFor="terms1">Jobs starting at $1000 within 25 miles.</label>
            </div>
            <div className="pt-8 flex justify-center">
                <button className="bg-primary px-14 py-4 rounded-full text-white font-medium ">Save Job Preferrence</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetJobPref;
