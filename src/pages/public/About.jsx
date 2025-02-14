import bannerImage from "../../assets/images/home-banner.png";
import aboutImage from "../../assets/images/aboutImg.png"
import bond from "@/assets/images/bond.jpg";
import SlotCounter from "react-slot-counter";
import { useState, useEffect, useRef } from "react";
import RecentProjects from "@/components/home-sections/RecentProjects";
import GetInTouchBanner from "@/components/home-sections/GetInTouchBanner";
import ExploreBlog from "@/components/home-sections/ExploreBlog";

const About = () => {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Component is visible!"); // Debugging log
            setStartCounting(true);
            observer.disconnect(); // Stop observing after triggering
          }
        });
      },
      {
        root: null, // Observe within the viewport
        rootMargin: "0px", // No margin, triggers exactly when visible
        threshold: 0.3, // Adjust: 0.3 means 30% of the element must be visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        className="flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat p-4 md:gap-1 lg:gap-1"
        style={{ backgroundImage: `url('${bannerImage}')` }}
      >
        <div className="flex w-[45%] max-w-[1096px] shrink-0 flex-col items-start gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.29)] bg-[rgba(255,255,255,0.06)] px-[73px] py-[86px] text-center font-manrope text-white backdrop-blur-[6px]">
          <h1 className="mx-auto text-center text-[64px] font-bold leading-[120%]">
            About Us
          </h1>
          <p className="text-center text-lg font-normal leading-[200%]">
            Whether it’s a quick fix or a complete makeover, we’re here to make
            your home improvement journey seamless and stress-free. Connect with
            trusted professionals, set your budget, and bring
          </p>
        </div>
      </section>
      <section className="container py-24">
        <div className="grid grid-cols-2 gap-8">
          <figure className="h-[686px] w-full overflow-hidden rounded-2xl">
            <img
              src={aboutImage}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <div className="text-[#242424]">
            <h3 className="mb-5 text-4xl font-bold">
              Dominant Industrial Firm
            </h3>
            <p className="mb-10 max-w-[640px] text-lg">
              The profound impact and leadership that the company holds within
              the industrial sphere, standing as a testament to its authority
              and influence within the market.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 5C20 13.2843 26.7157 20 35 20C26.7157 20 20 26.7157 20 35C20 26.7157 13.2843 20 5 20C13.2843 20 20 13.2843 20 5Z"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-2xl font-semibold">
                  Rigorous Quality Assurance
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 5C20 13.2843 26.7157 20 35 20C26.7157 20 20 26.7157 20 35C20 26.7157 13.2843 20 5 20C13.2843 20 20 13.2843 20 5Z"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-2xl font-semibold">
                  Guaranteed Full Satisfaction
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 5C20 13.2843 26.7157 20 35 20C26.7157 20 20 26.7157 20 35C20 26.7157 13.2843 20 5 20C13.2843 20 20 13.2843 20 5Z"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-2xl font-semibold">
                  Qualified Electrical Craftsman
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 5C20 13.2843 26.7157 20 35 20C26.7157 20 20 26.7157 20 35C20 26.7157 13.2843 20 5 20C13.2843 20 20 13.2843 20 5Z"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-2xl font-semibold">Customer-Centric Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container border-t py-[70px]">
        <div className="flex justify-between gap-8">
          <div className="card flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M20 30.9999L13 19.3333L17.6667 14.6666L29.3333 21.6666V26.3333L41.3333 38.3333C41.3333 38.6666 41.3333 38.9999 41.3333 39.3333L37 43.3333L24.6667 30.9999H20ZM70 59.3333C69 59.3333 68.3333 59.3333 67.3333 59.3333C65 59.3333 63 58.9999 61 58.6666L54 66.6666L69.6667 84.3333C73.3333 88.3333 79.6667 88.6666 83.3333 84.6666C87.3333 80.6666 87 74.6666 83 70.9999L70 59.3333ZM81.3333 46.6666C86.6667 41.3333 88.3333 33.3333 86.3333 26.3333C86 24.9999 84.3333 24.6666 83.6667 25.6666L72 37.3333L62.6667 27.9999L74.3333 16.3333C75.3333 15.3333 75 13.9999 73.6667 13.6666C66.6667 11.3333 58.6667 12.9999 53.3333 18.6666C47.3333 24.6666 46 33.9999 49.3333 41.3333L16 70.9999C12 74.6666 11.6667 80.9999 15.6667 84.6666C19.6667 88.6666 25.6667 88.3333 29.3333 84.3333L59 50.9999C66.3333 54.3333 75.3333 52.9999 81.3333 46.6666Z"
                fill="#FF6A16"
              />
            </svg>
            <div ref={counterRef}>
              <p className="text-6xl font-bold text-[#AAAAAA]">
                {startCounting ? <SlotCounter value={30} duration={2} /> : 30}+
              </p>
              <p className="text-2xl font-medium">Services</p>
            </div>
          </div>
          <div className="card flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M20 30.9999L13 19.3333L17.6667 14.6666L29.3333 21.6666V26.3333L41.3333 38.3333C41.3333 38.6666 41.3333 38.9999 41.3333 39.3333L37 43.3333L24.6667 30.9999H20ZM70 59.3333C69 59.3333 68.3333 59.3333 67.3333 59.3333C65 59.3333 63 58.9999 61 58.6666L54 66.6666L69.6667 84.3333C73.3333 88.3333 79.6667 88.6666 83.3333 84.6666C87.3333 80.6666 87 74.6666 83 70.9999L70 59.3333ZM81.3333 46.6666C86.6667 41.3333 88.3333 33.3333 86.3333 26.3333C86 24.9999 84.3333 24.6666 83.6667 25.6666L72 37.3333L62.6667 27.9999L74.3333 16.3333C75.3333 15.3333 75 13.9999 73.6667 13.6666C66.6667 11.3333 58.6667 12.9999 53.3333 18.6666C47.3333 24.6666 46 33.9999 49.3333 41.3333L16 70.9999C12 74.6666 11.6667 80.9999 15.6667 84.6666C19.6667 88.6666 25.6667 88.3333 29.3333 84.3333L59 50.9999C66.3333 54.3333 75.3333 52.9999 81.3333 46.6666Z"
                fill="#FF6A16"
              />
            </svg>
            <div ref={counterRef}>
              <p className="text-6xl font-bold text-[#AAAAAA]">
                {startCounting ? <SlotCounter value={550} duration={2} /> : 550}
                +
              </p>
              <p className="text-2xl font-medium">Work Done</p>
            </div>
          </div>
          <div className="card flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M76.0417 24.1666C80.0687 24.1666 83.3333 20.902 83.3333 16.8749C83.3333 12.8478 80.0687 9.58325 76.0417 9.58325C72.0146 9.58325 68.75 12.8478 68.75 16.8749C68.75 20.902 72.0146 24.1666 76.0417 24.1666Z"
                fill="#FF6A16"
              />
              <path
                d="M23.9577 24.1666C27.9848 24.1666 31.2493 20.902 31.2493 16.8749C31.2493 12.8478 27.9848 9.58325 23.9577 9.58325C19.9306 9.58325 16.666 12.8478 16.666 16.8749C16.666 20.902 19.9306 24.1666 23.9577 24.1666Z"
                fill="#FF6A16"
              />
              <path
                d="M49.9997 24.1666C54.0268 24.1666 57.2913 20.902 57.2913 16.8749C57.2913 12.8478 54.0268 9.58325 49.9997 9.58325C45.9726 9.58325 42.708 12.8478 42.708 16.8749C42.708 20.902 45.9726 24.1666 49.9997 24.1666Z"
                fill="#FF6A16"
              />
              <path
                d="M68.5412 50.8332L63.8537 33.5415C63.6454 32.9165 63.3329 32.2915 62.9162 31.8748C60.937 29.7915 58.437 28.229 55.7287 27.2915C53.9579 26.6665 52.0829 26.354 50.1037 26.354C48.1245 26.354 46.2495 26.6665 44.4787 27.2915C41.6662 28.229 39.2704 29.7915 37.2912 31.8748C36.8745 32.3957 36.562 32.9165 36.3537 33.5415L31.6662 50.8332C31.2495 52.4998 32.0829 54.3748 33.8537 54.7915C34.1662 54.8957 34.3745 54.8957 34.687 54.8957C36.0412 54.8957 37.2912 53.9582 37.7079 52.604L41.8745 37.3957V90.4165H48.1245V60.6248H52.2912V90.3123H58.5412V37.3957L62.7079 52.604C63.1245 53.9582 64.3745 54.8957 65.7287 54.8957C66.0412 54.8957 66.2495 54.8957 66.562 54.7915C68.0204 54.3748 68.9579 52.4998 68.5412 50.8332Z"
                fill="#FF6A16"
              />
              <path
                d="M29.4787 50.3125L34.1662 33.0208C34.3745 32.0833 34.8954 31.25 35.4162 30.5208C33.7495 29.0625 31.6662 27.9167 29.4787 27.1875C27.7079 26.5625 25.8329 26.25 23.8537 26.25C21.8745 26.25 19.9995 26.5625 18.2287 27.1875C15.4162 28.125 13.0204 29.6875 11.0412 31.7708C10.6245 32.2917 10.312 32.8125 10.1037 33.4375L5.41621 50.8333C4.99954 52.5 5.83287 54.375 7.60371 54.7917C7.91621 54.8958 8.12454 54.8958 8.43704 54.8958C9.79121 54.8958 11.0412 53.9583 11.4579 52.6042L15.6245 37.3958V90.4167H21.8745V60.625H26.0412V90.3125H32.2912V56.5625C30.1037 55.5208 28.8537 52.9167 29.4787 50.3125Z"
                fill="#FF6A16"
              />
              <path
                d="M94.5827 50.8332L89.791 33.5415C89.5827 32.9165 89.2702 32.2915 88.8535 31.8748C86.8743 29.7915 84.3743 28.229 81.666 27.2915C79.8952 26.6665 78.0202 26.354 76.041 26.354C74.0618 26.354 72.1868 26.6665 70.416 27.2915C68.2285 28.0207 66.2493 29.1665 64.4785 30.6248C65.1035 31.354 65.5202 32.1873 65.7285 33.0207L70.416 50.3123C71.1452 52.9165 69.791 55.5207 67.6035 56.5623V90.4165H73.8535V60.6248H78.0202V90.3123H84.2702V37.3957L88.4368 52.604C88.8535 53.9582 90.1035 54.8957 91.4577 54.8957C91.7702 54.8957 91.9785 54.8957 92.291 54.7915C94.0618 54.3748 94.9993 52.4998 94.5827 50.8332Z"
                fill="#FF6A16"
              />
            </svg>

            <div ref={counterRef}>
              <p className="text-6xl font-bold text-[#AAAAAA]">
                {startCounting ? <SlotCounter value={120} duration={2} /> : 120}
                +
              </p>
              <p className="text-2xl font-medium">Good Worker</p>
            </div>
          </div>
          <div className="card flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M20 30.9999L13 19.3333L17.6667 14.6666L29.3333 21.6666V26.3333L41.3333 38.3333C41.3333 38.6666 41.3333 38.9999 41.3333 39.3333L37 43.3333L24.6667 30.9999H20ZM70 59.3333C69 59.3333 68.3333 59.3333 67.3333 59.3333C65 59.3333 63 58.9999 61 58.6666L54 66.6666L69.6667 84.3333C73.3333 88.3333 79.6667 88.6666 83.3333 84.6666C87.3333 80.6666 87 74.6666 83 70.9999L70 59.3333ZM81.3333 46.6666C86.6667 41.3333 88.3333 33.3333 86.3333 26.3333C86 24.9999 84.3333 24.6666 83.6667 25.6666L72 37.3333L62.6667 27.9999L74.3333 16.3333C75.3333 15.3333 75 13.9999 73.6667 13.6666C66.6667 11.3333 58.6667 12.9999 53.3333 18.6666C47.3333 24.6666 46 33.9999 49.3333 41.3333L16 70.9999C12 74.6666 11.6667 80.9999 15.6667 84.6666C19.6667 88.6666 25.6667 88.3333 29.3333 84.3333L59 50.9999C66.3333 54.3333 75.3333 52.9999 81.3333 46.6666Z"
                fill="#FF6A16"
              />
            </svg>
            <div ref={counterRef}>
              <p className="text-6xl font-bold text-[#AAAAAA]">
                {startCounting ? <SlotCounter value={700} duration={2} /> : 700}
                +
              </p>
              <p className="text-2xl font-medium">Happy clients</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex justify-between gap-8">
          <div className="left flex-1 flex flex-col gap-7">
            <div className="up rounded-xl bg-[#FFF2EB] p-12">
              <div className="mb-6 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M23.6458 2.09623C18.3446 2.46652 13.892 5.88907 11.8386 10.6215C11.6644 10.613 11.5077 10.6065 11.3341 10.608C8.22718 10.6295 5.27386 12.1764 3.42429 14.821C1.28035 17.8865 0.952534 21.9972 2.6263 25.4002C2.6889 25.5275 2.75239 25.6475 2.82 25.771C2.0659 26.162 1.56429 26.9414 1.56429 27.8417C1.56429 31.3445 1.56163 34.8461 1.56429 38.3507C1.56429 39.7844 2.05881 41.4821 2.97718 42.8796C2.14887 43.2359 1.56895 44.0542 1.56733 45.0281L1.5625 48.9376H18.75L18.7508 45.0281C18.7492 44.0856 18.2094 43.2912 17.4234 42.9177C18.2053 42.0252 18.9396 41.0004 19.5564 39.9529C20.4417 38.4496 21.0944 36.8674 21.0944 35.6452C21.0944 35.3801 21.0064 35.0708 20.9007 34.7861C20.795 34.5014 20.6541 34.1904 20.4902 33.8568C20.1626 33.1895 19.7427 32.4334 19.3199 31.7113C19.1546 31.4289 19.0253 31.2259 18.8668 30.9636H22.6111C23.1924 31.6297 23.7743 32.297 24.3535 32.964C24.5023 33.1804 24.7464 33.2986 25.0005 33.2982C25.2545 33.2986 25.4987 33.1804 25.6474 32.964C26.2267 32.297 26.8086 31.6297 27.3899 30.9636H36.8545L34.5673 33.579C34.1208 34.0846 34.4817 34.8804 35.1562 34.8775H37.4968V38.7824L43.75 38.7813L43.7481 34.8775H46.0963C46.7672 34.874 47.1217 34.0819 46.6776 33.579L43.6977 30.1716C45.8524 29.1346 47.5197 27.1546 48.1592 24.6798C49.1125 20.9905 47.5608 17.0884 44.3492 15.1657C42.7434 14.2044 40.913 13.8603 39.163 14.0991C38.8933 14.1359 38.6453 14.1814 38.3803 14.2456C37.3279 7.36774 31.6709 2.27291 25.0113 2.06877C24.5603 2.05489 24.1049 2.06405 23.6458 2.09623ZM36.8745 14.7736C35.984 15.1872 35.1538 15.7721 34.4363 16.5162C33.6987 17.2661 34.8378 18.3651 35.5608 17.6011C37.691 15.3922 40.9678 14.963 43.5468 16.507C46.1475 18.064 47.4295 21.2563 46.6458 24.2892C46.08 26.4784 44.5512 28.1684 42.6222 28.9402L41.2124 27.3273C41.0553 27.149 40.8256 27.0518 40.5883 27.0633C40.3754 27.0722 40.1753 27.1675 40.0344 27.3273L38.2203 29.401H28.7526C30.8002 27.0542 32.845 24.7009 34.8452 22.2994C35.2256 21.8431 35.2598 21.1868 34.9261 20.6957C33.7855 19.1361 32.6448 17.5693 31.5052 16.0065C31.2129 15.6043 30.7469 15.3427 30.2266 15.3427H19.7748C19.2545 15.3427 18.7885 15.6043 18.4962 16.0065C17.3555 17.5683 16.2168 19.137 15.0753 20.6957C14.7416 21.1868 14.7758 21.8431 15.1562 22.2994C17.1564 24.7009 19.2012 27.0542 21.2487 29.401H17.9072C17.8098 29.2482 17.6375 28.9739 17.6372 28.9722C17.188 28.2618 16.4179 27.8464 15.6246 27.8354C15.6246 26.5498 14.6027 25.4977 13.284 25.4977C12.6737 25.4977 12.1314 25.7216 11.7186 26.0928C11.3076 25.7235 10.7681 25.5008 10.1577 25.5008C9.54724 25.5008 9.00769 25.7235 8.59678 26.0928C8.18576 25.7231 7.66962 25.5008 7.03436 25.5008C6.4235 25.5008 5.88296 25.7231 5.47194 26.0928C5.20796 25.8552 4.87362 25.6715 4.51829 25.5755C4.33551 25.2945 4.17816 25.0177 4.02698 24.7103C2.60552 21.8203 2.86985 18.3393 4.70446 15.7166C6.25734 13.4966 8.69836 12.21 11.2702 12.1699C10.8529 13.5405 10.6246 15.0094 10.6246 16.5146C10.6246 17.5566 12.187 17.5566 12.187 16.5146C12.187 9.71201 17.2709 4.11174 23.7556 3.65878C24.1611 3.63043 24.5639 3.62225 24.9625 3.63433C30.9428 3.81615 36.0491 8.45514 36.8745 14.7736ZM25.0007 9.0941C24.5455 9.10266 24.2195 9.43939 24.2195 9.87232V11.4349C24.2195 11.9555 24.6102 12.217 25.0007 12.2177C25.3912 12.217 25.7819 11.9555 25.7819 11.4349V9.87232C25.7819 9.43939 25.4559 9.10257 25.0007 9.0941ZM20.7757 10.3316C20.0695 10.3263 19.7282 11.1832 20.2158 11.6668L21.3235 12.7685C22.0943 13.4854 23.144 12.4053 22.4312 11.6668L21.3235 10.559C21.1764 10.4078 20.9867 10.3316 20.7757 10.3316ZM29.2256 10.3316C29.0147 10.3316 28.8249 10.4078 28.6779 10.559L27.5701 11.6668C26.8574 12.4053 27.9071 13.4854 28.6779 12.7685L29.7856 11.6668C30.2731 11.1832 29.9319 10.3262 29.2256 10.3316ZM23.7648 16.9068H26.2366L27.7944 20.8101H22.2069L23.7648 16.9068ZM17.2572 22.3742H20.5881L22.8981 28.9173C21.005 26.7468 19.1082 24.5711 17.2572 22.3742ZM29.4133 22.3742H32.7441C30.8932 24.5711 28.9964 26.7468 27.1032 28.9173L29.4133 22.3742ZM3.90797 27.0572C4.21984 27.0572 4.68611 27.2914 4.68611 27.8415V31.7525C4.68611 32.1988 4.33255 32.5368 3.90797 32.5368C3.5017 32.5368 3.1298 32.1988 3.1298 31.7525V27.8415C3.1298 27.3951 3.50453 27.0572 3.90797 27.0572ZM7.81098 27.8417V31.7526C7.81098 32.199 7.45739 32.5369 7.03281 32.5369C6.60823 32.5369 6.25464 32.199 6.25464 31.7526V27.8417C6.25464 27.3769 6.62938 27.0619 7.03281 27.0619C7.43625 27.0619 7.81098 27.38 7.81098 27.8417ZM10.9343 27.8417V31.7526C10.9343 32.199 10.5807 32.5369 10.1561 32.5369C9.73154 32.5369 9.37798 32.199 9.37798 31.7526V27.8417C9.37798 27.3953 9.73745 27.0619 10.1561 27.0619C10.5779 27.0619 10.9343 27.3953 10.9343 27.8417ZM14.0637 27.8416V28.4275C13.6933 28.7722 13.4964 29.1563 13.4031 29.572C13.2779 30.1288 13.349 30.6895 13.5297 31.2093L13.8867 32.2408C13.7462 32.4117 13.5343 32.5292 13.2825 32.5292C12.8577 32.5292 12.4979 32.1989 12.4983 31.7525L12.5013 27.8416C12.5016 27.3952 12.8638 27.0649 13.2855 27.0649C13.7073 27.0649 14.0637 27.3952 14.0637 27.8416ZM16.3189 29.8146C16.3189 29.8146 17.1478 31.0951 17.9713 32.5017C18.3831 33.2051 18.7914 33.942 19.0897 34.5495C19.2389 34.8533 19.3592 35.1268 19.4361 35.3338C19.5128 35.5408 19.5122 35.5644 19.5337 35.6451C19.5337 36.4388 19.0235 37.785 18.2124 39.1624C17.4449 40.4656 16.447 41.7649 15.4964 42.6872H4.7792C3.76227 41.5294 3.12675 39.7715 3.12675 38.3506V33.962C3.37094 34.0476 3.63085 34.0933 3.90796 34.0933C4.5185 34.0933 5.05901 33.8702 5.47038 33.4997C5.88176 33.8702 6.42226 34.0933 7.0328 34.0933C7.64335 34.0933 8.18385 33.8702 8.59523 33.4997C9.00655 33.8698 9.5459 34.0933 10.1561 34.0933C10.7684 34.0933 11.2747 33.8842 11.7231 33.5027C12.1377 33.8734 12.6798 34.0917 13.2825 34.0917C13.7035 34.0917 14.091 33.9826 14.4269 33.7957L14.6893 34.5526C14.1037 34.9853 12.3426 36.3479 11.7475 38.5688C11.4933 39.6127 13.0336 39.9383 13.2535 38.9671C13.8046 36.8819 15.9108 35.6017 16.0152 35.5414C16.34 35.3534 16.4855 34.9616 16.3616 34.6075L15.0067 30.6966C14.903 30.3987 14.8875 30.11 14.9319 29.9123C14.9782 29.7394 15.0417 29.6065 15.231 29.4972C15.3199 29.4458 15.4177 29.4142 15.5163 29.4026C15.8121 29.3677 16.1263 29.5097 16.3189 29.8146ZM27.532 34.3634L22.8447 39.8368C22.4157 40.3438 22.7742 41.1211 23.4383 41.1232H25.7788V43.47L30.4677 43.4688V41.1231H32.8159C33.4772 41.1163 33.8306 40.3416 33.4033 39.8368L28.7206 34.3633C28.5652 34.1827 28.3361 34.0839 28.0981 34.0932C27.8801 34.1006 27.6743 34.1981 27.532 34.3634ZM42.1874 41.1262V41.9075C42.1864 42.9504 43.7489 42.9504 43.7498 41.9075V41.1262C43.7502 40.6048 43.3593 40.3435 42.9686 40.3434C42.5779 40.3434 42.1878 40.6048 42.1874 41.1262ZM38.2813 41.1247C37.8906 41.1247 37.5005 41.3861 37.5001 41.9075V42.6888C37.4991 43.7316 39.0616 43.7316 39.0625 42.6888V41.9075C39.063 41.3861 38.672 41.1247 38.2813 41.1247ZM39.8437 44.2513V45.0326C39.8428 46.0755 41.4052 46.0755 41.4061 45.0326V44.2513C41.4066 43.7299 41.0156 43.4685 40.6249 43.4685C40.2342 43.4685 39.8442 43.7299 39.8437 44.2513ZM29.688 45.031C29.2973 45.031 28.9057 45.2924 28.9052 45.8138V46.5951C28.9043 47.638 30.4683 47.638 30.4692 46.5951V45.8138C30.4696 45.2924 30.0787 45.031 29.688 45.031ZM25.7819 46.5951V47.3763C25.781 48.4192 27.3434 48.4192 27.3443 47.3763V46.595C27.3448 46.0736 26.9538 45.8122 26.5631 45.8123C26.1724 45.8123 25.7824 46.0736 25.7819 46.5951Z"
                    fill="#FF6A16"
                  />
                </svg>
                <p className="text-4xl font-bold">Our mission</p>
              </div>
              <p className="mb-8">
                We aim to empower every Flowire, enabling them to contribute
                meaningfully, grow personally and professionally, and find
                fulfillment.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M2.5 12.9421L11.875 23"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 14.25L21.875 7.375"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.002 13L18.7503 23L28.1253 8.625"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-xl font-semibold">Value and Empowerment</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M2.5 12.9421L11.875 23"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 14.25L21.875 7.375"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.002 13L18.7503 23L28.1253 8.625"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-xl font-semibold">Diversity Celebration</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M2.5 12.9421L11.875 23"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 14.25L21.875 7.375"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.002 13L18.7503 23L28.1253 8.625"
                      stroke="#FF6A16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-xl font-semibold">
                    Professional Development
                  </p>
                </div>
              </div>
            </div>
            <div className="down">
              <figure className="h-[320px] w-full overflow-hidden rounded-xl">
                <img
                  src={bond}
                  alt=""
                  className="size-full object-cover object-center"
                />
              </figure>
            </div>
          </div>
          <div className="right rounded-xl bg-[#FFF2EB] p-12 flex-1">
            <div className="mb-6 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4418 36.036H18.7637C17.5215 36.036 16.3293 36.5298 15.4496 37.4079C14.5699 38.2876 14.0762 39.4798 14.0762 40.7235C14.0762 41.7204 14.0762 42.8251 14.0762 43.8235C14.0762 45.0673 14.5699 46.2595 15.4496 47.1376C16.3293 48.0173 17.5215 48.511 18.7637 48.511H31.2527C32.4965 48.511 33.6887 48.0173 34.5684 47.1376C35.4465 46.2595 35.9402 45.0673 35.9402 43.8235V40.7235C35.9402 39.4798 35.4465 38.2876 34.5684 37.4079C33.6887 36.5298 32.4965 36.036 31.2527 36.036H26.5668L26.5199 3.09698C26.5184 2.23604 25.8168 1.53604 24.9543 1.5376C24.0934 1.53916 23.3934 2.23916 23.3949 3.10166L23.4418 36.036Z"
                  fill="#FF6A16"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.6465 4.6687L29.6746 23.4375H43.7496C44.3496 23.4375 44.898 23.0937 45.1574 22.5515C45.4184 22.0109 45.3449 21.3687 44.9699 20.9L39.4996 14.0531L44.9699 7.2062C45.3449 6.73745 45.4184 6.0937 45.1574 5.55308C44.898 5.01245 44.3496 4.6687 43.7496 4.6687H29.6465Z"
                  fill="#FF6A16"
                />
              </svg>
              <p className="text-4xl font-bold">Our Vision</p>
            </div>
            <p className="mb-6">
              We aim to empower every Flowire, enabling them to contribute
              meaningfully, grow personally and professionally, and find
              fulfillment. Our vision extends beyond mere professional
              development, emphasizing a nurturing culture.
            </p>
            <p className="mb-8">
              We aspire to cultivate an ecosystem where each Flowire thrives,
              contributing their best while feeling fulfilled, respected, and
              integral to our collective success
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M2.5 12.9421L11.875 23"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.25L21.875 7.375"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.002 13L18.7503 23L28.1253 8.625"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-semibold">Holistic Well-being</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M2.5 12.9421L11.875 23"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.25L21.875 7.375"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.002 13L18.7503 23L28.1253 8.625"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-semibold">Empowerment and Support</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M2.5 12.9421L11.875 23"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.25L21.875 7.375"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.002 13L18.7503 23L28.1253 8.625"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-semibold">Continuous Growth</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M2.5 12.9421L11.875 23"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.25L21.875 7.375"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.002 13L18.7503 23L28.1253 8.625"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-semibold">Nurturing Culture</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M2.5 12.9421L11.875 23"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.25L21.875 7.375"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.002 13L18.7503 23L28.1253 8.625"
                    stroke="#FF6A16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-semibold">Thriving Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentProjects/>
      <ExploreBlog/>
      <GetInTouchBanner/>
    </>
  );
};

export default About;
