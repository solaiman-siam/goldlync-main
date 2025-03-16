import { Link } from "react-router";
import { Button } from "../shadcn/ui/button";
import AllServices from "../services-sections/AllServices";

const PrimaryServiceSection = () => {

  return (
    <section className="mb-20">
      <div className="text-center">
        <AllServices cardLimit="6" lineClamp="line-clamp-2"/>
        <Button asChild>
          <Link to="services">View All</Link>
        </Button>
      </div>
    </section>
  );
};

export default PrimaryServiceSection;
