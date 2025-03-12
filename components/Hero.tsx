/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import CustomSection from "./CustomSection";

const Hero = () => {
  const words = ["software engineer", "fullstack developer"];

  return (
    <CustomSection className="py-8 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 w-full max-w-7xl mx-auto px-4">
        {/* Left Content */}
        <div className="text-center md:text-left flex flex-col gap-4 md:gap-6 w-full md:w-3/5">
          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-base-content/70 font-medium">
            Dynamic Web Magic with Next.js
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hey, I am Sajjad Algburi, a{" "}
            <span className="block md:inline mt-1 md:mt-0">
              <FlipWords words={words} />
            </span>
            <span className="block md:inline mt-1 md:mt-0">
              located in Canada
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-base-content/70 max-w-2xl">
            I craft dynamic and responsive websites using modern web
            technologies to deliver seamless digital experiences.
          </p>

          <div className="mt-4 md:mt-6 flex justify-center md:justify-start items-center gap-4">
            <button className="btn btn-md capitalize btn-primary">
              <Link
                href="https://www.linkedin.com/in/sajjadalgburi/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                Connect with me
              </Link>
            </button>
            <button className="btn btn-md capitalize btn-outline">
              <Link href="#experience">View my work</Link>
            </button>
            <button className="btn btn-md capitalize btn-accent">
              <Link href="https://teal-charlot-41.tiiny.site/" target="_blank">
                my resume
              </Link>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"></div>
            <img
              alt="Sajjad Algburi"
              src="/me_pic_flower.jpg"
              className="relative w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Hero;
