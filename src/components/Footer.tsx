"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO_PATH = "/images/brands/logo-smk.png";
const SCHOOL_NAME = "SMK Telekomunikasi Tunas Harapan"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-200/80 text-slate-600 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="relative h-11 w-11 rounded-xl overflow-hidden flex-shrink-0 bg-transparent border-none shadow-none"
                title={SCHOOL_NAME}
              >
                <Image
                  src={LOGO_PATH}
                  alt={`Logo ${SCHOOL_NAME}`}
                  fill
                  sizes="44px"
                  quality={100}
                  className="h-full w-full object-contain"
                  priority
                // style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <span className="font-extrabold text-lg text-slate-800 tracking-tight">
                TKA PPLG
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-4 max-w-sm leading-relaxed">
              Platform pembelajaran dan asesmen interaktif berstandar Pusmendik
              Kemendikbud untuk siswa SMK Telekomunikasi Tunas Harapan.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              SMK Telekomunikasi Tunas Harapan
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/landing"
                  className="text-slate-600 hover:text-sky-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-sky-600 transition-colors"
                >
                  Dashboard Materi
                </Link>
              </li>
              <li>
                <Link
                  href="/simulasi-ujian"
                  className="text-slate-600 hover:text-sky-600 transition-colors"
                >
                  Simulasi Ujian
                </Link>
              </li>
              <li>
                <Link
                  href="/modul/1"
                  className="text-slate-600 hover:text-sky-600 transition-colors"
                >
                  Modul Materi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">
              Kompetensi Keahlian
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>Pengembangan Perangkat Lunak</li>
              <li>Pengembangan Gim (Game Dev)</li>
              <li>Basis Data & Pemrograman Web</li>
              <li>Pemrograman Berorientasi Objek</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-slate-400 text-xs">
          <p>© 2026 TKA PPLG - SMK Telekomunikasi Tunas Harapan. All rights reserved.</p>
          <p className="font-medium text-sky-600">
            Berstandar Pusmendik - Kemendikbud
          </p>
        </div>
      </div>
    </footer>
  );
}
