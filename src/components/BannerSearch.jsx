import { useRef, useState } from "react";
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

  const cancelTokenRef = useRef(null);

  const handleValueChange = async (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);

    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Operation canceled due to new request");
    }

    cancelTokenRef.current = axios.CancelToken.source();

    if (!newSearchValue.trim()) {
      setResponseValues([]);
      setServiceValues([]);
      setSubServiceValues([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://goldlync.softvencefsd.xyz/api/search/all?search=${newSearchValue}`,
        {
          headers: { "Content-Type": "application/json" },
          cancelToken: cancelTokenRef.current.token,
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
      if (axios.isCancel(error)) {
        console.log("Request cancelled:", error.message);
      } else {
        console.error("Error:", error.response?.data?.message);
        toast.error(
          error.response?.data?.message || "Search failed! Please try again."
        );
      }
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
          <Link to="/services">
            <Button className="h-full md:[&_svg]:size-6" type="submit">
              <SearchIcon1 className="text-white" />
              <span>Search</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Search Button */}
      <div className="md:hidden">
        <Link to="/services">
          <Button
            className="mt-3 h-full w-full md:[&_svg]:size-6"
            type="submit"
          >
            <SearchIcon1 className="text-white" />
            <span>Search</span>
          </Button>
        </Link>
      </div>

      {/* Popup Below Search */}
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full z-50 mt-2 w-full"
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="rounded-[28px] bg-white shadow-lg md:rounded-[40px]">
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
              <div className="min-h-14 p-4 text-left md:min-h-20 md:p-8">
                <div className="max-h-[60vh] overflow-auto lg:max-h-[500px]">
                  <div className="">
                    <p className="text-lg font-semibold text-primary md:text-xl">
                      Service
                    </p>
                    {serviceValues?.length === 0 ? (
                      <p className="text-center text-sm text-black md:text-base">
                        {" "}
                        No Service Found
                      </p>
                    ) : (
                      <div className="mt-2 flex flex-col md:mt-4">
                        {serviceValues?.map((item, idx) => (
                          <Link
                            to={`/service-subcategories/${item.slug}`}
                            className="mr-2 rounded-md py-1.5 pl-4 text-sm font-semibold text-gray-800 transition-colors duration-200 hover:bg-primary hover:text-white md:py-2 md:text-base"
                            key={idx}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-3 md:mt-6">
                    <p className="text-lg font-semibold text-primary md:text-xl">
                      Sub Service
                    </p>
                    {subServiceValues?.length === 0 ? (
                      <p className="text-center text-sm text-black md:text-base">
                        {" "}
                        No Sub Service Found
                      </p>
                    ) : (
                      <div className="mt-2 flex flex-col md:mt-4">
                        {subServiceValues?.map((item, idx) => (
                          <Link
                            to={`/service-questionnaries/${item.slug}`}
                            className="mr-2 rounded-md py-1.5 pl-4 text-sm font-semibold text-gray-800 transition-all duration-300 hover:bg-primary hover:text-white md:py-2 md:text-base"
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
