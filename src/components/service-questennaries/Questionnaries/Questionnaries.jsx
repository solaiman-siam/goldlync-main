import SectionTitle from "@/components/SectionTitle";
import CommonSelect from "./CommonSelect";

function Questionnaries() {
  const selectData = [
    {
      id: 1,
      label: "1. What type of property needs gutter cleaning?",
      options: [
        "Residential Property",
        "Commercial Property",
        "Industrial Property",
        "Agricultural Property",
      ],
    },
    {
      id: 2,
      label: "2. How often do you clean your gutters?",
      options: [
        "Once a year",
        "Twice a year",
        "Every quarter",
        "Rarely or never",
      ],
    },
    {
      id: 3,
      label: "3. Are there any trees near your property?",
      options: [
        "Yes, many trees",
        "Some trees nearby",
        "No trees nearby",
        "Not sure",
      ],
    },
    {
      id: 4,
      label: "4. What is your preferred cleaning service schedule?",
      options: [
        "Morning (8 AM - 12 PM)",
        "Afternoon (12 PM - 4 PM)",
        "Evening (4 PM - 8 PM)",
        "Flexible",
      ],
    },
  ];

  return (
    <div>
      <div className="container py-24">
        <SectionTitle tagName="h3">Gutter cleaning questionnaire</SectionTitle>
        <div className="py-24">
          <form action="">
            <div className="space-y-8 pb-8">
              {selectData.map((select) => (
                <CommonSelect
                  key={select.id}
                  options={select?.options}
                  label={select?.label}
                />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-medium" htmlFor="">
                {" "}
                {selectData.length + 1}. Provide a detail job description.
              </label>
              <textarea
                className="h-40 border-gray-400 w-full rounded-lg border px-4 py-4 focus:outline-primary"
                name=""
                id=""
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-center pt-8">
              <button className="w-80 rounded-full bg-primary py-4 font-medium text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Questionnaries;
