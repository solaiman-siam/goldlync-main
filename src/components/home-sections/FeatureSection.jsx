import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "@/assets/icons";
import featureImg1 from "@/assets/images/feature-1.png";
import featureImg2 from "@/assets/images/feature-2.png";
import featureImg3 from "@/assets/images/feature-3.png";
import Container from "../Container";

const FeatureSection = ({ bg = "bg-card" }) => {
  return (
    <section className={`py-10 lg:py-20 ${bg}`}>
      <Container>
        <div className="container items-center justify-between gap-2 lg:flex">
          {/* images */}
          <div className="relative mb-6 ml-12 flex h-full items-center md:ml-8 lg:mb-0 lg:ml-0 lg:w-[40%]">
            <div className="relative z-[3] h-fit w-fit">
              <img
                className="h-[300px] object-contain md:h-auto"
                src={featureImg1}
                alt="Feature image"
              />
            </div>
            <div className="absolute left-[30%] top-1/2 z-[2] h-fit w-fit -translate-y-1/2">
              <img
                className="h-[200px] object-contain md:h-auto"
                src={featureImg2}
                alt="Feature image"
              />
            </div>
            <div className="absolute left-[60%] top-1/2 z-[1] h-fit w-fit -translate-y-1/2">
              <img
                className="h-[100px] object-contain md:h-auto"
                src={featureImg3}
                alt="Feature image"
              />
            </div>
          </div>
          {/* text */}
          <div className="lg:w-[45%]">
            <h3 className="font-manrope text-2xl font-bold md:text-3xl lg:text-[40px] lg:leading-[120%]">
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
      </Container>
    </section>
  );
};

const FeatureItem = ({ icon, title, details }) => (
  <div className="items-start gap-8 md:flex">
    <div className="inline-flex size-[50px] flex-shrink-0 items-center justify-center rounded-full bg-accent lg:size-[70px] [&_svg]:w-[50%] [&_svg]:text-accent-foreground">
      {icon}
    </div>
    <div>
      <h5 className="mb-2 text-xl font-medium">{title}</h5>
      <p className="text-justify text-sm font-normal text-[#52525B] md:text-base">
        {details}
      </p>
    </div>
  </div>
);

export default FeatureSection;
