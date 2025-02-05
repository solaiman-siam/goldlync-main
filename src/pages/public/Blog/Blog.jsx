import Container from "@/components/Container";
import SectionText from "@/components/SectionText";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { Link } from "react-router";

const Blog = () => {
  return (
    <section className="my-[80px]">
      <SectionTitle tagName="h3" className={"mb-9"}>
        Blogs
      </SectionTitle>
      <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-x-6 gap-y-9">
          {Array(9)
            .fill(null)
            .map((_, idx) => (
              <Link
                to="/blog-details"
                className="card rounded-lg border p-3"
                key={idx}
              >
                <figure className="h-[220px] w-full overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co.com/J83jd1f/image-8.png"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
                <div className="flex items-center gap-3 py-4">
                  <div className="h-5 w-5 rounded-full bg-primary"></div>
                  <h4 className="text-lg text-primary">
                    Artificial Intelligence
                  </h4>
                </div>
                <p className="mb-3 text-xl font-medium text-[#1B1B1F]">
                  How to Write Articles with AI? Include Your Unique Perspective
                </p>
                <div className="flex items-center gap-2 text-[#1B1B1F]">
                  <p>Oct 19</p>
                  <div className="size-2 rounded-full bg-black"></div>
                  <p>10 min read</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </section>
  );
};

export default Blog;
