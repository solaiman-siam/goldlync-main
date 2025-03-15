import Questionnaries from "@/components/service-questennaries/Questionnaries/Questionnaries"
import { useParams } from "react-router";


function ServiceQuestionnaries() {
  const { slug } = useParams();
  // console.log(slug);
  return (
    <div>
        <Questionnaries slug={slug}/>
    </div>
  )
}

export default ServiceQuestionnaries