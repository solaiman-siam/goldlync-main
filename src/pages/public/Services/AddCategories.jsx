import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

const AddCategories = ({sectionTitle="Add your service here", title="Selected Services", data, placeholder="Select Service"}) => {
  const defaultServices = [
    "Handy man",
    "Cleaning",
    "Home Improvement & Repair",
    "Automotive service",
    "Pet care",
    "Catering",
  ];
  const services = data? data : defaultServices;

  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectService = (service) => {
    setSelectedServices((prevSelectedServices) => {
      if (!prevSelectedServices.includes(service)) {
        return [...prevSelectedServices, service];
      }
      return prevSelectedServices;
    });
  };

  const removeService = (serviceToRemove) => {
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.filter((service) => service !== serviceToRemove)
    );
  };

  return (
    <>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
        {sectionTitle}
      </h2>
      <Select onValueChange={handleSelectService}>
        <SelectTrigger className="w-full px-4 py-8">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {services.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedServices.length > 0 && (
        <div className="">
          <h2 className="mb-4 mt-8 text-xl font-semibold text-[#222]">
            {title}
          </h2>
          <div className="space-y-4">
            {selectedServices.map((service, idx) => {
              return (
                <div className="relative" key={idx}>
                  <p className="w-full rounded border p-4 text-[#494949]">
                    {service}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeService(service)}
                    className="block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <g clipPath="url(#clip0_17982_15248)">
                        <path
                          d="M15.3817 10.916C15.0195 10.916 14.726 11.2096 14.726 11.5718V23.9652C14.726 24.3271 15.0195 24.6209 15.3817 24.6209C15.7439 24.6209 16.0374 24.3271 16.0374 23.9652V11.5718C16.0374 11.2096 15.7439 10.916 15.3817 10.916ZM7.64402 10.916C7.28185 10.916 6.98828 11.2096 6.98828 11.5718V23.9652C6.98828 24.3271 7.28185 24.6209 7.64402 24.6209C8.00625 24.6209 8.29975 24.3271 8.29975 23.9652V11.5718C8.29975 11.2096 8.00625 10.916 7.64402 10.916Z"
                          fill="#F87171"
                        />
                        <path
                          d="M2.00301 9.10735V25.2633C2.00301 26.2183 2.35317 27.115 2.96484 27.7584C3.26603 28.0776 3.62913 28.3321 4.03196 28.5063C4.4348 28.6805 4.86891 28.7707 5.30779 28.7715H17.7146C18.1535 28.7708 18.5876 28.6805 18.9904 28.5063C19.3933 28.3321 19.7564 28.0776 20.0575 27.7584C20.6693 27.115 21.0194 26.2183 21.0194 25.2633V9.10735C22.2353 8.7846 23.0232 7.60991 22.8606 6.36224C22.6977 5.11477 21.6349 4.18166 20.3767 4.1814H17.0194V3.36173C17.0213 3.0205 16.9553 2.68231 16.8254 2.36677C16.6956 2.05123 16.5043 1.76464 16.2627 1.52363C16.0211 1.28265 15.734 1.09207 15.4181 0.96297C15.1022 0.833866 14.7638 0.768806 14.4226 0.771569H8.59985C8.25859 0.768797 7.92019 0.833853 7.60429 0.962958C7.28839 1.09206 7.00128 1.28264 6.75965 1.52363C6.51809 1.76464 6.32681 2.05123 6.19692 2.36677C6.06703 2.68231 6.00111 3.0205 6.003 3.36173V4.1814H2.64576C1.38753 4.18166 0.324782 5.11477 0.161832 6.36224C-0.000790671 7.60991 0.787077 8.7846 2.00301 9.10735ZM17.7146 27.46H5.30785C4.18668 27.46 3.31448 26.4969 3.31448 25.2633V9.16499H19.7079V25.2633C19.7079 26.4969 18.8358 27.46 17.7146 27.46ZM7.31447 3.36173C7.31233 3.19267 7.34417 3.0249 7.40811 2.86838C7.47204 2.71187 7.56677 2.56979 7.68667 2.45058C7.80652 2.33131 7.94911 2.23732 8.10597 2.17418C8.26284 2.11105 8.43078 2.08005 8.59985 2.08304H14.4226C14.5917 2.08005 14.7596 2.11105 14.9165 2.17418C15.0733 2.23732 15.2159 2.33131 15.3358 2.45058C15.4557 2.56978 15.5504 2.71186 15.6143 2.86838C15.6782 3.0249 15.7101 3.19267 15.7079 3.36173V4.1814H7.31447V3.36173ZM2.64576 5.49287H20.3768C21.0287 5.49287 21.5571 6.02133 21.5571 6.67319C21.5571 7.32506 21.0287 7.85352 20.3768 7.85352H2.6457C1.99383 7.85352 1.46537 7.32506 1.46537 6.67319C1.46537 6.02133 1.99389 5.49287 2.64576 5.49287Z"
                          fill="#F87171"
                        />
                        <path
                          d="M11.5112 10.916C11.149 10.916 10.8555 11.2096 10.8555 11.5718V23.9652C10.8555 24.3271 11.149 24.6209 11.5112 24.6209C11.8734 24.6209 12.1669 24.3271 12.1669 23.9652V11.5718C12.1669 11.2096 11.8734 10.916 11.5112 10.916Z"
                          fill="#F87171"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17982_15248">
                          <rect
                            width="22.8594"
                            height="28"
                            fill="white"
                            transform="translate(0.140625 0.046875)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AddCategories;
