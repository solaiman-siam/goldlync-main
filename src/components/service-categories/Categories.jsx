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
import { useGetSubCategoryServices } from "@/hooks/api-hooks/service.hook";

function Categories() {
  const { data, isLoading, isError } = useGetSubCategoryServices();

  return (
    <div>
      <section className="mb-[80px]">
        <figure className="relative h-[600px] w-full overflow-hidden mb-20">
          <img
            src="https://i.ibb.co.com/j9L2b4Gz/Rectangle-25153.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="overlay absolute bottom-0 left-0 right-0 top-0 bg-black/50"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <SectionTitle tagName="h3">Handyman</SectionTitle>
            <SectionText className="leading-[150%] text-white">
              Connect with trusted professionals, set your budget, and bring
              your vision to life—all in one place.
            </SectionText>
          </div>
        </figure>
        {isLoading ? (
          <div className="container my-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            <PrimaryServiceSkeletons />
          </div>
        ) : isError ? (
          <div className="my-8 text-center text-destructive">
            Something went wrong!
          </div>
        ) : data?.length === 0 ? (
          <div className="my-8 text-center">No Data Found!</div>
        ) : (
          <>
            <div className="container my-12 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-8 gap-y-10">
              {data?.map((service, idx) => (
                <PrimaryServiceItem
                  key={`primary-service-${idx}`}
                  path={`/service/${service.slug}`}
                  title={service?.title}
                  details={service?.description}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
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

const PrimaryServiceItem = ({ path, icon, title, details }) => {
  return (
    <Link to={"/service-questionnaries"} className="group relative">
      <figure className="aspect-square w-full overflow-hidden rounded-xl">
        <img
          src="https://i.ibb.co.com/SwwJshLC/service-1.png"
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </figure>
      <img
        src="https://i.ibb.co.com/JjPYw8Zk/service-2.png"
        alt=""
        className="absolute left-0 top-0 h-full w-full transition-all duration-500 group-hover:opacity-0"
      />
      <div className="absolute bottom-2 left-2 right-2 space-y-2.5 rounded-lg bg-[#FFF2EB] p-4 text-center">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm font-medium text-[#494949]">{details} </p>
      </div>
    </Link>
  );
};

export default Categories;
