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
    name: "סקוואט",
    category: "lower_body",
    solution: {
      target_muscle: "ארבע ראשי הירך (Quadriceps Femoris)",
      working_joints: "מפרק הברך, מפרק הירך, מפרק הקרסול",
      origin_insertion: "אוריגין: ASIS ועצם הפמור. אינסרשן: פקעת השוקה דרך גיד הפיקה",
      synergists_antagonists: "סינרגיסטים: גלוטאוס מקסימוס, אדוקטורים. אנטגוניסטים: Hamstrings",
      two_cues: "1. ברכיים בכיוון האצבעות – מניעת Knee Valgus. 2. גב ישר ועמוד שדרה ניטרלי לאורך כל התנועה.",
    },
    multiple_choice_options: {
      target_muscle: [
        "ארבע ראשי הירך (Quadriceps Femoris)",
        "Hamstrings (ישכרול)",
        "גלוטאוס מקסימוס",
        "Gastrocnemius (תאומים)",
      ],
      working_joints: [
        "מפרק הברך, מפרק הירך, מפרק הקרסול",
        "מפרק הירך בלבד",
        "מפרק הברך ומפרק הקרסול בלבד",
        "מפרק הכתף, מפרק הירך, מפרק הברך",
      ],
      origin_insertion: [
        "אוריגין: ASIS ועצם הפמור. אינסרשן: פקעת השוקה דרך גיד הפיקה",
        "אוריגין: Ischial Tuberosity. אינסרשן: ראש הפיבולה",
        "אוריגין: Iliac Crest. אינסרשן: Greater Trochanter",
        "אוריגין: Femur. אינסרשן: עצם הסירה (Navicular)",
      ],
      synergists_antagonists: [
        "סינרגיסטים: גלוטאוס מקסימוס, אדוקטורים. אנטגוניסטים: Hamstrings",
        "סינרגיסטים: Hamstrings, Gastrocnemius. אנטגוניסטים: Quadriceps",
        "סינרגיסטים: Biceps Brachii, Deltoid. אנטגוניסטים: Triceps",
        "סינרגיסטים: Soleus, Tibialis Anterior. אנטגוניסטים: גלוטאוס מינימוס",
      ],
      two_cues: [
        "1. ברכיים בכיוון האצבעות – מניעת Knee Valgus. 2. גב ישר ועמוד שדרה ניטרלי לאורך כל התנועה.",
        "1. נשום החוצה בירידה. 2. הרם את העקבים מהרצפה לשמירה על יציבות.",
        "1. שמור על עיניים עצומות למיקוד. 2. לחץ את הברכיים כלפי פנים.",
        "1. הנח את הכף יד על המרפקים. 2. שמור על ידיים ישרות לצדדים.",
      ],
    },
  },
  {
    id: "2",
    name: "לחיצת חזה בשכיבה (Bench Press)",
    category: "upper_body",
    solution: {
      target_muscle: "פקטורליס מג'ור (Pectoralis Major)",
      working_joints: "מפרק הכתף (כיפוף אופקי → יישור אופקי), מפרק המרפק (כיפוף → יישור)",
      origin_insertion: "אוריגין: עצם הבריח, עצם החזה, עלויות צלעות 2-6. אינסרשן: פיקת ההומרוס (Bicipital Groove)",
      synergists_antagonists: "סינרגיסטים: Anterior Deltoid, Triceps Brachii, Serratus Anterior. אנטגוניסטים: Rhomboids, Middle Trapezius, Posterior Deltoid",
      two_cues: "1. כתפיים יורדות ולאחור – לא לאפשר להן לעלות לאוזניים. 2. לחץ את השחי כלפי המוט בירידה לשמירה על יציב מרפק.",
    },
    multiple_choice_options: {
      target_muscle: [
        "פקטורליס מג'ור (Pectoralis Major)",
        "Latissimus Dorsi (לטיסימוס)",
        "Anterior Deltoid (דלטואיד קדמי)",
        "Serratus Anterior (מסור קדמי)",
      ],
      working_joints: [
        "מפרק הכתף (כיפוף אופקי → יישור אופקי), מפרק המרפק (כיפוף → יישור)",
        "מפרק הכתף (אבדוקציה → אדוקציה), מפרק המרפק (כיפוף → יישור)",
        "מפרק המרפק בלבד",
        "מפרק הכתף בלבד",
      ],
      origin_insertion: [
        "אוריגין: עצם הבריח, עצם החזה, עלויות צלעות 2-6. אינסרשן: פיקת ההומרוס (Bicipital Groove)",
        "אוריגין: Ischial Tuberosity. אינסרשן: ראש הפיבולה",
        "אוריגין: Scapula (Glenoid). אינסרשן: Radial Tuberosity",
        "אוריגין: Iliac Crest. אינסרשן: Medial Epicondyle",
      ],
      synergists_antagonists: [
        "סינרגיסטים: Anterior Deltoid, Triceps Brachii, Serratus Anterior. אנטגוניסטים: Rhomboids, Middle Trapezius, Posterior Deltoid",
        "סינרגיסטים: Biceps Brachii, Posterior Deltoid. אנטגוניסטים: Triceps, Pectoralis Minor",
        "סינרגיסטים: Hamstrings, Gluteus Maximus. אנטגוניסטים: Quadriceps",
        "סינרגיסטים: Rhomboids, Lower Trapezius. אנטגוניסטים: Serratus Anterior",
      ],
      two_cues: [
        "1. כתפיים יורדות ולאחור – לא לאפשר להן לעלות לאוזניים. 2. לחץ את השחי כלפי המוט בירידה לשמירה על יציב מרפק.",
        "1. נשום פנימה בעליה. 2. כף הרגל באוויר לאיזון.",
        "1. אצבעות לעבר הגוף. 2. שמור על עקבים מורמים.",
        "1. הנח את הגב על הספסל לגמרי. 2. אחז את המוט בצמצום לשמירה על שורש כף יד.",
      ],
    },
  },
  {
    id: "3",
    name: "מתיחת גב רחבה (Lat Pulldown)",
    category: "upper_body",
    solution: {
      target_muscle: "לטיסימוס דורסי (Latissimus Dorsi)",
      working_joints: "מפרק הכתף (אבדוקציה → אדוקציה), מפרק המרפק (יישור → כיפוף)",
      origin_insertion: "אוריגין: חוליות T7–L5, Iliac Crest, שלוש צלעות תחתונות. אינסרשן: Intertubercular Groove של ההומרוס",
      synergists_antagonists: "סינרגיסטים: Teres Major, Posterior Deltoid, Rhomboids, Biceps Brachii. אנטגוניסטים: Anterior Deltoid, Upper Trapezius, Serratus Anterior",
      two_cues: "1. הרד את הכתפיים לפני המשיכה – שמור אותן מורדות ומאחורה לאורך כל התנועה. 2. הובל עם המרפקים כלפי מטה – דמיין שאתה מכניס אותם לכיסים.",
    },
    multiple_choice_options: {
      target_muscle: [
        "לטיסימוס דורסי (Latissimus Dorsi)",
        "Rhomboids (ראמבואידים)",
        "Trapezius (טרפזיוס)",
        "Teres Minor",
      ],
      working_joints: [
        "מפרק הכתף (אבדוקציה → אדוקציה), מפרק המרפק (יישור → כיפוף)",
        "מפרק הכתף (כיפוף → יישור), מפרק המרפק (כיפוף → יישור)",
        "מפרק הברך ומפרק הירך בלבד",
        "מפרק המרפק בלבד",
      ],
      origin_insertion: [
        "אוריגין: חוליות T7–L5, Iliac Crest, שלוש צלעות תחתונות. אינסרשן: Intertubercular Groove של ההומרוס",
        "אוריגין: Scapula. אינסרשן: Radial Tuberosity",
        "אוריגין: Ischial Tuberosity. אינסרשן: Lateral Condyle",
        "אוריגין: Clavicle. אינסרשן: Acromion",
      ],
      synergists_antagonists: [
        "סינרגיסטים: Teres Major, Posterior Deltoid, Rhomboids, Biceps Brachii. אנטגוניסטים: Anterior Deltoid, Upper Trapezius, Serratus Anterior",
        "סינרגיסטים: Quadriceps, Gluteus Medius. אנטגוניסטים: Hamstrings, Soleus",
        "סינרגיסטים: Triceps, Pectoralis Major. אנטגוניסטים: Biceps Brachii",
        "סינרגיסטים: Anterior Deltoid, Pectoralis Minor. אנטגוניסטים: Rhomboids",
      ],
      two_cues: [
        "1. הרד את הכתפיים לפני המשיכה – שמור אותן מורדות ומאחורה לאורך כל התנועה. 2. הובל עם המרפקים כלפי מטה – דמיין שאתה מכניס אותם לכיסים.",
        "1. אחז את המוט רחב ככל האפשר. 2. נשום פנימה בעת המשיכה.",
        "1. כוף את הגב כלפי מטה. 2. שמור על ידיים ישרות לגמרי.",
        "1. הנע את הראש קדימה. 2. הורד את המוט לאחורי הצוואר.",
      ],
    },
  },
  {
    id: "4",
    name: "דדליפט (Deadlift)",
    category: "lower_body",
    solution: {
      target_muscle: "Erector Spinae (שרירי זוקפי עמוד השדרה)",
      working_joints: "מפרק הירך (כיפוף → יישור), מפרק הברך (כיפוף → יישור), מפרק הקרסול (דורסיפלקסיה → פלנטרפלקסיה)",
      origin_insertion: "אוריגין: Iliac Crest, Sacrum, חוליות מותניות. אינסרשן: Transverse Processes של החוליות, זוויות הצלעות",
      synergists_antagonists: "סינרגיסטים: Gluteus Maximus, Hamstrings, Quadriceps, Trapezius. אנטגוניסטים: Rectus Abdominis, Iliopsoas",
      two_cues: "1. שמור על עמוד שדרה ניטרלי לאורך כל התנועה – אל תסגור את הגב. 2. 'לחץ' את הרצפה ממך בעליה – חשוב על Leg Press ולא על משיכה.",
    },
    multiple_choice_options: {
      target_muscle: [
        "Erector Spinae (שרירי זוקפי עמוד השדרה)",
        "Quadriceps Femoris (ארבע ראשי הירך)",
        "Gluteus Medius (גלוטאוס מדיוס)",
        "Soleus (סולאוס)",
      ],
      working_joints: [
        "מפרק הירך (כיפוף → יישור), מפרק הברך (כיפוף → יישור), מפרק הקרסול (דורסיפלקסיה → פלנטרפלקסיה)",
        "מפרק הכתף בלבד",
        "מפרק הברך ומפרק הקרסול בלבד",
        "מפרק הירך בלבד",
      ],
      origin_insertion: [
        "אוריגין: Iliac Crest, Sacrum, חוליות מותניות. אינסרשן: Transverse Processes של החוליות, זוויות הצלעות",
        "אוריגין: ASIS. אינסרשן: Tibial Tuberosity",
        "אוריגין: Ischial Tuberosity. אינסרשן: Medial Condyle של השוקה",
        "אוריגין: Fibula Head. אינסרשן: First Metatarsal",
      ],
      synergists_antagonists: [
        "סינרגיסטים: Gluteus Maximus, Hamstrings, Quadriceps, Trapezius. אנטגוניסטים: Rectus Abdominis, Iliopsoas",
        "סינרגיסטים: Anterior Deltoid, Serratus Anterior. אנטגוניסטים: Rhomboids",
        "סינרגיסטים: Biceps Brachii, Brachialis. אנטגוניסטים: Triceps Brachii",
        "סינרגיסטים: Rectus Abdominis, Iliopsoas. אנטגוניסטים: Erector Spinae",
      ],
      two_cues: [
        "1. שמור על עמוד שדרה ניטרלי לאורך כל התנועה – אל תסגור את הגב. 2. 'לחץ' את הרצפה ממך בעליה – חשוב על Leg Press ולא על משיכה.",
        "1. נשום פנימה בירידה, החוצה בעליה. 2. שמור על ברכיים נעולות.",
        "1. הגבה את הצוואר ככל האפשר. 2. שמור על כפות הרגלים צמודות.",
        "1. הנע את המוט רחוק מהגוף. 2. שמור על מרפקים כפופים.",
      ],
    },
  },
];

export const upperBodyExercises = exercises.filter((e) => e.category === "upper_body");
export const lowerBodyExercises = exercises.filter((e) => e.category === "lower_body");
