import BannerImage from "../../assets/images/home-banner.png";
import BannerSearch from "../BannerSearch";
import Container from "../Container";

const HomeBanner = () => {
  return (
    <div
      className="flex !max-h-[1000px] items-center justify-center bg-cover bg-center bg-no-repeat py-12 md:gap-1 md:py-16 lg:h-[calc(100vh-100px)] lg:gap-1 lg:py-20"
      style={{ backgroundImage: `url('${BannerImage}')` }}
    >
      <Container>
        <div className="mx-auto flex w-full max-w-[1096px] shrink-0 flex-col gap-3 rounded-2xl border border-solid border-[rgba(255,255,255,0.29)] bg-[rgba(255,255,255,0.06)] px-3 py-8 text-center font-manrope text-white backdrop-blur-[6px] sm:px-6 sm:py-12 md:gap-5 md:px-12 md:py-16 lg:px-[55px] lg:py-[70px] xl:px-[72px] xl:py-[86px]">
          <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-[40px] lg:text-[46px] xl:text-[64px] xl:leading-[120%]">
            Transform Your Home, Effortlessly.
          </h1>
          <p className="mx-auto w-[90%] text-wrap text-center font-normal xl:text-lg xl:leading-[200%]">
            Whether it’s a quick fix or a complete makeover, we’re here to make
            your home improvement journey seamless and stress-free. Connect with
            trusted professionals, set your budget, and bring your vision to
            life—all in one place.
          </p>
          <div id="searchScrollElement">
            <BannerSearch />
          </div>
          <div className="mx-auto w-[90%] font-poppins text-sm font-medium md:text-base lg:leading-[200%] xl:text-lg">
            Try. My kitchen eink is leaking or want to repaint my living
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
