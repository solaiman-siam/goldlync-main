import { explorMoreData } from "@/utils/staticData";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";

function ExploreMoreSection() {
  return  (
    <div className="bg-[#FFF2EB] py-24">
      <div className="container ">
        <SectionTitle tagName={"h3"}>Explore More Projects</SectionTitle>
        <SectionText>
          Connect with trusted professionals, set your budget, and bring your
          vision to life—all in one place.
        </SectionText>

        <div className="grid grid-cols-3 gap-6 pt-8">
          {explorMoreData.map((item) => (
            <div
              className="group relative flex  items-end   overflow-hidden rounded-lg"
              key={item.id}
            >
              <h4 className="absolute z-20 pl-6 pb-6 text-2xl font-semibold text-white">
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
    </div>
  );
}

export default ExploreMoreSection;
