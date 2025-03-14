import { explorMoreData } from "@/utils/staticData";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import Container from "../Container";

function ExploreMoreSection() {
  return (
    <div className="bg-[#FFF2EB] py-10 lg:py-24">
      <Container>
        <div className="container">
          <SectionTitle className="text-[28px] md:text-4xl" tagName={"h3"}>
            Explore More Projects
          </SectionTitle>
          <SectionText className="text-sm md:text-lg">
            Connect with trusted professionals, set your budget, and bring your
            vision to life—all in one place.
          </SectionText>

          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {explorMoreData.map((item) => (
              <div
                className="group relative flex items-end overflow-hidden rounded-lg"
                key={item.id}
              >
                <h4 className="absolute z-20 pb-6 pl-6 text-xl font-semibold text-white md:text-2xl">
                  {item?.title}
                </h4>
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  src={item?.image}
                  alt="services image"
                />

                <div className="absolute left-0 top-0 z-[4] h-full w-full bg-black/40"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExploreMoreSection;
