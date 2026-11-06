import React from 'react';
import { Printer, HardDrive, Disc, CheckCircle, Folder, HelpCircle } from 'lucide-react';

interface QuestionDiagramProps {
  type?: 'printer' | 'harddrive' | 'optical';
}

export const QuestionDiagram: React.FC<QuestionDiagramProps> = ({ type }) => {
  if (!type) return null;

  if (type === 'printer') {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 my-2.5">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>🖼️ Hình minh họa: Cửa sổ Quản lý Máy in (Printers & Faxes)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* Printer 1 */}
          <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center text-center relative shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center mb-1.5 border border-slate-300">
              1
            </span>
            <Printer className="w-8 h-8 text-slate-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 leading-tight">CutePDF Writer</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Máy in ảo PDF</span>
          </div>

          {/* Printer 2 - Default */}
          <div className="bg-emerald-50/70 p-3 rounded-lg border-2 border-emerald-500 flex flex-col items-center text-center relative shadow-xs ring-1 ring-emerald-400/50">
            <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-emerald-600 text-white text-[9px] font-black shadow-2xs">
              <CheckCircle className="w-3 h-3" />
              <span>Default</span>
            </div>
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center mb-1.5 shadow-2xs">
              2
            </span>
            <Printer className="w-8 h-8 text-emerald-700 mb-1" />
            <span className="text-xs font-bold text-emerald-950 leading-tight">
              HP LaserJet 4250 PCL 6
            </span>
            <span className="text-[10px] font-bold text-emerald-700 mt-0.5">
              (Có dấu tích xanh ✓)
            </span>
          </div>

          {/* Printer 3 */}
          <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center text-center relative shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center mb-1.5 border border-slate-300">
              3
            </span>
            <Printer className="w-8 h-8 text-slate-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Microsoft Office Doc...
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">Image Writer</span>
          </div>

          {/* Printer 4 */}
          <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center text-center relative shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-black flex items-center justify-center mb-1.5 border border-slate-300">
              4
            </span>
            <Printer className="w-8 h-8 text-slate-600 mb-1" />
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Microsoft XPS Document
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">XPS Writer</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'harddrive') {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 my-2.5">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>🖼️ Hình minh họa: Danh sách các ổ đĩa trong My Computer</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {/* Floppy */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-500">
            <span className="text-xl mb-1">💾</span>
            <span className="text-xs font-bold text-slate-700">3½ Floppy</span>
            <span className="text-[11px] font-mono text-slate-500">(A:)</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Đĩa mềm</span>
          </div>

          {/* Drive C */}
          <div className="bg-blue-50/80 p-2.5 rounded-lg border border-blue-300 flex flex-col items-center text-center text-blue-900 shadow-2xs">
            <HardDrive className="w-6 h-6 text-blue-700 mb-1" />
            <span className="text-xs font-extrabold text-blue-950">Local Disk</span>
            <span className="text-[11px] font-mono font-bold text-blue-800">(C:)</span>
            <span className="text-[9px] font-bold text-blue-700 mt-0.5">Ổ cứng 1</span>
          </div>

          {/* Drive D */}
          <div className="bg-blue-50/80 p-2.5 rounded-lg border border-blue-300 flex flex-col items-center text-center text-blue-900 shadow-2xs">
            <HardDrive className="w-6 h-6 text-blue-700 mb-1" />
            <span className="text-xs font-extrabold text-blue-950">DATA</span>
            <span className="text-[11px] font-mono font-bold text-blue-800">(D:)</span>
            <span className="text-[9px] font-bold text-blue-700 mt-0.5">Ổ cứng 2</span>
          </div>

          {/* DVD E */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-500">
            <Disc className="w-6 h-6 text-amber-600 mb-1" />
            <span className="text-xs font-bold text-slate-700">DVD-RAM</span>
            <span className="text-[11px] font-mono text-slate-500">(E:)</span>
            <span className="text-[9px] text-amber-700 mt-0.5">Ổ quang</span>
          </div>

          {/* Drive F */}
          <div className="bg-blue-50/80 p-2.5 rounded-lg border border-blue-300 flex flex-col items-center text-center text-blue-900 shadow-2xs">
            <HardDrive className="w-6 h-6 text-blue-700 mb-1" />
            <span className="text-xs font-extrabold text-blue-950">Data 2</span>
            <span className="text-[11px] font-mono font-bold text-blue-800">(F:)</span>
            <span className="text-[9px] font-bold text-blue-700 mt-0.5">Ổ cứng 3</span>
          </div>

          {/* DVD G */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-500">
            <Disc className="w-6 h-6 text-amber-600 mb-1" />
            <span className="text-xs font-bold text-slate-700">DVD Drive</span>
            <span className="text-[11px] font-mono text-slate-500">(G:)</span>
            <span className="text-[9px] text-amber-700 mt-0.5">Ổ quang</span>
          </div>

          {/* Shared */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-500">
            <Folder className="w-6 h-6 text-yellow-600 mb-1" />
            <span className="text-xs font-bold text-slate-700">Shared</span>
            <span className="text-[11px] text-slate-500">Documents</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Thư mục</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'optical') {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 my-2.5">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>🖼️ Hình minh họa: Các ổ đĩa trong máy tính</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {/* Floppy */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-500">
            <span className="text-xl mb-1">💾</span>
            <span className="text-xs font-bold text-slate-700">3½ Floppy</span>
            <span className="text-[11px] font-mono text-slate-500">(A:)</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Ổ đĩa mềm</span>
          </div>

          {/* Drive C */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-700">
            <HardDrive className="w-6 h-6 text-slate-600 mb-1" />
            <span className="text-xs font-bold">Local Disk</span>
            <span className="text-[11px] font-mono text-slate-500">(C:)</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Ổ đĩa cứng</span>
          </div>

          {/* Drive D */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-700">
            <HardDrive className="w-6 h-6 text-slate-600 mb-1" />
            <span className="text-xs font-bold">DATA</span>
            <span className="text-[11px] font-mono text-slate-500">(D:)</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Ổ đĩa cứng</span>
          </div>

          {/* DVD E - OPTICAL */}
          <div className="bg-amber-50/80 p-2.5 rounded-lg border-2 border-amber-500 flex flex-col items-center text-center text-amber-950 shadow-xs ring-1 ring-amber-400/40">
            <Disc className="w-6 h-6 text-amber-600 mb-1 animate-spin-slow" />
            <span className="text-xs font-extrabold text-amber-950">DVD-RAM Drive</span>
            <span className="text-[11px] font-mono font-bold text-amber-900">(E:)</span>
            <span className="text-[9px] font-extrabold text-amber-800 mt-0.5">
              💿 Ổ đĩa quang
            </span>
          </div>

          {/* Drive F */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col items-center text-center text-slate-700">
            <HardDrive className="w-6 h-6 text-slate-600 mb-1" />
            <span className="text-xs font-bold">Data 2</span>
            <span className="text-[11px] font-mono text-slate-500">(F:)</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Ổ đĩa cứng</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
