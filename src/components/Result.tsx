import { Phenotype, Texture, PHENOTYPE_EXPLANATION, TEXTURE_EXPLANATION } from '../data';
import { ViewState } from '../App';
import { ArrowRight, Brain, Utensils, HeartPulse, Accessibility, Star, CheckCircle2 } from 'lucide-react';
import React from 'react';

export default function Result({ 
  results,
  navigateTo
}: { 
  results: {phenotypes: Phenotype[], texture: Texture | null} | null;
  navigateTo: (v: ViewState) => void;
}) {

  if (!results) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Chưa có kết quả phân tích. Vui lòng làm quiz trước.</p>
        <button 
          onClick={() => navigateTo('QUIZ')}
          className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Làm Quiz
        </button>
      </div>
    );
  }

  const { phenotypes, texture } = results;
  const isMixed = phenotypes.length > 1;

  const phenotypeIcons: Record<Phenotype, React.ReactNode> = {
    HB: <Brain className="text-indigo-500" size={32} />,
    HG: <Utensils className="text-amber-500" size={32} />,
    EH: <HeartPulse className="text-rose-500" size={32} />,
    SB: <Accessibility className="text-emerald-500" size={32} />,
    MIXED: <Star className="text-blue-500" size={32} />
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto py-8 space-y-8">
      
      <div className="text-center space-y-4">
        <p className="text-emerald-600 font-semibold tracking-wider text-sm uppercase">Hồ sơ ăn uống của bạn</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          {isMixed ? "Phong Cách Hỗn Hợp (Mixed)" : PHENOTYPE_EXPLANATION[phenotypes[0]].name}
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Dựa trên câu trả lời, chúng tôi đã phân tích thói quen và phản ứng cơ thể của bạn để đưa ra chiến lược swap phù hợp nhất.
        </p>
      </div>

      <div className="grid gap-6 mt-8">
        {phenotypes.map((ph, idx) => {
          const info = PHENOTYPE_EXPLANATION[ph];
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 shadow-inner">
                {phenotypeIcons[ph]}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-800">{info.name}</h3>
                  {idx === 0 && <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-medium">Đặc điểm chính</span>}
                  {idx === 1 && <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">Cũng nổi bật</span>}
                </div>
                <p className="text-slate-600 border-l-2 border-slate-200 pl-4 italic">
                  "{info.description}"
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 mt-4 border border-emerald-500 ring-4 ring-emerald-50">
                  <p className="text-emerald-700 text-sm font-medium">
                    <strong className="block mb-1 flex items-center gap-1.5 text-emerald-600"><CheckCircle2 size={16}/> Chiến lược S.W.A.P:</strong>
                    {info.strategy}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {texture && (
        <div className="bg-white text-slate-900 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm flex justify-between items-center sm:items-start flex-col sm:flex-row gap-6">
          <div className="space-y-2 flex-1">
            <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Cảm giác ưu tiên</h3>
            <p className="text-2xl font-bold flex items-center gap-2 text-slate-900">
              {TEXTURE_EXPLANATION[texture].name} 
            </p>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed italic">
              {TEXTURE_EXPLANATION[texture].suggestion}
            </p>
          </div>
        </div>
      )}

      <div className="pt-8 flex justify-center">
        <button 
          onClick={() => navigateTo('MATRIX')}
          className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-colors active:scale-95 flex items-center gap-2 text-lg"
        >
          MỞ MA TRẬN SWAP
          <ArrowRight size={20} />
        </button>
      </div>
      
    </div>
  );
}
