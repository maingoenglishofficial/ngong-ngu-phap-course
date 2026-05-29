/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CourseLesson {
  id: string; // e.g., 'L1', 'B02', 'C1'
  code: string; // e.g., 'Lesson 1', 'Lesson B02', 'Lesson C1'
  title: string;
  lectureStatus: string; // 'View', etc.
  docxStatus: string; // 'Edit', 'Uncheck', etc.
  note: string;
  content: string; // Brief description summary of the lesson
  instructor?: string; // e.g., 'Linh', 'Huyền', 'Mai'
  phase: 'Phase 1: Core Grammar' | 'Phase 2: Tenses & Modals' | 'Phase 3: Conditionals & Advanced';
}

export interface ScholarshipTask {
  id: string;
  title: string;
  description: string;
  rewardValue: string; // Value in VND (e.g., '500.000đ', '1.000.000đ')
  requirementType: 'streak' | 'lesson_completion';
  requirementValue: number; // e.g., 7 days, 15 lessons
  progress: number;
  isCompleted: boolean;
  claimed: boolean;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
  streak: number;
  completedLessonsCount: number;
  scholarshipTier?: string; // e.g., 'Hạng Vàng', 'Hạng Bạc', 'Hạng Đồng', 'Chưa đạt'
  isCurrentUser?: boolean;
}
