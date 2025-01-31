import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "@/assets/icons";
import featureImg1 from "@/assets/images/feature-1.png";
import featureImg2 from "@/assets/images/feature-2.png";
import featureImg3 from "@/assets/images/feature-3.png";

const FeatureSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container flex items-center justify-between gap-2">
        <div className="relative flex h-full w-[40%] items-center">
          <div className="relative z-[3] h-fit w-fit">
            <img
              className="object-contain"
              src={featureImg1}
              alt="Feature image"
            />
          </div>
          <div className="absolute left-[30%] top-1/2 z-[2] h-fit w-fit -translate-y-1/2">
            <img
              className="object-contain"
              src={featureImg2}
              alt="Feature image"
            />
          </div>
          <div className="absolute left-[60%] top-1/2 z-[1] h-fit w-fit -translate-y-1/2">
            <img
              className="object-contain"
              src={featureImg3}
              alt="Feature image"
            />
          </div>
        </div>
        <div className="w-[45%]">
          <h3 className="font-manrope text-[40px] font-bold leading-[120%]">
            Building Trust, One Project at a Time.
          </h3>
          <div className="my-8 flex flex-col gap-6">
            <FeatureItem
              icon={<FeatureIcon1 />}
              title={"The professionals you need"}
              details={
                "Post your job for free and find professionals with the skills you need. Receive responses from interested professionals and then select who you want to get in touch with."
              }
            />
            <FeatureItem
              icon={<FeatureIcon2 />}
              title={"Reviews from real customers"}
              details={
                "Reviews allow you to read real opinions from previous customers, so you can make an informed choice about who to hire."
              }
            />
            <FeatureItem
              icon={<FeatureIcon3 />}
              title={"You are in control"}
              details={
                "Check profiles, previous jobs and reviews before deciding who to contact. Only professionals you have selected can contact you."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, details }) => (
  <div className="flex items-start gap-8">
    <div className="inline-flex size-[70px] flex-shrink-0 items-center justify-center rounded-full bg-accent [&_svg]:w-[50%] [&_svg]:text-accent-foreground">
      {icon}
    </div>
    <div>
      <h5 className="mb-2 text-xl font-medium">{title}</h5>
      <p className="font-normal text-[#52525B]">{details}</p>
    </div>
  </div>
);

export default FeatureSection;
