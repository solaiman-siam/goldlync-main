import ServiceSection from "@/components/home-sections/ServiceSection";
import FeatureSection from "@/components/home-sections/FeatureSection";
import HomeBanner from "@/components/home-sections/HomeBanner";
import PrimaryServiceSection from "@/components/home-sections/PrimaryServiceSection";
import ExploreMoreSection from "@/components/home-sections/ExploreMoreSection";
import RecentProjects from "@/components/home-sections/RecentProjects";
import VisitHomeResource from "@/components/home-sections/VisitHomeResource";
import WhatOurClientSays from "@/components/home-sections/WhatOurClientSays";
import GetInTouchBanner from "@/components/home-sections/GetInTouchBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <PrimaryServiceSection />
      <FeatureSection />
      <ServiceSection/>
      {/* <ExploreMoreSection/> */}
      <VisitHomeResource/>
      <RecentProjects/>
      <WhatOurClientSays/>
      <GetInTouchBanner/>
    </>
  );
};

export default Home;
