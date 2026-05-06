import { useState, useRef } from "react";
import { Exercise, upperBodyExercises, lowerBodyExercises } from "../data/exercises";
import { MultipleChoiceCard, QuestionKey as MCQuestionKey, questions as mcQuestions } from "./MultipleChoiceCard";
import { OpenEndedCard, QuestionKey as OEQuestionKey, questions as oeQuestions, ExamPhase } from "./OpenEndedCard";

// ── MC Review ──────────────────────────────────────────────────────────────
function MCReview({
  exercises,
  answers,
}: {
  exercises: Exercise[];
  answers: Record<string, Record<string, string>>;
}) {
  return (
    <div className="space-y-4 text-right" dir="rtl">
      <h2 className="text-white font-bold text-lg">סקירת תשובות</h2>
      {exercises.map((exercise, ei) => {
        const exAnswers = answers[exercise.id] ?? {};
        return (
          <div key={exercise.id} className="bg-zinc-900 border border-zinc-700/60 rounded-2xl overflow-hidden">
            {/* Exercise header */}
            <div className="px-4 py-3 border-b border-zinc-700/60 flex items-center gap-2">
              <span className="text-zinc-600 font-mono text-xs shrink-0">#{ei + 1}</span>
              <h3 className="text-white font-bold text-sm">{exercise.name}</h3>
            </div>

            {/* Questions */}
            <div className="divide-y divide-zinc-800">
              {mcQuestions.map((q, qi) => {
                const chosen = exAnswers[q.key];
                const correct = exercise.solution[q.key];
                const isRight = chosen === correct;
                return (
                  <div key={q.key} className="px-4 py-3 space-y-2">
                    {/* Question label */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          isRight
                            ? "bg-emerald-700/50 text-emerald-300"
                            : "bg-red-800/50 text-red-300"
                        }`}
                      >
                        {qi + 1}
                      </span>
                      <p className="text-zinc-400 text-xs font-semibold flex-1">{q.label}</p>
                      <span className="text-base">{isRight ? "✓" : "✗"}</span>
                    </div>

                    {/* User's answer */}
                    <div
                      className={`rounded-xl px-3 py-2 text-xs leading-relaxed border ${
                        isRight
                          ? "bg-emerald-900/30 border-emerald-700/50 text-emerald-200"
                          : "bg-red-900/30 border-red-700/50 text-red-200"
                      }`}
                    >
                      <span className="text-zinc-500 block mb-0.5 text-[10px]">
                        {isRight ? "תשובתך (נכון)" : "תשובתך (שגוי)"}
                      </span>
                      {chosen ?? <span className="italic text-zinc-600">לא נענה</span>}
                    </div>

                    {/* Correct answer — only shown when wrong */}
                    {!isRight && (
                      <div className="rounded-xl px-3 py-2 text-xs leading-relaxed border bg-emerald-900/20 border-emerald-700/40 text-emerald-200">
                        <span className="text-emerald-500 block mb-0.5 text-[10px]">התשובה הנכונה</span>
                        {correct}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

type ExamMode = "open" | "multiple_choice";
type AppPhase = "landing" | "taking" | "reviewing" | "scored";

const POINTS_PER_QUESTION = 5;
const PASS_THRESHOLD = 70;

function pickRandom<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

function FaceInHole() {
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);
  const [scale, setScale] = useState(0.52);
  const [posX, setPosX] = useState(18);
  const [posY, setPosY] = useState(-18);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUserImageUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-emerald-300 font-bold text-base text-center" dir="rtl">
      מהמם! עברת את המבחן!!! הכנס את הפנים שלך לקבלת התעודה.
      </p>

      {/* Frame container — square, responsive, clipped */}
      <div
        className="relative mx-auto w-full max-w-[320px] aspect-square rounded-2xl border border-emerald-700/40 bg-zinc-800 shadow-xl shadow-emerald-950/30"
        style={{ overflow: "hidden" }}
      >
        {/* User photo layer — behind WIN.png */}
        {userImageUrl ? (
          <img
            src={userImageUrl}
            alt="תמונתך"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transformOrigin: "center center",
              transform: `translate(${posX}%, ${posY}%) scale(${scale})`,
              zIndex: 1,
            }}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ zIndex: 1 }}
          >
            <span className="text-5xl opacity-30">🤳</span>
            <p className="text-zinc-600 text-xs text-center px-4" dir="rtl">
              בחר תמונה כדי לראות את הפנים שלך כאן
            </p>
          </div>
        )}

        {/* WIN.png foreground — always on top */}
        <img
          src="/win.png"
          alt="מסגרת ניצחון"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ zIndex: 2 }}
        />
      </div>

      {/* File picker (hidden) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload button */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full py-3.5 rounded-2xl bg-emerald-700/30 hover:bg-emerald-700/50 active:bg-emerald-800/60 border border-emerald-600/50 text-emerald-200 font-bold text-sm transition-all min-h-[48px]"
        dir="rtl"
      >
        📸 {userImageUrl ? "החלף תמונה" : "הכנס את הפנים שלך לחגיגה!"}
      </button>

      {/* Positioning sliders — only shown once an image is loaded */}
      {userImageUrl && (
        <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900 p-4 space-y-4" dir="rtl">
          <p className="text-zinc-400 text-xs font-semibold text-center">כוונון מיקום התמונה</p>

          {/* Scale */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-500">
              <span>🔍 זום</span>
              <span className="font-mono text-zinc-400">{Math.round(scale * 100)}%</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={2.5}
              step={0.02}
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-500 bg-zinc-700"
            />
          </div>

          {/* X position */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-500">
              <span>↔ שמאל / ימין</span>
              <span className="font-mono text-zinc-400">{posX > 0 ? `+${posX}` : posX}%</span>
            </div>
            <input
              type="range"
              min={-100}
              max={100}
              step={1}
              value={posX}
              onChange={(e) => setPosX(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-500 bg-zinc-700"
            />
          </div>

          {/* Y position */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-500">
              <span>↕ למעלה / למטה</span>
              <span className="font-mono text-zinc-400">{posY > 0 ? `+${posY}` : posY}%</span>
            </div>
            <input
              type="range"
              min={-100}
              max={100}
              step={1}
              value={posY}
              onChange={(e) => setPosY(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-500 bg-zinc-700"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ScoreScreen({
  score,
  onReset,
  onNewExam,
  examMode,
  exercises,
  mcAnswers,
}: {
  score: number;
  onReset: () => void;
  onNewExam: () => void;
  examMode: ExamMode;
  exercises: Exercise[];
  mcAnswers: Record<string, Record<string, string>>;
}) {
  const passed = score >= PASS_THRESHOLD;
  return (
    <div className="min-h-screen px-4 py-10 safe-top safe-bottom">
      <div className="max-w-xl mx-auto space-y-6">

        {/* Score card */}
        <div
          className={`rounded-3xl border p-8 space-y-4 text-center ${
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

        {/* Easter egg — only on pass */}
        {passed && (
          <div className="rounded-3xl border border-emerald-800/40 bg-emerald-950/20 p-5">
            <FaceInHole />
          </div>
        )}

        {/* MC answer review */}
        {examMode === "multiple_choice" && exercises.length > 0 && (
          <MCReview exercises={exercises} answers={mcAnswers} />
        )}

        {/* Action buttons */}
        <div className="space-y-3 pb-10">
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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 safe-top safe-bottom">
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
              סימולטור מבחן מסכם
            </h1>
            <p className="text-zinc-500 text-base" dir="rtl">קורס הכשרת מדריכי חדר כושר</p>
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
        exercises={selectedExercises}
        mcAnswers={allAnswers}
      />
    );
  }

  // ── TAKING / REVIEWING ────────────────────────────────────────────────────
  const modeLabel = examMode === "open" ? "מבחן פתוח" : "מבחן אמריקאי";
  const modeIcon = examMode === "open" ? "✏️" : "🔘";
  const isReviewing = appPhase === "reviewing";

  return (
    <div className="min-h-screen py-6 px-4 safe-top safe-bottom">
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
