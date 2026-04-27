import { ReactNode, useState } from 'react';
import { UtensilsCrossed, FileQuestion, Grid2X2, ShieldAlert, Calendar } from 'lucide-react';
import { ViewState } from '../App';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
  userName: string;
  exp: number;
  rank: string;
  joinDate?: string;
  onResetProfile?: () => void;
}

export default function Layout({ children, currentView, navigateTo, userName, exp, rank, joinDate, onResetProfile }: LayoutProps) {
  const [showRefs, setShowRefs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-200 font-sans text-slate-900 overflow-hidden relative">
      <header className="bg-slate-900 h-16 sm:h-14 shadow-lg sticky top-0 z-10 shrink-0">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 h-full flex items-center justify-between w-full">
          <div 
            className="flex flex-col sm:flex-row sm:items-center sm:gap-2 cursor-pointer shrink-0"
            onClick={() => navigateTo('HOME')}
          >
            <h1 className="text-white font-bold text-sm sm:text-lg tracking-tight leading-tight">S.W.A.P</h1>
            <span className="text-emerald-400 font-bold text-xs sm:text-lg tracking-tight leading-tight">FORCE</span>
          </div>
          
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto hide-scrollbar mx-2 sm:mx-4 py-1">
            <button 
              onClick={() => navigateTo('QUIZ')}
              className={`p-2 lg:px-2.5 lg:py-1.5 rounded-md flex items-center gap-1.5 text-xs font-semibold lg:text-sm transition-colors whitespace-nowrap shrink-0 ${currentView === 'QUIZ' || currentView === 'RESULT' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <FileQuestion size={18} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Khảo sát</span>
            </button>
            <button 
              onClick={() => navigateTo('AMBUSH')}
              className={`p-2 lg:px-2.5 lg:py-1.5 rounded-md flex items-center gap-1.5 text-xs font-semibold lg:text-sm transition-colors whitespace-nowrap shrink-0 ${currentView === 'AMBUSH' ? 'bg-rose-500/20 text-rose-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <ShieldAlert size={18} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Phục kích</span>
            </button>
            <button 
              onClick={() => navigateTo('MATRIX')}
              className={`p-2 lg:px-2.5 lg:py-1.5 rounded-md flex items-center gap-1.5 text-xs font-semibold lg:text-sm transition-colors whitespace-nowrap shrink-0 ${currentView === 'MATRIX' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Grid2X2 size={18} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Biến hình</span>
            </button>
            <button 
              onClick={() => navigateTo('DAILY_PLAN')}
              className={`p-2 lg:px-2.5 lg:py-1.5 rounded-md flex items-center gap-1.5 text-xs font-semibold lg:text-sm transition-colors whitespace-nowrap shrink-0 ${currentView === 'DAILY_PLAN' ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <Calendar size={18} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Kế hoạch</span>
            </button>
          </nav>

          {userName && (
            <div className="relative">
              <div 
                className="flex flex-col items-end shrink-0 pl-2 lg:pl-3 border-l border-slate-700 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowProfile(!showProfile)}
              >
                <span className="text-white text-[10px] lg:text-xs font-bold leading-tight flex items-center gap-1"><span className="text-emerald-400">★</span> <span className="hidden lg:inline">{rank}</span> {userName}</span>
                <span className="text-slate-400 text-[9px] lg:text-[10px] font-mono leading-tight">{exp} EXP</span>
              </div>
              
              {showProfile && (
                <div className="absolute top-[120%] right-0 mt-2 w-[280px] bg-white rounded-xl shadow-xl border border-slate-200 z-50 p-4 animate-in slide-in-from-top-2 fade-in">
                  <div className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">Hồ Sơ Quân Nhân</div>
                  <div className="space-y-2 text-[13px]">
                     <p><span className="text-slate-500">Họ và tên chiến sĩ:</span> <span className="font-bold block text-sm">{userName}</span></p>
                     <p><span className="text-slate-500">Ngày gia nhập:</span> <span className="font-semibold text-slate-700 ml-1">{joinDate || new Date().toLocaleDateString('vi-VN')}</span></p>
                     <p><span className="text-slate-500">Quân hàm:</span> <span className="font-bold text-emerald-600 ml-1">{rank}</span> <span className="text-slate-400 ml-1">({exp} EXP)</span></p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-center text-slate-400 bg-slate-50 rounded-lg p-2">
                    {exp >= 30 ? 'Sĩ quan của Biệt kích S.W.A.P' : 'Chiến sĩ của Biệt kích S.W.A.P'}
                  </div>
                  {onResetProfile && (
                     <button 
                       onClick={() => {
                         setShowProfile(false);
                         onResetProfile();
                       }}
                       className="mt-3 w-full border border-rose-200 text-rose-500 hover:bg-rose-50 font-bold text-xs py-2 rounded-lg transition-colors"
                     >
                       Tạo hồ sơ mới
                     </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8 relative z-0">
        {children}
      </main>

      {showRefs && (
        <div className="absolute bottom-10 left-0 w-full bg-slate-900 border-t border-slate-700 shadow-2xl z-20 p-6 animate-in slide-in-from-bottom-5">
           <div className="max-w-4xl mx-auto relative">
             <button 
               onClick={() => setShowRefs(false)}
               className="absolute top-0 right-0 text-slate-400 hover:text-white text-sm"
             >
               ✕ Đóng
             </button>
             <h3 className="text-emerald-400 font-bold mb-4">Nguồn tham khảo / Cơ sở khoa học</h3>
             <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
               <li>Hệ thống phân loại thực phẩm theo mật độ năng lượng (Noom's food color system): <a href="https://www.noom.com/support/faqs/using-the-app/logging-and-tracking/food-and-water/2025/10/how-nooms-food-color-system-works/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline break-all">Link</a></li>
               <li>Nghiên cứu về mật độ năng lượng và sự liên quan tới lượng calo nạp vào: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10030411/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline break-all">Link</a></li>
               <li>Nghiên cứu RCT về việc đề xuất Swap thức ăn: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8642761/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline break-all">Link</a></li>
               <li>Phân loại Phenotype ăn uống (Hungry brain/gut/emotional/slow burn): <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8565668/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline break-all">Link</a></li>
               <li>Phân tích hành vi và mục tiêu (Behavioral goal setting): <a href="https://www.ncbi.nlm.nih.gov/books/NBK278952/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline break-all">Link</a></li>
             </ul>
           </div>
        </div>
      )}

      <footer className="h-10 bg-white border-t border-slate-200 px-4 sm:px-8 mt-auto shrink-0 flex items-center justify-between overflow-hidden relative z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none flex-1">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0"></div>
            S.W.A.P Force
          </div>
          <div className="border-l border-slate-200 pl-3 whitespace-nowrap truncate max-w-[150px] sm:max-w-none hidden sm:block">
             <a href="https://www.dotienson.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
               Một lực lượng chủ lực của Biệt đội KSCN - BS. Đỗ Tiến Sơn
             </a>
          </div>
        </div>
        <button 
          onClick={() => setShowRefs(!showRefs)}
          className="text-[10px] text-slate-500 hover:text-emerald-600 font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ml-4"
        >
          Nguồn tham khảo {showRefs ? '▼' : '▲'}
        </button>
      </footer>
    </div>
  );
}
