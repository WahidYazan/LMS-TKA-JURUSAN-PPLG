"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modulesList = [
  {
    id: 1,
    title: "Wawasan Dunia Kerja",
    description: "Profesi dan kewirausahaan PPLG, manajemen proyek software, dan budaya mutu.",
    icon: "💼",
  },
  {
    id: 2,
    title: "K3LH & Lingkungan Kerja",
    description: "Keselamatan, kesehatan kerja, lingkungan hidup, dan regulasi K3 di industri TI.",
    icon: "🦺",
  },
  {
    id: 3,
    title: "Konsep Dasar Pemrograman",
    description: "Logika pemrograman, tipe data, algoritma, flowchart, dan sintaks kode.",
    icon: "💻",
  },
  {
    id: 4,
    title: "Pemrograman Berorientasi Objek (OOP)",
    description: "Pilar OOP: Encapsulation, Inheritance, Polymorphism, dan Abstraction.",
    icon: "🧱",
  },
  {
    id: 5,
    title: "Basis Data & Rekayasa Web",
    description: "Perancangan database relasional (SQL), operasi CRUD, dan arsitektur REST API.",
    icon: "🗄️",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-[#070e1e] text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar showNavLinks={true} />

      {/* Dashboard Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Welcome Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sky-200 dark:border-slate-800 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-bold rounded-full mb-3">
                LMS TKA PPLG SMK TTH
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                Selamat Datang di <span className="text-sky-600 dark:text-sky-400">Dashboard TKA PPLG!</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm sm:text-base max-w-2xl">
                Akses langsung seluruh materi modul kejuruan dan latihan simulasi soal ujian Asesmen Nasional tanpa batas.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/simulasi-ujian"
                className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-xl font-bold text-sm shadow-xs transition-colors flex items-center gap-2"
              >
                <i className="fas fa-play"></i>
                <span>Mulai Simulasi Ujian</span>
              </Link>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Link
              href="/simulasi-ujian"
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xs border border-sky-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl text-sky-500 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-lg">
                    Simulasi Ujian HOTS
                  </h3>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold">10 Soal Interaktif</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Latihan soal berbasis kompetensi PPLG dengan penilaian otomatis dan pembahasan jawaban setelah ujian selesai.
              </p>
            </Link>

            <Link
              href="/modul/1"
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xs border border-sky-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl text-sky-500 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-lg">
                    Materi Pembelajaran Lengkap
                  </h3>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold">5 Modul Berstandar Pusmendik</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Materi disusun sistematis untuk mempersiapkan siswa SMK Telekomunikasi Tunas Harapan menghadapi ujian kejuruan.
              </p>
            </Link>
          </div>

          {/* Daftar 5 Modul Pembelajaran */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sky-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Daftar Modul Pembelajaran</h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  Pilih modul di bawah ini untuk langsung membaca materi
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modulesList.map((m) => (
                <Link
                  key={m.id}
                  href={`/modul/${m.id}`}
                  className="p-5 rounded-2xl border border-sky-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md transition-all bg-sky-50/30 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {m.icon}
                      </span>
                      <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-sky-200 dark:border-slate-700">
                        Modul {m.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-base mb-2">
                      {m.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {m.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sky-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400">
                    <span>Pelajari Materi</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
