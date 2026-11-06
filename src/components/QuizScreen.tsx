import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
  Send,
  HelpCircle,
  CheckCircle,
  XCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { Question } from '../data/questions';
import { QuizMode } from '../types';
import { soundEngine } from '../utils/audio';
import { QuestionDiagram } from './QuestionDiagram';

interface QuizScreenProps {
  mode: QuizMode;
  categoryTitle: string;
  questions: Question[];
  userAnswers: Record<number, number>;
  onSelectAnswer: (questionId: number, optionIndex: number) => void;
  onSubmitExam: () => void;
  onExitQuiz: () => void;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  mode,
  categoryTitle,
  questions,
  userAnswers,
  onSelectAnswer,
  onSubmitExam,
  onExitQuiz,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [paletteExpanded, setPaletteExpanded] = useState(true);

  const answeredCount = Object.keys(userAnswers).length;
  const totalCount = questions.length;
  const progressPercent = Math.round((answeredCount / totalCount) * 100);

  const handleOptionSelect = (q: Question, optIdx: number) => {
    // In practice mode, if already answered, don't re-select
    if (mode === 'practice' && userAnswers[q.id] !== undefined) {
      return;
    }

    onSelectAnswer(q.id, optIdx);

    if (mode === 'practice') {
      if (optIdx === q.correctIndex) {
        soundEngine.playCorrect();
      } else {
        soundEngine.playWrong();
      }
    } else {
      soundEngine.playClick();
    }
  };

  const scrollToQuestion = (idx: number) => {
    const el = document.getElementById(`question-card-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleConfirmSubmit = () => {
    if (answeredCount < totalCount) {
      const confirm = window.confirm(
        `Bạn mới hoàn thành ${answeredCount}/${totalCount} câu hỏi. Vẫn còn ${
          totalCount - answeredCount
        } câu chưa trả lời. Bạn có chắc chắn muốn nộp bài thi ngay?`
      );
      if (!confirm) return;
    } else {
      const confirm = window.confirm(
        `Bạn đã trả lời đầy đủ ${totalCount}/${totalCount} câu hỏi! Bạn muốn nộp bài để xem kết quả đánh giá?`
      );
      if (!confirm) return;
    }
    onSubmitExam();
  };

  return (
    <div className="space-y-5 pb-12">
      {/* Top Bar: Title & Exit */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onExitQuiz}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            title="Trở về trang chủ"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Thoát</span>
          </button>
          <div>
            <h2 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
              <span>{categoryTitle}</span>
              <span className="px-2 py-0.5 text-[11px] font-extrabold rounded-md bg-blue-100 text-blue-800">
                {mode === 'exam' ? 'Thi Thử (30 Phút)' : 'Luyện Tập Tức Thì'}
              </span>
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Đã làm: <b className="text-blue-700">{answeredCount}</b> / {totalCount} câu ({progressPercent}%)
            </div>
          </div>
        </div>

        {mode === 'exam' && (
          <button
            onClick={handleConfirmSubmit}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-xs md:text-sm shadow-sm transition cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-4 h-4" />
            <span>Nộp Bài Thi</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Palette Navigation Box */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          onClick={() => setPaletteExpanded(!paletteExpanded)}
          className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-700 transition cursor-pointer border-b border-slate-200"
        >
          <span className="flex items-center gap-2">
            <span>📋 Danh sách câu hỏi ({totalCount} câu)</span>
            <span className="text-[11px] font-normal text-slate-500">
              (Bấm số câu để chuyển nhanh đến vị trí câu đó)
            </span>
          </span>
          {paletteExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {paletteExpanded && (
          <div className="p-3 bg-slate-50/60 max-h-48 overflow-y-auto">
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-1.5">
              {questions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === q.correctIndex;
                const isBookmarked = bookmarkedIds.includes(q.id);

                let btnClass = 'bg-white text-slate-700 border-slate-200 hover:border-blue-400';

                if (mode === 'exam') {
                  if (isAnswered) {
                    btnClass = 'bg-blue-600 text-white border-blue-600 font-bold';
                  }
                } else {
                  if (isAnswered) {
                    btnClass = isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                      : 'bg-rose-600 text-white border-rose-600 font-bold';
                  }
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => scrollToQuestion(idx)}
                    className={`relative h-8 rounded-md border text-xs font-semibold flex items-center justify-center transition cursor-pointer shadow-2xs ${btnClass}`}
                    title={`Câu ${idx + 1}`}
                  >
                    {idx + 1}
                    {isBookmarked && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const userChoice = userAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isBookmarked = bookmarkedIds.includes(q.id);
          const isPractice = mode === 'practice';
          const isCorrect = isAnswered && userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              id={`question-card-${idx}`}
              className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-xs space-y-4 transition-all"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-blue-100 text-blue-900">
                      Câu {idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600">
                      {q.moduleName}
                    </span>
                    {q.isShortcut && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Phím tắt
                      </span>
                    )}
                    {q.isFormula && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                        Hàm & Công thức
                      </span>
                    )}
                    {q.isConfusing && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300">
                        Câu dễ lẫn / bẫy
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900 leading-relaxed pt-1">
                    {q.text}
                  </h3>
                </div>

                {/* Bookmark Toggle */}
                <button
                  onClick={() => onToggleBookmark(q.id)}
                  className={`p-2 rounded-lg transition cursor-pointer flex-shrink-0 ${
                    isBookmarked
                      ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                  }`}
                  title={isBookmarked ? 'Bỏ lưu ý câu này' : 'Đánh dấu lưu ý câu này'}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-5 h-5 fill-amber-500 text-amber-600" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Diagram if available */}
              <QuestionDiagram type={q.diagramType} />

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((optText, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isSelected = userChoice === optIdx;

                  let optClass = 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 text-slate-800';

                  if (mode === 'exam') {
                    if (isSelected) {
                      optClass = 'bg-blue-50/90 border-blue-600 text-blue-900 font-semibold ring-1 ring-blue-600';
                    }
                  } else {
                    // Practice Mode
                    if (isAnswered) {
                      if (optIdx === q.correctIndex) {
                        optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-1 ring-emerald-500';
                      } else if (isSelected && !isCorrect) {
                        optClass = 'bg-rose-50 border-rose-500 text-rose-900 ring-1 ring-rose-500 line-through';
                      } else {
                        optClass = 'bg-slate-50/60 border-slate-200 text-slate-500 opacity-60';
                      }
                    } else if (isSelected) {
                      optClass = 'bg-blue-50 border-blue-600 text-blue-900 font-semibold';
                    }
                  }

                  return (
                    <label
                      key={optIdx}
                      onClick={() => handleOptionSelect(q, optIdx)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs md:text-sm transition-all cursor-pointer ${optClass}`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        checked={isSelected}
                        onChange={() => {}}
                        disabled={isPractice && isAnswered}
                        className="mt-0.5 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="flex-1 leading-relaxed">
                        <span className="font-bold mr-1.5">{letter}.</span>
                        {optText}
                      </span>
                      {isPractice && isAnswered && optIdx === q.correctIndex && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      )}
                      {isPractice && isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                    </label>
                  );
                })}
              </div>

              {/* Practice Mode Explanation Box */}
              {isPractice && isAnswered && (
                <div
                  className={`p-4 rounded-xl text-xs md:text-sm border-l-4 leading-relaxed ${
                    isCorrect
                      ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950'
                      : 'bg-rose-50/80 border-rose-500 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Chính xác!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span className="text-rose-700">Chưa chính xác!</span>
                      </>
                    )}
                  </div>
                  <div>
                    Đáp án đúng là:{' '}
                    <b className="text-emerald-800">
                      {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                    </b>
                  </div>
                  {!isCorrect && (
                    <div className="text-xs text-rose-700 mt-0.5">
                      Bạn đã chọn: {String.fromCharCode(65 + userChoice)}. {q.options[userChoice]}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit button at bottom */}
      {mode === 'exam' && (
        <div className="text-center pt-6">
          <button
            onClick={handleConfirmSubmit}
            className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-lg transition cursor-pointer inline-flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span>Nộp Bài Thi Ngay ({answeredCount}/{totalCount} câu)</span>
          </button>
        </div>
      )}
    </div>
  );
};
