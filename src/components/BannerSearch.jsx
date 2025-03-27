import { useState } from "react";
import { scroller } from "react-scroll";
import { LocationIcon1, SearchIcon1 } from "@/assets/icons";
import { Button } from "./shadcn/ui/button";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

const BannerSearch = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [responseValues, setResponseValues] = useState([]);
  const [serviceValues, setServiceValues] = useState([]);
  const [subServiceValues, setSubServiceValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("BannerSearch -> searchValue", searchValue);

  const handleValueChange = async (e) => {
    setSearchValue(e.target.value);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://goldlync.softvencefsd.xyz/api/search/all?search=${e.target.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseValues(response.data.data);
      const services = response.data.data.filter(
        (item) => item?.type === "Category"
      );
      setServiceValues(services);
      const subServices = response.data.data.filter(
        (item) => item?.type === "SubCategory"
      );
      setSubServiceValues(subServices);
    } catch (error) {
      console.error("Error:", error.response?.data?.message);
      const errorMessage =
        error.response?.data?.message || "Login failed! Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = () => {
    scroller.scrollTo("searchScrollElement", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -20,
    });
    setIsPopupOpen(true);
  };

  return (
    <div className="relative w-full">
      <div className="flex h-14 w-full items-center gap-2 rounded-full bg-white px-4 py-4 text-foreground md:h-20 md:gap-4 md:pl-8">
        <input
          className="h-full w-full text-sm font-semibold outline-none placeholder:text-foreground md:text-lg"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={() => setIsPopupOpen(false)}
          value={searchValue}
          onChange={handleValueChange}
        />
        <div className="h-full border-l border-foreground" />
        <div className="flex items-center gap-2">
          <LocationIcon1 />
          <input
            className="w-full text-sm font-semibold outline-none placeholder:text-foreground md:text-lg"
            type="number"
            placeholder="Zip Code"
          />
        </div>

        <div className="hidden md:block">
          <Button className="h-full md:[&_svg]:size-6" type="submit">
            <SearchIcon1 className="text-white" />
            <span>Search</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Button */}
      <div className="md:hidden">
        <Button className="mt-3 h-full w-full md:[&_svg]:size-6" type="submit">
          <SearchIcon1 className="text-white" />
          <span>Search</span>
        </Button>
      </div>

      {/* Popup Below Search */}
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full z-50 mt-2 w-full"
        >
          <div className="rounded-[24px] md:rounded-[40px] bg-white shadow-lg">
            {searchValue == "" ? (
              <div className="flex min-h-14 flex-col items-center justify-center gap-2 md:min-h-20">
                <p className="text-sm text-gray-800 md:text-lg">
                  Suggested results will appear here ...
                </p>
              </div>
            ) : isLoading ? (
              <div className="flex min-h-14 flex-col items-center justify-center gap-2 md:min-h-20">
                <p className="text-sm text-gray-800 md:text-lg">Loading ...</p>
              </div>
            ) : (
              <div className="min-h-14 p-8 text-left md:min-h-20">
                <div className="max-h-[500px] overflow-auto">
                  <div className="">
                    <p className="text-xl font-semibold text-primary">
                      Service
                    </p>
                    {serviceValues?.length === 0 ? (
                      <p className="text-center text-black"> No Data Found</p>
                    ) : (
                      <div className="mt-4 flex flex-col">
                        {serviceValues?.map((item, idx) => (
                          <Link
                            className="rounded-md py-2 pl-4 mr-2 font-semibold text-gray-800 transition-all duration-300 hover:bg-primary hover:text-white"
                            key={idx}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <p className="text-xl font-semibold text-primary">
                      Sub Service
                    </p>
                    {serviceValues?.length === 0 ? (
                      <p className="text-center text-black"> No Data Found</p>
                    ) : (
                      <div className="mt-4 flex flex-col">
                        {subServiceValues?.map((item, idx) => (
                          <Link
                            className="rounded-md py-2 pl-4 mr-2 font-semibold text-gray-800 transition-all duration-300 hover:bg-primary hover:text-white"
                            key={idx}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BannerSearch;
