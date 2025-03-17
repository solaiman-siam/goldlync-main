import { Link } from "react-router";

function VisitHomeResource({
  title = "Visit our Home Resource Center",
  description = "Sometimes getting started is the hardest part. Our resource center tas project guides. cost estimates and how-to guides to help you kick off your next home project.",
  btnName = "See More",
  link = "#",
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 flex w-full flex-col items-center gap-4 px-4 py-16 text-white lg:py-20 xl:py-28">
        <h3 className="text-center text-[24px] font-semibold md:text-4xl xl:w-5/12">
          {title}
        </h3>
        <h4 className="w-full pt-2 text-center font-light lg:w-6/12">
          {description}
        </h4>

        <div className="">
          <Link
            className="text-md hover:bg-primary/90 inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:h-14 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            onClick={() =>
              document
                .getElementById({ link })
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {btnName}
          </Link>
        </div>
      </div>

      <img
        className="absolute left-0 top-0 h-full w-full object-cover object-center"
        src="https://i.ibb.co.com/bjb5ZTwB/Rectangle-25146.png"
        alt=""
      />
    </div>
  );
}

export default VisitHomeResource;
