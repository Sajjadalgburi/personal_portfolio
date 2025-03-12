/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "@/data/index";
import { div } from "three/webgpu";

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
            <div className="flex flex-col p-4 bg-base-100/90 space-y-4 rounded-3xl shadow-lg transition-transform transform hover:scale-[1.02] w-[22rem] sm:w-[35rem] h-[25rem] sm:h-[30rem] overflow-hidden">
              {/* Background Image */}
              <div className="relative w-full h-1/2 md:h-3/5 overflow-hidden rounded-2xl">
                <img
                  alt="Project Image"
                  src={project.img}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="mt-4 px-2">
                <h3 className="text-lg md:text-2xl font-semibold">
                  {project.role}
                </h3>
                <p className="text-sm  uppercase">{project.title}</p>
              </div>

              {/* Description */}
              <p className="px-2 text-xs md:text-sm mt-2 line-clamp-3">
                {project.des}
              </p>

              {/* Tech Icons & Visit Link */}
              <div className="flex flex-col gap-2 md:flex-row justify-between items-center mt-9 px-2 pb-3">
                <div className="flex gap-1 md:gap-2">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center rounded-full bg-gray-800 p-2 shadow-md"
                    >
                      <img
                        alt="Technology Used"
                        src={icon}
                        className="w-4 h-4 md:w-6 md:h-6"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end items-center gap-1 md:gap-2">
                  <button className="btn btn-md btn-accent">Click Card</button>
                  {project.github && (
                    <button className="btn btn-md bg-black">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit GitHub"
                      >
                        <img
                          width={18}
                          height={18}
                          alt="GitHub link logo"
                          src={"/github.svg"}
                        />
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
