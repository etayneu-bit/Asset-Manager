import { useState } from "react";
import { Exercise, upperBodyExercises, lowerBodyExercises } from "../data/exercises";
import { MultipleChoiceCard, QuestionKey as MCQuestionKey, questions as mcQuestions } from "./MultipleChoiceCard";
import { OpenEndedCard, QuestionKey as OEQuestionKey, questions as oeQuestions, ExamPhase } from "./OpenEndedCard";

type ExamMode = "open" | "multiple_choice";
type AppPhase = "landing" | "taking" | "reviewing" | "scored";

const POINTS_PER_QUESTION = 5;
const PASS_THRESHOLD = 70;

function pickRandom<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

function ScoreScreen({
  score,
  onReset,
  onNewExam,
  examMode,
}: {
  score: number;
  onReset: () => void;
  onNewExam: () => void;
  examMode: ExamMode;
}) {
  const passed = score >= PASS_THRESHOLD;
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-sm w-full space-y-6 text-center">
        <div
          className={`rounded-3xl border p-8 space-y-4 ${
            passed
              ? "bg-emerald-950/40 border-emerald-700/50"
              : "bg-red-950/40 border-red-800/50"
          }`}
        >
          <div className={`text-5xl font-black tracking-tight ${passed ? "text-emerald-300" : "text-red-400"}`}>
            {score}
            <span className="text-2xl font-bold opacity-60">/100</span>
          </div>

          <div
            className={`inline-block px-6 py-2 rounded-full text-xl font-bold ${
              passed
                ? "bg-emerald-700/40 text-emerald-200"
                : "bg-red-800/40 text-red-200"
            }`}
            dir="rtl"
          >
            {passed ? "✓ עובר" : "✗ נכשל"}
          </div>

          <p className="text-zinc-400 text-sm" dir="rtl">
            {passed
              ? `כל הכבוד! עברת את המבחן עם ציון ${score}.`
              : `לא עברת. נדרש ציון 70 ומעלה. ניסיון נוסף?`}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onNewExam}
            className="w-full py-4 rounded-2xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 text-white font-bold text-base transition-colors min-h-[52px]"
          >
            🔀 מבחן חדש עם תרגילים אחרים
          </button>
          <button
            onClick={onReset}
            className="w-full py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-base transition-colors border border-zinc-600 min-h-[52px]"
          >
            ← חזור לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
}

export function ExamSimulator() {
  const [appPhase, setAppPhase] = useState<AppPhase>("landing");
  const [examMode, setExamMode] = useState<ExamMode>("open");
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  // answers: exerciseId → questionKey → answer string
  const [allAnswers, setAllAnswers] = useState<Record<string, Record<string, string>>>({});
  // selfGrades (open-ended review): exerciseId → questionKey → boolean
  const [selfGrades, setSelfGrades] = useState<Record<string, Record<string, boolean>>>({});
  const [score, setScore] = useState(0);

  const canStart = upperBodyExercises.length >= 2 && lowerBodyExercises.length >= 2;

  function startExam(mode: ExamMode) {
    const upper = pickRandom(upperBodyExercises, 2);
    const lower = pickRandom(lowerBodyExercises, 2);
    const combined = [...upper, ...lower].sort(() => Math.random() - 0.5);
    setSelectedExercises(combined);
    setExamMode(mode);
    setAllAnswers({});
    setSelfGrades({});
    setScore(0);
    setAppPhase("taking");
  }

  function handleAnswer(exerciseId: string, questionKey: string, answer: string) {
    setAllAnswers((prev) => ({
      ...prev,
      [exerciseId]: { ...(prev[exerciseId] ?? {}), [questionKey]: answer },
    }));
  }

  function handleSelfGrade(exerciseId: string, questionKey: string, correct: boolean) {
    setSelfGrades((prev) => ({
      ...prev,
      [exerciseId]: { ...(prev[exerciseId] ?? {}), [questionKey]: correct },
    }));
  }

  // Multiple choice: submit → grade → show score
  function submitMultipleChoice() {
    let correct = 0;
    for (const exercise of selectedExercises) {
      const answers = allAnswers[exercise.id] ?? {};
      for (const q of mcQuestions) {
        if (answers[q.key] === exercise.solution[q.key]) correct++;
      }
    }
    setScore(correct * POINTS_PER_QUESTION);
    setAppPhase("scored");
  }

  // Open-ended: submit → reviewing phase
  function submitOpenEnded() {
    setAppPhase("reviewing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Open-ended: calculate final score from self-grades
  function calculateOpenEndedScore() {
    let correct = 0;
    for (const exercise of selectedExercises) {
      const grades = selfGrades[exercise.id] ?? {};
      for (const q of oeQuestions) {
        if (grades[q.key] === true) correct++;
      }
    }
    setScore(correct * POINTS_PER_QUESTION);
    setAppPhase("scored");
  }

  function resetToLanding() {
    setAppPhase("landing");
    setSelectedExercises([]);
    setAllAnswers({});
    setSelfGrades({});
    setScore(0);
  }

  // Count how many questions have been answered in multiple choice
  const mcAnsweredCount = selectedExercises.reduce((total, ex) => {
    return total + Object.keys(allAnswers[ex.id] ?? {}).length;
  }, 0);
  const totalQuestions = selectedExercises.length * mcQuestions.length;

  // Count how many self-grade decisions have been made
  const selfGradeCount = selectedExercises.reduce((total, ex) => {
    return total + Object.keys(selfGrades[ex.id] ?? {}).length;
  }, 0);

  // ── LANDING ──────────────────────────────────────────────────────────────
  if (appPhase === "landing") {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 py-12 safe-top safe-bottom">
        <div className="max-w-sm w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-1">
              <img
                src="/yoni.png"
                alt="מדריך כושר"
                className="w-24 h-24 rounded-2xl object-cover object-top shadow-lg border border-zinc-700/60"
              />
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight" dir="rtl">
              סימולטור מבחן
            </h1>
            <p className="text-zinc-500 text-base" dir="rtl">קורס הכשרת מדריכי כושר</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl p-5 space-y-3" dir="rtl">
            <h2 className="text-zinc-300 font-semibold text-sm">מה קורה בכל מבחן?</h2>
            <ul className="text-zinc-500 text-sm space-y-2">
              {[
                { color: "text-indigo-400", text: "2 תרגילים מהגוף העליון ייבחרו באקראי" },
                { color: "text-emerald-400", text: "2 תרגילים מהגוף התחתון ייבחרו באקראי" },
                { color: "text-amber-400", text: "5 שאלות × 5 נקודות = 100 נקודות סה\"כ" },
                { color: "text-rose-400", text: "ציון עובר: 70 ומעלה" },
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
              className="w-full py-4 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-150 border border-zinc-600 flex flex-col items-center gap-0.5 min-h-[64px]"
            >
              <span>✏️ מבחן פתוח</span>
              <span className="text-xs font-normal text-zinc-400">כתיבה חופשית + בדיקה עצמית</span>
            </button>

            <button
              onClick={() => startExam("multiple_choice")}
              disabled={!canStart}
              className="w-full py-4 px-6 rounded-2xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-150 flex flex-col items-center gap-0.5 shadow-lg shadow-indigo-950/60 min-h-[64px]"
            >
              <span>🔘 מבחן אמריקאי</span>
              <span className="text-xs font-normal text-indigo-300">4 אפשרויות + ציון אוטומטי</span>
            </button>
          </div>

          <p className="text-zinc-700 text-xs text-center" dir="rtl">
            כל לחיצה תבחר קבוצת תרגילים שונה באקראי
          </p>
        </div>
      </div>
    );
  }

  // ── SCORED ────────────────────────────────────────────────────────────────
  if (appPhase === "scored") {
    return (
      <ScoreScreen
        score={score}
        examMode={examMode}
        onReset={resetToLanding}
        onNewExam={() => startExam(examMode)}
      />
    );
  }

  // ── TAKING / REVIEWING ────────────────────────────────────────────────────
  const modeLabel = examMode === "open" ? "מבחן פתוח" : "מבחן אמריקאי";
  const modeIcon = examMode === "open" ? "✏️" : "🔘";
  const isReviewing = appPhase === "reviewing";

  return (
    <div className="min-h-screen bg-zinc-950 py-6 px-4 safe-top safe-bottom">
      <div className="max-w-2xl mx-auto space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between gap-3 py-1">
          <button
            onClick={resetToLanding}
            className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1.5 min-h-[44px] px-1"
          >
            <span>←</span>
            <span>בית</span>
          </button>
          <div className="text-right" dir="rtl">
            <h1 className="text-white font-bold text-base leading-tight">
              {modeIcon} {isReviewing ? "בדיקה עצמית" : modeLabel}
            </h1>
            <p className="text-zinc-600 text-xs">
              {isReviewing
                ? `דרג כל שאלה • ${selfGradeCount}/${totalQuestions} דורגו`
                : examMode === "multiple_choice"
                ? `${mcAnsweredCount}/${totalQuestions} נענו`
                : "ענה על כל 20 השאלות"}
            </p>
          </div>
        </div>

        {/* Review phase banner */}
        {isReviewing && (
          <div className="rounded-xl bg-amber-950/30 border border-amber-800/40 px-4 py-3" dir="rtl">
            <p className="text-amber-300 text-sm font-semibold">שלב הבדיקה העצמית</p>
            <p className="text-amber-500/80 text-xs mt-0.5">
              השווה את תשובותיך לפתרון המוצע וסמן כנכון או לא נכון לכל שאלה.
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="grid gap-5">
          {selectedExercises.map((exercise, index) =>
            examMode === "open" ? (
              <OpenEndedCard
                key={exercise.id}
                exercise={exercise}
                index={index}
                phase={appPhase as ExamPhase}
                answers={allAnswers[exercise.id] ?? {}}
                selfGrades={selfGrades[exercise.id] ?? {}}
                onAnswer={(qKey, answer) => handleAnswer(exercise.id, qKey, answer)}
                onSelfGrade={(qKey, correct) => handleSelfGrade(exercise.id, qKey, correct)}
              />
            ) : (
              <MultipleChoiceCard
                key={exercise.id}
                exercise={exercise}
                index={index}
                submitted={appPhase === "scored"}
                answers={allAnswers[exercise.id] ?? {}}
                onAnswer={(qKey, answer) => handleAnswer(exercise.id, qKey as MCQuestionKey, answer)}
              />
            )
          )}
        </div>

        {/* Bottom action area */}
        <div className="pb-10 pt-2 space-y-3">
          {/* Submit / Calculate button */}
          {examMode === "multiple_choice" && appPhase === "taking" && (
            <button
              onClick={submitMultipleChoice}
              className="w-full py-4 rounded-2xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 text-white font-bold text-lg transition-colors min-h-[56px] shadow-lg shadow-indigo-950/50"
            >
              הגש מבחן ←
            </button>
          )}

          {examMode === "open" && appPhase === "taking" && (
            <button
              onClick={submitOpenEnded}
              className="w-full py-4 rounded-2xl bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 text-white font-bold text-lg transition-colors min-h-[56px] shadow-lg shadow-indigo-950/50"
            >
              הגש מבחן ←
            </button>
          )}

          {examMode === "open" && appPhase === "reviewing" && (
            <>
              <div className="rounded-xl bg-zinc-900 border border-zinc-700 p-3 text-center" dir="rtl">
                <p className="text-zinc-400 text-sm">
                  <span className={selfGradeCount === totalQuestions ? "text-emerald-400 font-semibold" : "text-zinc-500"}>
                    {selfGradeCount}/{totalQuestions}
                  </span>
                  {" "}שאלות דורגו
                </p>
              </div>
              <button
                onClick={calculateOpenEndedScore}
                disabled={selfGradeCount < totalQuestions}
                className="w-full py-4 rounded-2xl bg-amber-700 hover:bg-amber-600 active:bg-amber-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg transition-colors min-h-[56px] shadow-lg shadow-amber-950/50"
              >
                חשב ציון סופי ←
              </button>
            </>
          )}

          <button
            onClick={resetToLanding}
            className="w-full py-3.5 rounded-xl bg-zinc-900 text-zinc-500 font-semibold text-sm transition-colors border border-zinc-700/60 min-h-[44px]"
          >
            ← חזור לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
}
