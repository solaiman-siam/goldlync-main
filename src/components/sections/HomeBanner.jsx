import bannerImage from "@/assets/images/banner-image.png";

const HomeBanner = () => {
  return (
    <div
      className="flex h-[calc(100vh-92px)] items-center justify-center bg-cover bg-center bg-no-repeat p-4 md:gap-1 lg:gap-1"
      style={{ backgroundImage: `url('${bannerImage}')` }}
    >
      HomeBanner
    </div>
  );
};

export default HomeBanner;
