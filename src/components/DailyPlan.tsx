import { useState } from 'react';
import { DAILY_PLANS, FOOD_DATABASE } from '../data';
import { ViewState } from '../App';
import { ArrowRight, UtensilsCrossed, Plus, X } from 'lucide-react';

export default function DailyPlan({ navigateTo }: { navigateTo: (v: ViewState) => void }) {
  const [activeGroup, setActiveGroup] = useState<'TEENS' | 'ADULTS' | 'CUSTOM'>('ADULTS');
  const [customMeals, setCustomMeals] = useState<{meal: string, time: string, original: string, originalKcal: number, swapId: string}[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');

  const plans = activeGroup === 'CUSTOM' ? customMeals : DAILY_PLANS[activeGroup];

  const handleAddMeal = () => {
    const food = FOOD_DATABASE.find(f => f.id === selectedFoodId);
    if (!food) return;
    
    setCustomMeals([
      ...customMeals,
      {
        meal: `Bữa ${customMeals.length + 1}`,
        time: '--:--',
        original: food.name,
        originalKcal: 500, // Estimate
        swapId: food.id
      }
    ]);
    setSelectedFoodId('');
  };

  return (
    <div className="max-w-4xl mx-auto py-6 animate-in fade-in zoom-in-95 duration-200">
      
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Kế Hoạch Ngày Tiêu Biểu</h1>
          <p className="text-slate-600 border-l-4 border-emerald-500 pl-4 py-1 italic max-w-2xl">
            Khám phá cách áp dụng các chiến thuật "biến hình" trong một ngày thực tế với các kịch bản mẫu, hoặc tự tạo tình huống tác chiến của riêng bạn.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 bg-slate-200/50 p-1 rounded-xl w-fit">
        <button 
          onClick={() => { setActiveGroup('ADULTS'); setIsBuilding(false); }}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeGroup === 'ADULTS' && !isBuilding
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Nơi Công sở
        </button>
        <button 
          onClick={() => { setActiveGroup('TEENS'); setIsBuilding(false); }}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeGroup === 'TEENS' && !isBuilding
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Trường lớp & Gen Z
        </button>
        <button 
          onClick={() => { setActiveGroup('CUSTOM'); setIsBuilding(true); }}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 ${
            isBuilding
            ? 'bg-emerald-500 text-white shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Plus size={16} /> Tạo tình huống mới
        </button>
      </div>

      {isBuilding && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-200 mb-8 mt-[-1rem]">
           <h3 className="text-sm font-bold text-slate-800 mb-4">Xây dựng Kế hoạch Tác chiến</h3>
           <div className="flex gap-2">
             <select 
               value={selectedFoodId}
               onChange={(e) => setSelectedFoodId(e.target.value)}
               className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-emerald-500 text-sm"
             >
                <option value="">-- Chọn món ăn / cạm bẫy muốn thêm vào lịch --</option>
                {FOOD_DATABASE.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
             </select>
             <button
               onClick={handleAddMeal}
               disabled={!selectedFoodId}
               className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold disabled:opacity-50 hover:bg-emerald-700 transition-colors"
             >
               Thêm
             </button>
           </div>
           {customMeals.length === 0 && (
             <p className="text-slate-400 text-xs mt-3 italic">Hãy chọn các món ăn bạn thường ăn trong ngày để S.W.A.P Force lên phương án thay thế.</p>
           )}
        </div>
      )}

      {plans.length === 0 && activeGroup === 'CUSTOM' && !isBuilding && (
        <div className="text-center py-12 text-slate-400 bg-white rounded-2xl border border-slate-200">
           Chưa có dữ liệu. Vui lòng nhấn "Tạo tình huống mới" để thiết lập.
        </div>
      )}

      <div className="space-y-6">
        {plans.map((item, idx) => {
          const swapData = FOOD_DATABASE.find(f => f.id === item.swapId);
          if (!swapData) return null;

          return (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row overflow-hidden relative group hover:border-emerald-300 transition-colors">
              {activeGroup === 'CUSTOM' && (
                <button 
                  onClick={() => setCustomMeals(customMeals.filter((_, i) => i !== idx))}
                  className="absolute top-2 right-2 p-2 text-slate-300 hover:text-rose-500 transition-colors z-10"
                >
                  <X size={16} />
                </button>
              )}
              
              <div className="md:w-1/3 bg-slate-50 p-6 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col relative z-0">
                <div className="text-emerald-600 font-black text-sm absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.time}
                </div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.meal}</h3>
                <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight">{item.original}</h4>
                <p className="text-slate-500 font-mono text-sm mt-auto pt-4 flex items-center gap-2">
                   <UtensilsCrossed size={14} className="text-rose-400" /> ~{item.originalKcal} kcal
                </p>
              </div>

              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <div className="flex gap-4">
                  
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-10 h-10 bg-emerald-50 rounded-bl-3xl"></div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Smart Upgrade</p>
                    <p className="text-slate-800 font-semibold mb-3 pr-6">{swapData.smartUpgrade.text}</p>
                    
                    {swapData.smartUpgrade.calorieReduction && (
                      <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold ring-1 ring-emerald-500/20">
                        <span className="text-emerald-500">↓</span>
                        {swapData.smartUpgrade.calorieReduction}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>

      <div className="mt-12 text-center">
         <button 
            onClick={() => navigateTo('MATRIX')}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-colors active:scale-95 inline-flex items-center gap-2 text-lg"
          >
            Mở Kho Dữ Liệu Các Món (Ma Trận)
            <ArrowRight size={20} />
          </button>
      </div>

    </div>
  );
}
