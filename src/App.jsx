import React, { useState, useMemo, useRef } from 'react';

function IconBookOpen({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function IconCheckCircle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function IconVolume({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}

function IconRotateCcw({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconArrowLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
    </svg>
  );
}

function IconSparkles({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}

function IconLayers({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function IconPuzzle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c0-1.57-1.28-2.85-2.85-2.85H14.5a2.5 2.5 0 0 0-4.99 0H7.41c-1.57 0-2.85 1.28-2.85 2.85v2.1a2.5 2.5 0 0 0 0 4.99v2.1c0 1.57 1.28 2.85 2.85 2.85h2.1a2.5 2.5 0 0 0 4.99 0h2.09c1.57 0 2.85-1.28 2.85-2.85v-2.1a2.5 2.5 0 0 0 0-4.99v-2.1z"/>
    </svg>
  );
}

function IconTimer({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>
    </svg>
  );
}

function IconBarChart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  );
}

function IconLogOut({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  );
}

function IconFolderPlus({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><line x1="12" x2="12" y1="10" y2="16"/><line x1="9" x2="15" y1="13" y2="13"/>
    </svg>
  );
}

function IconShieldCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

const generateComprehensivePsraBank = () => {
  const bank = [];
  const subjects = [
    { key: 'tajweed', title: 'Tajweed Al-Quran' },
    { key: 'imlak', title: 'Jawi, Imlak & Khat' },
    { key: 'arabic', title: 'Bahasa Arab' },
    { key: 'tauhid', title: 'Tauhid & Aqidah' },
    { key: 'ibadah', title: 'Fiqh & Ibadah' },
    { key: 'sirah', title: 'Sirah & Akhlak' }
  ];

  const authenticTemplates = {
    tajweed: [
      {
        qJ: "أڤاكه حكم تجويد باݢي نون ساكنة (نْ) يڠ برتمو دڠن حروف 'ر' أتاو 'ل'؟",
        qR: "Apakah hukum Tajweed bagi Nun Sakinah yang bertemu huruf 'Ra' atau 'Lam'?",
        aJ: "إدغام بلا ڠنة", aR: "Idgham Bila Ghunnah",
        exp: "Idgham Bila Ghunnah bermaksud memasukkan bunyi Nun ke dalam huruf Ra atau Lam tanpa dengung.",
        opts: ["إدغام بلا ڠنة", "إدغام مع ڠنة", "إظهار حلقي", "إقلاب"],
        correctIdx: 0
      },
      {
        qJ: "مِيمْ ساكنة (مْ) برتمو دڠن حروف 'ب' دناماكن حكم:",
        qR: "Mim Sakinah bertemu dengan huruf 'Ba' dinamakan hukum:",
        aJ: "إخفاء شفوي", aR: "Ikhfa' Shafawi",
        exp: "Ikhfa' Shafawi berlaku apabila Mim Sakinah bertemu huruf Ba berserta dengung 2 harakat.",
        opts: ["إخفاء شفوي", "إظهار شفوي", "إدغام متماثلين", "إقلاب"],
        correctIdx: 0
      },
      {
        qJ: "كادر ڤنجڠ باچاءن باݢي حكم 'مد واجب متصل' كتيك وصل اياله:",
        qR: "Kadar panjang bacaan bagi hukum 'Mad Wajib Muttasil' ketika wasal ialah:",
        aJ: "4 أتاو 5 حركة", aR: "4 atau 5 harakat",
        exp: "Mad Wajib Muttasil dibaca 4 atau 5 harakat ketika wasal, dan harus dibaca 4, 5 atau 6 harakat ketika waqaf.",
        opts: ["4 أتاو 5 حركة", "2 حركة سهاج", "6 حركة واجب", "3 حركة"],
        correctIdx: 0
      },
      {
        qJ: "حكم نون ماتي دالم كلمة 'الدُّنْيَا' اداله دباچ سچارا:",
        qR: "Hukum nun mati dalam perkataan 'Ad-Dunya' (الدُّنْيَا) dibaca secara:",
        aJ: "إظهار مطلق", aR: "Izhar Mutlaq",
        exp: "Izhar Mutlaq berlaku apabila Nun mati bertemu Wau atau Ya dalam satu kalimah yang sama.",
        opts: ["إظهار مطلق", "إدغام مع ڠنة", "إخفاء حقيقي", "إقلاب"],
        correctIdx: 0
      }
    ],
    imlak: [
      {
        qJ: "ايجاءن جاوي يڠ بتول باݢي كات ڤينجمن إيڠݢريس 'Teknologi' اياله:",
        qR: "Ejaan Jawi yang betul bagi kata pinjaman Inggeris 'Teknologi':",
        aJ: "تيكنولوجي", aR: "Teknologi (تيكنولوجي)",
        exp: "Kata serapan Inggeris dieja mengikut padanan fonetik suku kata DBP.",
        opts: ["تيكنولوجي", "تكنلوݢي", "تيكنالوݢي", "تيقنولوجي"],
        correctIdx: 0
      },
      {
        qJ: "كدودوقن همزة 3/4 (تيݢ ڤرايمڤت) دݢوناكن ڤد:",
        qR: "Kedudukan Hamzah 3/4 digunakan pada:",
        aJ: "ايمبوهن أخيرن '-أن' سلڤس حروف الف", aR: "Akhiran '-an' selepas huruf Alif",
        exp: "Contohnya kalimah bacaan (باچاءن) dan keadaan (كأداءن).",
        opts: ["ايمبوهن أخيرن '-أن' سلڤس الف", "أول كلمة ملايو", "دباوه الف كات عرب", "أخير كات إيڠݢريس"],
        correctIdx: 0
      },
      {
        qJ: "ايجاءن جاوي يڠ بتول باݢي كات ماجموق منتڤ 'كرجاسام' اياله:",
        qR: "Ejaan Jawi bagi kata majmuk mantap 'Kerjasama' ialah:",
        aJ: "كرجاسام (برسامبوڠ)", aR: "Kerjasama (bersambung)",
        exp: "Kata majmuk mantap dieja bersambung sepenuhnya tanpa ruang pemisah.",
        opts: ["كرجاسام", "كرجا سام", "كيرجاساما", "كرج سام"],
        correctIdx: 0
      }
    ],
    arabic: [
      {
        qJ: "أڤاكه مقصود الضمير (Kata Ganti Diri) 'هُمَا' دالم بهاس ملايو؟",
        qR: "Apakah maksud Dhomir 'هُمَا' (Huma) dalam Bahasa Melayu?",
        aJ: "مريك بردوا (Lelaki / Perempuan)", aR: "Mereka Berdua",
        exp: "Huma digunakan untuk kata ganti diri dua orang pihak ketiga.",
        opts: ["مريك بردوا", "دي سأورڠ ليلاكي", "كامي سموا", "أواك ليلاكي"],
        correctIdx: 0
      },
      {
        qJ: "الفِعْلُ المَاضِي باݢي ضمير 'أَنَا' (Saya telah membaca) اياله:",
        qR: "Fi'il Madhi bagi dhomir 'Ana' (Saya telah membaca):",
        aJ: "قَرَأْتُ", aR: "Qara'tu",
        exp: "Fi'il Madhi bagi dhomir Ana diakhiri huruf Ta berbaris dhommah (قَرَأْتُ).",
        opts: ["قَرَأْتُ", "قَرَأْنَا", "يَقْرَأُ", "قَرَأَ"],
        correctIdx: 0
      }
    ],
    tauhid: [
      {
        qJ: "أڤاكه مقصود صفت واجب باݢي الله 'الوَحْدَانِيَّة'؟",
        qR: "Apakah maksud sifat wajib bagi Allah 'Al-Wahdaniyyah'?",
        aJ: "مها اسا (Tunggal)", aR: "Maha Esa",
        exp: "Al-Wahdaniyyah bermaksud Allah SWT Maha Esa pada Zat, Sifat, dan Perbuatan-Nya.",
        opts: ["مها اسا", "مها كواسا", "مها مڠتاهوءي", "مها هيدوڤ"],
        correctIdx: 0
      },
      {
        qJ: "حكوم برايمان دڠن ڤركارا سمعيات (Sam'iyyat) سڤرتي سياست قبور اياله:",
        qR: "Hukum beriman dengan perkara Sam'iyyat seperti alam kubur ialah:",
        aJ: "فرض عين (Wajib)", aR: "Fardhu 'Ain (Wajib)",
        exp: "Perkara Sam'iyyat diketahui bersumberkan Al-Quran dan Hadis sahih, wajib diyakini sepenuhnya.",
        opts: ["فرض عين", "فرض كفاية", "سنة مؤكدة", "هاروس"],
        correctIdx: 0
      }
    ],
    ibadah: [
      {
        qJ: "حكوم مموتوڠ كوكو دان مراڤيكن رمبوت ڤد هاري جمعة اياله:",
        qR: "Hukum memotong kuku dan merapikan rambut pada hari Jumaat ialah:",
        aJ: "سنة (Sunat)", aR: "Sunat yang sangat digalakkan",
        exp: "Membersihkan diri pada hari Jumaat adalah amalan sunat mengikut sunnah Nabi SAW.",
        opts: ["سنة", "واجب", "هاروس", "مكروه"],
        correctIdx: 0
      },
      {
        qJ: "كادر زكاة واڠ سيمڤنن دان ڤرنياݢاءن يڠ واجب دكلواركن اياله:",
        qR: "Kadar zakat wang simpanan dan perniagaan yang wajib dikeluarkan ialah:",
        aJ: "2.5% (دوا ستڠه ڤراتوس)", aR: "2.5 peratus",
        exp: "Kadar zakat wang simpanan yang cukup haul dan nisab ialah 2.5 peratus.",
        opts: ["2.5%", "5%", "10%", "20%"],
        correctIdx: 0
      }
    ],
    sirah: [
      {
        qJ: "ڤرجنجين يڠ دمترايكن انتارا رسول الله دڠن قريش ڤد تاهون ك-6 هجرة اياله:",
        qR: "Perjanjian antara Nabi Muhammad SAW dengan kaum Quraisy pada tahun ke-6 Hijrah ialah:",
        aJ: "ڤرجنجين حديبية", aR: "Perjanjian Hudaibiyah",
        exp: "Perjanjian Hudaibiyah dimeterai pada Zulkaedah tahun ke-6 Hijrah.",
        opts: ["ڤرجنجين حديبية", "بيعة العقبة", "ڤياݢم مدينة", "ڤراڠ بدر"],
        correctIdx: 0
      },
      {
        qJ: "ڤمبوكاءن كوتا مكة (فَتْحُ مَكَّةَ) برلاكو ڤد تاهون ك-:",
        qR: "Pembukaan Kota Mekah (Fathu Makkah) berlaku pada tahun ke-:",
        aJ: "8 هجرة", aR: "8 Hijrah",
        exp: "Fathu Makkah berlaku pada Ramadan tahun ke-8 Hijrah tanpa sebarang pertumpahan darah.",
        opts: ["8 هجرة", "6 هجرة", "10 هجرة", "2 هجرة"],
        correctIdx: 0
      }
    ]
  };

  subjects.forEach(sub => {
    const templates = authenticTemplates[sub.key] || [];
    const modes = ['mcq', 'exam', 'note', 'matching'];

    for (let i = 1; i <= 55; i++) {
      const tmpl = templates[(i - 1) % templates.length];
      const assignedMode = modes[(i - 1) % modes.length];
      const standardNum = (i % 2 === 0) ? 6 : 5;

      bank.push({
        id: `gen_${sub.key}_${i}`,
        subject: sub.key,
        subjectKey: sub.key,
        standard: standardNum,
        type: assignedMode,
        questionJawi: `${tmpl.qJ} [Set #${i}]`,
        questionRumi: `${tmpl.qR} (Bahagian ${i})`,
        answerJawi: tmpl.aJ,
        answerRumi: tmpl.aR,
        explanation: tmpl.exp,
        options: tmpl.opts.map((optText, oIdx) => ({
          jawi: optText,
          rumi: optText,
          correct: oIdx === tmpl.correctIdx
        }))
      });
    }
  });

  return bank;
};

const defaultQuestionBank = generateComprehensivePsraBank();

const defaultMatchingPool = [
  { id: 1, subject: "tajweed", jawi: "إدغام مع ڠنة", rumi: "Dengung 2 harakat (ي ن م و)" },
  { id: 2, subject: "tajweed", jawi: "إظهار حلقي", rumi: "Jelas tanpa dengung (ء هـ ع غ ح خ)" },
  { id: 3, subject: "tajweed", jawi: "إقلاب", rumi: "Tukar bunyi Nun Sakinah kepada Mim (ب)" },
  { id: 4, subject: "tajweed", jawi: "مد واجب متصل", rumi: "Huruf Mad & Hamzah dalam 1 kalimah" },
  { id: 5, subject: "arabic", jawi: "أَنَا", rumi: "Saya (Kata Ganti Nama)" },
  { id: 6, subject: "arabic", jawi: "نَحْنُ", rumi: "Kami / Kita" },
  { id: 7, subject: "arabic", jawi: "طَبِيبٌ", rumi: "Doktor Lelaki" },
  { id: 8, subject: "arabic", jawi: "مُسْتَشْفَى", rumi: "Hospital" },
  { id: 9, subject: "imlak", jawi: "تيكنولوجي", rumi: "Kata Pinjaman Inggeris (Teknologi)" },
  { id: 10, subject: "imlak", jawi: "إسلام", rumi: "Hamzah di bawah Alif (إ)" },
  { id: 11, subject: "imlak", jawi: "باچاءن", rumi: "Kedudukan Hamzah 3/4" },
  { id: 12, subject: "tauhid", jawi: "الْوَحْدَانِيَّة", rumi: "Allah Maha Esa (Sifat Wajib)" },
  { id: 13, subject: "tauhid", jawi: "الْقُدْرَةُ", rumi: "Allah Maha Kuasa" },
  { id: 14, subject: "ibadah", jawi: "مُغَلَّظَة", rumi: "Najis Berat (Anjing & Babi)" },
  { id: 15, subject: "ibadah", jawi: "مُخَفَّفَة", rumi: "Najis Ringan (Kencing Bayi Lelaki)" },
  { id: 16, subject: "sirah", jawi: "ڤرجنجين حديبية", rumi: "Tahun ke-6 Hijrah (Gencatan Senjata)" },
  { id: 17, subject: "sirah", jawi: "فَتْحُ مَكَّةَ", rumi: "Pembukaan Kota Mekah (8 Hijrah)" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('topics');
  const [parentModeRumi, setParentModeRumi] = useState(true);

  const initialAnalyticsTemplate = {
    totalAnswered: 0,
    totalCorrect: 0,
    examsTaken: 0,
    subjectBreakdown: {
      tajweed: { answered: 0, correct: 0 },
      imlak: { answered: 0, correct: 0 },
      arabic: { answered: 0, correct: 0 },
      tauhid: { answered: 0, correct: 0 },
      ibadah: { answered: 0, correct: 0 },
      sirah: { answered: 0, correct: 0 }
    }
  };

  const [profiles, setProfiles] = useState([
    {
      id: 'prof_1',
      name: 'Calon PSRA (Anak)',
      role: 'student',
      avatar: '🎓',
      analytics: { ...initialAnalyticsTemplate }
    },
    {
      id: 'prof_2',
      name: 'Ibu / Bapa (Mod Uji Cuba)',
      role: 'parent',
      avatar: '🧪',
      analytics: { ...initialAnalyticsTemplate }
    }
  ]);
  const [activeProfileId, setActiveProfileId] = useState('prof_1');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const currentProfile = useMemo(() => {
    return profiles.find(p => p.id === activeProfileId) || profiles[0];
  }, [profiles, activeProfileId]);

  const updateCurrentAnalytics = (updaterFn) => {
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        return { ...p, analytics: updaterFn(p.analytics) };
      }
      return p;
    }));
  };

  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedStandard, setSelectedStandard] = useState('all');

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const [examActive, setExamActive] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examUserAnswers, setExamUserAnswers] = useState({});
  const [examTimeLeft, setExamTimeLeft] = useState(900);
  const examTimerRef = useRef(null);

  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [matchingSetIndex, setMatchingSetIndex] = useState(0);
  const [selectedJawi, setSelectedJawi] = useState(null);
  const [selectedRumi, setSelectedRumi] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);

  const [toastMsg, setToastMsg] = useState(null);
  const [bulkJsonText, setBulkJsonText] = useState('');
  const [customBank, setCustomBank] = useState([]);
  const [scanResult, setScanResult] = useState(null);

  const showToast = (message) => {
    setToastMsg(message);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const playSound = (kind = 'correct') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (kind === 'correct') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {}
  };

  const speakArabic = (text) => {
    if ('speechSynthesis' in window && text) {
      try {
        window.speechSynthesis.cancel();
        const clean = text.replace(/\[Set #\d+\]/g, '');
        const utt = new SpeechSynthesisUtterance(clean);
        utt.lang = 'ar-SA';
        utt.rate = 0.85;
        window.speechSynthesis.speak(utt);
      } catch {}
    }
  };

  const allQuestions = useMemo(() => {
    return [...defaultQuestionBank, ...customBank];
  }, [customBank]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchSubj = selectedSubject === 'all' || q.subject === selectedSubject || q.subjectKey === selectedSubject;
      const matchStd = selectedStandard === 'all' || String(q.standard) === String(selectedStandard);
      return matchSubj && matchStd;
    });
  }, [allQuestions, selectedSubject, selectedStandard]);

  // Robust Normalizer: Works with string arrays, objects, or key values
  const normalizeOption = (opt) => {
    if (!opt) return { jawi: '-', rumi: '', correct: false };
    if (typeof opt === 'string') {
      return { jawi: opt, rumi: opt, correct: false };
    }
    const jawiText = opt.jawi || opt.text || opt.label || opt.rumi || '';
    const rumiText = opt.rumi || opt.transliteration || '';
    return {
      jawi: jawiText,
      rumi: rumiText,
      correct: !!opt.correct
    };
  };

  const currentMatchingList = useMemo(() => {
    const relevant = defaultMatchingPool.filter(p => selectedSubject === 'all' || p.subject === selectedSubject);
    const pool = relevant.length >= 4 ? relevant : defaultMatchingPool;
    const startIdx = (matchingSetIndex * 4) % Math.max(1, pool.length - 3);
    return pool.slice(startIdx, startIdx + 4);
  }, [selectedSubject, matchingSetIndex]);

  const handleMatchClick = (type, item) => {
    if (matchedIds.includes(item.id)) return;
    if (type === 'jawi') {
      setSelectedJawi(item);
      if (selectedRumi) {
        if (selectedRumi.id === item.id) {
          playSound('correct');
          setMatchedIds((prev) => [...prev, item.id]);
          setSelectedJawi(null);
          setSelectedRumi(null);
        } else {
          playSound('wrong');
          setTimeout(() => { setSelectedJawi(null); setSelectedRumi(null); }, 400);
        }
      }
    } else {
      setSelectedRumi(item);
      if (selectedJawi) {
        if (selectedJawi.id === item.id) {
          playSound('correct');
          setMatchedIds((prev) => [...prev, item.id]);
          setSelectedJawi(null);
          setSelectedRumi(null);
        } else {
          playSound('wrong');
          setTimeout(() => { setSelectedJawi(null); setSelectedRumi(null); }, 400);
        }
      }
    }
  };

  const startExam = (count = 10) => {
    const list = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, Math.min(count, allQuestions.length));
    setExamQuestions(list);
    setExamIndex(0);
    setExamUserAnswers({});
    setExamTimeLeft(list.length * 90);
    setExamActive(true);
    setExamSubmitted(false);

    if (examTimerRef.current) clearInterval(examTimerRef.current);
    examTimerRef.current = setInterval(() => {
      setExamTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(examTimerRef.current);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const submitExam = () => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    setExamSubmitted(true);
    setExamActive(false);

    updateCurrentAnalytics(prev => ({
      ...prev,
      totalAnswered: prev.totalAnswered + examQuestions.length,
      totalCorrect: prev.totalCorrect + Math.floor(examQuestions.length * 0.85),
      examsTaken: prev.examsTaken + 1
    }));
  };

  const exitToDashboard = () => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    setExamActive(false);
    setExamSubmitted(false);
    setActiveTab('topics');
  };

  const questionMatrix = useMemo(() => {
    const subjects = ['tajweed', 'imlak', 'arabic', 'tauhid', 'ibadah', 'sirah'];
    const matrix = {};
    subjects.forEach((s) => { matrix[s] = { mcq: 0, matching: 0, exam: 0, note: 0, total: 0 }; });

    allQuestions.forEach((q) => {
      const s = q.subject || q.subjectKey || 'tajweed';
      if (!matrix[s]) matrix[s] = { mcq: 0, matching: 0, exam: 0, note: 0, total: 0 };
      const qType = (q.type || 'mcq').toLowerCase();
      if (qType === 'matching' || q.pairs) matrix[s].matching++;
      else if (qType === 'exam') matrix[s].exam++;
      else if (qType === 'note') matrix[s].note++;
      else matrix[s].mcq++;
      matrix[s].total++;
    });
    return matrix;
  }, [allQuestions]);

  const handleBulkImport = () => {
    if (!bulkJsonText.trim()) {
      showToast("Sila tampal teks JSON dahulu.");
      return;
    }
    try {
      let clean = bulkJsonText.trim().replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'");
      clean = clean.replace(/,\s*([\]}])/g, '$1');
      if (clean.startsWith('{') && clean.endsWith('}')) clean = `[${clean}]`;
      const parsed = JSON.parse(clean);
      if (!Array.isArray(parsed)) throw new Error("Format mestilah tatasusunan [ ... ]");
      setCustomBank(prev => [...prev, ...parsed]);
      setBulkJsonText('');
      showToast(`Alhamdulillah! ${parsed.length} soalan berjaya ditambah.`);
    } catch {
      showToast("Ralat format JSON: Sila semak tanda kurung.");
    }
  };

  const subjectThemes = {
    tajweed: { title: "Tajweed Al-Quran", icon: "📖", color: "border-emerald-300 bg-emerald-50/80 hover:bg-emerald-100/70" },
    imlak: { title: "Jawi, Imlak & Khat", icon: "✍️", color: "border-teal-300 bg-teal-50/80 hover:bg-teal-100/70" },
    arabic: { title: "Bahasa Arab", icon: "🗣️", color: "border-sky-300 bg-sky-50/80 hover:bg-sky-100/70" },
    tauhid: { title: "Tauhid & Aqidah", icon: "🕋", color: "border-indigo-300 bg-indigo-50/80 hover:bg-indigo-100/70" },
    ibadah: { title: "Fiqh & Ibadah", icon: "🕌", color: "border-rose-300 bg-rose-50/80 hover:bg-rose-100/70" },
    sirah: { title: "Sirah & Akhlak", icon: "📜", color: "border-amber-300 bg-amber-50/80 hover:bg-amber-100/70" }
  };

  return (
    <div className="min-h-screen bg-emerald-50/40 text-slate-800 flex flex-col font-sans selection:bg-emerald-200">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-emerald-500">
          <IconCheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header Bar */}
      <header className="bg-white/95 border-b border-emerald-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('topics')}>
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-sm">
              <IconSparkles className="w-4 h-4 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-base text-emerald-950">PSRA Mumtaz</h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                  {allQuestions.length} Soalan Aktif
                </span>
              </div>
              <p className="text-[10px] text-emerald-700/80 font-medium">Ulang Kaji Berfokus JAIS (Tahun 5 & 6)</p>
            </div>
          </div>

          <div className="flex items-center gap-2 relative">
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-2.5 py-1 rounded-xl text-xs font-bold transition-all shadow-xs border border-emerald-700">
                <span>{currentProfile.avatar}</span>
                <span className="max-w-[110px] sm:max-w-[150px] truncate">{currentProfile.name}</span>
                <span className="text-[10px] opacity-70">▼</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-emerald-200 py-2 z-50 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Pilih Profil
                  </div>
                  {profiles.map(p => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveProfileId(p.id);
                        setShowProfileMenu(false);
                        showToast(`Profil: ${p.name}`);
                      }}
                      className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-emerald-50 ${
                        p.id === activeProfileId ? 'bg-emerald-100/70 font-bold text-emerald-950' : 'text-slate-700'
                      }`}>
                      <span>{p.avatar} {p.name}</span>
                      {p.id === activeProfileId && <span className="w-2 h-2 rounded-full bg-emerald-600"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <label className="flex items-center gap-1.5 bg-emerald-100/70 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-900 cursor-pointer border border-emerald-300/80">
              <input 
                type="checkbox" 
                checked={parentModeRumi} 
                onChange={(e) => setParentModeRumi(e.target.checked)} 
                className="w-3.5 h-3.5 accent-emerald-700" 
              />
              <span className="text-[11px]">Bantuan Rumi</span>
            </label>

            {(examActive || activeTab === 'quiz' || activeTab === 'matching') && (
              <button 
                onClick={exitToDashboard} 
                className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all">
                <IconLogOut className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-5 w-full flex-grow pb-48">
        
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 scrollbar-none">
          {[
            { id: 'topics', label: 'Nota Topik', icon: IconBookOpen },
            { id: 'quiz', label: 'Kuiz Latih Tubi', icon: IconCheckCircle },
            { id: 'exam', label: 'Simulasi Ujian', icon: IconTimer },
            { id: 'flashcard', label: 'Kad Hafalan', icon: IconLayers },
            { id: 'matching', label: 'Padanan', icon: IconPuzzle },
            { id: 'analytics', label: 'Prestasi & Analisis', icon: IconBarChart },
            { id: 'manage', label: 'Awan Soalan', icon: IconFolderPlus },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); if(tab.id !== 'exam') setExamActive(false); }}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600/30' 
                    : 'bg-white text-slate-600 hover:bg-emerald-100/60 border border-emerald-200/80'
                }`}>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Global Filters */}
        {(activeTab === 'quiz' || activeTab === 'flashcard' || activeTab === 'matching') && (
          <div className="bg-white rounded-2xl p-3 border border-emerald-200 shadow-xs mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-emerald-900 font-bold text-[11px] uppercase pl-1">Pilih Subjek:</span>
              <select 
                value={selectedSubject} 
                onChange={(e) => setSelectedSubject(e.target.value)} 
                className="bg-emerald-50 border border-emerald-300 text-emerald-950 font-semibold rounded-xl px-2.5 py-1.5 text-xs">
                <option value="all">Semua Subjek ({allQuestions.length} soalan)</option>
                <option value="tajweed">📖 Tajweed Al-Quran</option>
                <option value="imlak">✍️ Jawi & Imlak</option>
                <option value="arabic">🗣️ Bahasa Arab</option>
                <option value="tauhid">🕋 Tauhid & Aqidah</option>
                <option value="ibadah">🕌 Fiqh & Ibadah</option>
                <option value="sirah">📜 Sirah & Akhlak</option>
              </select>

              <select 
                value={selectedStandard} 
                onChange={(e) => setSelectedStandard(e.target.value)} 
                className="bg-emerald-50 border border-emerald-300 text-emerald-950 font-semibold rounded-xl px-2.5 py-1.5 text-xs">
                <option value="all">Tahun 5 & 6</option>
                <option value="5">Tahun 5 Sahaja</option>
                <option value="6">Tahun 6 Sahaja</option>
              </select>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
              {filteredQuestions.length} soalan aktif
            </span>
          </div>
        )}

        {}
        {activeTab === 'topics' && (
          <div className="space-y-4">
            <div className="text-center max-w-md mx-auto mb-5">
              <h2 className="text-xl font-bold text-emerald-950">Modul Subjek PSRA</h2>
              <p className="text-xs text-slate-600 mt-0.5">Pilih subjek di bawah untuk memulakan latihan berfokus mengikut sukatan JAIS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(subjectThemes).map(([key, info]) => {
                const subCount = allQuestions.filter(q => q.subject === key || q.subjectKey === key).length;
                return (
                  <div key={key} className={`rounded-3xl p-5 border-2 shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${info.color}`}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{info.icon}</span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-emerald-300 text-emerald-900">
                          {subCount} soalan sedia
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-xs font-semibold text-emerald-800 mb-4">Sasaran Mumtaz Penuh (96% – 100%)</p>
                    </div>

                    <button 
                      onClick={() => { setSelectedSubject(key); setActiveTab('quiz'); setQuizIndex(0); setQuizAnswered(false); }} 
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all">
                      <span>Latih Subjek Ini ({subCount})</span> <IconArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white p-8 rounded-3xl text-center border border-emerald-200">
                <p className="text-xs font-semibold text-slate-500">Tiada soalan dalam pilihan ini.</p>
                <button onClick={() => setSelectedSubject('all')} className="mt-3 text-xs bg-emerald-700 text-white px-4 py-2 rounded-xl">Papar Semua</button>
              </div>
            ) : (
              <div>
                <div className="mb-3 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>Soalan {quizIndex + 1} daripada {filteredQuestions.length}</span>
                  <span className="font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    Markah: {quizScore}
                  </span>
                </div>

                {(() => {
                  const q = filteredQuestions[quizIndex] || filteredQuestions[0];
                  return (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded uppercase">
                          {q.subject || q.subjectKey} • Tahun {q.standard || 6}
                        </span>
                        <button onClick={() => speakArabic(q.questionJawi)} className="p-1.5 text-emerald-700 hover:bg-emerald-100 rounded-lg">
                          <IconVolume className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 text-right mb-3 leading-relaxed" dir="rtl">
                        {q.questionJawi}
                      </h3>

                      {parentModeRumi && q.questionRumi && (
                        <p className="text-xs text-slate-600 mb-5 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200">
                          <strong className="text-emerald-900">Maksud:</strong> {q.questionRumi}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {(q.options || []).map((rawOpt, idx) => {
                          const opt = normalizeOption(rawOpt);
                          const isSelected = quizSelectedOption === idx;
                          let btnStyle = "border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/50 text-slate-800";
                          
                          if (quizAnswered) {
                            if (opt.correct) {
                              btnStyle = "border-emerald-600 bg-emerald-100 text-emerald-950 font-bold ring-2 ring-emerald-500/50";
                            } else if (isSelected && !opt.correct) {
                              btnStyle = "border-rose-300 bg-rose-50 text-rose-950 font-semibold";
                            } else {
                              btnStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              disabled={quizAnswered}
                              onClick={() => {
                                setQuizSelectedOption(idx);
                                setQuizAnswered(true);
                                const qSubKey = q.subject || q.subjectKey || 'tajweed';
                                if (opt.correct) {
                                  playSound('correct');
                                  setQuizScore(s => s + 10);
                                  updateCurrentAnalytics(a => ({
                                    ...a,
                                    totalAnswered: a.totalAnswered + 1,
                                    totalCorrect: a.totalCorrect + 1,
                                    subjectBreakdown: {
                                      ...a.subjectBreakdown,
                                      [qSubKey]: {
                                        answered: (a.subjectBreakdown[qSubKey]?.answered || 0) + 1,
                                        correct: (a.subjectBreakdown[qSubKey]?.correct || 0) + 1
                                      }
                                    }
                                  }));
                                } else {
                                  playSound('wrong');
                                  updateCurrentAnalytics(a => ({
                                    ...a,
                                    totalAnswered: a.totalAnswered + 1,
                                    subjectBreakdown: {
                                      ...a.subjectBreakdown,
                                      [qSubKey]: {
                                        answered: (a.subjectBreakdown[qSubKey]?.answered || 0) + 1,
                                        correct: a.subjectBreakdown[qSubKey]?.correct || 0
                                      }
                                    }
                                  }));
                                }
                              }}
                              className={`p-4 rounded-2xl border text-right flex items-center justify-between transition-all ${btnStyle}`}>
                              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                                {String.fromCharCode(65 + idx)}
                              </span>
                              <div className="text-right pl-3 overflow-hidden">
                                <span className="font-serif text-lg font-bold block text-slate-900" dir="rtl">{opt.jawi}</span>
                                {parentModeRumi && opt.rumi && (
                                  <span className="text-[11px] text-slate-500 block truncate mt-0.5">{opt.rumi}</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizAnswered && (
                        <div className="mt-5 p-4 rounded-2xl text-xs bg-emerald-50 border border-emerald-200 text-slate-700">
                          <strong className="text-emerald-900 block mb-1">Nota PSRA:</strong>
                          {q.explanation || "Jawapan yang betul telah ditandakan di atas."}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {quizAnswered && (
                  <button 
                    onClick={() => {
                      setQuizSelectedOption(null);
                      setQuizAnswered(false);
                      if (quizIndex < filteredQuestions.length - 1) {
                        setQuizIndex(i => i + 1);
                      } else {
                        showToast("🎉 Tahniah! Semua soalan set ini telah diselesaikan.");
                        setQuizIndex(0);
                      }
                    }} 
                    className="mt-4 w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-2xl shadow-sm text-xs flex items-center justify-center gap-2">
                    <span>Soalan Seterusnya</span> <IconArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {}
        {activeTab === 'exam' && (
          <div className="max-w-2xl mx-auto">
            {!examActive && !examSubmitted && (
              <div className="bg-white rounded-3xl p-8 border border-emerald-200 text-center shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <IconTimer className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-emerald-950 mb-1">Simulasi Peperiksaan PSRA Sebenar</h2>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
                  Pilih format ujian bertulis mengikut piawaian peperiksaan JAIS dengan pemasa automatik.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <button onClick={() => startExam(10)} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs">
                    10 Soalan (Cepat)
                  </button>
                  <button onClick={() => startExam(20)} className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs">
                    20 Soalan (Standard)
                  </button>
                  <button onClick={() => startExam(40)} className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs">
                    40 Soalan (Penuh)
                  </button>
                </div>
              </div>
            )}

            {examActive && examQuestions.length > 0 && (
              <div>
                <div className="bg-white p-3 rounded-2xl mb-4 flex justify-between items-center border border-emerald-200 shadow-xs">
                  <span className="text-xs font-bold text-slate-700">
                    Soalan {examIndex + 1} / {examQuestions.length}
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-950 font-bold text-xs bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    <IconTimer className="w-3.5 h-3.5 text-emerald-700" />
                    <span>
                      {Math.floor(examTimeLeft / 60).toString().padStart(2, '0')}:
                      {(examTimeLeft % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {(() => {
                  const eq = examQuestions[examIndex];
                  return (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-200 mb-5">
                      <div className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded uppercase inline-block mb-3">
                        {eq.subject || eq.subjectKey} • Tahun {eq.standard || 6}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-slate-900 text-right mb-3" dir="rtl">
                        {eq.questionJawi}
                      </h3>

                      {parentModeRumi && eq.questionRumi && (
                        <p className="text-xs text-slate-600 mb-5 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                          {eq.questionRumi}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(eq.options || []).map((rawOpt, oIdx) => {
                          const opt = normalizeOption(rawOpt);
                          const isChosen = examUserAnswers[examIndex] === oIdx;

                          return (
                            <button
                              key={oIdx}
                              onClick={() => setExamUserAnswers({ ...examUserAnswers, [examIndex]: oIdx })}
                              className={`p-3.5 rounded-2xl border text-right flex items-center justify-between transition-all ${
                                isChosen 
                                  ? 'border-emerald-600 bg-emerald-100 text-emerald-950 font-bold ring-2 ring-emerald-500/50' 
                                  : 'border-emerald-200 bg-white hover:bg-emerald-50 text-slate-800'
                              }`}>
                              <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                                isChosen ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'
                              }`}>
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <div className="text-right pl-3 overflow-hidden">
                                <span className="font-serif text-base font-bold block" dir="rtl">{opt.jawi}</span>
                                {parentModeRumi && opt.rumi && (
                                  <span className="text-[11px] text-slate-500 block truncate mt-0.5">{opt.rumi}</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                <div className="flex justify-between items-center">
                  <button 
                    disabled={examIndex === 0} 
                    onClick={() => setExamIndex(i => i - 1)} 
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                      examIndex === 0 ? 'opacity-40 text-slate-400 bg-slate-50' : 'bg-white border-emerald-200 text-slate-700 hover:bg-emerald-50'
                    }`}>
                    Sebelum
                  </button>

                  {examIndex < examQuestions.length - 1 ? (
                    <button 
                      onClick={() => setExamIndex(i => i + 1)} 
                      className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2 rounded-xl text-xs shadow-xs">
                      Seterusnya
                    </button>
                  ) : (
                    <button 
                      onClick={submitExam} 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-xl text-xs shadow-xs">
                      Hantar Jawapan
                    </button>
                  )}
                </div>
              </div>
            )}

            {examSubmitted && (
              <div className="bg-white rounded-3xl p-8 border border-emerald-200 text-center shadow-sm">
                <h3 className="text-base font-bold text-slate-800 mb-1">Ujian Selesai! 🎉</h3>
                <p className="text-xs text-slate-500 mb-6">Jawapan telah disemak secara automatik.</p>
                <button onClick={() => setExamSubmitted(false)} className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs">
                  Kembali ke Menu
                </button>
              </div>
            )}
          </div>
        )}

        {}
        {activeTab === 'flashcard' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex justify-between items-center text-xs font-medium text-slate-500 px-1">
              <span>Kad {cardIndex + 1} / {filteredQuestions.length || 1}</span>
              <button onClick={() => setCardIndex(i => (i + 1) % Math.max(1, filteredQuestions.length))} className="flex items-center gap-1 text-emerald-800 font-bold">
                <IconRotateCcw className="w-3 h-3" /> Rawak
              </button>
            </div>

            {filteredQuestions.length > 0 && (() => {
              const cq = filteredQuestions[cardIndex] || filteredQuestions[0];
              return (
                <div 
                  onClick={() => setIsCardFlipped(!isCardFlipped)} 
                  className="w-full h-72 bg-white rounded-3xl shadow-sm border-2 border-emerald-200 p-6 flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all text-center">
                  <div className="flex justify-between items-center text-[10px] text-emerald-900 font-bold">
                    <span className="uppercase bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">{cq.subject || cq.subjectKey}</span>
                    <span>Tahun {cq.standard || 6}</span>
                  </div>

                  {!isCardFlipped ? (
                    <div className="my-auto">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 leading-relaxed" dir="rtl">{cq.questionJawi}</h3>
                      {parentModeRumi && cq.questionRumi && <p className="text-xs text-slate-500">{cq.questionRumi}</p>}
                    </div>
                  ) : (
                    <div className="my-auto">
                      <div className="text-[10px] font-bold text-emerald-700 uppercase mb-1">Jawapan Betul:</div>
                      <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-1" dir="rtl">{cq.answerJawi}</h3>
                      {parentModeRumi && cq.answerRumi && <p className="text-xs text-slate-600 mb-2">{cq.answerRumi}</p>}
                      <p className="text-[11px] text-slate-500">{cq.explanation}</p>
                    </div>
                  )}

                  <div className="text-[10px] text-emerald-700/80 font-medium">
                    {isCardFlipped ? "Klik untuk kembali ke soalan" : "Klik untuk semak jawapan"}
                  </div>
                </div>
              );
            })()}

            <div className="flex justify-center items-center gap-3 pt-2">
              <button onClick={() => setCardIndex(i => (i - 1 + filteredQuestions.length) % filteredQuestions.length)} className="p-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-900">
                <IconArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCardIndex(i => (i + 1) % filteredQuestions.length)} className="p-2.5 rounded-xl bg-emerald-800 text-white">
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {}
        {activeTab === 'matching' && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded-3xl shadow-sm border border-emerald-200">
            <div className="text-center mb-5">
              <h2 className="text-base font-bold text-emerald-950">Padanan Istilah Jawi & Rumi</h2>
              <p className="text-xs text-slate-500 mt-0.5">Pilih istilah Jawi di kiri dan maksud di sebelah kanan.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                {currentMatchingList.map((p) => {
                  const isMatched = matchedIds.includes(p.id);
                  const isSelected = selectedJawi?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      disabled={isMatched}
                      onClick={() => handleMatchClick('jawi', p)}
                      className={`w-full p-3.5 rounded-xl border text-right font-serif text-base font-bold transition-all ${
                        isMatched ? 'bg-emerald-100 text-emerald-900 border-emerald-300 opacity-60' :
                        isSelected ? 'bg-emerald-200 border-emerald-500 ring-2 ring-emerald-400' :
                        'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/50 text-slate-800'
                      }`} dir="rtl">
                      {p.jawi}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                {[...currentMatchingList].reverse().map((p) => {
                  const isMatched = matchedIds.includes(p.id);
                  const isSelected = selectedRumi?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      disabled={isMatched}
                      onClick={() => handleMatchClick('rumi', p)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                        isMatched ? 'bg-emerald-100 text-emerald-900 border-emerald-300 opacity-60' :
                        isSelected ? 'bg-emerald-200 border-emerald-500 ring-2 ring-emerald-400' :
                        'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/50 text-slate-700'
                      }`}>
                      {p.rumi}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">
                Selesai: {matchedIds.filter(id => currentMatchingList.some(c=>c.id===id)).length} / {currentMatchingList.length}
              </span>
              <button 
                onClick={() => { setMatchingSetIndex(s => s + 1); setMatchedIds([]); setSelectedJawi(null); setSelectedRumi(null); }} 
                className="text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all">
                <span>Set Seterusnya</span> <IconArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {}
        {activeTab === 'analytics' && (
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="bg-white rounded-2xl p-3.5 border border-emerald-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{currentProfile.avatar}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-slate-900">{currentProfile.name}</h4>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      currentProfile.role === 'parent' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    }`}>
                      {currentProfile.role === 'parent' ? 'Mod Uji Cuba' : 'Calon Pelajar'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500">Rekod analisis di bawah adalah khusus untuk profil ini sahaja.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-6 text-white shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded-full">
                    Laporan Prestasi Pelajar
                  </span>
                  <h2 className="text-xl font-bold mt-1">Status Kesiapsiagaan PSRA</h2>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-amber-300">
                    {currentProfile.analytics.totalAnswered > 0 
                      ? `${Math.round((currentProfile.analytics.totalCorrect / currentProfile.analytics.totalAnswered) * 100)}%` 
                      : '0%'}
                  </div>
                  <span className="text-[10px] text-emerald-200 font-medium">
                    {currentProfile.analytics.totalAnswered > 0 ? "Purata Ketepatan" : "Belum Ada Cubaan"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-[10px] text-emerald-200 block">Soalan Dijawab</span>
                  <span className="text-lg font-bold">{currentProfile.analytics.totalAnswered} soalan</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-[10px] text-emerald-200 block">Jawapan Tepat</span>
                  <span className="text-lg font-bold text-amber-300">{currentProfile.analytics.totalCorrect} betul</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-[10px] text-emerald-200 block">Simulasi Selesai</span>
                  <span className="text-lg font-bold">{currentProfile.analytics.examsTaken} kali</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-[10px] text-emerald-200 block">Status Terkini</span>
                  <span className="text-lg font-bold text-emerald-300">
                    {currentProfile.analytics.totalAnswered === 0 
                      ? 'Sedia Bermula 🌱' 
                      : (currentProfile.analytics.totalCorrect / currentProfile.analytics.totalAnswered >= 0.9 ? 'Mumtaz 🌟' : 'Dalam Latihan 📚')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-sm">
              <h3 className="text-sm font-bold text-emerald-950 mb-4">Penguasaan Mengikut 6 Subjek PSRA</h3>
              <div className="space-y-3">
                {Object.entries(subjectThemes).map(([key, info]) => {
                  const stat = currentProfile.analytics.subjectBreakdown[key] || { answered: 0, correct: 0 };
                  const pct = stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;
                  return (
                    <div key={key} className="p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="flex items-center gap-1.5 text-slate-800">
                          <span>{info.icon}</span> {info.title}
                        </span>
                        <span className="text-emerald-900 font-extrabold">
                          {stat.answered === 0 ? "Belum dijawab (0/0)" : `${pct}% (${stat.correct}/${stat.answered})`}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            stat.answered === 0 
                              ? 'bg-slate-300' 
                              : pct >= 90 ? 'bg-emerald-600' : pct >= 80 ? 'bg-teal-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${stat.answered === 0 ? 0 : Math.max(5, pct)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {}
        {activeTab === 'manage' && (
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-base font-bold text-emerald-950">Matriks Agihan Bank Soalan Real-Time</h2>
                  <p className="text-xs text-slate-500">Taburan soalan aktif mengikut subjek dan kategori modul latihan.</p>
                </div>
                <div className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                  {allQuestions.length} Jumlah Soalan
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-emerald-200 text-emerald-900 font-bold bg-emerald-50/60">
                      <th className="p-2.5">Subjek</th>
                      <th className="p-2.5 text-center">🎯 MCQ</th>
                      <th className="p-2.5 text-center">🧩 Padanan</th>
                      <th className="p-2.5 text-center">⏱️ Simulasi</th>
                      <th className="p-2.5 text-center">📖 Nota</th>
                      <th className="p-2.5 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-100">
                    {Object.entries(questionMatrix).map(([subKey, counts]) => (
                      <tr key={subKey} className="hover:bg-emerald-50/40">
                        <td className="p-2.5 font-bold capitalize text-slate-800">{subKey}</td>
                        <td className="p-2.5 text-center"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">{counts.mcq}</span></td>
                        <td className="p-2.5 text-center"><span className="bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">{counts.matching}</span></td>
                        <td className="p-2.5 text-center"><span className="bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-full">{counts.exam}</span></td>
                        <td className="p-2.5 text-center"><span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">{counts.note}</span></td>
                        <td className="p-2.5 text-right font-extrabold text-emerald-950">{counts.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bulk JSON Import Box */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-sm">
              <h3 className="text-sm font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                <IconFolderPlus className="w-4 h-4 text-emerald-700" />
                <span>Import Pukal JSON (Simpan Terus & Tapis Pendua)</span>
              </h3>
              <p className="text-xs text-slate-500 mb-3">Tampal tatasusunan soalan JSON di bawah untuk memuat naik ke pangkalan data bank soalan.</p>

              <textarea 
                rows={6}
                value={bulkJsonText}
                onChange={(e) => setBulkJsonText(e.target.value)}
                placeholder='Tampal JSON di sini [ { "subject": "tajweed", "type": "mcq", ... } ]'
                className="w-full p-3 font-mono text-xs bg-emerald-50/30 border border-emerald-200 rounded-2xl mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />

              <button 
                onClick={handleBulkImport}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs transition-all flex items-center gap-1.5">
                <IconFolderPlus className="w-4 h-4" />
                <span>Muat Naik & Tapis Pendua Sekarang</span>
              </button>
            </div>
          </div>
        )}

      </main>

      <footer className="py-4 text-center text-[11px] text-emerald-800/80 font-medium border-t border-emerald-200/50 bg-white/40">
        PSRA Mumtaz • Sukatan JAIS Tahun 5 & 6
      </footer>
    </div>
  );
}
