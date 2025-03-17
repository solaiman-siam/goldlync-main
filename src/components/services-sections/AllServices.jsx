import SectionText from "@/components/SectionText";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  ServiceIcon6,
} from "@/assets/icons";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { useGetAllPrimaryServices } from "@/hooks/api-hooks/service.hook";
import { cn } from "@/lib/shadcn/utils";
import Container from "../Container";

function AllServices({ cardLimit, lineClamp = "line-clamp-3" }) {
  const { data, isLoading, isError } = useGetAllPrimaryServices();
  if (!isLoading) console.log(data);
  const selecteData = cardLimit ? data?.slice(0, cardLimit) : data;

  return (
    <Container className="pt-12 md:pt-16 lg:pt-20">
      <SectionTitle tagName="h3">Services Tailored to Your Needs.</SectionTitle>
      <SectionText>
        Connect with trusted professionals, set your budget, and bring your
        vision to life—all in one place.
      </SectionText>
      {isLoading ? (
        <div className="mt-6 md:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PrimaryServiceSkeletons />
        </div>
      ) : isError ? (
        <div className="mt-6 md:mt-8 text-center text-destructive">
          Something went wrong!
        </div>
      ) : selecteData?.length === 0 ? (
        <div className="mt-6 md:mt-8 text-center">No Data Found!</div>
      ) : (
        <div className="mt-6 md:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selecteData?.map((service, idx) => (
            <PrimaryServiceItem
              key={`primary-service-${idx}`}
              path={`/service-subcategories/${service.slug}`}
              icon={`https://goldlync.softvencefsd.xyz/${service?.photo}`}
              title={service?.title}
              details={service?.description}
              lineClamp={lineClamp}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

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

const PrimaryServiceItem = ({ path, icon, title, details, lineClamp }) => {
  return (
    <Link
      to={path}
      className="flex flex-col items-center justify-center gap-2 md:gap-3 xl:gap-4 rounded-md border border-card bg-card px-4 md:px-6 xl:px-8 py-5 md:py-8 xl:py-10 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-input hover:shadow-md"
    >
      <span className="inline-flex size-[60px] md:size-[80px] xl:size-[100px] items-center justify-center rounded-full bg-accent">
        <img src={icon} alt="" className="size-1/2" />
      </span>
      <h3 className="font-manrope text-lg md:text-xl font-semibold text-card-foreground xl:text-2xl md:leading-[130%]">
        {title}
      </h3>
      <p
        className={cn(
          `font-poppins xl:text-lg font-normal xl:leading-[180%] text-[#494949]`,
          lineClamp
        )}
      >
        {details}
      </p>
    </Link>
  );
};

export default AllServices;
