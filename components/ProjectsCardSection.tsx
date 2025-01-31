/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "@/data/index";
import Image from "next/image";

const ProjectsCardSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-12 relative">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex items-center justify-center w-full sm:w-[540px] h-auto"
        >
          <Link title="Visit Project" href={project.link || "/"}>
            <div className="flex flex-col p-4 bg-gray-300 rounded-3xl shadow-lg transition-transform transform hover:scale-105 w-[22rem] sm:w-[35rem] h-[30rem] overflow-hidden">
              {/* Background Image */}
              <div className="relative w-full md:h-3/5 overflow-hidden rounded-2xl">
                <Image
                  fill={true}
                  alt="Project Image"
                  unoptimized={true}
                  src={project.img}
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>

              {/* Project Info */}
              <div className="mt-4 px-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-400 uppercase">
                  {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="px-2 text-sm text-gray-400 mt-2 line-clamp-3">
                {project.des}
              </p>

              {/* Tech Icons & Visit Link */}
              <div className="flex justify-between items-center mt-auto px-2 pb-3">
                <div className="flex gap-2">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center rounded-full bg-gray-800 p-2 shadow-md"
                    >
                      <img
                        src={icon}
                        width={18}
                        height={18}
                        alt="Technology Used"
                        className="opacity-80 hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>

                <p className="text-blue-500 font-medium transition-colors hover:text-blue-300 cursor-pointer">
                  Visit Project →
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCardSection;
