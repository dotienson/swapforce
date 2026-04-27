import { useState, useMemo } from 'react';
import { Search, ChevronRight, X, ArrowLeft, Info } from 'lucide-react';
import { FOOD_DATABASE, FoodItem, SwapOption } from '../data';
import { ViewState } from '../App';

const ALL_TAGS = ['Giòn', 'Ngọt', 'Dai', 'Nóng', 'Uống'];

export default function SwapMatrix({ navigateTo, onMatrixItemViewed }: { navigateTo: (v: ViewState) => void, onMatrixItemViewed?: (id: string) => void }) {
  const [search, setSearch] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredFoods = useMemo(() => {
    return FOOD_DATABASE.filter(food => {
      const matchSearch = food.name.toLowerCase().includes(search.toLowerCase()) || 
                          food.group.toLowerCase().includes(search.toLowerCase());
      const matchTags = activeTags.length === 0 || activeTags.some(tag => food.tags.includes(tag));
      return matchSearch && matchTags;
    });
  }, [search, activeTags]);

  const renderSwapCard = (type: 'easy' | 'upgrade' | 'planB', title: string, swap: SwapOption, colorClass: string, bgClass: string) => (
    <div className={`p-5 rounded-2xl border flex flex-col gap-3 ${bgClass}`}>
      <div className="font-bold flex items-center gap-2 text-slate-700">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${type === 'upgrade' ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
          {type === 'easy' ? '1' : type === 'upgrade' ? '2' : '3'}
        </div>
        {title}
      </div>
      <p className="text-slate-900 font-semibold leading-snug">{swap.text}</p>
      
      {swap.calorieReduction && (
        <div className="bg-emerald-100/50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md w-fit flex items-center gap-1 mt-1 border border-emerald-500/20">
          ↓ {swap.calorieReduction}
        </div>
      )}

      <div className="flex flex-wrap gap-1 mt-auto pt-3">
        {swap.tags.map(tag => (
          <span key={tag} className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide bg-white/50 text-slate-600`}>
             Hợp: {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (selectedFood) {
    return (
      <div className="max-w-3xl mx-auto py-4 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={() => setSelectedFood(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Quay lại danh sách</span>
        </button>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 mb-8 border-b-4 border-b-emerald-400">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
             {selectedFood.group}
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 italic">{selectedFood.name}</h2>
          <p className="text-slate-500 flex items-center gap-2">
            <span className="bg-slate-50 text-slate-600 px-2.5 py-0.5 rounded text-sm font-medium border border-slate-200">
              Vibe: {selectedFood.vibe}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
            Tactical Swaps
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {renderSwapCard('easy', 'Easy Win', selectedFood.easyWin, 'text-slate-900', 'bg-slate-50 border-slate-200 shadow-sm')}
            {renderSwapCard('upgrade', 'Smart Upgrade', selectedFood.smartUpgrade, 'text-emerald-800', 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-50 shadow-sm')}
            {renderSwapCard('planB', 'Plan B', selectedFood.planB, 'text-slate-500', 'bg-white border-slate-200 border-dashed border-2')}
          </div>
        </div>
        
        <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-200 flex gap-4 items-start">
          <Info className="text-slate-400 shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-slate-600 space-y-1">
             <p><strong>Easy Win:</strong> Lựa chọn nhàn nhất, thay đổi cực nhỏ, dễ làm theo ngay lập tức.</p>
             <p><strong>Smart Upgrade:</strong> Lựa chọn tốt hơn nhiều, yêu cầu bạn ra một quyết định đổi món "xịn".</p>
             <p><strong>Plan B:</strong> Khi bạn bè đã gọi món, hoặc thèm quá không bỏ được món chính, hãy làm theo cách này để giảm phần ăn.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">Ma Trận Food Swap</h1>
        <p className="text-slate-600">Tìm kiếm món ăn bạn hay chọn để xem 3 gợi ý thay thế theo các cấp độ.</p>
      </div>

      <div className="bg-white p-2 rounded-2xl sm:rounded-full border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-2 mb-6 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-50 transition-all">
        <div className="flex-1 flex items-center w-full px-4">
          <Search className="text-slate-400 mr-2" size={20} />
          <input 
            type="text"
            placeholder="Tìm món: gà rán, trà sữa, bim bim..."
            className="w-full bg-transparent py-3 outline-none text-slate-800 placeholder:text-slate-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch('')} className="p-1 hover:bg-slate-100 rounded-full text-slate-400">
              <X size={16} />
            </button>
          )}
        </div>
        <div className="hidden sm:block w-px h-8 bg-slate-200 mx-2"></div>
        <div className="flex w-full sm:w-auto items-center gap-2 px-2 pb-2 sm:pb-0 overflow-x-auto hide-scrollbar">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTags.includes(tag) 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredFoods.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
           <p className="text-slate-500 font-medium">Không tìm thấy món ăn nào phù hợp.</p>
           <button onClick={() => {setSearch(''); setActiveTags([])}} className="text-emerald-600 mt-2 text-sm font-medium hover:underline">Xóa bộ lọc</button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFoods.map(food => (
             <button
               key={food.id}
               onClick={() => {
                 setSelectedFood(food);
                 if (onMatrixItemViewed) onMatrixItemViewed(food.id);
               }}
               className="bg-white text-left p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all flex flex-col group h-full"
             >
               <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-emerald-600 transition-colors">
                 {food.group}
               </span>
               <h3 className="text-lg font-bold text-slate-800 mb-2 truncate group-hover:text-emerald-700 transition-colors line-clamp-2">
                 {food.name}
               </h3>
               
               <div className="mt-auto pt-4 flex items-center justify-between">
                 <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                   Vibe: {food.vibe}
                 </span>
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                   <ChevronRight size={18} />
                 </div>
               </div>
             </button>
          ))}
        </div>
      )}
    </div>
  );
}
