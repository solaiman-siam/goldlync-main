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
      <section className="my-[80px]">
        <SectionTitle tagName="h3">Handyman</SectionTitle>
        <SectionText>
          Connect with trusted professionals, set your budget, and bring your
          vision to life—all in one place.
        </SectionText>
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
            <div className="container mt-12">
              <figure className="w-full h-[500px] rounded-xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/j9L2b4Gz/Rectangle-25153.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </figure>
            </div>
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
    <Link
      to={"/service-questionnaries"}
      className="relative group"
    >
      <figure className="w-full aspect-square rounded-xl overflow-hidden">
        <img src="https://i.ibb.co.com/SwwJshLC/service-1.png" className="w-full h-full object-cover object-center" alt="" />
      </figure>
      <img src="https://i.ibb.co.com/JjPYw8Zk/service-2.png" alt="" className="w-full h-full absolute top-0 left-0 group-hover:opacity-0 transition-all duration-500"/>
      <div className=" absolute left-3 right-3 bottom-3 bg-[#ff6b16e5] rounded-lg text-white text-center p-4 space-y-2.5">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="font-medium text-sm">{details} </p>
      </div>
    </Link>
  );
};

export default Categories;
