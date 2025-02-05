import BannerImage from "../../assets/images/home-banner.png"
import BannerSearch from "../BannerSearch";

const HomeBanner = () => {
  return (
    <div
      className="flex min-h-[calc(100vh-92px)] relative  items-center justify-center bg-cover bg-center bg-no-repeat p-4 md:gap-1 lg:gap-1"
      // style={{ backgroundImage: `url('${}')` }}
    >
      <div className="flex w-full max-w-[1096px] shrink-0 flex-col items-start gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.29)] bg-[rgba(255,255,255,0.06)] px-[73px] py-[86px] text-center font-manrope text-white backdrop-blur-[6px]">
        <h1 className="text-center text-[64px] font-bold leading-[120%]">
          Transform Your Home, Effortlessly.
        </h1>
        <p className="text-center text-lg font-normal leading-[200%]">
          Whether it’s a quick fix or a complete makeover, we’re here to make
          your home improvement journey seamless and stress-free. Connect with
          trusted professionals, set your budget, and bring your vision to
          life—all in one place.
        </p>
        <BannerSearch />
        <div className="w-full font-poppins text-lg font-medium leading-[200%]">
          Try. My kitchen eink is leaking or want to repaint my living
        </div>
      </div>
      <img className='absolute top-0 z-[-2] left-0 w-full h-full object-cover' src={BannerImage} alt="" />
    </div>
  );
};

export default HomeBanner;
