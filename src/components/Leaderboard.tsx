/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LeaderboardUser } from '../types';
import { INITIAL_LEADERBOARD_USERS } from '../data';
import { 
  Trophy, Flame, Users, Sparkles, Star, Award, TrendingUp, Info, HelpCircle
} from 'lucide-react';

interface LeaderboardProps {
  userPoints: number;
  userStreak: number;
  completedLessonsCount: number;
  currentUserName: string;
}

export default function Leaderboard({
  userPoints,
  userStreak,
  completedLessonsCount,
  currentUserName
}: LeaderboardProps) {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'points' | 'streak' | 'lessons'>('points');
  const [liveLog, setLiveLog] = useState('');

  // Hydrate leaderboard structure
  useEffect(() => {
    // Generate initial rank list from state
    const processed = INITIAL_LEADERBOARD_USERS.map(u => {
      if (u.isCurrentUser) {
        return {
          ...u,
          name: currentUserName,
          points: userPoints,
          streak: userStreak,
          completedLessonsCount: completedLessonsCount,
          scholarshipTier: userPoints >= 1000 ? 'Hạng Vàng' : userPoints >= 700 ? 'Hạng Bạc' : userPoints >= 300 ? 'Hạng Đồng' : 'Chưa đạt'
        };
      }
      return u;
    });
    setUsers(processed);
  }, [userPoints, userStreak, completedLessonsCount, currentUserName]);

  // Handle peer activities mock simulator
  const handleSimulatePeerStudies = () => {
    // Select a random simulated target (excluding current user)
    const targets = users.filter(u => !u.isCurrentUser);
    if (targets.length === 0) return;

    const randomIndex = Math.floor(Math.random() * targets.length);
    const chosenOne = targets[randomIndex];

    // Give them some random completions
    const pointIncrement = Math.floor(Math.random() * 3) * 50 + 25;
    const streakIncrement = Math.random() > 0.6 ? 1 : 0;
    const lessonIncrement = Math.random() > 0.5 ? 1 : 0;

    const updated = users.map(u => {
      if (u.id === chosenOne.id) {
        const nextPoints = u.points + pointIncrement;
        const nextStreak = u.streak + streakIncrement;
        const nextCount = u.completedLessonsCount + lessonIncrement;

        return {
          ...u,
          points: nextPoints,
          streak: nextStreak,
          completedLessonsCount: nextCount,
          scholarshipTier: nextPoints >= 1000 ? 'Hạng Vàng' : nextPoints >= 700 ? 'Hạng Bạc' : nextPoints >= 300 ? 'Hạng Đồng' : 'Chưa đạt'
        };
      }
      return u;
    });

    setUsers(updated);
    setLiveLog(`🔥 Bạn học ${chosenOne.name} vừa tích luỹ +${pointIncrement} XP từ ôn bài và tiến trình bài tập!`);
    setTimeout(() => setLiveLog(''), 4500);
  };

  // Sort by selected criteria
  const sortedUsers = [...users].sort((a, b) => {
    if (selectedFilter === 'points') {
      return b.points - a.points;
    } else if (selectedFilter === 'streak') {
      return b.streak - a.streak;
    } else {
      return b.completedLessonsCount - a.completedLessonsCount;
    }
  });

  // Determine current user overall rank
  const currentUserRankIndex = sortedUsers.findIndex(u => u.isCurrentUser);
  const currentUserRank = currentUserRankIndex !== -1 ? currentUserRankIndex + 1 : '--';

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-slate-800 uppercase tracking-tight flex items-center gap-2">
            <Trophy className="w-5.5 h-5.5 text-amber-500 fill-amber-300/20" />
            Bảng Xếp Hạng Cộng Đồng Học Viên Khóa Học
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cùng đua top tự học kỷ luật 2 năm. Nơi tụ hội những chiến binh chăm chỉ nhất Việt Nam.
          </p>
        </div>
        
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleSimulatePeerStudies}
            className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs px-4 py-2 rounded-full font-bold transition-all cursor-pointer shadow-sm border border-amber-200"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" />
            Mô Phỏng Đồng Đội Ôn Bài
          </button>
        </div>
      </div>

      {liveLog && (
        <div className="p-3 mb-5 bg-amber-50 border border-amber-200 text-amber-950 rounded-2xl text-xs font-semibold flex items-center gap-2 animate-fade-in shadow-3xs">
          <TrendingUp className="w-4 h-4 text-amber-600 animate-bounce" />
          <span>{liveLog}</span>
        </div>
      )}

      {/* Sorting Tabs */}
      <div className="flex bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200 mb-6 gap-1.5 w-full max-w-sm">
        <button
          onClick={() => setSelectedFilter('points')}
          className={`flex-1 text-center py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-xl transition-all cursor-pointer ${
            selectedFilter === 'points'
              ? 'bg-white shadow-sm text-indigo-700'
              : 'text-slate-500 hover:text-slate-850'
          }`}
        >
          ⭐ XP Tải
        </button>
        <button
          onClick={() => setSelectedFilter('streak')}
          className={`flex-1 text-center py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-xl transition-all cursor-pointer ${
            selectedFilter === 'streak'
              ? 'bg-white shadow-sm text-indigo-700'
              : 'text-slate-500 hover:text-slate-855'
          }`}
        >
          🔥 Chuỗi ngày
        </button>
        <button
          onClick={() => setSelectedFilter('lessons')}
          className={`flex-1 text-center py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-xl transition-all cursor-pointer ${
            selectedFilter === 'lessons'
              ? 'bg-white shadow-sm text-indigo-700'
              : 'text-slate-500 hover:text-slate-860'
          }`}
        >
          📒 Bài Học
        </button>
      </div>

      {/* Leaderboard Table Grid */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        <div className="bg-slate-50/70 py-3.5 px-4 text-xs font-bold text-slate-500 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-8 text-center uppercase tracking-wider text-[10px]">Hạng</span>
            <span className="cursor-default uppercase tracking-wider text-[10px]">Học Viên</span>
          </div>
          <div className="flex items-center gap-10 md:gap-16 uppercase tracking-wider text-[10px]">
            <span className="w-14 text-center">Chuỗi Streak</span>
            <span className="w-14 text-center">Hoàn Thành</span>
            <span className="w-14 text-right">Tổng Điểm XP</span>
          </div>
        </div>

        <div className="divide-y divide-slate-100 bg-white">
          {sortedUsers.map((user, idx) => {
            const rank = idx + 1;
            const isCurrentUser = user.isCurrentUser;
            
            return (
              <div
                key={user.id}
                className={`py-3.5 px-4 flex items-center justify-between text-xs transition ${
                  isCurrentUser 
                    ? 'bg-indigo-50/50 border-l-4 border-l-indigo-600 font-bold' 
                    : 'hover:bg-slate-50/50'
                }`}
              >
                {/* Ranking and user avatar info */}
                <div className="flex items-center gap-4">
                  <div className="w-8 flex justify-center text-sm font-extrabold">
                    {rank === 1 ? (
                      <span className="text-xl">🥇</span>
                    ) : rank === 2 ? (
                      <span className="text-xl">🥈</span>
                    ) : rank === 3 ? (
                      <span className="text-xl">🥉</span>
                    ) : (
                      <span className="text-slate-400 font-mono">{rank}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                      className="w-8.5 h-8.5 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-slate-800 font-bold truncate block">
                        {user.name} {isCurrentUser && <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded ml-1 font-bold">BẠN</span>}
                      </span>
                      {user.scholarshipTier !== 'Chưa đạt' && (
                        <span className="inline-flex items-center gap-0.5 mt-0.5 text-[9px] bg-amber-50 text-amber-800 font-bold px-1.5 py-0.2 rounded font-mono uppercase border border-amber-200">
                          🏆 {user.scholarshipTier}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Score stats columns */}
                <div className="flex items-center gap-10 md:gap-16">
                  {/* Streak Column */}
                  <div className="w-14 flex items-center justify-center gap-0.5 font-bold text-slate-800">
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    <span className="font-mono">{user.streak} ngày</span>
                  </div>

                  {/* Completed count */}
                  <div className="w-14 text-center font-mono font-bold text-slate-700">
                    {user.completedLessonsCount} bài
                  </div>

                  {/* XP column */}
                  <div className="w-14 text-right font-mono font-black text-indigo-950">
                    {user.points} XP
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social feedback alert */}
      <div className="mt-5 flex items-start gap-3 p-4 bg-indigo-50/20 border border-indigo-150 rounded-3xl text-xs text-slate-655 font-normal">
        <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-extrabold text-indigo-950 block">Làm Thế Nào Để Đạt Học Bổng Thượng Đỉnh?</span>
          <span>Duy trì chuỗi học tập đều đặn, mỗi ngày đánh dấu xong bài tập lý thuyết sẽ tăng điểm danh dự của bạn. Đạt trên 1.000 điểm XP để được xướng tên vào nhóm <strong className="text-indigo-950">Hạng Vàng</strong> và kích hoạt phần thưởng học quỹ tự động tối đa nhé!</span>
        </div>
      </div>
    </div>
  );
}
