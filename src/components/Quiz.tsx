import { useState } from 'react';
import { QUIZ_QUESTIONS, Phenotype, Texture } from '../data';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ViewState } from '../App';

export default function Quiz({ 
  onComplete,
  navigateTo
}: { 
  onComplete: (phenotypes: Phenotype[], texture: Texture | null) => void;
  navigateTo: (v: ViewState) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const question = QUIZ_QUESTIONS[currentStep];
  const isLast = currentStep === QUIZ_QUESTIONS.length - 1;

  const handleSelect = (optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [question.id]: optionIndex }));
    
    // Automatically move to next if not last manually
    if (!isLast) {
      setTimeout(() => {
        setCurrentStep(s => s + 1);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(s => s - 1);
  };

  const calculateResult = () => {
    const scores: Record<Phenotype, number> = { HB: 0, HG: 0, EH: 0, SB: 0, MIXED: 0 };
    let selectedTexture: Texture | null = null;
    
    QUIZ_QUESTIONS.forEach(q => {
      const selectedIndex = answers[q.id];
      if (selectedIndex === undefined) return;
      
      const option = q.options[selectedIndex];
      
      if (q.type === 'phenotype' && option.scoreCategory && option.score !== undefined) {
        scores[option.scoreCategory] += option.score;
      }
      
      if (q.type === 'texture' && option.texture) {
        selectedTexture = option.texture;
      }
    });

    // Find top phenotype
    const sortedScores = Object.entries(scores)
      .filter(([key]) => key !== 'MIXED')
      .sort((a, b) => b[1] - a[1]);

    const top1 = sortedScores[0];
    const top2 = sortedScores[1];

    let resultPhenotypes: Phenotype[] = [top1[0] as Phenotype];
    
    // If difference between top 1 and top 2 is <= 2
    if (top2 && (top1[1] - top2[1]) <= 2 && top2[1] > 0) {
      resultPhenotypes.push(top2[0] as Phenotype);
    }

    onComplete(resultPhenotypes, selectedTexture);
  };

  return (
    <div className="max-w-2xl mx-auto w-full py-8">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className="p-2 text-slate-400 hover:text-slate-700 disabled:opacity-0 transition-opacity"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-sm font-medium text-slate-400">
          Câu {currentStep + 1} / {QUIZ_QUESTIONS.length}
        </div>
        <button 
          onClick={() => navigateTo('HOME')}
          className="text-xs text-slate-400 hover:text-slate-600"
        >
          Thoát
        </button>
      </div>

      <div className="w-full h-2 bg-slate-200 rounded-full mb-10 overflow-hidden shrink-0">
        <div 
          className="bg-emerald-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[360px] flex flex-col">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Câu hỏi {currentStep + 1}</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-8 italic">
          {question.text}
        </h2>
        
        <div className="flex-1 space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = answers[question.id] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                  isSelected 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-4 ring-emerald-50' 
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100/50 text-slate-900'
                }`}
              >
                <span className="font-medium text-[15px]">{option.text}</span>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                  isSelected ? 'border-emerald-500' : 'border-slate-300 group-hover:border-emerald-300'
                }`}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        {isLast && answers[question.id] !== undefined && (
          <button
            onClick={calculateResult}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-colors flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2"
          >
            XEM KẾT QUẢ PHÂN TÍCH
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
