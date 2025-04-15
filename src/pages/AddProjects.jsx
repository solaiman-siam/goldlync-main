import Previews3 from "@/components/Previews3";
import { Button } from "@/components/shadcn/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useState } from "react";

const AddProjects = () => {
  const [category, setCategory] = useState("");

  const subCategories = ["cleaning", "handyman"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
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
          <label className="text-lg font-semibold md:text-xl" htmlFor="">
            Category of Work
          </label>
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="h-[52px] w-full px-4 text-left md:h-[64px]">
              <SelectValue placeholder={"Select Category"} />
            </SelectTrigger>
            <SelectContent>
              {subCategories.map((option) => (
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
        <Previews3 customHeight="h-[300px]" />
        <div className="mt-5 grid grid-cols-2 gap-10">
          <div className="left">
            <fieldset className="flex flex-col space-y-3">
              <label htmlFor="before" className="text-xl font-semibold">
                Before Work
              </label>
              <textarea
                type="text"
                name="before"
                className="h-[150px] rounded border px-6 py-4"
                placeholder="A description before your work"
              />
            </fieldset>
            <h2 className="my-3 text-xl font-semibold">
              Upload a image before your work
            </h2>
            <Previews3 />
          </div>
          <div className="right">
            <fieldset className="flex flex-col space-y-3">
              <label htmlFor="after" className="text-xl font-semibold">
                After Work
              </label>
              <textarea
                type="text"
                name="after"
                className="h-[150px] rounded border px-6 py-4"
                placeholder="A description after your work"
              />
            </fieldset>
            <h2 className="my-3 text-xl font-semibold">
              Upload a image after your work
            </h2>
            <Previews3 />
          </div>
        </div>
        <Button type="submit" className="mt-8">
          Add Project
        </Button>
      </form>
    </>
  );
};

export default AddProjects;
