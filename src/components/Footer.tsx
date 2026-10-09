"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO_PATH = "/images/brands/logo-smk.png";
const SCHOOL_NAME = "SMK Telekomunikasi Tunas Harapan";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-sky-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 py-12 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center"
                title={SCHOOL_NAME}
              >
                <Image
                  src={LOGO_PATH}
                  alt={`Logo ${SCHOOL_NAME}`}
                  fill
                  sizes="44px"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-extrabold text-lg text-slate-800 dark:text-slate-100 tracking-tight">
                TKA PPLG
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 max-w-sm leading-relaxed">
              Platform pembelajaran dan asesmen interaktif berstandar Pusmendik
              Kemendikbud untuk siswa SMK Telekomunikasi Tunas Harapan.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              SMK Telekomunikasi Tunas Harapan
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-sm uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/landing"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Dashboard Materi
                </Link>
              </li>
              <li>
                <Link
                  href="/simulasi-ujian"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Simulasi Ujian
                </Link>
              </li>
              <li>
                <Link
                  href="/modul/1"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Modul Materi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-sm uppercase tracking-wider">
              Kompetensi Keahlian
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>Pengembangan Perangkat Lunak</li>
              <li>Pengembangan Gim (Game Dev)</li>
              <li>Basis Data & Pemrograman Web</li>
              <li>Pemrograman Berorientasi Objek</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-slate-400 dark:text-slate-500 text-xs">
          <p>© 2026 TKA PPLG - SMK Telekomunikasi Tunas Harapan. All rights reserved.</p>
          <p className="font-medium text-sky-600 dark:text-sky-400">
            Berstandar Pusmendik - Kemendikbud
          </p>
        </div>
      </div>
    </footer>
  );
}
