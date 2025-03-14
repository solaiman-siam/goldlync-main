import { reviewsData } from "@/utils/staticData";
import SectionTitle from "../SectionTitle";
import Twitter from "../../assets/images/Twitter.png";
import Container from "../Container";
function WhatOurClientSays() {
  return (
    <div className="bg-[#FFF2EB] py-10 lg:py-24" id="client-review">
      <Container>
        <div className="container">
          <div className=" ">
            <SectionTitle className="text-[24px] md:text-4xl">
              What our clients are saying?
            </SectionTitle>
          </div>

          <div className="grid gap-8 pt-6 md:grid-cols-2 md:pt-10 lg:grid-cols-3">
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
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold">{item?.name}</h3>
                      <h4 className="text-sm font-light">{item?.position}</h4>
                    </div>
                  </div>
                  <div>
                    <img src={Twitter} alt="" />
                  </div>
                </div>
                <div className="w-full pt-4 font-light">
                  <p>{item?.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhatOurClientSays;
