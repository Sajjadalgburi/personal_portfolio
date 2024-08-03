import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSectionText = () => {
  const words = ["software engineer", "fullstack developer"];

  return (
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
          I craft dynamic and responsive websites using modern web technologies
          to deliver seamless digital experiences.
        </p>

        <a href="#about" className="mt-10">
          <HoverBorderGradient>Learn More</HoverBorderGradient>
        </a>
      </div>
    </div>
  );
};

export default HeroSectionText;
