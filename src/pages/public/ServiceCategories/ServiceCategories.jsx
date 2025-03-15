import GetInTouchBanner from "@/components/home-sections/GetInTouchBanner"
import Categories from "@/components/service-categories/Categories"
import { useParams } from "react-router";


function ServiceCategories() {
  const { slug } = useParams();
  // console.log(slug);
  return (
    <div>
        <Categories slug={slug}/>
        <GetInTouchBanner/>
    </div>
  )
}

export default ServiceCategories