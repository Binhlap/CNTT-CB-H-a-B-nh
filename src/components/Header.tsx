import React from 'react';
import { Volume2, VolumeX, Clock, Award, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  isExamMode: boolean;
  timeLeft: number;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  isExamMode,
  timeLeft,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isWarning = isExamMode && timeLeft <= 300; // <= 5 minutes

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-md border-b border-blue-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Program title and author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shadow-inner flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-tight text-white line-clamp-1 md:line-clamp-none">
              Chương trình ôn thi Chứng chỉ ứng dụng CNTT cơ bản
            </h1>
            <div className="flex items-center gap-2 mt-0.5 text-xs text-blue-200">
              <span className="inline-flex items-center gap-1 font-semibold text-yellow-300">
                <Award className="w-3.5 h-3.5" />
                Người phát triển: Hòa Bình
              </span>
              <span className="text-blue-400">•</span>
              <span className="hidden sm:inline text-blue-200/90">Chuẩn theo Thông tư 03/2014/TT-BTTTT</span>
            </div>
          </div>
        </div>

        {/* Right: Actions (Sound, Timer) */}
        <div className="flex items-center gap-2.5">
          {/* Exam Timer Display */}
          {isExamMode && (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-sm md:text-base font-extrabold tracking-wider transition-all duration-300 shadow-sm ${
                isWarning
                  ? 'bg-rose-50 text-rose-700 border-2 border-rose-500 animate-pulse'
                  : 'bg-white text-blue-950 border border-blue-200'
              }`}
              title="Thời gian làm bài còn lại"
            >
              <Clock className={`w-4 h-4 ${isWarning ? 'text-rose-600 animate-spin' : 'text-blue-600'}`} />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              soundEngine.playClick();
            }}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-xs font-semibold text-white transition cursor-pointer backdrop-blur-sm"
            title={soundEnabled ? 'Bấm để tắt âm thanh thông báo' : 'Bấm để bật âm thanh thông báo'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-300" />
                <span>Âm thanh: Bật</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-300" />
                <span className="text-slate-200">Âm thanh: Tắt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
