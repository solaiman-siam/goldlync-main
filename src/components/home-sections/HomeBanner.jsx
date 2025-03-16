import BannerImage from "../../assets/images/home-banner.png";
import BannerSearch from "../BannerSearch";

const HomeBanner = () => {
  return (
    <div
      className="flex !max-h-[850px] items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16 md:h-[calc(100vh-92px)] md:gap-1 lg:gap-1"
      style={{ backgroundImage: `url('${BannerImage}')` }}
    >
      <div className="flex w-full max-w-[1096px] shrink-0 flex-col gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.29)] bg-[rgba(255,255,255,0.06)] px-4 py-12 text-center font-manrope text-white backdrop-blur-[6px] md:px-[73px] md:py-[86px]">
        <h1 className="text-center text-[24px] font-bold lg:text-[42px] xl:text-[64px] xl:leading-[120%]">
          Transform Your Home, Effortlessly.
        </h1>
        <p className="text-wrap text-center font-normal lg:text-lg xl:leading-[200%]">
          Whether it’s a quick fix or a complete makeover, we’re here to make
          your home improvement journey seamless and stress-free. Connect with
          trusted professionals, set your budget, and bring your vision to
          life—all in one place.
        </p>
        <BannerSearch />
        <div className="w-full font-poppins text-base font-medium lg:text-lg lg:leading-[200%]">
          Try. My kitchen eink is leaking or want to repaint my living
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
