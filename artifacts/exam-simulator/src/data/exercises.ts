export interface Exercise {
  id: string;
  name: string;
  category: "upper_body" | "lower_body";
  solution: {
    target_muscle: string;
    working_joints: string;
    origin_insertion: string;
    synergists_antagonists: string;
    two_cues: string;
  };
}

export const exercises: Exercise[] = [
  {
    id: "1",
    name: "סקוואט",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי הירך (Quadriceps Femoris) – Rectus Femoris, Vastus Lateralis, Vastus Medialis, Vastus Intermedius",
      working_joints: "מפרק הברך (כיפוף → יישור), מפרק הירך (כיפוף → יישור), מפרק הקרסול (דורסיפלקסיה → פלנטרפלקסיה)",
      origin_insertion: "אוריגין: ASIS ועצם האגן (Rectus Femoris) / עצמות הפמור (Vasti). אינסרשן: פקעת השוקה דרך גיד הפיקה",
      synergists_antagonists: "סינרגיסטים: גלוטאוס מקסימוס, אדוקטורים, Biceps Femoris (ראש קצר). אנטגוניסטים: Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)",
      two_cues: "1. שמור על ברכיים בכיוון האצבעות ולמנוע כניסה פנימה (Knee Valgus). 2. שמור על גב ישר ועמוד שדרה ניטרלי – אל תסגור את הגב (But Wink).",
    },
  },
  {
    id: "2",
    name: "לחיצת חזה בשכיבה (Bench Press)",
    category: "upper_body",
    solution: {
      target_muscle: "פקטורליס מג'ור (Pectoralis Major) – הראש הסטרנוקוסטלי וקלביקולרי",
      working_joints: "מפרק הכתף (כיפוף אופקי → יישור אופקי), מפרק המרפק (כיפוף → יישור)",
      origin_insertion: "אוריגין: עצם הבריח (קלביקלה), עצם החזה (סטרנום) ועלויות הצלעות 2-6. אינסרשן: פיקת הומרוס (Bicipital Groove)",
      synergists_antagonists: "סינרגיסטים: Anterior Deltoid, Triceps Brachii, Serratus Anterior, Coracobrachialis. אנטגוניסטים: Rhomboids, Middle Trapezius, Posterior Deltoid",
      two_cues: "1. שמור על כתפיים יורדות ולאחור – אל תאפשר להן לעלות לאוזניים. 2. לחץ את השחי כלפי המוט בזמן הורדה לשמירה על יציב מרפק.",
    },
  },
  {
    id: "3",
    name: "מתיחת גב רחבה (Lat Pulldown)",
    category: "upper_body",
    solution: {
      target_muscle: "לטיסימוס דורסי (Latissimus Dorsi)",
      working_joints: "מפרק הכתף (אבדוקציה → אדוקציה), מפרק המרפק (יישור → כיפוף)",
      origin_insertion: "אוריגין: חוליות T7–L5, עצם כף הרגל (Iliac Crest), שלוש צלעות תחתונות, שולי עצם השכמה (Scapula). אינסרשן: פיקת ההומרוס (Intertubercular Groove)",
      synergists_antagonists: "סינרגיסטים: Teres Major, Posterior Deltoid, Rhomboids, Biceps Brachii. אנטגוניסטים: Anterior Deltoid, Trapezius (Upper), Serratus Anterior",
      two_cues: "1. הרד את הכתפיים לפני המשיכה – שמור אותן מורדות ומאחורה לאורך כל התנועה. 2. דמיין שאתה מנסה להכניס את המרפקים לכיסים – הוביל עם המרפקים כלפי מטה.",
    },
  },
  {
    id: "4",
    name: "דדליפט (Deadlift)",
    category: "lower_body",
    solution: {
      target_muscle: "Erector Spinae (שרירי הגב האחוריים) – Iliocostalis, Longissimus, Spinalis",
      working_joints: "מפרק הירך (כיפוף → יישור/הרחבה), מפרק הברך (כיפוף → יישור), מפרק הקרסול (דורסיפלקסיה → פלנטרפלקסיה)",
      origin_insertion: "אוריגין: Iliac Crest, Sacrum, עצמות חוליות. אינסרשן: Transverse Processes של חוליות, זוויות הצלעות, תהליכי עצם הצוואר",
      synergists_antagonists: "סינרגיסטים: Gluteus Maximus, Hamstrings, Quadriceps, Trapezius, Rhomboids. אנטגוניסטים: Rectus Abdominis, Iliopsoas, Obliques",
      two_cues: "1. שמור על עמוד שדרה ניטרלי לאורך כל התנועה – אל תסגור את הגב בתחתית. 2. 'לחץ' את הרצפה ממך בעליה – חשוב על Leg Press ולא על משיכה.",
    },
  },
];

export const upperBodyExercises = exercises.filter((e) => e.category === "upper_body");
export const lowerBodyExercises = exercises.filter((e) => e.category === "lower_body");
