"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle Theme"
        className={`relative h-10 w-10 rounded-xl flex items-center justify-center border border-sky-200 bg-white text-slate-700 shadow-xs cursor-pointer ${className}`}
      >
        <span className="w-4 h-4 rounded-full bg-slate-200 animate-pulse" />
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className={`relative h-10 w-10 rounded-xl flex items-center justify-center border transition-colors cursor-pointer select-none ${
        isDark
          ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:border-slate-600"
          : "bg-white border-sky-200 text-slate-700 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300"
      } shadow-xs ${className}`}
      title={isDark ? "Beralih ke Mode Terang (Light)" : "Beralih ke Mode Gelap (Dark)"}
      aria-label="Toggle Theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center text-base pointer-events-none"
      >
        {isDark ? (
          <i className="fas fa-sun text-amber-400"></i>
        ) : (
          <i className="fas fa-moon text-slate-700"></i>
        )}
      </motion.div>
    </motion.button>
  );
}

