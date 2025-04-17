import Previews3 from "@/components/Previews3";
import { Button } from "@/components/shadcn/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddProjects = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState();
  const [banner, setBanner] = useState();
  const [before_work_image, setBefore_work_image] = useState();
  const [after_work_image, setAfter_work_image] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log(banner);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://goldlync.softvencefsd.xyz/api/project/subcategory"
        );
        const data = await response.json();
        setSubCategory(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const projectData = {
      description: data.description,
      after_work_image,
      before_work_image,
      banner,
      name: data.title,
      before_work: data.before,
      after_work: data.after,
      sub_category: category,
    };

    try {
      const response = await axios.post(
        `https://goldlync.softvencefsd.xyz/api/project/store`,
        projectData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );
      toast.success("Form submitted successfully");
      e.target.reset();
      setCategory("");
      setBanner(null);
      setBefore_work_image(null);
      setAfter_work_image(null);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        Object.values(errors).forEach((errArray) => {
          errArray.forEach((errMsg) => toast.error(errMsg));
        });
      } else {
        toast.error("Something went wrong while submitting the form");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold text-[#262627]">Add Project</p>
      </div>
      <form className="text-[#262627]" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col space-y-3">
          <label htmlFor="title" className="text-xl font-semibold">
            Name of Work
          </label>
          <input
            type="text"
            name="title"
            className="rounded border px-6 py-4"
            placeholder="Name here"
          />
        </fieldset>
        <fieldset className="mt-5 flex flex-col space-y-3">
          <label htmlFor="description" className="text-xl font-semibold">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            className="h-[200px] rounded border px-6 py-4"
            placeholder="Write a description about your work"
          />
        </fieldset>

        <div className="mt-5 flex flex-col space-y-3">
          <label className="text-lg font-semibold md:text-xl">
            Category of Work
          </label>
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="h-[52px] w-full px-4 text-left md:h-[64px]">
              <SelectValue placeholder={"Select Category"} />
            </SelectTrigger>
            <SelectContent>
              {subCategory?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <h2 className="mb-3 mt-5 text-xl font-semibold">
          Upload a banner image of your work
        </h2>
        <Previews3
          customAspect="aspect-[1436/600]"
          img={banner}
          setImg={setBanner}
          text="1436*600"
        />
        <div className="mt-5 grid grid-cols-2 gap-10">
          <div className="left">
            <fieldset className="flex flex-col space-y-3">
              <label htmlFor="before" className="text-xl font-semibold">
                Before Work
              </label>
              <textarea
                type="text"
                name="before"
                className="h-[250px] rounded border px-6 py-4"
                placeholder="A description before your work"
              />
            </fieldset>
            <h2 className="my-3 text-xl font-semibold">
              Upload a image before your work
            </h2>
            <Previews3
              customAspect="aspect-[698/450]"
              img={before_work_image}
              setImg={setBefore_work_image}
              text="698*450"
            />
          </div>
          <div className="right">
            <fieldset className="flex flex-col space-y-3">
              <label htmlFor="after" className="text-xl font-semibold">
                After Work
              </label>
              <textarea
                type="text"
                name="after"
                className="h-[250px] rounded border px-6 py-4"
                placeholder="A description after your work"
              />
            </fieldset>
            <h2 className="my-3 text-xl font-semibold">
              Upload a image after your work
            </h2>
            <Previews3
              customAspect="aspect-[698/450]"
              img={after_work_image}
              setImg={setAfter_work_image}
              text="698*450"
            />
          </div>
        </div>
        {isLoading ? (
          <Button type="submit" className="mt-8 min-w-40" disabled>
            <Loader2 />
          </Button>
        ) : (
          <Button type="submit" className="mt-8 min-w-40">
            Add Project
          </Button>
        )}
      </form>
    </>
  );
};

export default AddProjects;
