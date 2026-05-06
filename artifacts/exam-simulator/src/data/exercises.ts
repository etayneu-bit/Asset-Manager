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
      origin_insertion: "אוריגין: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
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
        "אוריגין: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: ASIS (Anterior Superior Iliac Spine). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: גבששת השת (Ischial Tuberosity). אינסרשן: ראש הפיבולה (Fibular Head)",
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
      origin_insertion: "אוריגין גלוטאוס: עצם הכסל (Ilium), סקרום (Sacrum) ועצם הזנב (Coccyx). אינסרשן: עצם הירך (Femur) ורצועת ITB (Iliotibial Band)",
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
        "אוריגין גלוטאוס: עצם הכסל (Ilium), סקרום (Sacrum) ועצם הזנב (Coccyx). אינסרשן: עצם הירך (Femur) ורצועת ITB (Iliotibial Band)",
        "אוריגין: חוליות מותניות (Lumbar Vertebrae). אינסרשן: עצם הכסל (Ilium)",
        "אוריגין: ASIS (Anterior Superior Iliac Spine). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: זווית תחתונה של השכמה (Inferior Angle of Scapula). אינסרשן: עצם הזרוע (Humerus)",
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
      origin_insertion: "אוריגין: עצם הבריח (Clavicle), סטרנום (Sternum) וצלעות עליונות (Upper Ribs). אינסרשן: עצם הזרוע (Humerus)",
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
        "אוריגין: עצם הבריח (Clavicle), סטרנום (Sternum) וצלעות עליונות (Upper Ribs). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: זיז הקורקואיד (Coracoid Process). אינסרשן: צלעות 3-5",
        "אוריגין: חוליות גביות (Thoracic Vertebrae) ומותניות (Lumbar Vertebrae). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: אקרומיון (Acromion) ועצם הבריח (Clavicle). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
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
  {
    id: "4",
    name: "הרחקת כתפיים בעמידה (Lateral Raise)",
    category: "upper_body",
    solution: {
      target_muscle: "כתף אמצעית (Middle Deltoid)",
      working_joints: "כתף (Glenohumeral)",
      origin_insertion: "אוריגין: אקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      synergists_antagonists: "סינרגיסטים: על-קוצי (Supraspinatus). אנטגוניסטים: רחב גבי (Latissimus Dorsi)",
      two_cues: "1. כפיפה קלה במרפקים לאורך כל התנועה. 2. הרחקה עד גובה הכתפיים בלבד.",
    },
    multiple_choice_options: {
      target_muscle: ["כתף אמצעית (Middle Deltoid)", "כתף קדמית (Anterior Deltoid)", "טרפז עליון (Upper Trapezius)", "על-קוצי (Supraspinatus)"],
      working_joints: ["כתף (Glenohumeral)", "כתף (Glenohumeral) ומרפק (Elbow)", "שכמה-בית חזה (Scapulothoracic) בלבד", "מרפק (Elbow) ושורש כף יד (Wrist)"],
      origin_insertion: [
        "אוריגין: אקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: עצם הבריח (Clavicle). אינסרשן: זיז הקורקואיד (Coracoid Process)",
        "אוריגין: חוליות צוואריות C1-C7 (Cervical Vertebrae). אינסרשן: עצם השכמה (Scapula)",
        "אוריגין: זווית תחתונה של השכמה (Inferior Angle of Scapula). אינסרשן: עצם הזרוע (Humerus)",
      ],
      synergists_antagonists: ["סינרגיסטים: על-קוצי (Supraspinatus). אנטגוניסטים: רחב גבי (Latissimus Dorsi)", "סינרגיסטים: תלת ראשי. אנטגוניסטים: דו ראשי", "סינרגיסטים: טרפז תחתון. אנטגוניסטים: מרימי שכמה", "סינרגיסטים: חזה גדול. אנטגוניסטים: טרפז אמצעי"],
      two_cues: ["1. כפיפה קלה במרפקים לאורך כל התנועה. 2. הרחקה עד גובה הכתפיים בלבד.", "1. נעילת מרפקים מוחלטת. 2. הרמת המשקולות מעל הראש להגדלת טווח.", "1. עבודה עם תנופה מהגב התחתון. 2. הורדה מהירה של המשקולות.", "1. הפניית אגודלים למעלה בסוף התנועה. 2. קירוב שכמות חזק בהרחקה."],
    },
  },
  {
    id: "5",
    name: "מכרעים (Lunges)",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי (Quadriceps) וגלוטאוס מקסימוס (Gluteus Maximus)",
      working_joints: "ירך (Hip), ברך (Knee), קרסול (Ankle)",
      origin_insertion: "אוריגין 4 ראשי: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
      synergists_antagonists: "סינרגיסטים: המסטרינגס (בפשיטת ירך), תאומים. אנטגוניסטים: מותן כסל (Iliopsoas)",
      two_cues: "1. פלג גוף עליון זקוף, חזה פתוח. 2. הברך הקדמית לא קורסת פנימה ועוקבת אחר כיוון האצבעות.",
    },
    multiple_choice_options: {
      target_muscle: ["ארבע ראשי (Quadriceps) וגלוטאוס מקסימוס (Gluteus Maximus)", "המסטרינגס (Hamstrings) ושרירי התאומים (Calves)", "מרחיקי ירך (Abductors) בלבד", "זוקפי עמוד השדרה (Erector Spinae)"],
      working_joints: ["ירך (Hip), ברך (Knee), קרסול (Ankle)", "ירך (Hip) וברך (Knee) בלבד", "רק מפרק הברך (Knee)", "אגן (Pelvis) ועמוד שדרה מותני"],
      origin_insertion: [
        "אוריגין 4 ראשי: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין גלוטאוס: גבששת השת (Ischial Tuberosity). אינסרשן: ראש הפיבולה (Fibular Head)",
        "אוריגין 4 ראשי: ASIS (Anterior Superior Iliac Spine). אינסרשן: עצם הפיקה (Patella) בלבד",
        "אוריגין המסטרינגס: עצם הכסל (Ilium). אינסרשן: שורש כף הרגל (Tarsus)",
      ],
      synergists_antagonists: ["סינרגיסטים: המסטרינגס (בפשיטת ירך), תאומים. אנטגוניסטים: מותן כסל (Iliopsoas)", "סינרגיסטים: מותן כסל. אנטגוניסטים: גלוטאוס מקסימוס", "סינרגיסטים: סולאוס. אנטגוניסטים: תאומים", "סינרגיסטים: זוקפי גב. אנטגוניסטים: שרירי הליבה"],
      two_cues: ["1. פלג גוף עליון זקוף, חזה פתוח. 2. הברך הקדמית לא קורסת פנימה ועוקבת אחר כיוון האצבעות.", "1. הישענות קדימה עם הגו. 2. מגע חזק של הברך האחורית ברצפה בכל חזרה.", "1. עמידה בקו אחד (כמו פסי רכבת צרים). 2. משקל על העקב של הרגל האחורית.", "1. צעד קצר מאוד קדימה. 2. נעילת הברך הקדמית בעלייה."],
    },
  },
  {
    id: "6",
    name: "לחיצת רגליים במכונה (Leg Press)",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי (Quadriceps Femoris)",
      working_joints: "ירך (Hip), ברך (Knee), קרסול (Ankle)",
      origin_insertion: "אוריגין: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity) דרך גיד הפיקה (Patellar Tendon)",
      synergists_antagonists: "סינרגיסטים: גלוטאוס מקסימוס, סולאוס. אנטגוניסטים: המסטרינגס (בכפיפת ברך)",
      two_cues: "1. גב תחתון צמוד למשענת לאורך כל התנועה. 2. הימנעות מנעילת ברכיים מלאה בסוף הלחיצה.",
    },
    multiple_choice_options: {
      target_muscle: ["ארבע ראשי (Quadriceps Femoris)", "המסטרינגס (Hamstrings)", "תאומים (Gastrocnemius)", "זוקפי גב (Erector Spinae)"],
      working_joints: ["ירך (Hip), ברך (Knee), קרסול (Ankle)", "ירך (Hip) וברך (Knee) בלבד", "ברך (Knee) בלבד", "אגן (Pelvis) וברך (Knee)"],
      origin_insertion: [
        "אוריגין: AIIS (Anterior Inferior Iliac Spine) ועצם הירך (Femur). אינסרשן: פקעת השוקה (Tibial Tuberosity) דרך גיד הפיקה (Patellar Tendon)",
        "אוריגין: גבששת השת (Ischial Tuberosity). אינסרשן: ראש הפיבולה (Fibular Head)",
        "אוריגין: ASIS (Anterior Superior Iliac Spine). אינסרשן: קרסול (Ankle)",
        "אוריגין: רכס הכסל (Iliac Crest). אינסרשן: עצם הירך התחתונה (Distal Femur)",
      ],
      synergists_antagonists: ["סינרגיסטים: גלוטאוס מקסימוס, סולאוס. אנטגוניסטים: המסטרינגס (בכפיפת ברך)", "סינרגיסטים: המסטרינגס. אנטגוניסטים: גלוטאוס מקסימוס", "סינרגיסטים: מרחיקי ירך. אנטגוניסטים: מקרבי ירך", "סינרגיסטים: תאומים. אנטגוניסטים: סולאוס"],
      two_cues: ["1. גב תחתון צמוד למשענת לאורך כל התנועה. 2. הימנעות מנעילת ברכיים מלאה בסוף הלחיצה.", "1. הרמת האגן מהמושב כדי לדחוף חזק יותר. 2. ירידה עד שהברכיים פוגעות בחזה.", "1. כפות רגליים מחוץ לפלטה. 2. דחיפה בעזרת קצות האצבעות.", "1. עבודה מהירה ומתפרצת בירידה. 2. ברכיים קורסות פנימה ליציבות."],
    },
  },
  {
    id: "7",
    name: "פשיטת ברכיים במכונה (Leg Extension)",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי (Quadriceps Femoris)",
      working_joints: "ברך (Knee) בלבד",
      origin_insertion: "אוריגין: AIIS (Anterior Inferior Iliac Spine, ישר ירכי) ועצם הירך (Femur, וסטוסים). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
      synergists_antagonists: "סינרגיסטים: אין (תרגיל מבודד). אנטגוניסטים: המסטרינגס",
      two_cues: "1. התאמת ציר המכונה לציר הפיזיולוגי של הברך. 2. שליטה בשלב האקסצנטרי (הירידה).",
    },
    multiple_choice_options: {
      target_muscle: ["ארבע ראשי (Quadriceps Femoris)", "המסטרינגס (Hamstrings)", "גלוטאוס מקסימוס (Gluteus Maximus)", "תאומים (Gastrocnemius)"],
      working_joints: ["ברך (Knee) בלבד", "ירך (Hip) וברך (Knee)", "ברך (Knee) וקרסול (Ankle)", "ירך (Hip), ברך (Knee), קרסול (Ankle)"],
      origin_insertion: [
        "אוריגין: AIIS (Anterior Inferior Iliac Spine, ישר ירכי) ועצם הירך (Femur, וסטוסים). אינסרשן: פקעת השוקה (Tibial Tuberosity)",
        "אוריגין: גבששת השת (Ischial Tuberosity). אינסרשן: ראש הפיבולה (Fibular Head)",
        "אוריגין: ASIS (Anterior Superior Iliac Spine). אינסרשן: עצם הפיקה (Patella)",
        "אוריגין: עצם הבריח (Clavicle). אינסרשן: עצם הזרוע (Humerus)",
      ],
      synergists_antagonists: ["סינרגיסטים: אין (תרגיל מבודד). אנטגוניסטים: המסטרינגס", "סינרגיסטים: גלוטאוס מקסימוס. אנטגוניסטים: תאומים", "סינרגיסטים: המסטרינגס. אנטגוניסטים: ארבע ראשי", "סינרגיסטים: מקרבי ירך. אנטגוניסטים: מרחיקי ירך"],
      two_cues: ["1. התאמת ציר המכונה לציר הפיזיולוגי של הברך. 2. שליטה בשלב האקסצנטרי (הירידה).", "1. הרמת הישבן מהמושב. 2. זריקת המשקל למעלה בתנופה.", "1. כפות רגליים בפוינט (פלאנטר פלקשן) מוחלט. 2. כרית הדחיפה מעל הברך.", "1. הישענות קדימה. 2. עבודה בטווח תנועה חלקי בלבד."],
    },
  },
  {
    id: "8",
    name: "פרפר (Pec Deck / Dumbbell Flyes)",
    category: "upper_body",
    solution: {
      target_muscle: "חזה גדול (Pectoralis Major)",
      working_joints: "כתף (Glenohumeral) בלבד",
      origin_insertion: "אוריגין: עצם הבריח (Clavicle), סטרנום (Sternum) וצלעות 1-6. אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: כתף קדמית. אנטגוניסטים: כתף אחורית, טרפז אמצעי",
      two_cues: "1. שמירה על מרפקים כפופים קלות בזווית קבועה. 2. הוצאת חזה וקירוב שכמות לאורך התנועה.",
    },
    multiple_choice_options: {
      target_muscle: ["חזה גדול (Pectoralis Major)", "רחב גבי (Latissimus Dorsi)", "תלת ראשי (Triceps Brachii)", "דו ראשי (Biceps Brachii)"],
      working_joints: ["כתף (Glenohumeral) בלבד", "כתף (Glenohumeral) ומרפק (Elbow)", "מרפק (Elbow) בלבד", "שכמה-בית חזה (Scapulothoracic) בלבד"],
      origin_insertion: [
        "אוריגין: עצם הבריח (Clavicle), סטרנום (Sternum) וצלעות 1-6. אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: אקרומיון (Acromion) ועצם הבריח (Clavicle). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: חוליות גביות (Thoracic Vertebrae). אינסרשן: זווית תחתונה של השכמה (Inferior Angle of Scapula)",
        "אוריגין: סקרום (Sacrum) ואיליום (Ilium). אינסרשן: עצם הירך (Femur)",
      ],
      synergists_antagonists: ["סינרגיסטים: כתף קדמית. אנטגוניסטים: כתף אחורית, טרפז אמצעי", "סינרגיסטים: תלת ראשי. אנטגוניסטים: דו ראשי", "סינרגיסטים: רחב גבי. אנטגוניסטים: חזה גדול", "סינרגיסטים: טרפז עליון. אנטגוניסטים: מרימי שכמה"],
      two_cues: ["1. שמירה על מרפקים כפופים קלות בזווית קבועה. 2. הוצאת חזה וקירוב שכמות לאורך התנועה.", "1. פשיטה וכפיפה של המרפק במהלך התנועה (תנועת לחיצה). 2. ניתוק שכמות מהמשענת.", "1. מרפקים נעולים וישרים לחלוטין. 2. טווח תנועה מוגזם לאחור עד כאב.", "1. כתפיים מורמות לכיוון האוזניים. 2. גב עגול."],
    },
  },
  {
    id: "9",
    name: "מקבילים אחיזה רחבה (Wide Grip Dips)",
    category: "upper_body",
    solution: {
      target_muscle: "חזה גדול - סיבים תחתונים (Lower Pectoralis Major)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow)",
      origin_insertion: "אוריגין (חזה): סטרנום (Sternum), עצם הבריח (Clavicle). אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: כתף קדמית, תלת ראשי. אנטגוניסטים: רחב גבי, דו ראשי",
      two_cues: "1. רכינה קלה קדימה עם הגו למיקוד בחזה. 2. ירידה מבוקרת למניעת עומס יתר על מפרק הכתף.",
    },
    multiple_choice_options: {
      target_muscle: ["חזה גדול - סיבים תחתונים (Lower Pectoralis Major)", "רחב גבי (Latissimus Dorsi)", "כתף אחורית (Posterior Deltoid)", "דו ראשי (Biceps Brachii)"],
      working_joints: ["כתף (Glenohumeral), מרפק (Elbow)", "כתף (Glenohumeral) בלבד", "מרפק (Elbow) בלבד", "מרפק (Elbow) ושורש כף יד (Wrist)"],
      origin_insertion: [
        "אוריגין (חזה): סטרנום (Sternum), עצם הבריח (Clavicle). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין (תלת ראשי): אינפרא-גלנואיד (Infraglenoid Tubercle) ועצם הזרוע (Humerus). אינסרשן: אולקרנון (Olecranon)",
        "אוריגין: חוליות המותן (Lumbar Vertebrae). אינסרשן: סקרום (Sacrum)",
        "אוריגין: עצם השכמה (Scapula). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
      ],
      synergists_antagonists: ["סינרגיסטים: כתף קדמית, תלת ראשי. אנטגוניסטים: רחב גבי, דו ראשי", "סינרגיסטים: רחב גבי, טרפז. אנטגוניסטים: חזה גדול", "סינרגיסטים: דו ראשי. אנטגוניסטים: תלת ראשי", "סינרגיסטים: כתף אמצעית. אנטגוניסטים: חזה קטן"],
      two_cues: ["1. רכינה קלה קדימה עם הגו למיקוד בחזה. 2. ירידה מבוקרת למניעת עומס יתר על מפרק הכתף.", "1. פלג גוף עליון זקוף לחלוטין (מאונך לרצפה). 2. נעילת מרפקים מהירה.", "1. ירידה עד שהכתפיים נוגעות בידיים. 2. נדנוד הרגליים לעזרה.", "1. מבט לשמיים. 2. מרפקים צמודים לגוף לחלוטין."],
    },
  },
  {
    id: "10",
    name: "משיכת פולי עליון (Lat Pulldown)",
    category: "upper_body",
    solution: {
      target_muscle: "רחב גבי (Latissimus Dorsi)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow), שכמה (Scapula)",
      origin_insertion: "אוריגין: חוליות T7-L5, פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest). אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: דו ראשי, כתף אחורית, טרפז אמצעי. אנטגוניסטים: חזה גדול, תלת ראשי, כתף קדמית",
      two_cues: "1. משיכת המוט לבית החזה העליון. 2. הורדה וקירוב שכמות בזמן המשיכה.",
    },
    multiple_choice_options: {
      target_muscle: ["רחב גבי (Latissimus Dorsi)", "חזה גדול (Pectoralis Major)", "כתף קדמית (Anterior Deltoid)", "תלת ראשי (Triceps Brachii)"],
      working_joints: ["כתף (Glenohumeral), מרפק (Elbow), שכמה (Scapula)", "כתף (Glenohumeral) בלבד", "מרפק (Elbow) בלבד", "כתף (Glenohumeral) ושורש כף יד (Wrist)"],
      origin_insertion: [
        "אוריגין: חוליות T7-L5, פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: סטרנום (Sternum) ועצם הבריח (Clavicle). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: אקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: סופרא-גלנואיד (Supraglenoid Tubercle). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
      ],
      synergists_antagonists: ["סינרגיסטים: דו ראשי, כתף אחורית, טרפז אמצעי. אנטגוניסטים: חזה גדול, תלת ראשי, כתף קדמית", "סינרגיסטים: תלת ראשי, חזה גדול. אנטגוניסטים: רחב גבי, דו ראשי", "סינרגיסטים: טרפז עליון, מרימי שכמה. אנטגוניסטים: טרפז תחתון", "סינרגיסטים: כתף קדמית, חזה קטן. אנטגוניסטים: מעוינים"],
      two_cues: ["1. משיכת המוט לבית החזה העליון. 2. הורדה וקירוב שכמות בזמן המשיכה.", "1. משיכת המוט אל מאחורי העורף למטה. 2. הישענות אחורה עד שכיבה.", "1. עבודה עם ידיים ישרות ללא כפיפת מרפק. 2. הכתפיים מורמות לאוזניים.", "1. אחיזה צמודה בלבד. 2. משיכה עד הפופיק."],
    },
  },
  {
    id: "11",
    name: "חתירה (Rowing - Cable/Machine)",
    category: "upper_body",
    solution: {
      target_muscle: "רחב גבי (Latissimus Dorsi)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow), שכמה (Scapula)",
      origin_insertion: "אוריגין: חוליות T7-L5, פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest). אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: כתף אחורית, דו ראשי, טרפז אמצעי ומעוינים. אנטגוניסטים: חזה גדול, כתף קדמית",
      two_cues: "1. שמירה על חזה זקוף וגב ניטרלי. 2. משיכת הידית לכיוון הבטן/צלעות תחתונות.",
    },
    multiple_choice_options: {
      target_muscle: ["רחב גבי (Latissimus Dorsi)", "חזה גדול (Pectoralis Major)", "זוקפי עמוד השדרה (Erector Spinae)", "תלת ראשי (Triceps Brachii)"],
      working_joints: ["כתף (Glenohumeral), מרפק (Elbow), שכמה (Scapula)", "כתף (Glenohumeral) בלבד", "מרפק (Elbow) ועמוד שדרה (Spine)", "מרפק (Elbow) ושורש כף יד (Wrist)"],
      origin_insertion: [
        "אוריגין: חוליות T7-L5, פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: חוליות צוואריות (Cervical Vertebrae). אינסרשן: עצם הבריח (Clavicle)",
        "אוריגין: עצם הכסל (Ilium) בלבד. אינסרשן: פיבולה (Fibula)",
        "אוריגין: סטרנום (Sternum). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      ],
      synergists_antagonists: ["סינרגיסטים: כתף אחורית, דו ראשי, טרפז אמצעי ומעוינים. אנטגוניסטים: חזה גדול, כתף קדמית", "סינרגיסטים: כתף קדמית, חזה גדול. אנטגוניסטים: רחב גבי", "סינרגיסטים: תלת ראשי, סולאוס. אנטגוניסטים: המסטרינגס", "סינרגיסטים: שרירי הליבה (קונצנטרי). אנטגוניסטים: זוקפי גב"],
      two_cues: ["1. שמירה על חזה זקוף וגב ניטרלי. 2. משיכת הידית לכיוון הבטן/צלעות תחתונות.", "1. כיפוף הגב קדימה ואחורה עם התנועה. 2. משיכה לכיוון הסנטר.", "1. משיכה עם מרפקים נעולים. 2. עיגול הגב העליון במשיכה.", "1. אחיזה רחבה מאוד בלבד. 2. הרמת כתפיים לאוזניים."],
    },
  },
  {
    id: "12",
    name: "פולאובר (Pullover)",
    category: "upper_body",
    solution: {
      target_muscle: "רחב גבי (Latissimus Dorsi)",
      working_joints: "כתף (Glenohumeral) בלבד",
      origin_insertion: "אוריגין: פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest), חוליות T7-L5. אינסרשן: עצם הזרוע (Humerus)",
      synergists_antagonists: "סינרגיסטים: חזה גדול, תלת ראשי (ראש ארוך). אנטגוניסטים: כתף קדמית ואמצעית",
      two_cues: "1. שמירה על זווית קבועה במרפקים (כפיפה קלה). 2. מתיחת המשקולת לאחור עד קו האוזניים.",
    },
    multiple_choice_options: {
      target_muscle: ["רחב גבי (Latissimus Dorsi)", "כתף קדמית (Anterior Deltoid)", "דו ראשי (Biceps Brachii)", "זוקפי גב (Erector Spinae)"],
      working_joints: ["כתף (Glenohumeral) בלבד", "כתף (Glenohumeral) ומרפק (Elbow)", "מרפק (Elbow) בלבד", "שכמה-בית חזה (Scapulothoracic) ועמוד שדרה"],
      origin_insertion: [
        "אוריגין: פציה תורקולומברית (Thoracolumbar Fascia), רכס הכסל (Iliac Crest), חוליות T7-L5. אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: עצם הבריח (Clavicle) וסטרנום (Sternum). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: זיז הקורקואיד (Coracoid Process). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
        "אוריגין: אקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      ],
      synergists_antagonists: ["סינרגיסטים: חזה גדול, תלת ראשי (ראש ארוך). אנטגוניסטים: כתף קדמית ואמצעית", "סינרגיסטים: דו ראשי, טרפז. אנטגוניסטים: תלת ראשי", "סינרגיסטים: כתף קדמית. אנטגוניסטים: חזה גדול", "סינרגיסטים: זוקפי גב. אנטגוניסטים: שרירי בטן"],
      two_cues: ["1. שמירה על זווית קבועה במרפקים (כפיפה קלה). 2. מתיחת המשקולת לאחור עד קו האוזניים.", "1. פשיטה וכפיפה של המרפק לאורך כל התנועה. 2. הורדת המשקולת עד לרצפה.", "1. הרמת האגן מהספסל להגדלת הטווח. 2. מרפקים נעולים וישרים לחלוטין.", "1. ביצוע התרגיל בעמידה בלבד. 2. משיכת המשקולת עד הפופיק."],
    },
  },
  {
    id: "13",
    name: "לחיצת כתפיים באחיזה רחבה (Wide Grip Shoulder Press)",
    category: "upper_body",
    solution: {
      target_muscle: "כתף קדמית ואמצעית (Anterior & Middle Deltoid)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow)",
      origin_insertion: "אוריגין: עצם הבריח (Clavicle) ואקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      synergists_antagonists: "סינרגיסטים: תלת ראשי, טרפז עליון. אנטגוניסטים: רחב גבי, דו ראשי",
      two_cues: "1. הורדת המשקולות/מוט עד זווית של כ-90 מעלות במרפק. 2. הימנעות מהקשתת יתר בגב התחתון.",
    },
    multiple_choice_options: {
      target_muscle: ["כתף קדמית ואמצעית (Anterior & Middle Deltoid)", "כתף אחורית (Posterior Deltoid)", "רחב גבי (Latissimus Dorsi)", "חזה גדול - סיבים תחתונים (Lower Pectoralis Major)"],
      working_joints: ["כתף (Glenohumeral), מרפק (Elbow)", "כתף (Glenohumeral) בלבד", "מרפק (Elbow) בלבד", "שכמה-בית חזה (Scapulothoracic) בלבד"],
      origin_insertion: [
        "אוריגין: עצם הבריח (Clavicle) ואקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: חוליות T7-L5. אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: סטרנום (Sternum). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
        "אוריגין: זווית תחתונה של השכמה (Inferior Angle of Scapula). אינסרשן: אולקרנון (Olecranon)",
      ],
      synergists_antagonists: ["סינרגיסטים: תלת ראשי, טרפז עליון. אנטגוניסטים: רחב גבי, דו ראשי", "סינרגיסטים: דו ראשי, חזה גדול. אנטגוניסטים: תלת ראשי", "סינרגיסטים: רחב גבי, מעוינים. אנטגוניסטים: כתף קדמית", "סינרגיסטים: כתף אחורית. אנטגוניסטים: טרפז עליון"],
      two_cues: ["1. הורדת המשקולות/מוט עד זווית של כ-90 מעלות במרפק. 2. הימנעות מהקשתת יתר בגב התחתון.", "1. הורדת המשקולות עד למותניים. 2. נעילת מרפקים אגרסיבית.", "1. הישענות אחורה עד שכיבה כמעט מלאה. 2. עבודה בתנופה מהרגליים (Push Press).", "1. מרפקים מופנים קדימה בלבד. 2. כיווץ שכמות בסוף התנועה."],
    },
  },
  {
    id: "14",
    name: "לחיצת כתפיים באחיזה צרה (Narrow Grip Shoulder Press)",
    category: "upper_body",
    solution: {
      target_muscle: "כתף קדמית (Anterior Deltoid)",
      working_joints: "כתף (Glenohumeral), מרפק (Elbow)",
      origin_insertion: "אוריגין: השליש הלטרלי של עצם הבריח (Lateral Third of Clavicle). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
      synergists_antagonists: "סינרגיסטים: תלת ראשי, חזה עליון. אנטגוניסטים: רחב גבי, כתף אחורית",
      two_cues: "1. מרפקים מצביעים קדימה (במישור החיצי). 2. לחיצה בקו ישר מעל הראש.",
    },
    multiple_choice_options: {
      target_muscle: ["כתף קדמית (Anterior Deltoid)", "כתף אמצעית (Middle Deltoid)", "רחב גבי (Latissimus Dorsi)", "דו ראשי (Biceps Brachii)"],
      working_joints: ["כתף (Glenohumeral), מרפק (Elbow)", "כתף (Glenohumeral) בלבד", "מרפק (Elbow) ושורש כף יד (Wrist)", "שכמה-בית חזה (Scapulothoracic) ומרפק (Elbow)"],
      origin_insertion: [
        "אוריגין: השליש הלטרלי של עצם הבריח (Lateral Third of Clavicle). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: אקרומיון (Acromion). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: סטרנום (Sternum). אינסרשן: אולקרנון (Olecranon)",
        "אוריגין: חוליות גביות (Thoracic Vertebrae). אינסרשן: עצם השכמה (Scapula)",
      ],
      synergists_antagonists: ["סינרגיסטים: תלת ראשי, חזה עליון. אנטגוניסטים: רחב גבי, כתף אחורית", "סינרגיסטים: דו ראשי, טרפז עליון. אנטגוניסטים: תלת ראשי", "סינרגיסטים: כתף אמצעית. אנטגוניסטים: כתף קדמית", "סינרגיסטים: רחב גבי. אנטגוניסטים: חזה עליון"],
      two_cues: ["1. מרפקים מצביעים קדימה (במישור החיצי). 2. לחיצה בקו ישר מעל הראש.", "1. פתיחת מרפקים החוצה לצדדים. 2. הקשתה מוגזמת של הגב התחתון.", "1. לחיצה של המוט הרחק קדימה מהגוף. 2. מבט לרצפה.", "1. הורדת המוט עד לפופיק. 2. אחיזה רחבה מרוחב הכתפיים."],
    },
  },
  {
    id: "15",
    name: "פשיטת מרפקים בפולי עליון (Triceps Pushdown)",
    category: "upper_body",
    solution: {
      target_muscle: "תלת ראשי (Triceps Brachii)",
      working_joints: "מרפק (Elbow) בלבד",
      origin_insertion: "אוריגין: אינפרא-גלנואיד (Infraglenoid Tubercle, ראש ארוך) ועצם הזרוע (Humerus). אינסרשן: זיז האולקרנון (Olecranon Process) באולנה (Ulna)",
      synergists_antagonists: "סינרגיסטים: אנקונאוס (Anconeus). אנטגוניסטים: דו ראשי (Biceps Brachii)",
      two_cues: "1. קיבוע המרפקים לצדי הגוף ללא תנועה בכתף. 2. פשיטה מלאה בסוף התנועה לכיווץ מקסימלי.",
    },
    multiple_choice_options: {
      target_muscle: ["תלת ראשי (Triceps Brachii)", "דו ראשי (Biceps Brachii)", "כתף קדמית (Anterior Deltoid)", "רחב גבי (Latissimus Dorsi)"],
      working_joints: ["מרפק (Elbow) בלבד", "כתף (Glenohumeral) ומרפק (Elbow)", "שורש כף יד (Wrist) בלבד", "כתף (Glenohumeral) בלבד"],
      origin_insertion: [
        "אוריגין: אינפרא-גלנואיד (Infraglenoid Tubercle, ראש ארוך) ועצם הזרוע (Humerus). אינסרשן: זיז האולקרנון (Olecranon Process) באולנה (Ulna)",
        "אוריגין: סופרא-גלנואיד (Supraglenoid Tubercle) וקורקואיד (Coracoid Process). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
        "אוריגין: אקרומיון (Acromion). אינסרשן: גבששת הדלתואיד (Deltoid Tuberosity)",
        "אוריגין: סטרנום (Sternum). אינסרשן: חוליות צוואריות (Cervical Vertebrae)",
      ],
      synergists_antagonists: ["סינרגיסטים: אנקונאוס (Anconeus). אנטגוניסטים: דו ראשי (Biceps Brachii)", "סינרגיסטים: דו ראשי. אנטגוניסטים: תלת ראשי", "סינרגיסטים: חזה גדול. אנטגוניסטים: רחב גבי", "סינרגיסטים: כתף קדמית. אנטגוניסטים: כתף אחורית"],
      two_cues: ["1. קיבוע המרפקים לצדי הגוף ללא תנועה בכתף. 2. פשיטה מלאה בסוף התנועה לכיווץ מקסימלי.", "1. תנועה חזקה של הכתפיים קדימה ואחורה. 2. עבודה מהירה ללא שליטה.", "1. התרחקות מהכבל ומשיכה לכיוון החזה. 2. כפיפת מרפק עד 90 מעלות בלבד.", "1. הרמת שכמות לאוזניים. 2. גב עגול לאורך התרגיל."],
    },
  },
  {
    id: "16",
    name: "כפיפת מרפקים (Biceps Curl)",
    category: "upper_body",
    solution: {
      target_muscle: "דו ראשי (Biceps Brachii) וברכיאליס (Brachialis)",
      working_joints: "מרפק (Elbow) בלבד",
      origin_insertion: "אוריגין (דו ראשי): סופרא-גלנואיד (Supraglenoid Tubercle) וזיז הקורקואיד (Coracoid Process). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
      synergists_antagonists: "סינרגיסטים: ברכיורדיאליס (Brachioradialis). אנטגוניסטים: תלת ראשי (Triceps Brachii)",
      two_cues: "1. שמירה על מרפקים מקובעים לצדי הגוף. 2. הימנעות מתנופה (צ'יטינג) של הגב והכתפיים.",
    },
    multiple_choice_options: {
      target_muscle: ["דו ראשי (Biceps Brachii) וברכיאליס (Brachialis)", "תלת ראשי (Triceps Brachii)", "כתף קדמית (Anterior Deltoid)", "מכופפי כף היד (Wrist Flexors) בלבד"],
      working_joints: ["מרפק (Elbow) בלבד", "כתף (Glenohumeral) ומרפק (Elbow)", "שורש כף יד (Wrist) בלבד", "כתף (Glenohumeral), מרפק (Elbow) ושורש כף יד (Wrist)"],
      origin_insertion: [
        "אוריגין (דו ראשי): סופרא-גלנואיד (Supraglenoid Tubercle) וזיז הקורקואיד (Coracoid Process). אינסרשן: פקעת הרדיוס (Radial Tuberosity)",
        "אוריגין: אינפרא-גלנואיד (Infraglenoid Tubercle). אינסרשן: זיז האולקרנון (Olecranon Process)",
        "אוריגין: אקרומיון (Acromion) ועצם הבריח (Clavicle). אינסרשן: עצם הזרוע (Humerus)",
        "אוריגין: סטרנום (Sternum). אינסרשן: צלעות עליונות (Upper Ribs)",
      ],
      synergists_antagonists: ["סינרגיסטים: ברכיורדיאליס (Brachioradialis). אנטגוניסטים: תלת ראשי (Triceps Brachii)", "סינרגיסטים: תלת ראשי. אנטגוניסטים: ברכיאליס", "סינרגיסטים: כתף אחורית. אנטגוניסטים: כתף קדמית", "סינרגיסטים: רחב גבי. אנטגוניסטים: חזה גדול"],
      two_cues: ["1. שמירה על מרפקים מקובעים לצדי הגוף. 2. הימנעות מתנופה (צ'יטינג) של הגב והכתפיים.", "1. הרמת המרפקים מעלה בסוף התנועה. 2. נדנוד האגן ליצירת תנופה.", "1. כפיפת שורש כף היד (Flexion) אגרסיבית. 2. עמידה על רגל אחת בלבד.", "1. הורדת המשקולות בנפילה חופשית. 2. נעילת ברכיים."],
    },
  },
];

export const upperBodyExercises = exercises.filter((e) => e.category === "upper_body");
export const lowerBodyExercises = exercises.filter((e) => e.category === "lower_body");
