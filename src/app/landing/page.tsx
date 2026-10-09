"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-800 flex flex-col">
      <Navbar showNavLinks={true} />

      {/* Hero Section */}
      <section id="hero" className="relative bg-sky-50/70 border-b border-sky-200/80 py-16 md:py-24">
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
                className="inline-flex items-center py-1.5 px-4 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs md:text-sm font-semibold mb-6 shadow-xs"
              >
                <i className="fas fa-star text-sky-500 mr-2"></i>
                Standar Pusmendik & Asesmen Nasional
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight"
              >
                {/* Portal Belajar & Evaluasi{" "} */}
                Portal {" "}
                <span className="text-sky-600">
                  TKA PPLG
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl font-normal"
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
                  className="bg-white text-sky-700 py-4 px-8 rounded-xl font-bold hover:bg-sky-100 transition-all duration-200 text-center border border-sky-300 shadow-xs"
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
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-sm relative w-full max-w-[480px]">
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
      <section id="features" className="py-20 bg-white border-b border-sky-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {/* Kenapa Memilih TKA PPLG? */}
              Simulasi TKA Jurusan Perangkat Lunak Dan Gim
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
                className="bg-sky-50/60 hover:bg-white rounded-2xl p-8 text-center transition-all duration-200 border border-sky-200 hover:border-sky-400 hover:shadow-md group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl bg-sky-100 text-sky-600 shadow-xs group-hover:scale-105 transition-transform">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-sky-50 border-b border-sky-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Tentang Asesmen TKA PPLG
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                TKA (Tes Kemampuan Akademik) PPLG adalah asesmen yang dirancang
                untuk mengukur kesiapan dan pemahaman konsep kejuruan siswa di bidang
                Pengembangan Perangkat Lunak dan Gim sesuai standar Pusmendik Kemendikbud.
              </p>
              <ul className="space-y-4 text-slate-700">
                {[
                  "Materi terkurasi berdasarkan Capaian Pembelajaran (CP) terbaru",
                  "Soal penalaran logika dan pemecahan masalah (HOTS)",
                  "Modul interaktif dengan rangkuman dan studi kasus",
                  "Simulasi ujian dengan perhitungan skor instan",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs flex-shrink-0">
                      <i className="fas fa-check"></i>
                    </div>
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
              <div className="bg-white rounded-3xl p-8 border border-sky-200 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "5 Modul", value: "Pembelajaran Lengkap" },
                    { label: "100%", value: "Standar Pusmendik" },
                    { label: "HOTS", value: "Tipe Soal Analitis" },
                    { label: "24/7", value: "Akses Kapan Saja" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-sky-50 rounded-2xl p-6 text-center border border-sky-100"
                    >
                      <div className="text-3xl font-extrabold text-sky-600 mb-1.5">
                        {stat.label}
                      </div>
                      <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider">
                        {stat.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-md">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-sky-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Kontak & Informasi
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Informasi lebih lanjut seputar program pembelajaran dan asesmen kejuruan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-school",
                title: "Sekolah",
                content: "SMK Telekomunikasi Tunas Harapan",
              },
              {
                icon: "fas fa-envelope",
                title: "Email",
                content: "info@smktunasharapan.sch.id",
              },
              {
                icon: "fas fa-phone",
                title: "Telepon",
                content: "(021) 123-4567",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-sky-50 rounded-2xl p-8 text-center border border-sky-200 hover:bg-white hover:border-sky-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4 text-xl">
                  <i className={contact.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {contact.title}
                </h3>
                <p className="text-slate-600 text-sm">{contact.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
