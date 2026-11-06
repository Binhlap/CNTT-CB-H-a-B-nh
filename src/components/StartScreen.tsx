import React, { useState, useMemo } from 'react';
import {
  FileText,
  Keyboard,
  Calculator,
  AlertTriangle,
  Play,
  Layers,
  BookmarkCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Target,
  TrendingDown,
  TrendingUp,
  History,
  RotateCcw,
  Zap,
  Check,
  HelpCircle,
} from 'lucide-react';
import { MODULES_INFO } from '../data/studyData';
import { QuizMode, QuizCategory, ExamHistoryItem, TabType } from '../types';
import { soundEngine } from '../utils/audio';

interface StartScreenProps {
  onStartQuiz: (mode: QuizMode, category: QuizCategory, limit?: number) => void;
  bookmarkedCount: number;
  totalQuestionsCount: number;
  examHistory?: ExamHistoryItem[];
  onNavigateTab?: (tab: TabType) => void;
}

// Concrete study tips for each module
const MODULE_STUDY_TIPS: Record<number, string> = {
  1: 'Ôn kỹ đơn vị đo thông tin (Bit, Byte, GB), chức năng linh kiện (CPU, RAM, ROM, Bus) và phần mềm mã nguồn mở.',
  2: 'Nắm chắc tổ hợp phím tắt Windows (Win+D, Alt+Tab, Shift+Delete, F2), thao tác Recycle Bin và quản lý tệp tin.',
  3: 'Ôn lại các thao tác định dạng văn bản Word, phím ngắt dòng Shift+Enter vs Enter, phím tắt căn lề và xử lý bảng biểu.',
  4: 'Trọng tâm vào cú pháp hàm Excel (IF, SUM, COUNTIF, VLOOKUP, MAX, MIN), địa chỉ ô tuyệt đối ($) và căn lề mặc định.',
  5: 'Chú ý các chế độ trình chiếu PowerPoint, thiết lập Animation/Transition và thao tác quản lý phân đoạn (Section).',
  6: 'Ôn lại giao thức mạng (HTTP/HTTPS, IP, DNS), trình duyệt web, thư điện tử email và nguyên tắc an toàn thông tin.',
};

export const StartScreen: React.FC<StartScreenProps> = ({
  onStartQuiz,
  bookmarkedCount,
  totalQuestionsCount,
  examHistory = [],
  onNavigateTab,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'primary' | 'modules'>('primary');

  const handleStart = (mode: QuizMode, category: QuizCategory, limit?: number) => {
    soundEngine.playClick();
    onStartQuiz(mode, category, limit);
  };

  // Analyze performance across all exam attempts in history
  const { moduleStats, weakModules, strongModules, totalExams } = useMemo(() => {
    if (!examHistory || examHistory.length === 0) {
      return { moduleStats: {}, weakModules: [], strongModules: [], totalExams: 0 };
    }

    const statsMap: Record<
      number,
      { total: number; correct: number; failedTestsCount: number; testsWithModCount: number }
    > = {
      1: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
      2: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
      3: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
      4: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
      5: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
      6: { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 },
    };

    examHistory.forEach((exam) => {
      const modQuestionsInExam: Record<number, { total: number; correct: number }> = {};
      exam.questions.forEach((q) => {
        const mId = q.moduleNumber;
        if (!modQuestionsInExam[mId]) {
          modQuestionsInExam[mId] = { total: 0, correct: 0 };
        }
        modQuestionsInExam[mId].total++;
        if (exam.answers[q.id] === q.correctIndex) {
          modQuestionsInExam[mId].correct++;
        }
      });

      Object.entries(modQuestionsInExam).forEach(([mIdStr, stat]) => {
        const mId = parseInt(mIdStr, 10);
        if (statsMap[mId]) {
          statsMap[mId].total += stat.total;
          statsMap[mId].correct += stat.correct;
          statsMap[mId].testsWithModCount++;
          if (stat.total > 0 && stat.correct / stat.total < 0.5) {
            statsMap[mId].failedTestsCount++;
          }
        }
      });
    });

    const evaluated = MODULES_INFO.map((mod) => {
      const s = statsMap[mod.id] || { total: 0, correct: 0, failedTestsCount: 0, testsWithModCount: 0 };
      const accuracy = s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
      return {
        ...mod,
        total: s.total,
        correct: s.correct,
        wrong: s.total - s.correct,
        accuracy,
        failedTestsCount: s.failedTestsCount,
        testsWithModCount: s.testsWithModCount,
        tip: MODULE_STUDY_TIPS[mod.id] || '',
      };
    }).filter((m) => m.total > 0);

    // Identify weak modules:
    // Criteria: overall accuracy < 50% OR failed in at least 50% of the tests taken
    const strictlyWeak = evaluated.filter(
      (m) =>
        m.accuracy !== null &&
        (m.accuracy < 50 ||
          (m.testsWithModCount >= 2 && m.failedTestsCount >= m.testsWithModCount / 2))
    );

    // If no module strictly < 50%, check if there is an underperforming module (< 65%)
    const weakList =
      strictlyWeak.length > 0
        ? strictlyWeak.sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
        : evaluated
            .filter((m) => m.accuracy !== null && m.accuracy < 65)
            .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0));

    const strongList = evaluated
      .filter((m) => m.accuracy !== null && m.accuracy >= 70)
      .sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0));

    const statsLookup: Record<number, (typeof evaluated)[0]> = {};
    evaluated.forEach((item) => {
      statsLookup[item.id] = item;
    });

    return {
      moduleStats: statsLookup,
      weakModules: weakList,
      strongModules: strongList,
      totalExams: examHistory.length,
    };
  }, [examHistory]);

  return (
    <div className="space-y-6">
      {/* 1. Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 p-6 md:p-8 text-white shadow-lg border border-blue-700/50">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold backdrop-blur-xs mb-3 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Hệ thống luyện thi trắc nghiệm phiên bản mới nhất
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Chinh Phục Chứng Chỉ Ứng Dụng CNTT Cơ Bản
          </h2>
          <p className="text-sm md:text-base text-blue-100/90 leading-relaxed mb-5">
            Ngân hàng câu hỏi chuẩn gồm <b>{totalQuestionsCount} câu</b> được phân loại theo 6 Modul kiến thức. Hỗ trợ thi thử thời gian thực 30 phút, chuông nhắc nhở tiến độ và ôn luyện chuyên sâu với đáp án tức thì.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleStart('exam', 'all', 60)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-sm shadow-md transition cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              Bắt Đầu Thi Thử (60 Câu - 30 Phút)
            </button>
            <button
              onClick={() => handleStart('practice', 'all')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-sm border border-white/20 backdrop-blur-xs transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Luyện Toàn Bộ {totalQuestionsCount} Câu
            </button>
            {onNavigateTab && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onNavigateTab('flashcards');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500/30 hover:bg-indigo-500/50 active:scale-95 text-white font-semibold text-sm border border-indigo-400/40 backdrop-blur-xs transition cursor-pointer"
              >
                <Layers className="w-4 h-4 text-indigo-300" />
                <span>Thẻ Ghi Nhớ Flashcard</span>
              </button>
            )}
          </div>
        </div>

        {/* Decorative corner background elements */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-10 -translate-y-10 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
      </div>

      {/* 2. SMART RECOMMENDATION BASED ON EXAM HISTORY */}
      {totalExams > 0 && weakModules.length > 0 && (
        <div className="bg-gradient-to-br from-rose-50 via-amber-50/50 to-white rounded-2xl p-5 md:p-6 border-2 border-rose-200 shadow-sm space-y-4">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                </span>
                <span>GỢI Ý ÔN TẬP DỰA TRÊN LỊCH SỬ THI ({totalExams} bài đã làm)</span>
              </div>
              <h3 className="text-base md:text-lg font-black text-rose-950 tracking-tight flex items-center gap-1.5 pt-1">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Bạn đang thường xuyên mất điểm ở {weakModules.length} Module dưới đây</span>
              </h3>
              <p className="text-xs text-rose-800/90 leading-relaxed">
                Hệ thống tổng hợp các lần thi thử gần nhất và phát hiện tỷ lệ chính xác ở các phần này chưa đạt mốc an toàn. Hãy ưu tiên ôn luyện ngay để không bị trượt kỳ thi thật:
              </p>
            </div>

            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('history')}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 bg-rose-100/70 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 shrink-0"
              >
                <History className="w-3.5 h-3.5" />
                <span>Xem chi tiết lịch sử</span>
              </button>
            )}
          </div>

          {/* Cards for each weak module */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {weakModules.map((wm) => (
              <div
                key={wm.id}
                className="bg-white rounded-xl p-4 border border-rose-200 hover:border-rose-400 hover:shadow-md transition flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-rose-100 text-rose-800 border border-rose-200">
                      {wm.code}
                    </span>
                    <span className="text-xs font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Tỷ lệ đúng: {wm.accuracy}% ({wm.correct}/{wm.total} câu)
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 leading-snug">{wm.name}</h4>
                    {wm.failedTestsCount > 0 && (
                      <p className="text-[11px] text-rose-700 font-semibold mt-0.5">
                        ⚠️ Đạt dưới 50% ở {wm.failedTestsCount}/{wm.testsWithModCount} bài thi có phần này
                      </p>
                    )}
                  </div>

                  {/* Concrete study tip */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-xs text-slate-700 space-y-0.5">
                    <div className="font-bold text-amber-800 flex items-center gap-1 text-[11px]">
                      <Zap className="w-3 h-3 text-amber-600 fill-amber-600" />
                      <span>Trọng tâm cần ôn tập:</span>
                    </div>
                    <p className="text-[11.5px] leading-relaxed text-slate-600">{wm.tip}</p>
                  </div>
                </div>

                {/* Instant practice button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    50 câu hỏi trắc nghiệm
                  </span>
                  <button
                    onClick={() => handleStart('practice', `module_${wm.id}` as QuizCategory)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-xs shadow-xs transition cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5 text-rose-200" />
                    <span>Luyện Ngay {wm.code}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2B. POSITIVE STATE: When user has history and all modules are doing great */}
      {totalExams > 0 && weakModules.length === 0 && strongModules.length > 0 && (
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-200 shadow-xs flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </span>
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                <Check className="w-3 h-3 text-emerald-700 stroke-[3]" />
                LỊCH SỬ THI RẤT TỐT ({totalExams} bài đã làm)
              </div>
              <h4 className="text-sm md:text-base font-extrabold text-emerald-950">
                Phong độ ổn định! Bạn duy trì tỷ lệ đạt tốt trên tất cả các Module
              </h4>
              <p className="text-xs text-emerald-800">
                Điểm mạnh nổi bật nhất: <b>{strongModules[0].code}: {strongModules[0].name}</b> đạt{' '}
                <b>{strongModules[0].accuracy}%</b> chính xác. Tiếp tục duy trì phong độ nhé!
              </p>
            </div>
          </div>

          <button
            onClick={() => handleStart('exam', 'all', 60)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Làm Bài Thi Thử 60 Câu</span>
          </button>
        </div>
      )}

      {/* 3. Mode Navigation Toggle */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-1 border-b border-slate-200">
        <div>
          <h3 className="text-base md:text-lg font-bold text-slate-900">CHỌN CHẾ ĐỘ ÔN LUYỆN</h3>
          <p className="text-xs text-slate-500">
            Chọn hình thức thi thử mô phỏng hoặc ôn luyện theo từng chủ đề trọng tâm
          </p>
        </div>

        <div className="inline-flex rounded-lg bg-slate-200/80 p-1">
          <button
            onClick={() => setActiveSubTab('primary')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition cursor-pointer ${
              activeSubTab === 'primary'
                ? 'bg-white text-blue-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Chế độ chính
          </button>
          <button
            onClick={() => setActiveSubTab('modules')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'modules'
                ? 'bg-white text-blue-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Luyện theo 6 Modul</span>
            {weakModules.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
            )}
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: PRIMARY MODES */}
      {activeSubTab === 'primary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Exam Mode */}
          <div
            onClick={() => handleStart('exam', 'all', 60)}
            className="group relative bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition">
                  <FileText className="w-6 h-6" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                  Chuẩn format thi thật
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-950 group-hover:text-blue-600 transition flex items-center gap-1.5">
                  📝 Thi Thử Trực Tuyến
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Mô phỏng kỳ thi chính thức Chứng chỉ ứng dụng CNTT cơ bản
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Trích xuất ngẫu nhiên <b>60 câu hỏi</b> từ tất cả các Modul
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Thời gian <b>30 phút</b>, tự động nộp bài khi hết giờ
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Âm thanh chuông báo mốc 20p, 10p, cảnh báo gấp 5p & 1p</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-700">Đạt từ 30/60 câu (50%)</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition">
                Vào thi ngay <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Shortcut Practice */}
          <div
            onClick={() => handleStart('practice', 'shortcut')}
            className="group relative bg-white rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition">
                  <Keyboard className="w-6 h-6" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Phản hồi tức thì
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition flex items-center gap-1.5">
                  ⌨️ Ôn Trắc Nghiệm Phím Tắt
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Tổng hợp mọi câu hỏi về tổ hợp phím Windows & Office
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Luyện tập phím tắt Windows (F2, Alt+Tab, Shift+Del...)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Phím ngắt trang Word, phím trình chiếu PowerPoint (F5, Esc)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    <b>Chọn câu nào biết ngay kết quả</b> và diễn giải tại chỗ
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700">Ghi nhớ mẹo thao tác nhanh</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition">
                Bắt đầu ôn <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 3: Formula Practice */}
          <div
            onClick={() => handleStart('practice', 'formula')}
            className="group relative bg-white rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition">
                  <Calculator className="w-6 h-6" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Phản hồi tức thì
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition flex items-center gap-1.5">
                  📐 Ôn Công Thức & Hàm Excel
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Chuyên đề các phép tính, cú pháp hàm và mã lỗi thường gặp
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hàm tính toán: SUMIF, VLOOKUP, ROUND, MOD, PRODUCT</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Phân biệt COUNT vs COUNTA, TODAY vs NOW, PROPER/LOWER</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mã lỗi: #####, #NAME?, #VALUE!, #DIV/0!, #N/A</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-indigo-700">Rèn luyện tư duy công thức</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition">
                Bắt đầu ôn <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 4: Confusing / Trap Questions */}
          <div
            onClick={() => handleStart('practice', 'confuse')}
            className="group relative bg-white rounded-2xl p-6 border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition">
                  <AlertTriangle className="w-6 h-6" />
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-300">
                  Câu hỏi bẫy quan trọng
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center gap-1.5">
                  ⚠️ Ôn Nhóm Câu Bẫy / Dễ Lẫn Lộn
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Tập trung các câu học viên hay bị nhầm lẫn và mất điểm nhất
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sleep vs Hibernate, IAP vs ISP, Cc vs Bcc, Web tĩnh/động</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    <b>Đã cập nhật chuẩn đáp án:</b> 47(D), 114(A), 188(D), 275(C)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Khắc phục hoàn toàn các bẫy đề thi hay gài học viên</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-800">Tránh mất điểm đáng tiếc</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition">
                Bắt đầu ôn <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 5: Flashcard Active Recall */}
          {onNavigateTab && (
            <div
              onClick={() => {
                soundEngine.playClick();
                onNavigateTab('flashcards');
              }}
              className="group relative bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between md:col-span-2"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition">
                    <Layers className="w-6 h-6 text-indigo-600" />
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-300">
                    ✨ TÍNH NĂNG MỚI: LẬT THẺ GHI NHỚ
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-950 group-hover:text-indigo-700 transition flex items-center gap-2">
                    🗂️ Thẻ Ghi Nhớ (Flashcard) - Ôn Nhanh 300 Câu & Khái Niệm
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Lật mặt trước xem câu hỏi hoặc thuật ngữ, lật mặt sau xem đáp án chuẩn xác và giải thích cốt lõi
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-600 border-t border-indigo-100 pt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lật thẻ 3D mượt mà kèm phím tắt [Space]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Theo dõi tiến độ: Đã nhớ / Cần ôn lại</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lọc theo từng Modul & 10 cặp bẫy thi</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-indigo-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-700">Ghi nhớ sâu bằng phương pháp Active Recall</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition">
                  Khám phá ngay <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: MODULE-BASED PRACTICE */}
      {activeSubTab === 'modules' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600">
            Chọn một Modul cụ thể để ôn luyện trọn vẹn toàn bộ câu hỏi của Modul đó với phản hồi đúng/sai tức thì:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {MODULES_INFO.map((mod) => {
              const stat = moduleStats[mod.id];
              const isWeak = stat && stat.accuracy !== null && stat.accuracy < 50;
              const isStrong = stat && stat.accuracy !== null && stat.accuracy >= 75;

              return (
                <div
                  key={mod.id}
                  onClick={() => handleStart('practice', `module_${mod.id}` as QuizCategory)}
                  className={`bg-white rounded-xl p-4 border transition cursor-pointer flex flex-col justify-between ${
                    isWeak
                      ? 'border-rose-300 ring-2 ring-rose-200/60 hover:border-rose-500 hover:shadow-md'
                      : isStrong
                      ? 'border-emerald-300 hover:border-emerald-500 hover:shadow-md'
                      : 'border-slate-200 hover:border-blue-500 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 text-[11px] font-extrabold rounded-md bg-blue-100 text-blue-800">
                        {mod.code}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {stat && stat.accuracy !== null ? (
                          <span
                            className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                              isWeak
                                ? 'bg-rose-100 text-rose-700'
                                : isStrong
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {isWeak ? `⚠️ Cần ôn (${stat.accuracy}%)` : isStrong ? `✓ Vững (${stat.accuracy}%)` : `${stat.accuracy}% đúng`}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-slate-500">
                            {mod.count} câu hỏi
                          </span>
                        )}
                      </div>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">{mod.name}</h5>
                    {stat && stat.accuracy !== null && (
                      <p className="text-[11px] text-slate-500 mt-1">
                        Lịch sử thi: Đúng {stat.correct}/{stat.total} câu qua các đề
                      </p>
                    )}
                  </div>
                  <div
                    className={`mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${
                      isWeak ? 'text-rose-600' : 'text-blue-600'
                    }`}
                  >
                    <span>{isWeak ? 'Cần ôn ngay' : 'Luyện tập ngay'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bookmarked Questions Quick Access if any */}
      {bookmarkedCount > 0 && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold">
              <BookmarkCheck className="w-5 h-5 text-amber-800" />
            </span>
            <div>
              <h5 className="text-sm font-bold text-amber-950">
                Câu hỏi bạn đã đánh dấu lưu ý ({bookmarkedCount} câu)
              </h5>
              <p className="text-xs text-amber-800">
                Ôn lại riêng những câu bạn từng gắn cờ cần ghi nhớ thêm
              </p>
            </div>
          </div>
          <button
            onClick={() => handleStart('practice', 'bookmarks')}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition cursor-pointer"
          >
            Luyện câu đã lưu ({bookmarkedCount})
          </button>
        </div>
      )}
    </div>
  );
};
