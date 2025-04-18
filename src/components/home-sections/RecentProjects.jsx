import { useState } from "react";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import { recentProjectsData } from "@/utils/staticData";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Container from "../Container";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/ui/select";

function RecentProjects() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [recentProjects, setRecentProjects] = useState(
    recentProjectsData.tabs.filter((item) => item.name === "Home Improvement")
  );

  const tabsMenu = [
    "Home Improvement",
    "Cleaning",
    "Handyman",
    "Interior Painting",
  ];

  const handleTab = (index, name) => {
    setActiveTabIdx(index);
    const filteredProjects = recentProjectsData.tabs.filter(
      (item) => item.name === name
    );
    setRecentProjects(filteredProjects);
  };

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20" id="explore-projects">
        <SectionTitle tagName={"h3"} className="text-[28px] md:text-4xl">
          Explore Projects
        </SectionTitle>
        <SectionText className="text-sm md:text-lg">
          Connect with trusted professionals, set your budget, and bring your
          vision to life—all in one place.
        </SectionText>

        <div>
          <div className="md:hidden">
            <Select
              value={String(activeTabIdx)}
              onValueChange={(value) =>
                handleTab(Number(value), tabsMenu[Number(value)])
              }
            >
              <SelectTrigger className="mt-4 w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {tabsMenu.map((item, index) => (
                  <SelectItem key={item} value={String(index)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tab Menu  */}
          <div className="hidden flex-wrap items-center justify-center gap-4 py-4 md:flex">
            {tabsMenu.map((item, index) => (
              <div
                onClick={() => handleTab(index, item)}
                className={`cursor-pointer border-b px-4 py-3 text-base md:text-lg ${
                  index === activeTabIdx
                    ? "border-primary text-primary"
                    : "border-[#262627]/30 text-[#262627]"
                }`}
                key={item}
              >
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTabIdx} // Ensure re-animation on tab switch
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          className="grid gap-4 pt-6 md:pt-8 lg:pt-10 md:grid-cols-2 xl:gap-8"
        >
          {recentProjects[0]?.sections?.map((projects, index) => (
            <motion.div
              key={index}
              className="transition-project"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/project-details"
                className="group relative flex h-full w-full items-end justify-start overflow-hidden rounded-lg object-cover transition-all duration-300"
              >
                <div className="absolute z-[4] pb-4 pl-4">
                  <h4 className="text-xl font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {projects?.title}
                  </h4>
                  <h4 className="pt-1 text-sm font-light text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {projects?.description}
                  </h4>
                </div>
                <div className="absolute z-[2] h-full w-full bg-black/40 object-cover opacity-30 transition-all duration-300 group-hover:opacity-100"></div>
                <img
                  className="left-0 top-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  src={projects?.imageUrl}
                  alt=""
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="flex items-center justify-center pt-16">
        <Link to="/pro-register" className="rounded-full bg-primary px-14 py-4 text-lg font-medium text-white">
          Join as a pro
        </Link>
      </div> */}
      </div>
    </Container>
  );
}

export default RecentProjects;
