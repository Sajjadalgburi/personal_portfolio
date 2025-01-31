/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";

const Hero = () => {
  const words = ["software engineer", "fullstack developer"];

  return (
    <section className=" sm:my-0 my-[4rem] sm:min-h-screen flex items-center justify-center px-4 sm:px-10">
      <div className="flex flex-row items-center gap-10 w-full max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col gap-4">
          <p className="uppercase tracking-widest text-[7px] sm:text-xs text-gray-500">
            Dynamic Web Magic with Next.js
          </p>

          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight">
            Hey, I am Sajjad Algburi, a <br className="hidden sm:block" />
            <FlipWords words={words} /> located in Canada
          </h1>

          <p className="text-xs hidden sm:flex sm:text-lg text-gray-700 leading-relaxed">
            I craft dynamic and responsive websites using modern web
            technologies to deliver seamless digital experiences.
          </p>

          <div className="sm:mt-2 flex justify-center">
            <Button
              className="bg-white-200 text-sm sm:text-base md:text-lg"
              asChild
            >
              <Link href="#about">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            alt="Me Picture"
            src="/me_pic_flower.jpg"
            className="w-[250px] sm:w-[350px] lg:w-[500px] h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
