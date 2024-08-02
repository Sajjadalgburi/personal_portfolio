import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  const words = ["software engineer", "fullstack developer"];

  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <div className="my-5">
            <h1 className="hero_header capitalize">
              Hey, I am Sajjad Algburi, a <br /> <FlipWords words={words} />
              located in Canada
            </h1>
          </div>
          <p className="text-center text-[.7rem] sm:text-[1.2rem] leading-relaxed text-blue-100">
            I craft dynamic and responsive websites using modern web
            technologies to deliver seamless digital experiences.
          </p>

          <a href="#about" className="mt-10">
            <HoverBorderGradient>Learn More</HoverBorderGradient>
          </a>
        </div>
      </div>

      <div className="relative flex justify-end">
        <a href="#experiance">
          <p className="text-[4px] sm:text-[8px] uppercase text-blue-100">
            Scroll Down ↓
          </p>
        </a>
      </div>
      <div className="sm:flex hidden absolute left-[60%] top-[34rem] lg:left-[71%] lg:top-[29rem]">
        <h3 className="pointer-events-none text-[7rem] opacity-[0.05] font-extrabold text-center p-3 capitalize ">
          &quot;Scroll&quot;
        </h3>
      </div>
    </section>
  );
};

export default Hero;
