import React from 'react';
import { Home, Layers, Keyboard, Calculator, AlertTriangle, History } from 'lucide-react';
import { TabType } from '../types';
import { soundEngine } from '../utils/audio';

interface NavigationProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  examInProgress: boolean;
  historyCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onTabChange,
  examInProgress,
  historyCount,
}) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Trang Chủ & Luyện Tập', icon: Home },
    { id: 'flashcards' as TabType, label: 'Thẻ Ghi Nhớ (Flashcard)', icon: Layers, badge: 'Mới' },
    { id: 'shortcuts' as TabType, label: 'Bảng Phím Tắt', icon: Keyboard },
    { id: 'formulas' as TabType, label: 'Bảng Công Thức', icon: Calculator },
    { id: 'confuse' as TabType, label: '10 Cặp Dễ Lẫn Lộn', icon: AlertTriangle, badge: 'Bẫy thi' },
    { id: 'history' as TabType, label: 'Lịch Sử Làm Bài', icon: History, count: historyCount },
  ];

  const handleTabClick = (tabId: TabType) => {
    if (examInProgress && currentTab === 'home' && tabId !== 'home') {
      const confirmLeave = window.confirm(
        'Bạn đang trong bài thi. Chuyển sang tab khác có thể làm gián đoạn thời gian làm bài. Bạn có muốn tiếp tục?'
      );
      if (!confirmLeave) return;
    }
    soundEngine.playClick();
    onTabChange(tabId);
  };

  return (
    <div className="bg-white border-b border-slate-200 sticky top-[65px] z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none py-1.5" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-800 border-b-2 border-blue-600 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                    {tab.badge}
                  </span>
                )}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-slate-200 text-slate-700">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
