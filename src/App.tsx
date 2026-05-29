/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Trophy, Brain, Award, Layers, Sparkles, Navigation, Globe, Star, CheckSquare, Heart
} from 'lucide-react';

import CourseOverview from './components/CourseOverview';
import ProgressTracker from './components/ProgressTracker';
import Leaderboard from './components/Leaderboard';

type SubSectionTab = 'overview' | 'progress' | 'leaderboard';

export default function App() {
  const [activeTab, setActiveTab] = useState<SubSectionTab>('overview');
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [points, setPoints] = useState(350);
  const [streak, setStreak] = useState(3);
  const [userName, setUserName] = useState('Học viên Ưu tú');

  // Hydrate core learning state from localStorage on mount
  useEffect(() => {
    const savedCompleted = localStorage.getItem('completed-lessons');
    if (savedCompleted) {
      try {
        setCompletedLessonIds(JSON.parse(savedCompleted));
      } catch (e) {
        setCompletedLessonIds(['L1', 'L2', 'L3']);
      }
    } else {
      // Set some initial checkboxes to make the UI feel engaging on first load
      const initCheck = ['L1', 'L2', 'L3'];
      setCompletedLessonIds(initCheck);
      localStorage.setItem('completed-lessons', JSON.stringify(initCheck));
    }

    const savedPoints = localStorage.getItem('student-points');
    if (savedPoints) {
      setPoints(Number(savedPoints));
    }

    const savedStreak = localStorage.getItem('student-streak');
    if (savedStreak) {
      setStreak(Number(savedStreak));
    }

    const savedUserName = localStorage.getItem('student-name');
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  // Update logic triggers
  const handleToggleLesson = (lessonId: string) => {
    let next: string[];
    let deltaPoints = 0;

    if (completedLessonIds.includes(lessonId)) {
      next = completedLessonIds.filter(id => id !== lessonId);
      deltaPoints = -50; // deduct points
    } else {
      next = [...completedLessonIds, lessonId];
      deltaPoints = 50; // gain points
    }

    setCompletedLessonIds(next);
    localStorage.setItem('completed-lessons', JSON.stringify(next));

    const updatedPoints = Math.max(0, points + deltaPoints);
    setPoints(updatedPoints);
    localStorage.setItem('student-points', String(updatedPoints));
  };

  const handleEarnPoints = (extraPoints: number) => {
    const nextPoints = points + extraPoints;
    setPoints(nextPoints);
    localStorage.setItem('student-points', String(nextPoints));
  };

  const handleUpdateStreak = (newStreak: number) => {
    setStreak(newStreak);
    localStorage.setItem('student-streak', String(newStreak));
  };

  const handleUpdateUserName = (name: string) => {
    setUserName(name);
    localStorage.setItem('student-name', name);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      
      {/* Top Notification Promo Strip */}
      <div className="bg-slate-900 text-white py-2 px-4 text-center text-[11px] md:text-sm font-bold tracking-tight border-b border-slate-800 z-50">
        <span className="bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[10px] mr-2 uppercase tracking-wide">MỚI</span>
        Rút ngắn 12 năm lý thuyết thụ động thành 2 năm làm chủ hoàn hảo cấu trúc Anh ngữ thực chiến!
      </div>

      {/* Editorial Header from Geometric Balance Design */}
      <header className="bg-white border-b border-slate-200 py-6 px-4 md:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold shadow-md shrink-0">GP</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full uppercase tracking-widest font-mono">
                  Lộ Trình Tinh Anh
                </span>
                <span className="text-[10px] font-mono text-slate-400">• Spaced Repetition</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 underline decoration-indigo-500 decoration-4 underline-offset-4 uppercase">
                LỘ TRÌNH 2 NĂM NGỮ PHÁP
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Trạng thái học tập</p>
              <p className="text-sm font-semibold text-indigo-600">Đang diễn ra (Kỳ 24)</p>
            </div>

            {/* Quick Header Widget Panel in Geometric Balance accent */}
            <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 border border-slate-200 p-2.5 rounded-2xl">
              <div className="text-center px-2 border-r border-slate-200">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Tích Luỹ XP</span>
                <span className="text-sm md:text-base font-black text-indigo-600 block mt-0.5">{points}</span>
              </div>

              <div className="text-center px-2 border-r border-slate-200">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Hoàn Thành</span>
                <span className="text-sm md:text-base font-black text-indigo-600 block mt-0.5">{completedLessonIds.length}/31</span>
              </div>

              <div className="text-center px-2">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Chuỗi Ngày</span>
                <span className="text-sm md:text-base font-black text-indigo-600 block mt-0.5">{streak} ngày</span>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('progress');
                const pSection = document.getElementById('scholarships-box');
                if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg hover:shadow-indigo-200 transition-all cursor-pointer"
            >
              ĐĂNG KÝ HỌC BỔNG
            </button>
          </div>
        </div>
      </header>

      {/* Main Structural Tab Navigation & Body Display */}
      <main className="max-w-7xl mx-auto py-8 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Hand Sidebar Navigation Controls with custom Geometric Balance design */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold px-3 mb-2 block">
              DANH MỤC TRUY CẬP
            </span>

            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-150'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 shrink-0" />
                Lộ Trình Toàn Cảnh
              </span>
              <Layers className="w-3.5 h-3.5 opacity-65" />
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                activeTab === 'progress'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-150'
              }`}
            >
              <span className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 shrink-0" />
                Thử Thách & Cá Nhân
              </span>
              <Award className="w-3.5 h-3.5 opacity-65" />
            </button>



            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                activeTab === 'leaderboard'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-150'
              }`}
            >
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4 shrink-0" />
                Đua Top Học Viên
              </span>
              <Globe className="w-3.5 h-3.5 opacity-65" />
            </button>
          </div>

          {/* Core Philosophy Quote Block in geometric styling */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5.5 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1.5 pb-2 border-b border-slate-100">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-100" /> Triết Lý Khóa Học
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              &ldquo;Ngữ pháp không phải là rạp xiếc công thức để tò mò ghi chép. Ngữ pháp là bản năng ghép từ thành câu. Đầu tư 2 năm rèn luyện vĩnh viễn xóa nhòa khoảng cách ngôn ngữ.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Hand / Main Contents Body Display Slot */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && <CourseOverview />}
          {activeTab === 'progress' && (
            <ProgressTracker
              completedLessonIds={completedLessonIds}
              points={points}
              streak={streak}
              onToggleLesson={handleToggleLesson}
              onEarnPoints={handleEarnPoints}
              onUpdateStreak={handleUpdateStreak}
              onUpdateUserName={handleUpdateUserName}
              currentUserName={userName}
            />
          )}
          {activeTab === 'leaderboard' && (
            <Leaderboard
              userPoints={points}
              userStreak={streak}
              completedLessonsCount={completedLessonIds.length}
              currentUserName={userName}
            />
          )}
        </div>

      </main>

      {/* Professional Humble Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-bold tracking-tight">
          <p>© 2026 Bản Quyền Thuộc Về Chương Trình 2 Năm Ngữ Pháp Thực Chiến.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-800 transition">Điều khoản</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition">Quy chế học bổng</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition">Cộng đồng học tập</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
