import { LocationIcon1, SearchIcon1 } from "@/assets/icons";
import { Button } from "./shadcn/ui/button";
import { CiSearch } from "react-icons/ci";

const BannerSearch = () => {
  return (
    <div>
      <div className="flex h-14 w-full items-center gap-1 rounded-full bg-white px-4 py-4 text-foreground md:h-20 md:gap-4 md:px-8">
        <input
          className="h-full w-full text-sm font-medium outline-none placeholder:text-input md:text-lg"
          placeholder="Search"
        />
        <div className="h-full border-l border-foreground" />
        <div className="flex h-full items-center gap-2">
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
      <div className="md:hidden">
        <Button className="mt-4 h-full w-full md:[&_svg]:size-6" type="submit">
          <SearchIcon1 className="text-white" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default BannerSearch;
