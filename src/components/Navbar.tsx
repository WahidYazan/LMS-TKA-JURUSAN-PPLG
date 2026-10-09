"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LOGO_PATH = "/images/brands/TTH.webp";
const FALLBACK_ABBR = "STH";
const SCHOOL_NAME = "SMK Telekomunikasi Tunas Harapan";

export interface NavbarProps {
  showNavLinks?: boolean;
  showAuthButtons?: boolean;
  showUserInfo?: boolean;
  userName?: string | null;
  userEmail?: string | null;
  userImage?: string | null;
  onLogout?: () => void;
}

export default function Navbar({ showNavLinks = true }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-sky-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Brand */}
          <Link href="/landing" className="flex items-center gap-3.5 group">
            <motion.div
              className="flex items-center gap-3.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="relative h-11 w-11 rounded-xl overflow-hidden flex-shrink-0 bg-transparent border-none shadow-none"
                title={SCHOOL_NAME}
              >
                {!logoError ? (
                  <Image
                    src={LOGO_PATH}
                    alt={`Logo ${SCHOOL_NAME}`}
                    fill
                    sizes="44px"
                    quality={100}
                    className="object-contain p-0"
                    priority
                    onError={() => setLogoError(true)}
                    style={{ mixBlendMode: "multiply" }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-sky-500 text-white font-extrabold text-sm">
                    {FALLBACK_ABBR}
                  </div>
                )}
              </div>

              <div>
                <span className="block font-extrabold text-slate-800 text-lg leading-tight tracking-tight group-hover:text-sky-600 transition-colors">
                  TKA PPLG
                </span>
                <span className="block text-xs text-slate-500 font-medium line-clamp-1">
                  {SCHOOL_NAME}
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          {showNavLinks && (
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/landing"
                className="text-slate-600 hover:text-sky-600 font-semibold text-sm transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/dashboard"
                className="text-slate-600 hover:text-sky-600 font-semibold text-sm transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/modul/1"
                className="text-slate-600 hover:text-sky-600 font-semibold text-sm transition-colors"
              >
                Modul Materi
              </Link>
              <Link
                href="/simulasi-ujian"
                className="text-slate-600 hover:text-sky-600 font-semibold text-sm transition-colors"
              >
                Simulasi
              </Link>
            </div>
          )}

          {/* Right Section CTA Button */}
          <motion.div
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="bg-sky-500 hover:bg-sky-600 text-white py-2.5 px-5 rounded-xl text-sm font-bold shadow-xs transition-all flex items-center gap-2"
            >
              <i className="fas fa-play text-xs"></i>
              <span>Mulai Ujian</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              <i
                className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
              ></i>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-sky-100 bg-white"
          >
            {showNavLinks && (
              <div className="flex flex-col gap-2 mb-4">
                <Link
                  href="/landing"
                  className="text-slate-700 hover:text-sky-600 font-semibold py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beranda
                </Link>
                <Link
                  href="/dashboard"
                  className="text-slate-700 hover:text-sky-600 font-semibold py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/modul/1"
                  className="text-slate-700 hover:text-sky-600 font-semibold py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Modul Materi
                </Link>
                <Link
                  href="/simulasi-ujian"
                  className="text-slate-700 hover:text-sky-600 font-semibold py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Simulasi
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
