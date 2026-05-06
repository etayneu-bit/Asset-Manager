import { useMemo, useState } from "react";
import { Exercise } from "../data/exercises";

interface MultipleChoiceCardProps {
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

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function MultipleChoiceCard({ exercise, index }: MultipleChoiceCardProps) {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const shuffledOptions = useMemo(() => {
    return Object.fromEntries(
      questions.map((q) => [q.key, shuffle(exercise.multiple_choice_options[q.key])])
    ) as Record<string, string[]>;
  }, [exercise.id]);

  const categoryLabel = exercise.category === "upper_body" ? "גוף עליון" : "גוף תחתון";
  const categoryColor =
    exercise.category === "upper_body"
      ? "bg-indigo-900/50 text-indigo-300 border border-indigo-700/50"
      : "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50";

  function getOptionStyle(questionKey: string, option: string) {
    const chosen = selected[questionKey];
    const correct = exercise.solution[questionKey as keyof typeof exercise.solution];

    if (!chosen) {
      return "bg-zinc-800 border-zinc-700 text-zinc-200 active:bg-zinc-700 cursor-pointer";
    }
    if (option === correct) {
      return "bg-emerald-900/50 border-emerald-600 text-emerald-200 cursor-default";
    }
    if (option === chosen && option !== correct) {
      return "bg-red-900/50 border-red-600 text-red-200 cursor-default";
    }
    return "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 cursor-default";
  }

  function getOptionIcon(questionKey: string, option: string) {
    const chosen = selected[questionKey];
    const correct = exercise.solution[questionKey as keyof typeof exercise.solution];
    if (!chosen) return null;
    if (option === correct) return <span className="shrink-0 text-emerald-400 font-bold">✓</span>;
    if (option === chosen && option !== correct) return <span className="shrink-0 text-red-400 font-bold">✗</span>;
    return null;
  }

  const answeredCount = Object.keys(selected).length;
  const totalQuestions = questions.length;

  return (
    <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-4 border-b border-zinc-700/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-zinc-600 font-mono text-sm shrink-0">#{index + 1}</span>
          <h2 className="text-white text-lg font-bold tracking-tight truncate" dir="rtl">
            {exercise.name}
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-500 font-mono">
            {answeredCount}/{totalQuestions}
          </span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`} dir="rtl">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {questions.map((q, i) => {
          const isAnswered = !!selected[q.key];
          return (
            <div key={q.key} className="space-y-3">
              <div className="flex items-start gap-2" dir="rtl">
                <span
                  className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                    isAnswered ? "bg-emerald-700/60 text-emerald-300" : "bg-zinc-700 text-zinc-400"
                  }`}
                >
                  {i + 1}
                </span>
                <p className="text-sm font-semibold text-zinc-200">{q.label}</p>
              </div>

              <div className="space-y-2">
                {shuffledOptions[q.key]?.map((option, oi) => (
                  <button
                    key={oi}
                    dir="rtl"
                    disabled={isAnswered}
                    onClick={() => {
                      if (!isAnswered) {
                        setSelected((prev) => ({ ...prev, [q.key]: option }));
                      }
                    }}
                    className={`w-full text-right px-4 py-3 rounded-xl border text-sm leading-relaxed transition-all duration-150 flex items-start gap-3 ${getOptionStyle(q.key, option)}`}
                  >
                    <span className="flex-1">{option}</span>
                    {getOptionIcon(q.key, option)}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {answeredCount === totalQuestions && (
          <div className="pt-2 rounded-xl border border-zinc-700 bg-zinc-800/60 p-4 text-center" dir="rtl">
            <p className="text-zinc-400 text-sm">
              ✓ ענית על כל השאלות בתרגיל זה
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
