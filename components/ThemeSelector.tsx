"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const themes: { value: string; label: string }[] = [
  { value: "corporate", label: "Corporate" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "cupcake", label: "Cupcake" },
  { value: "aqua", label: "Aqua" },
  { value: "bumblebee", label: "Bumblebee" },
  { value: "luxury", label: "Luxury" },
  { value: "abyss", label: "Abyss" },
  { value: "silk", label: "Silk" },
  { value: "fantasy", label: "Fantasy" },
  { value: "retro", label: "Retro" },
];

const ThemeSelector = ({ homePage = true }: { homePage?: boolean }) => {
  // Using mounted state to handle hydration issues
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Find the current theme label
  const currentTheme = themes.find((t) => t.value === theme)?.label || "Theme";

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="w-32 h-10 rounded-sm animate-pulse" />;
  }

  return homePage ? (
    <div className="dropdown dropdown-right dropdown-center text-base-content">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm md:btn-md btn-outline m-1 gap-1 normal-case"
      >
        <span>{currentTheme}</span>
        <ArrowDown className="h-4 w-4 sm:block hidden" />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-4 shadow-lg bg-base-200 rounded-box mt-4 overflow-hidden w-80"
      >
        <div className="grid grid-cols-3 gap-2">
          {themes.map((t) => (
            <div
              key={t.value}
              className={`cursor-pointer hover:bg-base-300 p-2 rounded-md text-center text-sm ${
                theme === t.value ? "bg-base-300 font-medium" : ""
              }`}
              onClick={() => setTheme(t.value)}
            >
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-base-content">
      {themes.map((t) => (
        <div
          key={t.value}
          className={`cursor-pointer hover:bg-base-300 p-2 rounded-md text-center text-sm ${
            theme === t.value ? "bg-base-300 font-medium" : ""
          }`}
          onClick={() => setTheme(t.value)}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
