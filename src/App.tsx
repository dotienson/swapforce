/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import SwapMatrix from './components/SwapMatrix';
import Layout from './components/Layout';
import DailyPlan from './components/DailyPlan';
import Ambush from './components/Ambush';
import { Phenotype, Texture } from './data';

export type ViewState = 'HOME' | 'QUIZ' | 'RESULT' | 'MATRIX' | 'DAILY_PLAN' | 'AMBUSH';

export const getRank = (exp: number) => {
  if (exp >= 50) return 'Thiếu uý';
  if (exp >= 30) return 'Chuẩn uý';
  if (exp >= 15) return 'Hạ sĩ';
  if (exp >= 1) return 'Binh nhì';
  return 'Binh nhất';
};

export default function App() {
  const [view, setView] = useState<ViewState>('HOME');
  const [quizScore, setQuizScore] = useState<{phenotypes: Phenotype[], texture: Texture | null} | null>(null);

  const [userName, setUserName] = useState('');
  const [exp, setExp] = useState(0);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [tempName, setTempName] = useState('');
  const [joinDate, setJoinDate] = useState('');

  // Toast and rank up tracker
  const [prevRank, setPrevRank] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('swap_user_name');
    const storedExp = parseInt(localStorage.getItem('swap_user_exp') || '0', 10);
    const storedJoinDate = localStorage.getItem('swap_user_join_date') || new Date().toLocaleDateString('vi-VN');
    
    if (storedName) {
      setUserName(storedName);
      setJoinDate(storedJoinDate);
      setExp(storedExp);
      setPrevRank(getRank(storedExp));
    } else {
      setIsNameModalOpen(true);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const addExp = (amount: number, reasonKey: string) => {
    const hasDoneEvent = localStorage.getItem(`swap_exp_event_${reasonKey}`);
    if (!hasDoneEvent) {
      const newExp = exp + amount;
      setExp(newExp);
      localStorage.setItem('swap_user_exp', newExp.toString());
      localStorage.setItem(`swap_exp_event_${reasonKey}`, 'true');
      showToast(`+${amount} EXP`);
    }
  };

  useEffect(() => {
    const currentRank = getRank(exp);
    if (prevRank && currentRank !== prevRank) {
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      });
      setPrevRank(currentRank);
      showToast(`Thăng cấp: ${currentRank}!`);
    } else if (!prevRank && exp > 0) {
      setPrevRank(currentRank);
    }
  }, [exp, prevRank]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      const jDate = new Date().toLocaleDateString('vi-VN');
      setUserName(tempName.trim());
      setJoinDate(jDate);
      localStorage.setItem('swap_user_name', tempName.trim());
      localStorage.setItem('swap_user_join_date', jDate);
      // Wait for React to process then checking rank
      setPrevRank(getRank(exp));
      setIsNameModalOpen(false);
    }
  };

  const currentRank = getRank(exp);

  const navigateTo = (newView: ViewState) => {
    setView(newView);
    if (newView === 'DAILY_PLAN') {
      addExp(10, 'daily_plan_first_view');
    }
  };

  const handleQuizComplete = (phenotypes: Phenotype[], texture: Texture | null) => {
    setQuizScore({ phenotypes, texture });
    addExp(10, 'quiz_complete');
    setView('RESULT');
  };

  const resetProfile = () => {
    localStorage.removeItem('swap_user_name');
    localStorage.removeItem('swap_user_exp');
    localStorage.removeItem('swap_user_join_date');
    localStorage.removeItem('swp_whtr_records');
    
    // Clear all event tags
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith('swap_exp_event_')) {
        localStorage.removeItem(key);
      }
    }
    window.location.reload();
  };

  return (
    <>
      {isNameModalOpen && (
        <div className="fixed inset-0 bg-slate-900/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)] w-full max-w-md p-6 sm:p-8 animate-in zoom-in-95 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
            <div className="text-5xl sm:text-6xl mb-4 mt-2">🎖️</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-widest mb-3">Đăng kí tham gia S.W.A.P</h2>
            <p className="text-emerald-400 text-sm sm:text-base font-medium mb-8 px-2 leading-relaxed">Xin chào chiến hữu! Xin cho biết quý danh (nickname) trước khi gia nhập khoá đào tạo tân binh của S.W.A.P Force</p>
            <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="NHẬP NICKNAME"
                required
                className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-white text-center text-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-bold placeholder:text-slate-600 uppercase"
              />
              <button 
                type="submit"
                className="w-full bg-emerald-500 text-slate-900 font-black text-lg py-3 sm:py-4 rounded-xl hover:bg-emerald-400 uppercase tracking-widest transition-all mt-2 active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                Ghi danh
              </button>
            </form>
          </div>
        </div>
      )}
      <Layout currentView={view} navigateTo={navigateTo} userName={userName} exp={exp} rank={currentRank} joinDate={joinDate} onResetProfile={resetProfile}>
        {view === 'HOME' && <Home navigateTo={navigateTo} onWhtrCalculated={() => addExp(1, 'whtr_check')} />}
        {view === 'QUIZ' && <Quiz onComplete={handleQuizComplete} navigateTo={navigateTo} />}
        {view === 'RESULT' && <Result results={quizScore} navigateTo={navigateTo} />}
        {view === 'MATRIX' && <SwapMatrix navigateTo={navigateTo} onMatrixItemViewed={(id: unknown) => addExp(2, `matrix_view_${id}`)} />}
        {view === 'DAILY_PLAN' && <DailyPlan navigateTo={navigateTo} />}
        {view === 'AMBUSH' && <Ambush navigateTo={navigateTo} onAmbushHandled={(id) => addExp(1, `ambush_handled_${id}`)} />}
      </Layout>

      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 animate-in slide-in-from-bottom-5 fade-in z-50">
          <span className="text-emerald-400">✨</span> {toastMessage}
        </div>
      )}
    </>
  );
}
