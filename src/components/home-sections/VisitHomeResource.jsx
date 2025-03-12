import { Link } from "react-router";

function VisitHomeResource({
  title = "Visit our Home Resource Center",
  description = "Sometimes getting started is the hardest part. Our resource center tas project guides. cost estimates and how-to guides to help you kick off your next home project.",
  btnName = "See More",
  link = "#",
}) {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 z-[8] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-4 text-white">
        <h3 className="text-center text-4xl font-semibold xl:w-5/12">
          {title}
        </h3>
        <h4 className="w-full pt-2 text-center font-light lg:w-6/12">
          {description}
        </h4>

        <div className="pt-8">
          <Link
            className="rounded-full bg-primary px-20 py-4 text-lg font-medium text-white"
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
        className="h-full w-full object-cover object-center"
        src="https://i.ibb.co.com/bjb5ZTwB/Rectangle-25146.png"
        alt=""
      />
    </div>
  );
}

export default VisitHomeResource;
