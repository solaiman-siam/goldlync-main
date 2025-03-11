import CommonSelect from "./CommonSelect";
import { Link } from "react-router";
import { useState } from "react";
import Previews from "@/components/Previews";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/shadcn/ui/custom-dialog";

function Questionnaries() {
  const selectData = [
    {
      id: 1,
      label: "What type of property needs gutter cleaning?",
      options: [
        "Residential Property",
        "Commercial Property",
        "Industrial Property",
        "Agricultural Property",
      ],
    },
    {
      id: 2,
      label: "How often do you clean your gutters?",
      options: [
        "Once a year",
        "Twice a year",
        "Every quarter",
        "Rarely or never",
      ],
    },
    {
      id: 3,
      label: "Are there any trees near your property?",
      options: [
        "Yes, many trees",
        "Some trees nearby",
        "No trees nearby",
        "Not sure",
      ],
    },
    {
      id: 4,
      label: "What is your preferred cleaning service schedule?",
      options: [
        "Morning (8 AM - 12 PM)",
        "Afternoon (12 PM - 4 PM)",
        "Evening (4 PM - 8 PM)",
        "Flexible",
      ],
    },
  ];

  const budgets = {
    options: [
      "$100 - $250",
      "$250 - $500",
      "$500 - $1000",
      "$1000 - $2000",
      "$2000 - $5000",
      "$5000+",
    ],
  };

  const [isFocused, setIsFocused] = useState(false);
  const [budget, setBudget] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", e);
  };

  return (
    <div>
      <div className="container py-24">
        <h3 className="text-left font-manrope text-4xl font-bold">
          Gutter cleaning questionnaire
        </h3>
        <div className="pt-12 font-manrope">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-8">
              {selectData.map((select) => (
                <CommonSelect
                  key={select.id}
                  options={select?.options}
                  label={select?.label}
                  id={select?.id}
                />
              ))}
            </div>
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData.length + 1}. Budget
                </label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-8">
                    <SelectValue placeholder={"Select Budget"} />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData.length + 2}. Upload Image
                </label>
                <Previews />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData.length + 3}. Provide a detail job description.
              </label>
              <textarea
                className="h-[250px] w-full rounded border border-gray-400 px-4 py-4 focus:outline-primary"
                name=""
                id=""
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData.length + 4}. Provide your details
              </label>
              <div className="grid grid-cols-3 gap-x-5 gap-y-6">
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="House No."
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="State"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="Zip code"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="City"
                  />
                </div>

                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="Phone Number *"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="Phone Number (Optional)"
                  />
                </div>
              </div>
            </div>
            <Dialog>
              <DialogTrigger
                type="submit"
                className="block w-80 rounded-full bg-primary py-4 text-center font-medium text-white"
              >
                Submit
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <div className="flex flex-col p-20">
                      <h2 className="mb-12 text-center text-4xl font-bold leading-[120%]">
                        Top-Rated Pros at Your <br /> Service
                      </h2>
                      <Link
                        to="/pros"
                        type="button"
                        className="mx-auto mb-6 w-[80%] rounded-full border border-primary bg-primary py-3 text-center text-lg font-semibold text-white"
                      >
                        Choose Your Pro
                      </Link>
                      <Link
                        to="/safety-guideline"
                        type="button"
                        className="mx-auto w-[80%] rounded-full border border-primary py-3 text-center text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        Submit to random pro
                      </Link>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </form>

          <div className="mt-24">
            <figure className="h-[500px] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co.com/QFHfHVkn/3661d48be9bf8c22f8f2cf135153c857.jpg"
                className="size-full object-cover object-center"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaries;
