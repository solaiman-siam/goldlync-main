import BannerImage from "../../assets/images/home-banner.png";
import BannerSearch from "../BannerSearch";
import Container from "../Container";

const HomeBanner = () => {
  return (
    <div
      className="flex !max-h-[1000px] items-center justify-center bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20 lg:h-[calc(100vh-100px)] md:gap-1 lg:gap-1"
      style={{ backgroundImage: `url('${BannerImage}')` }}
    >
      <Container>
      <div className="flex w-full max-w-[1096px] shrink-0 flex-col gap-3 md:gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.29)] bg-[rgba(255,255,255,0.06)] px-3 sm:px-6 md:px-12 lg:px-[55px] xl:px-[72px] py-5 sm:py-10 md:py-14 lg:py-[70px] xl:py-[86px]  text-center font-manrope text-white backdrop-blur-[6px] mx-auto">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[40px] font-bold lg:text-[46px] xl:text-[64px] xl:leading-[120%]">
          Transform Your Home, Effortlessly.
        </h1>
        <p className="text-wrap text-center font-normal xl:text-lg xl:leading-[200%] w-[90%] mx-auto">
          Whether it’s a quick fix or a complete makeover, we’re here to make
          your home improvement journey seamless and stress-free. Connect with
          trusted professionals, set your budget, and bring your vision to
          life—all in one place.
        </p>
        <BannerSearch />
        <div className="font-poppins font-medium text-sm md:text-base xl:text-lg lg:leading-[200%] w-[90%] mx-auto">
          Try. My kitchen eink is leaking or want to repaint my living
        </div>
      </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
