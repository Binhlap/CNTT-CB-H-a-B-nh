import React, { useState } from 'react';
import { Search, Keyboard, Play, Lightbulb, X, Filter } from 'lucide-react';
import { SHORTCUTS_DATA, ShortcutItem } from '../data/studyData';
import { soundEngine } from '../utils/audio';
import { normalizeVietnamese } from '../utils/text';

interface ShortcutsTabProps {
  onStartPractice: () => void;
}

export const ShortcutsTab: React.FC<ShortcutsTabProps> = ({ onStartPractice }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<string>('All');

  const appFilters = ['All', 'Windows', 'MS Word', 'MS Excel', 'MS PowerPoint'];

  const quickKeywords = [
    { label: 'F2 (Đổi tên)', query: 'F2' },
    { label: 'Shift + Delete (Xóa hẳn)', query: 'Shift Delete' },
    { label: 'Ctrl + Enter (Ngắt trang)', query: 'Ctrl Enter' },
    { label: 'Shift + Enter (Xuống dòng)', query: 'Shift Enter' },
    { label: 'Print Screen (Chụp ảnh)', query: 'Print Screen' },
    { label: 'F5 (Trình chiếu)', query: 'F5' },
    { label: 'Ctrl + Tab (Tab trong bảng)', query: 'Ctrl Tab' },
  ];

  const filteredShortcuts = SHORTCUTS_DATA.filter((item) => {
    const matchesApp = selectedApp === 'All' || item.app === selectedApp;
    if (!matchesApp) return false;

    if (!searchTerm.trim()) return true;

    const termNorm = normalizeVietnamese(searchTerm);
    const actionNorm = normalizeVietnamese(item.action);
    const noteNorm = item.note ? normalizeVietnamese(item.note) : '';
    const appNorm = normalizeVietnamese(item.app);
    const keysNorm = normalizeVietnamese(item.keys.join(' '));

    return (
      actionNorm.includes(termNorm) ||
      noteNorm.includes(termNorm) ||
      appNorm.includes(termNorm) ||
      keysNorm.includes(termNorm)
    );
  });

  const handleClearSearch = () => {
    setSearchTerm('');
    soundEngine.playClick();
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2 border border-emerald-200">
            <Keyboard className="w-3.5 h-3.5 text-emerald-600" />
            Tra Cứu Nhanh Phím Tắt Trọng Tâm Đề Thi
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Bảng Tổ Hợp Phím Tắt Windows & Microsoft Office
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Tra cứu nhanh tổ hợp phím và chức năng thao tác theo tên lệnh hoặc mô tả tác vụ
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            onStartPractice();
          }}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Luyện Trắc Nghiệm Phím Tắt Ngay</span>
        </button>
      </div>

      {/* Prominent Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        {/* Search Input Box */}
        <div>
          <label htmlFor="shortcut-search" className="block text-xs font-bold text-slate-700 mb-1.5">
            🔍 Lọc nhanh theo tên phím tắt hoặc mô tả tác vụ:
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="shortcut-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nhập tên phím (F2, Alt+Tab, Shift+Delete, Enter...) hoặc mô tả (đổi tên, ngắt trang, chụp màn hình, lưu...)"
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 bg-slate-50/70 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 transition shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
                title="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
          <span className="text-[11px] font-bold text-slate-500 mr-1">Gợi ý tìm nhanh:</span>
          {quickKeywords.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchTerm(chip.query);
                soundEngine.playClick();
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-slate-200 text-slate-700 transition cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* App Filter Tabs & Result Count */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Ứng dụng:
            </span>
            {appFilters.map((app) => (
              <button
                key={app}
                onClick={() => {
                  setSelectedApp(app);
                  soundEngine.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedApp === app
                    ? 'bg-emerald-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {app === 'All' ? 'Tất cả ứng dụng' : app}
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Hiển thị: <b className="text-emerald-700">{filteredShortcuts.length}</b> / {SHORTCUTS_DATA.length} phím tắt
          </div>
        </div>
      </div>

      {/* Shortcuts Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-700 font-bold">
                <th className="py-3 px-4 w-32">Ứng dụng</th>
                <th className="py-3 px-4 w-60">Tổ hợp phím</th>
                <th className="py-3 px-4">Chức năng & Tác vụ đề thi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredShortcuts.map((item, idx) => {
                let badgeColor = 'bg-slate-100 text-slate-700';
                if (item.app === 'Windows') badgeColor = 'bg-sky-100 text-sky-800 border border-sky-200';
                if (item.app === 'MS Word') badgeColor = 'bg-blue-100 text-blue-800 border border-blue-200';
                if (item.app === 'MS Excel') badgeColor = 'bg-emerald-100 text-emerald-800 border border-emerald-200';
                if (item.app === 'MS PowerPoint') badgeColor = 'bg-amber-100 text-amber-900 border border-amber-300';

                return (
                  <tr key={idx} className="hover:bg-emerald-50/20 transition">
                    <td className="py-3.5 px-4 font-semibold">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${badgeColor}`}>
                        {item.app}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.keys.map((k, kIdx) => (
                          <React.Fragment key={kIdx}>
                            <kbd className="px-2 py-1 rounded bg-slate-100 border border-slate-300 shadow-2xs font-mono font-bold text-slate-800 text-xs">
                              {k}
                            </kbd>
                            {kIdx < item.keys.length - 1 && (
                              <span className="text-slate-400 font-bold text-xs">+</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 leading-relaxed">
                      <div className="font-medium">{item.action}</div>
                      {item.note && (
                        <div className="text-[11px] text-amber-700 font-medium mt-0.5">
                          💡 Lưu ý: {item.note}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredShortcuts.length === 0 && (
          <div className="p-10 text-center space-y-3">
            <div className="text-slate-400 text-3xl">🔍</div>
            <div className="text-sm font-bold text-slate-700">
              Không tìm thấy phím tắt phù hợp với từ khóa "{searchTerm}"
            </div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Thử tìm kiếm với tên phím rút gọn (F2, Tab, Del, Shift, Enter) hoặc bấm nút bên dưới để xóa bộ lọc.
            </p>
            <button
              onClick={handleClearSearch}
              className="px-4 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition cursor-pointer"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          </div>
        )}
      </div>

      {/* Pro Tips Box */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-amber-950 text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          Mẹo làm bài thi trắc nghiệm về phím tắt:
        </div>
        <p className="leading-relaxed">
          • Phím ngắt: <b>Enter</b> tạo đoạn mới trong Word; <b>Shift + Enter</b> xuống dòng cùng đoạn; <b>Ctrl + Enter</b> ngắt trang Word; <b>Alt + Enter</b> xuống dòng trong cùng một ô Excel.<br />
          • Phím xóa: <b>Delete</b> bỏ vào thùng rác (khôi phục được); <b>Shift + Delete</b> xóa vĩnh viễn không qua thùng rác.<br />
          • Phím trình chiếu PowerPoint: <b>F5</b> bắt đầu từ slide 1; <b>Esc</b> dừng trình chiếu; <b>Ctrl + N</b> tạo file mới.
        </p>
      </div>
    </div>
  );
};
