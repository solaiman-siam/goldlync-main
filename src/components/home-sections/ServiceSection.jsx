import { Link } from "react-router";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import { useGetAllServices } from "@/hooks/api-hooks/service.hook";
import { Skeleton } from "../shadcn/ui/skeleton";
import { Button } from "../shadcn/ui/button";
import Container from "../Container";

const ServiceSection = () => {
  const { data, isLoading, isError } = useGetAllServices();

  return (
    <Container>
      <section className="my-[80px]">
        <SectionTitle tagName="h3" className="text-[24px] md:text-4xl">
          Get free cost estimates.
        </SectionTitle>
        <SectionText className="text-base md:text-lg">
          We analyzed millions of bids from Thumbtack professionals to see what
          things really cost, Find out what other people have paid for projects
          like yours.
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
          <div className="xxl:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] container my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((service, idx) => (
              <ServiceItem
                key={`service-${idx}`}
                path={`/service/${service.slug}`}
                title={service?.title}
                image={service?.thumbnail}
                details={service?.details}
                minPrice={service?.minPrice}
                maxPrice={service?.minPrice}
              />
            ))}
          </div>
        )}
        <div className="text-center">
          <Button asChild>
            <Link to="#">See All Cost guides</Link>
          </Button>
        </div>
      </section>
    </Container>
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

const ServiceItem = ({ path, image, title, details, minPrice, maxPrice }) => {
  return (
    <Link
      to={path}
      className="group translate-x-0 overflow-hidden rounded-md bg-secondary p-5 duration-300 hover:-translate-y-2"
    >
      <figure className="aspect-video w-full overflow-hidden rounded">
        <img
          src={image}
          className="h-full w-full object-cover object-center duration-300 group-hover:scale-110"
          alt={title}
        />
      </figure>
      <div className="mt-4 space-y-3">
        <h6 className="font-manrope text-xl font-medium md:leading-[130%]">
          {title}
        </h6>
        <p className="font-poppins text-base font-normal md:leading-[180%] text-[#494949] md:text-lg">
          {details}
        </p>
        <div className="font-manrope text-lg font-semibold leading-[150%]">
          Avg . Price ${minPrice}-${maxPrice}
        </div>
      </div>
    </Link>
  );
};

export default ServiceSection;
