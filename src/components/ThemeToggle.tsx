"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line
    setIsDark(isDarkMode);
    document.body.className = `font-body bg-background text-on-background transition-colors duration-300`;
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const currentlyDark = root.classList.contains("dark");
    setIsDark(currentlyDark);
    
    document.body.className = `font-body bg-background text-on-background transition-colors duration-300`;
  };

  return (
    <button
      className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full text-on-surface-variant hover:text-on-surface transition-all"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-[20px]">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
