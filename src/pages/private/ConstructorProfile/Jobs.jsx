import { Button } from "@/components/shadcn/ui/button";
import { jobs } from "@/utils/staticData";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Jobs = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [filterJobs, setFilterJobs] = useState(
    jobs.filter((item) => item.name === "Opportunity")
  );

  console.log(filterJobs);

  const tabsMenu = ["Opportunity", "Lead"];

  const handleTab = (index, name) => {
    setActiveTabIdx(index);
    const selectedJobs = jobs.filter((item) => item.name === name);
    setFilterJobs(selectedJobs);
  };

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Jobs</p>
      </div>

      <div className="mb-10 flex items-center justify-center gap-4">
        {tabsMenu.map((item, index) => (
          <div
            onClick={() => handleTab(index, item)}
            className={`cursor-pointer border-b px-4 pb-3 text-lg ${index === activeTabIdx ? "border-orange-500" : ""} flex-grow text-center`}
            key={item}
          >
            <h4 className={`${index === activeTabIdx ? "text-accent" : ""}`}>
              {item}
            </h4>
          </div>
        ))}
      </div>

      <motion.div
        key={activeTabIdx} // Ensure re-animation on tab switch
        initial="hidden"
        animate="visible"
        variants={gridVariants}
        className="space-y-10"
      >
        {filterJobs.map((item, idx) => (
          <div className="space-y-6 rounded-md border p-7" key={idx}>
            <div className="flex items-center justify-between rounded-sm bg-[#FFF2EB] px-6 py-4">
              <div className="flex items-center gap-3">
                <figure className="size-16 overflow-hidden rounded-full">
                  <img
                    src="https://i.ibb.co.com/xK3GGtpk/young-bearded-man-with-striped-shirt-1.png"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
                <p className="text-xl font-semibold">{item?.service}</p>
              </div>
              <p className="text-3xl font-bold text-accent">Price : $250</p>
            </div>
            <div className="space-y-5">
              {item.questions.map((question, idx) => (
                <div key={idx} className="w-[90%] space-y-3">
                  <p className="font-medium">
                    {idx + 1}. {question?.question}
                  </p>
                  <p>{question?.answer}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-sm bg-[#FFF2EB] px-6 py-4">
              <p className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_16877_197)">
                    <path
                      d="M13.3389 13.5766C15.4671 10.237 15.1996 10.6536 15.2609 10.5666C16.0358 9.47367 16.4453 8.18738 16.4453 6.84668C16.4453 3.29121 13.5601 0.362305 10 0.362305C6.45148 0.362305 3.55469 3.28543 3.55469 6.84668C3.55469 8.18652 3.97281 9.50648 4.77305 10.6141L6.66102 13.5766C4.64246 13.8868 1.21094 14.8112 1.21094 16.8467C1.21094 17.5887 1.69523 18.6461 4.00242 19.4701C5.61344 20.0454 7.7434 20.3623 10 20.3623C14.2197 20.3623 18.7891 19.172 18.7891 16.8467C18.7891 14.8109 15.3616 13.8874 13.3389 13.5766ZM5.75191 9.96953C5.74547 9.95947 5.73874 9.94959 5.73172 9.93992C5.06582 9.02383 4.72656 7.93813 4.72656 6.84668C4.72656 3.91629 7.08617 1.53418 10 1.53418C12.9078 1.53418 15.2734 3.91734 15.2734 6.84668C15.2734 7.93988 14.9406 8.98875 14.3107 9.8807C14.2543 9.95516 14.5487 9.49766 10 16.6353L5.75191 9.96953ZM10 19.1904C5.39086 19.1904 2.38281 17.8356 2.38281 16.8467C2.38281 16.182 3.92844 15.0891 7.35344 14.663L9.50586 18.0405C9.55879 18.1236 9.63181 18.192 9.71817 18.2394C9.80454 18.2867 9.90145 18.3116 9.99996 18.3116C10.0985 18.3116 10.1954 18.2867 10.2817 18.2394C10.3681 18.192 10.4411 18.1236 10.4941 18.0405L12.6464 14.663C16.0715 15.0891 17.6172 16.182 17.6172 16.8467C17.6172 17.8272 14.6362 19.1904 10 19.1904Z"
                      fill="#2C2C2C"
                    />
                    <path
                      d="M10 3.91699C8.38457 3.91699 7.07031 5.23125 7.07031 6.84668C7.07031 8.46211 8.38457 9.77637 10 9.77637C11.6154 9.77637 12.9297 8.46211 12.9297 6.84668C12.9297 5.23125 11.6154 3.91699 10 3.91699ZM10 8.60449C9.03074 8.60449 8.24219 7.81594 8.24219 6.84668C8.24219 5.87742 9.03074 5.08887 10 5.08887C10.9693 5.08887 11.7578 5.87742 11.7578 6.84668C11.7578 7.81594 10.9693 8.60449 10 8.60449Z"
                      fill="#2C2C2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16877_197">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.362305)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Nieuw-Vennep (28 km)
              </p>
              <p className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_16877_203)">
                    <path
                      d="M10 20.3623C15.5133 20.3623 20 15.8756 20 10.3623C20 4.84898 15.5134 0.362305 10 0.362305C4.48662 0.362305 0 4.84898 0 10.3623C0 15.8756 4.48668 20.3623 10 20.3623ZM10 1.69562C14.78 1.69562 18.6667 5.58227 18.6667 10.3623C18.6667 15.1423 14.78 19.029 10 19.029C5.21996 19.029 1.33331 15.1423 1.33331 10.3623C1.33331 5.58227 5.22002 1.69562 10 1.69562Z"
                      fill="#2C2C2C"
                    />
                    <path
                      d="M12.9154 13.549C13.0387 13.6489 13.1853 13.6956 13.332 13.6956C13.4319 13.6959 13.5306 13.6735 13.6206 13.6302C13.7107 13.5869 13.7898 13.5238 13.852 13.4457C14.082 13.159 14.0353 12.739 13.7487 12.509L10.6653 10.0423V5.02896C10.6653 4.66229 10.3654 4.3623 9.99869 4.3623C9.63201 4.3623 9.33203 4.66229 9.33203 5.02896V10.3623C9.33203 10.5657 9.42538 10.7557 9.58203 10.8823L12.9154 13.549Z"
                      fill="#2C2C2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16877_203">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.362305)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                30 min ago
              </p>
            </div>
            <Link to="/assignment-details" className="block">
              <Button type="button" className="w-[230px] text-lg">
                View more
              </Button>
            </Link>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Jobs;
