import PurchaseCard from "@/assets/images/PurchaseCard.png";
import coinImg from "@/assets/images/coins.png";
import Container from "@/components/Container";
import FeatureSection from "@/components/home-sections/FeatureSection";
import VisitHomeResource from "@/components/home-sections/VisitHomeResource";
import { Button } from "@/components/shadcn/ui/button";

const CoinPurchase = () => {
  return (
    <>
      <Container>
        <section className="container my-10 lg:my-[80px]">
          <h3 className="mx-auto mb-4 w-full text-center font-manrope text-[24px] font-bold leading-[120%] md:text-4xl">
            Power Your Progress with Lync Coins.
          </h3>
          <p className="mx-auto my-3 w-full max-w-[900px] text-center font-manrope text-base font-normal text-[#242424] md:text-lg lg:leading-[200%]">
            Welcome to the GoldLync Coin Shop! Use virtual coins to apply for
            jobs and connect with clients. The more valuable the project, the
            more coins required to unlock leads. Purchase coins and store them
            in your account to ensure seamless access to job opportunities.
          </p>
          <div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            id="price-list"
          >
            {[1, 2, 3].map((index) => (
              <div key={index} className="card rounded-xl bg-[#FFF2EB] p-6">
                <figure className="h-[255px] w-full overflow-hidden rounded-xl">
                  <img
                    src={PurchaseCard}
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </figure>
                <div className="my-6 font-manrope text-[#0A0A0A]">
                  <p className="mb-3 text-2xl font-semibold">
                    $100 = 100 Lync Coins
                  </p>
                  <p className="">
                    Get 100 Bonus Coins on Your First Purchase!
                  </p>
                </div>
                <Button className="w-full">Buy Coins Now.</Button>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* ---------- */}

      <section className="bg-[#FFF2EB] py-20">
        <Container>
          <h4 className="mb-16 w-full text-2xl font-bold text-[#242424] md:text-3xl">
            Custom Purchase
          </h4>
          <div className="flex gap-8 xl:gap-32">
            <div className="left flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-7">
                <div className="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="LC 0"
                    className="w-full rounded p-5 pl-16 pr-36 outline-primary placeholder:text-black lg:p-7 lg:pl-20"
                  />
                  <div className="pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[32px] lg:w-[48px]"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M24 48C36.6853 48 46.9688 37.2548 46.9688 24C46.9688 10.7452 36.6853 0 24 0C11.3147 0 1.03125 10.7452 1.03125 24C1.03125 37.2548 11.3147 48 24 48Z"
                        fill="#E88102"
                      />
                      <path
                        d="M24 45.4688C36.5558 45.4688 46.7344 35.2902 46.7344 22.7344C46.7344 10.1785 36.5558 0 24 0C11.4442 0 1.26562 10.1785 1.26562 22.7344C1.26562 35.2902 11.4442 45.4688 24 45.4688Z"
                        fill="#FDD835"
                      />
                      <path
                        d="M33.0758 1.88477L3.15078 31.8004C2.14766 29.5035 1.51953 27.0098 1.33203 24.3941L25.6602 0.0566406C28.2758 0.253516 30.7695 0.881641 33.0758 1.88477ZM43.8102 11.5785L12.8445 42.5441C10.9133 41.4566 9.16953 40.0973 7.64141 38.5129L39.7883 6.37539C41.3633 7.89414 42.7227 9.64727 43.8102 11.5785ZM38.8602 5.52227L6.79766 37.5848C6.30078 37.0035 5.82266 36.3941 5.38203 35.766L37.0414 4.10664C37.6695 4.54727 38.2789 5.02539 38.8602 5.52227ZM46.0227 17.0629L18.3289 44.7566C17.4945 44.541 16.6789 44.2785 15.882 43.9785L45.2445 14.616C45.5445 15.4129 45.807 16.2285 46.0227 17.0629Z"
                        fill="white"
                        fillOpacity="0.313726"
                      />
                      <path
                        d="M46.7344 22.7344C46.7344 22.8937 46.7344 23.0438 46.725 23.2031C46.4813 10.8656 36.4031 0.9375 24 0.9375C11.5969 0.9375 1.51875 10.8656 1.275 23.2031C1.275 23.0438 1.26562 22.8937 1.26562 22.7344C1.26562 10.1813 11.4469 0 24 0C36.5531 0 46.7344 10.1813 46.7344 22.7344Z"
                        fill="white"
                        fillOpacity="0.313726"
                      />
                      <path
                        d="M42.4688 23.7188C42.4688 33.5531 34.4906 41.5312 24.6562 41.5312C19.1344 41.5312 14.1938 39.0094 10.9219 35.0625C14.175 38.5781 18.825 40.7812 24 40.7812C33.8344 40.7812 41.8125 32.8031 41.8125 22.9688C41.8125 18.6562 40.2844 14.7094 37.7344 11.625C40.6688 14.8031 42.4688 19.05 42.4688 23.7188Z"
                        fill="white"
                        fillOpacity="0.313726"
                      />
                      <path
                        d="M24 40.7812C33.8376 40.7812 41.8125 32.8063 41.8125 22.9688C41.8125 13.1312 33.8376 5.15625 24 5.15625C14.1624 5.15625 6.1875 13.1312 6.1875 22.9688C6.1875 32.8063 14.1624 40.7812 24 40.7812Z"
                        fill="#F39E09"
                      />
                      <path
                        d="M37.5 11.3438C34.3781 8.65312 30.3188 7.03125 25.875 7.03125C16.0406 7.03125 8.0625 15.0094 8.0625 24.8438C8.0625 29.2875 9.68437 33.3469 12.375 36.4688C8.5875 33.1969 6.1875 28.3687 6.1875 22.9688C6.1875 13.1344 14.1656 5.15625 24 5.15625C29.3906 5.15625 34.2281 7.55625 37.5 11.3438Z"
                        fill="#E88102"
                      />
                      <path
                        d="M22.8859 18.4313C22.5672 18.7969 22.3984 19.3031 22.3984 19.95C22.3984 20.5969 22.5859 21.1313 22.9609 21.5156C23.3359 21.9 23.9359 22.2656 24.7609 22.6219C25.5859 22.9688 26.3641 23.3344 27.0953 23.7094C27.8266 24.0844 28.4547 24.5156 28.9891 24.9938C29.5234 25.4719 29.9359 26.0344 30.2359 26.6719C30.3484 26.9156 30.6859 27.375 30.6859 27.375V28.9781C30.6859 30.4969 30.2078 31.7344 29.2422 32.6906C28.2766 33.6469 26.9734 34.2094 25.3141 34.3688V37.0312H23.1953V34.3406C21.2641 34.1344 19.7828 33.4781 18.7422 32.3531C17.7109 31.2281 17.1953 29.7562 17.1953 27.9187V26.5125L21.6766 27.9187C21.6766 28.9312 21.9016 29.7 22.3516 30.225C22.8016 30.75 23.4391 31.0125 24.2641 31.0125C24.8641 31.0125 25.3422 30.8344 25.6891 30.4688C26.0359 30.1031 26.2047 29.6156 26.2047 28.9875C26.2047 28.2844 26.0359 27.7406 25.6891 27.3375C25.3422 26.9344 24.7328 26.5594 23.8703 26.2031C22.9984 25.8469 22.2016 25.4906 21.4609 25.125C20.7203 24.7594 20.0922 24.3375 19.5578 23.8594C19.0234 23.3813 18.6203 22.8281 18.3297 22.2C18.0484 21.5719 17.9078 20.8125 17.9078 19.9125V18.4219C17.9078 18.4219 18.7422 16.8562 19.4266 16.2094C20.4391 15.2344 21.7891 14.6719 23.4672 14.5125V11.7188H25.5859V14.5781C27.2078 14.8219 28.4828 15.4875 29.4109 16.5844C30.0484 17.3344 30.7984 19.35 30.7984 19.35V20.7562H26.2984C26.2984 19.8375 26.1203 19.125 25.7641 18.6281C25.4078 18.1312 24.9016 17.8875 24.2453 17.8875C23.6641 17.8781 23.2141 18.0656 22.8859 18.4313Z"
                        fill="#DB6704"
                      />
                      <path
                        d="M26.2023 27.5906C26.2023 26.8875 26.0336 26.3438 25.6867 25.9406C25.3398 25.5375 24.7305 25.1625 23.868 24.8063C22.9961 24.45 22.1992 24.0938 21.4586 23.7281C20.718 23.3625 20.0898 22.9406 19.5555 22.4625C19.0211 21.9844 18.618 21.4312 18.3273 20.8031C18.0461 20.175 17.9055 19.4062 17.9055 18.5156C17.9055 17.0156 18.4117 15.7781 19.4242 14.8125C20.4367 13.8469 21.7867 13.275 23.4648 13.1156V10.3125H25.5836V13.1719C27.2055 13.4156 28.4805 14.0812 29.4086 15.1781C30.3367 16.275 30.7961 17.6625 30.7961 19.35H26.2961C26.2961 18.4312 26.118 17.7187 25.7617 17.2219C25.4055 16.725 24.8992 16.4813 24.243 16.4813C23.6617 16.4813 23.2023 16.6687 22.8836 17.0344C22.5648 17.4 22.3961 17.9062 22.3961 18.5531C22.3961 19.2 22.5836 19.7344 22.9586 20.1188C23.3336 20.5031 23.9336 20.8687 24.7492 21.225C25.5742 21.5719 26.3523 21.9375 27.0836 22.3125C27.8148 22.6875 28.443 23.1187 28.9773 23.5969C29.5117 24.075 29.9242 24.6375 30.2242 25.275C30.5242 25.9125 30.6742 26.6813 30.6742 27.5719C30.6742 29.0906 30.1961 30.3281 29.2305 31.2844C28.2648 32.2406 26.9617 32.8031 25.3023 32.9625V35.625H23.1836V32.9344C21.2523 32.7281 19.7711 32.0719 18.7305 30.9469C17.6992 29.8219 17.1836 28.35 17.1836 26.5125H21.6648C21.6648 27.525 21.8898 28.2937 22.3398 28.8187C22.7898 29.3438 23.4273 29.6062 24.2523 29.6062C24.8523 29.6062 25.3305 29.4281 25.6773 29.0625C26.0242 28.6969 26.2023 28.2187 26.2023 27.5906Z"
                        fill="#FDD835"
                      />
                      <path
                        d="M19.425 14.8125C19.9687 14.2875 20.6156 13.8844 21.3563 13.5938L18.1781 16.7812C18.4219 16.0312 18.8344 15.3844 19.425 14.8125ZM24.6375 10.3125L23.4656 11.4844V10.3125H24.6375ZM30.1969 25.1906L22.5375 32.85C20.925 32.5781 19.6594 31.9406 18.75 30.9563C18.1594 30.3094 17.7375 29.55 17.4844 28.6781L19.6406 26.5219H21.6844C21.6844 27.5344 21.9094 28.3031 22.3594 28.8281C22.8094 29.3531 23.4469 29.6156 24.2719 29.6156C24.8719 29.6156 25.35 29.4375 25.6969 29.0719C26.0438 28.7063 26.2125 28.2187 26.2125 27.5906C26.2125 26.8875 26.0438 26.3438 25.6969 25.9406C25.35 25.5375 24.7406 25.1625 23.8781 24.8063C23.2594 24.5531 22.6781 24.3 22.125 24.0375L24.9 21.2625C25.6781 21.6 26.4094 21.9375 27.1031 22.2938C27.8344 22.6688 28.4625 23.1 28.9969 23.5781C29.5031 24.0469 29.9063 24.5813 30.1969 25.1906ZM30.7969 19.3406H26.8125L30.0469 16.1063C30.5437 17.025 30.7969 18.1031 30.7969 19.3406ZM17.2031 26.5125H17.8688L17.2313 27.15C17.2125 26.9438 17.2031 26.7281 17.2031 26.5125ZM22.9594 20.1094C23.1469 20.3062 23.3906 20.4938 23.7 20.6813L20.925 23.4562C20.4094 23.1656 19.95 22.8375 19.5563 22.4719C19.3969 22.3312 19.2562 22.1812 19.125 22.0312L22.4156 18.7406C22.4438 19.3031 22.6312 19.7625 22.9594 20.1094ZM29.3156 15.0656L26.1844 18.1969C26.1 17.8125 25.9594 17.4844 25.7719 17.2219C25.4906 16.8281 25.1156 16.5938 24.6469 16.5094L27.45 13.7062C28.1719 14.0344 28.7906 14.4844 29.3156 15.0656ZM24.225 35.625L25.3125 34.5375V35.625H24.225ZM30.3938 29.4563C30.1594 30.15 29.775 30.75 29.25 31.275C28.725 31.8 28.0969 32.2031 27.3656 32.4844L30.3938 29.4563Z"
                        fill="white"
                        fillOpacity="0.313726"
                      />
                      <path
                        d="M38.8594 13.1344C27.3281 17.1844 18.0656 26.0813 13.5281 37.3781C13.1344 37.0875 12.75 36.7875 12.375 36.4594C9.68437 33.3375 8.0625 29.2781 8.0625 24.8438C8.0625 15.0094 16.0406 7.03125 25.875 7.03125C30.3188 7.03125 34.3781 8.65312 37.4906 11.3438C37.9875 11.9156 38.4375 12.5156 38.8594 13.1344Z"
                        fill="white"
                        fillOpacity="0.145098"
                      />
                    </svg>
                    <p className="text-xl font-semibold">Free Bonus</p>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder=""
                    className="w-full rounded p-5 pl-32 outline-primary placeholder:text-black lg:p-7 lg:pl-32"
                  />
                  <div className="pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-5">
                    <p className="text-xl font-semibold">$ Amount</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full md:mt-0">Buy Coins Now.</Button>
            </div>
            <div className="right flex flex-1 justify-center">
              <img src={coinImg} alt="" className="h-[350px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* -------- */}
      <section className="pt-20">
        <FeatureSection bg={"bg-transparent"} />
      </section>

      {/* --------- */}
      <Container>
        <section className="container my-20 xl:my-[160px]">
          <h3 className="mx-auto mb-12 w-full text-center font-manrope text-4xl font-bold leading-[120%]">
            How It Works:
          </h3>
          <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
            <div className="card group relative flex flex-col items-center gap-6 lg:gap-10 p-6">
              <div className="rounded-full bg-transparent p-5 transition-all group-hover:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="stroke-primary group-hover:stroke-white"
                >
                  <g clipPath="url(#clip0_17982_17246)">
                    <path
                      opacity="0.2"
                      d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                    />
                    <path
                      d="M22 7H28"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 4V10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.875 26.9988C5.10445 24.8708 6.87226 23.1037 9.00085 21.8752C11.1294 20.6467 13.5438 20 16.0015 20C18.4592 20 20.8736 20.6468 23.0021 21.8754C25.1307 23.1039 26.8985 24.871 28.1279 26.9991"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.5056 14.7728C22.9708 16.2167 22.0306 17.4754 20.7978 18.3979C19.565 19.3203 18.0921 19.8672 16.556 19.9728C15.02 20.0784 13.4861 19.7383 12.1386 18.9933C10.7912 18.2483 9.68749 17.1301 8.96014 15.773C8.2328 14.416 7.91273 12.8778 8.0384 11.3432C8.16407 9.80864 8.73013 8.34301 9.66857 7.12236C10.607 5.90172 11.8779 4.97798 13.3286 4.46212C14.7793 3.94627 16.3481 3.86023 17.8465 4.21436"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17982_17246">
                      <rect width="32" height="32" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-manrope text-lg text-[#767F8C]">
                Purchase coins using your credit/debit card.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
                className="absolute left-1/2 top-0 hidden w-[120%] lg:block"
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 40.8082C0.999997 40.8082 43.9587 1.00001 108.877 1.00001C173.795 1.00001 216.754 40.8083 216.754 40.8083"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="12 8"
                  />
                  <path
                    d="M215.551 28.6094L217.502 41.5909L204.555 43.4268"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div className="card group relative flex flex-col items-center gap-6 lg:gap-10 p-6">
              <div className="rounded-full bg-transparent p-5 transition-all group-hover:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="stroke-primary group-hover:stroke-white"
                >
                  <g clipPath="url(#clip0_17982_17257)">
                    <path
                      d="M12.001 25.998H9.00101C8.0083 25.9971 7.02716 25.785 6.1227 25.3758C5.21823 24.9667 4.41114 24.3698 3.75498 23.6249C3.09882 22.88 2.60862 22.004 2.31689 21.0551C2.02517 20.1063 1.9386 19.1062 2.06294 18.1213C2.18727 17.1364 2.51967 16.1892 3.03806 15.3426C3.55645 14.496 4.24898 13.7694 5.06969 13.2109C5.89039 12.6524 6.8205 12.2749 7.79827 12.1033C8.77604 11.9318 9.77912 11.9702 10.7409 12.216"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 15.999C10.0002 14.4146 10.3768 12.8528 11.0989 11.4425C11.821 10.0322 12.868 8.81359 14.1534 7.88722C15.4388 6.96085 16.926 6.35319 18.4923 6.11431C20.0587 5.87542 21.6594 6.01216 23.1625 6.51324C24.6656 7.01433 26.0282 7.86542 27.1379 8.99639C28.2476 10.1274 29.0726 11.5058 29.5451 13.0182C30.0175 14.5306 30.1239 16.1336 29.8553 17.6951C29.5867 19.2566 28.9509 20.732 28.0003 21.9996"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7578 20.2408L19.0004 15.998L23.2431 20.2408"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 25.998V15.998"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17982_17257">
                      <rect width="32" height="32" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-manrope text-lg text-[#767F8C]">
                Coins are instantly added to your profile.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
                className="absolute left-1/2 top-[70px] hidden w-[120%] lg:block"
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 8.19175C0.999997 8.19175 43.9587 48 108.877 48C173.795 48 216.754 8.19174 216.754 8.19174"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="12 8"
                  />
                  <path
                    d="M215.551 20.3906L217.502 7.40915L204.555 5.57318"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div className="card group relative flex flex-col items-center gap-6 lg:gap-10 p-6">
              <div className="rounded-full bg-transparent p-5 transition-all group-hover:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="stroke-primary group-hover:stroke-white"
                >
                  <g clipPath="url(#clip0_17982_17268)">
                    <path
                      opacity="0.2"
                      d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                    />
                    <path
                      d="M10.5 14.5H18.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 10.5V18.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.9219 21.9258L27.9969 28.0009"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17982_17268">
                      <rect width="32" height="32" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-manrope text-lg text-[#767F8C]">
                Spend coins to apply for jobs and unlock client details.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
                className="absolute left-1/2 top-0 hidden w-[120%] lg:block"
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 40.8082C0.999997 40.8082 43.9587 1.00001 108.877 1.00001C173.795 1.00001 216.754 40.8083 216.754 40.8083"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="12 8"
                  />
                  <path
                    d="M215.551 28.6094L217.502 41.5909L204.555 43.4268"
                    stroke="#FF6A16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="card group flex flex-col items-center gap-6 lg:gap-10 p-6">
              <div className="rounded-full bg-transparent p-5 transition-all group-hover:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="stroke-primary group-hover:stroke-white"
                >
                  <g clipPath="url(#clip0_17982_17279)">
                    <path
                      opacity="0.2"
                      d="M6.80761 25.1924C5.65711 24.0419 6.42019 21.6265 5.8346 20.2111C5.22755 18.744 3 17.5631 3 16C3 14.4368 5.22756 13.256 5.8346 11.7888C6.4202 10.3735 5.65711 7.95811 6.80761 6.80761C7.95811 5.65711 10.3735 6.42019 11.7889 5.8346C13.256 5.22755 14.4369 3 16 3C17.5632 3 18.744 5.22756 20.2112 5.8346C21.6265 6.4202 24.0419 5.65711 25.1924 6.80761C26.3429 7.95811 25.5798 10.3735 26.1654 11.7889C26.7725 13.256 29 14.4369 29 16C29 17.5632 26.7724 18.744 26.1654 20.2112C25.5798 21.6265 26.3429 24.0419 25.1924 25.1924C24.0419 26.3429 21.6265 25.5798 20.2111 26.1654C18.744 26.7725 17.5631 29 16 29C14.4368 29 13.256 26.7724 11.7888 26.1654C10.3735 25.5798 7.95811 26.3429 6.80761 25.1924Z"
                    />
                    <path
                      d="M6.80761 25.1924C5.65711 24.0419 6.42019 21.6265 5.8346 20.2111C5.22755 18.744 3 17.5631 3 16C3 14.4368 5.22756 13.256 5.8346 11.7888C6.4202 10.3735 5.65711 7.95811 6.80761 6.80761C7.95811 5.65711 10.3735 6.42019 11.7889 5.8346C13.256 5.22755 14.4369 3 16 3C17.5632 3 18.744 5.22756 20.2112 5.8346C21.6265 6.4202 24.0419 5.65711 25.1924 6.80761C26.3429 7.95811 25.5798 10.3735 26.1654 11.7889C26.7725 13.256 29 14.4369 29 16C29 17.5632 26.7724 18.744 26.1654 20.2112C25.5798 21.6265 26.3429 24.0419 25.1924 25.1924C24.0419 26.3429 21.6265 25.5798 20.2111 26.1654C18.744 26.7725 17.5631 29 16 29C14.4368 29 13.256 26.7724 11.7888 26.1654C10.3735 25.5798 7.95811 26.3429 6.80761 25.1924Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.5 13L14.1666 20L10.5 16.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17982_17279">
                      <rect width="32" height="32" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-manrope text-lg text-[#767F8C]">
                Aim high, start pure, earn good reviews for more jobs.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <VisitHomeResource
        title={"Ready to Boost Your Earnings?"}
        description={
          "Sometimes getting started is the hardest part. Our resource center tas project guides. cost estimates and how-to guides to help you kick off your next home project."
        }
        btnName={"Buy Coins Now"}
        link={"price-list"}
      />
    </>
  );
};

export default CoinPurchase;
