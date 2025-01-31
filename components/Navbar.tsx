import { navItems } from "@/data";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex justify-center items-center gap-1 sm:gap-5 sm:px-10">
      {navItems.map((item, key) => (
        <Link
          target={item.target}
          className="p-2 text-xs md:text-xl hover:underline-offset-1 sm:uppercase font-semi-bold rounded-lg hover:bg-white-100  transition-colors"
          key={key}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
