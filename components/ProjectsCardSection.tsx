/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "@/data/index";

export default function ProjectsCardSection() {
  return (
    <div className="flex flex-wrap items-center text-base-content bg-base-300 justify-center gap-8 xl:gap-12 relative">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex items-center justify-center w-full sm:w-[540px] h-auto"
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Project"
            href={project.link || "/"}
          >
            <div className="flex flex-col p-4 bg-base-100/90 rounded-3xl shadow-lg transition-transform transform hover:scale-[1.02] w-[22rem] sm:w-[35rem] h-[25rem] sm:h-[30rem] overflow-hidden">
              {/* Background Image */}
              <div className="relative w-full h-2/5 md:h-3/5 overflow-hidden rounded-2xl">
                <img
                  alt="Project Image"
                  src={project.img}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container - using flex-1 to take remaining space */}
              <div className="flex flex-col flex-1 justify-between">
                {/* Project Info */}
                <div className="mt-3 px-2">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    {project.role}
                  </h3>
                  <p className="text-sm uppercase">{project.title}</p>
                </div>

                {/* Description - ensure it's always visible */}
                <div className="px-2 py-2 flex-grow">
                  <p className="text-xs md:text-sm line-clamp-3">
                    {project.des}
                  </p>
                </div>

                {/* Tech Icons & Visit Link - fixed at bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-2 mt-auto">
                  <div className="flex gap-1 md:gap-2 flex-wrap justify-center sm:justify-start">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center rounded-full bg-gray-800 p-2 shadow-md"
                      >
                        <img
                          alt="Technology Used"
                          src={icon}
                          className="w-4 h-4 md:w-5 md:h-5"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center sm:justify-end items-center gap-1 md:gap-2 w-full sm:w-auto">
                    <button className="btn btn-sm sm:btn-md btn-accent">
                      Click Card
                    </button>
                    {project.github && (
                      <button className="btn btn-sm sm:btn-md bg-black">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Visit GitHub"
                        >
                          <img
                            width={16}
                            height={16}
                            alt="GitHub link logo"
                            src={"/github.svg"}
                          />
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
