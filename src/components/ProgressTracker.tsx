/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CourseLesson, ScholarshipTask } from '../types';
import { LESSONS_DATA, INITIAL_SCHOLARSHIP_TASKS } from '../data';
import { 
  Trophy, Flame, Award, Calendar, RefreshCw, CheckCircle2, Circle, AlertCircle, Heart, User, CheckCircle
} from 'lucide-react';

interface ProgressTrackerProps {
  completedLessonIds: string[];
  points: number;
  streak: number;
  onToggleLesson: (lessonId: string) => void;
  onEarnPoints: (points: number) => void;
  onUpdateStreak: (newStreak: number) => void;
  onUpdateUserName: (name: string) => void;
  currentUserName: string;
}

export default function ProgressTracker({
  completedLessonIds,
  points,
  streak,
  onToggleLesson,
  onEarnPoints,
  onUpdateStreak,
  onUpdateUserName,
  currentUserName
}: ProgressTrackerProps) {
  const [scholarships, setScholarships] = useState<ScholarshipTask[]>([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<'All' | 'Phase 1' | 'Phase 2' | 'Phase 3'>('All');
  const [tempNotification, setTempNotification] = useState('');

  // Initialize scholarship tasks
  useEffect(() => {
    const saved = localStorage.getItem('anki-scholarships');
    if (saved) {
      try {
        setScholarships(JSON.parse(saved));
      } catch (e) {
        setScholarships(INITIAL_SCHOLARSHIP_TASKS);
      }
    } else {
      setScholarships(INITIAL_SCHOLARSHIP_TASKS);
    }
    setTypedName(currentUserName);
  }, []);

  // Recalculate scholarship progress on changes
  useEffect(() => {
    if (scholarships.length === 0) return;

    const phase1Count = LESSONS_DATA.filter(
      l => l.phase === 'Phase 1: Core Grammar' && completedLessonIds.includes(l.id)
    ).length;

    const updated = scholarships.map(task => {
      let currentProgress = task.progress;
      let completed = task.isCompleted;

      if (task.id === 'st-1') {
        // Streak requirement (e.g., 7 days)
        currentProgress = streak;
        completed = streak >= task.requirementValue;
      } else if (task.id === 'st-2') {
        // Lesson completion (Phase 1, 9 lessons)
        currentProgress = phase1Count;
        completed = phase1Count >= task.requirementValue;
      }

      return {
        ...task,
        progress: Math.min(task.requirementValue, currentProgress),
        isCompleted: completed
      };
    });

    // Check if any change actually occurred to prevent infinite re-renders
    if (JSON.stringify(updated) !== JSON.stringify(scholarships)) {
      setScholarships(updated);
      localStorage.setItem('anki-scholarships', JSON.stringify(updated));
    }
  }, [completedLessonIds, streak, scholarships]);

  const handleClaimReward = (id: string, value: string) => {
    const updated = scholarships.map(s => {
      if (s.id === id) {
        return { ...s, claimed: true };
      }
      return s;
    });
    setScholarships(updated);
    localStorage.setItem('anki-scholarships', JSON.stringify(updated));

    // Grant bonus score
    onEarnPoints(200);

    // Trigger visual notification
    setTempNotification(`🎉 Chúc mừng ${currentUserName} đã nhận học bổng trị giá ${value}! Bạn được thưởng thêm +200 điểm thưởng danh dự.`);
    setTimeout(() => setTempNotification(''), 4500);
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (typedName.trim()) {
      onUpdateUserName(typedName.trim());
      setIsEditingName(false);
      setTempNotification('💾 Đã cập nhật tên học viên cá nhân hóa thành công!');
      setTimeout(() => setTempNotification(''), 2500);
    }
  };

  const incrementStreakDirectly = () => {
    onUpdateStreak(streak + 1);
    onEarnPoints(15);
    setTempNotification('🔥 Chuỗi học tập (Streak) tăng thêm! +15 điểm thưởng kỷ luật.');
    setTimeout(() => setTempNotification(''), 2500);
  };

  // Lessons display based on phase filters
  const filteredLessons = LESSONS_DATA.filter(l => {
    if (selectedPhase === 'All') return true;
    if (selectedPhase === 'Phase 1') return l.phase === 'Phase 1: Core Grammar';
    if (selectedPhase === 'Phase 2') return l.phase === 'Phase 2: Tenses & Modals';
    return l.phase === 'Phase 3: Conditionals & Advanced';
  });

  const completionPercent = Math.round((completedLessonIds.length / LESSONS_DATA.length) * 100);

  return (
    <div className="space-y-6">
      {/* Dynamic Profile Notification */}
      {tempNotification && (
        <div className="p-4 bg-emerald-600 border border-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2.5 animate-slide-down shadow-md">
          <CheckCircle className="w-5 h-5 text-amber-300 animate-pulse" />
          <span>{tempNotification}</span>
        </div>
      )}

      {/* Hero Stats Card styled after the Specialized Widget / Personal Progress Widget of theme */}
      <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        {/* Absolute decorative circle from Anki / Hero theme structure */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
          {/* User Info & Avatar */}
          <div className="space-y-3 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 select-none">
                <User className="w-6 h-6 text-indigo-300" />
              </div>
              <div className="min-w-0">
                {isEditingName ? (
                  <form onSubmit={handleSaveName} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={typedName}
                      onChange={(e) => setTypedName(e.target.value)}
                      className="bg-white/10 border border-white/35 rounded px-2 py-0.5 text-xs text-white focus:outline-none focus:border-white w-28 font-semibold"
                      required
                      autoFocus
                    />
                    <button type="submit" className="text-[10px] bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-0.5 rounded cursor-pointer font-bold">Lưu</button>
                  </form>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-white truncate">{currentUserName}</h3>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="text-[10px] text-indigo-400 hover:text-white underline cursor-pointer font-semibold"
                    >
                      Sửa
                    </button>
                  </div>
                )}
                <p className="text-[11px] text-indigo-200 mt-0.5 font-semibold">Tiến Trình 2 Năm Ngữ Pháp</p>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <span className="text-[10px] bg-white/10 text-indigo-100 border border-white/10 px-2 py-0.5 rounded-lg font-bold">
                Kỷ Luật Vàng
              </span>
            </div>
          </div>

          {/* Points & Streak Metrics */}
          <div className="flex justify-around border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:px-4">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Điểm Tích Lũy</span>
              <span className="text-2xl md:text-3xl font-black text-white block">
                {points} <span className="text-xs text-indigo-400 font-bold">XP</span>
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full inline-block mt-2 font-bold uppercase tracking-tight">Active</span>
            </div>

            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Chuỗi Streak</span>
              <div className="flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
                <span className="text-2xl md:text-3xl font-black text-white">
                  {streak} ngày
                </span>
              </div>
              <button
                onClick={incrementStreakDirectly}
                className="text-[10px] text-orange-400 hover:text-white underline cursor-pointer mt-1 font-semibold"
              >
                + Điểm Danh Hôm Nay!
              </button>
            </div>
          </div>

          {/* Phase completion radial progress ring from 'Personal Progress Widget' */}
          <div className="pl-0 md:pl-6 flex items-center justify-center md:justify-start gap-4">
            <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="transparent" />
                <circle cx="40" cy="40" r="32" stroke="#4f46e5" strokeWidth="6" fill="transparent" strokeDasharray="201" strokeDashoffset={201 - (201 * completionPercent) / 100} className="transition-all duration-500" />
              </svg>
              <span className="absolute text-sm font-black text-white">{completionPercent}%</span>
            </div>
            <div className="space-y-1 text-left">
              <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-bold">TIẾN ĐỘ CỦA BẠN</p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Đã học xong <strong className="text-white">{completedLessonIds.length}</strong> trong tổng số {LESSONS_DATA.length} bài học tinh gọn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Scholarship Challenges */}
      <div className="bg-emerald-50 rounded-3xl border border-emerald-150 p-6 md:p-8 shadow-sm relative overflow-hidden">
        {/* Subtle decorative stamp background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <h3 className="text-sm font-black text-emerald-950 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            CHƯƠNG TRÌNH THỬ THÁCH HỌC BỔNG KỶ LUẬT
          </h3>
          <span className="text-[10px] bg-emerald-250 text-emerald-800 px-3 py-1 rounded-full font-bold uppercase tracking-tight">Học bổng đặc biệt</span>
        </div>
        <p className="text-xs text-emerald-900 mb-6 leading-relaxed">
          Được thiết kế nhằm kiến tạo thói quen tự học kỷ luật sắt. Khi các mốc học tập dưới đây đạt 100%, hãy nhấp nút <strong className="text-emerald-950 font-bold">Nhận Học Bổng</strong> để quy đổi phần thưởng thành học bổng khóa học tương ứng cực kỳ giá trị!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scholarships.map((task) => {
            const isCompleted = task.isCompleted;
            const progressRatio = task.requirementValue > 0 ? (task.progress / task.requirementValue) : 0;
            const taskPercent = Math.min(100, Math.round(progressRatio * 100));

            return (
              <div
                key={task.id}
                className={`border rounded-2xl p-4 flex flex-col justify-between transition relative shadow-sm ${
                  task.claimed
                    ? 'border-emerald-300 bg-emerald-100/30'
                    : isCompleted
                    ? 'border-indigo-200 bg-indigo-50/20'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {task.claimed && (
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    ĐÃ NHẬN QUỸ KHUYẾN HỌC
                  </div>
                )}
                
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase font-mono border border-amber-100">
                      Học Bổng Trị Giá: {task.rewardValue}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-800 leading-snug">{task.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">{task.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                    <span>Tiến độ:</span>
                    <span>{task.progress} / {task.requirementValue} ({taskPercent}%)</span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-3">
                    <div
                      style={{ width: `${taskPercent}%` }}
                      className={`h-full rounded-full transition-all duration-350 ${
                        task.claimed ? 'bg-emerald-500' : isCompleted ? 'bg-indigo-600' : 'bg-slate-400'
                      }`}
                    />
                  </div>

                  {!task.claimed ? (
                    <button
                      onClick={() => handleClaimReward(task.id, task.rewardValue)}
                      disabled={!isCompleted}
                      className={`w-full text-center py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isCompleted
                          ? 'bg-indigo-600 hover:bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-400 border border-slate-100 cursor-not-allowed'
                      }`}
                    >
                      {isCompleted ? '🏆 Nhận Học Bổng Ngay!' : '🔒 Chưa Đủ Điều Kiện'}
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" /> Đã khấu trừ vào học phí
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checklist Grid grouped by Phase */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Trình Check Hoàn Thành Lộ Trình Lớp Học Gốc Rễ
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Đánh dấu các bài bạn đã nắm chắc lý thuyết để tự động tính điểm thi đua và tiến cấp lộ trình.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-100 shrink-0">
            {(['All', 'Phase 1', 'Phase 2', 'Phase 3'] as const).map((phase) => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`text-[10px] font-bold px-2.5 py-1.5 rounded-md transition cursor-pointer select-none ${
                  selectedPhase === phase
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {phase === 'All' ? 'Tất Cả' : phase === 'Phase 1' ? 'G.Đoạn 1' : phase === 'Phase 2' ? 'G.Đoạn 2' : 'G.Đoạn 3'}
              </button>
            ))}
          </div>
        </div>

        {/* List layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onToggleLesson(lesson.id)}
                className={`p-3.5 border rounded-xl flex items-start gap-3 transition cursor-pointer select-none hover:border-slate-350 ${
                  isCompleted
                    ? 'border-indigo-150 bg-indigo-50/5'
                    : 'border-slate-150 bg-white'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5.25 h-5.25 text-indigo-600 fill-indigo-100" />
                  ) : (
                    <Circle className="w-5.25 h-5.25 text-slate-300 hover:text-slate-400" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold font-mono tracking-wide text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      {lesson.code}
                    </span>
                    <span className="text-[9px] text-indigo-500 bg-indigo-50/70 px-1.5 py-0.5 rounded font-mono">
                      Instructor: {lesson.instructor}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {lesson.title}
                  </h4>
                  
                  <p className="text-[10px] text-slate-500 leading-relaxed mt-1 line-clamp-2">
                    {lesson.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
