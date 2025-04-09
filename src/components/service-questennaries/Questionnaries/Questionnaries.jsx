import CommonSelect from "./CommonSelect";
import { Link, useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import Previews from "@/components/Previews";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/shadcn/ui/custom-dialog";
import { useGetQuestions } from "@/hooks/api-hooks/service.hook";
// import { use } from "react";
// import { Button } from "react-scroll";
import CommonInput from "./CommonInput";
import CommonMultiSelect from "./CommonMultiSelect";
import Container from "@/components/Container";
import { Button } from "@/components/shadcn/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { StateContext } from "@/context/StateContext";

function Questionnaries({ slug }) {
  const { data, isLoading, isError } = useGetQuestions(`/question/${slug}`);
  const [answers, setAnswers] = useState({});
  const [budget, setBudget] = useState("");
  const [typeofjob, setTypeofjob] = useState("");
  const [details, setDetails] = useState("");
  const [userDetails, setUserDetails] = useState({
    house_no: "",
    state: "",
    zip_code: "",
    city: "",
    phone_no_1: "",
    phone_no_2: "",
  });
  const [photo, setPhoto] = useState([]);

  const { questionnariesData, setQuestionnariesData } =
    useContext(StateContext);
  console.log("Questionnaries Data:", questionnariesData);

  const budgets = {
    options: [
      "$50 - $99",
      "$100 - $199",
      "$200 - $499",
      "$500 - $999",
      "$1,000 - $2,499",
      "$2,500 - $4,999",
      "$5,000 - $9,999",
      "$10,000+",
    ],
  };

  const handleSingleSelectAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: [value],
    }));
  };

  const handleSelectAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleUserDetailChange = (field, value) => {
    setUserDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const transformedAnswers = Object.entries(answers).map(([key, value]) => ({
      question_id: parseInt(key),
      answer: value
    }));
    console.log("Transformed Answers:", transformedAnswers);
    const formData = {
      answers: transformedAnswers,
      budget,
      typeofjob,
      details,
      ...userDetails,
      photo,
    };
    setQuestionnariesData(formData);
  };

  if (isLoading) return <div className="my-40 text-center">Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const selectData =
    data?.questions?.map((question) => ({
      id: question.id,
      label: question.title,
      type: question.type,

      options: question.options.map((option) => option.option),
    })) || [];

  return (
    <Container className="pt-3 md:pt-5 lg:pt-10">
      <SectionTitle
        tagName="h3"
        className="max-w-full text-primary md:text-left"
      >
        {data?.title} questionnaire
      </SectionTitle>
      <div className="mt-6 font-manrope md:mt-8">
        <form
          className="space-y-4 md:space-y-6 lg:space-y-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {/* Check if data is available before rendering options */}
            {selectData?.length > 0 ? (
              selectData.map((select, idx) => {
                // console.log("Select Data:", select.type);
                return (
                  <>
                    {select.type == "dropdown" ? (
                      <CommonSelect
                        key={idx}
                        options={select?.options}
                        label={select?.label}
                        id={select.id}
                        labelNum={idx + 1}
                        value={answers[select.id]?.[0] || ""}
                        onChange={(value) =>
                          handleSingleSelectAnswer(select.id, value)
                        }
                      />
                    ) : select.type == "dropdown_multiple" ? (
                      <CommonMultiSelect
                        key={idx}
                        options={select?.options}
                        label={select?.label}
                        id={select.id}
                        labelNum={idx + 1}
                        value={answers[select.id] || []} // Initialize as empty array
                        onChange={(value) =>
                          handleSelectAnswer(select.id, value)
                        }
                      />
                    ) : (
                      <CommonInput
                        key={idx}
                        label={select?.label}
                        id={select.id}
                        labelNum={idx + 1}
                        value={answers[select.id] || ""}
                        onChange={(value) =>
                          handleSelectAnswer(select.id, value)
                        }
                      />
                    )}
                  </>
                );
              })
            ) : (
              <div>No questions available</div>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <label className="text-lg font-semibold md:text-xl" htmlFor="">
                {" "}
                {selectData?.length + 1}. Budget
              </label>
              <Select onValueChange={setBudget} value={budget}>
                <SelectTrigger className="h-[52px] w-full px-4 text-left md:h-[64px]">
                  <SelectValue placeholder={"Select Budget"} />
                </SelectTrigger>
                <SelectContent>
                  {budgets.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-full flex-col gap-2 md:gap-3 lg:gap-4">
              <label className="text-lg font-semibold md:text-xl" htmlFor="">
                {" "}
                {selectData?.length + 2}. Upload Image
              </label>
              <Previews onFilesChange={setPhoto} />
            </div>
          </div>
          {/* <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData?.length + 3}. Type of job (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded border border-gray-400 px-4 py-4 focus:outline-primary"
                name="typeofjob"
                id="typeofjob"
                placeholder="Short job description"
                value={typeofjob}
                onChange={(e) => setTypeofjob(e.target.value)}
              ></input>
            </div> */}
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <label className="text-lg font-semibold md:text-xl" htmlFor="">
              {selectData?.length + 3}. Detail job description
            </label>
            <textarea
              className="h-[150px] w-full rounded border border-gray-400 px-4 py-4 text-sm focus:outline-primary md:h-[200px] md:text-base lg:h-[250px]"
              name="details"
              id="details"
              placeholder="Provide detail job description"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-1 flex-col gap-2 md:gap-3 lg:gap-4">
            <label className="text-lg font-semibold md:text-xl" htmlFor="">
              {selectData?.length + 4}. Provide your details
            </label>
            <div className="grid gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="House No."
                  value={userDetails.house_no}
                  onChange={(e) =>
                    handleUserDetailChange("house_no", e.target.value)
                  }
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="State"
                  value={userDetails.state}
                  onChange={(e) =>
                    handleUserDetailChange("state", e.target.value)
                  }
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="Zip code"
                  value={userDetails.zip_code}
                  onChange={(e) =>
                    handleUserDetailChange("zip_code", e.target.value)
                  }
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="City"
                  value={userDetails.city}
                  onChange={(e) =>
                    handleUserDetailChange("city", e.target.value)
                  }
                />
              </div>

              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="Phone Number *"
                  value={userDetails.phone_no_1}
                  onChange={(e) =>
                    handleUserDetailChange("phone_no_1", e.target.value)
                  }
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="h-[52px] w-full rounded border border-gray-400 px-4 text-sm outline-primary md:h-[64px] md:text-base"
                  placeholder="Phone Number (Optional)"
                  value={userDetails.phone_no_2}
                  onChange={(e) =>
                    handleUserDetailChange("phone_no_2", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          {/* <button
              type="submit"
              className="block w-80 rounded-full bg-primary py-4 text-center font-medium text-white"
            >
              Submit
            </button> */}
          <Dialog>
            <DialogTrigger type="submit" asChild>
              <Button className="w-60 max-w-[50%] lg:w-80">Submit</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[680px] p-8 md:p-10 lg:p-14 xl:p-20">
              <DialogHeader>
                <DialogDescription>
                  <div className="flex flex-col">
                    <h2 className="mb-6 text-center text-2xl font-bold leading-[120%] lg:text-4xl xl:mb-12">
                      Top-Rated Pros at Your Service
                    </h2>
                    <Link
                      to="/pros"
                      type="button"
                      className="mx-auto mb-3 w-full rounded-full border border-primary bg-primary py-3 text-center font-semibold text-white lg:text-lg xl:mb-6 xl:w-[80%]"
                    >
                      Choose Your Pro
                    </Link>
                    <Link
                      to="/safety-guideline"
                      type="button"
                      className="mx-auto w-full rounded-full border border-primary py-3 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:text-lg xl:w-[80%]"
                    >
                      Submit to random pro
                    </Link>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </form>
      </div>
      <div className="my-10 md:my-16 lg:my-20">
        <figure className="h-[250px] w-full overflow-hidden rounded-lg md:h-[320px] lg:h-[400px] xl:h-[450px]">
          <img
            src={`https://goldlync.softvencefsd.xyz/${data?.thumbnail}`}
            className="size-full object-cover object-center"
            alt=""
          />
        </figure>
      </div>
    </Container>
  );
}

export default Questionnaries;
