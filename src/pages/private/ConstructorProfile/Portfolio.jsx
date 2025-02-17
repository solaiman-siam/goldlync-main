import { Link } from "react-router";

const Portfolio = () => {
  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Portfolio</p>
      </div>
      {/* <div className="">
        <div className="heading flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Order Status</p>
        </div>
        <div className="my-5 flex h-2 justify-between gap-4">
          <div className="h-full w-full rounded-full bg-accent"></div>
          <div className="h-full w-full rounded-full bg-[#B6B6B6]"></div>
        </div>
        <div className="flex h-2 justify-between gap-4">
          <p className="">Started</p>
          <p>Completed</p>
        </div>
      </div> */}

      {/* <div className="mt-8 space-y-5 rounded-lg border p-4">
        <div className="flex items-center justify-between rounded-sm bg-[#FFF2EB] px-6 py-4">
          <p className="text-xl text-black">
            I will provide professional home repair services for your project
          </p>{" "}
          <p className="text-3xl">$750</p>
        </div>
        <div className="px-6 leading-[200%]">
          <p>
            Now, we are moving forward with the 3rd phase of your home repair
            project, focusing on interior renovations.
          </p>
          <p>
            To complete this phase, I will implement the following services:
          </p>
          <li>Plumbing Repairs and Installation</li>
          <li>Electrical System Fixes</li>
          <li>Drywall Patching and Painting</li>
          <li>Flooring Repairs or Installation</li>
          <li>Fixture Replacements (Lights, Faucets, etc.)</li>
          <p>I will proceed in the next three steps:</p>
          <p>1st Step: Initial Inspection and Planning</p>
          <p>2nd Step: Material Procurement and Preparation</p>
          <p>3rd Step: Repair and Renovation Work</p>
          <p>
            For the full project, the total cost will be $1,500 USD with a
            delivery timeline of 45 days.
          </p>
          <li>
            Now I’m sending you the custom offer for the 3rd phase, which is
            $750 USD for the renovation work. The estimated delivery time is 20
            days.
          </li>
          <p>Please accept the custom offer to proceed.</p>
          <p>Thank you.</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl leading-[160%]">
            <p>Days remaining:</p>
            <p className="font-semibold">20 Days</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#AAA] px-16 py-4 text-xl text-white"
          >
            Cancel
          </button>
        </div>
      </div> */}

      <div className="mb-[160px]">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Completed Projects</p>
          <Link to="/constructor-profile/add-project" type="button" className="inline-flex items-center gap-2">
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
            Add Projects
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-7 gap-y-8">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="rounded-md border bg-[#FFF2EB] p-4">
              <figure className="mb-4 h-[160px] w-full overflow-hidden rounded-sm">
                <img
                  src="https://i.ibb.co.com/0VfKZC1g/portrait-engineer-job-site-work-hours-1.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </figure>
              <div className="space-y-[11px]">
                <p className="text-xl font-medium">House Cleaning</p>
                <p className="text-sm text-[#494949]">
                  Set your budget, and bring your vision to life—all in one
                  place.
                </p>
                <p className="text-lg font-semibold">Avg. Price $140-$150</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
