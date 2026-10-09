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
      messageColor = "text-sky-600";
      emoji = "🎉";
    } else if (percentage >= 60) {
      message = "Bagus! Terus tingkatkan pemahaman Anda.";
      messageColor = "text-sky-600";
      emoji = "👍";
    } else {
      message = "Perlu belajar lagi. Jangan menyerah!";
      messageColor = "text-amber-600";
      emoji = "💪";
    }

    return (
      <div className="min-h-screen bg-sky-50 flex flex-col">
        <Navbar showNavLinks={true} />
        <div className="container mx-auto px-4 py-8 md:py-12 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium group"
            >
              <motion.span
                className="mr-2"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ←
              </motion.span>
              Kembali ke Dashboard
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center"
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
                  className="text-7xl md:text-8xl font-extrabold text-sky-500 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  {score}/{examQuestions.length}
                </motion.div>
                <motion.p
                  className="text-3xl font-semibold text-gray-700 mb-2"
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
                      className={`p-4 md:p-6 rounded-xl border-2 ${
                        isCorrect
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-rose-50 border-rose-200"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="font-semibold text-slate-800 mb-3">
                        <span className="text-slate-500 mr-2">
                          {index + 1}.
                        </span>
                        {q.question}
                      </p>
                      <p className="text-sm text-slate-600 mb-2">
                        <span className="font-medium">Jawaban Anda:</span>{" "}
                        {q.options[selectedAnswers[q.id]] || "Tidak dijawab"}
                      </p>
                      {!isCorrect && correctOptionText && (
                        <motion.p
                          className="text-sm text-emerald-700 font-medium"
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
                  className="bg-sky-500 text-white py-4 px-8 rounded-xl hover:bg-sky-600 transition-colors font-bold shadow-xs cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ulangi Simulasi
                </motion.button>
                <Link
                  href="/dashboard"
                  className="bg-white border border-sky-300 text-sky-700 py-4 px-8 rounded-xl hover:bg-sky-50 transition-colors font-bold text-center"
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
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar showNavLinks={true} />
      <div className="container mx-auto px-4 py-8 md:py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 font-semibold group"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-sky-200 p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm md:text-base text-slate-600 font-semibold">
                  Soal {currentQuestion + 1} dari {examQuestions.length}
                </span>
                <span className="text-sm md:text-base font-bold text-sky-600">
                  {progress.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-sky-100">
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
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                  {question.question}
                </h2>

                <div className="space-y-3.5 mb-8">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden cursor-pointer ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-sky-500 bg-sky-50/70 shadow-xs"
                          : "border-slate-200 hover:border-sky-300 hover:bg-sky-50/30"
                      }`}
                      whileHover={{ scale: 1.01, x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="relative z-10 flex items-center">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-sm ${
                            selectedAnswers[currentQuestion] === index
                              ? "bg-sky-500 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-slate-700 font-medium">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="bg-white border border-sky-300 text-sky-700 py-3 px-6 rounded-xl hover:bg-sky-50 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>←</span>
                Sebelumnya
              </button>
              <button
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
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
