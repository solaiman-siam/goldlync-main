import { useState } from "react";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";
import { recentProjectsData } from "@/utils/staticData";
import { motion } from "framer-motion";
import { Link } from "react-router";
function RecentProjects() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [recentProjects, setRecentProjects] = useState(
    recentProjectsData.tabs.filter((item) => item.name === "Home Maintenance")
  );

  const tabsMenu = [
    "Home Maintenance",
    "Home Remodeling",
    "Weddings",
    "Events",
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
    <div className="container py-24">
      <SectionTitle tagName={"h3"}>Recent Projects </SectionTitle>
      <SectionText>
        Connect with trusted professionals, set your budget, and bring your
        vision to life—all in one place.
      </SectionText>

      <div className="flex items-center justify-center space-x-4 py-4">
        {tabsMenu.map((item, index) => (
          <div
            onClick={() => handleTab(index, item)}
            className={`cursor-pointer border-b px-4 py-3 text-lg ${index === activeTabIdx ? "border-orange-500" : ""} `}
            key={item}
          >
            <h4>{item}</h4>
          </div>
        ))}
      </div>

      <motion.div
        key={activeTabIdx} // Ensure re-animation on tab switch
        initial="hidden"
        animate="visible"
        variants={gridVariants}
        className="grid grid-cols-2 gap-8 pt-10"
      >
        {recentProjects[0]?.sections?.map((projects, index) => (
          <motion.div
            key={index}
            className="transition-project"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/project-details" className="relative group transition-all duration-300 flex h-full w-full items-end justify-start overflow-hidden rounded-lg object-cover group">
              <div className="absolute z-[4] pb-4 pl-4">
                <h4 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {projects?.title}
                </h4>
                <h4 className="pt-1 text-sm font-light text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {projects?.description}
                </h4>
              </div>
              <div className="absolute z-[2] h-full w-full bg-black/40 object-cover opacity-30 group-hover:opacity-100 transition-all duration-300"></div>
              <img
                className="left-0 group-hover:scale-110 transition-all duration-300 top-0 h-full w-full object-cover"
                src={projects?.imageUrl}
                alt=""
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="pt-10 flex justify-center items-center">
        <button className="px-14 py-4 font-medium rounded-full bg-primary text-lg text-white">Join as a pro</button>
      </div>
    </div>
  );
}

export default RecentProjects;
