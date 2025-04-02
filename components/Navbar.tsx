"use client";

import { navItems } from "@/data";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [mobile, setMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full py-1 md:py-5 flex justify-center items-center text-base-content gap-1 sm:gap-5 sm:px-10">
      <div className="md:flex hidden items-center gap-1 sm:gap-5 sm:px-10 ">
        <ThemeSelector />
        {navItems.map((item, key) => (
          <button
            key={key}
            className="btn btn-ghost btn-md md:text-lg text-base font-normal">
            <Link target={item.target} href={item.link}>
              {item.name}
            </Link>
          </button>
        ))}
      </div>

      <div
        className="md:hidden flex items-center justify-between w-full px-4 relative"
        ref={menuRef}>
        <ThemeSelector />
        <button
          className="btn btn-primary btn-md"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle menu">
          {mobile ? "Close" : "Menu"}
        </button>

        {mobile && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-base-100 shadow-lg rounded-lg z-50 overflow-hidden border border-base-300">
            <div className="py-2">
              {navItems.map((item, key) => (
                <Link
                  target={item.target}
                  className="block px-4 py-2 hover:bg-base-200 transition-colors w-full text-left"
                  key={key}
                  href={item.link}
                  onClick={() => setMobile(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
