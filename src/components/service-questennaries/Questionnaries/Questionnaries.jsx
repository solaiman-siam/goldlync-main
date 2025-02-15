
import CommonSelect from "./CommonSelect";
import { Link } from "react-router";
import { useState } from "react";
import Previews from "@/components/Previews";

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

  const [isFocused, setIsFocused] = useState(false);
  const [budget, setBudget] = useState(null);

  const increaseInputValue = (increment) => {
    setBudget((prevBudget) => prevBudget + increment);
  };

  return (
    <div>
      <div className="container py-24">
        <h3 className="text-left font-manrope text-4xl font-bold">
          Gutter cleaning questionnaire
        </h3>
        <div className="pt-12 font-manrope">
          <form action="" className="space-y-8">
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
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData.length + 1}. Provide a detail job description.
              </label>
              <textarea
                className="h-[250px] w-full rounded border border-gray-400 px-4 py-4 focus:outline-primary"
                name=""
                id=""
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData.length + 2}. Upload Image
                </label>
                <Previews />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData.length + 3}. Your Budget
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="h-[64px] w-full rounded border p-4 outline-primary"
                    value={budget}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => {
                      return e.target.value > 0 || setIsFocused(false);
                    }}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                  />
                  <div className="pointer-events-none absolute left-0 right-0 top-1/2 ml-auto flex -translate-y-1/2 items-center justify-between px-4">
                    <p className={`text-[#8D8D8D] ${isFocused && "invisible"}`}>
                      Budget <span className="text-primary">$250</span>
                    </p>
                    <div className="pointer-events-auto flex flex-col">
                      <button
                        type="button"
                        onClick={() => increaseInputValue(1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17 14L12 9L7 14"
                            stroke="#434343"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => increaseInputValue(-1)}
                        disabled={budget <= 0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="#434343"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                    placeholder="Country"
                  />
                </div>

                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/pros"
              className="block w-80 rounded-full bg-primary py-4 text-center font-medium text-white"
            >
              Submit
            </Link>
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
