import SectionText from "@/components/SectionText";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { useGetSubCategoryServices } from "@/hooks/api-hooks/service.hook";
import Container from "../Container";

function Categories({ slug }) {
  // console.log("slug", slug);
  const { data, isLoading, isError } = useGetSubCategoryServices(
    `/service/category/${slug}`
  );
  // if (!isLoading) console.log(data);

  return (
    <div>
      <section className="">
        <div className="relative mb-10 md:mb-16 lg:mb-20">
          <figure className="absolute top-0 h-full w-full overflow-hidden">
            <img
              src={`https://goldlync.softvencefsd.xyz/${data?.thumbnail}`}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="overlay absolute bottom-0 left-0 right-0 top-0 bg-black/50"></div>
          </figure>

          <div className="w-full py-20 md:py-32 lg:py-40 text-white relative z-10">
            <Container className="w-full">
              <SectionTitle tagName="h3">{data?.title}</SectionTitle>
              <SectionText className="leading-[150%] text-white">
                {data?.description}
              </SectionText>
            </Container>
          </div>
        </div>

        <Container>
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              <PrimaryServiceSkeletons />
            </div>
          ) : isError ? (
            <div className="my-12 text-center text-destructive">
              Something went wrong!
            </div>
          ) : data?.sub_categories?.length === 0 ? (
            <div className="my-12 text-center">No Data Found!</div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                {data?.sub_categories?.map((service, idx) => (
                  <PrimaryServiceItem
                    key={`primary-service-${idx}`}
                    path={`/service/${service.slug}`}
                    title={service?.title}
                    details={service?.description}
                    img1={`https://goldlync.softvencefsd.xyz/${service?.photo_1}`}
                    img2={`https://goldlync.softvencefsd.xyz/${service?.photo_2}`}
                    slug={service.slug}
                  />
                ))}
              </div>
            </>
          )}
        </Container>
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

const PrimaryServiceItem = ({ title, details, img1, img2, slug }) => {
  return (
    <Link
      to={`/service-questionnaries/${slug}`}
      className="group relative overflow-hidden rounded-xl"
    >
      <figure className="aspect-square w-full overflow-hidden">
        <img
          src={img2}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </figure>
      <figure className="absolute left-0 top-0 h-full w-full transition-all duration-1000 group-hover:opacity-0">
        <img
          src={img1}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </figure>
      <div className="absolute bottom-2 left-2 right-2 space-y-2.5 rounded-lg bg-[#FFF2EB] p-4 text-center">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="line-clamp-3 text-sm font-medium text-[#494949]">
          {details}{" "}
        </p>
      </div>
    </Link>
  );
};

export default Categories;
