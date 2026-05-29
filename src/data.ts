/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourseLesson, ScholarshipTask, LeaderboardUser } from './types';

export const LESSONS_DATA: CourseLesson[] = [
  // Phase 1
  {
    id: 'L1',
    code: 'Lesson 1',
    title: 'Ngữ pháp là gì?',
    lectureStatus: 'View',
    docxStatus: 'Uncheck',
    note: 'Kiến thức cốt lõi nền tảng',
    content: 'Định nghĩa khoa học và bản chất của ngữ pháp: Không phải học vẹt công thức mà là xây dựng hệ thống tư duy logic, giúp chuyển ý nghĩ thành câu nói tự nhiên và chính xác.',
    instructor: 'Linh',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L2',
    code: 'Lesson 2',
    title: 'Đọc 20 Hiểu 80',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quy tắc tối ưu hóa phân tích câu',
    content: 'Muốn hiểu một câu dài không cần biết toàn bộ từ mới. Tập trung vào việc quét câu, xác định Subject (Chủ ngữ) và Verb (Động từ chính) để nắm bắt ngay 80% cốt lõi ý nghĩa của câu.',
    instructor: 'Linh',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L3',
    code: 'Lesson 3',
    title: 'Thần chú: Tối thiểu 1 Động từ',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Sửa lỗi dịch kinh điển của người Việt',
    content: 'Mọi câu tiếng Anh hoàn chỉnh đều bắt buộc phải có ít nhất một động từ (trái tim câu). Khắc phục hoàn toàn lỗi chuyển ngữ thiếu động từ "Tôbe" từ tiếng Việt như: Noun + Adj (ví dụ: She beautiful -> She IS beautiful). Áp dụng công thức: Noun + Linking Verb + Adj.',
    instructor: 'Huyền',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L4',
    code: 'Lesson 4',
    title: 'Thần chú: Động từ thứ 2 không đứng một mình',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quy tắc chia động từ phụ',
    content: 'Trong một câu đơn, chỉ có một động từ chính được chia theo thì. Động từ thứ hai phụ thuộc bắt buộc phải biến đổi dạng thức: biến thành to-V, V-ing, hoặc V3/ed chứ tuyệt đối không được tự tiện đứng ở dạng nguyên mẫu không chia bên cạnh nhau.',
    instructor: 'Linh',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L5',
    code: 'Lesson 5',
    title: 'Thần chú: Cụm danh từ dịch ngược',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Tư duy mổ xẻ cụm danh từ phức tạp',
    content: 'Khi dịch cụm danh từ (Noun Phrase) từ Anh sang Việt và ngược lại, trật từ sắp xếp bị đảo ngược. Danh từ cốt lõi (Head Noun) đứng ở ĐẦU cụm trong tiếng Việt, nhưng bắt buộc đứng ở CUỐI cụm trong tiếng Anh. Các từ bổ nghĩa đứng phía trước phụ họa.',
    instructor: 'Huyền',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L6',
    code: 'Lesson 6',
    title: 'Thần chú: Danh từ đếm được không đứng một mình',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Sử dụng mạo từ & số nhiều',
    content: 'Danh từ đếm được ở số ít (Countable Singular Noun) không bao giờ được đứng trơ trọi. Nó buộc phải đi kèm với một mạo từ (a, an, the), từ chỉ định (this, that), từ sở hữu (my, his) hoặc biến đổi thành số nhiều (thêm s/es).',
    instructor: 'Huyền',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L7',
    code: 'Lesson 7',
    title: 'Thần chú: Thời gian không đứng một mình',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Tương quan giới từ thời gian',
    content: 'Khi chỉ mốc thời gian, địa điểm, các trạng từ không thể đứng lo lửng mà cần có giới từ (at, on, in) đi kèm định vị không gian và chu kỳ thời gian rõ rệt.',
    instructor: 'Linh',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L8',
    code: 'Lesson 8',
    title: 'Thần chú: Giới từ "To" và những người bạn',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Bản chất hướng đích của TO',
    content: 'Bản chất của giới từ "to" là sự hướng đích, kết nối di chuyển. Khảo sát các cụm giới từ phổ biến đi kèm để không bị nhầm lẫn khi cấu tạo bổ ngữ.',
    instructor: 'Linh',
    phase: 'Phase 1: Core Grammar'
  },
  {
    id: 'L9',
    code: 'Lesson 9',
    title: 'Thần chú: Số đi với hundred, thousand, million không có "s"',
    lectureStatus: 'View',
    docxStatus: 'Uncheck',
    note: 'Quy tắc số đếm chính xác',
    content: 'Khi có số đếm cụ thể đứng trước (như two, five), các danh từ chỉ đơn vị đo lường như hundred, thousand, million, billion KHÔNG được thêm "s". Chỉ thêm "s" khi mang nghĩa chung chung như "hàng nghìn", "hàng triệu" (thousands of, millions of).',
    instructor: 'Mai',
    phase: 'Phase 1: Core Grammar'
  },

  // Phase 2
  {
    id: 'B01',
    code: 'Lesson B01',
    title: 'Thì là gì? Bản chất trục thời gian',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Tư duy bản chất về thì',
    content: 'Tại sao lại có "Thì" trong tiếng Anh? Tư duy về sự kiện dựa trên trạng thái (tại một thời điểm, kéo dài, lập lại hay đã hoàn tất) thay vì học vẹt công thức cứng nhắc.',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B02',
    code: 'Lesson B02',
    title: '04 Thì hiện tại cốt lõi',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Hiện tại đơn, tiếp diễn, hoàn thành...',
    content: 'Xử lý triệt để 4 trạng thái của hiện tại: Hiện tại đơn (sự thật, lịch trình), Hiện tại tiếp diễn (đang diễn ra), Hiện tại hoàn thành (kết quả ở hiện tại) và Hiện tại hoàn thành tiếp diễn (nhấn mạnh tính liên tục kéo dài).',
    instructor: 'Huyền',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B03',
    code: 'Lesson B03',
    title: '04 Thì quá khứ thực nghiệm',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quá khứ đơn, hoàn thành...',
    content: 'Thấu hiểu cách lùi thì và phối hợp thì trong quá khứ: Quá khứ đơn (mốc thời gian đóng), Quá khứ tiếp diễn (hành động đang xảy ra cắt ngang), Quá khứ hoàn thành (hành động xảy ra TRƯỚC một hành động quá khứ khác).',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B04',
    code: 'Lesson B04',
    title: '04 Thì tương lai xa gần',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Tương lai đơn, gần, hoàn thành',
    content: 'Phân biệt Will vs Be going to; Tương lai tiếp diễn và tương lai hoàn thành (mốc hoàn thành ý hướng trước thời điểm tương lai).',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B05',
    code: 'Lesson B05',
    title: 'Phối hợp thì chuyên sâu',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Kết hợp mệnh đề thời gian',
    content: 'Công thức và tư duy phối hợp các thì trong câu phức: tương lai đi với hiện tại trong mệnh đề thời gian (when, as soon as, by the time), quá khứ đi với quá khứ hoàn thành.',
    instructor: 'Huyền',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B06',
    code: 'Lesson B06',
    title: 'Hệ thống từ để hỏi (Interrogatives)',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Làm chủ câu hỏi',
    content: 'Chiến thuật đảo trợ động từ lên trước chủ ngữ. Cách sử dụng từ để hỏi WHO, WHOM, WHOSE, WHICH, WHAT phức tạp trong văn nói thực tế.',
    instructor: 'Mai',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B08',
    code: 'Lesson B08',
    title: 'Câu bị động (Passive Voice) - Tư duy khách quan',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Sử dụng bị động tự nhiên',
    content: 'Thay vì chỉ đổi chủ - vị theo cách làm bài tập, học cách khi nào nên dùng thể bị động để tăng tính khách quan, trang trọng trong email, báo cáo khoa học.',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B09',
    code: 'Lesson B09',
    title: 'Động từ khuyết thiếu (Modal Verbs) tổng quan',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Biểu thị thái độ người nói',
    content: 'Bản chất của Modal Verbs là biến đổi mức độ cam kết, khả năng hoặc nghĩa vụ của hành động chính (must, can, should, may).',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B14',
    code: 'Lesson B14',
    title: 'Thần chú nâng cao: Modal + Have + V3/ed',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Phán đoán suy luận trong quá khứ',
    content: 'Làm chủ cấu trúc tuyệt vời nhất của động từ tình thái: phán đoán sự việc trong quá khứ. Phân biệt: Must have V3 (chắc chắn đã làm), Should have V3 (đáng lẽ nên làm nhưng không làm), Could have V3 (đã có thể làm nhưng không).',
    instructor: 'Mai',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B15',
    code: 'Lesson B15',
    title: 'Câu tường thuật (Reported Speech)',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Lùi thì và chuyển đổi đại từ',
    content: 'Quy tắc lùi thì tự nhiên xuất phát từ khoảng cách thời gian từ lúc phát ngôn đến lúc thuật lại câu chuyện. Sự dịch chuyển trạng từ thời gian và không gian.',
    instructor: 'Linh',
    phase: 'Phase 2: Tenses & Modals'
  },
  {
    id: 'B16',
    code: 'Lesson B16',
    title: 'Khái niệm "Động từ rộng"',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Các động từ đa năng và Collocation',
    content: 'Các động từ rộng (như GEt, MAKE, TAKE, HAVE, DO) là nguyên liệu chính chiếm 70% văn nói thường ngày. Hiểu cấu trúc kết hợp đa dụng của chúng.',
    instructor: 'Huyền',
    phase: 'Phase 2: Tenses & Modals'
  },

  // Phase 3
  {
    id: 'C1',
    code: 'Lesson C1',
    title: 'Câu điều kiện (Conditionals) & Bản chất giả định',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Logic 3 loại điều kiện cốt lõi',
    content: 'Thấu hiểu logic 3 loại điều kiện: Loại 1 (Sự thật/Khả năng cao xảy ra ở tương lai), Loại 2 ("Chém gió" - giả định không có thật ở hiện tại), Loại 3 (Mong muốn quay ngược thời gian sửa sai quá khứ).',
    instructor: 'Huyền',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C1_2',
    code: 'Lesson C1 - P2',
    title: 'Giải mã bản chất Danh từ',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Cấu tạo hoàn chỉnh cụm danh từ bồi',
    content: 'Cấu trúc mổ xẻ cụm danh từ nâng cao: [Hạn định từ (Determiner) + Tính từ (Adjective) + Danh từ nhỏ bổ nghĩa (Noun phụ) + Danh từ chính đầu não (Head Noun)]. Thấu hiểu nguyên lý "Đầu não quyết định số ít nhiều còn Tay chân đứng trước phục vụ".',
    instructor: 'Linh',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C2',
    code: 'Lesson C2',
    title: 'Biến thể Câu điều kiện Loại 1',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Mở rộng thực tế Loại 1',
    content: 'Vận dụng biến thể Loại 1 tích hợp câu mệnh lệnh, động từ khuyết thiếu, hoặc điều kiện Loại 0 chỉ quy luật vật lý. Tránh nhầm lẫn với hình thái loại 2 khi diễn đạt sự thật lịch sử.',
    instructor: 'Linh',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C2_2',
    code: 'Lesson C2 - P2',
    title: 'Danh từ đếm được & không đếm được mở rộng',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quy tắc chia động từ phức tạp',
    content: 'Phân tích tỉ mỉ các danh từ mang tính trừu tượng hoặc vật lý cực nhỏ dễ nhầm lẫn. Từ vừa đếm được vừa không đếm được tùy thuộc ngữ cảnh (Ví dụ: Paper - giấy vs Paper - bài báo).',
    instructor: 'Huyền',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C2_3',
    code: 'Lesson C2 - P3',
    title: 'Trật tự tính từ: Thần chú OSASCOMP',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quy tắc xếp tính từ tự nhiên',
    content: 'Khi có nhiều tính từ đứng trước bổ nghĩa cho danh từ, thứ tự sắp xếp bắt buộc theo công thức: Opinion (Ý kiến) -> Size (Kích cỡ) -> Age (Tuổi) -> Shape (Hình dạng) -> Color (Màu) -> Origin (Nguồn gốc) -> Material (Chất liệu) -> Purpose (Mục đích).',
    instructor: 'Huyền',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C3',
    code: 'Lesson C3',
    title: 'Câu điều kiện Loại 2 chi tiết',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Cực kỳ quan trọng: Quy tắc To be WERE',
    content: 'Trong câu giả định Loại 2, động từ TO BE luôn chia là "WERE" cho mọi ngôi (I, he, she, it, they). Cách dùng "If I were you" để khuyên nhủ khéo léo.',
    instructor: 'Mai',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C3_2',
    code: 'Lesson C3 - P2',
    title: 'Bản chất "Danh từ nhỏ" & Tính từ ghép',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Không bao giờ thêm S vào danh từ nhỏ phụ',
    content: 'Khi danh từ phụ đứng trực tiếp trước danh từ chính để bổ nghĩa, nó đóng vai trò như một tính từ và TUYỆT ĐỐI không được thêm "s". Ví dụ: clothes shop (shop quần áo), shoe store (tiệm giày). Đồng thời học cách tạo tính từ ghép có dấu gạch ngang chỉ số đếm (a 5-year-old child).',
    instructor: 'Linh',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C4',
    code: 'Lesson C4',
    title: 'Câu điều kiện Loại 3 và sự hối tiếc',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Quá khứ hoàn thành + Would have V3',
    content: 'Cách giả định ngược dòng thời gian để biểu đạt sự tiếc nuối hoặc rút kinh nghiệm sâu sắc về những việc đã xảy ra trong quá khứ.',
    instructor: 'Mai',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C5',
    code: 'Lesson C5',
    title: 'Câu điều kiện Hỗn hợp (Mixed Conditionals)',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Trộn lẫn thời gian sự kiện',
    content: 'Khi nguyên nhân xảy ra ở quá khứ gây kết quả ở hiện tại (Mix loại 3-2: If I had studied harder in high school, I would speak English fluently now) hoặc ngược lại.',
    instructor: 'Huyền',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C7',
    code: 'Lesson C7',
    title: 'Cấu trúc ước muốn WISH / IF ONLY',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'Giả định mong cầu ước muốn',
    content: 'Cách hạ một thì để diễn tả điều ước: ước ở tương lai (Would + V), ước ở hiện tại (Quá khứ đơn), ước thay đổi quá khứ (Quá khứ hoàn thành).',
    instructor: 'Linh',
    phase: 'Phase 3: Conditionals & Advanced'
  },
  {
    id: 'C8',
    code: 'Lesson C8',
    title: 'Giả định Unreal Structures nâng cao khác',
    lectureStatus: 'View',
    docxStatus: 'Edit',
    note: 'As if, As though, It is high time...',
    content: 'Sử dụng cấu trúc It is high time (đã đến lúc phải làm gì - chia quá khứ đơn), As if/As though (như thể là), Would rather (muốn ai làm gì đó hơn). Kết thúc lộ trình 2 năm tinh hoa đầy bản lĩnh.',
    instructor: 'Linh',
    phase: 'Phase 3: Conditionals & Advanced'
  }
];

export const INITIAL_SCHOLARSHIP_TASKS: ScholarshipTask[] = [
  {
    id: 'st-1',
    title: 'Thử thách Kỷ Luật Sắt',
    description: 'Duy trì chuỗi học tập liên tục trong 7 ngày trên ứng dụng.',
    rewardValue: '300.000đ',
    requirementType: 'streak',
    requirementValue: 7,
    progress: 3,
    isCompleted: false,
    claimed: false
  },
  {
    id: 'st-2',
    title: 'Chiến Binh Thần Chú',
    description: 'Hoàn thành tích đánh dấu "Đã học xong" toàn bộ 9 bài của Phase 1: Thần chú cốt lõi.',
    rewardValue: '500.000đ',
    requirementType: 'lesson_completion',
    requirementValue: 9,
    progress: 4,
    isCompleted: false,
    claimed: false
  }
];

export const INITIAL_LEADERBOARD_USERS: LeaderboardUser[] = [
  {
    id: 'user-1',
    name: 'Nguyễn Minh Quân',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    points: 1250,
    streak: 15,
    completedLessonsCount: 18,
    scholarshipTier: 'Hạng Vàng'
  },
  {
    id: 'user-2',
    name: 'Trần Khánh Linh',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    points: 980,
    streak: 12,
    completedLessonsCount: 14,
    scholarshipTier: 'Hạng Bạc'
  },
  {
    id: 'user-3',
    name: 'Lê Hoàng Hải',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    points: 840,
    streak: 8,
    completedLessonsCount: 10,
    scholarshipTier: 'Hạng Đồng'
  },
  {
    id: 'user-current',
    name: 'Học viên Ưu tú (Bạn)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    points: 380,
    streak: 3,
    completedLessonsCount: 5,
    scholarshipTier: 'Chưa đạt',
    isCurrentUser: true
  },
  {
    id: 'user-5',
    name: 'Phạm Phương Thảo',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    points: 710,
    streak: 6,
    completedLessonsCount: 8,
    scholarshipTier: 'Hạng Đồng'
  },
  {
    id: 'user-6',
    name: 'Vũ Quốc Khánh',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    points: 620,
    streak: 5,
    completedLessonsCount: 7,
    scholarshipTier: 'Chưa đạt'
  }
];
