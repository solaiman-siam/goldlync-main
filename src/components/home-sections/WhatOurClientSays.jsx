import { reviewsData } from "@/utils/staticData";
import SectionTitle from "../SectionTitle";
import Twitter from "../../assets/images/Twitter.png";
import Container from "../Container";
import siteLogo from "@/assets/images/site-logo.png";
function WhatOurClientSays() {
  return (
    <div className="bg-[#FFF2EB] py-12 md:py-16 lg:py-20" id="client-review">
      <Container>
        <div className=" ">
          <SectionTitle className="text-[24px] md:text-4xl">
            What our clients are saying?
          </SectionTitle>
        </div>

        <div className="grid gap-4 pt-6 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:gap-6">
          {reviewsData?.testimonials?.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      className="h-full w-full object-cover"
                      src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col xl:gap-2">
                    <h3 className="text-lg font-semibold">{item?.name}</h3>
                    <h4 className="text-sm font-light">{item?.position}</h4>
                  </div>
                </div>
                <div>
                  {item.platform === "Twitter" ? (
                    <img src={Twitter} alt="" />
                  ) : (
                    <img
                      className="w-[26px]"
                      src={siteLogo}
                      alt="Gold Lync site logo"
                    />
                  )}
                </div>
              </div>
              <div className="w-full pt-4 font-light text-sm md:text-base">
                <p>{item?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default WhatOurClientSays;
