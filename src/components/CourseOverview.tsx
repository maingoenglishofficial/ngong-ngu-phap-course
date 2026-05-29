/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CourseLesson } from '../types';
import { LESSONS_DATA } from '../data';
import { 
  Users, CheckCircle2, Route, BookOpen, Clock, Award, ChevronDown, ChevronUp, AlertCircle, HelpCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function CourseOverview() {
  const [activeTab, setActiveTab] = useState<'audience' | 'curriculum' | 'roadmap'>('audience');
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);

  // Group lessons by Phase
  const phase1 = LESSONS_DATA.filter(l => l.phase === 'Phase 1: Core Grammar');
  const phase2 = LESSONS_DATA.filter(l => l.phase === 'Phase 2: Tenses & Modals');
  const phase3 = LESSONS_DATA.filter(l => l.phase === 'Phase 3: Conditionals & Advanced');

  const toggleLesson = (id: string) => {
    setExpandedLessonId(expandedLessonId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
      {/* Hero Showcase Section: The Value Proposition */}
      <section className="bg-indigo-600 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-tight tracking-tight">
          Thay thế 12 năm học phổ thông <br/>
          <span className="text-indigo-200">bằng 2 năm tinh gọn thực chiến.</span>
        </h2>
        <p className="text-indigo-100 text-sm md:text-base max-w-2xl leading-relaxed">
          Tập trung dứt điểm vào bản chất ngữ pháp thực chiến kết hợp sơ đồ bản đồ lộ trình chi tiết hằng ngày, giúp bạn bứt phá từ &ldquo;mất gốc&rdquo; đến &ldquo;làm chủ tuyệt đối&rdquo; một cách có hệ thống.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold">Core Grammar</span>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold">Practical Mastery</span>
          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold">Mastery Learning</span>
        </div>
      </section>

      {/* Upper Navigation Tabs */}
      <div className="flex border-b border-slate-100 mb-6 gap-2">
        <button
          onClick={() => setActiveTab('audience')}
          className={`pb-3 text-sm font-semibold tracking-tight transition-all border-b-2 px-3 cursor-pointer ${
            activeTab === 'audience'
              ? 'border-indigo-600 text-indigo-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          👤 Khóa Học Dành Cho Ai?
        </button>
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`pb-3 text-sm font-semibold tracking-tight transition-all border-b-2 px-3 cursor-pointer ${
            activeTab === 'curriculum'
              ? 'border-indigo-600 text-indigo-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          📚 Trọng Tâm Học Những Gì?
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`pb-3 text-sm font-semibold tracking-tight transition-all border-b-2 px-3 cursor-pointer ${
            activeTab === 'roadmap'
              ? 'border-indigo-600 text-indigo-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          🗺️ Lộ Trình 2 Năm Chi Tiết
        </button>
      </div>

      {/* Tab 1: Audience */}
      {activeTab === 'audience' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-850">
                Ai Nên Đồng Hành Cùng Lộ Trình 2 Năm Này?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hầu hết chúng ta đã trải qua <strong className="text-red-600">12 năm học tiếng Anh phổ thông</strong> nhưng khi viết một email, đi phỏng vấn hay giao tiếp vẫn luôn gặp phải tình trạng lúng túng, sợ hãi, hoặc bồi từ thiếu logic. 
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Khóa học &ldquo;2 Năm Ngữ Pháp&rdquo; ra đời để tái chuẩn hóa lại toàn bộ tư duy ngôn ngữ của bạn từ gốc rễ, tập trung cao độ trong vòng 2 năm để đạt phản xạ dùng tiếng Anh tự tin trọn đời.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex gap-2.5 items-start mb-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold">
                  Dành cho ai?
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-indigo-500 mt-1">●</span>
                  <span>Người học tiếng Anh nhiều năm nhưng chưa tự tin giao tiếp.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-indigo-500 mt-1">●</span>
                  <span>Sinh viên cần nền tảng ngữ pháp vững chắc để thi chứng chỉ.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-indigo-500 mt-1">●</span>
                  <span>Người đi làm muốn làm chủ văn phong chuyên nghiệp.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
            <div className="p-5 bg-white border border-slate-200 rounded-3xl hover:border-slate-300 transition shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 font-extrabold mb-3.5 border border-orange-100">
                01
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">Học Viên Mất Gốc Toàn Diện</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Biết từ lẻ tẻ nhưng không thể ghép thành câu chuẩn ngữ pháp. Luôn dịch word-by-word và hay mắc các lỗi nghiêm trọng về chia động từ, thiếu &ldquo;tobe&rdquo; hay đặt từ sai trật tự.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-3xl hover:border-slate-300 transition shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold mb-3.5 border border-indigo-100">
                02
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">Người Muốn Làm Kỹ Viết & Nói</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Cần tiếng Anh thực chiến phục vụ công việc viết email trao đổi với đối tác nước ngoại, soạn thảo báo cáo, slide thuyết trình hoặc muốn thi đạt các chứng chỉ quốc tế uy tín.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-3xl hover:border-slate-300 transition shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-extrabold mb-3.5 border border-emerald-100">
                03
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1.5">Người Bận Rộn Kỷ Luật Cao</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Muốn ngưng việc học lan man kéo dài nhiều năm vô ích. Sẵn sàng tập trung cao độ trong vòng 2 năm để giải quyết triệt để môn tiếng Anh, mở ra các cơ hội thăng tiến đột phá.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Curriculum Highlights */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 bg-indigo-50/50 p-4 border border-indigo-50 rounded-xl">
            <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <p className="text-xs text-indigo-950 font-medium leading-relaxed">
              <strong>Khóa học học những gì?</strong> Chúng tôi tập trung bóc tách các quy luật tối giản cốt lõi của câu tiếng Anh. Thay vì học dồn dập hàng nghìn công thức riêng lẻ, học viên nắm vững <strong>&ldquo;Bộ luật thần chú&rdquo;</strong> thống nhất từ cách cấu tạo cụm danh từ cho đến các liên kết động từ khuyết thiếu nâng cao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            <div className="border border-slate-100 rounded-xl p-4 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                Hệ Thống Thần Chú Phản Xạ Nhanh
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600 leading-normal">
                <p><strong>• Thần chú &ldquo;Tối thiểu 1 động từ&rdquo;:</strong> Khóa chặt lỗi dịch thiếu động từ liên kết, giúp viết chuẩn không thể sai lệch cấu trúc câu đơn.</p>
                <p><strong>• Thần chú &ldquo;Dịch ngược cụm danh từ&rdquo;:</strong> Thành thạo mổ xẻ và viết các cụm phức tạp dài đến 4 - 5 từ tự nhiên như người bản xứ.</p>
                <p><strong>• Thần chú &ldquo;Động từ thứ hai phụ thuộc&rdquo;:</strong> Cách chia to-V, V-ing, V3 nhanh như chớp khi trong câu phối hợp nhiều hành động.</p>
              </div>
            </div>

            <div className="border border-slate-100 rounded-xl p-4 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                Xây Dựng Cấu Trúc Động Não Nâng Cao
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600 leading-normal">
                <p><strong>• Quy tắc OSASCOMP:</strong> Thầy thuộc lòng trật tự 8 loại tính từ từ quan điểm chủ quan đến đặc điểm vật lý khách quan của đồ vật.</p>
                <p><strong>• Quy tắc &ldquo;Danh từ nhỏ&rdquo;:</strong> Hiểu cặn kẽ vì sao clothes shop bắt buộc giữ số ít và cách tạo tính từ ghép có gạch ngang.</p>
                <p><strong>• Biến thể Câu điều kiện Hỗn hợp (Mixed):</strong> Làm chủ các câu giả phán đoán, tiếc nuối ngược thời gian đắt giá trong văn phong chuyên nghiệp.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Detailed 2-Year Roadmap from CSV data */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold text-slate-950 flex items-center gap-1.5">
              <Route className="w-5.5 h-5.5 text-indigo-600" />
              Bản Đồ Hành Trình Học Tập 2 Năm
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Nhấp vào từng bài học cụ thể bên dưới để xem tóm tắt nội dung lý thuyết bản chất chi tiết.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phase 1 Accordion */}
            <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm border-l-4 border-l-indigo-300 bg-white">
              <div className="bg-slate-50/70 p-4 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                    GIAI ĐOẠN 1 • THÁNG 1-6
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-800 mt-1.5">
                    Thần Chú Ngữ Pháp Cốt Lõi (Core Essence)
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-semibold font-mono bg-white px-2.5 py-1 rounded border border-slate-200 shadow-3xs">
                  {phase1.length} Bài học chính
                </span>
              </div>
              <div className="p-3 bg-white divide-y divide-slate-100">
                {phase1.map((lesson) => (
                  <div key={lesson.id} className="py-2.5">
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className="w-full text-left flex items-center justify-between gap-2.5 hover:bg-slate-50/50 p-1.5 rounded-lg transition-all cursor-pointer"
                    >
                      <div className="flex gap-2.5 items-center">
                        <span className="font-mono text-xs font-bold text-slate-500 shrink-0 bg-slate-100 px-2 py-0.5 rounded">
                          {lesson.code}
                        </span>
                        <span className="font-semibold text-xs text-slate-800 leading-normal">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-1.5 py-0.5 rounded">
                          Giảng viên: {lesson.instructor}
                        </span>
                        {expandedLessonId === lesson.id ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>
                    {expandedLessonId === lesson.id && (
                      <div className="mt-3 mx-4 p-3 bg-indigo-50/10 rounded-xl border border-indigo-100/40 text-xs text-slate-600 animate-slide-down space-y-1.5 leading-relaxed">
                        <p><strong>Mô tả chi tiết:</strong> {lesson.content}</p>
                        <p className="text-[10px] text-indigo-600 bg-indigo-50/20 px-2.5 py-1 rounded font-medium inline-block">
                          ✍️ Ghi chú: {lesson.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 2 Accordion */}
            <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm border-l-4 border-l-indigo-550 bg-white">
              <div className="bg-slate-50/70 p-4 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                    GIAI ĐOẠN 2 • THÁNG 7-12
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-800 mt-1.5">
                    Bản Chất Thì & Hệ Thống Động Từ Thực Tế
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-semibold font-mono bg-white px-2.5 py-1 rounded border border-slate-200 shadow-3xs">
                  {phase2.length} Bài học chính
                </span>
              </div>
              <div className="p-3 bg-white divide-y divide-slate-100">
                {phase2.map((lesson) => (
                  <div key={lesson.id} className="py-2.5">
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className="w-full text-left flex items-center justify-between gap-2.5 hover:bg-slate-50/50 p-1.5 rounded-lg transition-all cursor-pointer"
                    >
                      <div className="flex gap-2.5 items-center">
                        <span className="font-mono text-xs font-bold text-slate-500 shrink-0 bg-slate-100 px-2 py-0.5 rounded">
                          {lesson.code}
                        </span>
                        <span className="font-semibold text-xs text-slate-800 leading-normal">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-1.5 py-0.5 rounded">
                          Giảng viên: {lesson.instructor}
                        </span>
                        {expandedLessonId === lesson.id ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>
                    {expandedLessonId === lesson.id && (
                      <div className="mt-3 mx-4 p-3 bg-indigo-50/10 rounded-xl border border-indigo-100/40 text-xs text-slate-600 animate-slide-down space-y-1.5 leading-relaxed">
                        <p><strong>Mô tả chi tiết:</strong> {lesson.content}</p>
                        <p className="text-[10px] text-indigo-600 bg-indigo-50/20 px-2.5 py-1 rounded font-medium inline-block">
                          ✍️ Ghi chú: {lesson.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3 Accordion */}
            <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm border-l-4 border-l-indigo-800 bg-white">
              <div className="bg-slate-50/70 p-4 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                    GIAI ĐOẠN 3 • THÁNG 13-24
                  </span>
                  <h4 className="font-extrabold text-sm text-slate-800 mt-1.5">
                    Mệnh Đề Giả Định & Tư Duy Cấu Trúc Nâng Cao
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-semibold font-mono bg-white px-2.5 py-1 rounded border border-slate-200 shadow-3xs">
                  {phase3.length} Bài học chính
                </span>
              </div>
              <div className="p-3 bg-white divide-y divide-slate-100">
                {phase3.map((lesson) => (
                  <div key={lesson.id} className="py-2.5">
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className="w-full text-left flex items-center justify-between gap-2.5 hover:bg-slate-50/50 p-1.5 rounded-lg transition-all cursor-pointer"
                    >
                      <div className="flex gap-2.5 items-center">
                        <span className="font-mono text-xs font-bold text-slate-500 shrink-0 bg-slate-100 px-2 py-0.5 rounded">
                          {lesson.code}
                        </span>
                        <span className="font-semibold text-xs text-slate-800 leading-normal">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-1.5 py-0.5 rounded">
                          Giảng viên: {lesson.instructor}
                        </span>
                        {expandedLessonId === lesson.id ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>
                    {expandedLessonId === lesson.id && (
                      <div className="mt-3 mx-4 p-3 bg-indigo-50/10 rounded-xl border border-indigo-100/40 text-xs text-slate-600 animate-slide-down space-y-1.5 leading-relaxed">
                        <p><strong>Mô tả chi tiết:</strong> {lesson.content}</p>
                        <p className="text-[10px] text-indigo-600 bg-indigo-50/20 px-2.5 py-1 rounded font-medium inline-block">
                          ✍️ Ghi chú: {lesson.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
