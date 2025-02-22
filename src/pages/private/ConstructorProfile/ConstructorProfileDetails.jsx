import { Link as ScrollLink } from "react-scroll";
import siteLogo from "@/assets/images/site-logo.png";
import profileImg from "@/assets/images/constructor.png";
import RatingStar from "@/components/shared/RatingStar";
import workImg from "@/assets/images/work.jpg";
import Reviewprofile from "@/assets/images/Reviewprofile.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ProjectsDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ConstructorProfile/accordion";
import { useState } from "react";
import {
  BackSign,
  BackwardSign,
  Employees,
  Experience,
  ForwardSign,
  Hired1,
  Location2,
  TopBadge1,
  Trophy,
} from "@/assets/icons";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper/modules";
import ImageContainer from "@/components/ImageContainer";
import { Link } from "react-router";

const ConstructorProfileDetails = () => {
  const [openShowALl, setOpenShowALl] = useState(false);
  const [activeTab, selectActiveTab] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDaysExpanded, setIsDaysExpanded] = useState(false);
  const text =
    "Installing a new kitchen tap and addressing a leak at the connection between the hose and the water pipe is essential to maintaining a functional and efficient kitchen. The leak appears to be coming from the coupling, which may require replacement, as worn-out or loose couplings can cause water seepage, leading to potential damage and increased utility bills. To resolve this issue, it is crucial to assess the condition of the existing tap, choose a suitable replacement, and gather the necessary tools, including an adjustable wrench, pipe wrench, plumber’s tape, and new couplings. The installation process involves turning off the water supply, draining any remaining water, disconnecting the old tap, and carefully removing the faulty couplings. Once the new tap is positioned and secured, replacing the couplings and ensuring a watertight seal with plumber’s tape helps prevent future leaks. Reconnecting the supply lines and testing the water flow ensures that everything is properly installed. By taking these steps, a secure and durable connection is achieved, improving the overall functionality of the kitchen plumbing and preventing further complications";
  const words = text.split(" ");
  const displayedText = isExpanded ? text : words.slice(0, 70).join(" ");
  const tabs = [
    {
      id: 1,
      name: "About",
      contentId: "about",
      offset: -70,
    },
    {
      id: 2,
      name: "Recent Work",
      contentId: "works",
      offset: -50,
    },
    {
      id: 3,
      name: "Services",
      contentId: "services",
      offset: -50,
    },
    {
      id: 4,
      name: "Reviews",
      contentId: "reviews",
      offset: -50,
    },
    {
      id: 5,
      name: "FAQ",
      contentId: "faq",
      offset: -50,
    },
  ];

  return (
    <section className="container my-[80px]">
      <div className="grid grid-cols-3 gap-10">
        <div className="left col-span-2">
          <Link to="/pros" className="flex items-center gap-1.5">
            <BackSign className="stroke-primary" />
            <span className="text-primary">See more pro profile</span>
          </Link>
          <div className="bread-crumb mt-5 text-[#242424]">
            GOLDLYNC / House Cleaning / Signa Clorian
          </div>
          <div className="my-14 flex items-center gap-9">
            <div className="left">
              <figure className="size-[220px] overflow-hidden rounded-full">
                <img src={profileImg} alt="" />
              </figure>
            </div>
            <div className="right">
              <h2 className="mb-4 text-xl font-bold">Signa Clorian</h2>
              <div className="mb-4 flex gap-1 text-xl font-medium">
                <p>Title:</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M16.1175 8.68501C15.7463 8.6182 15.3697 8.58557 14.9925 8.58751C14.6128 8.58574 14.2338 8.61837 13.86 8.68501C13.8491 8.68998 13.8366 8.69041 13.8253 8.68619C13.8141 8.68197 13.805 8.67345 13.8 8.66251C13.795 8.65157 13.7946 8.6391 13.7988 8.62785C13.803 8.6166 13.8116 8.60748 13.8225 8.60251L15 7.71001L16.1625 8.60251C16.1734 8.60748 16.182 8.6166 16.1862 8.62785C16.1904 8.6391 16.19 8.65157 16.185 8.66251C16.18 8.67345 16.1709 8.68197 16.1597 8.68619C16.1484 8.69041 16.1359 8.68998 16.125 8.68501M14.1675 14.25C14.149 14.2554 14.1319 14.265 14.1176 14.278C14.1033 14.291 14.0922 14.3071 14.085 14.325C14.325 14.505 14.49 14.925 14.9775 14.925C15.465 14.925 15.6375 14.505 15.87 14.325C15.8646 14.3073 15.855 14.2912 15.8419 14.2781C15.8288 14.265 15.8127 14.2554 15.795 14.25C15.2571 14.3499 14.7054 14.3499 14.1675 14.25ZM15 13.5675C14.8725 13.5675 14.835 13.5225 14.745 13.5225C14.6327 13.5326 14.527 13.5801 14.445 13.6575C14.4476 13.6885 14.4609 13.7177 14.4825 13.74C14.6775 13.74 14.775 13.8825 15 13.8825C15.225 13.8825 15.33 13.77 15.525 13.74C15.5306 13.727 15.5334 13.7129 15.5334 13.6988C15.5334 13.6846 15.5306 13.6705 15.525 13.6575C15.4456 13.5763 15.3385 13.528 15.225 13.5225C15.135 13.5225 15.105 13.5675 14.9625 13.5675M26.2125 15.6975C26.2125 15.96 26.175 16.2375 26.145 16.4925C24.87 16.7025 24.4125 15.5775 23.145 15.6225C23.2211 15.9115 23.2812 16.2044 23.325 16.5C24.405 16.5 24.825 17.505 26.04 17.3475C25.9725 17.655 25.8975 17.9625 25.815 18.2625C24.8625 18.36 24.5325 17.415 23.43 17.4375C23.43 17.595 23.43 17.7525 23.43 17.91C23.43 18.0675 23.43 18.09 23.43 18.18C24.3675 18.18 24.675 19.035 25.5675 18.99C25.455 19.2975 25.3275 19.59 25.1925 19.8825C24.5475 19.8825 24.33 19.035 23.3625 19.1325C23.3325 19.3425 23.295 19.5525 23.25 19.7625C24.0975 19.7025 24.2775 20.5125 24.885 20.5125C24.7275 20.7975 24.5625 21.0675 24.39 21.3375C24.03 21.15 23.715 20.5875 23.04 20.5275C23.1075 20.31 23.175 20.0925 23.22 19.875C22.5269 19.8611 21.8627 19.5944 21.3525 19.125C21.54 18.0525 19.8525 16.965 19.8525 16.1775C19.8525 15.39 20.28 14.8575 20.28 13.71C20.2717 12.7917 19.9121 11.9114 19.275 11.25C19.1556 11.1325 19.025 11.027 18.885 10.935C19.5127 11.6449 19.8711 12.5528 19.8975 13.5C19.8975 14.58 19.395 15.15 19.395 16.1475C19.395 17.145 20.8575 18.0075 20.8575 19.035C20.8099 19.5976 20.6216 20.1392 20.31 20.61C20.8525 21.1804 21.5817 21.537 22.365 21.615C22.435 21.6248 22.5063 21.6119 22.5684 21.5782C22.6305 21.5444 22.6802 21.4916 22.71 21.4275C22.7625 21.3 22.815 21.18 22.86 21.0525C23.4525 21.0525 23.7225 21.615 24.045 21.8025C23.865 22.0425 23.6775 22.2825 23.475 22.5075C23.2316 22.1646 22.8924 21.9011 22.5 21.75C22.425 21.9075 22.335 22.05 22.2525 22.2C22.5967 22.3614 22.8842 22.6227 23.0775 22.95C22.8675 23.1675 22.6425 23.3775 22.41 23.5875C22.2483 23.3287 22.0397 23.1023 21.795 22.92L21.51 23.295C21.7257 23.4614 21.9045 23.6708 22.035 23.91C21.765 24.1275 21.495 24.33 21.21 24.5175C21.0675 23.37 19.5075 22.59 19.9275 21.2625C19.7459 21.521 19.6395 21.8247 19.62 22.14C19.62 23.1 20.6475 23.8725 20.7225 24.8175C20.5125 24.945 20.295 25.065 20.07 25.185C20.0325 24.1275 18.945 22.98 18.945 22.125C18.945 21.27 20.25 20.16 20.25 19.02C20.25 17.88 18.795 17.0925 18.795 16.095C18.795 15.0975 19.41 14.5275 19.41 13.245C19.4031 12.7761 19.2997 12.3137 19.1061 11.8866C18.9125 11.4594 18.633 11.0768 18.285 10.7625C18.1661 10.6574 18.0352 10.5668 17.895 10.4925C18.5497 11.1837 18.9171 12.098 18.9225 13.05C18.9225 14.2575 18.21 14.9175 18.21 16.095C18.21 17.2725 19.6275 17.9325 19.6275 19.02C19.6275 20.1075 18.3 21.045 18.3 22.17C18.3 23.295 19.5 24.225 19.5 25.44C19.2556 25.5534 19.0052 25.6536 18.75 25.74C18.9 24.5175 17.58 23.2425 17.58 22.2375C17.58 21.2325 18.96 20.1975 18.96 19.02C18.96 17.8425 17.5575 17.295 17.5575 16.08C17.5575 14.865 18.4275 14.19 18.4275 12.8475C18.4246 12.3521 18.3082 11.864 18.0872 11.4206C17.8662 10.9772 17.5464 10.5905 17.1525 10.29L17.1075 10.245C17.04 10.1925 16.9725 10.245 17.0325 10.3275C17.5804 10.9788 17.8688 11.8093 17.8425 12.66C17.8425 13.8825 16.86 14.91 16.86 16.065C16.86 17.475 18.1875 17.8725 18.1875 19.02C18.1875 20.1675 16.7625 21.09 16.7625 22.3125C16.7625 23.535 18.1125 24.705 17.8725 26.01C17.61 26.0775 17.3325 26.1375 17.055 26.19C17.3175 24.5625 15.9975 23.385 15.9975 22.3275C15.9975 21.27 17.4975 20.1375 17.4975 19.02C17.4975 17.9025 16.44 17.6175 16.2975 16.5225C16.2951 16.487 16.2851 16.4524 16.2681 16.4211C16.2511 16.3899 16.2275 16.3626 16.1991 16.3413C16.1706 16.3199 16.1378 16.3049 16.1031 16.2974C16.0683 16.2898 16.0323 16.2899 15.9975 16.2975C15.6757 16.41 15.3402 16.4782 15 16.5C14.6861 16.4798 14.376 16.4193 14.0775 16.32C14.0429 16.3136 14.0073 16.3145 13.9729 16.3225C13.9386 16.3306 13.9064 16.3456 13.8782 16.3668C13.85 16.3879 13.8265 16.4147 13.8092 16.4453C13.7918 16.476 13.7811 16.51 13.7775 16.545C13.635 17.64 12.5775 17.9775 12.5775 19.0425C12.5775 20.1075 14.0775 21.195 14.0775 22.35C14.0775 23.505 12.7575 24.6 13.02 26.2125C12.7425 26.16 12.465 26.1 12.2025 26.0325C11.97 24.72 13.3125 23.4675 13.3125 22.335C13.3125 21.2025 11.8875 20.19 11.8875 19.0425C11.8875 17.895 13.215 17.4975 13.215 16.0875C13.215 14.9025 12.2325 13.905 12.2325 12.6825C12.2062 11.8318 12.4946 11.0013 13.0425 10.35C13.095 10.2825 13.0425 10.2225 12.9675 10.2675L12.9225 10.3125C12.5298 10.6141 12.211 11.0011 11.9901 11.4442C11.7692 11.8873 11.652 12.3749 11.6475 12.87C11.6475 14.2125 12.5175 14.8875 12.5175 16.1025C12.5175 17.3175 11.115 17.865 11.115 19.0425C11.115 20.22 12.495 21.1725 12.495 22.26C12.495 23.3475 11.175 24.51 11.325 25.7625C11.0625 25.6725 10.8075 25.575 10.575 25.4625C10.575 24.2475 11.76 23.2125 11.76 22.1925C11.76 21.1725 10.4325 20.145 10.4325 19.0425C10.4325 17.94 11.85 17.295 11.85 16.1175C11.85 14.94 11.1 14.28 11.1 13.0725C11.0976 12.1174 11.4597 11.1973 12.1125 10.5C11.9733 10.576 11.8426 10.6665 11.7225 10.77C11.3748 11.0846 11.0956 11.4673 10.902 11.8944C10.7085 12.3214 10.6048 12.7837 10.5975 13.2525C10.5975 14.535 11.2125 15.105 11.2125 16.1025C11.2125 17.1 9.75 17.88 9.75 19.02C9.75 20.16 11.0175 21.12 11.0175 22.0875C11.0175 23.055 9.93 24.0975 9.8925 25.1475C9.675 25.0275 9.4575 24.915 9.24 24.78C9.3225 23.8275 10.35 23.0625 10.35 22.1025C10.3298 21.7885 10.2262 21.4856 10.05 21.225C10.4625 22.5525 8.91 23.34 8.7675 24.48C8.4825 24.295 8.205 24.0925 7.935 23.8725C8.06771 23.6349 8.24613 23.4259 8.46 23.2575C8.3625 23.13 8.265 23.0175 8.175 22.8825C7.92331 23.057 7.7133 23.2849 7.56 23.55C7.3275 23.3475 7.1025 23.13 6.8925 22.9125C7.095 22.665 7.35 22.29 7.7175 22.1625C7.6325 22.0175 7.55 21.8675 7.47 21.7125C7.08952 21.8666 6.76145 22.127 6.525 22.4625C6.33958 22.2536 6.16438 22.0358 6 21.81C6.33 21.5925 6.6 21.06 7.1925 21.06L7.35 21.435C7.37638 21.5001 7.42425 21.5542 7.48566 21.5883C7.54706 21.6224 7.61829 21.6345 7.6875 21.6225C8.47658 21.535 9.20824 21.1678 9.75 20.5875C9.43131 20.1202 9.24237 19.5767 9.2025 19.0125C9.2025 17.985 10.6575 17.1225 10.6575 16.125C10.6575 15.1275 10.155 14.5575 10.155 13.4775C10.1897 12.5418 10.5505 11.6477 11.175 10.95C11.0319 11.0377 10.9008 11.1436 10.785 11.265C10.1458 11.9033 9.77547 12.7621 9.75 13.665C9.75 14.8125 10.1775 15.2775 10.1775 16.1325C10.1775 16.9875 8.5125 18.0075 8.6775 19.08C8.16499 19.5552 7.49389 19.8226 6.795 19.83C6.855 20.0475 6.9075 20.265 6.975 20.4825C6.2925 20.52 5.9775 21.105 5.625 21.2925C5.44821 21.0262 5.28549 20.7508 5.1375 20.4675C5.745 20.4 5.8875 19.62 6.765 19.7175C6.72 19.5075 6.6825 19.2975 6.6525 19.0875C5.6775 19.0275 5.46 19.8375 4.8225 19.8375C4.6875 19.545 4.5675 19.2525 4.4475 18.945C5.34 18.99 5.6475 18.12 6.5775 18.135V17.865C6.5775 17.7075 6.5775 17.55 6.5775 17.3925C5.475 17.3925 5.145 18.315 4.1925 18.2175C4.11 17.925 4.035 17.6175 3.9675 17.3025C5.1675 17.46 5.6025 16.44 6.6825 16.455C6.72986 16.1694 6.79245 15.8865 6.87 15.6075C5.565 15.5475 5.1075 16.6875 3.87 16.4775C3.8325 16.215 3.8175 15.945 3.795 15.6825C5.295 15.8475 5.835 14.6325 7.185 14.7825C7.31357 14.4577 7.46391 14.142 7.635 13.8375C5.9025 13.56 5.325 15 3.75 14.76C3.75 11.7763 4.93526 8.91484 7.04505 6.80506C9.15483 4.69527 12.0163 3.51001 15 3.51001C17.9837 3.51001 20.8452 4.69527 22.955 6.80506C25.0647 8.91484 26.25 11.7763 26.25 14.76C24.675 14.9775 24.0975 13.56 22.4025 13.86C22.5721 14.1627 22.7224 14.4759 22.8525 14.7975C24.2025 14.64 24.75 15.8625 26.2425 15.69M10.14 10.965C9.69984 10.7918 9.22425 10.728 8.75399 10.7789C8.28374 10.8299 7.83286 10.9941 7.44 11.2575C7.38051 10.8726 7.24512 10.5033 7.04169 10.1711C6.83827 9.83891 6.57086 9.55046 6.255 9.32251C6.23908 9.30899 6.21948 9.30052 6.19872 9.29819C6.17796 9.29586 6.15698 9.29978 6.13846 9.30945C6.11993 9.31911 6.10472 9.33408 6.09475 9.35244C6.08478 9.3708 6.08052 9.39171 6.0825 9.41251C6.2175 11.1075 5.2275 12.57 4.0125 13.86C5.2725 14.235 6.33 12.6225 7.9425 13.185C8.53454 12.3096 9.27883 11.5475 10.14 10.935M15 9.95251C14.5445 9.92638 14.0922 10.0432 13.7063 10.2865C13.3204 10.5299 13.0202 10.8877 12.8475 11.31C12.8475 11.37 12.8475 11.4075 12.9225 11.3775C13.1244 11.2939 13.3415 11.2531 13.56 11.2575C13.7521 11.2491 13.9437 11.2831 14.1213 11.357C14.2989 11.4308 14.458 11.5428 14.5875 11.685C14.689 12.0302 14.689 12.3973 14.5875 12.7425C14.415 12.7425 14.3475 12.5775 14.175 12.5775C14.0025 12.5775 13.875 12.6975 13.575 12.6975C13.275 12.6975 13.2525 12.555 13.065 12.555C12.8775 12.555 12.75 12.75 12.75 13.05C12.75 14.25 13.845 15.8175 15 15.8175C16.155 15.8175 17.25 14.22 17.25 13.05C17.25 12.78 17.1975 12.5625 16.965 12.54C16.828 12.6518 16.654 12.708 16.4775 12.6975C16.1775 12.6975 16.1025 12.5775 15.93 12.5775C15.7575 12.5775 15.7425 13.0125 15.495 13.0425C15.3481 12.6045 15.3481 12.1305 15.495 11.6925C15.611 11.5585 15.7536 11.45 15.9136 11.3738C16.0737 11.2976 16.2478 11.2555 16.425 11.25C16.6434 11.247 16.8601 11.2878 17.0625 11.37C17.13 11.37 17.1525 11.37 17.1375 11.3025C16.9645 10.8841 16.666 10.5297 16.2832 10.2879C15.9004 10.0462 15.4521 9.92899 15 9.95251ZM16.65 11.625C16.5119 11.6161 16.3734 11.6369 16.2441 11.6861C16.1147 11.7353 15.9974 11.8116 15.9 11.91C15.887 11.9396 15.8803 11.9715 15.8803 12.0038C15.8803 12.036 15.887 12.068 15.9 12.0975C16.3575 11.9475 16.755 11.94 16.9575 12.1575C16.9974 12.1231 17.0294 12.0805 17.0514 12.0326C17.0734 11.9848 17.0849 11.9327 17.085 11.88C17.085 11.73 16.9275 11.625 16.62 11.625M12.96 12.1575C13.1328 12.0518 13.3301 11.9928 13.5325 11.9862C13.735 11.9796 13.9357 12.0257 14.115 12.12C14.115 11.88 13.71 11.6175 13.2825 11.6175C12.855 11.6175 12.8175 11.7225 12.8175 11.8725C12.8199 11.9274 12.8338 11.9811 12.8583 12.0302C12.8829 12.0793 12.9175 12.1227 12.96 12.1575ZM20.175 8.20501C19.4102 8.2493 18.6774 8.52674 18.075 9.00001C18.3115 8.33565 18.6342 7.70525 19.035 7.12501C18.0847 7.19312 17.1881 7.59104 16.5 8.25001L15.9975 6.93001L17.07 6.00001L15.57 5.89501L15 4.50001L14.4075 5.88751L12.9075 5.99251L14.0175 6.97501L13.5 8.25001C12.7997 7.5868 11.8899 7.18891 10.9275 7.12501C11.3254 7.70696 11.648 8.33698 11.8875 9.00001C11.2748 8.51953 10.5278 8.24168 9.75 8.20501C10.2501 8.83899 10.6754 9.52855 11.0175 10.26C11.0233 10.2793 11.0337 10.2969 11.0476 10.3114C11.0616 10.3259 11.0788 10.3369 11.0978 10.3435C11.1168 10.35 11.1371 10.352 11.1571 10.3493C11.177 10.3465 11.196 10.339 11.2125 10.3275C12.378 9.74926 13.6614 9.44838 14.9625 9.44838C16.2636 9.44838 17.547 9.74926 18.7125 10.3275C18.729 10.339 18.748 10.3465 18.7679 10.3493C18.7879 10.352 18.8082 10.35 18.8272 10.3435C18.8462 10.3369 18.8634 10.3259 18.8774 10.3114C18.8913 10.2969 18.9017 10.2793 18.9075 10.26C19.2441 9.52561 19.6698 8.83543 20.175 8.20501ZM21.975 13.1925C23.6025 12.63 24.66 14.235 25.9125 13.8675C24.6975 12.5775 23.715 11.115 23.85 9.42001C23.8549 9.39924 23.8528 9.37745 23.844 9.35798C23.8353 9.33851 23.8205 9.32244 23.8017 9.31222C23.783 9.30201 23.7615 9.29822 23.7404 9.30143C23.7193 9.30464 23.6998 9.31468 23.685 9.33001C23.0552 9.79143 22.6301 10.4802 22.5 11.25C22.1066 10.9878 21.6558 10.8242 21.1858 10.7733C20.7158 10.7224 20.2404 10.7856 19.8 10.9575C20.6579 11.5665 21.3954 12.3294 21.975 13.2075"
                    fill="#3D3D3D"
                  />
                </svg>
                <p>Top Pro</p>
              </div>
              <div className="mb-7 flex gap-2.5 text-xl font-medium">
                <p>Rating: 4.4</p>
                <RatingStar className="size-6" rate={4.4} />
                <p className="text-primary">(120 review)</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2.5 rounded bg-[#FFF2EB] px-6 py-4"
              >
                Share Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M23.5079 11.5509L16.3579 5.05086C15.8162 4.50919 15.1662 5.05086 15.1662 5.91752V9.16752C10.0746 9.16752 5.74122 12.3092 3.68288 16.5342C2.92455 17.9425 2.49122 19.4592 2.16622 20.9759C1.94955 22.0592 3.57455 22.6009 4.22455 21.6259C6.60788 17.8342 10.6162 15.3425 15.1662 15.3425V18.9175C15.1662 19.7842 15.8162 20.3259 16.3579 19.7842L23.5079 13.2842C23.9412 12.8509 23.9412 11.9842 23.5079 11.5509Z"
                    fill="#3D3D3D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sticky top-0 z-10 mb-7 border-b bg-white">
            {tabs.map((tab) => (
              <ScrollLink
                to={tab?.contentId}
                smooth={true}
                duration={500}
                offset={tab?.offset}
                key={tab.id}
                type="button"
                className={`relative px-4 py-3 text-xl hover:text-primary ${activeTab === tab.id ? "text-primary after:absolute after:-bottom-px after:left-0 after:w-full after:border-b after:border-primary" : "text-[#3D3D3D]"} transition-all duration-300 cursor-pointer inline-block`}
                onClick={() => selectActiveTab(tab.id)}
              >
                {tab.name}
              </ScrollLink>
            ))}
          </div>
          <div className="border-b pb-12" id="about">
            <h4 className="mb-3 text-xl font-semibold">Introduction</h4>
            <p className="mb-7 text-[#575757]">
              {displayedText}{" "}
              {isExpanded || (
                <span
                  className="cursor-pointer text-primary"
                  onClick={() => setIsExpanded((prev) => !prev)}
                >
                  Read More...{" "}
                </span>
              )}
            </p>
            <div className="flex gap-12">
              <div className="left flex-1 space-y-8">
                <div className="">
                  <h4 className="mb-3 text-xl font-semibold">Overview</h4>
                  <div className="space-y-4">
                    <p className="flex items-center gap-1 text-[#575757]">
                      <TopBadge1 className="size-6" /> Current Top Pro
                    </p>
                    <p className="flex items-center gap-1 text-[#575757]">
                      <Hired1 className="size-6" /> Hired 250 Time
                    </p>
                    <p className="flex items-center gap-1 text-[#575757]">
                      <Location2 className="size-6" /> 10 Similar work done near
                      your location{" "}
                    </p>
                    <p className="flex items-center gap-1 text-[#575757]">
                      <Employees className="size-6" /> 10 employees
                    </p>
                    <p className="flex items-center gap-1 text-[#575757]">
                      <Experience className="size-6" /> 2 years business
                      experience
                    </p>
                  </div>
                </div>
                <div className="">
                  <h4 className="mb-3 text-xl font-semibold">Business hours</h4>
                  <div className="space-y-1.5 rounded border p-3">
                    <div className="flex items-center justify-between text-[#575757]">
                      <p>Sunday</p>
                      <p>Close</p>
                    </div>
                    <div className="flex items-center justify-between text-[#575757]">
                      <p>Monday</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                    {isDaysExpanded || (
                      <button
                        type="button"
                        onClick={() => setIsDaysExpanded((prev) => !prev)}
                        className="w-full text-right text-primary"
                      >
                        Read More
                      </button>
                    )}
                    {isDaysExpanded && (
                      <>
                        <div className="flex items-center justify-between text-[#575757]">
                          <p>Tuesday</p>
                          <p>9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-between text-[#575757]">
                          <p>Wednesday</p>
                          <p>9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-between text-[#575757]">
                          <p>Thursday</p>
                          <p>9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-between text-[#575757]">
                          <p>Friday</p>
                          <p>9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-between text-[#575757]">
                          <p>Saturday </p>
                          <p>9:00 AM - 6:00 PM</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="right flex-1 space-y-8">
                <div className="">
                  <h4 className="mb-3 text-xl font-semibold">
                    Payment Methods
                  </h4>
                  <p className="w-[80%]">
                    This Pro accepts payments via Credit card, Venmo, and zelle.
                  </p>
                </div>
                <div className="">
                  <h4 className="mb-3 text-xl font-semibold">Top Pro Status</h4>
                  <p className="mb-3 w-[80%]">
                    I need assistance with installing a new kitchen tap and
                    addressing a leak at the connection
                  </p>
                  <div className="flex items-center gap-5 text-[#575757]">
                    <div className="flex flex-col items-center">
                      <Trophy className="size-10" />
                      <p>2022</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Trophy className="size-10" />
                      <p>2024</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Trophy className="size-10" />
                      <p>2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b py-12" id="works">
            <div className="mb-7 flex items-center justify-between">
              <h4 className="text-3xl font-semibold">
                Recent Work
              </h4>
              <div className="flex gap-5">
                <Dialog open={openShowALl} onOpenChange={setOpenShowALl}>
                  <DialogTrigger className="font-semibold">
                    Show all
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-white">
                        Recent Work
                      </DialogTitle>
                      <DialogDescription>
                        <ImageContainer />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="workPrev rounded-[2px] border border-primary p-1">
                  <BackwardSign />
                </button>
                <button className="workNext rounded-[2px] border border-primary bg-primary p-1">
                  <ForwardSign />
                </button>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={true}
              loop={true}
              freeMode={true}
              navigation={{
                prevEl: `.workPrev`,
                nextEl: `.workNext`,
              }}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 430px
                430: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                // when window width is >= 850px
                850: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {Array(6)
                .fill(null)
                .map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <figure className="relative h-[200px] w-full overflow-hidden rounded">
                      <img
                        src={workImg}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="overlay absolute left-0 top-0 h-full w-full bg-black/50"></div>
                      <p className="absolute bottom-3 left-3 font-semibold text-white">
                        Essential home services
                      </p>
                    </figure>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="border-b py-12" id="services">
            <div className="mb-7 flex items-center justify-between">
              <h4 className="text-3xl font-semibold">Services</h4>
            </div>

            <div className="space-y-5">
              <div className="">
                <h4 className="mb-3 text-xl font-semibold">House Cleaning</h4>
                <p className="text-[#575757]">
                  I need assistance with installing a new kitchen tap and
                  addressing a leak at the connection between the hose and the
                  water pipe. The leak appears to be coming from the coupling,
                  which may require replacement. In addition to installing the
                  new tap, I would like the couplings and any necessary fittings
                  to be replaced to ensure a secure
                </p>
              </div>
              <div className="">
                <h4 className="mb-3 text-xl font-semibold">AC wash</h4>
                <p className="text-[#575757]">
                  I need assistance with installing a new kitchen tap and
                  addressing a leak at the connection between the hose and the
                  water pipe. The leak appears to be coming from the coupling,
                  which may require replacement. In addition to installing the
                  new tap, I would like the couplings and any necessary fittings
                  to be replaced to ensure a secure
                </p>
              </div>
              <div className="">
                <h4 className="mb-3 text-xl font-semibold">Window cleaning</h4>
                <p className="text-[#575757]">
                  I need assistance with installing a new kitchen tap and
                  addressing a leak at the connection between the hose and the
                  water pipe. The leak appears to be coming from the coupling,
                  which may require replacement. In addition to installing the
                  new tap, I would like the couplings and any necessary fittings
                  to be replaced to ensure a secure
                </p>
              </div>
            </div>
          </div>
          <div className="border-b py-12" id="reviews">
            <h4 className="text-3xl font-semibold">Reviews</h4>
            <p className="py-4 text-[#2C2C2C]">
              I need assistance with installing a new kitchen tap and addressing
              a leak at the connection between the hose and the water pipe. The
              leak appears to be coming from the coupling,{" "}
              <span className="font-semibold">
                work quality, professionalism & responsibly.
              </span>
            </p>
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h5 className="text-xl font-semibold">Average Rating: 4.4</h5>
                <RatingStar rate={4.4} className={"size-6"}></RatingStar>
                <p className="text-xl text-primary">(120 review)</p>
              </div>
              <div className="flex gap-5">
                <button className="reviewPrev rounded-[2px] border border-primary p-1">
                  <BackwardSign />
                </button>
                <button className="reviewNext rounded-[2px] border border-primary bg-primary p-1">
                  <ForwardSign />
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={true}
              loop={true}
              freeMode={true}
              navigation={{
                prevEl: `.reviewPrev`,
                nextEl: `.reviewNext`,
              }}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 430px
                650: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {Array(6)
                .fill(null)
                .map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="rounded bg-[#FFF2EB] p-4 pt-6">
                      <RatingStar rate={5} className={"size-6"} />
                      <h5 className="mb-1 mt-2 font-semibold text-[#3D3D3D]">
                        Great Work, Supper Cleaning
                      </h5>
                      <p className="text-[#575757]">
                        I need assistance with installing a new kitchen tap and
                        addressing a leak at the{" "}
                      </p>
                      <div className="divider my-4 border-b"></div>
                      <div className="flex items-center gap-2.5">
                        <figure className="size-12 overflow-hidden rounded-full">
                          <img
                            src={Reviewprofile}
                            alt=""
                            className="size-full object-cover object-center"
                          />
                        </figure>
                        <p className="font-semibold text-[#3D3D3D]">
                          Mali Lisa
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="py-12" id="faq">
            <h4 className="mb-7 text-3xl font-semibold">
              Frequently Asked Question
            </h4>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>What Services do you offer?</AccordionTrigger>
                <AccordionContent>
                  Signa Clorian is a Top Pro in house cleaning services,
                  specializing in maintaining and improving home cleanliness.
                  Services include kitchen maintenance, such as installing new
                  taps, fixing leaks, and addressing plumbing issues related to
                  loose or worn-out couplings. Additionally, Signa ensures a
                  high standard of work, making sure homes stay functional,
                  clean, and efficient.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is the starting price for services?
                </AccordionTrigger>
                <AccordionContent>
                  The starting price for services is $140, but the final cost
                  may vary depending on the complexity of the job, the materials
                  required, and the service location. For an exact quote, it is
                  recommended to check availability and discuss details
                  directly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How can I check availability?
                </AccordionTrigger>
                <AccordionContent>
                  To check availability, simply click on the &quot;Check
                  availability&apos; button on the profile page. This will allow
                  you to see open slots and schedule a service at a convenient
                  time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How quickly does Signa Clorian respond to inquiries?
                </AccordionTrigger>
                <AccordionContent>
                  Signa Clorian is known for quick response times, typically
                  replying to messages and booking requests within 10 minutes.
                  This ensures that clients receive prompt assistance and can
                  schedule services without long wait times.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I share this profile with others?
                </AccordionTrigger>
                <AccordionContent>
                  If you would like to recommend Signa Clorian to friends,
                  family, or colleagues, you can use the &quot;Share
                  Profile&quot; button on the page. This will allow you to
                  easily send the profile link via social media, email, or
                  direct messaging.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Where can I find reviews and recent work?
                </AccordionTrigger>
                <AccordionContent>
                  To see customer feedback and examples of past work, navigate
                  to the &quot;Recent Work&quot; and &quot;Reviews&quot; tabs on
                  the profile page. Here, you can find real testimonials from
                  satisfied customers and view completed projects to get a
                  better idea of service quality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="right h-full">
          <div className="sticky top-10 rounded-md bg-[#FFF2EB] px-5 py-6">
            <p className="mb-1.5 text-xl text-[#494949]">Starting price</p>
            <h2 className="mb-1.5 text-xl">$140</h2>
            <ScrollLink
              to="works"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer text-xl text-primary"
            >
              View Works
            </ScrollLink>
            <button
              type="button"
              className="my-4 block w-full rounded-md bg-primary py-3 text-center text-xl text-white font-semibold"
            >
              Connect Now
            </button>
            <div className="mb-7 flex items-center justify-center gap-1.5 border-b-2 pb-7 text-[#3D3D3D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clipPath="url(#clip0_17807_224)">
                  <path
                    d="M15.125 14.3748C14.2977 14.3748 13.625 15.0475 13.625 15.8748V16.6248H14.375V15.8748C14.375 15.4611 14.7114 15.1248 15.125 15.1248C15.5386 15.1248 15.875 15.4611 15.875 15.8748V16.2021C15.875 16.384 15.809 16.5595 15.6894 16.696L13.25 19.4841V20.3748H16.625V19.6248H14.1234L16.2541 17.1899C16.493 16.9161 16.625 16.5655 16.625 16.2021V15.8748C16.625 15.0475 15.9523 14.3748 15.125 14.3748Z"
                    fill="#3D3D3D"
                  />
                  <path
                    d="M21.125 18.4998V14.3748H20.1796L17.375 18.3816V19.2498H20.375V20.3748H21.125V19.2498H21.875V18.4998H21.125ZM20.375 18.4998H18.2079L20.375 15.4038V18.4998Z"
                    fill="#3D3D3D"
                  />
                  <path
                    d="M21.0361 12.2973C21.0909 11.8675 21.125 11.4329 21.125 10.9998C21.125 5.41676 16.583 0.874756 11 0.874756C5.417 0.874756 0.875 5.41676 0.875 10.9998C0.875 16.5828 5.417 21.1248 11 21.1248C11.4335 21.1248 11.8681 21.0906 12.2975 21.0355C13.415 22.8831 15.4377 24.1248 17.75 24.1248C21.2652 24.1248 24.125 21.265 24.125 17.7498C24.125 15.4375 22.8834 13.4148 21.0361 12.2973ZM11 20.3748C5.83063 20.3748 1.625 16.1691 1.625 10.9998C1.625 5.83038 5.83063 1.62476 11 1.62476C16.1694 1.62476 20.375 5.83038 20.375 10.9998C20.375 11.3076 20.3544 11.6155 20.3244 11.9226C20.0885 11.818 19.8463 11.7254 19.5965 11.6496C19.6134 11.4295 19.625 11.2113 19.625 10.9998C19.625 6.24401 15.7561 2.37476 11 2.37476C6.24388 2.37476 2.375 6.24401 2.375 10.9998C2.375 15.7555 6.24388 19.6248 11 19.6248C11.2119 19.6248 11.4301 19.6131 11.6499 19.5963C11.7256 19.846 11.8179 20.0883 11.9229 20.3241C11.6161 20.3541 11.3079 20.3748 11 20.3748ZM11.375 17.7498C11.375 18.1285 11.4144 18.4975 11.4781 18.8586C11.3161 18.8688 11.1564 18.8748 11 18.8748C8.96375 18.8748 7.11125 18.091 5.71175 16.8179L6.75725 15.7728L6.227 15.2425L5.1815 16.2876C3.98787 14.9755 3.23338 13.2629 3.14412 11.3748H4.625V10.6248H3.14412C3.23375 8.73663 3.98787 7.02401 5.18187 5.71188L6.22738 6.75701L6.75763 6.22676L5.71212 5.18163C7.02425 3.98763 8.73688 3.23351 10.625 3.14388V4.62476H11.375V3.14388C13.2631 3.23351 14.9757 3.98763 16.2882 5.18163L15.2428 6.22676L15.773 6.75701L16.8185 5.71188C18.0912 7.11101 18.875 8.96351 18.875 10.9998C18.875 11.1558 18.869 11.3159 18.8589 11.4779C18.4981 11.4141 18.1287 11.3748 17.75 11.3748C14.2347 11.3748 11.375 14.2345 11.375 17.7498ZM17.75 23.3748C14.6484 23.3748 12.125 20.8514 12.125 17.7498C12.125 14.6481 14.6484 12.1248 17.75 12.1248C20.8516 12.1248 23.375 14.6481 23.375 17.7498C23.375 20.8514 20.8516 23.3748 17.75 23.3748Z"
                    fill="#3D3D3D"
                  />
                  <path
                    d="M10.6255 10.8445L8.86035 12.6096L9.3906 13.1399L11.3755 11.155V6.87476H10.6255V10.8445Z"
                    fill="#3D3D3D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17807_224">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.499756)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>
                Responds in about <span className="font-semibold">10 min</span>
              </p>
            </div>
            <div className="mb-3 flex items-center gap-2.5">
              <img
                src={siteLogo}
                alt="Gold Lync site logo"
                className="size-9"
              />
              <p className="text-xl font-bold">GOLDLYNC Guarantee</p>
            </div>
            <p className="text-lg">
              If you hire this pro, you’re covered by a money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructorProfileDetails;
