"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-[#070e1e] flex items-center justify-center p-4 text-center transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-900 rounded-3xl border border-sky-200 dark:border-slate-800 p-8 md:p-12 shadow-sm max-w-lg mx-auto"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-extrabold text-sky-500 dark:text-sky-400 mb-2 leading-none"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white mb-3">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-base">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-3.5 px-7 rounded-xl font-bold shadow-xs transition-colors"
        >
          <span>←</span>
          Kembali ke Dashboard
        </Link>
      </motion.div>
    </div>
  );
}
