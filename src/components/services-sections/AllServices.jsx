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
<<<<<<< HEAD
import { cn } from "@/lib/shadcn/utils";
=======
import Container from "../Container";
>>>>>>> 26d3c0c2099f58bb116a6ca7abec81ad50cc304f

function AllServices({ cardLimit, lineClamp = "line-clamp-3" }) {
  const { data, isLoading, isError } = useGetAllPrimaryServices();
  if (!isLoading) console.log(data);
  const selecteData = cardLimit ? data?.slice(0, cardLimit) : data;

  return (
<<<<<<< HEAD
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
      ) : selecteData?.length === 0 ? (
        <div className="my-8 text-center">No Data Found!</div>
      ) : (
        <div className="container my-8 grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-4">
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
    </section>
=======
    <Container>
      <section className="my-[40px] lg:my-[80px]">
        <SectionTitle tagName="h3" className="text-[24px] md:text-4xl">
          Services Tailored to Your Needs.
        </SectionTitle>
        <SectionText className="text-base md:text-lg">
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
          <div className="container my-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(420px,1fr))]">
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
                  ) : (
                    <ServiceIcon6 />
                  )
                }
                title={service?.title}
                details={service?.details}
              />
            ))}
          </div>
        )}
      </section>
    </Container>
>>>>>>> 26d3c0c2099f58bb116a6ca7abec81ad50cc304f
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
<<<<<<< HEAD
      to={path}
      className="flex flex-col items-center justify-center gap-5 rounded-md border border-card bg-card px-8 py-10 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-input hover:shadow-md"
    >
      <span className="inline-flex size-[100px] items-center justify-center rounded-full bg-accent [&_svg]:w-[50%] [&_svg]:text-accent-foreground">
        <img src={icon} alt="" className="size-[50px]" />
=======
      to={"/service-categories"}
      className="flex flex-col items-center justify-center gap-2 rounded-md border border-card bg-card px-8 py-10 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-input hover:shadow-md md:gap-5"
    >
      <span className="inline-flex size-[60px] items-center justify-center rounded-full bg-accent lg:size-[80px] xl:size-[100px] [&_svg]:w-[50%] [&_svg]:text-accent-foreground">
        {icon}
>>>>>>> 26d3c0c2099f58bb116a6ca7abec81ad50cc304f
      </span>
      <h3 className="font-manrope text-[20px] font-semibold text-card-foreground md:text-2xl md:leading-[130%]">
        {title}
      </h3>
<<<<<<< HEAD
      <p
        className={cn(
          `font-poppins text-lg font-normal leading-[180%] text-[#494949]`,
          lineClamp
        )}
      >
=======
      <p className="font-poppins text-base font-normal text-[#494949] md:text-base lg:leading-[180%]">
>>>>>>> 26d3c0c2099f58bb116a6ca7abec81ad50cc304f
        {details}
      </p>
    </Link>
  );
};

export default AllServices;
