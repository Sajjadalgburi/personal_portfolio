import React from "react";
import SocialLinks from "./Socials";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Footer = () => {
  return (
    <footer id="contact" className="relative sm:mb-[20rem] pb-20 pt-36 h-96">
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.2] absolute -top-[40%] left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"></div>
      </div>

      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="body_header">SOME FOOTER TITLE HERE</h1>
          <p className=" text-sm text-center max-w-4xl w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            accusantium laborum dolores velit in asperiores quae doloribus, cum
            alias doloremque hic nihil? Ipsa iusto quod maiores accusamus fugiat
            excepturi. Ad!
          </p>

          <HoverBorderGradient>Learn More</HoverBorderGradient>
          <div className="flex justify-between items-center w-full px-4 sm:mt-[12rem] mb-10">
            <p>Copyright © 2024 Sajjad Alguri</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
