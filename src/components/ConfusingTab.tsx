import React from 'react';
import { AlertTriangle, Play, CheckCircle2, XCircle, Sparkles, BookOpen } from 'lucide-react';
import { CONFUSING_PAIRS } from '../data/studyData';
import { soundEngine } from '../utils/audio';

interface ConfusingTabProps {
  onStartPractice: () => void;
}

export const ConfusingTab: React.FC<ConfusingTabProps> = ({ onStartPractice }) => {
  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2 border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Trọng Điểm Chống Mất Điểm Oan
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            10 Cặp Khái Niệm Dễ Lẫn Lộn Nhất & Đáp Án Chuẩn Đề Thi
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Được tổng hợp từ thống kê các câu thí sinh hay chọn nhầm nhất trong ngân hàng đề thi CNTT Cơ Bản
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            onStartPractice();
          }}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Luyện Trắc Nghiệm Các Câu Bẫy Này</span>
        </button>
      </div>

      {/* Special Highlights Alert Box */}
      <div className="bg-gradient-to-r from-rose-50 to-amber-50 border-2 border-rose-300 rounded-2xl p-5 text-rose-950 space-y-2">
        <div className="flex items-center gap-2 font-black text-sm text-rose-900">
          <Sparkles className="w-4 h-4 text-rose-600" />
          LƯU Ý ĐẶC BIỆT: BỘ 4 CÂU ĐỀ THI ĐÃ HIỆU CHỈNH ĐÁP ÁN CHUẨN XÁC
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
          <div className="bg-white/80 p-3 rounded-xl border border-rose-200 space-y-1">
            <div className="font-bold text-rose-900">• Câu 47: Đáp án D</div>
            <p className="text-slate-700 leading-relaxed">
              Phát biểu <i>"Phần mềm nguồn mở công bố một phần mã nguồn..."</i> là <b>CHƯA ĐÚNG</b> (phần mềm nguồn mở phải công bố toàn bộ mã nguồn).
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-rose-200 space-y-1">
            <div className="font-bold text-rose-900">• Câu 114: Đáp án A</div>
            <p className="text-slate-700 leading-relaxed">
              Website là: <b>Kết hợp nhiều trang Web trên nhiều địa chỉ khác nhau</b>.
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-rose-200 space-y-1">
            <div className="font-bold text-rose-900">• Câu 188: Đáp án D</div>
            <p className="text-slate-700 leading-relaxed">
              Trong Word, câu phát biểu sai là: <b>"Có thể làm việc với bảng tính như trong Excel"</b>.
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-rose-200 space-y-1">
            <div className="font-bold text-rose-900">• Câu 275: Đáp án C</div>
            <p className="text-slate-700 leading-relaxed">
              Trong PowerPoint, câu phát biểu sai là: <b>"Có thể thiết lập các thông số như thời gian bắt đầu, sự kiện bắt đầu..."</b>.
            </p>
          </div>
        </div>
      </div>

      {/* 10 Pairs Cards */}
      <div className="space-y-4">
        {CONFUSING_PAIRS.map((pair) => (
          <div
            key={pair.id}
            className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-xs space-y-3.5 hover:shadow-md transition"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-black text-xs flex items-center justify-center flex-shrink-0">
                {pair.id}
              </span>
              <h3 className="text-sm md:text-base font-bold text-slate-900">
                {pair.title}
              </h3>
            </div>

            {/* Side-by-side comparison grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Item A */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 space-y-1 text-xs">
                <div className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {pair.itemA.name}
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {pair.itemA.description}
                </p>
              </div>

              {/* Item B */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-1 text-xs">
                <div className="font-bold text-amber-950 text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  {pair.itemB.name}
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {pair.itemB.description}
                </p>
              </div>
            </div>

            {/* Key takeaway */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-start gap-2 text-xs text-slate-700">
              <span className="font-extrabold text-blue-900 flex-shrink-0">🔑 Chìa khóa ghi nhớ:</span>
              <span className="font-medium">{pair.keyTakeaway}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Practice CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => {
            soundEngine.playClick();
            onStartPractice();
          }}
          className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-lg transition cursor-pointer inline-flex items-center gap-2"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>Luyện Trắc Nghiệm Các Câu Bẫy Này Ngay</span>
        </button>
      </div>
    </div>
  );
};
