"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-[#070e1e] text-slate-800 dark:text-slate-100 antialiased selection:bg-sky-200 selection:text-sky-800 dark:selection:bg-sky-900 dark:selection:text-sky-200 flex flex-col transition-colors duration-200">
      <Navbar showNavLinks={true} />

      {/* Hero Section */}
      <section id="hero" className="relative bg-sky-50/70 dark:bg-[#070e1e]/70 border-b border-sky-200/80 dark:border-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center py-1.5 px-4 rounded-full bg-sky-100 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs md:text-sm font-semibold mb-6 shadow-xs"
              >
                <i className="fas fa-star text-sky-500 mr-2"></i>
                Standar Pusmendik & Asesmen Nasional
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white tracking-tight"
              >
                Portal{" "}
                <span className="text-sky-600 dark:text-sky-400">
                  TKA PPLG
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl font-normal"
              >
                Tingkatkan kompetensi keahlian Pengembangan Perangkat Lunak dan Gim
                dengan modul terstruktur dan simulasi ujian interaktif.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/dashboard"
                  className="bg-sky-500 hover:bg-sky-600 text-white py-4 px-8 rounded-xl font-bold transition-all duration-200 text-center shadow-xs"
                >
                  Mulai Belajar Sekarang
                </Link>
                <Link
                  href="#features"
                  className="bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 py-4 px-8 rounded-xl font-bold hover:bg-sky-100 dark:hover:bg-slate-800 transition-all duration-200 text-center border border-sky-300 dark:border-slate-700 shadow-xs"
                >
                  Pelajari Fitur
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center items-center mt-8 md:mt-0"
            >
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full flex items-center justify-center will-change-transform"
                  style={{ transform: "translateZ(0)" }}
                >
                  <Image
                    src="/models/PPLG.webp"
                    alt="Ilustrasi Kompetensi PPLG"
                    width={800}
                    height={800}
                    quality={100}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900/60 border-b border-sky-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Simulasi TKA Jurusan Perangkat Lunak Dan Gim
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Platform simulasi TKA yang dirancang khusus untuk mengukur pemahaman siswa pada materi keahlian PPLG.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-book-open",
                title: "Materi Lengkap",
                description:
                  "5 modul pembelajaran lengkap berstandar Pusmendik yang mencakup seluruh kompetensi keahlian PPLG.",
              },
              {
                icon: "fas fa-clipboard-check",
                title: "Simulasi Ujian HOTS",
                description:
                  "Latihan soal pilihan ganda berstandar kompetensi dengan analisis hasil dan pembahasan terstruktur.",
              },
              {
                icon: "fas fa-laptop-code",
                title: "Interaktif & Terpadu",
                description:
                  "Tampilan modern, responsif, dan mudah diakses di perangkat seluler maupun komputer.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-sky-50/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 rounded-2xl p-8 text-center transition-all duration-200 border border-sky-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md group"
              >
                <div className="text-4xl text-sky-500 dark:text-sky-400 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-sky-50 dark:bg-[#070e1e] border-b border-sky-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                Tentang Asesmen TKA PPLG
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                TKA (Tes Kemampuan Akademik) PPLG adalah asesmen yang dirancang
                untuk mengukur kesiapan dan pemahaman konsep kejuruan siswa di bidang
                Pengembangan Perangkat Lunak dan Gim sesuai standar Pusmendik Kemendikbud.
              </p>
              <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                {[
                  "Materi terkurasi berdasarkan Capaian Pembelajaran terbaru",
                  "Soal penalaran logika dan pemecahan masalah",
                  "Modul interaktif dengan rangkuman dan studi kasus",
                  "Simulasi ujian dengan perhitungan skor instan",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-200"
                  >
                    <span className="text-sky-500 dark:text-sky-400 text-base flex-shrink-0">
                      <i className="fas fa-check"></i>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-500 dark:bg-sky-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-md">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
              >
                Siap Menghadapi Asesmen TKA PPLG?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-sky-100 text-lg mb-8 leading-relaxed"
              >
                Uji pemahaman kompetensi Anda melalui modul dan simulasi ujian yang
                telah dirancang khusus untuk siswa SMK Telekomunikasi Tunas Harapan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2.5 bg-white text-sky-700 py-4 px-8 rounded-xl font-bold hover:bg-sky-50 transition-colors duration-200 shadow-xs"
                >
                  <span>Mulai Sekarang</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
