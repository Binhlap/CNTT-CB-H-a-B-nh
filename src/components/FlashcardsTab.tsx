import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Layers,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  XCircle,
  Shuffle,
  RotateCcw,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  Keyboard,
  Calculator,
  AlertTriangle,
  Lightbulb,
  Check,
  Grid,
  Eye,
  Zap,
  Volume2,
} from 'lucide-react';
import { Question, QUESTIONS } from '../data/questions';
import { MODULES_INFO, SHORTCUTS_DATA, FORMULAS_DATA, CONFUSING_PAIRS } from '../data/studyData';
import { soundEngine } from '../utils/audio';
import { QuestionDiagram } from './QuestionDiagram';

export interface Flashcard {
  id: string;
  sourceType: 'question' | 'confuse' | 'shortcut' | 'formula';
  moduleNumber: number;
  moduleCode: string;
  moduleName: string;
  badge: string;
  frontPrompt: string;
  options?: string[];
  correctIndex?: number;
  diagramType?: 'printer' | 'harddrive' | 'optical';
  backAnswer: string;
  backExplanation: string;
  keyTakeaway?: string;
  tags?: string[];
}

interface FlashcardsTabProps {
  onStartQuizWithModule?: (moduleNumber: number) => void;
}

export const FlashcardsTab: React.FC<FlashcardsTabProps> = ({ onStartQuizWithModule }) => {
  // Filters & State
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<
    'all' | 'questions' | 'confuse' | 'shortcuts' | 'formulas' | 'starred' | 'needs_review'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'grid'>('card');

  // Persistence for user progress
  const [starredIds, setStarredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cntt_flashcard_starred');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cntt_flashcard_mastered');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [needsReviewIds, setNeedsReviewIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cntt_flashcard_review');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to localStorage
  const toggleStar = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundEngine.playClick();
    setStarredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      localStorage.setItem('cntt_flashcard_starred', JSON.stringify(next));
      return next;
    });
  }, []);

  const markMastered = useCallback((id: string) => {
    soundEngine.playCorrect();
    setMasteredIds((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      localStorage.setItem('cntt_flashcard_mastered', JSON.stringify(next));
      return next;
    });
    setNeedsReviewIds((prev) => {
      const next = prev.filter((i) => i !== id);
      localStorage.setItem('cntt_flashcard_review', JSON.stringify(next));
      return next;
    });
  }, []);

  const markNeedsReview = useCallback((id: string) => {
    soundEngine.playWrong();
    setNeedsReviewIds((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      localStorage.setItem('cntt_flashcard_review', JSON.stringify(next));
      return next;
    });
    setMasteredIds((prev) => {
      const next = prev.filter((i) => i !== id);
      localStorage.setItem('cntt_flashcard_mastered', JSON.stringify(next));
      return next;
    });
  }, []);

  // 1. Build Comprehensive Flashcard List
  const allCards: Flashcard[] = useMemo(() => {
    const list: Flashcard[] = [];

    // A. 300 Standard Exam Questions
    QUESTIONS.forEach((q) => {
      const mod = MODULES_INFO.find((m) => m.id === q.moduleNumber);
      const modCode = mod ? mod.code : `IU0${q.moduleNumber}`;
      const correctOption = q.options[q.correctIndex];
      const correctLetter = String.fromCharCode(65 + q.correctIndex);

      let explanation = `Đáp án đúng là ${correctLetter}. ${correctOption}.`;
      let takeaway = '';

      if (q.num === 47) {
        explanation =
          'Phần mềm mã nguồn mở (Open Source Software) yêu cầu công bố TOÀN BỘ mã nguồn cho cộng đồng theo giấy phép mở, không phải chỉ công bố một phần.';
        takeaway = 'Mã nguồn mở = Công bố toàn bộ mã nguồn (Full source code).';
      } else if (q.num === 114) {
        explanation =
          'Khái niệm Website: Là tập hợp của nhiều trang Web được liên kết và có thể thuộc các địa chỉ tên miền khác nhau hoặc cùng một tên miền.';
        takeaway = 'Web site là kết hợp nhiều trang Web trên nhiều địa chỉ khác nhau.';
      } else if (q.num === 188) {
        explanation =
          'Trong Microsoft Word, bạn KHÔNG THỂ làm việc với bảng tính như trong Excel (Word chỉ hỗ trợ bảng cơ bản, không có các công thức và phân tích mảng chuyên sâu như Excel).';
        takeaway = 'Word không có bảng tính tự động chuyên sâu như Excel.';
      } else if (q.num === 275) {
        explanation =
          'Trong PowerPoint, phát biểu "Có thể thiết lập các thông số..." là câu phát biểu chưa đúng theo chuẩn đề thi.';
        takeaway = 'Ghi nhớ chuẩn đáp án C cho câu 275.';
      } else if (q.isShortcut) {
        takeaway = 'Ghi nhớ phím tắt này giúp thao tác nhanh và xử lý chính xác đề thi.';
      } else if (q.isFormula) {
        takeaway = 'Chú ý quy tắc phân cách dấu phẩy / chấm phẩy và cố định ô bằng ký hiệu $.';
      }

      list.push({
        id: `q-${q.id}`,
        sourceType: 'question',
        moduleNumber: q.moduleNumber,
        moduleCode: modCode,
        moduleName: q.moduleName,
        badge: `Câu ${q.num}`,
        frontPrompt: q.text,
        options: q.options,
        correctIndex: q.correctIndex,
        diagramType: q.diagramType,
        backAnswer: `${correctLetter}. ${correctOption}`,
        backExplanation: explanation,
        keyTakeaway: takeaway,
        tags: [
          modCode,
          q.isShortcut ? 'Phím tắt' : '',
          q.isFormula ? 'Công thức' : '',
          q.isConfusing ? 'Bẫy thi' : '',
        ].filter(Boolean),
      });
    });

    // B. 10 Confusing Trap Pairs (High-Yield Flashcards)
    CONFUSING_PAIRS.forEach((cp) => {
      list.push({
        id: `cp-${cp.id}`,
        sourceType: 'confuse',
        moduleNumber: cp.id <= 2 ? 2 : cp.id <= 5 ? 3 : cp.id <= 8 ? 4 : 5,
        moduleCode: 'BẪY THI',
        moduleName: 'Nhóm Câu Bẫy / Khái Niệm Dễ Lẫn Lộn',
        badge: 'Cặp Khái Niệm Bẫy',
        frontPrompt: `Phân biệt khái niệm: "${cp.title}"\nBạn hãy nêu sự khác nhau giữa:\n• ${cp.itemA.name}\n• ${cp.itemB.name}`,
        backAnswer: cp.keyTakeaway,
        backExplanation: `• ${cp.itemA.name}:\n${cp.itemA.description}\n\n• ${cp.itemB.name}:\n${cp.itemB.description}`,
        keyTakeaway: `💡 Quy tắc vàng: ${cp.keyTakeaway}`,
        tags: ['Bẫy thi', 'Khái niệm dễ nhầm', 'Trọng tâm'],
      });
    });

    // C. Essential Shortcuts
    SHORTCUTS_DATA.slice(0, 15).forEach((sc, idx) => {
      const modNum =
        sc.app === 'Windows'
          ? 2
          : sc.app === 'MS Word'
          ? 3
          : sc.app === 'MS Excel'
          ? 4
          : sc.app === 'MS PowerPoint'
          ? 5
          : 1;
      const modCode = `IU0${modNum}`;

      list.push({
        id: `sc-${idx}`,
        sourceType: 'shortcut',
        moduleNumber: modNum,
        moduleCode: modCode,
        moduleName: `Phím tắt ${sc.app}`,
        badge: `Phím tắt ${sc.app}`,
        frontPrompt: `Trong ứng dụng ${sc.app}, tổ hợp phím [${sc.keys.join(' + ')}] có tác dụng gì?`,
        backAnswer: sc.action,
        backExplanation: sc.note
          ? `Ghi chú: ${sc.note}`
          : `Tổ hợp [${sc.keys.join(' + ')}] là thao tác tiêu chuẩn trong ${sc.app}.`,
        keyTakeaway: `Nhớ: ${sc.keys.join(' + ')} ➔ ${sc.action}`,
        tags: ['Phím tắt', sc.app, modCode],
      });
    });

    // D. Core Excel Formulas
    FORMULAS_DATA.slice(0, 12).forEach((fm, idx) => {
      list.push({
        id: `fm-${idx}`,
        sourceType: 'formula',
        moduleNumber: 4,
        moduleCode: 'IU04',
        moduleName: 'Hàm MS Excel',
        badge: `Hàm: ${fm.name}`,
        frontPrompt: `Nêu cú pháp và công dụng của hàm [${fm.name}] trong Microsoft Excel?\nVí dụ mô tả: ${fm.syntax}`,
        backAnswer: `${fm.name}: ${fm.description}`,
        backExplanation: `• Cú pháp chuẩn: ${fm.syntax}\n• Ví dụ tính toán: ${fm.example}${
          fm.result ? `\n• Kết quả trả về: ${fm.result}` : ''
        }`,
        keyTakeaway: fm.notes ? `💡 Lưu ý: ${fm.notes}` : undefined,
        tags: ['Công thức', 'MS Excel', 'IU04'],
      });
    });

    return list;
  }, []);

  // Filter cards based on current settings
  const filteredCards = useMemo(() => {
    let result = allCards;

    // Filter by Module
    if (selectedModule !== 'all') {
      result = result.filter((c) => c.moduleNumber === selectedModule);
    }

    // Filter by Topic
    if (selectedTopic === 'questions') {
      result = result.filter((c) => c.sourceType === 'question');
    } else if (selectedTopic === 'confuse') {
      result = result.filter((c) => c.sourceType === 'confuse');
    } else if (selectedTopic === 'shortcuts') {
      result = result.filter((c) => c.sourceType === 'shortcut');
    } else if (selectedTopic === 'formulas') {
      result = result.filter((c) => c.sourceType === 'formula');
    } else if (selectedTopic === 'starred') {
      result = result.filter((c) => starredIds.includes(c.id));
    } else if (selectedTopic === 'needs_review') {
      result = result.filter((c) => needsReviewIds.includes(c.id));
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.frontPrompt.toLowerCase().includes(q) ||
          c.backAnswer.toLowerCase().includes(q) ||
          c.backExplanation.toLowerCase().includes(q) ||
          c.moduleCode.toLowerCase().includes(q) ||
          c.badge.toLowerCase().includes(q)
      );
    }

    if (isShuffled) {
      result = [...result].sort(() => Math.sin(result.length) - 0.5);
    }

    return result;
  }, [allCards, selectedModule, selectedTopic, searchQuery, isShuffled, starredIds, needsReviewIds]);

  // Keep currentIndex bounded
  useEffect(() => {
    if (currentIndex >= filteredCards.length) {
      setCurrentIndex(Math.max(0, filteredCards.length - 1));
    }
    setIsFlipped(false);
  }, [filteredCards.length, selectedModule, selectedTopic, searchQuery]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleFlip = useCallback(() => {
    soundEngine.playFlip();
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (filteredCards.length === 0) return;
    soundEngine.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < filteredCards.length ? prev + 1 : 0));
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    if (filteredCards.length === 0) return;
    soundEngine.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredCards.length - 1));
  }, [filteredCards.length]);

  // Keyboard Navigation: Space = Flip, Arrows = Prev/Next, 1 = Needs Review, 2 = Mastered, S = Star
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing inside input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' || e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft' || e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 's' || e.key === 'S') {
        if (currentCard) {
          e.preventDefault();
          toggleStar(currentCard.id);
        }
      } else if (e.key === '1') {
        if (currentCard) {
          e.preventDefault();
          markNeedsReview(currentCard.id);
          handleNext();
        }
      } else if (e.key === '2') {
        if (currentCard) {
          e.preventDefault();
          markMastered(currentCard.id);
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, currentCard, toggleStar, markNeedsReview, markMastered]);

  // Reset all study progress
  const handleResetProgress = () => {
    if (window.confirm('Bạn có muốn đặt lại tiến độ học thẻ (xóa danh sách Đã nhớ và Cần ôn)?')) {
      soundEngine.playClick();
      setMasteredIds([]);
      setNeedsReviewIds([]);
      localStorage.removeItem('cntt_flashcard_mastered');
      localStorage.removeItem('cntt_flashcard_review');
    }
  };

  // Metrics for progress bar
  const masteredCount = useMemo(() => {
    return filteredCards.filter((c) => masteredIds.includes(c.id)).length;
  }, [filteredCards, masteredIds]);

  const reviewCount = useMemo(() => {
    return filteredCards.filter((c) => needsReviewIds.includes(c.id)).length;
  }, [filteredCards, needsReviewIds]);

  const progressPercent =
    filteredCards.length > 0 ? Math.round((masteredCount / filteredCards.length) * 100) : 0;

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl border border-indigo-700/50 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            PHƯƠNG PHÁP GHI NHỚ CHỦ ĐỘNG (ACTIVE RECALL)
          </div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight text-white leading-snug">
            Thẻ Ghi Nhớ Lý Thuyết & Công Thức (Flashcards)
          </h2>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
            Lật mặt trước xem câu hỏi, thuật ngữ hoặc phím tắt; lật mặt sau xem đáp án chuẩn xác và giải thích cốt lõi. Giúp ghi nhớ sâu kiến thức 6 Modul CNTT cơ bản trong thời gian ngắn nhất!
          </p>

          {/* Quick Stats Pill Row */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-white font-semibold">
              📚 Tổng số: <b>{allCards.length}</b> thẻ
            </span>
            <span className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Đã thuộc: <b>{masteredIds.length}</b> thẻ
            </span>
            <span className="px-3 py-1 rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-300 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              Cần ôn lại: <b>{needsReviewIds.length}</b> thẻ
            </span>
            <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              Đã gắn sao: <b>{starredIds.length}</b> thẻ
            </span>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
      </div>

      {/* 2. Control Bar: Filter by Topic & Module */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-4">
        {/* Row 1: Search & View Toggle & Reset */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm câu hỏi, phím tắt, hàm Excel..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setViewMode('card')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'card'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Chế độ lật thẻ 3D từng thẻ một"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Thẻ 3D</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Xem toàn bộ danh sách thẻ để tra cứu"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Danh sách ({filteredCards.length})</span>
              </button>
            </div>

            {/* Shuffle Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setIsShuffled(!isShuffled);
                setCurrentIndex(0);
              }}
              className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 ${
                isShuffled
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Xáo trộn thứ tự thẻ ngẫu nhiên"
            >
              <Shuffle className="w-4 h-4" />
              <span className="hidden md:inline">{isShuffled ? 'Đang trộn' : 'Trộn thẻ'}</span>
            </button>

            {/* Reset Progress */}
            {(masteredIds.length > 0 || needsReviewIds.length > 0) && (
              <button
                onClick={handleResetProgress}
                className="p-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition cursor-pointer"
                title="Đặt lại trạng thái đã học"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Topic Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 pt-1 border-t border-slate-100 text-xs">
          <span className="font-bold text-slate-500 mr-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Chủ đề:
          </span>
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 ${
              selectedTopic === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả ({allCards.length})
          </button>
          <button
            onClick={() => setSelectedTopic('questions')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'questions'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>300 Câu hỏi thi ({QUESTIONS.length})</span>
          </button>
          <button
            onClick={() => setSelectedTopic('confuse')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'confuse'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <AlertTriangle className="w-3 h-3" />
            <span>10 Cặp Bẫy thi ({CONFUSING_PAIRS.length})</span>
          </button>
          <button
            onClick={() => setSelectedTopic('shortcuts')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'shortcuts'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Keyboard className="w-3 h-3" />
            <span>Phím tắt</span>
          </button>
          <button
            onClick={() => setSelectedTopic('formulas')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'formulas'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Calculator className="w-3 h-3" />
            <span>Hàm Excel</span>
          </button>
          <button
            onClick={() => setSelectedTopic('needs_review')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'needs_review'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-3 h-3" />
            <span>Cần ôn ({needsReviewIds.length})</span>
          </button>
          <button
            onClick={() => setSelectedTopic('starred')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
              selectedTopic === 'starred'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
            <span>Đã gắn sao ({starredIds.length})</span>
          </button>
        </div>

        {/* Row 3: Module Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1 border-t border-slate-100 text-xs">
          <span className="font-bold text-slate-500 mr-1 shrink-0">Module:</span>
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer shrink-0 ${
              selectedModule === 'all'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả 6 Modul
          </button>
          {MODULES_INFO.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod.id)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${
                selectedModule === mod.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{mod.code}</span>
              <span className="hidden md:inline font-normal opacity-85">({mod.name.split('(')[0]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN CONTENT: CARD 3D FLIP VIEW */}
      {viewMode === 'card' && (
        <div className="space-y-4">
          {/* Progress & Current Position Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-200/80 font-black text-slate-800">
                Thẻ {filteredCards.length > 0 ? currentIndex + 1 : 0} / {filteredCards.length}
              </span>
              {currentCard && (
                <span className="text-slate-500 hidden sm:inline">{currentCard.moduleName}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-500">
                Đã nắm vững: <b>{masteredCount}</b> / {filteredCards.length} ({progressPercent}%)
              </span>
              <div className="w-24 sm:w-36 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {filteredCards.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Layers className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-800">Không tìm thấy thẻ nào</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Không có thẻ ghi nhớ nào phù hợp với bộ lọc hiện tại. Bạn hãy thử chọn chủ đề khác hoặc xóa từ khóa tìm kiếm.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedModule('all');
                  setSelectedTopic('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
              >
                Hiện tất cả các thẻ
              </button>
            </div>
          ) : currentCard ? (
            <div className="space-y-4">
              {/* 3D Flip Card Container */}
              <div
                style={{ perspective: '1200px' }}
                className="w-full max-w-3xl mx-auto select-none"
              >
                <div
                  onClick={handleFlip}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  className="relative w-full min-h-[380px] sm:min-h-[420px] cursor-pointer"
                >
                  {/* FRONT FACE (QUESTION / PROMPT) */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 w-full h-full rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between"
                  >
                    {/* Front Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-blue-100 text-blue-800">
                          {currentCard.moduleCode}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700">
                          {currentCard.badge}
                        </span>
                        {masteredIds.includes(currentCard.id) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <Check className="w-3 h-3" /> Đã thuộc
                          </span>
                        )}
                        {needsReviewIds.includes(currentCard.id) && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                            <AlertTriangle className="w-3 h-3" /> Cần ôn lại
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => toggleStar(currentCard.id, e)}
                          className={`p-2 rounded-xl transition cursor-pointer ${
                            starredIds.includes(currentCard.id)
                              ? 'text-amber-500 bg-amber-50'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                          title="Gắn sao lưu ý thẻ này"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              starredIds.includes(currentCard.id) ? 'fill-amber-400' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Front Center Question Text */}
                    <div className="my-auto py-4 space-y-4">
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 flex items-center gap-1.5">
                          <HelpCircleIcon /> CÂU HỎI / KHÁI NIỆM:
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-relaxed whitespace-pre-line">
                          {currentCard.frontPrompt}
                        </h3>
                      </div>

                      {/* Question Diagram if present */}
                      <QuestionDiagram type={currentCard.diagramType} />

                      {/* Option Choices Preview if available */}
                      {currentCard.options && currentCard.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {currentCard.options.map((opt, oIdx) => {
                            const letter = String.fromCharCode(65 + oIdx);
                            return (
                              <div
                                key={oIdx}
                                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-snug"
                              >
                                <span className="font-bold text-slate-900 shrink-0">{letter}.</span>
                                <span className="flex-1">{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Front Footer Flip Hint */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="hidden sm:inline">Phím tắt: [Space] Lật thẻ • [← / →] Chuyển thẻ</span>
                      <div className="flex items-center gap-1.5 font-bold text-blue-600 ml-auto">
                        <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                        <span>Chạm để lật xem đáp án & giải thích</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE (ANSWER & EXPLANATION) */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50 border-2 border-emerald-300 shadow-xl p-6 sm:p-8 flex flex-col justify-between"
                  >
                    {/* Back Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-emerald-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white flex items-center gap-1 shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" /> ĐÁP ÁN CHUẨN XÁC
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200">
                          {currentCard.moduleCode}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => toggleStar(currentCard.id, e)}
                          className={`p-2 rounded-xl transition cursor-pointer ${
                            starredIds.includes(currentCard.id)
                              ? 'text-amber-500 bg-amber-50'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              starredIds.includes(currentCard.id) ? 'fill-amber-400' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Back Center Answer & Explanation */}
                    <div className="my-auto py-3 space-y-4">
                      {/* Big prominent correct answer badge */}
                      <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-300 shadow-xs space-y-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                          ✓ KẾT QUẢ ĐÚNG:
                        </span>
                        <div className="text-base sm:text-lg md:text-xl font-black text-emerald-950 leading-snug">
                          {currentCard.backAnswer}
                        </div>
                      </div>

                      {/* Explanation */}
                      {currentCard.backExplanation && (
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Diễn giải chi tiết:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white/70 p-3 rounded-xl border border-slate-200">
                            {currentCard.backExplanation}
                          </p>
                        </div>
                      )}

                      {/* Key takeaway */}
                      {currentCard.keyTakeaway && (
                        <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed font-semibold">
                            {currentCard.keyTakeaway}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Back Footer Quick Rating Leitner buttons */}
                    <div className="pt-3 border-t border-emerald-100 flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-[11px] text-slate-500 flex items-center gap-2">
                        <span>Đánh giá độ ghi nhớ:</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markNeedsReview(currentCard.id);
                            handleNext();
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          title="Bấm phím 1 để đánh dấu Chưa nhớ và qua thẻ kế tiếp"
                        >
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Chưa nhớ (Phím 1)</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markMastered(currentCard.id);
                            handleNext();
                          }}
                          className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                          title="Bấm phím 2 để đánh dấu Đã thuộc và qua thẻ kế tiếp"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          <span>Đã thuộc (Phím 2)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Controls Bar */}
              <div className="max-w-3xl mx-auto flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Thẻ trước</span>
                </button>

                <button
                  onClick={handleFlip}
                  className="px-5 sm:px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>{isFlipped ? 'Xem lại mặt trước' : 'Lật xem đáp án (Space)'}</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Keyboard Shortcuts Hint Bar */}
              <div className="text-center text-[11px] text-slate-400 pt-1">
                💡 <b>Mẹo phím tắt nhanh</b>: Nhấn <b>[Phím Cách]</b> để lật thẻ • <b>[Mũi tên Trái / Phải]</b> để chuyển thẻ • <b>[1]</b> Chưa nhớ • <b>[2]</b> Đã thuộc • <b>[S]</b> Gắn sao
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* 4. GRID / OVERVIEW VIEW (RAPID SCANNING) */}
      {viewMode === 'grid' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Hiển thị <b>{filteredCards.length}</b> thẻ dạng danh sách tra cứu
            </span>
            <button
              onClick={() => setViewMode('card')}
              className="font-bold text-blue-600 hover:underline cursor-pointer flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Chuyển về chế độ lật thẻ 3D</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredCards.map((card, idx) => {
              const isMastered = masteredIds.includes(card.id);
              const isNeedsReview = needsReviewIds.includes(card.id);
              const isStarred = starredIds.includes(card.id);

              return (
                <div
                  key={card.id}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all space-y-3 shadow-xs hover:shadow-md ${
                    isMastered
                      ? 'border-emerald-200 bg-emerald-50/20'
                      : isNeedsReview
                      ? 'border-rose-200 bg-rose-50/20'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-black bg-blue-100 text-blue-800">
                        {card.moduleCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        #{idx + 1} • {card.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => toggleStar(card.id)}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          isStarred
                            ? 'text-amber-500 bg-amber-50'
                            : 'text-slate-300 hover:text-slate-500'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                      </button>
                      <button
                        onClick={() => {
                          setCurrentIndex(idx);
                          setViewMode('card');
                          setIsFlipped(false);
                        }}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition cursor-pointer text-xs font-bold flex items-center gap-1"
                        title="Mở lật thẻ này"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Mở thẻ</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-extrabold text-sm text-slate-900 leading-snug line-clamp-3">
                      {card.frontPrompt}
                    </h5>
                  </div>

                  {card.diagramType && (
                    <div className="text-[11px] text-blue-600 font-bold bg-blue-50 p-2 rounded-lg">
                      🖼️ Có hình minh họa sơ đồ (Bấm Mở thẻ để xem)
                    </div>
                  )}

                  <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-3 text-xs space-y-1">
                    <div className="font-bold text-emerald-800 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>Đáp án:</span>
                      <span className="font-extrabold text-emerald-950">{card.backAnswer}</span>
                    </div>
                    {card.keyTakeaway && (
                      <div className="text-[11px] text-emerald-700 italic">
                        {card.keyTakeaway}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => markNeedsReview(card.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          isNeedsReview
                            ? 'bg-rose-600 text-white'
                            : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                        }`}
                      >
                        Chưa nhớ
                      </button>
                      <button
                        onClick={() => markMastered(card.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          isMastered
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        }`}
                      >
                        Đã thuộc
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setCurrentIndex(idx);
                        setViewMode('card');
                        setIsFlipped(true);
                      }}
                      className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer"
                    >
                      Xem giải thích đầy đủ →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const HelpCircleIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
