import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data/index";

const MyExperiance = () => {
  return (
    <section id="projects" className="mt-10">
      <h1 className="body_header">
        My work <span className="gradient_color">Experiance</span>
      </h1>

      <div className="flex-wrap flex items-center justify-center gap-y-2 gap-x-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[540px] w-[100vw] "
          >
            <PinContainer title="visit" href="https://twitter.com/mannupaaji">
              <div className="flex flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[30rem] ">
                {/* Bg image */}
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

                {/* rest of the card content */}
                <h3 className="max-w-xs my-4 font-bold text-base text-slate-100">
                  Aceternity UI
                </h3>
                <div className="text-base font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>

                <div className="flex justify-between">
                  <p>teck</p>
                  <p>hey</p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExperiance;
