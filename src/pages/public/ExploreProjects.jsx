import projectImg1 from "@/assets/images/project1.png";
import projectImg2 from "@/assets/images/project2.png";
import projectImg3 from "@/assets/images/project3.png";
import { Link } from "react-router";
import { Button } from "@/components/shadcn/ui/button";

const ExploreProjects = () => {
  return (
    <div className="container mb-20 mt-10 space-y-12">
      <div className="">
        <h1 className="mb-7 text-center text-5xl font-bold text-[#313133]">
          House Cleaning
        </h1>
        <p className="mx-auto mb-10 w-[80%] text-center text-[#575757]">
          I need assistance with installing a new kitchen tap and addressing a
          leak at the connection between the hose and the water pipe. The leak
          appears to be coming from the coupling, which may require replacement.
          In addition to installing the new tap, I would like the couplings and
          any necessary fittings to be replaced to ensure a secure, leak-free
          connection.
        </p>
        <figure className="h-[600px] w-full overflow-hidden rounded-xl">
          <img
            src={projectImg1}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex-1">
          <h2 className="mb-7 text-5xl font-bold text-[#313133]">
            Before Cleaning
          </h2>
          <p className="mb-10 w-[90%] text-[#575757]">
            I need assistance with installing a new kitchen tap and addressing a
            leak at the connection between the hose and the water pipe. The leak
            appears to be coming from the coupling, which may require
            replacement.
          </p>
        </div>
        <figure className="h-[450px] w-full flex-1 overflow-hidden rounded-xl">
          <img
            src={projectImg2}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="flex flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <h2 className="mb-7 text-5xl font-bold text-[#313133]">
            After Cleaning
          </h2>
          <p className="mb-10 w-[90%] text-[#575757]">
            I need assistance with installing a new kitchen tap and addressing a
            leak at the connection between the hose and the water pipe. The leak
            appears to be coming from the coupling, which may require
            replacement.
          </p>
        </div>
        <figure className="h-[450px] w-full flex-1 overflow-hidden rounded-xl">
          <img
            src={projectImg3}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="">
        <Link to="/service-questionnaries" className="mx-auto block w-fit">
          <Button type="button" className="px-20">
            Get Service
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreProjects;
