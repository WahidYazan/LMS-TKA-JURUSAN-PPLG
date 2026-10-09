"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO_PATH = "/images/brands/TTH.webp";
const SCHOOL_NAME = "SMK Telekomunikasi Tunas Harapan";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-sky-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UBAH DISINI: pakai flex justify-between, jangan grid 4 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          {/* KIRI */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-xl border-slate-200/60 flex items-center justify-center p-1.5 overflow-hidden">
                <Image
                  src={LOGO_PATH}
                  alt={`Logo ${SCHOOL_NAME}`}
                  width={80}
                  height={80}
                  quality={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-lg text-slate-800 dark:text-slate-100 tracking-tight">
                TKA PPLG
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              Platform pembelajaran dan asesmen interaktif berstandar Pusmendik
              Kemendikbud untuk siswa SMK Telekomunikasi Tunas Harapan.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              SMK Telekomunikasi Tunas Harapan
            </p>
          </div>

          {/* KANAN - INI KUNCINYA */}
          <div className="md:ml-auto flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-sm uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/landing"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors"
                >
                  Dashboard Materi
                </Link>
              </li>
              <li>
                <Link
                  href="/simulasi-ujian"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors"
                >
                  Simulasi Ujian
                </Link>
              </li>
              <li>
                <Link
                  href="/modul/1"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors"
                >
                  Modul Materi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-slate-400 dark:text-slate-500 text-xs">
          {/* <p>© {new Date().getFullYear()} TKA PPLG - SMK Telekomunikasi Tunas Harapan. All rights reserved.</p> */}
          <p>
            © 2026 TKA PPLG - SMK Telekomunikasi Tunas Harapan. All rights
            reserved.
          </p>
          {/* <div>
            <a
              href="mailto:info@tunasharapan.info"
              className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm font-medium"
            >
              info@tunasharapan.info
            </a>
          </div> */}
          <p className="font-medium text-sky-600 dark:text-sky-400">
            Berstandar Pusmendik - Kemendikbud
          </p>
        </div>

      </div>
    </footer>
  );
}
