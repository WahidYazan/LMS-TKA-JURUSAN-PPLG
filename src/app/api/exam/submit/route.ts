import { NextResponse } from "next/server";
import { localAnswerKeyMap } from "@/data/soal";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Format jawaban tidak valid" },
        { status: 400 }
      );
    }

    let correctCount = 0;
    const details: Record<number, { isCorrect: boolean; correctIndex: number }> = {};
    const questionIds = Object.keys(localAnswerKeyMap).map(Number);
    const totalQuestions = questionIds.length;

    questionIds.forEach((qId) => {
      const selected = answers[qId];
      const correctIdx = localAnswerKeyMap[qId];
      const isCorrect = selected !== undefined && selected === correctIdx;
      if (isCorrect) {
        correctCount++;
      }
      details[qId] = {
        isCorrect,
        correctIndex: correctIdx,
      };
    });

    const percentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

    return NextResponse.json({
      success: true,
      score: correctCount,
      totalQuestions,
      percentage: Number(percentage.toFixed(2)),
      details,
    });
  } catch (error) {
    console.error("Gagal memproses penilaian ujian:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan di server saat menghitung nilai." },
      { status: 500 }
    );
  }
}
