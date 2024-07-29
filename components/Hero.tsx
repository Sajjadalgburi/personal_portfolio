import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = [
    `software ${"  "} engnieer`,
    "Fullstack \ndeveloper",
    "software \ndeveloper",
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.024] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <div className=" my-5">
            <h1 className="hero_header capitalize">
              Hey I am Sajjad algburi, a <br /> <FlipWords words={words} />{" "}
              loacted in the GTA area, canada
            </h1>
          </div>
          <p className=" text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum
            quos eum neque libero qui vero numquam illum odit. Veritatis
            mollitia praesentium provident reprehenderit nam possimus quam
            officia adipisci temporibus!
          </p>

          <a href="#about"></a>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Hero;
