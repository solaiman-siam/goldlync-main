import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router";
function ExploreBlog() {
  const gridVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#FFF2EB]">
      <div className="container py-24">
        <SectionTitle tagName={"h3"}>Explore Blog</SectionTitle>
        <SectionText>
          Connect with trusted professionals, set your budget, and bring your
          vision to life—all in one place.
        </SectionText>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          className="grid grid-cols-3 gap-8 pt-10"
        >
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <Link
                to="/blog-details"
                className="card rounded-lg border p-3 bg-white"
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
        </motion.div>

        <div className="flex items-center justify-center pt-16">
          <Link
            to="/blogs"
            className="rounded-full bg-primary px-14 py-4 text-lg font-medium text-white"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExploreBlog;
