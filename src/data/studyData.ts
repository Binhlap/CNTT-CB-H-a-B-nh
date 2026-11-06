export interface ShortcutItem {
  app: 'Windows' | 'MS Word' | 'MS Excel' | 'MS PowerPoint' | 'Chung';
  keys: string[];
  action: string;
  note?: string;
}

export const SHORTCUTS_DATA: ShortcutItem[] = [
  {
    app: 'Windows',
    keys: ['Shift', 'Delete'],
    action: 'Xóa hẳn tập tin/thư mục vĩnh viễn (không qua thùng rác Recycle Bin).',
    note: 'Không thể phục hồi bằng lệnh Restore từ Recycle Bin'
  },
  {
    app: 'Windows',
    keys: ['Print Screen'],
    action: 'Chụp toàn bộ hình ảnh màn hình vào Clipboard.',
  },
  {
    app: 'Windows',
    keys: ['Alt', 'Print Screen'],
    action: 'Chụp riêng hình ảnh của một hộp thoại / cửa sổ đang mở.',
  },
  {
    app: 'Windows',
    keys: ['Alt', 'Tab'],
    action: 'Chuyển nhanh sang cửa sổ ứng dụng khác đang mở.',
  },
  {
    app: 'Windows',
    keys: ['Alt', 'F4'],
    action: 'Đóng ứng dụng hoặc đóng cửa sổ hiện hành.',
  },
  {
    app: 'Windows',
    keys: ['F2'],
    action: 'Đổi tên (Rename) tập tin hoặc thư mục đang được chọn.',
  },
  {
    app: 'Windows',
    keys: ['Ctrl', 'Shift', 'Esc'],
    action: 'Mở nhanh trình quản lý tác vụ Task Manager.',
  },
  {
    app: 'Windows',
    keys: ['Windows', 'D'],
    action: 'Ẩn/hiện màn hình nền Desktop.',
  },
  {
    app: 'MS Word',
    keys: ['Enter'],
    action: 'Kết thúc đoạn văn hiện tại và bắt đầu một đoạn văn mới.',
  },
  {
    app: 'MS Word',
    keys: ['Shift', 'Enter'],
    action: 'Xuống dòng mới trong cùng một đoạn văn (chưa hết đoạn).',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'Enter'],
    action: 'Ngắt trang bắt buộc (tài liệu sang trang mới).',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'Home'],
    action: 'Di chuyển con trỏ văn bản về đầu toàn bộ tài liệu.',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'End'],
    action: 'Di chuyển con trỏ văn bản về cuối toàn bộ tài liệu.',
  },
  {
    app: 'MS Word',
    keys: ['Home'],
    action: 'Đưa con nháy về đầu dòng hiện hành.',
  },
  {
    app: 'MS Word',
    keys: ['End'],
    action: 'Đưa con nháy về cuối dòng hiện hành.',
  },
  {
    app: 'MS Word',
    keys: ['Tab'],
    action: 'Trong bảng (Table): di chuyển qua ô kế tiếp bên phải.',
  },
  {
    app: 'MS Word',
    keys: ['Shift', 'Tab'],
    action: 'Trong bảng (Table): di chuyển lùi về ô trước đó bên trái.',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'Tab'],
    action: 'Chèn ký tự Tab thực sự vào bên trong một ô của bảng tính (Table).',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'A'],
    action: 'Chọn toàn bộ văn bản / đối tượng trong tài liệu.',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'Z'],
    action: 'Hủy thao tác hoặc lệnh gần nhất (Undo).',
  },
  {
    app: 'MS Word',
    keys: ['Ctrl', 'S'],
    action: 'Lưu văn bản hiện tại (Save).',
  },
  {
    app: 'MS Excel',
    keys: ['F2'],
    action: 'Chỉnh sửa trực tiếp nội dung tại ô tính đang chọn.',
  },
  {
    app: 'MS Excel',
    keys: ['Alt', 'Enter'],
    action: 'Xuống dòng mới bên trong cùng một ô tính.',
  },
  {
    app: 'MS Excel',
    keys: ['F4'],
    action: 'Chuyển đổi kiểu địa chỉ ô (tương đối -> tuyệt đối $A$1 -> hỗn hợp).',
  },
  {
    app: 'MS PowerPoint',
    keys: ['F5'],
    action: 'Bắt đầu bài trình chiếu từ Slide đầu tiên.',
  },
  {
    app: 'MS PowerPoint',
    keys: ['Shift', 'F5'],
    action: 'Bắt đầu trình chiếu từ Slide hiện hành đang chọn.',
  },
  {
    app: 'MS PowerPoint',
    keys: ['Esc'],
    action: 'Dừng/thoát bài trình chiếu đang chạy.',
  },
  {
    app: 'MS PowerPoint',
    keys: ['Ctrl', 'N'],
    action: 'Tạo một bài trình diễn mới (New Presentation).',
  },
  {
    app: 'MS PowerPoint',
    keys: ['Ctrl', 'M'],
    action: 'Thêm một Slide mới vào bài trình chiếu hiện tại.',
  },
];

export interface FormulaItem {
  name: string;
  category: 'Hàm tính toán' | 'Hàm logic' | 'Hàm chuỗi & ngày' | 'Mã lỗi & Địa chỉ';
  syntax: string;
  description: string;
  example: string;
  result?: string;
  notes?: string;
}

export const FORMULAS_DATA: FormulaItem[] = [
  {
    name: 'SUMIF',
    category: 'Hàm tính toán',
    syntax: 'SUMIF(range, criteria, [sum_range])',
    description: 'Tính tổng các ô thỏa mãn 1 điều kiện cho trước.',
    example: '=SUMIF(A1:A5, ">5", B1:B5)',
    result: 'Tổng các giá trị tại B tương ứng với A > 5',
    notes: 'Nếu bỏ qua [sum_range], Excel sẽ tính tổng trực tiếp trên range.'
  },
  {
    name: 'VLOOKUP',
    category: 'Hàm tính toán',
    syntax: 'VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
    description: 'Dò tìm giá trị theo cột dọc. Thành phần thứ 3 là số thứ tự cột lấy kết quả.',
    example: '=VLOOKUP(4, A1:B5, 2, 0)',
    result: 'Trả về giá trị cột 2 hoặc lỗi #N/A nếu không tìm thấy',
    notes: 'range_lookup = 0 (FALSE): dò chính xác; = 1 (TRUE): dò tương đối.'
  },
  {
    name: 'COUNT vs COUNTA',
    category: 'Hàm tính toán',
    syntax: 'COUNT(val1, ...) vs COUNTA(val1, ...)',
    description: 'COUNT chỉ đếm các ô/giá trị số. COUNTA đếm tất cả các ô không rỗng (cả số và chữ).',
    example: '=COUNT("A", "B", 1, 2) → 2\n=COUNTA("A", "B", 1, 2) → 4',
    result: 'COUNT: 2 | COUNTA: 4',
    notes: 'Câu hỏi đề thi rất hay gặp sự khác biệt giữa COUNT và COUNTA.'
  },
  {
    name: 'TODAY() vs NOW()',
    category: 'Hàm chuỗi & ngày',
    syntax: 'TODAY() vs NOW()',
    description: 'TODAY() chỉ trả về ngày hiện tại. NOW() trả về cả ngày và giờ hiện hành.',
    example: 'Giả sử ngày 19/9/2013:\n=TODAY() - 1 → 18/9/2013',
    result: '18/9/2013',
    notes: 'Hàm không cần tham số trong ngoặc đơn.'
  },
  {
    name: 'PROPER vs LOWER vs UPPER',
    category: 'Hàm chuỗi & ngày',
    syntax: 'PROPER(text) | LOWER(text) | UPPER(text)',
    description: 'PROPER viết hoa chữ cái đầu mỗi từ. LOWER đổi thành chữ thường. UPPER đổi thành chữ HOA.',
    example: '=PROPER("tin hoc co ban") → "Tin Hoc Co Ban"\n=LOWER("Tin Hoc") → "tin hoc"',
    result: 'Tin Hoc Co Ban',
  },
  {
    name: 'MOD(n, d)',
    category: 'Hàm tính toán',
    syntax: 'MOD(number, divisor)',
    description: 'Trả về phần dư của phép chia number cho divisor.',
    example: '=MOD(45, 7)',
    result: '3 (vì 45 chia 7 bằng 6 dư 3)',
  },
  {
    name: 'ROUND(n, num_digits)',
    category: 'Hàm tính toán',
    syntax: 'ROUND(number, num_digits)',
    description: 'Làm tròn số. Nếu num_digits là số âm (-3), làm tròn đến hàng nghìn đồng.',
    example: '=ROUND(B2 * B$4, -3)',
    result: 'Làm tròn chẵn đến hàng nghìn',
  },
  {
    name: 'LEFT & RIGHT & LEN',
    category: 'Hàm chuỗi & ngày',
    syntax: 'LEFT(text, num) | RIGHT(text, num) | LEN(text)',
    description: 'LEFT lấy ký tự từ bên trái; RIGHT lấy từ bên phải; LEN đếm số ký tự.',
    example: '=LEFT("DANG THI TIN HOC", 3) → "DAN"\n=RIGHT("TIN HOC CAN BAN", 3) → "BAN"\n=LEN(2018) → 4',
    result: '"DAN", "BAN", 4',
  },
  {
    name: 'IF & AND & OR',
    category: 'Hàm logic',
    syntax: 'IF(logic_test, val_true, val_false)',
    description: 'AND đúng khi TẤT CẢ đúng. OR đúng khi CHỈ CẦN 1 điều kiện đúng. So sánh khác nhau dùng ký hiệu <>',
    example: '=IF(AND(5>3, 2>=2), 2, 3)',
    result: '2',
    notes: 'Ký hiệu khác nhau trong Excel là <>, không dùng dấu # hay !=.'
  },
  {
    name: 'Mã lỗi #####',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '#####',
    description: 'Độ rộng của cột quá hẹp không hiển thị hết số hoặc ngày tháng.',
    example: 'Nhập số lớn vào cột hẹp',
    result: 'Cách khắc phục: Kéo rộng độ rộng cột ra',
  },
  {
    name: 'Mã lỗi #NAME?',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '#NAME?',
    description: 'Nhập sai tên hàm hoặc Excel không nhận diện được tên tham chiếu trong công thức.',
    example: '=SUMM(A1:A5)',
    result: 'Báo lỗi #NAME?',
  },
  {
    name: 'Mã lỗi #VALUE!',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '#VALUE!',
    description: 'Sai kiểu dữ liệu trong phép toán (ví dụ tính toán số với chuỗi chữ).',
    example: '=MAX("A", 13, 4)',
    result: 'Báo lỗi #VALUE!',
  },
  {
    name: 'Mã lỗi #DIV/0!',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '#DIV/0!',
    description: 'Lỗi chia cho số 0 hoặc chia cho ô trống.',
    example: '=10 / 0',
    result: '#DIV/0!',
  },
  {
    name: 'Mã lỗi #N/A',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '#N/A',
    description: 'Không có sẵn dữ liệu (Not Available), thường xuất hiện khi hàm dò tìm VLOOKUP/HLOOKUP không thấy kết quả.',
    example: '=VLOOKUP("NotFound", A1:B10, 2, 0)',
    result: '#N/A',
  },
  {
    name: 'Địa chỉ ô sai cú pháp: $A3$',
    category: 'Mã lỗi & Địa chỉ',
    syntax: '$A3$',
    description: 'Biểu diễn SAI! Dấu $ trong Excel chỉ đứng trước chữ cái cột hoặc số dòng, KHÔNG BAO GIỜ đặt ở cuối.',
    example: 'Địa chỉ đúng: $A$3 (tuyệt đối), A$3 (khóa dòng), $A3 (khóa cột)',
    result: '$A3$ là biểu diễn SAI',
  },
];

export interface ConfusingPair {
  id: number;
  title: string;
  itemA: {
    name: string;
    description: string;
  };
  itemB: {
    name: string;
    description: string;
  };
  keyTakeaway: string;
}

export const CONFUSING_PAIRS: ConfusingPair[] = [
  {
    id: 1,
    title: 'Quá trình SLEEP vs HIBERNATE (Ngủ đông)',
    itemA: {
      name: 'Sleep (Chế độ Chờ)',
      description: 'Máy tính ở trạng thái chờ tiêu thụ ít điện, dữ liệu được giữ trên RAM, bấm phím hoặc rê chuột là thức dậy ngay lập tức.'
    },
    itemB: {
      name: 'Hibernate (Ngủ đông)',
      description: 'Lưu toàn bộ trạng thái và ứng dụng đang mở vào ổ cứng (Hard Drive) rồi đặt máy tính vào trạng thái TẮT HOÀN TOÀN.'
    },
    keyTakeaway: 'Sleep: giữ trên RAM, chưa tắt hẳn. Hibernate: lưu vào ổ cứng, máy tắt hoàn toàn.'
  },
  {
    id: 2,
    title: 'Xóa tập tin: Delete vs Shift + Delete',
    itemA: {
      name: 'Delete thông thường',
      description: 'Di chuyển tập tin vào thùng rác Recycle Bin, có thể khôi phục lại (Restore) khi cần.'
    },
    itemB: {
      name: 'Shift + Delete',
      description: 'Xóa hẳn hoàn toàn (permanently delete) không lưu qua thùng rác Recycle Bin, không thể phục hồi từ Recycle Bin.'
    },
    keyTakeaway: 'Có Shift là xóa vĩnh viễn không vào Recycle Bin.'
  },
  {
    id: 3,
    title: 'Các phím ngắt dòng trong MS Word & Excel',
    itemA: {
      name: 'Enter vs Shift + Enter (Word)',
      description: 'Enter: Kết thúc đoạn văn hiện tại và bắt đầu đoạn văn mới.\nShift + Enter: Xuống dòng mới trong cùng một đoạn văn.'
    },
    itemB: {
      name: 'Ctrl + Enter vs Alt + Enter',
      description: 'Ctrl + Enter: Ngắt trang bắt buộc trong Word.\nAlt + Enter: Xuống dòng trong cùng 1 ô tính Excel.'
    },
    keyTakeaway: 'Enter = tạo Paragraph mới; Shift+Enter = qua dòng cùng đoạn; Ctrl+Enter = qua trang mới.'
  },
  {
    id: 4,
    title: 'Nhà cung cấp mạng: IAP vs ISP',
    itemA: {
      name: 'IAP (Internet Access Provider)',
      description: 'Nhà cung cấp CỔNG TRUY CẬP Internet cho các mạng máy tính.'
    },
    itemB: {
      name: 'ISP (Internet Service Provider)',
      description: 'Nhà cung cấp DỊCH VỤ Internet trực tiếp cho người dùng cuối (ví dụ VNPT, Viettel, FPT).'
    },
    keyTakeaway: 'Access Provider = Cổng truy cập; Service Provider = Dịch vụ.'
  },
  {
    id: 5,
    title: 'Email: Trường Cc vs Bcc',
    itemA: {
      name: 'Cc (Carbon Copy)',
      description: 'Gửi bản sao cho người nhận, mọi người nhận đều nhìn thấy địa chỉ email của nhau.'
    },
    itemB: {
      name: 'Bcc (Blind Carbon Copy)',
      description: 'Gửi bản sao bí mật cho người nhận, những người nhận khác KHÔNG THỂ nhìn thấy địa chỉ email này.'
    },
    keyTakeaway: 'Bcc = Blind (mù/ẩn), người nhận khác không thấy được.'
  },
  {
    id: 6,
    title: 'Trang Web tĩnh vs Trang Web động',
    itemA: {
      name: 'Web tĩnh (Static Web)',
      description: 'Có nội dung cố định, không thay đổi theo người dùng hay thời gian thực.'
    },
    itemB: {
      name: 'Web động (Dynamic Web)',
      description: 'Có khả năng tương tác trực tiếp giữa người dùng và máy chủ (cơ sở dữ liệu, xử lý phản hồi realtime).'
    },
    keyTakeaway: 'Web động là có tương tác giữa người dùng và máy chủ.'
  },
  {
    id: 7,
    title: 'Phần mở rộng (Đuôi tệp tin) thông dụng',
    itemA: {
      name: 'Tập tin hệ thống & hình ảnh',
      description: '.EXE: File thực thi chương trình\n.JPG / .PNG: File ảnh\n.TXT: File văn bản thuần\n.WMV / .MP4: File video'
    },
    itemB: {
      name: 'Bộ Microsoft Office',
      description: '.DOCX: File Word\n.XLSX: File Excel\n.PPTX: File PowerPoint (không hỗ trợ lưu file dạng .TXT)'
    },
    keyTakeaway: '.exe là thực thi, .jpg là hình ảnh, .docx / .xlsx / .pptx là Office.'
  },
  {
    id: 8,
    title: 'Căn lề mặc định trong Microsoft Excel',
    itemA: {
      name: 'Mặc định căn TRÁI',
      description: 'Dữ liệu kiểu Chuỗi / Ký tự (Text), chuỗi chữ cái hoặc số nhập có tiền tố dấu nháy đơn.'
    },
    itemB: {
      name: 'Mặc định căn PHẢI',
      description: 'Dữ liệu kiểu Số (Number), Ngày tháng (Date), Thời gian (Time).'
    },
    keyTakeaway: 'Chữ canh Trái - Số, Ngày, Giờ canh Phải.'
  },
  {
    id: 9,
    title: 'Bộ 4 câu điều chỉnh đáp án chuẩn đề thi',
    itemA: {
      name: 'Câu 47 & Câu 114',
      description: '• Câu 47: Đáp án D (Phát biểu "Phần mềm nguồn mở công bố một phần mã nguồn..." là CHƯA ĐÚNG vì phải công bố toàn bộ mã nguồn).\n• Câu 114: Đáp án A (Web site là kết hợp nhiều trang Web trên nhiều địa chỉ khác nhau).'
    },
    itemB: {
      name: 'Câu 188 & Câu 275',
      description: '• Câu 188: Đáp án D (Trong Word câu sai là "Có thể làm việc với bảng tính như trong Excel").\n• Câu 275: Đáp án C (Trong PowerPoint câu sai là "Có thể thiết lập các thông số...").'
    },
    keyTakeaway: 'Ghi nhớ chuẩn các đáp án 47(D), 114(A), 188(D), 275(C) để không bị mất điểm oan!'
  },
  {
    id: 10,
    title: 'Quản lý Phân đoạn (Section) trong PowerPoint',
    itemA: {
      name: 'Các lệnh CÓ hỗ trợ',
      description: 'Rename Section (Đổi tên phân đoạn), Remove Section (Xóa phân đoạn), Remove Section & Slides (Xóa cả phân đoạn và slide bên trong).'
    },
    itemB: {
      name: 'Lệnh KHÔNG TỒN TẠI',
      description: 'Duplicate Section (Nhân bản phân đoạn) KHÔNG CÓ trong PowerPoint.'
    },
    keyTakeaway: 'PowerPoint có Duplicate Slide nhưng KHÔNG CÓ Duplicate Section.'
  },
];

export const MODULES_INFO = [
  { id: 1, code: 'IU01', name: 'Hiểu biết về CNTT cơ bản', count: 50, color: 'from-blue-600 to-indigo-600', icon: 'Cpu' },
  { id: 2, code: 'IU02', name: 'Sử dụng máy tính cơ bản (Windows)', count: 50, color: 'from-sky-600 to-cyan-600', icon: 'Monitor' },
  { id: 3, code: 'IU03', name: 'Xử lý văn bản cơ bản (MS Word)', count: 50, color: 'from-blue-700 to-blue-900', icon: 'FileText' },
  { id: 4, code: 'IU04', name: 'Sử dụng bảng tính cơ bản (MS Excel)', count: 50, color: 'from-emerald-600 to-teal-700', icon: 'Table' },
  { id: 5, code: 'IU05', name: 'Sử dụng trình chiếu cơ bản (PowerPoint)', count: 50, color: 'from-amber-600 to-orange-700', icon: 'Presentation' },
  { id: 6, code: 'IU06', name: 'Sử dụng Internet cơ bản', count: 50, color: 'from-purple-600 to-violet-700', icon: 'Globe' },
];
