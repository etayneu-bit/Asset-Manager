import { useMemo } from "react";
import { Exercise } from "../data/exercises";

export type QuestionKey = "target_muscle" | "working_joints" | "origin_insertion" | "synergists_antagonists" | "two_cues";

export const questions: { key: QuestionKey; label: string }[] = [
  { key: "target_muscle", label: "מה שריר המטרה?" },
  { key: "working_joints", label: "אילו מפרקים עובדים?" },
  { key: "origin_insertion", label: "אוריגין ואינסרשן של שריר המטרה?" },
  { key: "synergists_antagonists", label: "מה השרירים הסינרגיסטים ואנטגוניסטים?" },
  { key: "two_cues", label: "אילו 2 דגשים לביצוע?" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface MultipleChoiceCardProps {
  exercise: Exercise;
  index: number;
  submitted: boolean;
  answers: Record<string, string>;
  onAnswer: (questionKey: QuestionKey, answer: string) => void;
}

export function MultipleChoiceCard({ exercise, index, submitted, answers, onAnswer }: MultipleChoiceCardProps) {
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

  const answeredCount = Object.keys(answers).length;

  function getOptionStyle(qKey: QuestionKey, option: string) {
    const chosen = answers[qKey];
    const correct = exercise.solution[qKey];

    if (submitted) {
      if (option === correct) return "bg-emerald-900/50 border-emerald-600 text-emerald-200 cursor-default";
      if (option === chosen && option !== correct) return "bg-red-900/50 border-red-600 text-red-200 cursor-default";
      return "bg-zinc-800/40 border-zinc-700/40 text-zinc-600 cursor-default";
    }

    if (chosen === option) return "bg-indigo-900/60 border-indigo-500 text-indigo-100 cursor-pointer";
    return "bg-zinc-800 border-zinc-700 text-zinc-200 active:bg-zinc-700 cursor-pointer";
  }

  function getOptionIcon(qKey: QuestionKey, option: string) {
    if (!submitted) return null;
    const chosen = answers[qKey];
    const correct = exercise.solution[qKey];
    if (option === correct) return <span className="shrink-0 text-emerald-400 font-bold text-base">✓</span>;
    if (option === chosen && option !== correct) return <span className="shrink-0 text-red-400 font-bold text-base">✗</span>;
    return null;
  }

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
          {!submitted && (
            <span className={`text-xs font-mono ${answeredCount === questions.length ? "text-emerald-400" : "text-zinc-500"}`}>
              {answeredCount}/{questions.length}
            </span>
          )}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`} dir="rtl">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {questions.map((q, i) => {
          const chosen = answers[q.key];
          return (
            <div key={q.key} className="space-y-3">
              <div className="flex items-start gap-2" dir="rtl">
                <span
                  className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                    submitted
                      ? answers[q.key] === exercise.solution[q.key]
                        ? "bg-emerald-700/60 text-emerald-300"
                        : "bg-red-800/60 text-red-300"
                      : chosen
                      ? "bg-indigo-700/60 text-indigo-300"
                      : "bg-zinc-700 text-zinc-400"
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
                    disabled={submitted}
                    onClick={() => {
                      if (!submitted) onAnswer(q.key, option);
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
      </div>
    </div>
  );
}
