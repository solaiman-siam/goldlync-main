import { Link } from "react-router";
import Container from "../Container";

function GetInTouchBanner() {
  return (
    <Container className="my-12 md:my-16 lg:my-20">
      <div className="group relative flex w-full items-center overflow-hidden rounded-lg">
        <div className="z-[4] px-4 md:px-6 lg:px-12  py-6 md:py-10 lg:py-20 xl:py-28">
          <h1 className="mb-3 text-[24px] font-semibold text-white md:mb-5 md:text-4xl">
            Open for business.
          </h1>
          <p className="md:4/12 text-sm font-light text-white sm:w-8/12 md:text-base lg:w-5/12">
            We&apos;re here to help you take your business to the next level.
            Contact our team to discuss how our products and solutions can
            benefit your company.
          </p>
          <Link
            to="/contact"
            className="mt-4 block w-fit rounded-md bg-primary px-10 py-2 font-medium text-white md:mt-8 md:px-14 md:py-4"
          >
            Get in Touch
          </Link>
        </div>
        <div className="absolute left-0 top-0 z-[2] h-full w-full bg-black/20"></div>
        <img
          className="absolute left-0 top-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          src="https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </Container>
  );
}

export default GetInTouchBanner;
