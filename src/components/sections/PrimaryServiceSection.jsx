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

const PrimaryServiceSection = () => {
  const { data, isLoading, isError } = useGetAllPrimaryServices();

  return (
    <section className="my-[80px]">
      <SectionTitle tagName="h3">Services Tailored to Your Needs.</SectionTitle>
      <SectionText>
        Connect with trusted professionals, set your budget, and bring your
        vision to life—all in one place.
      </SectionText>
      {isLoading ? (
        <div className="container my-8 grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-4">
          <PrimaryServiceSkeletons />
        </div>
      ) : isError ? (
        <div className="my-8 text-center text-destructive">
          Something went wrong!
        </div>
      ) : data?.length === 0 ? (
        <div className="my-8 text-center">No Data Found!</div>
      ) : (
        <div className="container my-8 grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-4">
          {data?.map((service, idx) => (
            <PrimaryServiceItem
              key={`primary-service-${idx}`}
              path={`/service/${service.slug}`}
              icon={
                idx === 0 ? (
                  <ServiceIcon1 />
                ) : idx === 1 ? (
                  <ServiceIcon2 />
                ) : idx === 2 ? (
                  <ServiceIcon3 />
                ) : idx === 3 ? (
                  <ServiceIcon4 />
                ) : idx === 4 ? (
                  <ServiceIcon5 />
                ) : idx === 5 ? (
                  <ServiceIcon6 />
                ) : null
              }
              title={service?.title}
              details={service?.details}
            />
          ))}
        </div>
      )}
      <div className="text-center">
        <Button asChild>
          <Link to="#">View All</Link>
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
      to={path}
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
