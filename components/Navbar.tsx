import { navItems } from "@/data";
import Link from "next/link";
import SocialLinks from "./Socials";

export function Navbar() {
  return (
    <nav className=" max-w-[20vw] md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-5 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] space-x-4 black-gradient">
      <div className="flex justify-center items-center gap-2 capitalize text-[.8rem]">
        {navItems.map((item, key) => (
          <Link target={item.target} key={key} href={item.link}>
            {item.name}
          </Link>
        ))}
        <p>|</p>
        <SocialLinks />
      </div>
    </nav>
  );
}
