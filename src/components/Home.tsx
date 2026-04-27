import { useState, useEffect } from 'react';
import { ArrowRight, Activity, ArrowLeftRight, HeartPulse, Search, Scale, RefreshCw, CheckCircle2, ShieldAlert, X, Info } from 'lucide-react';
import { ViewState } from '../App';

export default function Home({ navigateTo, onWhtrCalculated }: { navigateTo: (v: ViewState) => void, onWhtrCalculated?: () => void }) {
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [showPhenotypeModal, setShowPhenotypeModal] = useState(false);
  const [records, setRecords] = useState<{date: string, height: number, waist: number, whtr: number}[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('swp_whtr_records');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRecords(parsed);
          setHeight(String(parsed[parsed.length - 1].height));
          setWaist(String(parsed[parsed.length - 1].waist));
        }
      } catch (e) {}
    }
  }, []);

  const heightNum = parseFloat(height);
  const waistNum = parseFloat(waist);
  const currentWhtr = (heightNum > 0 && waistNum > 0) ? (waistNum / heightNum) : null;

  useEffect(() => {
    if ((currentWhtr !== null || records.length > 0) && onWhtrCalculated) {
      onWhtrCalculated();
    }
  }, [currentWhtr, records, onWhtrCalculated]);

  const handleUpdate = () => {
    if (currentWhtr !== null) {
      const today = new Date().toLocaleDateString('vi-VN');
      const newRecord = { date: today, height: heightNum, waist: waistNum, whtr: currentWhtr };
      const updatedRecords = [...records, newRecord];
      setRecords(updatedRecords);
      localStorage.setItem('swp_whtr_records', JSON.stringify(updatedRecords));
    }
  };

  const handleReset = () => {
    setHeight('');
    setWaist('');
    setRecords([]);
    localStorage.removeItem('swp_whtr_records');
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-12 py-2 sm:py-4">
      
      <section className="text-center p-6 sm:p-8 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-700 relative overflow-hidden text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 inset-x-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent opacity-60"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 mb-5 sm:mb-6">
            <span className="font-medium">Giải pháp chiến thuật của BS Đỗ Tiến Sơn</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
            Giải pháp KSCN <br className="hidden sm:block"/>
            <span className="text-emerald-400">khoa học & thực tế</span>
          </h1>
          
          <p className="text-[13px] sm:text-base text-slate-300 sm:text-slate-400 max-w-xl mx-auto mb-4 leading-relaxed">
            S.W.A.P Force hỗ trợ phân tích kiểu ăn uống cá nhân và triển khai các "biến hình" (swap) chiến thuật, vẫn thỏa mãn nhưng giảm calo nạp vào.
          </p>
          
          <button 
            onClick={() => setShowPhenotypeModal(true)}
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 sm:mb-10 transition-colors bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20"
          >
            <Info size={16} />
            Kiểu hình (phenotype) ăn uống là gì?
          </button>
          
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
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
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

        <div className="flex gap-3 mb-5 sm:mb-6">
          <button 
            onClick={handleUpdate}
            disabled={currentWhtr === null}
            className="flex-1 bg-slate-900 text-white font-bold py-2.5 sm:py-3 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Cập nhật
          </button>
          <button 
            onClick={handleReset}
            className="px-6 py-2.5 sm:py-3 bg-red-50 text-red-600 font-bold rounded-xl border border-red-100 hover:bg-red-100 transition-colors text-sm"
          >
            Reset
          </button>
        </div>

        {records.length > 0 && (
          <div className="space-y-3 mb-5 sm:mb-6">
            {records.map((r, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 gap-2">
                <span className="text-sm font-medium text-slate-700">Chỉ số WHtR ngày <span className="font-bold">{r.date}</span> = <span className="font-bold">{r.whtr.toFixed(2)}</span></span>
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  {r.whtr > 0.5 ? (
                    <span className="text-[10px] sm:text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">Cảnh báo</span>
                  ) : (
                    <span className="text-[10px] sm:text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">Bình thường</span>
                  )}
                  {i > 0 && r.whtr < records[i - 1].whtr && (
                    <span className="text-[10px] sm:text-xs font-bold bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">Cải thiện tốt</span>
                  )}
                  {i > 0 && r.whtr > records[i - 1].whtr && (
                    <span className="text-[10px] sm:text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">Xu hướng tăng</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {currentWhtr !== null && (
          <div className={`p-4 sm:p-5 rounded-xl border ${currentWhtr > 0.5 ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
            {currentWhtr > 0.5 ? (
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
          <h3 className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 sm:mb-4">S.W.A.P Method™ - Giải pháp độc quyền của BS. Đỗ Tiến Sơn</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 text-[13px] sm:text-sm mt-2">
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">S</span>
               <p className="text-slate-300"><strong>Scan</strong> (Nhận diện tình huống)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">W</span>
               <p className="text-slate-300"><strong>Weigh</strong> (Cân nhắc thiệt - hơn)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">A</span>
               <p className="text-slate-300"><strong>Alternative</strong> (Hoán đổi lựa chọn)</p>
             </div>
             <div className="flex gap-3">
               <span className="text-emerald-400 font-bold shrink-0">P</span>
               <p className="text-slate-300"><strong>Practice</strong> (Thành thạo dần)</p>
             </div>
          </div>
        </div>
      </div>

      {showPhenotypeModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white">
              <h2 className="font-bold text-slate-800 text-lg">Kiểu hình (phenotype) ăn uống</h2>
              <button 
                onClick={() => setShowPhenotypeModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto">
              <div className="text-left text-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Phenotype ăn uống: Bạn “đói kiểu gì” mới là quan trọng?</h3>
                <p>Bạn từng thắc mắc:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>“Mình không ăn quá nhiều mà sao vẫn tăng cân?”</li>
                  <li>“Tại sao bạn mình ăn giống mình mà nó không sao?”</li>
                  <li>“Mình cứ thề giảm rồi lại thất bại?”</li>
                </ul>
                <p>Tin vui: chuyện này <span className="font-bold">không phải do bạn ‘yếu ý chí’</span>. Cơ thể và não mỗi người có “cách đói” khác nhau. Trong nghiên cứu về béo phì và quản lý cân nặng, có một khái niệm hay dùng để giải thích sự khác biệt này: <span className="font-bold">kiểu hình (phenotype)</span>.</p>

                <h4 className="font-bold text-lg text-emerald-700 mt-5 pt-3">1) Phenotype là gì?</h4>
                <p><span className="font-bold">Phenotype (kiểu hình)</span> trong bối cảnh ăn uống/kiểm soát cân nặng là cách mà <span className="font-bold">não – ruột – cảm xúc – lối sống</span> của bạn phối hợp với nhau, tạo ra một “mẫu” rất riêng:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>bạn <span className="font-bold text-emerald-700">no nhanh hay no lâu</span>,</li>
                  <li>bạn có <span className="font-bold text-emerald-700">khó dừng khi ăn món ngon</span> không,</li>
                  <li>bạn có hay <span className="font-bold text-emerald-700">ăn theo cảm xúc</span> không,</li>
                  <li>bạn có bị <span className="font-bold text-emerald-700">“đốt chậm”</span> vì <span className="font-bold">ngồi nhiều/ít vận động</span> không.</li>
                </ul>

                <p>Một công trình thực tế (pragmatic trial) đã mô tả 4 nhóm phenotype thường nhắc tới:</p>
                <ol className="list-decimal pl-5 space-y-1 font-medium">
                  <li>Hungry Brain <span className="font-normal">(não đói – khó dừng, bất thường về “satiation”)</span></li>
                  <li>Hungry Gut <span className="font-normal">(ruột đói – mau đói lại, bất thường về “satiety”)</span></li>
                  <li>Emotional Hunger <span className="font-normal">(đói cảm xúc – ăn để tìm “dễ chịu”)</span></li>
                  <li>Slow Burn <span className="font-normal">(đốt chậm – chuyển hoá/tiêu hao thấp hơn, thường đi kèm ngồi nhiều)</span></li>
                </ol>
                <p>Bạn có thể thuộc <span className="font-bold">1 nhóm chính hoặc pha trộn</span> (rất bình thường).</p>

                <h4 className="font-bold text-lg text-emerald-700 mt-5 pt-3">2) Nhận diện 4 phenotype bằng ví dụ đời thường (15–25 tuổi)</h4>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm mt-3">
                  <h5 className="font-bold text-slate-800 text-lg">A) Hungry Brain — “Mình ăn là khó dừng”</h5>
                  <p className="font-medium mt-2">Dấu hiệu quen thuộc:</p>
                  <ul className="list-disc pl-5 mb-2 mt-1 space-y-1 text-slate-600">
                    <li>Ăn một khi đã “vào mood” là muốn ăn cho “đã”.</li>
                    <li>Đang xem phim/scroll TikTok, tay cứ bốc snack mà không để ý.</li>
                    <li>Ăn nhanh, đến khi nhận ra thì… đã no quá.</li>
                  </ul>
                  <p className="mt-3"><span className="font-bold text-rose-500">Không phải vì bạn tham.</span> Đây là mẫu hành vi liên quan <span className="font-bold">cảm giác dừng ăn</span>.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm mt-3">
                  <h5 className="font-bold text-slate-800 text-lg">B) Hungry Gut — “No nhanh nhưng đói lại nhanh”</h5>
                  <p className="font-medium mt-2">Dấu hiệu:</p>
                  <ul className="list-disc pl-5 mb-2 mt-1 space-y-1 text-slate-600">
                    <li>Ăn xong 1–2 tiếng đã đói.</li>
                    <li>Dễ “rụng năng lượng” buổi chiều: mệt, thèm đồ ngọt/đồ uống.</li>
                    <li>Hay thèm thêm bữa phụ vì bụng “trống trơn”.</li>
                  </ul>
                  <p className="mt-3"><span className="font-bold text-amber-500">Gợi ý nhẹ:</span> nhóm này thường cần bữa ăn <span className="font-bold">no lâu</span> (đạm + chất xơ + kết cấu ‘đặc’).</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm mt-3">
                  <h5 className="font-bold text-slate-800 text-lg">C) Emotional Hunger — “Mình ăn để tự trấn an”</h5>
                  <p className="font-medium mt-2">Dấu hiệu:</p>
                  <ul className="list-disc pl-5 mb-2 mt-1 space-y-1 text-slate-600">
                    <li>Stress deadline, buồn chán, cô đơn → thèm đồ ngọt/đậm đà.</li>
                    <li>Không hẳn đói bụng, mà là “đói cảm giác dễ chịu”.</li>
                    <li>Ăn xong đôi khi… còn thấy tội lỗi.</li>
                  </ul>
                  <p className="mt-3"><span className="font-bold text-purple-600">Điểm quan trọng:</span> đây là một tín hiệu tâm lý rất phổ biến, không đáng xấu hổ. Mục tiêu là học cách <span className="font-bold">thay thế phản xạ</span> (swap phản xạ), chứ không phải “cấm ăn”.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm mt-3">
                  <h5 className="font-bold text-slate-800 text-lg">D) Slow Burn — “Ngồi nhiều quá, tiêu hao thấp quá”</h5>
                  <p className="font-medium mt-2">Dấu hiệu:</p>
                  <ul className="list-disc pl-5 mb-2 mt-1 space-y-1 text-slate-600">
                    <li>Ngày ngồi học/ngồi làm 6–10 tiếng.</li>
                    <li>Vẫn ăn như trước nhưng cân dễ nhích.</li>
                    <li>Cảm giác “mình ăn cũng không nhiều mà”.</li>
                  </ul>
                  <p className="mt-3">Nhóm này thường cần <span className="font-bold">2 mũi</span>: (1) hoán đổi để bớt calo vô thức, (2) thêm vận động nhỏ kiểu “đi bộ 10 phút” (không cần gym hardcore).</p>
                </div>

                <h4 className="font-bold text-lg text-emerald-700 mt-5 pt-3">3) Phenotype giúp bạn làm gì?</h4>
                <p>Phenotype không phải để dán nhãn. Nó giúp bạn trả lời câu hỏi quan trọng:</p>
                <div className="bg-emerald-50 text-emerald-800 font-bold p-3 rounded-lg border border-emerald-200 inline-block">
                  “Mình nên tối ưu ở chỗ nào để giảm cân dễ hơn?”
                </div>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><span className="font-semibold text-rose-600">Hungry Brain</span> → tối ưu <span className="font-bold">thể tích bữa ăn</span> + cách ăn để dễ dừng.</li>
                  <li><span className="font-semibold text-amber-600">Hungry Gut</span> → tối ưu <span className="font-bold">no lâu</span> (đạm/xơ) để không bị đói lại.</li>
                  <li><span className="font-semibold text-purple-600">Emotional Hunger</span> → tối ưu <span className="font-bold">đúng vibe</span> (giữ cảm giác) + kỹ năng “dừng 60 giây”.</li>
                  <li><span className="font-semibold text-blue-600">Slow Burn</span> → tối ưu <span className="font-bold">calo vô thức</span> + thêm vận động nhỏ.</li>
                </ul>

                <h4 className="font-bold text-lg text-emerald-700 mt-5 pt-3">4) Mini-check (tự test nhanh 60 giây)</h4>
                <p>Chọn câu giống bạn nhất:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>“Mình khó dừng khi ăn món ngon” → nghiêng <span className="font-bold text-rose-600">Hungry Brain</span></li>
                  <li>“Mình đói lại rất nhanh” → nghiêng <span className="font-bold text-amber-600">Hungry Gut</span></li>
                  <li>“Mình hay thèm khi stress/buồn chán” → nghiêng <span className="font-bold text-purple-600">Emotional Hunger</span></li>
                  <li>“Mình ngồi nhiều, ít vận động” → nghiêng <span className="font-bold text-blue-600">Slow Burn</span></li>
                </ul>
                <p className="font-medium bg-yellow-50 p-3 rounded border border-yellow-200 text-yellow-800 mt-2">Nếu bạn thấy mình “dính” 2 câu: chúc mừng, bạn là <span className="font-bold">bản kết hợp</span>. Kế hoạch càng nên “thực tế” và mềm mại.</p>

                <h4 className="font-bold text-lg text-emerald-700 mt-5 pt-3">5) Lời nhắc tôn trọng bản thân (cực quan trọng)</h4>
                <div className="bg-slate-100 p-4 rounded-xl border-l-4 border-emerald-500">
                  <p className="italic text-slate-700">Trong cộng đồng y khoa của BS Sơn, người ta khuyến khích dùng <span className="font-bold">ngôn ngữ đặt con người trước</span> (people-first language): bạn không phải “một cái cân”. Bạn là <span className="font-bold">một người đang học kỹ năng sống</span>. <span className="font-bold text-emerald-800">Bạn không cần ‘hoàn hảo’. Bạn chỉ cần ‘hiểu mình’ hơn hôm qua.</span></p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-end text-center sm:text-right">
                  <div>
                    <p className="font-bold text-slate-900 text-lg">ThS. BS. Đỗ Tiến Sơn, TAHN</p>
                    <p className="text-emerald-700 font-bold uppercase tracking-wider text-sm mb-2">Đội trưởng Biệt đội KSCN</p>
                    <p className="text-xs text-slate-500 leading-relaxed">Kinh nghiệm hơn ba mươi năm trong kiểm soát cân nặng<br/>Tu nghiệp tại UK về kiểm soát cân nặng trẻ em</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
