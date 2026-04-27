import { useState } from 'react';
import { ViewState } from '../App';
import { FOOD_DATABASE, FoodItem } from '../data';
import { Search, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Ambush({ navigateTo, onAmbushHandled }: { navigateTo: (view: ViewState) => void, onAmbushHandled?: (id: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const filteredFoods = FOOD_DATABASE.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 text-rose-600 rounded-full mb-4 ring-8 ring-rose-50">
          <AlertTriangle size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Xử Trí Phục Kích</h1>
        <p className="text-slate-500 text-lg">Bạn đang đối mặt với "cám dỗ" bất ngờ nào?</p>
      </div>

      {!selectedFood ? (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nhập tên món ăn (VD: Trà sữa, Bánh mì...)"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all text-lg font-medium"
            />
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredFoods.length > 0 ? (
              filteredFoods.map(food => (
                <button
                  key={food.id}
                  onClick={() => {
                    setSelectedFood(food);
                    if (onAmbushHandled) onAmbushHandled(food.id);
                  }}
                  className="w-full text-left flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:bg-rose-50 transition-colors group"
                >
                  <div>
                    <p className="font-bold text-slate-800 text-lg group-hover:text-rose-700 transition-colors">{food.name}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{food.group}</p>
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-rose-500 transition-colors" size={20} />
                </button>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400">
                Không tìm thấy món ăn này. Hãy thử từ khóa khác!
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 shadow-sm border border-slate-200 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mục tiêu hiện tại</p>
              <h2 className="text-2xl font-extrabold text-slate-900">{selectedFood.name}</h2>
            </div>
            <button 
              onClick={() => setSelectedFood(null)}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors shrink-0"
            >
              Chọn món khác
            </button>
          </div>

          <div className="grid gap-4">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-300 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black shrink-0">1</div>
               <div className="flex-1">
                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Easy Win (Dễ dàng)</h3>
                 <p className="font-semibold text-slate-800 text-lg">{selectedFood.easyWin.text}</p>
               </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center ring-4 ring-emerald-50">
               <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-black shrink-0">2</div>
               <div className="flex-1">
                 <h3 className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Smart Upgrade (Tối ưu)</h3>
                 <p className="font-semibold text-emerald-900 text-lg mb-1">{selectedFood.smartUpgrade.text}</p>
                 {selectedFood.smartUpgrade.calorieReduction && (
                    <span className="inline-block bg-emerald-200/50 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                      ↓ {selectedFood.smartUpgrade.calorieReduction}
                    </span>
                 )}
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-200 border-dashed shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <div className="w-12 h-12 bg-slate-50 text-slate-400 border border-slate-200 rounded-xl flex items-center justify-center font-black shrink-0">3</div>
               <div className="flex-1">
                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Plan B (Trì hoãn / Giảm sát thương)</h3>
                 <p className="font-semibold text-slate-600 text-lg">{selectedFood.planB.text}</p>
               </div>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
             <button
               onClick={() => navigateTo('HOME')}
               className="text-slate-400 hover:text-slate-600 font-medium underline"
             >
               Trở về trang chủ
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
