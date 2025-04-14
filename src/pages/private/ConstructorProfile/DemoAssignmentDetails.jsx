import {
  BackSign,
  Cause4,
  Clock4,
  ClockIcon1,
  Location3,
  Location4,
  Note4,
  Order4,
  Work1,
} from "@/assets/icons";
import { Link } from "react-router";
import "./constructor.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import assignmentDetailsBanner from "@/assets/images/assignmentDetailsBanner.png";
import { Button } from "@/components/shadcn/ui/button";
import { FreeMode } from "swiper/modules";
import Container from "@/components/Container";

const DemoAssignmentDetails = () => {
  const questionsAns = [
    {
      ques: "What type of property needs gutter cleaning?",
      ans: "Townhouses and duplexes",
    },
    {
      ques: "How many stories does the property have?",
      ans: "Single-Story Properties",
    },
    {
      ques: "What is the square of your home?",
      ans: "1,500 - 3,000 sq ft",
    },
    {
      ques: "A detail job description",
      ans: "We are seeking a detail-oriented and hardworking Gutter Cleaning Specialist to ensure residential and commercial properties maintain functional, clean, and debris-free gutter systems. This role involves assessing, cleaning, repairing, and maintaining gutters and downspouts, while adhering to safety standards and delivering excellent customer service.",
    },
    {
      ques: "what type of property needs gutter cleaning?",
      ans: "Residential Properties",
    },
  ];

  return (
    <Container className="">
      <Link
        to="/constructor-profile/jobs"
        className="flex items-center gap-1.5"
      >
        <BackSign className="stroke-[#2D2F34]" />
        <span className="text-[#2D2F34]">Assignments</span>
      </Link>

      <h2 className="mt-7 text-3xl font-bold text-[#313133]">
        Installing or replacing radiators: 4 radiators; New radiators...
      </h2>
      <h4 className="my-4 text-3xl font-bold text-primary">
        Budjet Range: $100-$300
      </h4>

      <div className="flex gap-20">
        <div className="left w-1/2 flex-shrink-0">
          <div className="mb-12 space-y-3 font-medium">
            <div className="flex items-center gap-3">
              <Work1 />
              <p className="text-[#2D2F34]/70">Renovation work</p>
            </div>
            <div className="flex items-center gap-3">
              <Location3 />
              <p className="text-[#2D2F34]/70">Nieuw-Vennep (28 km)</p>
            </div>
            <div className="flex items-center gap-3">
              <ClockIcon1 />
              <p className="text-[#2D2F34]/70">30 min ago</p>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="mb-6 text-3xl font-bold">Description</h3>
            <p className="mb-8 text-[#242424]">
              I need assistance with installing a new kitchen tap and addressing
              a leak at the connection between the hose and the water pipe. The
              leak appears to be coming from the coupling, which may require
              replacement. In addition to installing the new tap, I would like
              the couplings and any necessary fittings to be replaced to ensure
              a secure, leak-free connection.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <div className="w-[35px] flex-shrink-0">
                  <Note4 className="" />
                </div>
                <p className="text-[#637381]">
                  <span className="font-semibold text-[#637381]">
                    Type of job:
                  </span>{" "}
                  I would like to install a new kitchen tap and there is a leak
                  at the coupling of the connection hose and water pipe.
                </p>
              </div>
              <div className="flex">
                <div className="w-[35px] flex-shrink-0">
                  <Location4 className="" />
                </div>
                <p className="text-[#637381]">
                  <span className="font-semibold text-[#637381]">
                    Location :
                  </span>{" "}
                  Kitchen.
                </p>
              </div>
              <div className="flex">
                <div className="w-[35px] flex-shrink-0">
                  <Cause4 className="" />
                </div>
                <p className="text-[#637381]">
                  <span className="font-semibold text-[#637381]">Cause :</span>{" "}
                  Leak at the coupling between the connection hose and the water
                  pipe
                </p>
              </div>
              <div className="flex">
                <div className="w-[35px] flex-shrink-0">
                  <Clock4 />
                </div>
                <p className="text-[#637381]">
                  <span className="font-semibold text-[#637381]">
                    Output date:
                  </span>{" "}
                  Within 2 weeks
                </p>
              </div>
              <div className="flex">
                <div className="w-[35px] flex-shrink-0">
                  <Order4 />
                </div>
                <p className="text-[#637381]">
                  <span className="font-semibold text-[#637381]">
                    Order number:
                  </span>{" "}
                  6104280
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-grow">
          <div className="flex h-[420px] items-center justify-center border">
            map
          </div>
        </div>
      </div>

      <div className="mb-14">
        <h3 className="mb-6 text-3xl font-bold">
          Gutter cleaning questionnaire :
        </h3>

        <div className="space-y-5">
          {questionsAns.map((qa, idx) => (
            <div key={idx}>
              <p className="mb-3 text-xl font-semibold text-[#242424]">
                {idx + 1}. {qa.ques}
              </p>
              <p className="text-[#242424]">{qa.ans}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="mb-7 text-3xl font-bold text-[#313133]">Attachments</h2>

        <div className="">
          <figure className="relative h-[800px] w-full overflow-hidden">
            <img
              src={assignmentDetailsBanner}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                freeMode={true}
                loop={true}
                modules={[FreeMode]}
                className="mySwiper"
              >
                {Array(15)
                  .fill(null)
                  .map((_, idx) => (
                    <SwiperSlide key={idx} className="w-[260px]">
                      <figure className=" w-[260px] aspect-video flex-shrink-0 border-2 border-white">
                        <img
                          src={assignmentDetailsBanner}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </figure>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </figure>
        </div>
      </div>
      <div className="mb-14 flex items-center gap-4">
        <Button type="button" className="px-20">
          Accept Request
        </Button>
        <Link
          to="#"
          className="w-[286px] rounded-full border border-[#ff0000]/80 px-20 py-3 text-center font-semibold text-[#ff0000]/80 transition-all duration-300 hover:bg-[#ff0000]/80 hover:text-white"
        >
          Decline
        </Link>
      </div>
    </Container>
  );
};

export default DemoAssignmentDetails;
