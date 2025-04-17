import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("auth_token");

      try {
        const response = await axios.get(
          "https://goldlync.softvencefsd.xyz/api/project/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Portfolio</p>
      </div>

      <div className="mb-[160px]">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Completed Projects</p>
          <Link
            to="/constructor-profile/add-project"
            type="button"
            className="inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M0.819336 22.2002L1.10427 20.7755L2.16022 15.4958L15.9629 1.69309L16.9099 0.746094L17.8569 1.69309L21.3222 5.15842L22.2734 6.10961L21.3264 7.05661L7.52373 20.8593L2.24402 21.9152L0.819336 22.2002ZM6.86167 19.6232L17.5007 8.98831L14.0354 5.52298L3.39634 16.1578L2.52896 20.4905L6.86167 19.6232ZM18.4477 8.04132L20.3752 6.10961L16.9099 2.64428L14.9782 4.57179L18.4435 8.03713L18.4477 8.04132Z"
                fill="#262627"
              />
            </svg>
            Add Projects
          </Link>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center my-20">Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-x-7 gap-y-8">
            {projects.map((item, index) => (
              <Link
                to={"/project-details"}
                state={{ data: item }}
                key={index}
                className="rounded-md border bg-[#FFF2EB] p-4"
              >
                <figure className="mb-4 h-[160px] w-full overflow-hidden rounded-sm">
                  <img
                    src={`https://goldlync.softvencefsd.xyz/${item.banner}`}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
                <div className="space-y-[11px]">
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-sm text-[#494949]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
