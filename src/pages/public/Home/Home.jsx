import ServiceSection from "@/components/sections/ServiceSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HomeBanner from "@/components/sections/HomeBanner";
import PrimaryServiceSection from "@/components/sections/PrimaryServiceSection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <PrimaryServiceSection />
      <FeatureSection />
      <ServiceSection />
    </>
  );
};

export default Home;
