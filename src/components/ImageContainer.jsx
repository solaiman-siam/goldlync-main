import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const webImg = [
  {
    id: 1,
    imgLink: "https://i.ibb.co/VvQxF8G/serch1.png",
  },
  {
    id: 2,
    imgLink: "https://i.ibb.co/jDQr6zx/Rectangle.png",
  },
  {
    id: 3,
    imgLink: "https://i.ibb.co/7YQxF5J/sample-image1.png",
  },
  {
    id: 4,
    imgLink: "https://i.ibb.co.com/WGgM4LK/girl-with-child.png",
  },
  {
    id: 5,
    imgLink: "https://i.ibb.co/yRtHVXN/sample-image3.png",
  },
  {
    id: 6,
    imgLink: "https://i.ibb.co/4ZGz3Xh/sample-image4.png",
  },
  {
    id: 7,
    imgLink: "https://i.ibb.co.com/y8HnL1K/paris1.png",
  },
  {
    id: 8,
    imgLink: "https://i.ibb.co.com/jDQr6zx/Rectangle.png",
  },
  {
    id: 9,
    imgLink: "https://i.ibb.co/6Fz0MYt/sample-image7.png",
  },
  {
    id: 10,
    imgLink: "https://i.ibb.co.com/sg35jVj/about-img.png",
  },
];

const ImageContainer = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [bigImgLink, setBigImgLink] = useState(webImg[0]);

  return (
    <>
      <div className="">
        {/* <div className="pt-1 pb-3 border-b border-b-white mb-6 space-x-6">
          <button
            type="button"
            className={`relative pb-2 text-white ${
              activeButton === 1
                ? "after:absolute after:inset-x-0 after:left-0 after:bottom-[-12px] after:h-[3px] after:bg-primary002"
                : ""
            }`}
            onClick={() => setActiveButton(1)}
          >
            Gallery
          </button>
          <button
            type="button"
            className={`relative pb-2 text-white ${
              activeButton === 2
                ? "after:absolute after:inset-x-0 after:left-0 after:bottom-[-12px] after:h-[3px] after:bg-primary002"
                : ""
            }`}
            onClick={() => setActiveButton(2)}
          >
            Guest Snapshots
          </button>
        </div> */}

        <div className="">
          <div className="grid lg:grid-cols-5 xl:grid-cols-3 gap-5 md:gap-10">
            <div className="relative left lg:col-span-4 xl:col-span-2">
              <figure className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative">
                <img
                  src={bigImgLink.imgLink}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
                <p className=" absolute top-4 right-4 text-white bg-black py-1 px-3 rounded-full">
                  {bigImgLink.id}/{webImg.length}
                </p>
              </figure>
              <button
                type="button"
                className={`absolute bg-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 p-1 md:p-2 rounded-full ${bigImgLink.id===1 && "hidden" }`}
                onClick={() => setBigImgLink(webImg[bigImgLink.id-2])}
              >
                <IoIosArrowBack className="md:size-6"/>
              </button>
              <button
                type="button"
                className={`absolute bg-white top-1/2 -translate-y-1/2 translate-x-1/2 right-0 p-1 md:p-2 rounded-full ${bigImgLink.id===webImg.length && "hidden" }`}
                onClick={() => setBigImgLink(webImg[bigImgLink.id])}
              >
                <IoIosArrowForward className="md:size-6"/>
              </button>
            </div>

            <div className="right h-[100px] lg:h-[500px] col-span-1 overflow-x-auto">
              <div className="lg:grid lg:grid-cols-1 xl:grid-cols-2 gap-5 flex mr-2">
                {webImg.map((card) => (
                  <figure
                    className={`border border-transparent ${
                      card.id === bigImgLink.id ? "bg-white" : ""
                    } h-[100px]  xl:h-[100px] min-w-[160px] lg:w-full rounded-2xl overflow-hidden`}
                    key={card.id}
                    onClick={() => setBigImgLink(card)}
                  >
                    <img
                      src={card.imgLink}
                      className="h-full w-full object-cover object-center"
                      alt=""
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
