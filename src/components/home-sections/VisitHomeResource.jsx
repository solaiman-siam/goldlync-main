import { Link } from "react-router";

function VisitHomeResource({
  title = "Visit our Home Resource Center",
  description = "Sometimes getting started is the hardest part. Our resource center tas project guides. cost estimates and how-to guides to help you kick off your next home project.",
  btnName = "See More",
  link = "#",
}) {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 z-[8] flex flex-col items-center gap-4 text-white">
        <h3 className="w-5/12 text-center text-4xl font-semibold">{title}</h3>
        <h4 className="w-6/12 pt-2 text-center font-light">{description}</h4>

        <div className="pt-8">
          <Link
            className="rounded-full bg-primary px-20 py-4 text-lg font-medium text-white"
            onClick={() =>
              document
                .getElementById({link})
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {btnName}
          </Link>
        </div>
      </div>

      <img
        className="w-full h-full object-cover object-center"
        src="https://i.ibb.co.com/bjb5ZTwB/Rectangle-25146.png"
        alt=""
      />
    </div>
  );
}

export default VisitHomeResource;
