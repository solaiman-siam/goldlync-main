import { Link } from "react-router";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  ServiceIcon6,
} from "@/assets/icons";
import { useGetAllPrimaryServices } from "@/hooks/api-hooks/service.hook";
import { Skeleton } from "../shadcn/ui/skeleton";
import { Button } from "../shadcn/ui/button";
import Container from "../Container";
import AllServices from "../services-sections/AllServices";
import Container from "../Container";

const PrimaryServiceSection = ({ limit = false }) => {
  const { data, isLoading, isError } = useGetAllPrimaryServices();

  return (
    <section className="mb-20">
      <div className="text-center">
        <AllServices cardLimit="6" lineClamp="line-clamp-2"/>
        <Button asChild>
          <Link to="services">View All</Link>
        </Button>
      </div>
    </section>
  );
};

const PrimaryServiceSkeletons = () => {
  return Array(6)
    .fill(null)
    .map((_, idx) => (
      <Skeleton
        key={`service-skeleton-${idx}`}
        className="aspect-video w-full"
      />
    ));
};

const PrimaryServiceItem = ({ path, icon, title, details }) => {
  return (
    <Link
      to={'/service-categories'}
      className="flex flex-col items-center justify-center gap-5 rounded-md border border-card bg-card px-8 py-10 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-input hover:shadow-md"
      to={'/service-categories'}
      className="flex flex-col items-center justify-center gap-5 rounded-md border border-card bg-card px-8 py-10 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-input hover:shadow-md"
    >
      <span className="inline-flex size-[100px] items-center justify-center rounded-full bg-accent [&_svg]:w-[50%] [&_svg]:text-accent-foreground">
        {icon}
      </span>
      <h3 className="font-manrope text-2xl font-semibold leading-[130%] text-card-foreground">
        {title}
      </h3>
      <p className="font-poppins text-lg font-normal leading-[180%] text-[#494949]">
        {details}
      </p>
    </Link>
  );
};

export default PrimaryServiceSection;
