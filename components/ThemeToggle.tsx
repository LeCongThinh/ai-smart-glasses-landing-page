"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("visionai-theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
    >
      <Moon aria-hidden="true" className="transition-transform group-hover:-rotate-12 dark:hidden" size={18} />
      <Sun aria-hidden="true" className="hidden transition-transform group-hover:rotate-45 dark:block" size={18} />
    </button>
  );
}
