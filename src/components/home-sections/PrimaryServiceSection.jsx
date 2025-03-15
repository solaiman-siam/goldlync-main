import { Link } from "react-router";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  ServiceIcon6,
} from "@/assets/icons";
import { useGetAllPrimaryServices } from "@/hooks/api-hooks/service.hook";
import { Skeleton } from "../shadcn/ui/skeleton";
import { Button } from "../shadcn/ui/button";
import AllServices from "../services-sections/AllServices";

const PrimaryServiceSection = ({limit =false}) => {
  const { data, isLoading, isError } = useGetAllPrimaryServices();

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
