import { useState, useEffect } from 'react';
import { ArrowRight, Activity, ArrowLeftRight, HeartPulse, Search, Scale, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ViewState } from '../App';

export default function Home({ navigateTo, onWhtrCalculated }: { navigateTo: (v: ViewState) => void, onWhtrCalculated?: () => void }) {
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  
  const heightNum = parseFloat(height);
  const waistNum = parseFloat(waist);
  const whtr = (heightNum > 0 && waistNum > 0) ? (waistNum / heightNum) : null;

  useEffect(() => {
    if (whtr !== null && onWhtrCalculated) {
      onWhtrCalculated();
    }
  }, [whtr, onWhtrCalculated]);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 py-2 sm:py-4">
      
      <section className="text-center p-6 sm:p-8 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-700 relative overflow-hidden text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 inset-x-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent opacity-60"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 mb-5 sm:mb-6">
            <span className="font-medium">Giải pháp chiến thuật từ Biệt đội KSCN - BS Đỗ Tiến Sơn</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
            Giải pháp KSCN <br className="hidden sm:block"/>
            <span className="text-emerald-400">khoa học & thực tế</span>
          </h1>
          
          <p className="text-[13px] sm:text-base text-slate-300 sm:text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            S.W.A.P Force hỗ trợ phân tích kiểu ăn uống cá nhân và triển khai các "biến hình" (swap) chiến thuật, vẫn thỏa mãn nhưng giảm calo nạp vào.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center w-full">
            <div className="flex-1 w-full flex flex-col justify-start">
               <button 
                 onClick={() => navigateTo('QUIZ')}
                 className="w-full px-4 py-3 sm:py-4 bg-white text-slate-900 font-bold rounded-xl shadow-md hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-[13px] sm:text-base"
               >
                 Khảo sát Tác chiến
               </button>
               <p className="text-[9px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2 text-center text-balance leading-snug px-2 md:px-0">Trả lời câu hỏi để xác định thói quen và sở thích ăn uống</p>
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-start">
               <button 
                 onClick={() => navigateTo('AMBUSH')}
                 className="w-full px-4 py-3 sm:py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition-colors flex items-center justify-center gap-2 shadow-md shadow-rose-500/20 text-[13px] sm:text-base"
               >
                 Xử trí Phục kích
               </button>
               <p className="text-[9px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2 text-center text-balance leading-snug px-2 md:px-0">Đưa ngay phương án khi bạn đối mặt với một món ngon nhiều calorie</p>
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-start">
               <button 
                 onClick={() => navigateTo('MATRIX')}
                 className="w-full px-4 py-3 sm:py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 text-[13px] sm:text-base"
               >
                 Triển khai Biến hình
               </button>
               <p className="text-[9px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2 text-center text-balance leading-snug px-2 md:px-0">Danh sách các phương án Biến hình liệt kê theo nhóm tác chiến</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">Đánh giá nguy cơ hội chứng chuyển hoá</h2>
        <p className="text-slate-500 text-[13px] sm:text-sm mb-5 sm:mb-6">Chỉ số WHtR giúp đánh giá nhanh lượng mỡ nội tạng và rủi ro sức khỏe.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-5 sm:mb-6">
          <div className="flex-1">
            <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">Chiều cao (cm)</label>
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="VD: 170" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">Vòng eo (đo ngang rốn) (cm)</label>
            <input 
              type="number" 
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder="VD: 85" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
        </div>

        {whtr !== null && (
          <div className={`p-4 sm:p-5 rounded-xl border ${whtr > 0.5 ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
            {whtr > 0.5 ? (
              <p className="text-[13px] sm:text-sm font-semibold flex items-start gap-2">
                <ShieldAlert className="shrink-0 mt-0.5 text-rose-500" size={16} /> 
                Bạn có nguy cơ mắc các rối loạn chuyển hoá do dư thừa tổ chức mỡ mạn tính; bạn là ứng viên số một cho tổ biệt kích S.W.A.P của Biệt đội KSCN.
              </p>
            ) : (
              <p className="text-[13px] sm:text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" /> Tỉ lệ lý tưởng, ít rủi ro về chuyển hoá.
              </p>
            )}
          </div>
        )}
      </section>

      <section className="grid md:grid-cols-3 gap-5 sm:gap-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block rounded-full"></div>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative group hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl mb-4 sm:mb-6 shadow-md shadow-slate-200 absolute -top-5 sm:-top-6 left-6 sm:left-8">1</div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 mt-4 inline-flex items-center gap-2">
            Phân tích Phenotype
          </h3>
          <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
            Nắm bắt mức độ nhạy cảm với các tín hiệu no đói, làm cơ sở khoa học để thiết kế lộ trình cá nhân hóa.
          </p>
        </div>
        
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative group hover:-translate-y-1 transition-transform mt-5 md:mt-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl mb-4 sm:mb-6 shadow-md shadow-emerald-100 absolute -top-5 sm:-top-6 left-6 sm:left-8">2</div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 mt-4 inline-flex items-center gap-2">
            Biến Hình Smart Swap
          </h3>
          <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
            Thay thế nguyên liệu hoặc cách chế biến, đảm bảo tối ưu dinh dưỡng mà không đánh đổi sự thỏa mãn.
          </p>
        </div>
        
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 relative group hover:-translate-y-1 transition-transform mt-5 md:mt-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-rose-500 text-white rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl mb-4 sm:mb-6 shadow-md shadow-rose-100 absolute -top-5 sm:-top-6 left-6 sm:left-8">3</div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 mt-4 inline-flex items-center gap-2">
            Kháng Cự Lâu Dài
          </h3>
          <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
            Áp dụng chiến thuật ứng biến linh hoạt theo hoàn cảnh thực tế để rèn luyện thói quen bền vững.
          </p>
        </div>
      </section>

      <div className="bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-between relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-0"></div>
        <div className="relative z-10 w-full md:w-auto text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-900 mb-2">Kế hoạch "Biến hình" Tiêu biểu</h3>
          <p className="text-emerald-800 text-[13px] sm:text-sm max-w-lg">Khám phá phương pháp áp dụng chiến lược trong 1 ngày thực tế (3 bữa chính, 2 phụ, 1 khuya) phân loại theo từng đặc thù.</p>
        </div>
        <button 
          onClick={() => navigateTo('DAILY_PLAN')}
          className="relative z-10 w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all whitespace-nowrap text-sm sm:text-base"
        >
          Xem Kế Hoạch Ngày
        </button>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-6 sm:p-8 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden">
        <div className="w-full">
          <h3 className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 sm:mb-4">S.W.A.P - Biệt kích Biến hình</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 text-[13px] sm:text-sm mt-2">
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">S</span>
               <p className="text-slate-300"><strong>Scan</strong> (Quét & Nhận diện tình huống)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">W</span>
               <p className="text-slate-300"><strong>Weigh</strong> (Cân nhắc thiệt hơn)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">A</span>
               <p className="text-slate-300"><strong>Alternative</strong> (Đề xuất hoán đổi “cùng vibe”)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">P</span>
               <p className="text-slate-300"><strong>Practice</strong> (Thực hành + phản hồi + lần sau dễ hơn lần trước)</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
