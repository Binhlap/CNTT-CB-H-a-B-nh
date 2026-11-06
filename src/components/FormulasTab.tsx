import React, { useState } from 'react';
import { Search, Calculator, Play, X, Filter } from 'lucide-react';
import { FORMULAS_DATA, FormulaItem } from '../data/studyData';
import { soundEngine } from '../utils/audio';
import { normalizeVietnamese } from '../utils/text';

interface FormulasTabProps {
  onStartPractice: () => void;
}

export const FormulasTab: React.FC<FormulasTabProps> = ({ onStartPractice }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hàm tính toán', 'Hàm logic', 'Hàm chuỗi & ngày', 'Mã lỗi & Địa chỉ'];

  const quickKeywords = [
    { label: 'SUMIF (Tính tổng điều kiện)', query: 'SUMIF' },
    { label: 'VLOOKUP (Dò tìm cột)', query: 'VLOOKUP' },
    { label: 'COUNT vs COUNTA', query: 'COUNT' },
    { label: 'TODAY vs NOW', query: 'TODAY' },
    { label: 'ROUND (Làm tròn -3)', query: 'ROUND' },
    { label: 'MOD (Phần dư)', query: 'MOD' },
    { label: '##### (Cột hẹp)', query: '#####' },
    { label: '#NAME? (Sai tên)', query: '#NAME?' },
    { label: '#VALUE! (Sai kiểu)', query: '#VALUE!' },
    { label: '$A3$ (Cú pháp sai)', query: '$A3$' },
  ];

  const filteredFormulas = FORMULAS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchTerm.trim()) return true;

    const termNorm = normalizeVietnamese(searchTerm);
    const nameNorm = normalizeVietnamese(item.name);
    const descNorm = normalizeVietnamese(item.description);
    const syntaxNorm = normalizeVietnamese(item.syntax);
    const exampleNorm = normalizeVietnamese(item.example);
    const notesNorm = item.notes ? normalizeVietnamese(item.notes) : '';
    const catNorm = normalizeVietnamese(item.category);

    return (
      nameNorm.includes(termNorm) ||
      descNorm.includes(termNorm) ||
      syntaxNorm.includes(termNorm) ||
      exampleNorm.includes(termNorm) ||
      notesNorm.includes(termNorm) ||
      catNorm.includes(termNorm)
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold mb-2 border border-indigo-200">
            <Calculator className="w-3.5 h-3.5 text-indigo-600" />
            Tra Cứu Nhanh Công Thức, Hàm & Mã Lỗi Excel
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Bảng Công Thức & Phân Tích Mã Lỗi MS Excel
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Tra cứu nhanh cú pháp, ví dụ minh họa và nguyên nhân mã lỗi theo tên hàm hoặc nội dung mô tả
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            onStartPractice();
          }}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Luyện Trắc Nghiệm Công Thức Ngay</span>
        </button>
      </div>

      {/* Prominent Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        {/* Search Input Box */}
        <div>
          <label htmlFor="formula-search" className="block text-xs font-bold text-slate-700 mb-1.5">
            🔍 Lọc nhanh theo tên hàm, công thức hoặc nội dung mô tả:
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="formula-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nhập tên hàm (SUMIF, VLOOKUP, COUNT, ROUND, MOD...) hoặc mô tả (tính tổng, làm tròn, mã lỗi, ngày tháng...)"
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 bg-slate-50/70 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 transition shadow-inner"
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
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-300 border border-slate-200 text-slate-700 transition cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Category Filter Tabs & Result Count */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Phân loại:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  soundEngine.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'Tất cả' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Hiển thị: <b className="text-indigo-700">{filteredFormulas.length}</b> / {FORMULAS_DATA.length} công thức & mã lỗi
          </div>
        </div>
      </div>

      {/* Formulas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 hover:border-indigo-400 hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-black text-base text-indigo-950 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                  {item.name}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  {item.category}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 overflow-x-auto">
                <span className="text-slate-400 mr-1.5 font-bold">Cú pháp:</span>
                <span className="text-indigo-900 font-bold">{item.syntax}</span>
              </div>

              <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-2.5">
                <span className="font-bold text-amber-900 block mb-0.5">Ví dụ đề thi:</span>
                <code className="text-slate-800 font-mono block whitespace-pre-wrap">
                  {item.example}
                </code>
                {item.result && (
                  <div className="mt-1 text-[11px] text-emerald-800 font-bold">
                    ➔ Kết quả: {item.result}
                  </div>
                )}
              </div>

              {item.notes && (
                <div className="text-[11px] text-slate-500 italic">
                  💡 {item.notes}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center space-y-3">
          <div className="text-slate-400 text-3xl">🔍</div>
          <div className="text-sm font-bold text-slate-700">
            Không tìm thấy công thức hoặc mã lỗi phù hợp với từ khóa "{searchTerm}"
          </div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Thử tìm kiếm với tên hàm (IF, SUM, COUNT, ROUND, MOD) hoặc bấm nút bên dưới để xóa bộ lọc.
          </p>
          <button
            onClick={handleClearSearch}
            className="px-4 py-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-bold transition cursor-pointer"
          >
            Xóa bộ lọc tìm kiếm
          </button>
        </div>
      )}
    </div>
  );
};
