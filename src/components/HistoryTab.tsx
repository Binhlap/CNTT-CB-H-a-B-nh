import React from 'react';
import { History, Award, CheckCircle2, XCircle, Trash2, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ExamHistoryItem } from '../types';
import { soundEngine } from '../utils/audio';

interface HistoryTabProps {
  history: ExamHistoryItem[];
  onClearHistory: () => void;
  onReviewExam: (item: ExamHistoryItem) => void;
  onTakeExam: () => void;
}

export const HistoryTab: React.FC<HistoryTabProps> = ({
  history,
  onClearHistory,
  onReviewExam,
  onTakeExam,
}) => {
  const totalAttempts = history.length;
  const passedAttempts = history.filter((h) => h.isPassed).length;
  const passRate = totalAttempts > 0 ? Math.round((passedAttempts / totalAttempts) * 100) : 0;
  const bestScore = totalAttempts > 0 ? Math.max(...history.map((h) => h.percent)) : 0;
  const avgScore =
    totalAttempts > 0
      ? Math.round(history.reduce((acc, h) => acc + h.percent, 0) / totalAttempts)
      : 0;

  const handleClear = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử các lần thi thử?')) {
      soundEngine.playClick();
      onClearHistory();
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2 border border-blue-200">
            <History className="w-3.5 h-3.5 text-blue-600" />
            Nhật Ký & Thống Kê Tiến Độ Học Tập
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Lịch Sử Các Lần Thi Thử
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Theo dõi sự tiến bộ về điểm số và độ chính xác qua từng bài thi
          </p>
        </div>

        {totalAttempts > 0 && (
          <button
            onClick={handleClear}
            className="px-3.5 py-2 rounded-xl text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Xóa Lịch Sử</span>
          </button>
        )}
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center">
          <div className="text-2xl font-black text-slate-900">{totalAttempts}</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Số lần thi thử</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center">
          <div className="text-2xl font-black text-emerald-600">{passRate}%</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Tỷ lệ Đạt chuẩn</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center">
          <div className="text-2xl font-black text-blue-600">{avgScore}%</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Điểm trung bình</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-center">
          <div className="text-2xl font-black text-amber-600">{bestScore}%</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Điểm cao nhất</div>
        </div>
      </div>

      {/* Attempts List */}
      {totalAttempts > 0 ? (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-700">Chi tiết các bài thi gần đây:</h3>
          <div className="space-y-2.5">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200 shadow-xs flex items-center justify-between flex-wrap gap-3 hover:border-blue-400 transition"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-base ${
                      item.isPassed
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {item.score}/{item.totalQuestions}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">
                        {item.categoryTitle}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                          item.isPassed
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}
                      >
                        {item.isPassed ? 'ĐẠT YÊU CẦU' : 'CHƯA ĐẠT'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {Math.floor(item.timeSpentSeconds / 60)} phút
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    onReviewExam(item);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold transition cursor-pointer flex items-center gap-1"
                >
                  <span>Xem lại kết quả</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-slate-800">Chưa có bài thi nào được ghi nhận</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Hãy bắt đầu một đề thi thử 60 câu 30 phút ngay để đánh giá trình độ và lưu lại kết quả vào bảng theo dõi!
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                soundEngine.playClick();
                onTakeExam();
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm shadow-sm transition cursor-pointer"
            >
              Bắt Đầu Thi Thử Ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
