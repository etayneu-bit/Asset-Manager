import { useState } from "react";
import { Exercise } from "../data/exercises";

interface OpenEndedCardProps {
  exercise: Exercise;
  index: number;
}

const questions = [
  { key: "target_muscle" as const, label: "מה שריר המטרה?" },
  { key: "working_joints" as const, label: "אילו מפרקים עובדים?" },
  { key: "origin_insertion" as const, label: "אוריגין ואינסרשן של שריר המטרה?" },
  { key: "synergists_antagonists" as const, label: "מה השרירים הסינרגיסטים ואנטגוניסטים?" },
  { key: "two_cues" as const, label: "אילו 2 דגשים לביצוע?" },
];

export function OpenEndedCard({ exercise, index }: OpenEndedCardProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSolution, setShowSolution] = useState(false);

  const categoryLabel = exercise.category === "upper_body" ? "גוף עליון" : "גוף תחתון";
  const categoryColor =
    exercise.category === "upper_body"
      ? "bg-indigo-900/50 text-indigo-300 border border-indigo-700/50"
      : "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50";

  return (
    <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-4 border-b border-zinc-700/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-zinc-600 font-mono text-sm shrink-0">#{index + 1}</span>
          <h2 className="text-white text-lg font-bold tracking-tight truncate" dir="rtl">
            {exercise.name}
          </h2>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${categoryColor}`} dir="rtl">
          {categoryLabel}
        </span>
      </div>

      <div className="p-5 space-y-5">
        {questions.map((q, i) => (
          <div key={q.key} className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-300" dir="rtl">
              <span className="text-zinc-500 font-mono ml-2">{i + 1}.</span>
              {q.label}
            </label>
            <textarea
              dir="rtl"
              rows={3}
              value={answers[q.key] ?? ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [q.key]: e.target.value }))}
              placeholder="כתוב את תשובתך כאן..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 text-sm placeholder-zinc-600 resize-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
            />
          </div>
        ))}

        <div className="pt-1">
          <button
            onClick={() => setShowSolution((v) => !v)}
            className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 border ${
              showSolution
                ? "bg-amber-900/40 border-amber-600/60 text-amber-300"
                : "bg-zinc-800 border-zinc-600 text-zinc-300 active:bg-zinc-700"
            }`}
          >
            {showSolution ? "▲ הסתר פתרון" : "▼ הצג פתרון"}
          </button>

          {showSolution && (
            <div className="mt-4 rounded-xl border border-amber-700/40 bg-amber-950/20 overflow-hidden">
              <div className="px-4 py-3 border-b border-amber-700/40 bg-amber-900/20">
                <p className="text-amber-400 font-semibold text-sm" dir="rtl">✓ פתרון מוצע</p>
              </div>
              <div className="p-4 space-y-4" dir="rtl">
                {questions.map((q, i) => (
                  <div key={q.key}>
                    <p className="text-xs font-semibold text-zinc-500 mb-1">
                      {i + 1}. {q.label}
                    </p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{exercise.solution[q.key]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
