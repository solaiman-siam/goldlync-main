import { LocationIcon1, SearchIcon1 } from "@/assets/icons";
import { Button } from "./shadcn/ui/button";

const BannerSearch = () => {
  return (
    <div className="flex h-20 w-full items-center gap-4 rounded-full bg-white px-8 py-4 text-foreground">
      <input
        className="h-full w-full text-base font-medium outline-none placeholder:text-input md:text-lg"
        placeholder="Search"
      />
      <div className="h-full border-l border-foreground" />
      <div className="flex h-full items-center gap-2">
        <LocationIcon1 />
        <input className="w-full font-semibold placeholder:text-foreground outline-none" type="number" placeholder="Zip Code" />
      </div>
      <Button className="h-full [&_svg]:size-6" type="submit">
        <SearchIcon1 className="text-white" />
        <span>Search</span>
      </Button>
    </div>
  );
};

export default BannerSearch;
