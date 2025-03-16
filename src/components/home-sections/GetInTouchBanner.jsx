import { Link } from "react-router";

function GetInTouchBanner() {
  return (
    <div className="container lg:py-24">
      <div className="group relative flex h-[400px] w-full items-center overflow-hidden md:h-[500px] lg:rounded-lg">
        <div className="absolute z-[4] p-6 lg:p-12">
          <h1 className="pb-5 text-[24px] font-semibold text-white md:text-4xl">
            Open for business.
          </h1>
          <p className="md:4/12 text-sm font-light text-white md:text-base lg:w-5/12">
            We&apos;re here to help you take your business to the next level.
            Contact our team to discuss how our products and solutions can
            benefit your company.
          </p>
          <div className="pt-8">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-10 py-2 font-medium text-white md:px-14 md:py-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="w-full absolute z-[2] h-full bg-black/20 top-0 left-0 top-0 left-0"></div>
        <img
          className="absolute left-0 top-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          src="https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default GetInTouchBanner;
