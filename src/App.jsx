import React, { useState, useEffect } from 'react';
import { BookOpen, Star, Trophy, ArrowRight, RefreshCw, CheckCircle, XCircle, List, User, LogOut, FileText, Type, AlignLeft, Sparkles, Zap, Flame, Lock, Trash2, Database, BarChart3 } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, getDocs, deleteDoc } from 'firebase/firestore';

// =========================================================================
// 🔴 YOUR EXACT SINGAPORE FIREBASE KEYS ARE HARDCODED HERE 🔴
// =========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDyI4QmhspcMvWVSNDe5yOcybnwC6JiKbM",
  authDomain: "english-explorer-df0f5.firebaseapp.com",
  projectId: "english-explorer-df0f5",
  storageBucket: "english-explorer-df0f5.firebasestorage.app",
  messagingSenderId: "690488355910",
  appId: "1:690488355910:web:4ba5d58279d3683621ae47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "my-personal-app"; 

const GlobalStyles = React.memo(() => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap');
    
    body {
      font-family: 'Outfit', sans-serif;
      background-color: #020617 !important; /* Deep dark blue */
      background-image: 
        radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(217, 70, 239, 0.15) 0px, transparent 50%) !important;
      background-attachment: fixed;
      color: #ffffff; /* Brightened base color */
      margin: 0;
      padding: 0;
    }
    
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.5); border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(56, 189, 248, 0.8); }

    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); filter: blur(4px); } 
      to { opacity: 1; transform: translateY(0); filter: blur(0); } 
    }
    .animate-fade-in-up { animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

    @keyframes popIn {
      0% { transform: scale(0.9); opacity: 0; filter: blur(8px); }
      70% { transform: scale(1.02); opacity: 1; filter: blur(0); }
      100% { transform: scale(1); opacity: 1; }
    }
    .animate-pop-in { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
    
    @keyframes floatEmoji {
      0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
      50% { transform: translateY(-15px) scale(1.1) rotate(5deg); }
    }
    .animate-float-emoji { animation: floatEmoji 3s ease-in-out infinite; }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 15px rgba(56, 189, 248, 0.4), inset 0 0 10px rgba(56, 189, 248, 0.2); }
      50% { box-shadow: 0 0 30px rgba(56, 189, 248, 0.7), inset 0 0 20px rgba(56, 189, 248, 0.4); }
    }
    .streak-glow { animation: pulse-glow 2s infinite; border-color: #38bdf8 !important; }

    .glass-panel {
      background: rgba(15, 23, 42, 0.7); /* Slightly darker for better text contrast */
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(148, 163, 184, 0.2); /* Brighter border */
      box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
    }
  `}} />
));

const GlassCard = ({ children, className = "" }) => (
  <div className={`glass-panel rounded-3xl ${className}`}>
    {children}
  </div>
);

const LoginScreen = ({ onJoin, username, setUsername }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && username.trim()) {
      onJoin();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 w-full max-w-md mx-auto animate-fade-in-up">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-[70px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <GlassCard className="p-8 md:p-12 w-full text-center relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
        
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 rounded-full"></div>
            <div className="bg-slate-900/80 p-5 rounded-3xl border border-blue-500/30 relative z-10">
              <Zap size={48} className="text-cyan-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-2 tracking-tight">
          NEXUS ACADEMY
        </h1>
        <p className="text-slate-300 mb-8 font-bold uppercase tracking-widest text-xs">Advanced English Protocol</p>
        
        <input 
          type="text" 
          placeholder="ENTER CALLSIGN" 
          value={username}
          onChange={(e) => setUsername(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          className="w-full text-center text-xl font-bold tracking-wider p-4 mb-6 bg-slate-800 border-2 border-slate-500 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
        />
        
        <button 
          onClick={onJoin}
          disabled={!username.trim()}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] disabled:shadow-none group"
        >
          <span className="tracking-widest uppercase">Initialize</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </GlassCard>
    </div>
  );
};

export default function App() {
  const [gameState, setGameState] = useState('login'); 
  const [username, setUsername] = useState('');
  
  const [difficultyLevel, setDifficultyLevel] = useState('Mixed');
  
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0); 
  const [maxCombo, setMaxCombo] = useState(0);
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const [askedQuestionIds, setAskedQuestionIds] = useState([]);
  const [menuError, setMenuError] = useState('');

  const [authUser, setAuthUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [allScores, setAllScores] = useState([]);
  const [viewingProfile, setViewingProfile] = useState(null);

  const [customQuestions, setCustomQuestions] = useState([]);
  const [pinInput, setPinInput] = useState('');
  const [creatorMsg, setCreatorMsg] = useState({ text: '', type: '' });
  const [isUploading, setIsUploading] = useState(false);
  const [jsonPayload, setJsonPayload] = useState('');

  useEffect(() => {
    const connectToDatabase = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Database connection error:", error);
      }
    };
    connectToDatabase();
    const unsubscribe = onAuthStateChanged(auth, (user) => setAuthUser(user));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!authUser) return;
    const scoresRef = collection(db, 'artifacts', appId, 'public', 'data', 'scores');
    const unsubscribeScores = onSnapshot(scoresRef, (snapshot) => {
      const scoresData = snapshot.docs.map(doc => doc.data());
      setAllScores(scoresData);
      const sortedScores = [...scoresData].sort((a, b) => b.score - a.score).slice(0, 15);
      setLeaderboard(sortedScores);
    }, (error) => console.error("Error fetching scores:", error));

    const questionsRef = collection(db, 'artifacts', appId, 'public', 'data', 'custom_questions');
    const unsubscribeQuestions = onSnapshot(questionsRef, (snapshot) => {
      const qData = snapshot.docs.map(doc => doc.data());
      setCustomQuestions(qData);
    }, (error) => console.error("Error fetching custom questions:", error));

    return () => {
      unsubscribeScores();
      unsubscribeQuestions();
    };
  }, [authUser]);

  const saveScore = async (finalScore, selectedCategory, highestCombo) => {
    if (!authUser || !username) return;
    try {
      const scoresRef = collection(db, 'artifacts', appId, 'public', 'data', 'scores');
      await addDoc(scoresRef, {
        username: username,
        score: finalScore,
        totalQuestions: currentQuestions.length, 
        difficulty: difficultyLevel,
        category: selectedCategory, 
        maxCombo: highestCombo,
        timestamp: Date.now()
      });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const startGame = (category) => {
    setMenuError(''); 

    let rawPool = [...customQuestions];
    let combinedPool = [];
    let seenTexts = new Set();
    for (let q of rawPool) {
      if (!q || !q.question) continue;
      let textKey = q.question.trim().toLowerCase();
      if (!seenTexts.has(textKey)) {
        seenTexts.add(textKey);
        combinedPool.push(q);
      }
    }

    let filteredQuestions = combinedPool;
    if (category !== 'all') filteredQuestions = filteredQuestions.filter(q => q.category === category);
    if (difficultyLevel !== 'Mixed') filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficultyLevel);
    
    if (filteredQuestions.length === 0) {
      setMenuError(`Insufficient modules located for ${difficultyLevel} protocol in this sector.`);
      return;
    }

    let availableQuestions = filteredQuestions.filter(q => !askedQuestionIds.includes(q.id));
    if (availableQuestions.length < 20) {
      availableQuestions = filteredQuestions; 
      const categoryIds = filteredQuestions.map(q => q.id);
      setAskedQuestionIds(prev => prev.filter(id => !categoryIds.includes(id)));
    }
    
    const shuffledPool = shuffleArray(availableQuestions);
    const finalQuestions = shuffledPool.slice(0, 20); 
    
    setCurrentQuestions(finalQuestions);
    setCurrentQIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setGameState('playing');
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer !== null) return;
    const currentQuestion = currentQuestions[currentQIndex];
    const correct = option === currentQuestion.answer;
    
    setSelectedAnswer(option);
    setIsCorrect(correct);
    setShowExplanation(true); 

    if (correct) {
      setScore(prev => prev + 1);
      setCombo(prev => {
        const newCombo = prev + 1;
        if (newCombo > maxCombo) setMaxCombo(newCombo);
        return newCombo;
      });
    } else {
      setCombo(0); 
    }
    setAskedQuestionIds(prev => [...prev, currentQuestion.id]);
  };

  const nextQuestion = () => {
    if (currentQIndex + 1 < currentQuestions.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      const cat = currentQuestions.length > 0 && currentQuestions.every(q => q.category === currentQuestions[0].category) 
                  ? currentQuestions[0].category 
                  : 'all';
      saveScore(score, cat, maxCombo); 
      setGameState('finished');
    }
  };

  const handleCleanDuplicates = async () => {
    if (!authUser) return;
    setIsUploading(true);
    setCreatorMsg({ text: 'Executing Duplicate Purge Protocol...', type: 'success' });
    
    try {
      const collectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'custom_questions');
      const snapshot = await getDocs(collectionRef);
      const seen = new Set();
      let deleteCount = 0;
      const deletePromises = [];
      
      snapshot.forEach(docSnap => {
        const qData = docSnap.data();
        const uniqueKey = qData.question ? qData.question.trim().toLowerCase() : docSnap.id;
        if (seen.has(uniqueKey)) {
          deletePromises.push(deleteDoc(docSnap.ref));
          deleteCount++;
        } else {
          seen.add(uniqueKey);
        }
      });
      await Promise.all(deletePromises);
      setCreatorMsg({ text: `Protocol Complete. Eradicated ${deleteCount} redundant nodes.`, type: 'success' });
    } catch (error) {
      setCreatorMsg({ text: `System Failure: ${error.message}`, type: 'error' });
    }
    setIsUploading(false);
    setTimeout(() => { setCreatorMsg({text: '', type: ''}); }, 5000);
  };

  const handleBulkUpload = async () => {
    if (!authUser) return;
    if (!jsonPayload.trim()) {
      setCreatorMsg({ text: 'ERROR: Text area is empty. Paste JSON array first.', type: 'error' });
      return;
    }
    
    setIsUploading(true);
    setCreatorMsg({ text: 'Parsing JSON payload...', type: 'success' });
    
    try {
      const parsedData = JSON.parse(jsonPayload);
      const questionsToAdd = Array.isArray(parsedData) ? parsedData : [parsedData];
      
      const collectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'custom_questions');
      const snapshot = await getDocs(collectionRef);
      const existingQuestions = new Set();
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        if (data.question) existingQuestions.add(data.question.trim().toLowerCase());
      });

      let successCount = 0;
      let skippedCount = 0;
      const total = questionsToAdd.length;

      for (let i = 0; i < total; i++) {
        const q = questionsToAdd[i];
        if (!q.question) continue;
        const qText = q.question.trim().toLowerCase();
        
        if (existingQuestions.has(qText)) {
            skippedCount++;
        } else {
            await addDoc(collectionRef, {
                ...q,
                id: `bulk_${Date.now()}_${i}`,
                timestamp: Date.now()
            });
            successCount++;
            existingQuestions.add(qText);
        }
      }

      setCreatorMsg({ text: `Protocol Complete! Added ${successCount} new nodes. (Skipped ${skippedCount} duplicates)`, type: 'success' });
      setJsonPayload(''); 
    } catch (error) {
      console.error("Upload failed:", error);
      setCreatorMsg({ text: `System Failure: Invalid JSON format. ${error.message}`, type: 'error' });
    }
    
    setIsUploading(false);
    setTimeout(() => { setCreatorMsg({text: '', type: ''}); }, 5000);
  };

  const calculateStats = () => {
    let uniquePool = [];
    let seenTexts = new Set();
    for (let q of customQuestions) {
      if (!q || !q.question) continue;
      let textKey = q.question.trim().toLowerCase();
      if (!seenTexts.has(textKey)) {
        seenTexts.add(textKey);
        uniquePool.push(q);
      }
    }

    const stats = {
      grammar: { name: "Grammar", count: 0 },
      idioms: { name: "Idioms", count: 0 },
      phrasal_verbs: { name: "Phrasal Verbs", count: 0 },
      proverbs: { name: "Proverbs", count: 0 },
      cloze: { name: "Cloze Passages", count: 0 },
      missing_sentences: { name: "Cohesion", count: 0 },
      connectors: { name: "Connectors", count: 0 },
      collocations: { name: "Collocations", count: 0 },
      vocabulary: { name: "Vocabulary", count: 0 },
      adjectives: { name: "Adjectives", count: 0 },
      other: { name: "Other", count: 0 }
    };

    uniquePool.forEach(q => {
      if (stats[q.category]) {
        stats[q.category].count++;
      } else {
        stats.other.count++;
      }
    });

    return { total: uniquePool.length, breakdown: stats };
  };

  const renderCreatorPin = () => (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 w-full max-w-md mx-auto animate-fade-in-up">
      <GlassCard className="p-8 w-full text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
        <div className="flex justify-center mb-6">
          <div className="bg-slate-900 p-5 rounded-2xl border border-red-500/30">
            <Lock size={48} className="text-red-400" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-white mb-2 tracking-widest uppercase">Admin Terminal</h2>
        <p className="text-slate-300 mb-6 text-sm">Input override code to access core database arrays.</p>
        
        <input 
          type="password" 
          placeholder="• • • • • •" 
          value={pinInput}
          onChange={(e) => setPinInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (pinInput === 'parent123') { setGameState('creator_dashboard'); setPinInput(''); setCreatorMsg({text:'', type:''}); }
              else { setCreatorMsg({ text: 'ACCESS DENIED', type: 'error' }); setPinInput(''); }
            }
          }}
          className="w-full text-center text-3xl font-black tracking-[0.5em] p-4 mb-4 bg-slate-900 border-2 border-slate-600 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-all"
        />
        
        {creatorMsg.text && (
          <p className="text-red-400 font-bold mb-4 animate-fade-in-up uppercase tracking-wider">{creatorMsg.text}</p>
        )}
        
        <div className="flex space-x-3">
          <button 
            onClick={() => { setGameState('menu'); setPinInput(''); setCreatorMsg({text:'', type:''}); }}
            className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold py-4 px-4 rounded-2xl transition-all"
          >
            ABORT
          </button>
          <button 
            onClick={() => {
              if (pinInput === 'parent123') { setGameState('creator_dashboard'); setPinInput(''); setCreatorMsg({text:'', type:''}); }
              else { setCreatorMsg({ text: 'ACCESS DENIED', type: 'error' }); setPinInput(''); }
            }}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-black py-4 px-4 rounded-2xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] tracking-widest"
          >
            UNLOCK
          </button>
        </div>
      </GlassCard>
    </div>
  );

  const renderCreatorDashboard = () => {
    const stats = calculateStats();

    return (
      <div className="flex flex-col items-center max-w-5xl mx-auto p-4 w-full pt-10 animate-fade-in-up">
        <GlassCard className="p-6 md:p-8 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-cyan-500/30">
                <Database size={28} className="text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">Mainframe Database</h2>
                <p className="text-slate-300 font-medium text-sm">System Diagnostics & Injector Tool</p>
              </div>
            </div>
            <button onClick={() => setGameState('menu')} className="text-white hover:text-cyan-300 transition-colors flex items-center space-x-2 bg-slate-800 px-5 py-3 rounded-xl border border-slate-600 hover:border-cyan-400 font-bold text-sm">
              <LogOut size={16} /> <span>Terminate Session</span>
            </button>
          </div>

          <div className="mb-10">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 p-8 rounded-3xl mb-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
                <p className="text-sm font-black text-cyan-400 uppercase tracking-[0.3em] mb-2 relative z-10">Total Active Nodes</p>
                <p className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] relative z-10">{stats.total}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {Object.entries(stats.breakdown).map(([key, data]) => {
                  if (data.count === 0 && key === 'other') return null;
                  return (
                    <div key={key} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-600 flex flex-col items-center justify-center text-center hover:bg-slate-700 transition-colors">
                        <p className={`text-3xl font-black mb-1 ${key==='other' ? 'text-rose-400' : 'text-purple-400'}`}>{data.count}</p>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest">{data.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-600">
            <h3 className="text-xl font-black text-white mb-3 flex items-center space-x-2">
              <Zap className="text-yellow-400" size={24} />
              <span className="tracking-wide">AI JSON Bulk Injector</span>
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Paste an array of JSON questions generated by the AI here. The system will automatically parse them, skip duplicates, and upload the rest to the cloud database.
            </p>
            
            <textarea 
              className="w-full h-48 bg-slate-900 border border-slate-600 rounded-2xl p-4 text-emerald-400 font-mono text-sm mb-6 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 custom-scrollbar"
              placeholder="Paste JSON array here... e.g. [ { 'category': 'grammar', 'difficulty': 'Easy', ... } ]"
              value={jsonPayload}
              onChange={(e) => setJsonPayload(e.target.value)}
            ></textarea>

            {creatorMsg.text && (
              <div className={`p-5 mb-8 rounded-2xl font-bold tracking-wide border ${creatorMsg.type === 'success' ? 'bg-emerald-900/50 border-emerald-400 text-emerald-300' : 'bg-rose-900/50 border-rose-400 text-rose-300'}`}>
                {creatorMsg.text}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-5">
              {/* SOLID RED BUTTON */}
              <button 
                onClick={handleCleanDuplicates}
                disabled={isUploading}
                className={`flex-1 flex items-center justify-center space-x-3 py-5 px-6 rounded-2xl transition-all border-2 ${isUploading ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.8)]'}`}
              >
                <Trash2 size={24} />
                <span className="font-black tracking-wider uppercase">Scan & Clean Database</span>
              </button>

              {/* SOLID YELLOW BUTTON */}
              <button 
                onClick={handleBulkUpload}
                disabled={isUploading}
                className={`flex-2 sm:w-2/3 flex items-center justify-center space-x-3 py-5 px-6 rounded-2xl transition-all border-2 ${isUploading ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-300 border-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.8)]'}`}
              >
                <Database size={24} />
                <span className="font-black tracking-widest uppercase">Inject JSON Batch</span>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderLeaderboard = () => (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-4 w-full pt-10 animate-fade-in-up">
      <GlassCard className="p-6 md:p-10 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="bg-indigo-500/30 p-4 rounded-2xl border border-indigo-400/50">
            <Trophy size={32} className="text-indigo-300" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase">Hall of Fame</h2>
        </div>

        <p className="text-center text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8 animate-pulse">
          Click on any candidate to view their full analytics
        </p>
        
        <div className="space-y-4 mb-10 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
          {leaderboard.length === 0 ? (
            <div className="text-center py-10 bg-slate-900/50 rounded-2xl border border-slate-600">
              <p className="text-slate-300 font-medium">Network empty. Awaiting first simulation results.</p>
            </div>
          ) : (
            leaderboard.map((entry, idx) => {
              return (
                <div 
                  key={idx} 
                  onClick={() => { setViewingProfile(entry.username); setGameState('profile'); }}
                  className="group flex justify-between items-center p-5 rounded-2xl border border-slate-600 bg-slate-800/80 cursor-pointer hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <div className="flex items-center space-x-5">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-black text-lg border ${idx === 0 ? 'bg-yellow-500/30 border-yellow-400 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)]' : idx === 1 ? 'bg-slate-300/30 border-slate-300 text-white' : idx === 2 ? 'bg-amber-600/40 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-600 text-slate-300'}`}>
                      {idx + 1}
                    </div>
                    <span className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">{entry.username}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-black text-2xl text-cyan-400 flex items-baseline space-x-1 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <span>{entry.score}</span>
                      <span className="text-sm text-slate-400 font-medium">/{entry.totalQuestions}</span>
                    </div>
                    {entry.maxCombo > 2 && (
                      <div className="flex items-center space-x-1 text-orange-400 text-xs font-bold mt-1">
                        <Flame size={12} /> <span>{entry.maxCombo}x Streak</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <button 
          onClick={() => setGameState('menu')}
          className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-bold py-5 px-8 rounded-2xl transition-all hover:border-cyan-400"
        >
          <ArrowRight size={20} className="rotate-180" />
          <span className="uppercase tracking-widest text-sm">Return to Nexus</span>
        </button>
      </GlassCard>
    </div>
  );

  const renderProfile = () => {
    const userScores = allScores.filter(score => score.username === viewingProfile);
    const totalTests = userScores.length;
    let totalPoints = 0;
    let totalQuestionsAttempted = 0;
    
    const categoryStats = {};
    
    userScores.forEach(test => { 
      totalPoints += test.score; 
      totalQuestionsAttempted += test.totalQuestions; 
      
      const cat = test.category;
      if (cat !== 'all') {
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].correct += test.score;
        categoryStats[cat].total += test.totalQuestions;
      }
    });

    const averagePercentage = totalQuestionsAttempted === 0 ? 0 : Math.round((totalPoints / totalQuestionsAttempted) * 100);
    const recentTests = [...userScores].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);

    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto p-4 w-full pt-10 animate-fade-in-up">
        <GlassCard className="p-6 md:p-10 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-600 pb-6 gap-6">
            <div className="flex items-center space-x-5">
              <div className="bg-slate-900 p-5 rounded-3xl border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <BarChart3 size={40} className="text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">{viewingProfile}</h2>
                <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mt-1">Detailed Analytics & Mastery</p>
              </div>
            </div>
            
            <button 
              onClick={() => setGameState('menu')}
              className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl border border-slate-500 transition-all text-sm uppercase tracking-widest hover:border-cyan-400"
            >
              <ArrowRight size={16} className="rotate-180" />
              <span>Back</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-600 text-center">
              <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mb-2">Simulations Run</p>
              <p className="text-4xl font-black text-white">{totalTests}</p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-600 text-center relative overflow-hidden">
              <div className={`absolute bottom-0 left-0 h-1 w-full ${averagePercentage >= 80 ? 'bg-emerald-400' : averagePercentage >= 50 ? 'bg-yellow-400' : 'bg-rose-400'}`}></div>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mb-2">Overall Accuracy</p>
              <p className={`text-4xl font-black ${averagePercentage >= 80 ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]' : averagePercentage >= 50 ? 'text-yellow-400' : 'text-rose-400'}`}>{averagePercentage}%</p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-600 text-center col-span-2 md:col-span-1">
              <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mb-2">Total Correct Nodes</p>
              <p className="text-4xl font-black text-purple-400">{totalPoints}</p>
            </div>
          </div>

          <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest pl-2">Module Mastery Breakdown</h3>
          
          <div className="bg-slate-900/50 rounded-3xl border border-slate-600 p-6 mb-10">
            {Object.keys(categoryStats).length === 0 ? (
                <p className="text-center text-slate-400 italic py-4">No specific category data available yet. Complete focused modules to see breakdown.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {Object.entries(categoryStats)
                        .sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total)) 
                        .map(([cat, data]) => {
                        const percentage = Math.round((data.correct / data.total) * 100);
                        let barColor = "bg-rose-500";
                        let textColor = "text-rose-400";
                        if (percentage >= 80) { barColor = "bg-emerald-500"; textColor = "text-emerald-400"; }
                        else if (percentage >= 50) { barColor = "bg-yellow-400"; textColor = "text-yellow-400"; }
                        
                        return (
                            <div key={cat} className="w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-white capitalize text-sm tracking-wide">{cat.replace('_', ' ')}</span>
                                    <div className="text-right">
                                        <span className={`font-black text-lg ${textColor}`}>{percentage}%</span>
                                        <span className="text-xs text-slate-400 ml-2 font-medium">({data.correct}/{data.total})</span>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-600">
                                    <div className={`h-full ${barColor} rounded-full`} style={{ width: `${percentage}%` }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
          </div>

          <h3 className="text-sm font-black text-white mb-4 uppercase tracking-widest pl-2">Recent Logs</h3>
          <div className="space-y-3">
            {recentTests.length === 0 ? (
              <div className="text-center py-8 bg-slate-900/50 rounded-2xl border border-slate-600">
                <p className="text-slate-400 font-medium">No log data found for this candidate.</p>
              </div>
            ) : (
              recentTests.map((test, idx) => {
                const date = new Date(test.timestamp).toLocaleDateString();
                return (
                  <div key={idx} className="flex justify-between items-center bg-slate-800/80 p-5 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors hover:border-cyan-400">
                    <div>
                      <p className="font-bold text-white capitalize text-lg mb-1">{test.category === 'all' ? 'System Simulation' : test.category.replace('_', ' ')}</p>
                      <div className="flex items-center space-x-3 text-xs font-bold">
                        <span className="text-slate-400">{date}</span>
                        <span className={`px-2 py-1 rounded-md uppercase tracking-wider ${test.difficulty === 'Expert' ? 'bg-rose-500/30 text-rose-300' : test.difficulty === 'Hard' ? 'bg-orange-500/30 text-orange-300' : test.difficulty === 'Medium' ? 'bg-yellow-500/30 text-yellow-300' : 'bg-emerald-500/30 text-emerald-300'}`}>{test.difficulty}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-2xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        {test.score} <span className="text-base text-slate-400">/{test.totalQuestions}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderMenu = () => (
    <div className="flex flex-col items-center text-center max-w-6xl mx-auto p-4 md:p-6 w-full pt-8 animate-fade-in-up">
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        
        {/* USER BADGE & SWITCH USER BUTTON */}
        <GlassCard className="p-2 flex justify-between items-center w-full md:w-auto md:min-w-[300px] border-cyan-400/50">
          <div className="text-left p-2 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center border border-cyan-400">
                <User size={20} className="text-cyan-300" />
            </div>
            <div>
                <p className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">Active Link</p>
                <p className="text-lg font-black text-white truncate max-w-[150px]">{username}</p>
            </div>
          </div>
          <div className="flex gap-2 pr-2">
            <button 
              onClick={() => { setUsername(''); setGameState('login'); }}
              className="flex justify-center items-center p-3 bg-rose-600/30 hover:bg-rose-500 border border-rose-500 text-white rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
              title="Switch User / Disconnect"
            >
              <LogOut size={18} />
            </button>
          </div>
        </GlassCard>

        {/* MAIN NAVIGATION BUTTONS */}
        <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={() => { setViewingProfile(username); setGameState('profile'); }}
              className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              <BarChart3 size={18} />
              <span className="uppercase tracking-widest text-xs">My Analytics</span>
            </button>
            <button 
              onClick={() => setGameState('leaderboard')}
              className="flex justify-center items-center p-3 bg-slate-800 hover:bg-blue-600 border border-slate-500 text-white rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              title="Global Rankings"
            >
              <Trophy size={18} />
            </button>
            <button 
              onClick={() => setGameState('creator_pin')}
              className="flex justify-center items-center p-3 bg-slate-800 hover:bg-rose-600 border border-slate-500 text-white rounded-xl transition-all duration-300"
              title="Admin Terminal"
            >
              <Database size={18} />
            </button>
        </div>
      </div>

      <div className="w-full mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 mb-4 tracking-tighter drop-shadow-lg">
          SELECT PROTOCOL
        </h1>
        <p className="text-slate-200 mb-10 font-bold text-lg max-w-2xl mx-auto">
          Establish neural link with a learning module. Adjust simulation parameters below.
        </p>

        <div className="mb-12">
          <div className="inline-flex bg-slate-900/90 p-2 rounded-2xl border border-slate-600 backdrop-blur-xl flex-wrap justify-center gap-2 shadow-xl">
            {['Mixed', 'Easy', 'Medium', 'Hard', 'Expert'].map(level => {
              const isActive = difficultyLevel === level;
              return (
                <button
                  key={level}
                  onClick={() => setDifficultyLevel(level)}
                  className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.7)] border-none'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white border border-transparent'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {menuError && (
          <div className="mb-8 p-4 bg-rose-900/50 border border-rose-400 rounded-2xl text-rose-200 text-sm font-bold max-w-2xl mx-auto shadow-[0_0_15px_rgba(244,63,94,0.4)]">
            {menuError}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[
            { id: 'grammar', name: 'Grammar Core', icon: BookOpen, color: 'blue' },
            { id: 'connectors', name: 'Logic Gates', icon: List, color: 'indigo' },
            { id: 'cloze', name: 'Data Restoration', icon: FileText, color: 'cyan' },
            { id: 'missing_sentences', name: 'Cohesion Matrix', icon: AlignLeft, color: 'emerald' },
            { id: 'idioms', name: 'Idiom Patterns', icon: Star, color: 'purple' },
            { id: 'collocations', name: 'Collocation Sets', icon: CheckCircle, color: 'amber' },
            { id: 'phrasal_verbs', name: 'Phrasal Vectors', icon: ArrowRight, color: 'teal' },
            { id: 'proverbs', name: 'Proverb Archives', icon: BookOpen, color: 'rose' },
            { id: 'vocabulary', name: 'Lexicon Array', icon: Type, color: 'pink' },
            { id: 'adjectives', name: 'Adjective Modifiers', icon: Sparkles, color: 'sky' }
          ].map(mod => {
            const Icon = mod.icon;
            return (
              <button 
                key={mod.id}
                onClick={() => startGame(mod.id)} 
                className={`group relative flex flex-col items-start justify-between p-6 bg-slate-800/90 hover:bg-slate-700 border border-slate-500 hover:border-${mod.color}-400 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] text-left overflow-hidden h-40`}
              >
                <div className={`absolute -right-6 -top-6 w-24 h-24 bg-${mod.color}-500/20 rounded-full blur-2xl group-hover:bg-${mod.color}-500/40 transition-all`}></div>
                <div className={`p-3 bg-slate-900 rounded-2xl text-${mod.color}-400 border border-slate-600 group-hover:border-${mod.color}-400 group-hover:shadow-[0_0_15px_currentColor] transition-all z-10`}>
                  <Icon size={24} />
                </div>
                <div className="z-10 mt-auto">
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mb-1 drop-shadow-md">Module {mod.id.substring(0,3)}</p>
                    <span className="text-lg font-black text-white tracking-wide drop-shadow-md">{mod.name}</span>
                </div>
              </button>
            )
          })}

          <button 
            onClick={() => startGame('all')} 
            className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-3xl transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_rgba(236,72,153,0.5)] sm:col-span-2 lg:col-span-3 xl:col-span-2 overflow-hidden h-40 border border-pink-300/50"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center">
                <Flame size={36} className="text-yellow-300 mb-3 drop-shadow-[0_0_15px_rgba(253,224,71,0.9)]" />
                <span className="text-xl font-black text-white tracking-widest uppercase drop-shadow-lg">Full Simulation</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderGame = () => {
    const question = currentQuestions[currentQIndex];
    if (!question) return <div className="min-h-screen flex items-center justify-center text-cyan-400 font-bold text-xl animate-pulse tracking-widest uppercase">Loading Simulation...</div>;

    const progressPercent = ((currentQIndex) / currentQuestions.length) * 100;
    
    return (
      <div className="max-w-4xl mx-auto p-4 w-full pt-6 sm:pt-10 animate-fade-in-up">
        
        <div className="flex justify-between items-end mb-8">
          <button 
            onClick={() => setGameState('menu')}
            className="flex items-center justify-center p-4 bg-slate-800 hover:bg-rose-800 border border-slate-500 hover:border-rose-400 text-white rounded-2xl transition-all shadow-lg"
            title="Abort Simulation"
          >
            <LogOut size={20} />
          </button>

          <div className="flex flex-col items-end space-y-2">
            {combo >= 3 && (
                <div className="animate-pop-in flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.8)] border border-orange-300">
                    <Flame size={16} className="text-white animate-pulse" />
                    <span className="text-white font-black text-sm italic tracking-wider">{combo}x STREAK</span>
                </div>
            )}
            <div className="flex space-x-3">
              <div className="px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border bg-slate-800 border-slate-500 text-white shadow-lg">
                {question.difficulty}
              </div>
              <div className="px-5 py-3 rounded-2xl bg-cyan-900 border border-cyan-400 text-cyan-200 font-black text-sm tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                SCORE <span className="text-white ml-2">{score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-800 h-3 rounded-full mb-10 overflow-hidden border border-slate-500 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(34,211,238,0.9)]"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <GlassCard className={`p-8 md:p-12 mb-6 border-t-4 transition-all duration-300 relative ${combo >= 3 ? 'streak-glow' : 'border-t-cyan-400'}`}>
          <div className="absolute top-0 right-8 w-24 h-24 bg-cyan-500/20 blur-3xl rounded-full"></div>
          
          <p className="text-[11px] font-black tracking-[0.3em] text-cyan-300 mb-6 uppercase drop-shadow-md">Node {currentQIndex + 1} // {currentQuestions.length}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-relaxed drop-shadow-lg">
            {question.question.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option, idx) => {
              // BRIGHTENED OPTION BUTTON STYLES FOR EXCELLENT CONTRAST
              let buttonStyle = "bg-slate-800 text-white font-medium hover:bg-slate-700 hover:border-cyan-400 border border-slate-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]";
              
              if (selectedAnswer !== null) {
                if (option === question.answer) {
                  buttonStyle = "bg-emerald-800/90 border-emerald-400 text-emerald-100 font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)]";
                } else if (option === selectedAnswer && !isCorrect) {
                  buttonStyle = "bg-rose-800/90 border-rose-400 text-rose-100 font-bold shadow-[0_0_25px_rgba(244,63,94,0.5)]";
                } else {
                  // After an answer is picked, non-selected answers are dimmed to focus on the correct one
                  buttonStyle = "bg-slate-900/60 text-slate-400 border-slate-700 opacity-60 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full py-5 px-6 rounded-2xl text-left text-lg md:text-xl transition-all duration-300 touch-manipulation select-none active:scale-[0.98] ${buttonStyle}`}
                >
                  <span className="inline-block font-black opacity-80 mr-4 text-cyan-300 tracking-widest drop-shadow-sm">{['01', '02', '03', '04'][idx]}</span>
                  {option}
                </button>
              );
            })}
          </div>
        </GlassCard>

        {showExplanation && (
          <div className={`p-8 rounded-3xl mb-8 border animate-fade-in-up backdrop-blur-xl shadow-2xl ${isCorrect ? 'bg-emerald-900/40 border-emerald-400' : 'bg-rose-900/40 border-rose-400'}`}>
            <div className="flex items-start space-x-5">
              <div className="mt-1">
                {isCorrect ? <CheckCircle className="text-emerald-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" size={32} /> : <XCircle className="text-rose-300 drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]" size={32} />}
              </div>
              <div>
                <h3 className={`text-xl font-black mb-3 uppercase tracking-wider drop-shadow-md ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {isCorrect ? "Protocol Verified" : `Error. Correct parameter: ${question.answer}`}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed font-semibold">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedAnswer !== null && (
          <div className="flex justify-end pb-12">
            <button
              onClick={nextQuestion}
              className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:shadow-[0_0_35px_rgba(14,165,233,0.8)] active:scale-95 group uppercase tracking-widest text-sm border border-cyan-300"
            >
              <span>{currentQIndex + 1 === currentQuestions.length ? 'Finalize Data' : 'Next Node'}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderResults = () => {
    let message = "";
    let subMessage = "";
    let emoji = "";

    if (score >= 18) { 
      message = "SYSTEM OVERRIDE SUCCESSFUL"; 
      subMessage = "Flawless execution. You have demonstrated absolute linguistic mastery.";
      emoji = "👑";
    }
    else if (score >= 15) { 
      message = "HIGH PROFICIENCY DETECTED"; 
      subMessage = "Excellent processing power. Only a few minor anomalies detected.";
      emoji = "🚀";
    }
    else if (score >= 10) {
      message = "ACCEPTABLE PARAMETERS";
      subMessage = "Standard performance achieved. Further calibration recommended.";
      emoji = "⚡";
    }
    else { 
      message = "SIMULATION FAILED"; 
      subMessage = "Critical errors detected. Return to core modules for recalibration.";
      emoji = "⚠️";
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 w-full max-w-2xl mx-auto relative">
        <GlassCard className="p-10 md:p-14 text-center w-full animate-pop-in relative z-10 border-t-4 border-t-cyan-400">
          <h2 className="text-sm font-black text-cyan-400 mb-6 uppercase tracking-[0.3em] drop-shadow-md">Simulation Concluded</h2>
          
          <div className="py-10">
            <p className="text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              {score} <span className="text-5xl text-slate-400 font-medium">/ {currentQuestions.length}</span>
            </p>
          </div>
          
          <div className="mb-12 bg-slate-900/80 p-8 rounded-3xl border border-slate-600 shadow-xl">
            <div className="text-6xl mb-6 animate-float-emoji inline-block drop-shadow-2xl">{emoji}</div>
            <p className={`text-2xl font-black mb-3 tracking-wider drop-shadow-md ${score >= 15 ? 'text-emerald-400' : score >= 10 ? 'text-yellow-400' : 'text-rose-400'}`}>
              {message}
            </p>
            <p className="text-slate-300 font-semibold text-lg leading-relaxed max-w-md mx-auto">
              {subMessage}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => { setViewingProfile(username); setGameState('profile'); }}
              className="flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-bold py-5 px-6 rounded-2xl transition-all uppercase tracking-widest text-xs hover:border-cyan-400"
            >
              <BarChart3 size={18} />
              <span>View Analytics</span>
            </button>
            
            <button
              onClick={() => setGameState('menu')}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-300 text-white font-black py-5 px-6 rounded-2xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.5)] uppercase tracking-widest text-xs"
            >
              <RefreshCw size={18} />
              <span>New Simulation</span>
            </button>
          </div>
        </GlassCard>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans text-slate-50 pb-10 selection:bg-cyan-500/40 selection:text-white">
      <GlobalStyles />
      {gameState === 'login' && <LoginScreen onJoin={() => setGameState('menu')} username={username} setUsername={setUsername} />}
      {gameState === 'menu' && renderMenu()}
      {gameState === 'playing' && renderGame()}
      {gameState === 'finished' && renderResults()}
      {gameState === 'leaderboard' && renderLeaderboard()}
      {gameState === 'profile' && renderProfile()}
      {gameState === 'creator_pin' && renderCreatorPin()}
      {gameState === 'creator_dashboard' && renderCreatorDashboard()}
    </div>
  );
}
