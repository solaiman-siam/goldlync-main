import projectImg1 from "@/assets/images/project1.png";
import projectImg2 from "@/assets/images/project2.png";
import projectImg3 from "@/assets/images/project3.png";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/shadcn/ui/button";
import Container from "@/components/Container";

const ExploreProjects = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <Container>
      <div className="mb-12 mt-6 space-y-6 md:mb-16 md:mt-8 md:space-y-9 lg:mb-20 lg:mt-20 lg:space-y-12">
        <div className="">
          <h1 className="mb-3 text-center text-3xl font-bold text-[#313133] sm:text-4xl md:mb-5 md:text-[40px] lg:mb-7 lg:text-[46px] xl:text-[64px]">
            {data?.name ? data.name : "House Cleaning"}
          </h1>
          <p className="mx-auto mb-5 w-[95%] text-center text-[#575757] md:mb-8 lg:mb-10 lg:w-[70%]">
            {data?.description
              ? data.description
              : "I need assistance with installing a new kitchen tap and addressing a leak at the connection between the hose and the water pipe. The leak appears to be coming from the coupling, which may require replacement. In addition to installing the new tap, I would like the couplings and any necessary fittings to be replaced to ensure a secure, leak-free connection."}
          </p>
          <figure className="h-[240px] w-full overflow-hidden rounded-xl md:h-[350px] lg:h-[450px] xl:h-[600px]">
            <img
              src={
                data?.banner
                  ? `https://goldlync.softvencefsd.xyz/${data?.banner}`
                  : projectImg1
              }
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex-1">
            <h2 className="mb-3 max-w-[80%] text-center text-2xl font-bold text-[#313133] md:mb-5 md:text-left md:text-3xl lg:mb-7 lg:text-4xl xl:text-5xl">
              Before {data?.sub_category && data.sub_category}
            </h2>
            <p className="mx-auto w-[90%] text-center text-[#575757] md:mx-0 md:mb-10 md:text-left">
              {data?.before_work
                ? data.before_work
                : "I need assistance with installing a new kitchen tap and addressing a leak at the connection between the hose and the water pipe. The leak appears to be coming from the coupling, which may require replacement."}
            </p>
          </div>
          <figure className="h-[240px] w-full overflow-hidden rounded-xl md:h-[300px] md:flex-1 lg:h-[380px] xl:h-[450px]">
            <img
              src={
                data?.before_work_image
                  ? `https://goldlync.softvencefsd.xyz/${data?.before_work_image}`
                  : projectImg2
              }
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex-1">
            <h2 className="mb-3 max-w-[80%] text-center text-2xl font-bold text-[#313133] md:mb-5 md:text-left md:text-3xl lg:mb-7 lg:text-4xl xl:text-5xl">
              After {data?.sub_category && data.sub_category}
            </h2>
            <p className="mx-auto w-[90%] text-center text-[#575757] md:mx-0 md:mb-10 md:text-left">
              {data?.after_work
                ? data.after_work
                : "I need assistance with installing a new kitchen tap and addressing a leak at the connection between the hose and the water pipe. The leak appears to be coming from the coupling, which may require replacement."}
            </p>
          </div>
          <figure className="h-[240px] w-full overflow-hidden rounded-xl md:h-[300px] md:flex-1 lg:h-[380px] xl:h-[450px]">
            <img
              src={
                data?.after_work_image
                  ? `https://goldlync.softvencefsd.xyz/${data?.after_work_image}`
                  : projectImg3
              }
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </div>

        <div className="">
          <Link
            to={data?.sub_category_slug ? `/service-questionnaries/${data.sub_category_slug}` : "/services"}
            className="mx-auto block w-fit"
          >
            <Button type="button" className="px-20">
              Get Service
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ExploreProjects;
