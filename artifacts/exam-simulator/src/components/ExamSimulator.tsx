import { useState } from "react";
import { Exercise, upperBodyExercises, lowerBodyExercises } from "../data/exercises";
import { OpenEndedCard } from "./OpenEndedCard";
import { MultipleChoiceCard } from "./MultipleChoiceCard";

type ExamMode = "open" | "multiple_choice";

function pickRandom<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

export function ExamSimulator() {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [examMode, setExamMode] = useState<ExamMode>("open");
  const [examStarted, setExamStarted] = useState(false);

  const canStart = upperBodyExercises.length >= 2 && lowerBodyExercises.length >= 2;

  function startExam(mode: ExamMode) {
    const upper = pickRandom(upperBodyExercises, 2);
    const lower = pickRandom(lowerBodyExercises, 2);
    const combined = [...upper, ...lower].sort(() => Math.random() - 0.5);
    setSelectedExercises(combined);
    setExamMode(mode);
    setExamStarted(true);
  }

  function resetExam() {
    setSelectedExercises([]);
    setExamStarted(false);
  }

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 py-12 safe-top safe-bottom">
        <div className="max-w-sm w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 mb-1">
              <span className="text-3xl">🏋️</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight" dir="rtl">
              סימולטור מבחן
            </h1>
            <p className="text-zinc-500 text-base" dir="rtl">
              קורס הכשרת מדריכי כושר
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl p-5 space-y-3" dir="rtl">
            <h2 className="text-zinc-300 font-semibold text-sm">מה קורה בכל מבחן?</h2>
            <ul className="text-zinc-500 text-sm space-y-2">
              {[
                { color: "text-indigo-400", text: "2 תרגילים מהגוף העליון ייבחרו באקראי" },
                { color: "text-emerald-400", text: "2 תרגילים מהגוף התחתון ייבחרו באקראי" },
                { color: "text-amber-400", text: "5 שאלות לכל תרגיל" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`${item.color} mt-0.5`}>›</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {!canStart && (
            <p className="text-red-400 text-sm text-center" dir="rtl">
              נדרשים לפחות 2 תרגילים בכל קטגוריה.
            </p>
          )}

          <div className="space-y-3">
            <button
              onClick={() => startExam("open")}
              disabled={!canStart}
              className="w-full py-4 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-150 border border-zinc-600 flex flex-col items-center gap-0.5"
            >
              <span>✏️ מבחן פתוח</span>
              <span className="text-xs font-normal text-zinc-400">כתיבה חופשית + הצגת פתרון</span>
            </button>

            <button
              onClick={() => startExam("multiple_choice")}
              disabled={!canStart}
              className="w-full py-4 px-6 rounded-2xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-150 flex flex-col items-center gap-0.5 shadow-lg shadow-indigo-950/60"
            >
              <span>🔘 מבחן אמריקאי</span>
              <span className="text-xs font-normal text-indigo-300">4 אפשרויות לכל שאלה + משוב מיידי</span>
            </button>
          </div>

          <p className="text-zinc-700 text-xs text-center" dir="rtl">
            כל לחיצה תבחר קבוצת תרגילים שונה באקראי
          </p>
        </div>
      </div>
    );
  }

  const modeLabel = examMode === "open" ? "מבחן פתוח" : "מבחן אמריקאי";
  const modeIcon = examMode === "open" ? "✏️" : "🔘";

  return (
    <div className="min-h-screen bg-zinc-950 py-6 px-4 safe-top safe-bottom">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3 py-1">
          <button
            onClick={resetExam}
            className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1.5 min-h-[44px] px-1"
          >
            <span>←</span>
            <span>בית</span>
          </button>
          <div className="text-right" dir="rtl">
            <h1 className="text-white font-bold text-base leading-tight">
              {modeIcon} {modeLabel}
            </h1>
            <p className="text-zinc-600 text-xs">4 תרגילים נבחרו באקראי</p>
          </div>
        </div>

        <div className="grid gap-5">
          {selectedExercises.map((exercise, index) =>
            examMode === "open" ? (
              <OpenEndedCard key={exercise.id} exercise={exercise} index={index} />
            ) : (
              <MultipleChoiceCard key={exercise.id} exercise={exercise} index={index} />
            )
          )}
        </div>

        <div className="pb-8 pt-2 flex flex-col gap-3">
          <button
            onClick={() => startExam(examMode)}
            className="w-full py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 font-semibold text-sm transition-colors border border-zinc-600 min-h-[44px]"
          >
            🔀 בחר תרגילים חדשים
          </button>
          <button
            onClick={resetExam}
            className="w-full py-3.5 rounded-xl bg-zinc-900 text-zinc-400 font-semibold text-sm transition-colors border border-zinc-700 min-h-[44px]"
          >
            ← חזור לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
}
