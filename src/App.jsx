import React, { useState, useEffect, useMemo, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  collection, 
  addDoc 
} from 'firebase/firestore';

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

function IconXCircle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
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

function IconBarChart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
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

function IconTimer({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>
    </svg>
  );
}

function IconListOrdered({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>
    </svg>
  );
}

function IconAlertTriangle({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>
    </svg>
  );
}

function IconDownload({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  );
}

function IconCopy({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  );
}

function IconTrash({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    </svg>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyAF1g25kWTDpFv9_yxHn7L7ql5RX8v3BQo",
  authDomain: "psra-mumtaz.firebaseapp.com",
  projectId: "psra-mumtaz",
  storageBucket: "psra-mumtaz.firebasestorage.app",
  messagingSenderId: "848542009537",
  appId: "1:848542009537:web:d37f5bc650ca18946cac40"
};

let app, auth, db;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase initialization notice:", e);
}
const appId = 'psra-mumtaz';

const initialDefaultQuestions = [
  // 1. Tajweed Al-Quran (Sasaran Mumtaz Penuh 96% - 100%)
  {
    subject: "tajweed",
    standard: 5,
    questionJawi: "أڤاكه حكم تجويد باݢي نون ساكنة (نْ) يڠ برتمو دڠن حروف 'ر' أتاو 'ل'؟",
    questionRumi: "Apakah hukum Tajweed bagi Nun Sakinah (نْ) yang bertemu huruf 'Ra' (ر) atau 'Lam' (ل)?",
    answerJawi: "إدغام بلا ڠنة",
    answerRumi: "Idgham Bila Ghunnah",
    explanation: "Idgham Bila Ghunnah bermaksud memasukkan bunyi Nun Sakinah ke dalam huruf Ra atau Lam TANPA dengung.",
    options: [
      { jawi: "إدغام بلا ڠنة", rumi: "Idgham Bila Ghunnah", correct: true },
      { jawi: "إدغام مع ڠنة", rumi: "Idgham Ma'al Ghunnah", correct: false },
      { jawi: "إظهار حلقي", rumi: "Izhar Halqi", correct: false },
      { jawi: "إقلاب", rumi: "Iqlab", correct: false }
    ]
  },
  {
    subject: "tajweed",
    standard: 6,
    questionJawi: "مِيمْ ساكنة (مْ) برتمو دڠن حروف 'ب' دناماكن حكم:",
    questionRumi: "Mim Sakinah (مْ) bertemu dengan huruf 'Ba' (ب) dinamakan hukum:",
    answerJawi: "إخفاء شفوي",
    answerRumi: "Ikhfa' Shafawi",
    explanation: "Ikhfa' Shafawi berlaku apabila Mim Sakinah bertemu huruf Ba. Bunyi Mim disembunyikan berserta dengung 2 harakat.",
    options: [
      { jawi: "إخفاء شفوي", rumi: "Ikhfa' Shafawi", correct: true },
      { jawi: "إظهار شفوي", rumi: "Izhar Shafawi", correct: false },
      { jawi: "إدغام متماثلين", rumi: "Idgham Mutamathilain", correct: false },
      { jawi: "إقلاب", rumi: "Iqlab", correct: false }
    ]
  },
  {
    subject: "tajweed",
    standard: 5,
    questionJawi: "حكم إظهار حلقي برلاكو اڤابيلا نون ساكنة برتمو ساله ساتو درڤد 6 حروف كچوالي:",
    questionRumi: "Hukum Izhar Halqi berlaku apabila Nun Sakinah bertemu 6 huruf halaq KECUALI:",
    answerJawi: "ك (Kaf)",
    answerRumi: "Kaf (ك)",
    explanation: "6 huruf Izhar Halqi ialah ء, هـ, ع, غ, ح, خ. Huruf Kaf (ك) ialah huruf Ikhfa' Haqiqi.",
    options: [
      { jawi: "ك", rumi: "Kaf (ك)", correct: true },
      { jawi: "ء", rumi: "Hamzah (ء)", correct: false },
      { jawi: "ع", rumi: "'Ain (ع)", correct: false },
      { jawi: "ح", rumi: "Ha (ح)", correct: false }
    ]
  },
  {
    subject: "tajweed",
    standard: 6,
    questionJawi: "أڤاكه كقدرن باچاءن باݢي حكم 'مد واجب متصل' كتيك باچاءن وصل دان وقف؟",
    questionRumi: "Apakah kadar bacaan bagi hukum 'Mad Wajib Muttasil'?",
    answerJawi: "4 أتاو 5 حركة",
    answerRumi: "4 atau 5 Harakat",
    explanation: "Mad Wajib Muttasil berlaku apabila huruf Mad bertemu Hamzah dalam SATU kalimah yang sama (4 atau 5 harakat).",
    options: [
      { jawi: "4 أتاو 5 حركة", rumi: "4 atau 5 Harakat", correct: true },
      { jawi: "2 حركة سهاج", rumi: "2 Harakat Sahaja", correct: false },
      { jawi: "6 حركة واجب", rumi: "6 Harakat Wajib", correct: false },
      { jawi: "1 حركة", rumi: "1 Harakat", correct: false }
    ]
  },
  {
    subject: "tajweed",
    standard: 5,
    questionJawi: "قلقلة صغرى برلاكو اڤابيلا حروف قلقلة برباريس سكون د:",
    questionRumi: "Qalqalah Sughra berlaku apabila huruf Qalqalah berbaris sukun di:",
    answerJawi: "تڠه-تڠه كلمة سچارا اصلي",
    answerRumi: "Pertengahan kalimah secara asli",
    explanation: "Qalqalah Sughra ialah lantunan bunyi yang ringan apabila huruf Qalqalah mati di pertengahan kalimah.",
    options: [
      { jawi: "تڠه-تڠه كلمة سچارا اصلي", rumi: "Pertengahan kalimah secara asli", correct: true },
      { jawi: "أخير كلمة كران وقف", rumi: "Akhir kalimah kerana waqaf", correct: false },
      { jawi: "أول كلمة يڠ دباچ وصل", rumi: "Awal kalimah dibaca wasal", correct: false },
      { jawi: "حروف يڠ برباريس شدة", rumi: "Huruf berbaris sabdu", correct: false }
    ]
  },
  {
    subject: "tajweed",
    standard: 6,
    questionJawi: "حكم باچاءن باݢي 'مد عارض للسكون' بوليه دباچ دڠن قدر:",
    questionRumi: "Hukum bacaan bagi 'Mad Aridh Lissukun' ketika waqaf boleh dibaca dengan kadar:",
    answerJawi: "2، 4، أتاو 6 حركة",
    answerRumi: "2, 4, atau 6 Harakat",
    explanation: "Mad Aridh Lissukun berlaku apabila huruf mad bertemu huruf hijaiyyah di hujung kalimah kerana waqaf (harus dibaca 2, 4, atau 6 harakat).",
    options: [
      { jawi: "2، 4، أتاو 6 حركة", rumi: "2, 4, atau 6 Harakat", correct: true },
      { jawi: "6 حركة واجب سهاج", rumi: "6 Harakat Wajib sahaja", correct: false },
      { jawi: "2 حركة سهاج", rumi: "2 Harakat sahaja", correct: false },
      { jawi: "1 حركة سهاج", rumi: "1 Harakat sahaja", correct: false }
    ]
  },
  // 2. Jawi, Imlak & Khat (Sasaran Mumtaz Penuh 96% - 100%)
  {
    subject: "imlak",
    standard: 5,
    questionJawi: "ايجاءن جاوي يڠ بتول باݢي كات ڤينجمن إيڠݢريس 'Teknologi' اياله:",
    questionRumi: "Ejaan Jawi yang betul bagi kata pinjaman Inggeris 'Teknologi':",
    answerJawi: "تيكنولوجي",
    answerRumi: "Teknologi (تيكنولوجي)",
    explanation: "Kata serapan Inggeris dieja mengikut padanan suku kata asal: Tek (تيك) no (نو) lo (لو) gi (جي) = تيكنولوجي.",
    options: [
      { jawi: "تيكنولوجي", rumi: "Teknologi", correct: true },
      { jawi: "تكنلوݢي", rumi: "Teknlogi", correct: false },
      { jawi: "تيكنالوݢي", rumi: "Teknalogi", correct: false },
      { jawi: "تيقنولوجي", rumi: "Teqnologi", correct: false }
    ]
  },
  {
    subject: "imlak",
    standard: 6,
    questionJawi: "كدودوقن حروف همزة (ء) 3/4 (تيݢ ڤرايمڤت) دݢوناكن ڤد:",
    questionRumi: "Kedudukan Hamzah 3/4 (tiga perempat) digunakan pada:",
    answerJawi: "ايمبوهن أخيرن '-أن' سلڤس حروف الف",
    answerRumi: "Imbuhan akhiran '-an' selepas huruf Alif",
    explanation: "Hamzah 3/4 diletakkan selepas Alif apabila menerima imbuhan akhiran '-an' (contoh: باچاءن).",
    options: [
      { jawi: "ايمبوهن أخيرن '-أن' سلڤس الف", rumi: "Imbuhan '-an' selepas Alif", correct: true },
      { jawi: "دباوه الف اونتوق كلمة عرب", rumi: "Di bawah Alif kata Arab", correct: false },
      { jawi: "أول كلمة بهاس ملايو", rumi: "Awal perkataan Melayu", correct: false },
      { jawi: "أخير كلمة ڤينجمن إيڠݢريس", rumi: "Akhir kata Inggeris", correct: false }
    ]
  },
  {
    subject: "imlak",
    standard: 5,
    questionJawi: "كدودوقن حروف همزة (ء) باݢي كلمة عرب 'إسلام' ترلتق د:",
    questionRumi: "Kedudukan huruf Hamzah (ء) bagi kalimah 'Islam' terletak di:",
    answerJawi: "دباوه حروف الف (إ)",
    answerRumi: "Di bawah huruf Alif (إ)",
    explanation: "Kata pinjaman Bahasa Arab 'Islam' mengekalkan ejaan asal rasm dengan Hamzah berbaris kasrah di bawah Alif (إ).",
    options: [
      { jawi: "دباوه حروف الف (إ)", rumi: "Di bawah huruf Alif (إ)", correct: true },
      { jawi: "دأتس حروف الف (أ)", rumi: "Di atas huruf Alif (أ)", correct: false },
      { jawi: "ستارا ݢاريسن", rumi: "Setara garisan", correct: false },
      { jawi: "تنڤا همزة", rumi: "Tanpa Hamzah", correct: false }
    ]
  },
  {
    subject: "imlak",
    standard: 6,
    questionJawi: "ايجاءن جاوي يڠ بتول باݢي كات برايمبوهن 'Mengambil' اياله:",
    questionRumi: "Ejaan Jawi yang betul bagi kata berimbuhan 'Mengambil':",
    answerJawi: "مڠامبيل",
    answerRumi: "Mengambil (مڠامبيل)",
    explanation: "Imbuhan 'meng-' yang bertemu kata dasar bermula dengan Alif 'ambil' (امبيل) mengekalkan huruf Alif.",
    options: [
      { jawi: "مڠامبيل", rumi: "Mengambil", correct: true },
      { jawi: "مڠمبيل", rumi: "Mengmbil", correct: false },
      { jawi: "مڠامبل", rumi: "Mengambl", correct: false },
      { jawi: "ماڠامبيل", rumi: "Mangambil", correct: false }
    ]
  },
  {
    subject: "imlak",
    standard: 5,
    questionJawi: "ايجاءن جاوي يڠ بتول باݢي كات برايمبوهن اڤيتن 'Kedudukan' اياله:",
    questionRumi: "Ejaan Jawi yang betul bagi kata apitan 'Kedudukan':",
    answerJawi: "كدودوقن",
    answerRumi: "Kedudukan (كدودوقن)",
    explanation: "Kata dasar duduk (دوق) apabila menerima imbuhan apitan ke-...-an hanya ditambah huruf Nun di akhir: كدودوقن.",
    options: [
      { jawi: "كدودوقن", rumi: "Kedudukan", correct: true },
      { jawi: "كدودوقان", rumi: "Kedudokan", correct: false },
      { jawi: "كادودوقن", rumi: "Kadudukan", correct: false },
      { jawi: "كدودوقءن", rumi: "Keduduq-an", correct: false }
    ]
  },
  // 3. Bahasa Arab (Sasaran Mumtaz Tinggi 96% - 98%)
  {
    subject: "arabic",
    standard: 5,
    questionJawi: "أڤاكه مقصود الضمير (Kata Ganti Diri) 'هُمَا' دالم بهاس ملايو؟",
    questionRumi: "Apakah maksud Dhomir 'هُمَا' (Huma) dalam Bahasa Melayu?",
    answerJawi: "مريك بردوا (Lelaki / Perempuan)",
    answerRumi: "Mereka Berdua",
    explanation: "Huma (هُمَا) ialah kata ganti nama bagi dua orang pihak ketiga (mereka berdua).",
    options: [
      { jawi: "مريك بردوا", rumi: "Mereka Berdua", correct: true },
      { jawi: "دي سأورڠ ليلاكي", rumi: "Dia Seorang Lelaki", correct: false },
      { jawi: "كامي سموا", rumi: "Kami Semua", correct: false },
      { jawi: "أواك ليلاكي", rumi: "Awak Lelaki", correct: false }
    ]
  },
  {
    subject: "arabic",
    standard: 6,
    questionJawi: "الفِعْلُ المَاضِي (Kata Kerja Lepas) باݢي 'أَنَا' (Saya telah membaca):",
    questionRumi: "Fi'il Madhi bagi 'أَنَا' (Saya telah membaca - Qara'a):",
    answerJawi: "قَرَأْتُ",
    answerRumi: "Qara'tu",
    explanation: "Fi'il Madhi untuk Dhomir Ana (أَنَا) diakhiri dengan Ta' dhomir berbaris dammah (قَرَأْتُ).",
    options: [
      { jawi: "قَرَأْتُ", rumi: "Qara'tu", correct: true },
      { jawi: "قَرَأْنَا", rumi: "Qara'na", correct: false },
      { jawi: "قَرَأَ", rumi: "Qara'a", correct: false },
      { jawi: "يَقْرَأُ", rumi: "Yaqra'u", correct: false }
    ]
  },
  {
    subject: "arabic",
    standard: 6,
    questionJawi: "العدد (Nombor) 'خَمْسَةٌ وَعِشْرُونَ' برمقصود:",
    questionRumi: "Nombor 'خَمْسَةٌ وَعِشْرُونَ' (Khamsatun wa 'Ishrun) bermaksud:",
    answerJawi: "25 (dua puluh lima)",
    answerRumi: "25 (Dua puluh lima)",
    explanation: "Khamsah = 5, 'Ishrun = 20. Khamsatun wa 'Ishrun = 25.",
    options: [
      { jawi: "25", rumi: "25 (Dua puluh lima)", correct: true },
      { jawi: "15", rumi: "15 (Lima belas)", correct: false },
      { jawi: "52", rumi: "52 (Lima puluh dua)", correct: false },
      { jawi: "35", rumi: "35 (Tiga puluh lima)", correct: false }
    ]
  },
  {
    subject: "arabic",
    standard: 5,
    questionJawi: "الجمع (Kata Jamak) باݢي كلمة 'كِتَابٌ' (Sebuah Buku) اياله:",
    questionRumi: "Kata Jamak bagi kalimah 'كِتَابٌ' (Kitabun) ialah:",
    answerJawi: "كُتُبٌ",
    answerRumi: "Kutubun (Buku-buku)",
    explanation: "Jamak Taksir bagi perkataan Kitabun (كِتَابٌ) ialah Kutubun (كُتُبٌ) bermaksud banyak buku.",
    options: [
      { jawi: "كُتُبٌ", rumi: "Kutubun", correct: true },
      { jawi: "كِتَابَانِ", rumi: "Kitabani (2 buku)", correct: false },
      { jawi: "كِتَابَاتٌ", rumi: "Kitabatun", correct: false },
      { jawi: "مَكْتَبَةٌ", rumi: "Maktabatun (Perpustakaan)", correct: false }
    ]
  },
  // 4. Tauhid & Aqidah (Sasaran Sempurna 100%)
  {
    subject: "tauhid",
    standard: 5,
    questionJawi: "أڤاكه مقصود صفت واجب باݢي الله 'الوَحْدَانِيَّة' (Al-Wahdaniyyah)؟",
    questionRumi: "Apakah maksud sifat wajib bagi Allah 'Al-Wahdaniyyah'?",
    answerJawi: "مها اسا (Tunggal)",
    answerRumi: "Maha Esa (Tunggal)",
    explanation: "Al-Wahdaniyyah bermaksud Allah SWT Maha Esa pada Zat, Sifat, dan Perbuatan-Nya tanpa sekutu.",
    options: [
      { jawi: "مها اسا", rumi: "Maha Esa", correct: true },
      { jawi: "مها كواسا", rumi: "Maha Kuasa", correct: false },
      { jawi: "مها مڠتاهوءي", rumi: "Maha Mengetahui", correct: false },
      { jawi: "مها هيدوڤ", rumi: "Maha Hidup", correct: false }
    ]
  },
  {
    subject: "tauhid",
    standard: 6,
    questionJawi: "تيمبڠن عملن باءيق دان بوروق ماءنسي دڤادڠ محشر دناماكن:",
    questionRumi: "Timbangan amalan baik dan buruk manusia di akhirat dinamakan:",
    answerJawi: "الميزان (Al-Mizan)",
    answerRumi: "Al-Mizan (الـميزان)",
    explanation: "Al-Mizan ialah neraca timbangan keadilan Allah untuk menimbang amalan manusia di akhirat.",
    options: [
      { jawi: "الميزان", rumi: "Al-Mizan", correct: true },
      { jawi: "الصراط", rumi: "As-Sirat", correct: false },
      { jawi: "البرزخ", rumi: "Al-Barzakh", correct: false },
      { jawi: "الحوض", rumi: "Al-Haudh", correct: false }
    ]
  },
  {
    subject: "tauhid",
    standard: 5,
    questionJawi: "لاون باݢي صفت واجب 'القِدَمُ' (Sedia Ada) اياله صفت مستحيل:",
    questionRumi: "Lawan bagi sifat wajib 'Al-Qidam' (Sedia Ada) ialah sifat mustahil:",
    answerJawi: "الحُدُوثُ (Baharu)",
    answerRumi: "Al-Huduth (Baharu / Ada Permulaan)",
    explanation: "Mustahil bagi Allah bersifat Al-Huduth (baharu atau diciptakan) kerana Allah Maha Qidam (tiada permulaan bagi kewujudan-Nya).",
    options: [
      { jawi: "الحُدُوثُ", rumi: "Al-Huduth (Baharu)", correct: true },
      { jawi: "الفَنَاءُ", rumi: "Al-Fana' (Binaso)", correct: false },
      { jawi: "العَجْزُ", rumi: "Al-'Ajzu (Lemah)", correct: false },
      { jawi: "الجَهْلُ", rumi: "Al-Jahlu (Bodoh)", correct: false }
    ]
  },
  // 5. Fiqh & Ibadah (Sasaran Sempurna 100%)
  {
    subject: "ibadah",
    standard: 5,
    questionJawi: "روكون صلاة يڠ 13 تربهاݢي كڤد 3 بهاݢين ياءيت:",
    questionRumi: "13 Rukun Solat terbahagi kepada 3 bahagian iaitu:",
    answerJawi: "قولي، فعلي دان قلبي",
    answerRumi: "Qawli, Fi'li dan Qalbi",
    explanation: "Rukun Solat terbahagi kepada 3: Qawli (bacaan lisan), Fi'li (perbuatan raga), dan Qalbi (ingatan dalam hati).",
    options: [
      { jawi: "قولي، فعلي دان قلبي", rumi: "Qawli, Fi'li, Qalbi", correct: true },
      { jawi: "واجب، سنة دان مكروه", rumi: "Wajib, Sunat, Makruh", correct: false },
      { jawi: "شمسية دان قمرية", rumi: "Syamsiyyah & Qamariyyah", correct: false },
      { jawi: "طهاره دان نجيس", rumi: "Taharah & Najis", correct: false }
    ]
  },
  {
    subject: "ibadah",
    standard: 6,
    questionJawi: "نجيس مغلظة (نجيس برت - انجيڠ دان بابي) مستيله دسوچيكن سباڽق 7 كالي دان ساتو درڤداڽ دڠن:",
    questionRumi: "Najis Mughallazah (berat) mestilah dibasuh sebanyak 7 kali dan salah satunya dengan:",
    answerJawi: "اءير تانه سوچي",
    answerRumi: "Air bercampur tanah yang suci",
    explanation: "Penyucian najis mughallazah disyaratkan 7 kali basuhan air mutlak dan salah satu daripadanya air tanah suci.",
    options: [
      { jawi: "اءير تانه سوچي", rumi: "Air Tanah Suci", correct: true },
      { jawi: "اءير سابون", rumi: "Air Sabun", correct: false },
      { jawi: "اءير ماور", rumi: "Air Mawar", correct: false },
      { jawi: "اءير هوجن", rumi: "Air Hujan", correct: false }
    ]
  },
  {
    subject: "ibadah",
    standard: 6,
    questionJawi: "مڠوروسكن جنازة اورڠ اسلام (منديكن، مڠافنكن، منصلاتكن، دان منبوركن) حكومڽ:",
    questionRumi: "Menguruskan jenazah orang Islam hukumnya:",
    answerJawi: "فرض كفاية",
    answerRumi: "Fardhu Kifayah",
    explanation: "Pengurusan jenazah orang Islam adalah Fardhu Kifayah bagi seluruh masyarakat setempat.",
    options: [
      { jawi: "فرض كفاية", rumi: "Fardhu Kifayah", correct: true },
      { jawi: "فرض عين", rumi: "Fardhu 'Ain", correct: false },
      { jawi: "سنة مؤكدة", rumi: "Sunat Muakkad", correct: false },
      { jawi: "هاروس", rumi: "Harus", correct: false }
    ]
  },
  // 6. Sirah & Akhlak (Sasaran Sempurna 100%)
  {
    subject: "sirah",
    standard: 5,
    questionJawi: "ڤرجنجين يڠ دمترايكن انتارا رسول الله دڠن قريش ڤد تاهون ك-6 هجرة اياله:",
    questionRumi: "Perjanjian antara Nabi Muhammad SAW dengan kaum Quraisy pada tahun ke-6 Hijrah ialah:",
    answerJawi: "ڤرجنجين حديبية",
    answerRumi: "Perjanjian Hudaibiyah",
    explanation: "Perjanjian Hudaibiyah dimeterai pada Zulkaedah tahun ke-6 Hijrah dengan gencatan senjata selama 10 tahun.",
    options: [
      { jawi: "ڤرجنجين حديبية", rumi: "Perjanjian Hudaibiyah", correct: true },
      { jawi: "بيعة العقبة", rumi: "Baiah Al-Aqabah", correct: false },
      { jawi: "ڤياݢم مدينة", rumi: "Piagam Madinah", correct: false },
      { jawi: "ڤراڠ بدر", rumi: "Perang Badar", correct: false }
    ]
  },
  {
    subject: "sirah",
    standard: 6,
    questionJawi: "ڤريستيوا 'فَتْحُ مَكَّةَ' (Pembukaan Kota Makkah) برلاكو ڤد تاهون ك-:",
    questionRumi: "Peristiwa 'Fathu Makkah' (Pembukaan Kota Mekah) berlaku pada tahun ke-:",
    answerJawi: "8 هجرة",
    answerRumi: "8 Hijrah",
    explanation: "Fathu Makkah berlaku pada 20 Ramadan tahun ke-8 Hijrah tanpa pertumpahan darah.",
    options: [
      { jawi: "8 هجرة", rumi: "8 Hijrah", correct: true },
      { jawi: "6 هجرة", rumi: "6 Hijrah", correct: false },
      { jawi: "10 هجرة", rumi: "10 Hijrah", correct: false },
      { jawi: "2 هجرة", rumi: "2 Hijrah", correct: false }
    ]
  },
  {
    subject: "sirah",
    standard: 6,
    questionJawi: "صفت محمودة (Mahmudah) برمقصود صفت يڠ:",
    questionRumi: "Sifat Mahmudah (صفت محمودة) bermaksud sifat yang:",
    answerJawi: "ترڤوجي دان دسوكاءي الله",
    answerRumi: "Terpuji dan disukai Allah",
    explanation: "Sifat Mahmudah ialah akhlak mulia seperti jujur, sabar, dan ikhlas. Lawannya ialah Mazmumah (tercela).",
    options: [
      { jawi: "ترڤوجي دان دسوكاءي الله", rumi: "Terpuji dan disukai Allah", correct: true },
      { jawi: "ترچلا دان دبنچي الله", rumi: "Tercela dan dibenci Allah", correct: false },
      { jawi: "سومبوڠ دان رياء", rumi: "Sombong dan Riya'", correct: false },
      { jawi: "دڠكي دان حسد", rumi: "Dengki dan Hasad", correct: false }
    ]
  }
];

const matchingPairsPool = [
  { jawi: "إدغام مع ڠنة", rumi: "Dengung 2 harakat (ي ن م و)" },
  { jawi: "إظهار حلقي", rumi: "Jelas tanpa dengung (ء هـ ع غ ح خ)" },
  { jawi: "إقلاب", rumi: "Tukar bunyi Nun Sakinah kepada Mim (ب)" },
  { jawi: "أَنَا", rumi: "Saya (Kata Ganti Diri Pertama)" },
  { jawi: "نَحْنُ", rumi: "Kami / Kita" },
  { jawi: "طَبِيبٌ", rumi: "Doktor Lelaki" },
  { jawi: "تيكنولوجي", rumi: "Kata Pinjaman Inggeris (Teknologi)" },
  { jawi: "إسلام", rumi: "Hamzah di bawah Alif (إ)" },
  { jawi: "الْوَحْدَانِيَّة", rumi: "Allah Maha Esa (Sifat Wajib)" },
  { jawi: "مُغَلَّظَة", rumi: "Najis Berat (Anjing & Babi)" },
  { jawi: "ڤرجنجين حديبية", rumi: "Tahun ke-6 Hijrah (Gencatan Senjata)" },
  { jawi: "فَتْحُ مَكَّةَ", rumi: "Pembukaan Kota Mekah (8 Hijrah)" }
];

export default function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [cloudSynced, setCloudSynced] = useState(false);
  const [activeTab, setActiveTab] = useState('topics');
  const [parentModeRumi, setParentModeRumi] = useState(true);

  // Cloud Questions & User Progress States
  const [cloudQuestions, setCloudQuestions] = useState([]);
  const [userProgress, setUserProgress] = useState({ answered: {}, examHistory: [] });

  // Filter States
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedStandard, setSelectedStandard] = useState('all');

  // Interactive Quiz States
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  // Timed Exam Simulator States
  const [examActive, setExamActive] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examUserAnswers, setExamUserAnswers] = useState({});
  const [examTimeLeft, setExamTimeLeft] = useState(900);
  const examTimerRef = useRef(null);

  // Flashcards States
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Matching Game States
  const [matchingPairs, setMatchingPairs] = useState([]);
  const [selectedJawiItem, setSelectedJawiItem] = useState(null);
  const [selectedRumiItem, setSelectedRumiItem] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);

  // Toast / Confirmation Modal States
  const [toastMsg, setToastMsg] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);

  // Bulk JSON Text Input State
  const [bulkJsonText, setBulkJsonText] = useState('');

  const showToast = (message, type = 'success') => {
    setToastMsg({ message, type });
    setTimeout(() => {
      setToastMsg((prev) => (prev?.message === message ? null : prev));
    }, 4000);
  };

  const playSound = (kind = 'correct') => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
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
    } catch (e) {
      // audio gracefully suppressed
    }
  };

  const speakArabic = (text) => {
    if ('speechSynthesis' in window && text) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn("Speech synthesis unavailable:", e);
      }
    }
  };

  const normalizeText = (text) => {
    if (!text) return '';
    return text.toString().trim().toLowerCase().replace(/\s+/g, ' ');
  };

  const isQuestionDuplicate = (newJawi, newRumi, bank) => {
    const normJawi = normalizeText(newJawi);
    const normRumi = normalizeText(newRumi);
    return bank.some((q) => {
      const existingJawi = normalizeText(q.questionJawi);
      const existingRumi = normalizeText(q.questionRumi);
      return (normJawi && existingJawi === normJawi) || (normRumi && existingRumi === normRumi);
    });
  };

  const allQuestions = useMemo(() => {
    return [...initialDefaultQuestions, ...cloudQuestions];
  }, [cloudQuestions]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchSubj = selectedSubject === 'all' || q.subject === selectedSubject;
      const matchStd = selectedStandard === 'all' || String(q.standard) === String(selectedStandard);
      return matchSubj && matchStd;
    });
  }, [allQuestions, selectedSubject, selectedStandard]);

  useEffect(() => {
    setQuizIndex(0);
    setQuizSelectedOption(null);
    setQuizAnswered(false);
    setCardIndex(0);
    setIsCardFlipped(false);
  }, [selectedSubject, selectedStandard]);

  const initMatching = () => {
    const shuffled = [...matchingPairsPool].sort(() => Math.random() - 0.5).slice(0, 5);
    setMatchingPairs(shuffled);
    setSelectedJawiItem(null);
    setSelectedRumiItem(null);
    setMatchedIds([]);
  };

  useEffect(() => {
    if (activeTab === 'matching') {
      initMatching();
    }
  }, [activeTab]);

  useEffect(() => {
    if (!auth || !db) {
      setUserId('tamu-offline');
      setCloudSynced(true);
      return;
    }

    const initAuthAndSync = async () => {
      try {
        await signInAnonymously(auth);
      } catch (err) {
        console.warn("Using local guest mode:", err);
        setUserId('offline-mode');
        setCloudSynced(true);
      }
    };

    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserId(currentUser.uid.slice(0, 8));
        setCloudSynced(true);

        try {
          const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'psra_questions');
          const unsubQuestions = onSnapshot(colRef, (snapshot) => {
            const list = [];
            snapshot.forEach((d) => {
              list.push({ id: d.id, ...d.data() });
            });
            setCloudQuestions(list);
          }, (error) => {
            console.warn("Public question snapshot listener notice:", error);
          });

          const progressDocRef = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'psra_progress', 'stats');
          const unsubProgress = onSnapshot(progressDocRef, (snap) => {
            if (snap.exists()) {
              setUserProgress(snap.data());
            }
          }, (error) => {
            console.warn("Progress snapshot fallback notice:", error);
          });

          return () => {
            unsubQuestions();
            unsubProgress();
          };
        } catch (e) {
          console.warn("Firestore setup notice:", e);
        }
      }
    });

    initAuthAndSync();
    return () => unsubAuth();
  }, []);

  const recordQuestionAttemptCloud = async (questionKey, isCorrect, subject) => {
    setUserProgress((prev) => {
      const updatedAnswered = {
        ...(prev.answered || {}),
        [questionKey]: {
          correct: isCorrect,
          subject,
          timestamp: new Date().toISOString()
        }
      };
      return { ...prev, answered: updatedAnswered };
    });

    if (user && db) {
      try {
        const progressDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'psra_progress', 'stats');
        await setDoc(progressDocRef, {
          answered: {
            [questionKey]: {
              correct: isCorrect,
              subject,
              timestamp: new Date().toISOString()
            }
          }
        }, { merge: true });
      } catch (err) {
        console.error("Error saving progress to cloud:", err);
      }
    }
  };

  const handleQuizAnswer = (opt, optIndex) => {
    if (quizAnswered) return;
    setQuizSelectedOption(optIndex);
    setQuizAnswered(true);

    const currentQ = filteredQuestions[quizIndex];
    const isCorrect = !!opt.correct;

    if (isCorrect) {
      playSound('correct');
      setQuizScore((prev) => prev + 10);
    } else {
      playSound('wrong');
    }

    const uniqueKey = currentQ.id || `${currentQ.subject}_${currentQ.standard}_${currentQ.questionJawi.slice(0, 15)}`;
    recordQuestionAttemptCloud(uniqueKey, isCorrect, currentQ.subject);
  };

  const handleNextQuiz = () => {
    setQuizSelectedOption(null);
    setQuizAnswered(false);
    if (quizIndex < filteredQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      showToast("Alhamdulillah! Anda telah menamatkan semua soalan dalam set ini.", "success");
      setQuizIndex(0);
    }
  };

  const handleMatchingClick = (type, item) => {
    if (matchedIds.includes(item.rumi)) return;

    if (type === 'jawi') {
      setSelectedJawiItem(item);
      if (selectedRumiItem) {
        checkMatch(item, selectedRumiItem);
      }
    } else {
      setSelectedRumiItem(item);
      if (selectedJawiItem) {
        checkMatch(selectedJawiItem, item);
      }
    }
  };

  const checkMatch = (jawiObj, rumiObj) => {
    if (jawiObj.rumi === rumiObj.rumi) {
      playSound('correct');
      setMatchedIds((prev) => [...prev, jawiObj.rumi]);
      setSelectedJawiItem(null);
      setSelectedRumiItem(null);
    } else {
      playSound('wrong');
      setTimeout(() => {
        setSelectedJawiItem(null);
        setSelectedRumiItem(null);
      }, 400);
    }
  };

  const startExam = (numQuestions = 10) => {
    const randomized = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, numQuestions);
    setExamQuestions(randomized);
    setExamIndex(0);
    setExamUserAnswers({});
    setExamTimeLeft(numQuestions * 90);
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

  const submitExam = async () => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    setExamSubmitted(true);
    setExamActive(false);

    let correctCount = 0;
    const statsBySubj = {};

    examQuestions.forEach((q, idx) => {
      if (!statsBySubj[q.subject]) statsBySubj[q.subject] = { correct: 0, total: 0 };
      statsBySubj[q.subject].total++;

      const chosenIdx = examUserAnswers[idx];
      const isCorrect = chosenIdx !== undefined && q.options[chosenIdx]?.correct;

      if (isCorrect) {
        correctCount++;
        statsBySubj[q.subject].correct++;
      }

      const uniqueKey = q.id || `${q.subject}_${q.standard}_${q.questionJawi.slice(0, 15)}`;
      recordQuestionAttemptCloud(uniqueKey, isCorrect, q.subject);
    });

    const finalPct = Math.round((correctCount / examQuestions.length) * 100);

    if (user && db) {
      try {
        const newHistoryItem = {
          date: new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
          score: finalPct,
          correct: correctCount,
          total: examQuestions.length,
          stats: statsBySubj
        };
        const updatedHistory = [newHistoryItem, ...(userProgress.examHistory || [])].slice(0, 8);
        const progressDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'psra_progress', 'stats');
        await setDoc(progressDocRef, { examHistory: updatedHistory }, { merge: true });
      } catch (err) {
        console.error("Error saving exam result to cloud:", err);
      }
    }
  };

  const copyJsonTemplate = async () => {
    const template = [
      {
        subject: "tajweed",
        standard: 6,
        questionJawi: "أڤاكه كقدرن باچاءن باݢي مد لازم كلمي مثقل؟",
        questionRumi: "Apakah kadar bacaan bagi Mad Lazim Kilmi Muthaqqal?",
        options: [
          { jawi: "6 حركة واجب", rumi: "6 Harakat Wajib", correct: true },
          { jawi: "2 حركة", rumi: "2 Harakat", correct: false },
          { jawi: "4 حركة", rumi: "4 Harakat", correct: false },
          { jawi: "1 حركة", rumi: "1 Harakat", correct: false }
        ],
        explanation: "Mad Lazim Kilmi Muthaqqal wajib dipanjangkan 6 harakat."
      }
    ];
    const text = JSON.stringify(template, null, 2);
    setBulkJsonText(text);

    let copied = false;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (err) {
      try {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = text;
        tempTextArea.style.position = "fixed";
        tempTextArea.style.left = "-9999px";
        document.body.appendChild(tempTextArea);
        tempTextArea.focus();
        tempTextArea.select();
        copied = document.execCommand("copy");
        document.body.removeChild(tempTextArea);
      } catch (fallbackErr) {
        copied = false;
      }
    }

    if (copied) {
      showToast("Contoh template JSON disalin ke papan klip & diisi ke kotak teks!", "info");
    } else {
      showToast("Contoh template JSON telah diisi terus ke dalam kotak teks di bawah!", "info");
    }
  };

  const handleJsonFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        setBulkJsonText(content);
        showToast("Fail JSON berjaya dimuatkan ke dalam kotak! Klik 'Muat Naik & Tapis Pendua' untuk simpan.", "info");
      }
    };
    reader.readAsText(file);
  };

  const handleBulkImportCloud = async () => {
    if (!bulkJsonText.trim()) return;
    if (!user || !db) {
      showToast("Pangkalan data awan sedang disambung...", "info");
      return;
    }
    try {
      const parsed = JSON.parse(bulkJsonText);
      if (!Array.isArray(parsed)) throw new Error("Format mestilah tatasusunan JSON [ ... ]");

      const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'psra_questions');
      let countAdded = 0;
      let countSkippedDuplicates = 0;
      const currentPool = [...allQuestions];

      for (const item of parsed) {
        if (item.questionJawi && item.options && item.options.length >= 2) {
          if (isQuestionDuplicate(item.questionJawi, item.questionRumi || '', currentPool)) {
            countSkippedDuplicates++;
            continue;
          }

          const docPayload = {
            subject: item.subject || 'tajweed',
            standard: item.standard || 6,
            questionJawi: item.questionJawi,
            questionRumi: item.questionRumi || '',
            answerJawi: item.answerJawi || item.options.find((o) => o.correct)?.jawi || '',
            answerRumi: item.answerRumi || item.options.find((o) => o.correct)?.rumi || '',
            explanation: item.explanation || '',
            options: item.options,
            createdAt: new Date().toISOString(),
            createdBy: user.uid
          };

          await addDoc(colRef, docPayload);
          currentPool.push(docPayload);
          countAdded++;
        }
      }
      setBulkJsonText('');
      
      if (countAdded > 0) {
        showToast(`${countAdded} soalan baharu dimuat naik! (${countSkippedDuplicates} soalan pendua ditolak)`, "success");
      } else if (countSkippedDuplicates > 0) {
        showToast(`Semua ${countSkippedDuplicates} soalan dalam fail sudah wujud dalam bank (tiada pendua dimasukkan).`, "info");
      } else {
        showToast("Tiada format soalan sah dijumpai dalam JSON.", "error");
      }
    } catch (err) {
      showToast(`Ralat JSON: ${err.message}`, "error");
    }
  };

  const handleDeleteCloudQuestion = async (docId) => {
    setConfirmModal({
      title: "Padam Soalan Awan?",
      message: "Adakah anda pasti mahu memadam soalan ini dari pangkalan data awan?",
      onConfirm: async () => {
        if (db) {
          try {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'psra_questions', docId);
            await deleteDoc(docRef);
            showToast("Soalan dipadam dari pangkalan data awan.", "info");
          } catch (err) {
            console.error("Error deleting from cloud:", err);
          }
        }
        setConfirmModal(null);
      }
    });
  };

  const subjectBreakdown = useMemo(() => {
    const subjects = {
      tajweed: { 
        name: "Tajweed Al-Quran", 
        icon: "📖", 
        target: "Sasaran Mumtaz Penuh (96% – 100%)",
        badge: "Sasaran 96%+",
        theme: {
          bg: "bg-emerald-50/80 hover:bg-emerald-100/60",
          border: "border-emerald-200/90",
          accent: "text-emerald-800",
          tagBg: "bg-emerald-100 text-emerald-800 border-emerald-300/60",
          btn: "bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20",
          statBg: "bg-emerald-100/60 border-emerald-200/70"
        }
      },
      imlak: { 
        name: "Jawi, Imlak & Khat", 
        icon: "✍️", 
        target: "Sasaran Mumtaz Penuh (96% – 100%)",
        badge: "Sasaran 96%+",
        theme: {
          bg: "bg-teal-50/80 hover:bg-teal-100/60",
          border: "border-teal-200/90",
          accent: "text-teal-800",
          tagBg: "bg-teal-100 text-teal-800 border-teal-300/60",
          btn: "bg-teal-700 hover:bg-teal-800 text-white shadow-teal-700/20",
          statBg: "bg-teal-100/60 border-teal-200/70"
        }
      },
      arabic: { 
        name: "Bahasa Arab", 
        icon: "🗣️", 
        target: "Sasaran Mumtaz Tinggi (96% – 98%)",
        badge: "Sasaran 96% – 98%",
        theme: {
          bg: "bg-sky-50/80 hover:bg-sky-100/60",
          border: "border-sky-200/90",
          accent: "text-sky-800",
          tagBg: "bg-sky-100 text-sky-800 border-sky-300/60",
          btn: "bg-sky-700 hover:bg-sky-800 text-white shadow-sky-700/20",
          statBg: "bg-sky-100/60 border-sky-200/70"
        }
      },
      tauhid: { 
        name: "Tauhid & Aqidah", 
        icon: "🕋", 
        target: "Sasaran Sempurna (100% Mumtaz)",
        badge: "Sasaran 100%",
        theme: {
          bg: "bg-indigo-50/80 hover:bg-indigo-100/60",
          border: "border-indigo-200/90",
          accent: "text-indigo-800",
          tagBg: "bg-indigo-100 text-indigo-800 border-indigo-300/60",
          btn: "bg-indigo-700 hover:bg-indigo-800 text-white shadow-indigo-700/20",
          statBg: "bg-indigo-100/60 border-indigo-200/70"
        }
      },
      ibadah: { 
        name: "Fiqh & Ibadah", 
        icon: "🕌", 
        target: "Sasaran Sempurna (100% Mumtaz)",
        badge: "Sasaran 100%",
        theme: {
          bg: "bg-rose-50/80 hover:bg-rose-100/60",
          border: "border-rose-200/90",
          accent: "text-rose-800",
          tagBg: "bg-rose-100 text-rose-800 border-rose-300/60",
          btn: "bg-rose-700 hover:bg-rose-800 text-white shadow-rose-700/20",
          statBg: "bg-rose-100/60 border-rose-200/70"
        }
      },
      sirah: { 
        name: "Sirah & Akhlak", 
        icon: "📜", 
        target: "Sasaran Sempurna (100% Mumtaz)",
        badge: "Sasaran 100%",
        theme: {
          bg: "bg-amber-50/80 hover:bg-amber-100/60",
          border: "border-amber-200/90",
          accent: "text-amber-800",
          tagBg: "bg-amber-100 text-amber-800 border-amber-300/60",
          btn: "bg-amber-700 hover:bg-amber-800 text-white shadow-amber-700/20",
          statBg: "bg-amber-100/60 border-amber-200/70"
        }
      }
    };

    const counts = {};
    Object.keys(subjects).forEach((k) => {
      counts[k] = { ...subjects[k], inBank: 0, answered: 0, correct: 0 };
    });

    allQuestions.forEach((q) => {
      if (counts[q.subject]) counts[q.subject].inBank++;
    });

    Object.values(userProgress.answered || {}).forEach((rec) => {
      if (rec.subject && counts[rec.subject]) {
        counts[rec.subject].answered++;
        if (rec.correct) counts[rec.subject].correct++;
      }
    });

    return counts;
  }, [allQuestions, userProgress]);

  const overallAccuracy = useMemo(() => {
    const entries = Object.values(userProgress.answered || {});
    if (entries.length === 0) return 0;
    const totalCorrect = entries.filter((e) => e.correct).length;
    return Math.round((totalCorrect / entries.length) * 100);
  }, [userProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef8f2] via-[#f3f9f5] to-[#eaf5ee] text-slate-700 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg border text-xs font-semibold backdrop-blur-md transition-all animate-fade-in ${
          toastMsg.type === 'error' ? 'bg-rose-50 text-rose-800 border-rose-200 shadow-rose-100' :
          toastMsg.type === 'info' ? 'bg-sky-50 text-sky-800 border-sky-200 shadow-sky-100' :
          'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-emerald-100'
        }`}>
          {toastMsg.type === 'error' ? <IconAlertTriangle className="w-4 h-4 text-rose-600" /> : <IconCheckCircle className="w-4 h-4 text-emerald-600" />}
          <span>{toastMsg.message}</span>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-100">
            <h4 className="font-bold text-base text-slate-800 mb-1.5">{confirmModal.title}</h4>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">{confirmModal.message}</p>
            <div className="flex gap-2.5">
              <button 
                onClick={() => setConfirmModal(null)} 
                className="flex-1 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                Batal
              </button>
              <button 
                onClick={confirmModal.onConfirm} 
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-semibold text-white shadow-xs transition-all">
                Ya, Padam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Soft Green Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-emerald-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
              <IconSparkles className="w-4 h-4 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base text-emerald-950 tracking-tight">PSRA Mumtaz</h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300/80">
                  Tahun 5 & 6
                </span>
              </div>
              <p className="text-[11px] text-emerald-800/70 font-medium">Ulang Kaji Berfokus JAIS</p>
            </div>
          </div>

          {/* Parent Mode Toggle */}
          <div className="flex items-center bg-emerald-100/70 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-300/80 transition-colors">
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={parentModeRumi} 
                onChange={(e) => setParentModeRumi(e.target.checked)} 
                className="sr-only peer" 
              />
              <div className="w-8 h-4 bg-emerald-300/80 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-700"></div>
              <span className="ml-2 text-xs font-bold text-emerald-900">
                Bantuan Rumi
              </span>
            </label>
          </div>

        </div>
      </header>

      {/* Main App Canvas */}
      <main className="max-w-5xl mx-auto px-4 py-6 w-full flex-grow">
        
        {/* Streamlined Navigation Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
          {[
            { id: 'quiz', label: 'Kuiz Latih Tubi', icon: IconListOrdered },
            { id: 'topics', label: 'Nota Topik', icon: IconBookOpen },
            { id: 'exam', label: 'Simulasi Ujian', icon: IconTimer },
            { id: 'flashcard', label: 'Kad Hafalan', icon: IconLayers },
            { id: 'matching', label: 'Padanan', icon: IconPuzzle },
            { id: 'progress', label: 'Laporan Prestasi', icon: IconBarChart },
            { id: 'manage', label: 'Awan Soalan', icon: IconFolderPlus },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600/30' 
                    : 'bg-white/90 text-slate-600 hover:bg-emerald-100/70 hover:text-emerald-900 border border-emerald-200/70'
                }`}>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Filter Bar */}
        {(activeTab === 'quiz' || activeTab === 'flashcard' || activeTab === 'topics') && (
          <div className="bg-white/90 rounded-2xl p-3 border border-emerald-200/80 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-emerald-900 font-bold text-[11px] uppercase tracking-wider pl-1">Pilihan:</span>
              <select 
                value={selectedSubject} 
                onChange={(e) => setSelectedSubject(e.target.value)} 
                className="bg-emerald-50/80 border border-emerald-300/80 text-emerald-950 font-semibold rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs">
                <option value="all">Semua Subjek ({allQuestions.length} soalan)</option>
                <option value="tajweed">📖 Tajweed Al-Quran</option>
                <option value="imlak">✍️ Jawi, Imlak & Khat</option>
                <option value="arabic">🗣️ Bahasa Arab</option>
                <option value="tauhid">🕋 Tauhid & Aqidah</option>
                <option value="ibadah">🕌 Fiqh & Ibadah</option>
                <option value="sirah">📜 Sirah & Akhlak</option>
              </select>

              <select 
                value={selectedStandard} 
                onChange={(e) => setSelectedStandard(e.target.value)} 
                className="bg-emerald-50/80 border border-emerald-300/80 text-emerald-950 font-semibold rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs">
                <option value="all">Tahun 5 & 6</option>
                <option value="5">Tahun 5</option>
                <option value="6">Tahun 6</option>
              </select>
            </div>

            <div className="text-[11px] font-semibold text-emerald-900 px-2.5 py-1 bg-emerald-100/70 rounded-lg border border-emerald-300/80">
              <span className="font-extrabold text-emerald-950">{filteredQuestions.length}</span> soalan dimuatkan
            </div>
          </div>
        )}

        {/* 1. QUIZ TAB */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white/90 p-10 rounded-3xl text-center border border-emerald-200/80 shadow-xs">
                <p className="text-xs font-semibold text-slate-500">Tiada soalan untuk pilihan ini.</p>
                <button 
                  onClick={() => { setSelectedSubject('all'); setSelectedStandard('all'); }} 
                  className="mt-3 text-xs bg-emerald-700 text-white font-medium px-4 py-2 rounded-xl">
                  Papar Semua
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>Soalan {quizIndex + 1} daripada {filteredQuestions.length}</span>
                  <span className="font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/80">
                    Markah: {quizScore}
                  </span>
                </div>

                <div className="w-full bg-emerald-200/70 h-2 rounded-full overflow-hidden mb-6">
                  <div 
                    className="bg-emerald-600 h-full transition-all duration-300 rounded-full" 
                    style={{ width: `${Math.round(((quizIndex + 1) / filteredQuestions.length) * 100)}%` }}></div>
                </div>

                {(() => {
                  const q = filteredQuestions[quizIndex] || filteredQuestions[0];
                  return (
                    <div className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-200/90 transition-all">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100/80 border border-emerald-300/70 px-2.5 py-1 rounded-md capitalize">
                          {q.subject} • Tahun {q.standard}
                        </span>
                        <button 
                          onClick={() => speakArabic(q.questionJawi)} 
                          className="p-1.5 text-emerald-700 hover:text-emerald-950 hover:bg-emerald-100/60 rounded-lg transition-all" 
                          title="Dengar Sebutan">
                          <IconVolume className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-relaxed text-right mb-4" dir="rtl">
                        {q.questionJawi}
                      </h3>

                      {parentModeRumi && (
                        <p className="text-xs text-slate-600 font-medium mb-6 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/80 leading-relaxed">
                          <strong className="text-emerald-950">Maksud:</strong> {q.questionRumi}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {q.options.map((opt, idx) => {
                          const isSelected = quizSelectedOption === idx;
                          let btnStyle = "border-emerald-200/80 bg-white hover:border-emerald-400 hover:bg-emerald-50/60 text-slate-800";
                          
                          if (quizAnswered) {
                            if (opt.correct) {
                              btnStyle = "border-emerald-600 bg-emerald-100 text-emerald-950 font-bold ring-2 ring-emerald-500/50";
                            } else if (isSelected && !opt.correct) {
                              btnStyle = "border-rose-300 bg-rose-50 text-rose-950 font-semibold";
                            } else {
                              btnStyle = "border-slate-100 bg-slate-50/40 text-slate-400 opacity-60";
                            }
                          }

                          return (
                            <button 
                              key={idx} 
                              disabled={quizAnswered} 
                              onClick={() => handleQuizAnswer(opt, idx)} 
                              className={`text-right p-4 rounded-2xl border transition-all flex items-center justify-between shadow-xs ${btnStyle}`}>
                              <span className="w-6 h-6 rounded-lg bg-emerald-100/70 text-emerald-900 font-bold text-[11px] flex items-center justify-center shrink-0">
                                {String.fromCharCode(65 + idx)}
                              </span>
                              <div className="text-right pl-3 overflow-hidden">
                                <span className="font-serif text-lg font-bold block text-slate-900 leading-snug" dir="rtl">
                                  {opt.jawi}
                                </span>
                                {parentModeRumi && (
                                  <span className="text-[11px] text-slate-600 block truncate mt-0.5 font-medium">{opt.rumi}</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizAnswered && (
                        <div className={`mt-6 p-4 rounded-2xl text-xs leading-relaxed border ${
                          q.options[quizSelectedOption]?.correct 
                            ? 'bg-emerald-100/70 text-emerald-950 border-emerald-300' 
                            : 'bg-rose-50 text-rose-950 border-rose-200'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold mb-1">
                            {q.options[quizSelectedOption]?.correct ? (
                              <>
                                <IconCheckCircle className="w-4 h-4 text-emerald-700" /> Tahniah! Jawapan Tepat
                              </>
                            ) : (
                              <>
                                <IconXCircle className="w-4 h-4 text-rose-600" /> Jawapan Kurang Tepat
                              </>
                            )}
                          </div>
                          <p className="text-slate-700 font-normal mt-1">
                            <strong>Nota PSRA:</strong> {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {quizAnswered && (
                  <button 
                    onClick={handleNextQuiz} 
                    className="mt-4 w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 rounded-2xl shadow-md transition-all text-xs flex items-center justify-center gap-2">
                    <span>Soalan Seterusnya</span> <IconArrowRight className="w-4 h-4" />
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {/* 2. TOPICS OVERVIEW (MODUL SUBJEK DENGAN WARNA SELESA & MENARIK) */}
        {activeTab === 'topics' && (
          <div className="space-y-4">
            <div className="text-center max-w-md mx-auto mb-6">
              <h2 className="text-xl font-bold text-emerald-950">Modul Subjek PSRA</h2>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Pilih modul subjek di bawah untuk memulakan latih tubi bertumpu mengikut topik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(subjectBreakdown).map(([k, info]) => (
                <div 
                  key={k} 
                  className={`rounded-3xl p-5 border-2 shadow-sm flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-md ${info.theme.bg} ${info.theme.border}`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl filter drop-shadow-xs">{info.icon}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${info.theme.tagBg}`}>
                        {info.inBank} soalan
                      </span>
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 mb-1">{info.name}</h3>
                    <p className={`text-xs font-bold mb-3 ${info.theme.accent}`}>{info.target}</p>
                    
                    <div className={`text-[11px] text-slate-700 p-2.5 rounded-xl border space-y-1 mb-4 ${info.theme.statBg}`}>
                      <div>• Dijawab: <strong className="text-slate-900">{info.answered}</strong> soalan</div>
                      <div>• Ketepatan: <strong className="text-slate-900">{info.answered > 0 ? Math.round((info.correct / info.answered) * 100) : 0}%</strong></div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedSubject(k); setActiveTab('quiz'); }} 
                    className={`w-full font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all ${info.theme.btn}`}>
                    <span>Latih Subjek Ini</span> <IconArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. EXAM SIMULATION TAB */}
        {activeTab === 'exam' && (
          <div className="max-w-2xl mx-auto">
            {!examActive && !examSubmitted && (
              <div className="bg-white/95 rounded-3xl p-8 shadow-sm border border-emerald-200/90 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <IconTimer className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-emerald-950 mb-1">Simulasi Peperiksaan PSRA</h2>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed font-medium">
                  Latihan peperiksaan penuh bertulis dengan had masa gabungan Tahun 5 dan 6.
                </p>

                <div className="flex justify-center gap-3">
                  <button 
                    onClick={() => startExam(10)} 
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow-sm transition-all">
                    10 Soalan (Cepat)
                  </button>
                  <button 
                    onClick={() => startExam(20)} 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow-sm transition-all">
                    20 Soalan (Standard)
                  </button>
                </div>
              </div>
            )}

            {examActive && examQuestions.length > 0 && (
              <div>
                <div className="bg-white/95 p-3.5 rounded-2xl mb-4 flex justify-between items-center border border-emerald-200/90 shadow-xs">
                  <span className="text-xs font-bold text-slate-700">
                    Soalan {examIndex + 1} / {examQuestions.length}
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-950 font-bold text-xs bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/80">
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
                    <div className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-200/90 mb-4">
                      <div className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 inline-block px-2.5 py-0.5 rounded uppercase tracking-wider mb-2 border border-emerald-200">
                        {eq.subject} • Tahun {eq.standard}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900 text-right mb-3" dir="rtl">
                        {eq.questionJawi}
                      </h3>
                      {parentModeRumi && (
                        <p className="text-xs text-slate-600 font-medium mb-5 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/60">
                          {eq.questionRumi}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {eq.options.map((opt, oIdx) => {
                          const isChosen = examUserAnswers[examIndex] === oIdx;
                          return (
                            <button 
                              key={oIdx} 
                              onClick={() => setExamUserAnswers({ ...examUserAnswers, [examIndex]: oIdx })} 
                              className={`w-full text-right p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                                isChosen 
                                  ? 'border-emerald-600 bg-emerald-100 text-emerald-950 font-bold ring-2 ring-emerald-500/50' 
                                  : 'border-emerald-200/80 bg-white hover:bg-emerald-50/50 text-slate-700'
                              }`}>
                              <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                                isChosen ? 'bg-emerald-700 text-white' : 'bg-emerald-100/80 text-emerald-900'
                              }`}>
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <div className="text-right pl-2">
                                <span className="font-serif text-base font-bold block" dir="rtl">{opt.jawi}</span>
                                {parentModeRumi && <span className="text-[11px] text-slate-500 block truncate">{opt.rumi}</span>}
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
                    onClick={() => setExamIndex((prev) => prev - 1)} 
                    className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      examIndex === 0 ? 'opacity-30 text-slate-400' : 'bg-white border border-emerald-200 text-slate-700 hover:bg-emerald-50/60'
                    }`}>
                    Sebelum
                  </button>

                  {examIndex < examQuestions.length - 1 ? (
                    <button 
                      onClick={() => setExamIndex((prev) => prev + 1)} 
                      className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-2 rounded-xl text-xs shadow-sm">
                      Seterusnya
                    </button>
                  ) : (
                    <button 
                      onClick={submitExam} 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-xl text-xs shadow-sm">
                      Hantar Jawapan
                    </button>
                  )}
                </div>
              </div>
            )}

            {examSubmitted && (
              <div className="bg-white/95 rounded-3xl p-8 shadow-sm border border-emerald-200/90 text-center">
                <h3 className="text-base font-bold text-slate-800 mb-1">Ujian Selesai! 🎉</h3>
                <p className="text-xs text-slate-500 mb-6">Keputusan telah disimpan ke akaun anak anda.</p>
                <button 
                  onClick={() => setExamSubmitted(false)} 
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-2.5 rounded-xl text-xs">
                  Kembali ke Menu
                </button>
              </div>
            )}
          </div>
        )}

        {/* 4. FLASHCARD TAB */}
        {activeTab === 'flashcard' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex justify-between items-center text-xs font-medium text-slate-500 px-1">
              <span>Kad {cardIndex + 1} / {filteredQuestions.length || 1}</span>
              <button 
                onClick={() => setCardIndex((prev) => (prev + 1) % (filteredQuestions.length || 1))} 
                className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold">
                <IconRotateCcw className="w-3 h-3" /> Rawak
              </button>
            </div>

            {filteredQuestions.length > 0 && (() => {
              const cq = filteredQuestions[cardIndex] || filteredQuestions[0];
              return (
                <div 
                  onClick={() => setIsCardFlipped(!isCardFlipped)} 
                  className="w-full h-72 bg-white/95 rounded-3xl shadow-sm border-2 border-emerald-200/90 p-6 flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all text-center">
                  <div className="flex justify-between items-center text-[10px] text-emerald-900 font-bold">
                    <span className="uppercase bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">{cq.subject}</span>
                    <span>Tahun {cq.standard}</span>
                  </div>

                  {!isCardFlipped ? (
                    <div className="my-auto">
                      <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2 leading-relaxed" dir="rtl">{cq.questionJawi}</h3>
                      {parentModeRumi && <p className="text-xs text-slate-500">{cq.questionRumi}</p>}
                    </div>
                  ) : (
                    <div className="my-auto">
                      <div className="text-[10px] font-bold text-emerald-700 uppercase mb-1">Jawapan Betul:</div>
                      <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-1" dir="rtl">{cq.answerJawi}</h3>
                      {parentModeRumi && <p className="text-xs text-slate-600 mb-2 font-medium">{cq.answerRumi}</p>}
                      <p className="text-[11px] text-slate-500 leading-relaxed">{cq.explanation}</p>
                    </div>
                  )}

                  <div className="text-[10px] text-emerald-700/80 font-medium">
                    {isCardFlipped ? "Klik untuk kembali ke soalan" : "Klik untuk semak jawapan"}
                  </div>
                </div>
              );
            })()}

            <div className="flex justify-center items-center gap-3 pt-2">
              <button 
                onClick={() => setCardIndex((prev) => (prev - 1 + (filteredQuestions.length || 1)) % (filteredQuestions.length || 1))} 
                className="p-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-900 hover:bg-emerald-50">
                <IconArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => speakArabic(filteredQuestions[cardIndex]?.questionJawi)} 
                className="px-4 py-2 rounded-xl bg-emerald-100 hover:bg-emerald-200/80 text-emerald-900 text-xs font-bold flex items-center gap-1.5 border border-emerald-300">
                <IconVolume className="w-3.5 h-3.5 text-emerald-700" /> Sebutan
              </button>
              <button 
                onClick={() => setCardIndex((prev) => (prev + 1) % (filteredQuestions.length || 1))} 
                className="p-2.5 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm">
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 5. MATCHING GAME TAB */}
        {activeTab === 'matching' && (
          <div className="max-w-xl mx-auto bg-white/95 p-6 rounded-3xl shadow-sm border border-emerald-200/90">
            <div className="text-center mb-6">
              <h2 className="text-base font-bold text-emerald-950">Padanan Istilah Jawi & Rumi</h2>
              <p className="text-xs text-slate-500 mt-0.5">Pilih istilah jawi di kiri dan padankan maksudnya di kanan.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                {matchingPairs.map((p, idx) => {
                  const isMatched = matchedIds.includes(p.rumi);
                  const isSelected = selectedJawiItem?.rumi === p.rumi;
                  return (
                    <button 
                      key={idx} 
                      disabled={isMatched} 
                      onClick={() => handleMatchingClick('jawi', p)} 
                      className={`w-full p-3 rounded-xl border text-right font-serif text-base font-bold transition-all ${
                        isMatched ? 'bg-emerald-100/70 text-emerald-900 border-emerald-300 opacity-60' :
                        isSelected ? 'bg-emerald-200/80 border-emerald-500 text-slate-900 ring-2 ring-emerald-400' :
                        'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/50 text-slate-800'
                      }`} dir="rtl">
                      {p.jawi}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                {[...matchingPairs].reverse().map((p, idx) => {
                  const isMatched = matchedIds.includes(p.rumi);
                  const isSelected = selectedRumiItem?.rumi === p.rumi;
                  return (
                    <button 
                      key={idx} 
                      disabled={isMatched} 
                      onClick={() => handleMatchingClick('rumi', p)} 
                      className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                        isMatched ? 'bg-emerald-100/70 text-emerald-900 border-emerald-300 opacity-60' :
                        isSelected ? 'bg-emerald-200/80 border-emerald-500 text-slate-900 ring-2 ring-emerald-400' :
                        'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/50 text-slate-700'
                      }`}>
                      {p.rumi}
                    </button>
                  );
                })}
              </div>
            </div>

            {matchedIds.length === matchingPairs.length && matchingPairs.length > 0 && (
              <div className="mt-5 p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-center">
                <span className="text-xs font-bold text-emerald-950">🎉 Semua padanan betul!</span>
                <button 
                  onClick={initMatching} 
                  className="ml-3 text-[11px] bg-emerald-800 text-white font-semibold px-3 py-1 rounded-lg">
                  Main Lagi
                </button>
              </div>
            )}
          </div>
        )}

        {/* 6. PROGRESS DASHBOARD */}
        {activeTab === 'progress' && (
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white/95 rounded-3xl p-6 border border-emerald-200/90 shadow-sm">
              <h2 className="text-base font-bold text-emerald-950 mb-1">Analisis Penguasaan PSRA</h2>
              <p className="text-xs text-slate-500 mb-5">Prestasi kumulatif latihan dan ujian anak anda.</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/70">
                  <div className="text-[11px] text-emerald-800 font-semibold">Dijawab</div>
                  <div className="text-xl font-bold text-emerald-950 mt-0.5">
                    {Object.keys(userProgress.answered || {}).length}
                  </div>
                </div>
                <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/70">
                  <div className="text-[11px] text-emerald-800 font-semibold">Ketepatan</div>
                  <div className="text-xl font-bold text-emerald-700 mt-0.5">{overallAccuracy}%</div>
                </div>
                <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/70">
                  <div className="text-[11px] text-emerald-800 font-semibold">Simulasi</div>
                  <div className="text-xl font-bold text-emerald-950 mt-0.5">
                    {(userProgress.examHistory || []).length} kali
                  </div>
                </div>
                <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/70">
                  <div className="text-[11px] text-emerald-800 font-semibold">Status</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1.5">
                    {overallAccuracy >= 96 ? 'Sasaran 96%+' : overallAccuracy >= 90 ? 'Mumtaz' : 'Sedang Meningkat'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 rounded-3xl p-6 border border-emerald-200/90 shadow-sm">
              <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-4">Penguasaan 6 Subjek</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(subjectBreakdown).map(([k, s]) => {
                  const pct = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;
                  return (
                    <div key={k} className="p-3.5 rounded-2xl border border-emerald-200/70 bg-emerald-50/40">
                      <div className="flex justify-between items-center text-xs font-semibold mb-1">
                        <span className="text-slate-800">{s.icon} {s.name}</span>
                        <span className="text-emerald-800 font-bold">{s.answered > 0 ? `${pct}%` : '0%'}</span>
                      </div>
                      <div className="w-full bg-emerald-200/80 h-2 rounded-full overflow-hidden my-1.5">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${pct}%` }}></div>
                      </div>
                      <div className="text-[10px] text-slate-500 flex justify-between">
                        <span>{s.answered} dijawab</span>
                        <span>{s.inBank} dalam bank</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 7. MANAGE CLOUD QUESTIONS */}
        {activeTab === 'manage' && (
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-white/95 rounded-3xl p-6 border border-emerald-200/90 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <h2 className="text-base font-bold text-emerald-950">Muat Naik Soalan Pukal (JSON)</h2>
                  <p className="text-xs text-slate-500">Tampal senarai soalan JSON atau muat naik fail `.json`. Sistem ada penapis anti-pendua.</p>
                </div>
                <button 
                  onClick={copyJsonTemplate}
                  className="bg-emerald-100/80 hover:bg-emerald-200 text-emerald-900 text-xs font-bold px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 border border-emerald-300">
                  <IconCopy className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Salin Contoh</span>
                </button>
              </div>

              <textarea 
                rows={6} 
                value={bulkJsonText} 
                onChange={(e) => setBulkJsonText(e.target.value)} 
                placeholder={`Tampal JSON di sini...`} 
                className="w-full p-3 font-mono text-xs bg-emerald-50/40 border border-emerald-300/80 rounded-2xl my-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-700"></textarea>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="cursor-pointer bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold px-3 py-2 rounded-xl border border-emerald-300 transition-all flex items-center gap-1.5">
                  <IconFolderPlus className="w-4 h-4 text-emerald-700" />
                  <span>Pilih Fail .json</span>
                  <input type="file" accept=".json" onChange={handleJsonFileUpload} className="hidden" />
                </label>

                <button 
                  onClick={handleBulkImportCloud} 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2 rounded-xl text-xs flex items-center gap-2 transition-all shadow-sm">
                  <IconDownload className="w-3.5 h-3.5" />
                  <span>Muat Naik & Tapis</span>
                </button>
              </div>
            </div>

            {/* Cloud Questions Counter List */}
            <div className="bg-white/95 rounded-3xl p-6 border border-emerald-200/90 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Soalan Tambahan Anda ({cloudQuestions.length})
                </h4>
                <span className="text-[11px] text-emerald-700">Tersimpan di pangkalan data awan</span>
              </div>

              {cloudQuestions.length === 0 ? (
                <p className="text-center py-6 text-xs text-slate-400">Belum ada soalan tambahan dimasukkan.</p>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {cloudQuestions.map((q) => (
                    <div key={q.id} className="p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-200 flex justify-between items-center gap-3 text-xs">
                      <div className="overflow-hidden flex-1">
                        <div className="font-serif text-sm text-slate-800 truncate" dir="rtl">{q.questionJawi}</div>
                        <div className="text-[11px] text-slate-400 truncate">{q.questionRumi}</div>
                      </div>
                      <button 
                        onClick={() => handleDeleteCloudQuestion(q.id)} 
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition-all">
                        <IconTrash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-[11px] text-emerald-800/80 font-medium">
        PSRA Mumtaz • Sukatan JAIS Tahun 5 & 6
      </footer>
    </div>
  );
}