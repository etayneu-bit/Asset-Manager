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
  multiple_choice_options: {
    target_muscle: string[];
    working_joints: string[];
    origin_insertion: string[];
    synergists_antagonists: string[];
    two_cues: string[];
  };
}

export const exercises: Exercise[] = [
  {
    id: "1",
    name: "סקוואט (Squat)",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי (Quadriceps Femoris)",
      working_joints: "ירך (Hip), ברך (Knee), קרסול (Ankle)",
      origin_insertion: "אוריגין: AIIS ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
      synergists_antagonists: "סינרגיסטים: גלוטאוס מקסימוס ואדוקטורים. אנטגוניסטים: המסטרינגס (בברך)",
      two_cues: "1. מניעת קריסת ברכיים פנימה (Knee Valgus). 2. שמירה על עמוד שדרה ניטרלי.",
    },
    multiple_choice_options: {
      target_muscle: [
        "ארבע ראשי (Quadriceps Femoris)",
        "המסטרינגס (Hamstrings)",
        "גלוטאוס מקסימוס (Gluteus Maximus)",
        "תאומים (Gastrocnemius)",
      ],
      working_joints: [
        "ירך (Hip), ברך (Knee), קרסול (Ankle)",
        "ירך (Hip) וברך (Knee) בלבד",
        "ברך (Knee) וקרסול (Ankle) בלבד",
        "רק מפרק הברך (Knee)",
      ],
      origin_insertion: [
        "אוריגין: AIIS ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: ASIS. אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: גבששת השת (Ischial Tuberosity). אינסרשן: ראש הפיבולה",
        "אוריגין: עצם החיק (Pubis). אינסרשן: קו מחוספס בירך (Linea Aspera)",
      ],
      synergists_antagonists: [
        "סינרגיסטים: גלוטאוס מקסימוס ואדוקטורים. אנטגוניסטים: המסטרינגס (בברך)",
        "סינרגיסטים: המסטרינגס ותאומים. אנטגוניסטים: גלוטאוס מקסימוס",
        "סינרגיסטים: זוקפי עמוד שדרה. אנטגוניסטים: ישר בטני",
        "סינרגיסטים: מרחיקי ירך. אנטגוניסטים: מקרבי ירך",
      ],
      two_cues: [
        "1. מניעת קריסת ברכיים פנימה (Knee Valgus). 2. שמירה על עמוד שדרה ניטרלי.",
        "1. משקל על קצות האצבעות. 2. מבט למעלה לתקרה.",
        "1. הקשתה מוגזמת של הגב התחתון. 2. ירידה מהירה ללא שליטה.",
        "1. ברכיים נעולות לחלוטין בסוף התנועה. 2. עמידה צמודה מאוד.",
      ],
    },
  },
  {
    id: "2",
    name: "דדליפט (Deadlift)",
    category: "lower_body",
    solution: {
      target_muscle: "גלוטאוס מקסימוס והמסטרינגס (פושטי ירך)",
      working_joints: "ירך (Hip), ברך (Knee)",
      origin_insertion: "אוריגין גלוטאוס: עצם הכסל, סקרום ועצם הזנב. אינסרשן: עצם הירך ורצועת ITB",
      synergists_antagonists: "סינרגיסטים: ארבע ראשי, זוקפי גב (איזומטרי). אנטגוניסטים: מותן כסל (Iliopsoas)",
      two_cues: "1. מוט קרוב וצמוד לרגליים לאורך כל התנועה. 2. שמירה על גב ניטרלי ללא כפיפה בעמוד השדרה.",
    },
    multiple_choice_options: {
      target_muscle: [
        "גלוטאוס מקסימוס והמסטרינגס (פושטי ירך)",
        "זוקפי עמוד השדרה (Erector Spinae)",
        "ארבע ראשי (Quadriceps Femoris)",
        "רחב גבי (Latissimus Dorsi)",
      ],
      working_joints: [
        "ירך (Hip), ברך (Knee)",
        "עמוד שדרה (Spine) בלבד",
        "ירך (Hip), ברך (Knee), קרסול (Ankle)",
        "רק מפרק הירך (Hip)",
      ],
      origin_insertion: [
        "אוריגין גלוטאוס: עצם הכסל, סקרום ועצם הזנב. אינסרשן: עצם הירך ורצועת ITB",
        "אוריגין: חוליות מותניות. אינסרשן: עצם הכסל",
        "אוריגין: ASIS. אינסרשן: פקעת השוקה",
        "אוריגין: זווית תחתונה של השכמה. אינסרשן: עצם הזרוע",
      ],
      synergists_antagonists: [
        "סינרגיסטים: ארבע ראשי, זוקפי גב (איזומטרי). אנטגוניסטים: מותן כסל (Iliopsoas)",
        "סינרגיסטים: רחב גבי וטרפזים. אנטגוניסטים: חזה גדול",
        "סינרגיסטים: המסטרינגס. אנטגוניסטים: גלוטאוס מקסימוס",
        "סינרגיסטים: זוקפי גב (קונצנטרי). אנטגוניסטים: שרירי הליבה",
      ],
      two_cues: [
        "1. מוט קרוב וצמוד לרגליים לאורך כל התנועה. 2. שמירה על גב ניטרלי ללא כפיפה בעמוד השדרה.",
        "1. משיכת המוט בעזרת כוח הידיים. 2. מבט למטה לרצפה.",
        "1. התחלת התנועה עם אגן גבוה מקו הכתפיים. 2. גב עגול בשלב המשיכה.",
        "1. הרחקת המוט מהגוף כדי למנוע שפשוף. 2. נעילת ברכיים מהירה לפני פשיטת ירך.",
      ],
    },
  },
  {
    id: "3",
    name: "לחיצת חזה בשכיבה (Bench Press)",
    category: "upper_body",
    solution: {
      target_muscle: "חזה גדול (Pectoralis Major)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow)",
      origin_insertion: "אוריגין: עצם הבריח (Clavicle), סטרנום וצלעות עליונות. אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: כתף קדמית, תלת ראשי (Triceps). אנטגוניסטים: רחב גבי, כתף אחורית",
      two_cues: "1. שמירה על 5 נקודות מגע (כפות רגליים, ישבן, שכמות, ראש). 2. הורדת המוט בקו הפטמות.",
    },
    multiple_choice_options: {
      target_muscle: [
        "חזה גדול (Pectoralis Major)",
        "תלת ראשי (Triceps Brachii)",
        "כתף קדמית (Anterior Deltoid)",
        "רחב גבי (Latissimus Dorsi)",
      ],
      working_joints: [
        "כתף (Glenohumeral), מרפק (Elbow)",
        "כתף (Glenohumeral) בלבד",
        "מרפק (Elbow) ושורש כף יד (Wrist)",
        "כתף (Glenohumeral), שכמה-בית חזה (Scapulothoracic)",
      ],
      origin_insertion: [
        "אוריגין: עצם הבריח (Clavicle), סטרנום וצלעות עליונות. אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: זיז הקורקואיד (Coracoid Process). אינסרשן: צלעות 3-5",
        "אוריגין: חוליות גביות ומותניות. אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: אקרומיון ועצם הבריח. אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      ],
      synergists_antagonists: [
        "סינרגיסטים: כתף קדמית, תלת ראשי (Triceps). אנטגוניסטים: רחב גבי, כתף אחורית",
        "סינרגיסטים: דו ראשי (Biceps). אנטגוניסטים: תלת ראשי (Triceps)",
        "סינרגיסטים: טרפז אמצעי ומעוינים. אנטגוניסטים: חזה קטן",
        "סינרגיסטים: רחב גבי. אנטגוניסטים: כתף קדמית",
      ],
      two_cues: [
        "1. שמירה על 5 נקודות מגע (כפות רגליים, ישבן, שכמות, ראש). 2. הורדת המוט בקו הפטמות.",
        "1. הרמת הישבן מהספסל לדחיפה חזקה. 2. הורדת המוט לצוואר.",
        "1. אחיזה רחבה ככל הניתן תמיד. 2. ניתוק השכמות מהספסל בסוף הלחיצה.",
        "1. רגליים באוויר כדי למקד את החזה. 2. מרפקים ב-90 מעלות מדויקות לגוף.",
      ],
    },
  },
];

export const upperBodyExercises = exercises.filter((e) => e.category === "upper_body");
export const lowerBodyExercises = exercises.filter((e) => e.category === "lower_body");
