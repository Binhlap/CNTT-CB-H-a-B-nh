import { Question } from './data/questions';

export type TabType = 'home' | 'flashcards' | 'shortcuts' | 'formulas' | 'confuse' | 'history';

export type QuizMode = 'exam' | 'practice';

export type QuizCategory = 'all' | 'shortcut' | 'formula' | 'confuse' | 'bookmarks' | `module_${number}`;

export interface QuizState {
  isActive: boolean;
  mode: QuizMode;
  category: QuizCategory;
  categoryTitle: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number>; // questionId -> optionIndex
  isSubmitted: boolean;
  timeLeft: number; // in seconds
  totalTime: number; // in seconds
  startTime: number;
  endTime?: number;
}

export interface ExamHistoryItem {
  id: string;
  date: string;
  mode: QuizMode;
  categoryTitle: string;
  score: number;
  totalQuestions: number;
  percent: number;
  timeSpentSeconds: number;
  isPassed: boolean;
  answers: Record<number, number>;
  questions: Question[];
}
