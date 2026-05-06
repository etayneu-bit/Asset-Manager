import { Exercise } from "../data/exercises";

export type QuestionKey = "target_muscle" | "working_joints" | "origin_insertion" | "synergists_antagonists" | "two_cues";

export const questions: { key: QuestionKey; label: string }[] = [
  { key: "target_muscle", label: "מה שריר המטרה?" },
  { key: "working_joints", label: "אילו מפרקים עובדים?" },
  { key: "origin_insertion", label: "אוריגין ואינסרשן של שריר המטרה?" },
  { key: "synergists_antagonists", label: "מה השרירים הסינרגיסטים ואנטגוניסטים?" },
  { key: "two_cues", label: "אילו 2 דגשים לביצוע?" },
];

export type ExamPhase = "taking" | "reviewing" | "scored";

interface OpenEndedCardProps {
  exercise: Exercise;
  index: number;
  phase: ExamPhase;
  answers: Record<string, string>;
  selfGrades: Record<string, boolean>;
  onAnswer: (questionKey: QuestionKey, answer: string) => void;
  onSelfGrade: (questionKey: QuestionKey, correct: boolean) => void;
}

export function OpenEndedCard({ exercise, index, phase, answers, selfGrades, onAnswer, onSelfGrade }: OpenEndedCardProps) {
  const categoryLabel = exercise.category === "upper_body" ? "גוף עליון" : "גוף תחתון";
  const categoryColor =
    exercise.category === "upper_body"
      ? "bg-indigo-900/50 text-indigo-300 border border-indigo-700/50"
      : "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50";

  const gradedCount = Object.values(selfGrades ?? {}).filter(Boolean).length;
  const checkedCount = Object.keys(selfGrades ?? {}).length;

  return (
    <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-4 border-b border-zinc-700/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-zinc-600 font-mono text-sm shrink-0">#{index + 1}</span>
          <h2 className="text-white text-lg font-bold tracking-tight" dir="rtl">
            {exercise.name}
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {phase === "reviewing" && (
            <span className="text-xs font-mono text-amber-400">
              {gradedCount * 5}/{questions.length * 5} נק'
            </span>
          )}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`} dir="rtl">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {questions.map((q, i) => {
          const isCorrect = selfGrades[q.key];
          const hasGraded = q.key in selfGrades;

          if (phase === "reviewing") {
            return (
              <div
                key={q.key}
                className={`rounded-xl border p-4 space-y-3 transition-colors ${
                  hasGraded
                    ? isCorrect
                      ? "border-emerald-700/50 bg-emerald-950/20"
                      : "border-red-800/50 bg-red-950/20"
                    : "border-zinc-700/60 bg-zinc-800/30"
                }`}
              >
                <p className="text-sm font-semibold text-zinc-300" dir="rtl">
                  <span className="text-zinc-500 font-mono ml-2">{i + 1}.</span>
                  {q.label}
                </p>

                <div className="space-y-2" dir="rtl">
                  <div className="rounded-lg bg-zinc-800 border border-zinc-700 p-3">
                    <p className="text-xs text-zinc-500 font-semibold mb-1">התשובה שלך:</p>
                    <p className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
                      {answers[q.key] || <span className="text-zinc-600 italic">לא נענה</span>}
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-950/30 border border-amber-800/40 p-3">
                    <p className="text-xs text-amber-500 font-semibold mb-1">פתרון מוצע:</p>
                    <p className="text-sm text-amber-100/80 leading-relaxed">{exercise.solution[q.key]}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-sm text-zinc-400" dir="rtl">תשובה נכונה?</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onSelfGrade(q.key, false)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all min-h-[36px] ${
                        hasGraded && !isCorrect
                          ? "bg-red-800/60 border-red-600 text-red-200"
                          : "bg-zinc-800 border-zinc-600 text-zinc-400 hover:border-red-700 hover:text-red-400"
                      }`}
                    >
                      ✗ לא
                    </button>
                    <button
                      onClick={() => onSelfGrade(q.key, true)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all min-h-[36px] ${
                        hasGraded && isCorrect
                          ? "bg-emerald-800/60 border-emerald-600 text-emerald-200"
                          : "bg-zinc-800 border-zinc-600 text-zinc-400 hover:border-emerald-700 hover:text-emerald-400"
                      }`}
                    >
                      ✓ כן
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={q.key} className="space-y-2">
              <label className="block text-sm font-semibold text-zinc-300" dir="rtl">
                <span className="text-zinc-500 font-mono ml-2">{i + 1}.</span>
                {q.label}
              </label>
              <textarea
                dir="rtl"
                rows={3}
                value={answers[q.key] ?? ""}
                onChange={(e) => onAnswer(q.key, e.target.value)}
                placeholder="כתוב את תשובתך כאן..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 text-sm placeholder-zinc-600 resize-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
              />
            </div>
          );
        })}

        {phase === "reviewing" && (
          <div className="pt-1 rounded-xl bg-zinc-800/50 border border-zinc-700 p-3 text-center" dir="rtl">
            <p className="text-zinc-400 text-sm">
              <span className={checkedCount === questions.length ? "text-emerald-400" : "text-zinc-500"}>
                {checkedCount}/{questions.length}
              </span>
              {" "}שאלות דורגו • {gradedCount * 5} נקודות לתרגיל זה
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
