import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS, Question } from './data/questions';
import { MODULES_INFO } from './data/studyData';
import { soundEngine } from './utils/audio';
import { TabType, QuizMode, QuizCategory, QuizState, ExamHistoryItem } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { ShortcutsTab } from './components/ShortcutsTab';
import { FormulasTab } from './components/FormulasTab';
import { ConfusingTab } from './components/ConfusingTab';
import { HistoryTab } from './components/HistoryTab';
import { FlashcardsTab } from './components/FlashcardsTab';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(soundEngine.isEnabled());
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [reviewingPastExam, setReviewingPastExam] = useState<ExamHistoryItem | null>(null);

  // LocalStorage state for Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('cntt_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // LocalStorage state for Exam History
  const [examHistory, setExamHistory] = useState<ExamHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('cntt_exam_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toastTimeoutRef = useRef<number | null>(null);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleSound = () => {
    const newState = soundEngine.toggle();
    setSoundEnabled(newState);
    showToast(newState ? '🔊 Âm thanh thông báo: ĐANG BẬT' : '🔇 Âm thanh thông báo: ĐÃ TẮT');
  };

  const handleToggleBookmark = (questionId: number) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      localStorage.setItem('cntt_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  // Timer countdown for exam mode
  useEffect(() => {
    if (!quizState || !quizState.isActive || quizState.mode !== 'exam' || quizState.isSubmitted) {
      return;
    }

    const timer = setInterval(() => {
      setQuizState((prev) => {
        if (!prev || !prev.isActive || prev.isSubmitted) return prev;
        const newTime = prev.timeLeft - 1;

        // Sound & Toast Reminders at milestone minutes
        if (newTime === 20 * 60) {
          soundEngine.playReminderChime();
          showToast('⏰ Nhắc nhở: Thời gian làm bài còn 20 phút!');
        } else if (newTime === 10 * 60) {
          soundEngine.playReminderChime();
          showToast('⏰ Nhắc nhở: Thời gian làm bài còn 10 phút!');
        } else if (newTime === 5 * 60) {
          soundEngine.playUrgentBeep();
          showToast('⚠️ Cảnh báo: Chỉ còn 5 phút cuối cùng!');
        } else if (newTime === 60) {
          soundEngine.playUrgentBeep();
          showToast('⚠️ Cảnh báo: Chỉ còn 1 phút!');
        }

        if (newTime <= 0) {
          clearInterval(timer);
          // Auto submit
          setTimeout(() => handleSubmitExam(), 0);
          return { ...prev, timeLeft: 0 };
        }

        return { ...prev, timeLeft: newTime };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState?.isActive, quizState?.mode, quizState?.isSubmitted]);

  // Start Quiz Handler
  const handleStartQuiz = (mode: QuizMode, category: QuizCategory, limit?: number) => {
    setReviewingPastExam(null);
    let pool: Question[] = [...QUESTIONS];
    let title = 'Tất cả câu hỏi';

    if (category === 'shortcut') {
      pool = pool.filter((q) => q.isShortcut);
      title = 'Trắc Nghiệm Phím Tắt';
    } else if (category === 'formula') {
      pool = pool.filter((q) => q.isFormula);
      title = 'Công Thức & Hàm MS Excel';
    } else if (category === 'confuse') {
      pool = pool.filter((q) => q.isConfusing || [47, 114, 188, 275].includes(q.num));
      title = 'Nhóm Câu Bẫy / Dễ Lẫn Lộn';
    } else if (category === 'bookmarks') {
      pool = pool.filter((q) => bookmarkedIds.includes(q.id));
      title = 'Câu Hỏi Đã Đánh Dấu Lưu Ý';
    } else if (category.startsWith('module_')) {
      const modId = parseInt(category.replace('module_', ''), 10);
      const mod = MODULES_INFO.find((m) => m.id === modId);
      pool = pool.filter((q) => q.moduleNumber === modId);
      title = mod ? `${mod.code}: ${mod.name}` : `Modul ${modId}`;
    } else if (mode === 'exam') {
      title = 'Đề Thi Thử Chuẩn (60 Câu - 30 Phút)';
    }

    if (limit && limit > 0 && pool.length > limit) {
      // Random shuffle selection
      pool = [...pool].sort(() => Math.random() - 0.5).slice(0, limit);
    } else if (mode === 'exam') {
      pool = [...pool].sort(() => Math.random() - 0.5);
    }

    const durationSeconds = mode === 'exam' ? 30 * 60 : 0;

    setQuizState({
      isActive: true,
      mode,
      category,
      categoryTitle: title,
      questions: pool,
      currentIndex: 0,
      userAnswers: {},
      isSubmitted: false,
      timeLeft: durationSeconds,
      totalTime: durationSeconds,
      startTime: Date.now(),
    });

    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(
      mode === 'exam'
        ? 'Đã bắt đầu bài thi thử 60 câu! Thời gian 30 phút.'
        : 'Chế độ ôn luyện: Bấm chọn câu nào sẽ biết ngay kết quả!'
    );
  };

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    setQuizState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionId]: optionIndex,
        },
      };
    });
  };

  const handleSubmitExam = () => {
    if (!quizState) return;

    let correctCount = 0;
    quizState.questions.forEach((q) => {
      if (quizState.userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const timeSpent = Math.max(1, Math.round((Date.now() - quizState.startTime) / 1000));
    const percent = Math.round((correctCount / quizState.questions.length) * 100);
    const isPassed = percent >= 50;

    // Save to Exam History if it's an exam mode
    if (quizState.mode === 'exam') {
      const historyItem: ExamHistoryItem = {
        id: `exam_${Date.now()}`,
        date: new Date().toLocaleString('vi-VN', {
          dateStyle: 'short',
          timeStyle: 'short',
        }),
        mode: 'exam',
        categoryTitle: quizState.categoryTitle,
        score: correctCount,
        totalQuestions: quizState.questions.length,
        percent,
        timeSpentSeconds: timeSpent,
        isPassed,
        answers: quizState.userAnswers,
        questions: quizState.questions,
      };

      const updatedHistory = [historyItem, ...examHistory].slice(0, 30); // keep last 30
      setExamHistory(updatedHistory);
      localStorage.setItem('cntt_exam_history', JSON.stringify(updatedHistory));
    }

    setQuizState((prev) => (prev ? { ...prev, isSubmitted: true, endTime: Date.now() } : null));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitQuiz = () => {
    if (quizState?.mode === 'exam' && !quizState.isSubmitted) {
      const confirm = window.confirm(
        'Bạn đang trong bài thi. Nếu thoát bây giờ bài làm sẽ không được lưu. Bạn có muốn thoát?'
      );
      if (!confirm) return;
    }
    soundEngine.playClick();
    setQuizState(null);
    setReviewingPastExam(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    setExamHistory([]);
    localStorage.removeItem('cntt_exam_history');
    showToast('Đã xóa toàn bộ lịch sử thi thử');
  };

  const handleReviewPastExam = (item: ExamHistoryItem) => {
    setReviewingPastExam(item);
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm font-semibold border-l-4 border-blue-400 animate-in fade-in slide-in-from-top duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Header */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        isExamMode={Boolean(quizState && quizState.isActive && quizState.mode === 'exam' && !quizState.isSubmitted)}
        timeLeft={quizState?.timeLeft || 0}
      />

      {/* Navigation Tabs Bar */}
      <Navigation
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'home' && quizState?.isSubmitted) {
            setQuizState(null);
          }
          if (tab !== 'home' && reviewingPastExam) {
            setReviewingPastExam(null);
          }
        }}
        examInProgress={Boolean(quizState && quizState.isActive && !quizState.isSubmitted && quizState.mode === 'exam')}
        historyCount={examHistory.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-5 md:py-7">
        {/* TAB 1: HOME & QUIZ & RESULTS */}
        {currentTab === 'home' && (
          <>
            {/* 1. Reviewing a Past Exam from History */}
            {reviewingPastExam && (
              <ResultScreen
                score={reviewingPastExam.score}
                totalQuestions={reviewingPastExam.totalQuestions}
                timeSpentSeconds={reviewingPastExam.timeSpentSeconds}
                questions={reviewingPastExam.questions}
                userAnswers={reviewingPastExam.answers}
                onRetake={() => handleStartQuiz('exam', 'all', 60)}
                onHome={() => setReviewingPastExam(null)}
                onPracticeModule={(moduleId) => handleStartQuiz('practice', `module_${moduleId}` as QuizCategory)}
              />
            )}

            {/* 2. Just Completed Exam or Quiz Results */}
            {!reviewingPastExam && quizState?.isSubmitted && (
              <ResultScreen
                score={
                  quizState.questions.filter((q) => quizState.userAnswers[q.id] === q.correctIndex).length
                }
                totalQuestions={quizState.questions.length}
                timeSpentSeconds={
                  quizState.endTime
                    ? Math.round((quizState.endTime - quizState.startTime) / 1000)
                    : quizState.totalTime - quizState.timeLeft
                }
                questions={quizState.questions}
                userAnswers={quizState.userAnswers}
                onRetake={() => handleStartQuiz(quizState.mode, quizState.category, quizState.mode === 'exam' ? 60 : undefined)}
                onHome={() => setQuizState(null)}
                onPracticeModule={(moduleId) => handleStartQuiz('practice', `module_${moduleId}` as QuizCategory)}
              />
            )}

            {/* 3. In Progress Exam or Practice Quiz */}
            {!reviewingPastExam && quizState && !quizState.isSubmitted && (
              <QuizScreen
                mode={quizState.mode}
                categoryTitle={quizState.categoryTitle}
                questions={quizState.questions}
                userAnswers={quizState.userAnswers}
                onSelectAnswer={handleSelectAnswer}
                onSubmitExam={handleSubmitExam}
                onExitQuiz={handleExitQuiz}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={handleToggleBookmark}
              />
            )}

            {/* 4. Start Screen (Default) */}
            {!reviewingPastExam && !quizState && (
              <StartScreen
                onStartQuiz={handleStartQuiz}
                bookmarkedCount={bookmarkedIds.length}
                totalQuestionsCount={QUESTIONS.length}
                examHistory={examHistory}
                onNavigateTab={setCurrentTab}
              />
            )}
          </>
        )}

        {/* TAB 2: FLASHCARDS (ACTIVE RECALL) */}
        {currentTab === 'flashcards' && (
          <FlashcardsTab
            onStartQuizWithModule={(modNum) =>
              handleStartQuiz('practice', `module_${modNum}` as QuizCategory)
            }
          />
        )}

        {/* TAB 3: SHORTCUTS LOOKUP */}
        {currentTab === 'shortcuts' && (
          <ShortcutsTab onStartPractice={() => handleStartQuiz('practice', 'shortcut')} />
        )}

        {/* TAB 3: FORMULAS LOOKUP */}
        {currentTab === 'formulas' && (
          <FormulasTab onStartPractice={() => handleStartQuiz('practice', 'formula')} />
        )}

        {/* TAB 4: 10 CONFUSING PAIRS & TRAP QUESTIONS */}
        {currentTab === 'confuse' && (
          <ConfusingTab onStartPractice={() => handleStartQuiz('practice', 'confuse')} />
        )}

        {/* TAB 5: HISTORY & STATS */}
        {currentTab === 'history' && (
          <HistoryTab
            history={examHistory}
            onClearHistory={handleClearHistory}
            onReviewExam={handleReviewPastExam}
            onTakeExam={() => handleStartQuiz('exam', 'all', 60)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Chương trình ôn thi Chứng chỉ ứng dụng công nghệ thông tin cơ bản • Tác giả: <b>Hòa Bình</b>
          </div>
          <div className="text-[11px] text-slate-400">
            Ngân hàng câu hỏi chuẩn hóa • Chuông thông báo âm thanh nội vi Web Audio
          </div>
        </div>
      </footer>
    </div>
  );
}
