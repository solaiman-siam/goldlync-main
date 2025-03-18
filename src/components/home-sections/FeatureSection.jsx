import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "@/assets/icons";
import Container from "../Container";

const FeatureSection = ({ bg = "bg-card" }) => {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bg}`}>
      <Container>
        <div className="items-center justify-between gap-6 lg:gap-12 flex flex-col lg:flex-row xl:gap-24">
          <div className="flex-1">
            <img src="https://i.ibb.co.com/TDZns3Kj/service.png" alt="" className="h-full mx-auto lg:mx-0" />
          </div>
          <div className="flex-1">
            <h3 className="text-center font-manrope text-2xl font-bold md:text-left md:text-3xl lg:leading-[120%] xl:text-[40px]">
              Building Trust, One Project <br className="sm:hidden" /> at a
              Time.
            </h3>
            <div className="mt-4 flex flex-col gap-6 md:mt-8">
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
  <div className="flex flex-col md:flex-row gap-4 md:flex lg:gap-6 xl:gap-8">
    <div className="inline-flex size-[50px] flex-shrink-0 items-center justify-center rounded-full bg-accent lg:size-[70px] [&_svg]:w-[50%] [&_svg]:text-accent-foreground mx-auto">
      {icon}
    </div>
    <div>
      <h5 className="text-lg font-medium md:mb-2 md:text-xl text-center md:text-left">{title}</h5>
      <p className="text-sm font-normal text-[#52525B] md:text-base text-center md:text-left">
        {details}
      </p>
    </div>
  </div>
);

export default FeatureSection;
