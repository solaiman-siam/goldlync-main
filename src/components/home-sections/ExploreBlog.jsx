import Container from "../Container";
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
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          <SectionTitle tagName={"h3"} className="text-[24px] md:text-4xl">
            Explore Blog
          </SectionTitle>
          <SectionText className="text-sm md:text-lg">
            Connect with trusted professionals, set your budget, and bring your
            vision to life—all in one place.
          </SectionText>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={gridVariants}
            className="grid gap-4 xl:gap-8 md:grid-cols-2 lg:grid-cols-3 pt-6 md:pt-8 lg:pt-10"
          >
            {Array(6)
              .fill(null)
              .map((_, idx) => (
                <Link
                  to="/blog-details"
                  className="card rounded-lg border bg-white p-3"
                  key={idx}
                >
                  <figure className="h-[180px] xl:h-[220px] w-full overflow-hidden rounded-lg">
                    <img
                      src="https://i.ibb.co.com/J83jd1f/image-8.png"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </figure>
                  <div className="flex items-center gap-1.5 xl:gap-3 py-2 xl:py-4">
                    <div className="size-3 xl:size-5 rounded-full bg-primary"></div>
                    <h4 className="text-base text-primary lg:text-lg">
                      Artificial Intelligence
                    </h4>
                  </div>
                  <p className="mb-2 md:mb-3 font-medium text-[#1B1B1F] xl:text-xl">
                    How to Write Articles with AI? Include Your Unique
                    Perspective
                  </p>
                  <div className="flex items-center gap-2 text-[#1B1B1F] text-sm md:text-base">
                    <p>Oct 19</p>
                    <div className="size-2 rounded-full bg-black"></div>
                    <p>10 min read</p>
                  </div>
                </Link>
              ))}
          </motion.div>

          <div className="flex items-center justify-center pt-6 md:pt-10 xl:pt-14">
            <Link
              to="/blogs"
              className="rounded-full bg-primary px-14 py-2 text-lg font-medium text-white md:py-4"
            >
              See More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExploreBlog;
