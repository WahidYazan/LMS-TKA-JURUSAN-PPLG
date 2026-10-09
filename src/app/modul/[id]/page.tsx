"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { moduleData } from "@/data/materi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

function ModuleContent() {
  const params = useParams();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const moduleId = rawId ? parseInt(rawId) : 1;

  const module = moduleData[moduleId];
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (!module) {
    notFound();
  }

  const sections = module.sections || [];

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar showNavLinks={true} />
      <div className="container mx-auto px-4 py-8 md:py-12 flex-1 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 font-semibold group text-sm"
          >
            <motion.span
              className="mr-2"
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              ←
            </motion.span>
            Kembali ke Dashboard
          </Link>
        </motion.div>

        {/* Module Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-sky-200 p-8 md:p-12 mb-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                <span className="text-4xl md:text-5xl">{module.icon}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-5xl md:text-6xl font-extrabold text-sky-500 block leading-none mb-1">
                  {moduleId.toString().padStart(2, "0")}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800">
                  {module.title}
                </h1>
              </div>
            </motion.div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              {module.description}
            </p>
          </div>
        </motion.div>

        {/* Module Sections Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xs overflow-hidden border border-sky-200"
            >
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full p-6 md:p-7 text-left flex items-center justify-between hover:bg-sky-50/50 transition-colors cursor-pointer"
              >
                <h2 className="text-lg md:text-xl font-bold text-slate-800">
                  {section.title}
                </h2>
                <motion.div
                  animate={{ rotate: expandedSections.has(sectionIndex) ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedSections.has(sectionIndex) ? "auto" : 0,
                  opacity: expandedSections.has(sectionIndex) ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-7 pb-6 md:pb-7 space-y-6 border-t border-sky-100 pt-5">
                  {section.content?.map((content, contentIndex) => (
                    <div key={contentIndex}>
                      {content.heading && (
                        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                          {content.heading}
                        </h3>
                      )}
                      <ul className="space-y-2.5">
                        {content.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed"
                          >
                            <span className="text-sky-500 mr-2.5 mt-0.5 font-bold">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-between gap-4"
        >
          {moduleId > 1 && (
            <Link
              href={`/modul/${moduleId - 1}`}
              className="bg-white text-sky-700 border border-sky-300 py-3.5 px-6 rounded-xl hover:bg-sky-50 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <span>←</span>
              Modul Sebelumnya
            </Link>
          )}
          {moduleId < 5 && (
            <Link
              href={`/modul/${moduleId + 1}`}
              className="bg-sky-500 text-white py-3.5 px-6 rounded-xl hover:bg-sky-600 transition-colors font-semibold flex items-center justify-center gap-2 ml-auto shadow-xs"
            >
              Modul Selanjutnya
              <span>→</span>
            </Link>
          )}
          {moduleId === 5 && (
            <Link
              href="/simulasi-ujian"
              className="bg-sky-500 text-white py-3.5 px-6 rounded-xl hover:bg-sky-600 transition-colors font-semibold flex items-center justify-center gap-2 ml-auto shadow-xs"
            >
              Lanjut ke Simulasi Ujian
              <span>🚀</span>
            </Link>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function ModulePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-sky-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">Memuat modul pembelajaran...</p>
          </div>
        </div>
      }
    >
      <ModuleContent />
    </Suspense>
  );
}
