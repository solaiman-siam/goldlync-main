import CommonSelect from "./CommonSelect";
import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
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
import { use } from "react";
import { Button } from "react-scroll";

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

  const budgets = {
    options: [
      "$100 - $250",
      "$250 - $500",
      "$500 - $1000",
      "$1000 - $2000",
      "$2000 - $5000",
      "$5000+",
    ],
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
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      answers,
      budget,
      typeofjob,
      details,
      userDetails,
      photo,
    };

    navigate("/user-job-details", { state: formData });

    // console.log("Form Data:", formData);
  };

  if (isLoading) return <div className="my-40 text-center">Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const selectData =
    data?.questions?.map((question) => ({
      id: question.id,
      label: question.title,
      options: question.options.map((option) => option.option),
    })) || [];

  return (
    <div>
      <div className="container py-24">
        <h3 className="text-left font-manrope text-4xl font-bold">
          {data?.title} questionnaire
        </h3>
        <div className="pt-12 font-manrope">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Check if data is available before rendering options */}
              {selectData?.length > 0 ? (
                selectData.map((select, idx) => (
                  <CommonSelect
                    key={select.id}
                    options={select?.options}
                    label={select?.label}
                    id={select.id}
                    labelNum={idx + 1}
                    value={answers[select.id] || ""}
                    onChange={(value) => handleSelectAnswer(select.id, value)}
                  />
                ))
              ) : (
                <div>No questions available</div>
              )}
            </div>
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData?.length + 1}. Budget
                </label>
                <Select onValueChange={setBudget} value={budget}>
                  <SelectTrigger className="w-full px-4 py-8">
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
              <div className="flex flex-1 flex-col gap-3">
                <label className="text-xl font-semibold" htmlFor="">
                  {" "}
                  {selectData?.length + 2}. Upload Image
                </label>
                <Previews onFilesChange={setPhoto} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData?.length + 3}. Type of job
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
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData?.length + 4}. Provide detail job description
              </label>
              <textarea
                className="h-[250px] w-full rounded border border-gray-400 px-4 py-4 focus:outline-primary"
                name="details"
                id="details"
                placeholder="Detail job description"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label className="text-xl font-semibold" htmlFor="">
                {" "}
                {selectData?.length + 5}. Provide your details
              </label>
              <div className="grid grid-cols-3 gap-x-5 gap-y-6">
                <div className="">
                  <input
                    type="text"
                    className="h-[64px] w-full rounded border px-4 outline-primary"
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
                    className="h-[64px] w-full rounded border px-4 outline-primary"
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
                    className="h-[64px] w-full rounded border px-4 outline-primary"
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
                    className="h-[64px] w-full rounded border px-4 outline-primary"
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
                    className="h-[64px] w-full rounded border px-4 outline-primary"
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
                    className="h-[64px] w-full rounded border px-4 outline-primary"
                    placeholder="Phone Number (Optional)"
                    value={userDetails.phone_no_2}
                    onChange={(e) =>
                      handleUserDetailChange("phone_no_2", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="block w-80 rounded-full bg-primary py-4 text-center font-medium text-white"
            >
              Submit
            </button>
            {/* <Dialog>
              <DialogTrigger
                type="submit"
                className="block w-80 rounded-full bg-primary py-4 text-center font-medium text-white"
              >
                Submit
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <div className="flex flex-col p-20">
                      <h2 className="mb-12 text-center text-4xl font-bold leading-[120%]">
                        Top-Rated Pros at Your <br /> Service
                      </h2>
                      <Link
                        to="/pros"
                        type="button"
                        className="mx-auto mb-6 w-[80%] rounded-full border border-primary bg-primary py-3 text-center text-lg font-semibold text-white"
                      >
                        Choose Your Pro
                      </Link>
                      <Link
                        to="/safety-guideline"
                        type="button"
                        className="mx-auto w-[80%] rounded-full border border-primary py-3 text-center text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        Submit to random pro
                      </Link>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog> */}
          </form>

          <div className="mt-24">
            <figure className="h-[500px] w-full overflow-hidden rounded-lg">
              <img
                src={`https://goldlync.softvencefsd.xyz/${data?.thumbnail}`}
                className="size-full object-cover object-center"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaries;
