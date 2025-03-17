import { Link } from "react-router";
import { Button } from "../shadcn/ui/button";
import AllServices from "../services-sections/AllServices";

const PrimaryServiceSection = () => {

  return (
    <section className="pb-12 md:pb-16 lg:pb-20">
      <div className="text-center">
        <AllServices cardLimit="6" lineClamp="line-clamp-2"/>
        <Button asChild className="mt-6 md:mt-10 xl:mt-14">
          <Link to="services">View All</Link>
        </Button>
      </div>
    </section>
  );
};

export default PrimaryServiceSection;
