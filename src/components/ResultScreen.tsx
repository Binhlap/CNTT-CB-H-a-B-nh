import React, { useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  BookOpen,
  Filter,
  BarChart3,
  Sparkles,
  AlertTriangle,
  TrendingUp,
  Target,
  ArrowRight,
  Flame,
  Check,
  Percent,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceLine,
  Cell,
} from 'recharts';
import { Question } from '../data/questions';
import { MODULES_INFO } from '../data/studyData';
import { soundEngine } from '../utils/audio';
import { QuestionDiagram } from './QuestionDiagram';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  questions: Question[];
  userAnswers: Record<number, number>;
  onRetake: () => void;
  onHome: () => void;
  onPracticeModule?: (moduleId: number) => void;
}

// Specific advice for each module to guide weak areas
const MODULE_STUDY_TIPS: Record<number, string> = {
  1: 'Ôn kỹ đơn vị đo thông tin (Bit, Byte), chức năng linh kiện (CPU, RAM, ROM, Bus) và phần mềm nguồn mở.',
  2: 'Nắm chắc các phím tắt hệ điều hành Windows (Win+D, Alt+Tab, Shift+Delete, F2) và quản lý tập tin trong File Explorer.',
  3: 'Ôn lại các thao tác định dạng văn bản Word, phím ngắt dòng Shift+Enter vs Enter, phím tắt căn lề và xử lý bảng biểu.',
  4: 'Trọng tâm vào cú pháp hàm Excel (IF, SUM, COUNTIF, VLOOKUP, MAX, MIN), địa chỉ ô tương đối/tuyệt đối ($) và căn lề mặc định.',
  5: 'Chú ý các chế độ trình chiếu PowerPoint, thiết lập Animation/Transition và thao tác quản lý phân đoạn (Section).',
  6: 'Ôn lại giao thức mạng (HTTP/HTTPS, IP, DNS), trình duyệt web, thư điện tử email và nguyên tắc an toàn thông tin.',
};

interface ChartDataItem {
  id: number;
  code: string;
  name: string;
  shortLabel: string;
  fullName: string;
  correct: number;
  wrong: number;
  total: number;
  percent: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    payload: ChartDataItem;
  }>;
  label?: string;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  timeSpentSeconds,
  questions,
  userAnswers,
  onRetake,
  onHome,
  onPracticeModule,
}) => {
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<number | 'all'>('all');
  const [chartMode, setChartMode] = useState<'stacked' | 'percent'>('stacked');

  const percent = Math.round((score / totalQuestions) * 100);
  const isPassed = percent >= 50;

  const triggerFireworks = () => {
    soundEngine.playPassFanfare();
    try {
      // 1. Initial side cannons
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#22c55e', '#3b82f6', '#eab308', '#ec4899', '#8b5cf6'],
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#22c55e', '#3b82f6', '#eab308', '#ec4899', '#8b5cf6'],
      });

      // 2. Center celebratory blast
      setTimeout(() => {
        confetti({
          particleCount: 90,
          spread: 100,
          origin: { y: 0.5 },
          shapes: ['circle', 'square'],
          colors: ['#ffd700', '#ff4081', '#00e5ff', '#76ff03', '#ff9100'],
        });
      }, 350);

      // 3. Multi-stage continuous fireworks shower
      const duration = 2.8 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 1000 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }
        const particleCount = 40 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.15, 0.4), y: Math.random() - 0.2 },
          colors: ['#10b981', '#6366f1', '#f59e0b', '#ef4444', '#06b6d4'],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.6, 0.85), y: Math.random() - 0.2 },
          colors: ['#3b82f6', '#ec4899', '#eab308', '#14b8a6', '#a855f7'],
        });
      }, 250);
    } catch {}
  };

  useEffect(() => {
    if (isPassed) {
      triggerFireworks();
    }
  }, [isPassed]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s.toString().padStart(2, '0')} giây`;
  };

  // Compute stats per module
  const moduleStats: ChartDataItem[] = useMemo(() => {
    return MODULES_INFO.map((mod) => {
      const modQuestions = questions.filter((q) => q.moduleNumber === mod.id);
      if (modQuestions.length === 0) return null;
      const modCorrect = modQuestions.filter((q) => userAnswers[q.id] === q.correctIndex).length;
      const modWrong = modQuestions.length - modCorrect;
      const modPercent = Math.round((modCorrect / modQuestions.length) * 100);
      return {
        id: mod.id,
        code: mod.code,
        name: mod.name,
        shortLabel: mod.code,
        fullName: `${mod.code}: ${mod.name}`,
        total: modQuestions.length,
        correct: modCorrect,
        wrong: modWrong,
        percent: modPercent,
      };
    }).filter((item): item is ChartDataItem => item !== null);
  }, [questions, userAnswers]);

  // Weak and strong modules identification
  const weakModules = useMemo(() => {
    return moduleStats.filter((m) => m.percent < 50);
  }, [moduleStats]);

  const strongestModule = useMemo(() => {
    if (moduleStats.length === 0) return null;
    return [...moduleStats].sort((a, b) => b.percent - a.percent)[0];
  }, [moduleStats]);

  const weakestModule = useMemo(() => {
    if (moduleStats.length === 0) return null;
    return [...moduleStats].sort((a, b) => a.percent - b.percent)[0];
  }, [moduleStats]);

  // Filter questions for review
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctIndex;
      if (reviewFilter === 'wrong' && isCorrect) return false;
      if (reviewFilter === 'correct' && !isCorrect) return false;

      if (selectedModuleFilter !== 'all' && q.moduleNumber !== selectedModuleFilter) {
        return false;
      }
      return true;
    });
  }, [questions, userAnswers, reviewFilter, selectedModuleFilter]);

  // Jump to review wrong questions of a specific module
  const handleReviewSpecificModule = (moduleId: number) => {
    setSelectedModuleFilter(moduleId);
    setReviewFilter('wrong');
    setIsReviewing(true);
    // Smooth scroll to review section
    setTimeout(() => {
      const el = document.getElementById('review-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const CustomChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs space-y-2 min-w-[220px]">
          <div className="font-bold text-slate-100 border-b border-slate-700 pb-1.5 leading-snug">
            <span className="text-blue-400 font-extrabold mr-1.5">{data.code}</span>
            {data.name}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center text-emerald-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Số câu đúng:
              </span>
              <span className="font-bold">
                {data.correct} / {data.total} câu
              </span>
            </div>
            <div className="flex justify-between items-center text-rose-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                Số câu sai:
              </span>
              <span className="font-bold">{data.wrong} câu</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-1.5 border-t border-slate-700/80">
            <span className="text-slate-300">Tỷ lệ chính xác:</span>
            <span
              className={`font-black text-sm ${
                data.percent >= 75
                  ? 'text-emerald-400'
                  : data.percent >= 50
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {data.percent}%
            </span>
          </div>
          <div>
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                data.percent >= 75
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50'
                  : data.percent >= 50
                  ? 'bg-amber-950/80 text-amber-300 border border-amber-700/50'
                  : 'bg-rose-950/80 text-rose-300 border border-rose-700/50'
              }`}
            >
              {data.percent >= 75 ? (
                <>✓ Nắm rất vững</>
              ) : data.percent >= 50 ? (
                <>• Đạt yêu cầu</>
              ) : (
                <>⚠️ Yếu - Cần ôn lại</>
              )}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* 1. Score Summary Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md text-center space-y-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
          <Award className="w-4 h-4 text-amber-500" />
          KẾT QUẢ BÀI THI THỬ CNTT CƠ BẢN
        </div>

        {/* Circular Score Badge with Fireworks Halo */}
        <div className="flex justify-center relative py-2">
          {isPassed && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-emerald-400/20 blur-2xl animate-pulse" />
            </div>
          )}
          <div
            className={`relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white transition-transform ${
              isPassed
                ? 'bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 ring-8 ring-emerald-300/40 shadow-emerald-500/30'
                : 'bg-gradient-to-br from-rose-500 to-red-700 ring-8 ring-rose-200/50'
            }`}
          >
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {score}/{totalQuestions}
            </span>
            <span className="text-xs md:text-sm font-semibold opacity-95">{percent}%</span>
          </div>
        </div>

        {/* Pass/Fail Status Banner */}
        <div className="space-y-1.5">
          {isPassed && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>XÁC NHẬN ĐẠT CHỨNG CHỈ CNTT CƠ BẢN</span>
            </div>
          )}
          <h2
            className={`text-xl md:text-2xl font-black tracking-tight ${
              isPassed ? 'text-emerald-700' : 'text-rose-600'
            }`}
          >
            {isPassed ? '🎉 CHÚC MỪNG: BẠN ĐÃ ĐẠT YÊU CẦU!' : '⚠️ KẾT QUẢ: CHƯA ĐẠT YÊU CẦU'}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto">
            {isPassed
              ? `Bạn đã vượt qua mốc chuẩn 50% (30/${totalQuestions} câu) để được cấp chứng chỉ!`
              : `Để được cấp chứng chỉ, bạn cần trả lời đúng ít nhất 30/${totalQuestions} câu (50%). Hãy xem phân tích biểu đồ bên dưới để biết phần mình cần cải thiện nhé!`}
          </p>
        </div>

        {/* Detailed Stats Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto pt-2">
          <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
            <div className="text-xl md:text-2xl font-extrabold text-emerald-700">{score}</div>
            <div className="text-[11px] font-semibold text-emerald-800">Câu đúng</div>
          </div>
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-xl">
            <div className="text-xl md:text-2xl font-extrabold text-rose-700">
              {totalQuestions - score}
            </div>
            <div className="text-[11px] font-semibold text-rose-800">Câu sai / Bỏ qua</div>
          </div>
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl">
            <div className="text-xs md:text-sm font-extrabold text-blue-900 mt-1">
              {formatTime(timeSpentSeconds)}
            </div>
            <div className="text-[11px] font-semibold text-blue-800">Thời gian làm</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          {isPassed && (
            <button
              onClick={triggerFireworks}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 active:scale-95 text-white font-extrabold text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
              title="Kích hoạt lại hiệu ứng pháo hoa ăn mừng"
            >
              <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
              <span>Bắn Pháo Hoa Ăn Mừng 🎆</span>
            </button>
          )}
          <button
            onClick={() => {
              setIsReviewing(!isReviewing);
              if (!isReviewing) {
                setTimeout(() => {
                  const el = document.getElementById('review-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isReviewing ? 'Ẩn Xem Lại Bài Thi' : 'Xem Diễn Giải Chi Tiết'}</span>
          </button>
          <button
            onClick={onRetake}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs md:text-sm shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm Đề Khác</span>
          </button>
          <button
            onClick={onHome}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs md:text-sm transition cursor-pointer flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Trở Về Trang Chủ</span>
          </button>
        </div>
      </div>

      {/* 2. RECHARTS MODULE PERFORMANCE & WEAKNESS DIAGNOSIS */}
      {moduleStats.length > 0 && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md space-y-6">
          {/* Header of Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
                PHÂN TÍCH NĂNG LỰC
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight mt-1">
                Biểu Đồ Thống Kê Đúng / Sai Theo Từng Module
              </h3>
              <p className="text-xs text-slate-500">
                Trực quan hóa tỷ lệ làm bài giúp bạn nhận diện chính xác phần kiến thức cần cải thiện
              </p>
            </div>

            {/* Toggle Chart View Mode */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-center">
              <button
                onClick={() => setChartMode('stacked')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  chartMode === 'stacked'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Số câu (Đúng/Sai)</span>
              </button>
              <button
                onClick={() => setChartMode('percent')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  chartMode === 'percent'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Percent className="w-3.5 h-3.5" />
                <span>Tỷ lệ %</span>
              </button>
            </div>
          </div>

          {/* Quick Legend & Summary Info */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-3 h-3 rounded-md bg-emerald-500 inline-block shadow-2xs" />
                <span>Đúng ({score})</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-3 h-3 rounded-md bg-rose-500 inline-block shadow-2xs" />
                <span>Sai / Bỏ qua ({totalQuestions - score})</span>
              </div>
              {chartMode === 'percent' && (
                <div className="flex items-center gap-1.5 font-medium text-amber-700">
                  <span className="w-3 h-0.5 bg-amber-500 inline-block border-t border-dashed border-amber-600" />
                  <span>Mốc chuẩn đạt (50%)</span>
                </div>
              )}
            </div>

            <span className="text-[11px] text-slate-400 italic">
              Di chuột hoặc chạm vào cột để xem chi tiết
            </span>
          </div>

          {/* Recharts Canvas */}
          <div className="w-full h-72 sm:h-80 pt-2 pb-1">
            <ResponsiveContainer width="100%" height="100%">
              {chartMode === 'stacked' ? (
                <BarChart
                  data={moduleStats}
                  margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="shortLabel"
                    tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomChartTooltip />} />
                  <Bar
                    dataKey="correct"
                    name="Đúng"
                    stackId="modStack"
                    fill="#10b981"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="wrong"
                    name="Sai"
                    stackId="modStack"
                    fill="#f43f5e"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              ) : (
                <BarChart
                  data={moduleStats}
                  margin={{ top: 10, right: 10, left: -15, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="shortLabel"
                    tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
                    tickLine={false}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                    unit="%"
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomChartTooltip />} />
                  <ReferenceLine
                    y={50}
                    stroke="#f59e0b"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: 'Chuẩn 50%',
                      fill: '#d97706',
                      fontSize: 10,
                      fontWeight: 700,
                      position: 'insideTopRight',
                    }}
                  />
                  <Bar dataKey="percent" name="Tỷ lệ đúng" radius={[6, 6, 0, 0]}>
                    {moduleStats.map((entry) => (
                      <Cell
                        key={`cell-${entry.id}`}
                        fill={
                          entry.percent >= 75
                            ? '#10b981'
                            : entry.percent >= 50
                            ? '#3b82f6'
                            : '#f43f5e'
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Module Name Reference Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-100">
            {moduleStats.map((item) => (
              <div
                key={item.id}
                onClick={() => handleReviewSpecificModule(item.id)}
                className={`p-2 rounded-xl text-left transition cursor-pointer border hover:shadow-xs ${
                  item.percent < 50
                    ? 'bg-rose-50/60 border-rose-200 hover:bg-rose-100/70'
                    : item.percent >= 75
                    ? 'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/60'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
                title="Bấm để lọc xem ngay câu hỏi của Modul này"
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800">{item.code}</span>
                  <span
                    className={
                      item.percent >= 75
                        ? 'text-emerald-700'
                        : item.percent >= 50
                        ? 'text-blue-700'
                        : 'text-rose-600'
                    }
                  >
                    {item.percent}% ({item.correct}/{item.total})
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{item.name}</div>
              </div>
            ))}
          </div>

          {/* 3. DIAGNOSIS CARD: WEAK AREAS & RECOMMENDATIONS */}
          <div className="space-y-3 pt-2">
            {weakModules.length > 0 ? (
              <div className="bg-gradient-to-br from-rose-50 via-amber-50/40 to-white rounded-2xl p-4 sm:p-5 border border-rose-200 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h4 className="text-sm font-extrabold text-rose-950 flex items-center gap-1.5">
                        <span>CẢNH BÁO KIẾN THỨC YẾU CẦN ÔN LUYỆN BỔ SUNG</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-200 text-rose-800">
                          {weakModules.length} Module dưới 50%
                        </span>
                      </h4>
                      <p className="text-xs text-rose-800/90 mt-0.5">
                        Bạn chưa đạt điểm chuẩn tối thiểu ở các phần sau. Hãy tập trung ôn lại lý thuyết và làm bài tập trắc nghiệm riêng cho từng modul này:
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {weakModules.map((wm) => (
                        <div
                          key={wm.id}
                          className="bg-white/90 rounded-xl p-3 border border-rose-200 text-xs space-y-1.5 shadow-2xs"
                        >
                          <div className="flex items-center justify-between flex-wrap gap-1">
                            <span className="font-extrabold text-slate-900">
                              {wm.code}: {wm.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-md font-extrabold bg-rose-100 text-rose-700">
                              Đúng {wm.correct}/{wm.total} câu ({wm.percent}%) • Sai {wm.wrong} câu
                            </span>
                          </div>

                          {/* Specific advice */}
                          <div className="text-[11.5px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <span className="font-bold text-amber-800">💡 Lời khuyên ôn thi: </span>
                            {MODULE_STUDY_TIPS[wm.id] || 'Ôn lại các khái niệm cơ bản và phím tắt.'}
                          </div>

                          <div className="flex items-center gap-2 pt-1 flex-wrap">
                            <button
                              onClick={() => handleReviewSpecificModule(wm.id)}
                              className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] transition cursor-pointer flex items-center gap-1 shadow-2xs"
                            >
                              <BookOpen className="w-3 h-3" />
                              <span>Xem ngay {wm.wrong} câu sai phần này</span>
                            </button>
                            {onPracticeModule && (
                              <button
                                onClick={() => onPracticeModule(wm.id)}
                                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-[11px] transition cursor-pointer flex items-center gap-1 shadow-2xs"
                              >
                                <Target className="w-3 h-3 text-amber-300" />
                                <span>Luyện riêng đề {wm.code}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-extrabold text-emerald-950 flex items-center gap-1.5">
                      <span>KIẾN THỨC ĐỒNG ĐỀU - TẤT CẢ MODULE ĐỀU ĐẠT CHUẨN!</span>
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Rất xuất sắc! Bạn không có phần nào bị dưới 50%.{' '}
                      {weakestModule && weakestModule.percent < 75 && (
                        <span>
                          Tuy nhiên, phần <b>{weakestModule.code}</b> ({weakestModule.percent}%) có tỷ lệ đúng thấp nhất trong các modul, bạn có thể củng cố thêm để đạt điểm tuyệt đối.
                        </span>
                      )}
                    </p>
                    {weakestModule && (
                      <div className="pt-1 flex items-center gap-2">
                        <button
                          onClick={() => handleReviewSpecificModule(weakestModule.id)}
                          className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition cursor-pointer flex items-center gap-1"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Xem lại câu của {weakestModule.code}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Highlight Strongest Module */}
            {strongestModule && strongestModule.percent >= 70 && (
              <div className="bg-blue-50/70 rounded-2xl p-3.5 border border-blue-200/80 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">🌟 Điểm mạnh nổi trội của bạn: </span>
                    <span className="font-extrabold text-blue-900">
                      {strongestModule.code}: {strongestModule.name}
                    </span>
                    <span className="text-slate-600 ml-1">
                      (Đạt {strongestModule.percent}% - đúng {strongestModule.correct}/{strongestModule.total} câu)
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-md">
                  Vững kiến thức
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Review Section */}
      {isReviewing && (
        <div id="review-section" className="space-y-4 pt-2">
          {/* Review Filter Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Filter className="w-4 h-4 text-blue-600" />
                <span>Bộ lọc xem lại bài thi:</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Đang hiển thị: <b className="text-slate-900">{filteredQuestions.length}</b> /{' '}
                {questions.length} câu
              </div>
            </div>

            {/* Status Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-600 mr-1">Trạng thái:</span>
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  reviewFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tất cả ({questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  reviewFilter === 'wrong'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                Chỉ câu sai ({totalQuestions - score})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  reviewFilter === 'correct'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                Chỉ câu đúng ({score})
              </button>
            </div>

            {/* Module Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-600 mr-1">Theo Module:</span>
              <button
                onClick={() => setSelectedModuleFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedModuleFilter === 'all'
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tất cả các Modul
              </button>
              {moduleStats.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedModuleFilter(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                    selectedModuleFilter === item.id
                      ? 'bg-blue-600 text-white'
                      : item.percent < 50
                      ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{item.code}</span>
                  <span className="text-[10px] opacity-80">({item.correct}/{item.total})</span>
                </button>
              ))}
            </div>
          </div>

          {/* List of Questions in Review */}
          <div className="space-y-3.5">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500 text-sm">
                Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const originalIdx = questions.findIndex((item) => item.id === q.id);
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;
                const hasAnswered = userChoice !== undefined;

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-2xl p-5 border shadow-xs space-y-3 ${
                      isCorrect ? 'border-emerald-200' : 'border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-slate-100 text-slate-800">
                          Câu {originalIdx + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{q.moduleName}</span>
                      </div>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Đúng (+1 điểm)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />{' '}
                          {hasAnswered ? 'Sai' : 'Chưa làm'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-relaxed">{q.text}</h3>

                    <QuestionDiagram type={q.diagramType} />

                    <div className="space-y-1.5">
                      {q.options.map((opt, oIdx) => {
                        const letter = String.fromCharCode(65 + oIdx);
                        const isOptionCorrect = oIdx === q.correctIndex;
                        const isOptionUserChoice = oIdx === userChoice;

                        let optStyle = 'bg-slate-50/60 border-slate-200 text-slate-600';

                        if (isOptionCorrect) {
                          optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                        } else if (isOptionUserChoice && !isCorrect) {
                          optStyle =
                            'bg-rose-50 border-rose-500 text-rose-950 font-medium line-through';
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs md:text-sm ${optStyle}`}
                          >
                            <span className="font-bold">{letter}.</span>
                            <span className="flex-1">{opt}</span>
                            {isOptionCorrect && (
                              <span className="text-[11px] font-extrabold text-emerald-700 uppercase">
                                (Đáp án đúng)
                              </span>
                            )}
                            {isOptionUserChoice && !isOptionCorrect && (
                              <span className="text-[11px] font-extrabold text-rose-700 uppercase">
                                (Bạn chọn)
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
