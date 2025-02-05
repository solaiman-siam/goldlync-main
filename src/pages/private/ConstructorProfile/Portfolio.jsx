const Portfolio = () => {
  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Portfolio</p>
      </div>
      <div className="">
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
      </div>

      <div className="mt-8 space-y-5 rounded-lg border p-4">
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
      </div>

      <div className="mb-[160px] mt-20">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Completed</p>
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
