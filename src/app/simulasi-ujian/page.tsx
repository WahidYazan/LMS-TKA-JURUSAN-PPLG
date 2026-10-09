"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { examQuestionsList, ExamQuestion } from "@/data/soal";

export default function SimulasiUjian() {
  const [examQuestions] = useState<ExamQuestion[]>(examQuestionsList);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [resultDetails, setResultDetails] = useState<Record<number, { isCorrect: boolean; correctIndex: number }>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQ = examQuestions[currentQuestion];
  const qId = currentQ?.id ?? (currentQuestion + 1);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: optionIndex,
    });
  };

  const submitExam = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/exam/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: selectedAnswers }),
      });
      const data = await res.json();
      if (data.success) {
        setScore(data.score);
        setPercentage(data.percentage);
        if (data.details) {
          setResultDetails(data.details);
        }
      } else {
        const count = Object.keys(selectedAnswers).length;
        setScore(count);
        setPercentage((count / examQuestions.length) * 100);
      }
    } catch {
      setScore(0);
      setPercentage(0);
    } finally {
      setIsSubmitting(false);
      setShowResults(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      submitExam();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setPercentage(0);
    setResultDetails({});
  };

  if (showResults) {
    let message = "";
    let messageColor = "";
    let emoji = "";

    if (percentage >= 80) {
      message = "Luar Biasa! Anda sangat memahami materi PPLG.";
      messageColor = "text-sky-600 dark:text-sky-400";
      emoji = "🎉";
    } else if (percentage >= 60) {
      message = "Bagus! Terus tingkatkan pemahaman Anda.";
      messageColor = "text-sky-600 dark:text-sky-400";
      emoji = "👍";
    } else {
      message = "Perlu belajar lagi. Jangan menyerah!";
      messageColor = "text-amber-600 dark:text-amber-400";
      emoji = "💪";
    }

    return (
      <div className="min-h-screen bg-sky-50 dark:bg-[#070e1e] text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
        <Navbar showNavLinks={true} />
        <div className="container mx-auto px-4 py-8 md:py-12 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-sky-200 dark:border-slate-800 p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hasil Simulasi Ujian TKA
              </motion.h1>

              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="text-7xl md:text-8xl font-extrabold text-sky-500 dark:text-sky-400 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  {score}/{examQuestions.length}
                </motion.div>
                <motion.p
                  className="text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {percentage.toFixed(0)}%
                </motion.p>
                <motion.div
                  className={`text-2xl ${messageColor} font-medium flex items-center justify-center gap-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-4xl">{emoji}</span>
                  {message}
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {examQuestions.map((q, index) => {
                  const detail = resultDetails[q.id];
                  const isCorrect = detail ? detail.isCorrect : false;
                  const correctOptionText =
                    detail && detail.correctIndex !== undefined
                      ? q.options[detail.correctIndex]
                      : null;

                  return (
                    <motion.div
                      key={q.id}
                      className={`p-4 md:p-6 rounded-xl border-2 ${isCorrect
                        ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
                        : "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
                        <span className="text-slate-500 dark:text-slate-400 mr-2">
                          {index + 1}.
                        </span>
                        {q.question}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                        <span className="font-medium">Jawaban Anda:</span>{" "}
                        {q.options[selectedAnswers[q.id]] || "Tidak dijawab"}
                      </p>
                      {!isCorrect && correctOptionText && (
                        <motion.p
                          className="text-sm text-emerald-700 dark:text-emerald-400 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 + index * 0.05 }}
                        >
                          <span className="font-medium">Jawaban Benar:</span>{" "}
                          {correctOptionText}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <motion.button
                  onClick={handleRestart}
                  className="bg-sky-500 hover:bg-sky-600 text-white py-4 px-8 rounded-xl transition-colors font-bold shadow-xs cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ulangi Simulasi
                </motion.button>
                <Link
                  href="/dashboard"
                  className="bg-white dark:bg-slate-900 border border-sky-300 dark:border-slate-700 text-sky-700 dark:text-sky-300 py-4 px-8 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors font-bold text-center"
                >
                  Kembali ke Dashboard
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const question = examQuestions[currentQuestion];
  const progress = examQuestions.length > 0 ? ((currentQuestion + 1) / examQuestions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-[#070e1e] text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar showNavLinks={true} />
      <div className="container mx-auto px-4 py-8 md:py-12 flex-1">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-sky-200 dark:border-slate-800 p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-semibold">
                  Soal {currentQuestion + 1} dari {examQuestions.length}
                </span>
                <span className="text-sm md:text-base font-bold text-sky-600 dark:text-sky-400">
                  {progress.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden border border-sky-100 dark:border-slate-700">
                <motion.div
                  className="bg-sky-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-8 leading-relaxed">
                  {question.question}
                </h2>

                <div className="space-y-3.5 mb-8">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden cursor-pointer ${selectedAnswers[qId] === index
                        ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/50 shadow-xs"
                        : "border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50/30 dark:hover:bg-slate-800/40"
                        }`}
                      whileHover={{ scale: 1.01, x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="relative z-10 flex items-center">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-sm ${selectedAnswers[qId] === index
                            ? "bg-sky-500 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-slate-700 dark:text-slate-200 font-medium">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="bg-white dark:bg-slate-900 border border-sky-300 dark:border-slate-700 text-sky-700 dark:text-sky-300 py-3 px-6 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>←</span>
                Sebelumnya
              </button> */}
              {/* <button
                onClick={handleNext}
                disabled={selectedAnswers[qId] === undefined || isSubmitting}
                className="bg-sky-500 text-white py-3 px-6 rounded-xl hover:bg-sky-600 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs ml-auto cursor-pointer"
              >
                {isSubmitting
                  ? "Menghitung Nilai..."
                  : currentQuestion === examQuestions.length - 1
                    ? "Selesai & Kumpulkan"
                    : "Selanjutnya"}
                <span>→</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-4xl mx-auto flex flex-row justify-between gap-3"
        >
          <Link
            href="/dashboard"
            className="flex-1 md:flex-none bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-slate-700 py-3 px-3 md:px-6 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors font-semibold flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap"
          >
            <span>←</span>
            <span className="hidden sm:inline">Kembali ke Dashboard</span>
            <span className="sm:hidden">Dashboard</span>
          </Link>
          <Link
            href="/modul/5"
            className="flex-1 md:flex-none bg-sky-500 hover:bg-sky-600 text-white py-3 px-3 md:px-6 rounded-xl transition-colors font-semibold flex items-center justify-center gap-2 shadow-xs text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <span className="sm:hidden">Selanjutnya</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
