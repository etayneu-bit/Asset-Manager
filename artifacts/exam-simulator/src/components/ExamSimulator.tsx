import { useState } from "react";
import { Exercise, upperBodyExercises, lowerBodyExercises } from "../data/exercises";
import { ExamCard } from "./ExamCard";

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function ExamSimulator() {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [examStarted, setExamStarted] = useState(false);

  const canStart =
    upperBodyExercises.length >= 2 && lowerBodyExercises.length >= 2;

  function startExam() {
    const upper = pickRandom(upperBodyExercises, 2);
    const lower = pickRandom(lowerBodyExercises, 2);
    const combined = [...upper, ...lower].sort(() => Math.random() - 0.5);
    setSelectedExercises(combined);
    setExamStarted(true);
  }

  function resetExam() {
    setSelectedExercises([]);
    setExamStarted(false);
  }

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 mb-2">
              <span className="text-3xl">🏋️</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight" dir="rtl">
              סימולטור מבחן
            </h1>
            <p className="text-zinc-400 text-lg" dir="rtl">
              קורס הכשרת מדריכי כושר
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl p-6 text-right space-y-3" dir="rtl">
            <h2 className="text-white font-semibold text-base">מה קורה במבחן?</h2>
            <ul className="text-zinc-400 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5">›</span>
                <span>2 תרגילים מהגוף העליון ייבחרו באקראי</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">›</span>
                <span>2 תרגילים מהגוף התחתון ייבחרו באקראי</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">›</span>
                <span>לכל תרגיל יש 5 שאלות לענות בכתב</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">›</span>
                <span>לאחר מכן תוכל לבדוק את עצמך מול הפתרון</span>
              </li>
            </ul>
          </div>

          {!canStart && (
            <p className="text-rose-400 text-sm" dir="rtl">
              נדרשים לפחות 2 תרגילים בכל קטגוריה להתחלת מבחן.
            </p>
          )}

          <button
            onClick={startExam}
            disabled={!canStart}
            className="w-full py-4 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg transition-all duration-150 shadow-lg shadow-indigo-900/40"
          >
            התחל סימולציית מבחן
          </button>

          <p className="text-zinc-600 text-xs" dir="rtl">
            כל לחיצה תבחר קבוצת תרגילים שונה באקראי
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={resetExam}
            className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            חזור לדף הבית
          </button>
          <div className="text-right" dir="rtl">
            <h1 className="text-white font-bold text-xl">סימולציית מבחן</h1>
            <p className="text-zinc-500 text-sm">4 תרגילים נבחרו</p>
          </div>
        </div>

        <div className="grid gap-6">
          {selectedExercises.map((exercise, index) => (
            <ExamCard key={exercise.id} exercise={exercise} index={index} />
          ))}
        </div>

        <div className="pt-4 pb-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={startExam}
            className="py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm transition-colors border border-zinc-600"
          >
            🔀 בחר תרגילים חדשים
          </button>
          <button
            onClick={resetExam}
            className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
          >
            ← חזור לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
}
