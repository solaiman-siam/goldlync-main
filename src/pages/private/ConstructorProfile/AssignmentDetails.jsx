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
import { Link, useParams } from "react-router";
import "./constructor.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import assignmentDetailsBanner from "@/assets/images/assignmentDetailsBanner.png";
import { Button } from "@/components/shadcn/ui/button";
import { FreeMode } from "swiper/modules";
import Container from "@/components/Container";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { LyncCoinIcon } from "@/assets/icons/ServiceIcon";

const fetchData = async (token, id) => {
  const response = await fetch(
    `https://goldlync.softvencefsd.xyz/api/service/job_details/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error("Network response failed");
  return response.json();
};

const AssignmentDetails = () => {
  const location = useLocation();
  const updatedAt = location.state?.updatedAt;
  const answers = location.state?.answers;
  // console.log(answers);

  const [customDialogOpen, setCustomDialogOpen] = useState(false);
  const [customDialogOpen2, setCustomDialogOpen2] = useState(false);

  const [job, setJob] = useState([]);
  const token = localStorage.getItem("auth_token");
  const id = useParams().id;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobData", token],
    queryFn: () => fetchData(token, id),
    enabled: !!token,
  });

  const [bigImg, setBigImg] = useState(assignmentDetailsBanner);

  console.log(data?.data?.["Order Details"]?.answer2?.zip_code);

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

  if (isLoading) return <div className="my-40 text-center">Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <>
      <Container className="">
        <Link
          to="/constructor-profile/jobs"
          className="flex items-center gap-1.5"
        >
          <BackSign className="stroke-[#2D2F34]" />
          <span className="text-[#2D2F34]">Assignments</span>
        </Link>

        <h2 className="mt-7 text-3xl font-bold text-[#313133]">
          {data?.data?.Sub_Cateogry}
        </h2>
        <h4 className="my-4 text-3xl font-bold text-primary">
          Budjet Range: {data?.data?.Order_Details?.answer2?.budget}
        </h4>

        <div className="flex gap-20">
          <div className="left w-1/2 flex-shrink-0">
            <div className="mb-12 space-y-3 font-medium">
              <div className="flex items-center gap-3">
                <Work1 />
                <p className="text-[#2D2F34]/70">{data?.data?.Category}</p>
              </div>
              <div className="flex items-center gap-3">
                <Location3 />
                <p className="text-[#2D2F34]/70">
                  {data?.data?.Order_Details?.answer2?.city} (20km)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon1 />
                <p className="text-[#2D2F34]/70">{updatedAt}</p>
              </div>
            </div>

            <div className="mb-14">
              <h3 className="mb-6 text-3xl font-bold">Description</h3>
              <p className="mb-8 text-[#242424]">
                {data?.data?.Order_Details?.answer2?.details}
              </p>
              <div className="space-y-3">
                {/* <div className="flex">
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
              </div> */}
                <div className="flex">
                  <div className="w-[35px] flex-shrink-0">
                    <Location4 className="" />
                  </div>
                  <p className="text-[#637381]">
                    <span className="font-semibold text-[#637381]">
                      Location :
                    </span>{" "}
                    {data?.data?.Order_Details?.answer2?.state}
                  </p>
                </div>
                {/* <div className="flex">
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
              </div> */}
                <div className="flex">
                  <div className="w-[35px] flex-shrink-0">
                    <Order4 />
                  </div>
                  <p className="text-[#637381]">
                    <span className="font-semibold text-[#637381]">
                      Order number:
                    </span>{" "}
                    {data?.data?.Order_Details?.order_id}
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
            {answers.map((question, idx) => (
              <div key={idx}>
                <p className="mb-3 text-xl font-semibold text-[#242424]">
                  {idx + 1}. {question?.question_title}
                </p>
                <p className="text-base font-semibold text-[#242424]">
                  {question?.answers.map((answer, index) => (
                    <span key={index} className="text-sm text-gray-500">
                      {answer}
                      {index !== question.answers.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-7 text-3xl font-bold text-[#313133]">
            Attachments
          </h2>

          <div className="">
            <figure className="relative h-[800px] w-full overflow-hidden">
              <img
                src={bigImg}
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
                  {data?.data?.Order_Details?.answer_images.map((img, idx) => (
                    <SwiperSlide key={idx} className="w-[260px]">
                      <figure className="aspect-video w-[260px] flex-shrink-0 border-2 border-white">
                        <img
                          src={`https://goldlync.softvencefsd.xyz/${img.photo}`}
                          alt=""
                          onClick={() =>
                            setBigImg(
                              `https://goldlync.softvencefsd.xyz/${img.photo}`
                            )
                          }
                          className="h-full w-full cursor-pointer object-cover object-center"
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
          <Button
            type="button"
            className="px-20"
            onClick={() => setCustomDialogOpen(true)}
          >
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
      <Dialog open={customDialogOpen} onOpenChange={setCustomDialogOpen}>
        <DialogContent className="max-w-[680px] p-8 md:p-10 lg:p-14 xl:p-16">
          <DialogHeader>
            <DialogDescription>
              <div className="flex flex-col gap-8">
                <h2 className="text-center text-5xl font-bold leading-[120%]">
                  Spend Your Coins, Get This job !
                </h2>
                <div className="flex items-center justify-between px-3 text-xl">
                  <p>Budget</p>
                  <p>Coin</p>
                </div>
                <div className="flex items-center justify-between bg-[#FFF2EB] p-4 text-xl font-semibold">
                  <p>{data?.data?.Order_Details?.answer2?.budget}</p>
                  <p className="flex items-center gap-2">
                    <LyncCoinIcon /> Lync Coins: 25
                  </p>
                </div>
                <Button
                  className="text-lg"
                  onClick={() => setCustomDialogOpen2(true)}
                >
                  Continue
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={customDialogOpen2} onOpenChange={setCustomDialogOpen2}>
        <DialogContent className="max-w-[680px] p-8 md:p-10 lg:p-14 xl:p-16">
          <DialogHeader>
            <DialogDescription>
              <div className="flex flex-col gap-8">
                <h2 className="text-center text-[45px] font-bold leading-[120%]">
                  Success! Your coins have been deducted and your job is
                  ready. 🎉
                </h2>

                <Link to="/">
                  <Button className="text-lg w-full">Home</Button>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssignmentDetails;
