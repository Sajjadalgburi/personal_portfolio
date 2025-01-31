import React from "react";
import SocialLinks from "./Socials";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { footerData } from "@/data";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mb-[16rem] sm:mb-[20rem] pb-20 pt-36 h-96"
    >
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.02] absolute -top-[40%] left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"></div>
      </div>

      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="md:text-7xl text-4xl">{footerData.title}</h1>
          <p className="text-base text-center max-w-4xl font-extralight w-full tracking-wider capitalize">
            {footerData.desc}
          </p>

          <Button size={"lg"}>
            <Link href="https://teal-charlot-41.tiiny.site/" target="_blank">
              Learn More About me
            </Link>
          </Button>

          <p className="text-center text-xs font-medium">
            Copyright © 2024 Sajjad Algburi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
