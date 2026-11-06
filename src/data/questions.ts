export interface Question {
  id: number;
  num: number;
  text: string;
  options: string[];
  correctIndex: number;
  moduleNumber: number;
  moduleName: string;
  isShortcut: boolean;
  isFormula: boolean;
  isConfusing: boolean;
  diagramType?: 'printer' | 'harddrive' | 'optical';
}

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "num": 1,
    "text": "Theo đơn vị đo thông tin trong máy tính thì 1 byte bằng bao nhiêu bit ?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 2,
    "num": 2,
    "text": "Thiết bị nào sau đây dùng để kết nối mạng?",
    "options": [
      "RAM",
      "ROM",
      "Router",
      "CPU"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 3,
    "num": 3,
    "text": "Trong mạng máy tính, thuật ngữ Share có ý nghĩa gì?",
    "options": [
      "Chia sẻ tài nguyên",
      "Nhãn hiệu của một thiết bị kết nối mạng",
      "Thực hiện lệnh in trong mạng cục bộ",
      "Một phần mềm hỗ trợ sử dụng mạng cục bộ"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 4,
    "num": 4,
    "text": "Các thiết bị nào thông dụng nhất hiện nay dùng để cung cấp dữ liệu cho máy xử lý?",
    "options": [
      "Bàn phím (Keyboard), Chuột (Mouse), Máy in (Printer)",
      "Máy quét ảnh (Scaner)",
      "Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scaner)",
      "Máy quét ảnh (Scaner), Chuột(Mouse)"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 5,
    "num": 5,
    "text": "Khả năng xử lý của máy tính phụ thuộc vào ... bạn sử dụng lựa chọn nào?",
    "options": [
      "Tốc độ CPU, dung lượng bộ nhớ RAM, dung lượng và ổ cứng",
      "Yếu tố đa nhiệm",
      "Hiện tượng phân mảnh ổ đĩa",
      "Cả 3 phần trên đều đúng"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 6,
    "num": 6,
    "text": "Máy tính là gì?",
    "options": [
      "Là công cụ chỉ dùng để tính toán các phép tính thông thường",
      "Là công cụ cho phép xử lý thông tin một cách tự động",
      "Là công cụ cho phép xử lý thông tin một cách thủ công",
      "Là công cụ không dùng để tính toán"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 7,
    "num": 7,
    "text": "Trình tự xử lý thông tin của máy tính điện tử",
    "options": [
      "Màn hình -> CPU -> Đĩa cứng",
      "Đĩa cứng -> Màn hình -> CPU",
      "Nhập thông tin -> Xử lý thông tin -> Xuất thông tin",
      "Màn hình -> Máy in -> CPU"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 8,
    "num": 8,
    "text": "Cấu tạo của máy tính bao gồm ______",
    "options": [
      "Thiết bị nhập, thiết bị xuất, bộ xử lý trung tâm.",
      "Thiết bị nhập xuất, bộ xử lý trung tâm, bộ nhớ.",
      "Thiết bị nhập, bộ xử lý trung tâm, bộ nhớ.",
      "Thiết bị nhập, thiết bị xuất, bộ nhớ trong, bộ nhớ ngoài."
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 9,
    "num": 9,
    "text": "Trong phân loại mạng máy tính theo qui mô, loại mạng nào là nhỏ nhất?",
    "options": [
      "LAN - Local Area Network",
      "MANs - Metropolitan Area Networks",
      "WANs - Wide Area Networks",
      "Internet"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 10,
    "num": 10,
    "text": "Câu nào sau đây đúng?",
    "options": [
      "Các máy tính gần nhau mặc định sẽ thấy nhau dù không cùng lớp mạng",
      "Nếu chỉ có một máy tính thì nó không thể chia sẻ dữ liệu",
      "Máy khác có thể thay đổi các tập tin chia sẻ khi chưa được phép",
      "Hai máy tính vẫn có thể kết nối với nhau mà không quan tâm đến khoảng cách địa lý là bao xa"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 11,
    "num": 11,
    "text": "Tường lửa là ______ .",
    "options": [
      "Là sự kết hợp của một phần mềm và một thiết bị phần cứng",
      "Kiểm soát lưu thông dữ liệu giữa 2 vùng có độ tin cậy khác nhau trên mạng",
      "Có thể dùng để chặn các truy cập hợp pháp đến một thiết bị/dịch vụ",
      "Là một thuật ngữ ám chỉ máy tính không còn an toàn nữa"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 12,
    "num": 12,
    "text": "Mạng máy tính là ______",
    "options": [
      "Các máy tính cùng chung một nhà sản xuất.",
      "Các máy tính độc lập và được kết nối với nhau.",
      "Các mạng do loài nhện tạo ra bên trong thùng máy.",
      "Các máy tính được đặt chung trong một phòng."
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 13,
    "num": 13,
    "text": "Phát biểu nào là sai về Virus máy tính ?",
    "options": [
      "Có khả năng phá hoại đối với các sản phẩm tin học",
      "Có khả năng tự giấu kín và tự sao chép",
      "Là một chương trình máy tính do con người tạo ra",
      "Tự động biến mất sau một khoản thời gian"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 14,
    "num": 14,
    "text": "TCP/IP là ______",
    "options": [
      "1 giao thức",
      "1 bộ giao thức",
      "1 thiết bị mạng",
      "1 phần mềm"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 15,
    "num": 15,
    "text": "Hình thức lây nhiễm virus máy tính nào không phổ biến?",
    "options": [
      "Qua các thiết bị di động như đĩa cứng rời, thẻ nhớ, ...",
      "Qua thư điện tử",
      "Qua mạng internet: vào trang web độc hại, tải phần mềm trên mạng, ...",
      "Tự cài đặt lên máy nội bộ"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 16,
    "num": 16,
    "text": "Các tác vụ nào sau đây dùng trong phòng chống virus?",
    "options": [
      "Không dùng hoặc dùng rất nhanh máy tính nên sẽ không có virus",
      "Dùng các phần mềm chuyên nghiệp trong phòng chống virus và cập nhật các bản vá lỗi thường xuyên",
      "Không bao giờ kết nối máy tính với các thiết bị ngoại vi để tránh lây nhiễm",
      "Không cần phòng chống, virus sẽ tự động biến mất khi tắt máy"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 17,
    "num": 17,
    "text": "Một chương trình máy tính là gì?",
    "options": [
      "Một tập các bước mà người sử dụng phải tuân theo để mua phần mềm",
      "Một tập hợp các quy tắc về việc sử dụng hợp pháp của phần mềm ứng dụng",
      "Thiết lập các quy tắc về việc sử dụng hợp pháp của phần mềm ứng dụng",
      "Chuỗi các hướng dẫn được viết để thực hiện các nhiệm vụ cụ thể"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 18,
    "num": 18,
    "text": "Ta nhận được gì khi mua một chương trình phần mềm?",
    "options": [
      "Các quyền chia sẻ chương trình với người dùng khác",
      "Giấy phép cho phép cài đặt và sử dụng chương trình phần mềm",
      "Mã nguồn của chương trình",
      "Quyền bán các chương trình phần mềm cho người khác"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 19,
    "num": 19,
    "text": "Firmware là gì?",
    "options": [
      "Một mã số nhận dạng mà nhà cung cấp sản phẩm gắn vào linh kiện phần cứng",
      "Được lập trình và được nhúng vào trong một thiết bị phần cứng",
      "Một bảo hành được cung cấp với một thiết bị phần cứng",
      "Một tên gọi khác cho phần cứng đặc biệt nhỏ như một linh kiện"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 20,
    "num": 20,
    "text": "Phát biểu nào sau đây là đúng về bộ nhớ RAM?",
    "options": [
      "Không thể nâng cấp",
      "Cho phép đọc ghi xoá thông tin",
      "Khi mất điện dữ liệu trong RAM không bị mất",
      "Hệ thống vẫn hoạt động khi thiếu RAM"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 21,
    "num": 21,
    "text": "Cho các đơn vị đo lường sau: MegaByte (MB), Byte (B), GigaByte (GB), KiloByte (KB). Hãy sắp xếp các đơn vị đo lường từ nhỏ đến lớn.",
    "options": [
      "B – KB – MB – GB",
      "KB – B – MB – GB",
      "GB – KB – MB – B",
      "MB – KB – GB – B"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 22,
    "num": 22,
    "text": "Đâu không phải là đơn vị thể hiện dung lượng bộ nhớ trong máy tính?",
    "options": [
      "GigaByte (GB)",
      "Bit (b)",
      "ZettaByte (ZB)",
      "GigaHertz (GHz)"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 23,
    "num": 23,
    "text": "Nhìn vào các tham số cấu hình của một máy tính: 1.8Ghz, 20GB, 1GB. Con số 20Gb là thông số gì?",
    "options": [
      "Tốc độ xử lý của CPU",
      "Tốc độ vòng quay của ổ cứng",
      "Dung lượng của ổ đĩa cứng",
      "Dung lượng tối đa của đĩa DVD mà máy có thể đọc được"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 24,
    "num": 24,
    "text": "ROM là từ viết tắt của ______________",
    "options": [
      "Storage Of Memory",
      "Resources Of Memory",
      "Read Only Memory",
      "Random Output Measure"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 25,
    "num": 25,
    "text": "Bộ nhớ truy nhập trực tiếp RAM được viết tắt từ, bạn sử dụng lựa chọn nào?",
    "options": [
      "Read Access Memory",
      "Random Access Memory",
      "Rewrite Access Memory",
      "Cả 3 câu đều đúng"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 26,
    "num": 26,
    "text": "Bộ nhớ RAM và ROM là bộ nhớ gì?",
    "options": [
      "Primary memory",
      "Receive memory",
      "Secondary memory",
      "Random access"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 27,
    "num": 27,
    "text": "GUI cho phép giao tiếp với máy tính bằng hình ảnh và chữ viết. GUI là viết tắt của ____",
    "options": [
      "Graphics User Interaction",
      "Good User Interface",
      "Graphical User Interface",
      "Great User Interface"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 28,
    "num": 28,
    "text": "Phát biểu nào sau đây sai?",
    "options": [
      "Mạng là môi trường nhiều người dùng",
      "Mạng là môi trường đa nhiệm",
      "Mạng là môi trường phân tán",
      "Việc chia sẻ dữ liệu trên mạng là không an toàn"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 29,
    "num": 29,
    "text": "Hệ thống số nào được Máy tính sử dụng chính?",
    "options": [
      "Hệ Nhị phân",
      "Hệ Bát phân",
      "Hệ Thập lục phân",
      "Hệ Thập phân"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 30,
    "num": 30,
    "text": "Đâu không phải là trách nhiệm cá nhân của người dùng?",
    "options": [
      "Đảm bảo bảo mật thông tin cá nhân",
      "Đảm bảo độ mạnh của mật khẩu (nếu có) và đổi mật khẩu thường xuyên",
      "Đảm bảo chia sẻ tài nguyên đúng người và đúng việc",
      "Quản lý các người dùng khác"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 31,
    "num": 31,
    "text": "Phát biểu nào sau đây về thiết bị nhập (input)/xuất (output) của một hệ thống máy tính là sai?",
    "options": [
      "Chuyển đổi dữ liệu từ thế giới thực sang dạng số (input) và ngược lại (output)",
      "Có thể là bàn phím, chuột, webcam (input) và màn hình (output)",
      "Không bao gồm mainboard máy tính",
      "Bộ xử lý trung tâm cũng là một thiết bị nhập"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 32,
    "num": 32,
    "text": "Loại máy tính nào được dùng để chạy những phần mềm chuyên môn hóa hoặc để chia sẻ tài nguyên, quản lý nguồn dữ liệu lớn?",
    "options": [
      "Server",
      "Desktop",
      "Netbook",
      "Tablet"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 33,
    "num": 33,
    "text": "Ngôn ngữ nào sau đây không thuộc Ngôn ngữ được lập trình trên máy tính:",
    "options": [
      "Ngôn ngữ máy",
      "Ngôn ngữ cấp cao",
      "Ngôn ngữ hướng đối tượng",
      "Ngôn ngữ tự nhiên"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 34,
    "num": 34,
    "text": "Mục đích chủ yếu của chính sách an ninh thông tin của một tổ chức là gì?",
    "options": [
      "Quản lý việc đầu tư của công ty",
      "Theo dõi và kiểm soát thông tin, dữ liệu nhạy cảm",
      "Mô tả hoạt động kinh doanh",
      "Thu nhập thông tin thị trường"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 35,
    "num": 35,
    "text": "Nếu một máy tính bị nghi ngờ là nhiễm virus thì cách thức tốt nhất để kiểm tra và diệt virus là gì?",
    "options": [
      "Cài đặt lại hệ điều hành, sau đó cài đặt lại tất cả các chương trình ứng dụng khác",
      "Cài đặt một chương trình chống virus, quét virus các ổ đĩa của máy tính và cho chương trình này loại bỏ virus",
      "Lưu trữ dự phòng các tệp tin của máy tính và hồi phục chúng bằng việc sử dụng những tập tin dự phòng này",
      "Khởi động lại máy tính và sau đó xóa tất cả những tập tin bị nghi ngờ nhiễm virus"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 36,
    "num": 36,
    "text": "Vấn đề sức khỏe phổ biến của người sử dụng máy tính là các chấn thương cổ tay. Nguyên nhân của chấn thương thông thường là gì?",
    "options": [
      "Ghế không điều chỉnh",
      "Sử dụng bàn phím lâu",
      "Vị trí màn hình đặt sai",
      "Sử dụng hàng ngày một thiết bị đỡ cổ tay"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 37,
    "num": 37,
    "text": "Trong những tình huống hoặc lĩnh vực nào sau đây, con người làm việc tốt hơn máy tính",
    "options": [
      "Tính toán",
      "Những công việc được tự động hóa",
      "Nhận dạng",
      "Những nơi nguy hiểm"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 38,
    "num": 38,
    "text": "Theo bạn, câu nào sau đây không thể hiện ưu điểm của làm việc từ xa (Tele-working)",
    "options": [
      "Giảm thời gian đi lại",
      "Khả năng tập trung vào công việc",
      "Tăng cường sự liên hệ trực tiếp",
      "Giảm không gian văn phòng"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 39,
    "num": 39,
    "text": "Lựa chọn nào sau đây chỉ ra sự khác biệt chính xác giữa phần mềm ứng dụng và phần mềm hệ điều hành",
    "options": [
      "Phần mềm ứng dụng cần nhiều không gian trong ổ cứng hơn phần mềm hệ điều hành để chạy",
      "Phần mềm hệ điều hành cần phần mềm ứng dụng để chạy",
      "Phần mềm hệ điều hành cần nhiều bộ nhớ hơn phần mềm ứng dụng để chạy",
      "Phần mềm ứng dụng cần phần mềm hệ điều hành để chạy"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 40,
    "num": 40,
    "text": "Lợi thế của mua hàng trực tuyến so với mua hàng bình thường ở cửa hàng là gì?",
    "options": [
      "Việc thanh toán đảm bảo an ninh hơn",
      "Việc xác định tình trạng của hàng hóa dễ dàng hơn",
      "Có thể mua hàng trong suốt 24h trong một ngày",
      "Hàng hóa đã mua dễ trả lại hơn"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 41,
    "num": 41,
    "text": "Máy tính có thể giúp con người thực hiện",
    "options": [
      "Chuyển tiền qua mạng máy tính của ngân hàng",
      "Học tập mọi nơi, mọi lúc.",
      "Hệ thống thẻ tín dụng",
      "Tất cả các mục trên."
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 42,
    "num": 42,
    "text": "Dãy số nào biểu diễn dữ liệu hệ nhị phân",
    "options": [
      "01010000",
      "00120000",
      "00fe0001",
      "000A110"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 43,
    "num": 43,
    "text": "CPU có nghĩa là",
    "options": [
      "Mạch điện tử nhỏ bé của máy tính",
      "Phần mềm quyết định các bước thao tác của máy tính",
      "Control Processing Unit",
      "Central Processing Unit"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 44,
    "num": 44,
    "text": "Virus máy tính",
    "options": [
      "Chỉ hoạt động khi phần mềm bị sao chép trái phép.",
      "Là một chương trình máy tính",
      "Là phần cứng chỉ phá hoại các phần khác",
      "Là một loại nấm mốc trên bề mặt đĩa"
    ],
    "correctIndex": 1,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 45,
    "num": 45,
    "text": "Trong những tình huống nào sau đây, máy tính thực thi công việc tốt hơn con người",
    "options": [
      "Khi dịch một cuốn sách",
      "Khi chẩn đoán bệnh",
      "Khi phân tích tâm lý một con người",
      "Khi thực hiện một phép toán phức tạp"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 46,
    "num": 46,
    "text": "Theo bạn, các phần mềm sau thuộc nhóm phần mềm nào: MS Word, MS Excel, MS Access, MS PowerPoint, MS Internet Explorer",
    "options": [
      "Nhóm phần mềm ứng dụng",
      "Nhóm phần mềm hệ thống",
      "Nhóm phần mềm CSDL",
      "Nhóm phần mềm hệ điều hành"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 47,
    "num": 47,
    "text": "Câu nào chưa đúng trong số các câu sau?",
    "options": [
      "Phần mềm thương mại – commercial software: có đăng ký bản quyền : không cho phép sao chép dưới bất kỳ hình thức nào.",
      "Phần mềm chia sẻ - Shareware: có bản quyền, dùng thử trước khi mua. Nếu muốn tiếp tục sử dụng chương trình thì được khuyến khích trả tiền cho tác giả.",
      "Phần mềm miễn phí - Freeware: cho phép người khác tự do sử dụng hoàn toàn hoặc theo một số yêu cầu bắt buộc. Ví dụ phải kèm tên tác giả ...",
      "Phần mềm nguồn mở - Open source software: công bố một phần mã nguồn để mọi người tham gia phát triển"
    ],
    "correctIndex": 3,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 48,
    "num": 48,
    "text": "Đâu là một ví dụ của chính sách mật khẩu tốt",
    "options": [
      "Chọn một mật khẩu có ít hơn 6 mẫu tự",
      "Mật khẩu phải giống lý lịch người sử dụng (ví dụ ngày tháng năm sinh, quê quán)",
      "Không bao giờ cho người khác biết mật khẩu của bạn",
      "Chỉ thay đổi mật khẩu sau một thời gian dài"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 49,
    "num": 49,
    "text": "Ký hiệu Hz có nghĩa là gì?",
    "options": [
      "Tốc độ xung nhịp bên trong của máy tính trong mỗi chu kỳ",
      "Tốc độ kết nối Internet",
      "Số lượng dữ liệu có thể được lưu trữ trên máy tính",
      "Tốc độ quay của quạt chip"
    ],
    "correctIndex": 0,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 50,
    "num": 50,
    "text": "Dịch vụ Internet được chính thức cung cấp tại Việt Nam vào năm nào?",
    "options": [
      "1995",
      "1996",
      "1997",
      "1998"
    ],
    "correctIndex": 2,
    "moduleNumber": 1,
    "moduleName": "Modul 1: Hiểu biết về CNTT cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 51,
    "num": 51,
    "text": "Trong Windows, thao tác nào sẽ xóa hẳn các tập tin được chọn?",
    "options": [
      "Bấm chuột phải vào các tập tin được chọn và chọn lệnh Delete",
      "Nhấn phím Delete trên bàn phím",
      "Giữ phím Shift và nhấn phím Delete trên bàn phím",
      "Giữ phím Alt và nhấn phím Delete trên bàn phím"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 52,
    "num": 52,
    "text": "My Computer không có chức năng nào dưới đây?",
    "options": [
      "Quản lý ổ đĩa, mạng",
      "Quản lý máy in",
      "Quản lý Control Panel",
      "Quản lý Virus"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 53,
    "num": 53,
    "text": "Phím, tổ hợp phím nào dùng để chụp màn hình?",
    "options": [
      "Ctrl+C",
      "Ctrl+Ins",
      "Print Screen",
      "ESC"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 54,
    "num": 54,
    "text": "Để chụp hình ảnh của một hộp thoại bằng bàn phím ta nhấn tổ hợp phím nào?",
    "options": [
      "Alt+Printscreen",
      "Shift+Tab",
      "Alt+Tab",
      "Ctrl+Shift+Tab"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 55,
    "num": 55,
    "text": "Để định vị Taskbar trong trạng thái Lock the taskbar được định vị tùy ý ta chọn",
    "options": [
      "Taskbar định vị ở bottom là cố định và không thể di chuyển",
      "Dùng chuột kéo thả Taskbar tùy ý trên 4 cạnh màn hình",
      "Nhấn phải chuột vào Taskbar chọn Show Desktop",
      "Nhấn phải chuột vào Taskbar chọn Properties – tại dòng Taskbar location on screen và chọn vị trí tùy ý"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 56,
    "num": 56,
    "text": "Khái niệm Desktop là gì ?",
    "options": [
      "Là màn hình đăng nhập",
      "Là màn hình để chỉnh sửa các thành phần của Windows",
      "Là màn hình xuất hiện đầu tiên sau khi Windows khởi động xong",
      "Là màn hình đầu tiên xuất hiện khi cài đặt một phần mềm"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 57,
    "num": 57,
    "text": "Trong Window để chọn nhiều tập tin hay thư mục liên tục ta thực hiện thao tác kết hợp phím _____ với bấm chuột trái.",
    "options": [
      "Tab",
      "Shift",
      "Ctrl",
      "Alt"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 58,
    "num": 58,
    "text": "Bộ phím tắt nào được sử dụng để chuyển sang các cửa sổ đang mở khác?",
    "options": [
      "Alt+F4",
      "Ctrl+Esc",
      "Alt+Tab",
      "Ctrl+Tab"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 59,
    "num": 59,
    "text": "Trong Windows để chọn nhiều tập tin không nằm liền nhau, ta bấm chuột trái và phím",
    "options": [
      "Shift",
      "Alt",
      "Tab",
      "Ctrl"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 60,
    "num": 60,
    "text": "Phím tắt để sao chép một đối tượng vào ClipBoard là _____",
    "options": [
      "Ctrl+X",
      "Ctrl+C",
      "Ctrl+V",
      "Ctrl+D"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 61,
    "num": 61,
    "text": "Phím tắt để cắt một đối tượng vào ClipBoard là _____",
    "options": [
      "Ctrl+X",
      "Ctrl+C",
      "Ctrl+V",
      "Ctrl+D"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 62,
    "num": 62,
    "text": "Phím tắt để dán một đối tượng từ ClipBoard là _____",
    "options": [
      "Ctrl+X",
      "Ctrl+C",
      "Ctrl+V",
      "Ctrl+D"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 63,
    "num": 63,
    "text": "Để đóng ứng dụng ta dùng tổ hợp phím:",
    "options": [
      "Ctrl+A",
      "Alt+F4",
      "Ctrl+F4",
      "Alt+A"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 64,
    "num": 64,
    "text": "Các thông số 1280x1024, 1280x720, 1152x864 trong tính năng Screen Resolution là những thông số thiết lập _____",
    "options": [
      "Kích thước ảnh",
      "Những bài toán nhân",
      "Độ phân giải màn hình",
      "Kích thước màn hình"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 65,
    "num": 65,
    "text": "Để xem nội dung thư mục với các thông tin mặc định: Name, Types, Size, Date modified, ... ta chọn chế độ hiển thị nào?",
    "options": [
      "Tiles",
      "List",
      "Detail",
      "Content"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 66,
    "num": 66,
    "text": "Windows Explorer dùng để",
    "options": [
      "Quản lý tập tin, thư mục",
      "Truy cập mạng",
      "Quản lý tập tin",
      "Quản lý thư mục"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 67,
    "num": 67,
    "text": "Cách tắt máy nào sau đây có thể gây hại cho máy tính ?",
    "options": [
      "Nhấn và giữ nút nguồn đến khi máy tắt",
      "Sử dụng chức năng Power Off",
      "Sử dụng chức năng Hibernate",
      "Nhấn phím Windows -> bấm mũi tên phải -> Nhấn phím Enter"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 68,
    "num": 68,
    "text": "Hệ điều hành là _____",
    "options": [
      "Một chương trình chạy trên máy tính dùng quản lý điều hành máy tính",
      "Một chương trình chạy trên máy tính như các chương trình khác",
      "Một thiết bị gắn thêm vào máy tính để quản lý điều hành máy tính",
      "Chính là máy tính"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 69,
    "num": 69,
    "text": "Hệ điều hành không có nhiệm vụ nào ?",
    "options": [
      "Cung cấp giao diện sử dụng và giao diện lập trình cho người dùng",
      "Thực hiện các thao tác cơ bản như đọc/ghi và quản lý tập tin",
      "Cung cấp một số công cụ cơ bản như trình duyệt, trình soạn thảo văn bản",
      "Diệt Virus máy tính"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 70,
    "num": 70,
    "text": "Thư mục nào không phải là thư mục của hệ thống?",
    "options": [
      "My Computer",
      "My Document",
      "My Download",
      "Recycle Bin"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 71,
    "num": 71,
    "text": "Trong hình sau, máy in mặc định được đánh số mấy?",
    "options": [
      "Số 1",
      "Số 2",
      "Số 3",
      "Số 4"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false,
    "diagramType": "printer"
  },
  {
    "id": 72,
    "num": 72,
    "text": "Số phân vùng ổ cứng nhiều nhất trong máy tính thể hiện ở hình sau là bao nhiêu?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false,
    "diagramType": "harddrive"
  },
  {
    "id": 73,
    "num": 73,
    "text": "Trong hình sau, ổ đĩa nào là ổ đĩa quang?",
    "options": [
      "Ổ C",
      "Ổ D",
      "Ổ E",
      "Ổ F"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false,
    "diagramType": "optical"
  },
  {
    "id": 74,
    "num": 74,
    "text": "Tệp tin có phần mở rộng là JPG cho ta biết đây là loại tệp tin gì?",
    "options": [
      "File ảnh",
      "File thực thi",
      "File văn bản",
      "File âm thanh"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 75,
    "num": 75,
    "text": "Tệp tin có phần mở rộng là EXE cho ta biết đây là loại tệp tin gì ?",
    "options": [
      "File ảnh",
      "File thực thi",
      "File văn bản",
      "File âm thanh"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 76,
    "num": 76,
    "text": "Microsoft Windows là một ______",
    "options": [
      "Chương trình xử lý văn bản.",
      "Chương quản lý cơ sở dữ liệu",
      "Hệ điều hành (Operating System).",
      "Chương trình đồ hoạ (Graphics Program)."
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 77,
    "num": 77,
    "text": "Phím Caps Lock có chức năng gì ?",
    "options": [
      "Bật/Tắt chức năng cuộn trang trong Excel bằng phím mũi tên",
      "Bật/Tắt cách gõ văn bản bằng chữ in hoa",
      "Bật/Tắt dãy phím số bên phải",
      "Bật/Tắt bàn phím ảo"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 78,
    "num": 78,
    "text": "Phím Num Lock có chức năng gì ?",
    "options": [
      "Bật/Tắt chức năng cuộn trang trong Excel bằng phím mũi tên",
      "Bật/Tắt cách gõ văn bản bằng chữ in hoa",
      "Bật/Tắt dãy phím số bên phải",
      "Bật/Tắt bàn phím ảo"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 79,
    "num": 79,
    "text": "Có bao nhiêu tài liệu khác nhau có thể mở trong cùng một thời điểm ?",
    "options": [
      "Không hơn 3",
      "Chỉ có 1",
      "Không nhiều hơn thanh Taskbar có thể hiển thị",
      "Mở cho đến khi bộ nhớ máy tính không cho phép"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 80,
    "num": 80,
    "text": "Quá trình Sleep trong máy tính nghĩa là ______",
    "options": [
      "Đặt máy vào trạng thái chờ đợi và hoạt động trở lại khi bấm nút trên bàn phím hoặc chuột",
      "Đặt máy tính vào trạng thái tắt hoàn toàn",
      "Lưu các trạng thái hiện thời của các ứng dụng đang mở vào ổ cứng và đặt máy tính vào trạng thái tắt hoàn toàn",
      "Máy tính sẽ tắt hoàn toàn và tự bật nguồn lên lại."
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 81,
    "num": 81,
    "text": "Quá trình Hibernate trong máy tính nghĩa là ______",
    "options": [
      "Đặt máy vào trạng thái chờ đợi và hoạt động trở lại khi bấm nút trên bàn phím hoặc chuột",
      "Đặt máy tính vào trạng thái tắt hoàn toàn",
      "Lưu các trạng thái hiện thời của các ứng dụng đang mở vào ổ cứng và đặt máy tính vào trạng thái tắt hoàn toàn",
      "Máy tính sẽ tắt hoàn toàn và tự bật nguồn lên lại."
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 82,
    "num": 82,
    "text": "Quá trình Shut down trong máy tính nghĩa là ______",
    "options": [
      "Đặt máy vào trạng thái chờ đợi và hoạt động trở lại khi bấm nút trên bàn phím hoặc chuột",
      "Đặt máy tính vào trạng thái tắt hoàn toàn",
      "Lưu các trạng thái hiện thời của các ứng dụng đang mở vào ổ cứng và đặt máy tính vào trạng thái tắt hoàn toàn",
      "Máy tính sẽ tắt hoàn toàn và tự bật nguồn lên lại."
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 83,
    "num": 83,
    "text": "Quá trình Restart trong máy tính nghĩa là ______",
    "options": [
      "Đặt máy vào trạng thái chờ đợi và hoạt động trở lại khi bấm nút trên bàn phím hoặc chuột",
      "Đặt máy tính vào trạng thái tắt hoàn toàn",
      "Lưu các trạng thái hiện thời của các ứng dụng đang mở vào ổ cứng và đặt máy tính vào trạng thái tắt hoàn toàn",
      "Máy tính sẽ tắt hoàn toàn và tự bật nguồn lên lại."
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 84,
    "num": 84,
    "text": "Số ký tự tối đa mà một tên tập tin có thể có là ______",
    "options": [
      "64",
      "128",
      "255",
      "256"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 85,
    "num": 85,
    "text": "Đường dẫn trong máy tính có nghĩa là gì?",
    "options": [
      "Cho biết các tuyến đường chính xác cần phải đi qua để đến được vị trí của một tập tin",
      "Cho biết tên đăng nhập và mật khẩu hiện đang được sử dụng",
      "Cho thấy nơi các tập tin chương trình được lưu trữ trên hệ thống",
      "Thiết lập các kết nối Internet cho các thông tin đăng nhập"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 86,
    "num": 86,
    "text": "Phím tắt nào được dùng để đổi tên tập tin/thư mục?",
    "options": [
      "F1",
      "F2",
      "F3",
      "F4"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 87,
    "num": 87,
    "text": "Ý nghĩa của Recycle Bin (thùng rác) là gì?",
    "options": [
      "Cho biết có thể xóa một số thư mục cũ hơn",
      "Cho biết có các tập tin cũ sẽ bị xóa",
      "Lưu trữ các tập tin đã xóa hoặc thư mục được tạo ra bởi những người chia sẻ máy tính",
      "Khu vực lưu trữ tạm thời các tập tin và thư mục bị xóa"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 88,
    "num": 88,
    "text": "Việc cài đặt một ngôn ngữ khác trên máy tính nhằm mục đích gì?",
    "options": [
      "Để thay đổi việc hiển thị hoặc cách nhập liệu",
      "Để tự động chuyển đổi email sang ngôn ngữ khác khi ta mở chúng",
      "Để cho phép tập tin fax từ các nước khác đến máy tính sẽ được dịch tự động",
      "Để dịch tự động một tài liệu sang ngôn ngữ khác"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 89,
    "num": 89,
    "text": "Thông báo sau cho biết điều gì? (Are you sure you want to permanently delete this folder?)",
    "options": [
      "Di chuyển thư mục Winrar vào thùng rác",
      "Xóa hoàn toàn thư mục Winrar",
      "Không thể đổi tên thư mục Winrar thành tên khác",
      "Chỉ hiển thị thông tin về thư mục Winrar và không có gì xảy ra nếu bấm nút Yes hoặc No"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 90,
    "num": 90,
    "text": "Người và máy tính giao tiếp với nhau thông qua",
    "options": [
      "Hệ điều hành",
      "Đĩa cứng",
      "Chuột",
      "Bàn phím"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 91,
    "num": 91,
    "text": "Phần mềm nào dưới đây không phải là phần mềm hệ thống?",
    "options": [
      "Microsoft-DOS",
      "Microsoft Windows",
      "Linux",
      "Microsoft Excel"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 92,
    "num": 92,
    "text": "Thông báo sau cho biết điều gì? (Are you sure you want to move this folder to the Recycle Bin?)",
    "options": [
      "Di chuyển thư mục Books vào thùng rác",
      "Xóa hoàn toàn thư mục Books",
      "Không thể đổi tên thư mục Books thành tên khác",
      "Chỉ hiển thị thông tin về thư mục Books và không có gì xảy ra nếu bấm nút Yes hoặc No"
    ],
    "correctIndex": 0,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 93,
    "num": 93,
    "text": "Trong hệ điều hành Windows, để phục hồi tất cả các đối tượng trong Recycle Bin (thùng rác) ta nháy phải chuột tại Recycle Bin và chọn lệnh:",
    "options": [
      "Delete",
      "Restore",
      "Redo",
      "Undo Delete"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 94,
    "num": 94,
    "text": "Tìm câu sai trong các câu dưới đây:",
    "options": [
      "Hệ điều hành đảm bảo giao tiếp giữa người dùng và máy tính",
      "Chức năng chính của hệ điều hành là thực hiện tìm kiếm thông tin trên Internet",
      "Hệ điều hành cung cấp các phương tiện và dịch vụ để người sử dụng dễ dàng thực hiện chương trình, quản lý chặt chẽ, khai thác các tài nguyên của máy tính một cách tối ưu",
      "Hệ điều hành Windows là hệ điều hành dùng cho máy tính cá nhân của hãng Microsoft"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 95,
    "num": 95,
    "text": "Control Panel trong hệ điều hành Windows là gì?",
    "options": [
      "Là tập hợp các chương trình dùng để cài đặt các tham số hệ thống như phông chữ, máy in, ...",
      "Là tập hợp các chương trình dùng để quản lý các phần mềm ứng dụng",
      "Là tập hợp các chương trình dùng để thay đổi các tham số số của các thiết bị phần cứng như chuột, bàn phím, màn hình, ...",
      "Các ý trên đều đúng"
    ],
    "correctIndex": 3,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 96,
    "num": 96,
    "text": "Muốn thay đổi các thông số khu vực trong hệ điều hành Windows như múi giờ, đơn vị tiền tệ, cách viết số, ... ta sử dụng chương trình nào trong các chương trình sau?",
    "options": [
      "Microsoft Paint",
      "Control Panel",
      "System Tools",
      "Caculator"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 97,
    "num": 97,
    "text": "Trong các phát biểu sau, phát biểu nào không chính xác?",
    "options": [
      "Di chuột (Mouse move): Di chuyển con trỏ chuột đến một vị trí nào đó trên màn hình",
      "Nháy chuột (Click): Nhấn một lần nút trái chuột (nút ngầm định) rồi thả ngón tay, còn gọi là kích chuột",
      "Nháy phải chuột (Mouse right): Nhấn một lần nút phải chuột và thả tay",
      "Nháy đúp chuột (Double click): Nháy nhanh hai lần liên tiếp nút trái chuột"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 98,
    "num": 98,
    "text": "Trong hệ điều hành Windows, thanh hiển thị tên chương trình và nằm trên cùng của một cửa sổ được gọi là",
    "options": [
      "Thanh công cụ chuẩn (Standard Bar)",
      "Thanh tiêu đề (Title Bar)",
      "Thanh trạng thái (Status Bar)",
      "Thanh cuộn (Scroll Bar)"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 99,
    "num": 99,
    "text": "Trong hệ điều hành Windows, thao tác Drag and Drop (kéo thả chuột) được sử dụng khi ta:",
    "options": [
      "Mở thư mục",
      "Thay đổi màu nền cho cửa sổ hiện hành",
      "Di chuyển đối tượng đến vị trí mới",
      "Xem thuộc tính của tệp hiện tại"
    ],
    "correctIndex": 2,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 100,
    "num": 100,
    "text": "Đường tắt (Shortcut) là gì?",
    "options": [
      "Là chương trình được cài đặt vào máy tính giúp người dùng khởi động máy tính nhanh chóng",
      "Là biểu tượng giúp người dùng truy cập nhanh vào đối tượng thường sử dụng",
      "Là biểu tượng để mở cửa sổ My Computer",
      "Là chương trình được cài đặt vào máy tính với mục đích hỗ trợ người sử dụng soạn thảo các văn bản tiếng việt"
    ],
    "correctIndex": 1,
    "moduleNumber": 2,
    "moduleName": "Modul 2: Sử dụng máy tính cơ bản (Windows)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 101,
    "num": 101,
    "text": "WWW là viết tắt của ______",
    "options": [
      "World Wide Wed",
      "World Wide Web",
      "World Wild Wed",
      "Word Wide Web"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 102,
    "num": 102,
    "text": "World Wide Web là gì?",
    "options": [
      "Là một hệ thống các máy chủ cung cấp thông tin đến bất kỳ các máy tính nào trên Internet có yêu cầu",
      "Là máy dùng để đặt trang Web trên Internet",
      "Là một dịch vụ của Internet",
      "Là một website"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 103,
    "num": 103,
    "text": "Chương trình dùng để xem các trang Web được gọi là ______",
    "options": [
      "Trình duyệt Web",
      "Bộ duyệt Web",
      "Chương trình xem Web",
      "Phần mềm xem Web"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 104,
    "num": 104,
    "text": "Tên miền gov.vn được dùng cho ______",
    "options": [
      "Chính phủ, các cơ quan hành chính, tổ chức nhà nước trên lãnh thổ Việt Nam.",
      "Tất cả các cơ quan, tổ chức...",
      "Các đơn vị, tổ chức giáo dục",
      "Các tổ chức phi chính phủ."
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 105,
    "num": 105,
    "text": "Mục đích chính của việc đưa ra tên miền",
    "options": [
      "Dễ nhớ",
      "Tên miền đẹp hơn địa chỉ IP",
      "Thiếu địa chỉ IP",
      "Tên miền dễ xử lý bởi máy tính hơn"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 106,
    "num": 106,
    "text": "Địa chỉ Website nào sau đây không hợp lệ?",
    "options": [
      "www.hochiminh.gov.vn",
      "dhbk.hochiminh.edu.vn",
      "www@hochiminh.net.vn",
      "www.hochiminh.com.vn"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 107,
    "num": 107,
    "text": "Đâu không phải là Trình duyệt Web?",
    "options": [
      "Mozilla Firefox",
      "Google Chrome",
      "Apple Safari",
      "Adobe Flash"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 108,
    "num": 108,
    "text": "Tên miền edu.vn được dùng cho ______",
    "options": [
      "Chính phủ, các cơ quan hành chính, tổ chức nhà nước trên lãnh thổ Việt Nam.",
      "Tất cả các cơ quan, tổ chức...",
      "Các đơn vị, tổ chức giáo dục trên lãnh thổ Việt Nam",
      "Các tổ chức phi chính phủ."
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 109,
    "num": 109,
    "text": "Trong lĩnh vực Công nghệ thông tin, ISP là viết tắt của ______",
    "options": [
      "Internet Service Provider",
      "International Specialty Products",
      "Internet Server Provider",
      "International Sports Properties"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 110,
    "num": 110,
    "text": "Trang chủ là gì?",
    "options": [
      "Là một trang web đầu tiên của Website",
      "Là tập hợp các trang web có liên quan đến nhau",
      "Là địa chỉ của Website",
      "Là một máy chủ"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 111,
    "num": 111,
    "text": "Web Server là gì?",
    "options": [
      "Là máy chủ dùng để đặt các trang Web trên Internet",
      "Là máy tính đang được sử dụng để xem nội dung các trang web",
      "Là một dịch vụ của Internet",
      "Là một website"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 112,
    "num": 112,
    "text": "IAP (Internet Access Provider) là gì?",
    "options": [
      "Là nhà cung cấp dịch vụ Internet",
      "Là nhà cung cấp cổng truy cập Internet cho các mạng",
      "Là nhà cung cấp thông tin trên Internet",
      "Là nhà cung cấp máy chủ"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 113,
    "num": 113,
    "text": "ISP (Internet Service Provider) là gì?",
    "options": [
      "Là nhà cung cấp dịch vụ Internet",
      "Là nhà cung cấp cổng truy cập Internet cho các mạng",
      "Là nhà cung cấp thông tin trên Internet",
      "Là nhà cung cấp máy chủ"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 114,
    "num": 114,
    "text": "Web site là ______",
    "options": [
      "Kết hợp nhiều trang Web trên nhiều địa chỉ khác nhau",
      "Kết hợp nhiều trang Web trên một địa chỉ duy nhất",
      "Là một trang Web khi mở",
      "Tất cả các ý trên"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 115,
    "num": 115,
    "text": "Điều kiện để kết nối vào Internet qua đường dây điện thoại cố định là:",
    "options": [
      "Phải có máy tính",
      "Phải có thuê bao điện thoại cố định",
      "Phải có modem",
      "Cả 3 câu đều đúng"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 116,
    "num": 116,
    "text": "Mạng Intranet là gì?",
    "options": [
      "Là một mạng máy tính nối giữa 2 máy với nhau",
      "Là sự kết nối các máy tính của nhiều cơ quan",
      "Là sự kết nối các máy tính trên phạm vi toàn cầu",
      "Là một cái máy tính"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 117,
    "num": 117,
    "text": "HTTP là gì?",
    "options": [
      "Là giao thức truyền siêu văn bản",
      "Là ngôn ngữ để soạn thảo nội dung các trang Web",
      "Là địa chỉ của trang Web",
      "Là tên của trang Web"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 118,
    "num": 118,
    "text": "Khi làm việc trên một dự án của trường học, việc làm một bài thuyết trình trực tuyến cho những đối tượng khác cùng biết là một ví dụ của ______",
    "options": [
      "Thu thập thông tin",
      "Tổ chức thông tin",
      "Đánh giá thông tin",
      "Chia sẻ thông tin"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 119,
    "num": 119,
    "text": "Khi muốn lấy các nội dung từ mạng xuống máy tính, ta sử dụng lựa chọn nào?",
    "options": [
      "Gửi thư",
      "Tải xuống",
      "Tải lên",
      "Kết nối đến ứng dụng khác"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 120,
    "num": 120,
    "text": "Sắp xếp theo thứ tự các thao tác để đăng nhập vào hộp thư điện tử đã có: 1. Gõ tên đăng nhập và mật khẩu 2. Truy cập vào trang Web cung cấp dịch vụ thư điện tử 3. Mở Internet 4. Nháy chuột vào nút Đăng nhập",
    "options": [
      "1 - 2 - 3 - 4",
      "3 - 2 - 1 - 4",
      "4 - 3 - 2 - 1",
      "2 - 3 - 1 - 4"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 121,
    "num": 121,
    "text": "Trình bày cú pháp địa chỉ thư điện tử tổng quát?",
    "options": [
      "lop9b > @ < yahoo.com>",
      "<Tên đăng nhập > @ < Tên máy chủ lưu hộp thư>",
      "<Tên đăng nhập > @ < gmail.com>",
      "<Tên đăng nhập>"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 122,
    "num": 122,
    "text": "Nhà cung cấp dịch vụ thư điện tử là:",
    "options": [
      "www.google.com.vn",
      "www.yahoo.com",
      "www.gmail.com",
      "B và C đúng"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 123,
    "num": 123,
    "text": "Địa chỉ thư điện tử được phân cách bởi kí hiệu:",
    "options": [
      "$",
      "@",
      "#",
      "&"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 124,
    "num": 124,
    "text": "Để tạo một hộp thư điện tử mới:",
    "options": [
      "Người sử dụng phải có sự cho phép của cơ quan quản lý dịch vụ Internet",
      "Người sử dụng phải có ít nhất một địa chỉ Website",
      "Người sử dụng không thể tạo cho mình một hộp thư mới",
      "Người sử dụng có thể đăng ký qua các nhà cung cấp dịch vụ Internet hoặc thông qua các địa chỉ Website miễn phí trên Internet tại bất kỳ đâu trên thế giới"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 125,
    "num": 125,
    "text": "Email là viết tắt của ______",
    "options": [
      "Exchange Mail",
      "Electronic Mail",
      "Electrical Mail",
      "Else Mail"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 126,
    "num": 126,
    "text": "Thư mục mặc định được hiển thị sau khi đăng nhập thành công vào hộp thư cá nhân",
    "options": [
      "Hộp thư đi",
      "Hộp thư đến",
      "Thư đã gửi (Mục đã gửi)",
      "Hộp thư nháp"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 127,
    "num": 127,
    "text": "Trong soạn thảo Email, muốn đính kèm tập tin ta bấm nút nào?",
    "options": [
      "File – Save",
      "Copy",
      "Attachment",
      "Send"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 128,
    "num": 128,
    "text": "Thư điện tử là gì?",
    "options": [
      "Hình thức gửi các thiết bị điện tử qua đường bưu điện",
      "Hình thức gửi thư qua môi trường Internet",
      "Hình thức gửi thư đến các nhà cung cấp điện",
      "Hình thức chuyển các thiết bị điện tử qua đường Internet"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 129,
    "num": 129,
    "text": "Lợi thế nổi trội của thư điện tử so với thư gửi qua đường bưu điện là gì?",
    "options": [
      "Thư điện tử luôn có độ an toàn dữ liệu cao hơn",
      "Có thể chuyển được lượng văn bản lớn hơn nhờ chức năng gắn kèm",
      "Tốc độ chuyển thư nhanh",
      "Thư điện tử luôn luôn được phân phát"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 130,
    "num": 130,
    "text": "Địa chỉ email nào sau đây đúng định dạng?",
    "options": [
      "Internet.@gmail.com",
      "Trungtamdientoan@$.yahoo.com",
      "photoshop@t5#.ymail.com",
      "bachkhoa@hotmail.com"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 131,
    "num": 131,
    "text": "Mục To khi gửi email có ý nghĩa gì?",
    "options": [
      "Điền tiêu đề của email",
      "Điền địa chỉ email của bạn để người nhận biết ai là người gửi",
      "Điền địa chỉ email của một hoặc nhiều người nhận",
      "Không để làm gì cả"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 132,
    "num": 132,
    "text": "Điền địa chỉ email vào mục Cc - Carbon Copy để làm gì?",
    "options": [
      "Sao chép email thành bản giấy than để lưu trữ lại",
      "Gửi một bản sao email cho người nhận, cho phép tất cả những người nhận khác thấy địa chỉ email của người nhận này",
      "Gửi một bản sao email cho người nhận, không cho phép những người nhận khác thấy được địa chỉ chi email của người nhận này",
      "Sao chép email thành bản bí mật để lưu trữ lại"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 133,
    "num": 133,
    "text": "Điền địa chỉ email vào mục Bcc - Blind Carbon Copy thì sao?",
    "options": [
      "Gửi một bản sao email cho người nhận, cho phép tất cả những người nhận khác thấy được địa chỉ email này",
      "Sao chép email thành bản bí mật để lưu trữ lại",
      "Sao chép email thành bản giấy than để lưu trữ lại",
      "Gửi một bản sao email cho người nhận, không cho những người nhận khác được thấy được địa chỉ chi email này"
    ],
    "correctIndex": 3,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 134,
    "num": 134,
    "text": "Điều gì xảy ra khi chuyển tiếp - Forward một email bạn nhận được?",
    "options": [
      "Một bản sao \"Copy\" của email sẽ được gửi tới người nhận",
      "Bạn chỉ được chuyển tiếp \"Forward\" email nếu người gửi ban đầu cho phép",
      "Email sẽ được gửi tới người nhận và xóa khỏi hộp thư đến \"Inbox\"",
      "Một bản sao \"Copy\" của email sẽ được gửi tới Người gửi ban đầu"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 135,
    "num": 135,
    "text": "Khi bạn chuyển tiếp email, những ai sẽ nhận được bản sao này?",
    "options": [
      "Người gửi ban đầu",
      "Cả người nhận và người gửi ban đầu",
      "Người nhận",
      "Không ai nhận được email chuyển tiếp"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 136,
    "num": 136,
    "text": "Khi chuyển tiếp email có đính kèm tập tin, điều gì sẽ xảy ra?",
    "options": [
      "Email và tệp đính kèm sẽ được gửi riêng thành 2 email khác nhau",
      "Một bản copy của email và tất cả tệp đính kèm sẽ được gửi tới người nhận",
      "Email sẽ được gửi tới người nhận, nhưng tập tin đính kèm không được gửi đi",
      "Không chuyển tiếp email có đính kèm tập tin được"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 137,
    "num": 137,
    "text": "Khi trả lời email, tiêu đề - Subject của email thường có thêm tiền tố gì?",
    "options": [
      "Tiêu đề không thay đổi",
      "RE - Viết tắt của từ Reply - Đáp lại",
      "AN - Viết tắt của từ Answer - Trả lời",
      "FW – Viết tắt của từ Forward – Chuyển tiếp"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 138,
    "num": 138,
    "text": "Tiêu đề khi chuyển tiếp email thường có thêm tiền tố gì?",
    "options": [
      "Tiêu đề không thay đổi",
      "CC - Viết tắt của từ Carbon Copy",
      "FW hoặc FWD - Viết tắt của từ Forward",
      "RE - Viết tắt của từ Reply - Đáp lại"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 139,
    "num": 139,
    "text": "Nếu \"Reply\" người gửi ban đầu sau khi đã chuyển tiếp email đó cho người khác, liệu người gửi ban đầu có xem được email chuyển tiếp không?",
    "options": [
      "Điều này không xảy ra vì đó là 2 thao tác khác nhau",
      "Điều này có thể xảy ra với một số dịch vụ email, bạn nên cẩn thận xem trước nội dung khi trả lời",
      "Bạn không thể trả lời người gửi ban đầu sau khi đã chuyển tiếp email đó",
      "Hệ thống máy chủ Email không có hỗ trợ chức năng này"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 140,
    "num": 140,
    "text": "Tôi muốn gửi email giống nhau cho nhiều người, nhưng mỗi người đều nhận được lời chào đúng tên riêng của họ, thì làm thế nào?",
    "options": [
      "Dùng Auto reply - Tự động trả lời",
      "Dùng Mail merge - Hợp nhất email",
      "Dùng Mail combine - Ghép email",
      "Không làm được cho dù có kết hợp với ứng dụng khác"
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 141,
    "num": 141,
    "text": "Web tĩnh là các trang web ______",
    "options": [
      "Có nội dung không thay đổi",
      "Chỉ có một trang duy nhất",
      "Không có video hay ảnh động",
      "Không có các liên kết đến các trang web khác"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 142,
    "num": 142,
    "text": "Web động là các trang web ______",
    "options": [
      "Có khả năng tương tác giữa người dùng và máy chủ",
      "Có nhiều video, ảnh động",
      "Có nhiều liên kết đến các trang khác",
      "Thay đổi theo từng ngày"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 143,
    "num": 143,
    "text": "Người sử dụng không thể tự lập được hộp thư điện tử nào:",
    "options": [
      "Google Mail",
      "Yahoo Mail",
      "Thư điện tử của trường Đại học Bách Khoa",
      "Hotmail"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 144,
    "num": 144,
    "text": "Với thư điện tử, phát biểu nào là sai?",
    "options": [
      "Có thể gửi 1 thư đến 10 địa chỉ khác nhau .",
      "1 người có thể gửi thư cho chính mình, nhiều lần.",
      "Hai người có thể có địa chỉ thư giống nhau.",
      "Tệp tin đính kèm theo thư có thể chứa virút, vậy nên cần kiểm tra virút trước khi sử dụng."
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 145,
    "num": 145,
    "text": "Chức năng nào không hỗ trợ khi dùng email miễn phí tại gmail.com",
    "options": [
      "Đổi tên đăng nhập",
      "Đổi mật khẩu",
      "Đính kèm tập tin theo thư",
      "In thư ra máy in"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 146,
    "num": 146,
    "text": "Hai người đã tạo được tài khoản thư miễn phí tại địa chỉ gmail.com. Phát biểu nào là sai?",
    "options": [
      "Hộp thư của cả hai đều nằm trên máy Mail Server của công ty Google.",
      "Mật khẩu mở hộp thư của hai người này phải khác nhau.",
      "Hai người này buộc phải lựa chọn hai tên đăng nhập khác nhau.",
      "Người này có thể mở được hộp thư của người kia và ngược lại nếu như 2 người biết tên đăng nhập và mật khẩu của nhau."
    ],
    "correctIndex": 1,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 147,
    "num": 147,
    "text": "Chọn ra khẳng định sai: “Tên miền của các website có máy chủ đặt tại Việt Nam thì ______”",
    "options": [
      "Bắt buộc phải là Tiếng Việt không dấu (hoặc Tiếng Anh)",
      "Phải duy nhất và được một tổ chức quản lý tên miền đồng ý và cho phép",
      "Nhóm cuối cùng của tên miền thường dùng cụm từ “.vn”",
      "Không được có khoảng trắng trong tên miền"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 148,
    "num": 148,
    "text": "Thuật ngữ kỹ thuật trong mua và bán hàng qua mạng Internet là gì ?",
    "options": [
      "Hệ thống điện tử (E-system)",
      "Mạng điện tử (E-network)",
      "Thương mại điện tử (E-commerce)",
      "Thương mại Internet (I-Commerce)"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 149,
    "num": 149,
    "text": "Internet ảnh hưởng vấn đề gì đến môi trường học tập?",
    "options": [
      "Việc học từ xa (đào tạo qua mạng) gia tăng",
      "Số lượng giảng viên được đào tạo gia tăng",
      "Chất lượng tài liệu nghiên cứu được nâng cao",
      "Sự tương tác giữa giáo viên và học sinh được tăng cường"
    ],
    "correctIndex": 0,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 150,
    "num": 150,
    "text": "Bạn nhận được một bức thư điện tử chứa tệp tin đính kèm mà bạn không nhận biết ra. Những bước hành động tốt nhất nào bạn sẽ thực hiện từ khía cạnh an ninh",
    "options": [
      "Mở tệp tin này ra để kiểm tra loại tệp tin",
      "Chuyển thư này cho ai đó mà bạn nghĩ rằng bạn có thể nhận biết được",
      "Quét tập tin này bằng chương trình chống virus",
      "Lưu bản sao tập tin này vào đĩa cứng và mở bản sao này"
    ],
    "correctIndex": 2,
    "moduleNumber": 6,
    "moduleName": "Modul 6: Sử dụng Internet cơ bản",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 151,
    "num": 151,
    "text": "Trong Microsoft Word, tổ hợp phím nào sau đây chọn toàn bộ tài liệu?",
    "options": [
      "Alt+A",
      "Shift+Ctrl+A",
      "Ctrl+A",
      "Alt+F8"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 152,
    "num": 152,
    "text": "Trong Microsoft Word, tổ hợp phím tắt để di chuyển con trỏ về cuối tài liệu?",
    "options": [
      "Ctrl+End",
      "Ctrl+Page Down",
      "End",
      "Page Down"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 153,
    "num": 153,
    "text": "Phím nào sau đây đưa con nháy về đầu dòng hiện hành trong Microsoft Word?",
    "options": [
      "Ctrl+Home",
      "Ctrl+Page Up",
      "Home",
      "End."
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 154,
    "num": 154,
    "text": "Phím tắt để di chuyển con trỏ về đầu tài liệu trong Microsoft Word?",
    "options": [
      "Ctrl+End",
      "Ctrl+Home",
      "Home",
      "Ctrl+Page Up"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 155,
    "num": 155,
    "text": "Trong Microsoft Word, câu nào sau đây là không đúng trong trường hợp định dạng đoạn - Paragraph?",
    "options": [
      "Bấm nút Center trên thanh công cụ sẽ canh đoạn hiện hành hoặc đã chọn vào giữa trang.",
      "Khoảng cách canh cột mặc nhiên là ½ inch.",
      "Khi đặt một nút canh cột nó sẽ có tác dụng trên tất cả các đoạn văn bản trong tài liệu.",
      "Hai loại canh lề đặc biệt là: First Line và Hanging trong Paragraph."
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 156,
    "num": 156,
    "text": "Với Microsoft Word, để định dạng hình ảnh với văn bản, ta ấn chuột phải vào hình ảnh và chọn ______",
    "options": [
      "AutoShape",
      "Format AutoShape",
      "Format Picture",
      "Auto Picture"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 157,
    "num": 157,
    "text": "Cách nhanh nhất để chọn một từ trong Microsoft Word?",
    "options": [
      "Kéo chuột qua từ đó.",
      "Di chuyển điểm nháy đến chữ đầu, giữ phím shift và dùng các phím mũi tên.",
      "Bấm chọn chức năng Select Word Wizard trên thanh công cụ và làm theo hướng dẫn.",
      "Nhấp đúp vào từ."
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 158,
    "num": 158,
    "text": "Trong Microsoft Word, thao tác nào để sao chép định dạng và áp đặt định dạng cho nhiều dòng liên tiếp ?",
    "options": [
      "Bấm nút Format Painter trên thanh công cụ.",
      "Bấm đúp nút Format Painter trên thanh công cụ. .",
      "Không thực hiện được.",
      "Mở hộp thoại Copy and Apply Formatting bằng cách dùng lệnh Format - Copy Formatting từ menu."
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 159,
    "num": 159,
    "text": "Phát biểu nào sau đây là đúng khi sử dụng phím Enter trong Microsoft Word?",
    "options": [
      "Kết thúc đoạn văn hiện tại và bắt đầu một đoạn văn mới.",
      "Tài liệu sẽ sang trang mới.",
      "Đoạn văn sẽ qua dòng mới nhưng chưa kết thúc đoạn.",
      "Nếu đã chia cột thì đoạn văn sẽ bị cắt qua cột mới."
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 160,
    "num": 160,
    "text": "Trong Microsoft Word, sử dụng tổ hợp phím Shift+Enter có chức năng gì?",
    "options": [
      "Kết thúc đoạn văn hiện tại và bắt đầu một đoạn văn mới.",
      "Tài liệu sẽ sang trang mới.",
      "Đoạn văn sẽ qua dòng mới nhưng chưa kết thúc đoạn.",
      "Nếu đã chia cột thì đoạn văn sẽ bị cắt qua cột mới."
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 161,
    "num": 161,
    "text": "Trong Microsoft Word, sử dụng tổ hợp phím Ctrl+Enter có chức năng gì?",
    "options": [
      "Kết thúc đoạn văn hiện tại và bắt đầu một đoạn văn mới.",
      "Tài liệu sẽ sang trang mới.",
      "Đoạn văn sẽ qua dòng mới nhưng chưa kết thúc đoạn.",
      "Nếu đã chia cột thì đoạn văn sẽ bị cắt qua cột mới."
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 162,
    "num": 162,
    "text": "Trong Microsoft Word, để nhập dữ liệu và di chuyển trong table, phát biểu nào sau đây là đúng?",
    "options": [
      "Tab để di chuyển qua ô kế tiếp, Shift+Tab để đi theo hướng ngược lại.",
      "Enter để di chuyển qua ô kế tiếp, Shift+enter để đi theo hướng ngược lại.",
      "Mũi tên phải để di chuyển qua ô kế tiếp, mũi tên trái để đi theo hướng ngược lại.",
      "Mũi tên lên để di chuyển qua ô kế tiếp, mũi tên xuống để đi theo hướng ngược lại."
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 163,
    "num": 163,
    "text": "Trong Microsoft Word, Style là gì?",
    "options": [
      "Cùng nghĩa với style trong thế giới thời trang.",
      "Một tập hợp các định dạng lưu trở thành một tên gọi riêng và dễ dàng áp đặt lên các đối tượng khác bằng một thao tác duy nhất.",
      "Một loại tài liệu đặc biệt.",
      "Một thành phần định dạng chỉ dùng trong trang Web."
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 164,
    "num": 164,
    "text": "Cách nào sau đây dùng để chọn nhiều đối tượng trên tài liệu trong Microsoft Word?",
    "options": [
      "Bấm nút Select Object trên thanh công cụ, bấm các đối tượng cần chọn, nhấn enter khi chọn xong.",
      "Giữ phím Shift khi chọn mỗi đối tượng.",
      "Chỉ có thể chọn một đối tượng mỗi lần.",
      "Bấm nút mũi tên trên thanh công cụ Drawing và kéo một hình chữ nhật bao quanh các đối tượng cần chọn."
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 165,
    "num": 165,
    "text": "Trong Microsoft Word các thành phần Block Arrows, Stars and Banners, và Callouts là các ví dụ của ______",
    "options": [
      "Các kiểu trò chơi xây dựng của trẻ em.",
      "Các chủ đề Clip art trong bộ sưu tập Microsoft Clip Gallery.",
      "Các chủ đề AutoShape .",
      "Một thuật ngữ kỹ thuật chưa xác định."
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 166,
    "num": 166,
    "text": "Khi soạn thảo văn bản trong Microsoft Word, để khai báo thời gian tự lưu văn bản, ta thực hiện ______",
    "options": [
      "File - Options - Save chọn thời gian tại mục Save AutoRecover info every",
      "Home - Options - Save chọn thời gian tại mục Save AutoRecover info every",
      "View - Options - Save chọn thời gian tại mục Save AutoRecover info every",
      "Insert - Options - Save chọn thời gian tại mục Save AutoRecover info every"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 167,
    "num": 167,
    "text": "Trong Microsoft Word để chèn header hoặc footer trên trang văn bản, ta thực hiện",
    "options": [
      "View - Header and Footer",
      "Thẻ Insert - Header and Footer - nhấn nút Header hoặc Footer",
      "Insert - Header and Footer",
      "Format- Header and Footer"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 168,
    "num": 168,
    "text": "Trong Microsoft Word để bật/tắt hiển thị thanh thước kẻ trên cửa sổ soạn thảo, ta thực hiện ______",
    "options": [
      "View – Ruler",
      "View - Outline",
      "View - Show/Hide - đánh dấu/bỏ đánh dấu vào mục Ruler",
      "Thẻ Insert - đánh dấu vào mục Ruler"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 169,
    "num": 169,
    "text": "Trong Microsoft Word thao tác nào không thể tạo điểm dừng Tabs?",
    "options": [
      "Bấm chuột trái trên thanh thước tại vị trí muốn đặt Tab",
      "Thẻ Page Layout - Paragraph - nhấn nút mũi tên bên dưới – Tabs",
      "Thẻ Home - Paragraph - nhấn nút mũi tên bên dưới – Tabs",
      "Thẻ View – Tabs"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 170,
    "num": 170,
    "text": "Trong Microsoft Word khi lưu văn bản mới thì phần mở rộng của văn bản đó ở dạng nào?",
    "options": [
      "*.doc",
      "*.docx",
      "*.txtx",
      "*.pdfx"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 171,
    "num": 171,
    "text": "Tổ hợp phím Ctrl+Z trong Microsoft Word dùng để:",
    "options": [
      "Hủy thao tác Đóng cửa sổ đang mở",
      "Hủy kết quả của thao tác hoặc lệnh phía trước gần nhất kết quả hiện tại",
      "Đóng tập tin đang mở",
      "Nhảy đến một trang văn bản"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 172,
    "num": 172,
    "text": "Microsoft Word là một ______",
    "options": [
      "Phần mềm hệ thống",
      "Phần mềm bảng tính",
      "Phần mềm quản lý",
      "Phần mềm ứng dụng"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 173,
    "num": 173,
    "text": "Tính năng nào sau đây không đúng là của Microsoft Word?",
    "options": [
      "Lưu và đọc các tập tin văn bản dạng .doc, .docx",
      "Lưu và đọc các tập tin dạng .pdf",
      "Lưu và đọc các tập tin HTML",
      "Lưu và đọc các tập tin dạng .txt"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 174,
    "num": 174,
    "text": "Tổ hợp phím tắt nào sau đây được dùng để lưu văn bản trong Microsoft Word?",
    "options": [
      "Ctrl+X",
      "Ctrl+C",
      "Ctrl+V",
      "Ctrl+S"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 175,
    "num": 175,
    "text": "Trong Microsoft Word, nút nào sau đây được dùng để sử dụng chức năng Tab trong table",
    "options": [
      "Tab",
      "Shift+Tab",
      "Ctrl+Tab",
      "Alt+Tab"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 176,
    "num": 176,
    "text": "Trong Microsoft Word, khi giữ phím Ctrl và bấm chuột trái vào trong văn bản có tác dụng gì?",
    "options": [
      "Chọn một từ tại vị trí con trỏ",
      "Chọn một câu tại vị trí con trỏ",
      "Chọn một đoạn văn tại vị trí con trỏ",
      "Di chuyển con nháy đến vị trí con trỏ"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 177,
    "num": 177,
    "text": "Trong Microsoft Word, WordArt là ______",
    "options": [
      "Một đối tượng chữ nghệ thuật",
      "Một đối tượng hình ảnh",
      "Một đối tượng văn bản với kích thước chữ to hơn bình thường",
      "Một công cụ dùng để vẽ chữ"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 178,
    "num": 178,
    "text": "Trong Microsoft Word, các đường gạch chân xanh-đỏ xuất hiện khi gõ văn bản có ý nghĩa gì?",
    "options": [
      "Do máy bị nhiễm virus",
      "Gạch màu xanh là do sai chính tả, màu đỏ là do ngữ pháp có vấn đề",
      "Gạch màu xanh là do ngữ pháp có vấn đề, màu đỏ là do sai chính tả",
      "Word tự động thêm cho đẹp"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 179,
    "num": 179,
    "text": "Trong Microsoft Word, chức năng nào được dùng để trộn các ô trong bảng biểu?",
    "options": [
      "Cell Margins",
      "Split Cells",
      "Mail Merge",
      "Merge Cells"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 180,
    "num": 180,
    "text": "Chức năng Recent trong thẻ File của Microsoft Word có chức năng gì ?",
    "options": [
      "Xem thông tin văn bản hiện tại",
      "Xem các văn bản đã mở gần đây",
      "Mở ra một trang văn bản mới",
      "Xem bố cục của văn bản trước khi in"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 181,
    "num": 181,
    "text": "Trong Microsoft Word, phát biểu nào sau đây là sai?",
    "options": [
      "Màu trang giấy của Word có thể đổi bằng chức năng Shading",
      "Chức năng Save và Save As là giống nhau khi lưu văn bản lần đầu",
      "Chức năng Paragraph được dùng để định dạng 1 hoặc nhiều đoạn văn",
      "Kích thước chữ nhỏ nhất mà Word cho phép là 1"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 182,
    "num": 182,
    "text": "Trong soạn thảo Microsoft Word, đơn vị đo lường nào của thước không hỗ trợ ?",
    "options": [
      "Centimeters",
      "Points",
      "Inches",
      "Pixel"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 183,
    "num": 183,
    "text": "Trong soạn thảo Microsoft Word, muốn trình bày văn bản trong khổ giấy theo hướng ngang ta chọn mục",
    "options": [
      "Left",
      "Portrait",
      "Right",
      "Landscape"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 184,
    "num": 184,
    "text": "Trong soạn thảo Microsoft Word, nội dung của vùng header sẽ",
    "options": [
      "Được in ở đầu mỗi trang",
      "Được in ở bên phải mỗi trang",
      "Được in ở bên trái mỗi trang",
      "Được in ở cuối mỗi trang"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 185,
    "num": 185,
    "text": "Khả năng nào sau đây không có trong Microsoft Word?",
    "options": [
      "Vẽ các cạnh của bảng (draw table) có thể dùng để tách các ô (split cells)",
      "Xoá các cạnh của bảng có thể dùng để trộn các ô (merge cells)",
      "Có thể viết chữ theo hướng xéo trong một ô",
      "Có thể vẽ đường viền theo kiểu răng cưa"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 186,
    "num": 186,
    "text": "Có bao nhiêu kiểu margin(lề) trong một trang là Microsoft Word?",
    "options": [
      "Hai margin: header và footer",
      "Bốn margin: top, bottom, left, right",
      "Hai margin: landscape(ngang) và Portrait (đứng)",
      "Hai margin: top và bottom"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 187,
    "num": 187,
    "text": "Trong Microsoft Word, câu nào sau đây sai?",
    "options": [
      "Có thể chèn văn bản (text) vào hầu hết đối tượng vẽ (shape)",
      "Có thể chuyển đổi từ đối tượng vẽ này thành đối tượng vẽ khác nhanh chóng",
      "Có thể nhóm (group) các đối tượng vẽ với nhau",
      "Có thể chia cột cho văn bản trong đối tượng Shape"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 188,
    "num": 188,
    "text": "Trong Microsoft Word, câu nào sau đây sai?",
    "options": [
      "Có thể chèn các công thức toán học vào văn bản và giải các công thức này tự động",
      "Có thể chèn các ký tự đặc biệt có trong các font chữ trong máy",
      "Có thể định dạng hiệu ứng chữ bằng WordArt",
      "Có thể làm việc với bảng tính như trong Excel"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 189,
    "num": 189,
    "text": "Trong Microsoft Word, để ngắt trang ta thực hiện ______",
    "options": [
      "Thẻ View - Page Break",
      "Thẻ References - Captions – Break",
      "Thẻ Review - Create - Page Break",
      "Thẻ Insert - Pages - Page Break"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 190,
    "num": 190,
    "text": "Trong Microsoft Word, để chèn biểu đồ vào văn bản, ta thực hiện:",
    "options": [
      "Thẻ References - Illustrations - Chart",
      "Thẻ Insert - Illustrations - Chart",
      "Thẻ Mailings - Illustrations - Chart",
      "Thẻ Review - Illustrations - Chart"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 191,
    "num": 191,
    "text": "Trong Microsoft Word, có các chế độ in ấn nào?",
    "options": [
      "In toàn bộ văn bản hoặc các trang chẵn lẻ riêng biệt",
      "Không in các trang được chỉ định",
      "Có thể in hai mặt trên bất kỳ máy in nào một cách tự động",
      "Chỉ in phần Header/Footer"
    ],
    "correctIndex": 0,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 192,
    "num": 192,
    "text": "Trong Microsoft Word, chức năng nào dùng để ngắt cột?",
    "options": [
      "Chọn thẻ Insert - Page Break",
      "Sử dụng phím tắt Ctrl+Enter",
      "Chọn thẻ Page Layout - Breaks - Column",
      "Chọn thẻ Page Layout - Columns"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 193,
    "num": 193,
    "text": "Trong Microsoft Word, ký hiệu ⌊ trên thanh thước có nghĩa là gì?",
    "options": [
      "Canh lề trái cho đoạn văn",
      "Canh lề phải cho đoạn văn",
      "Canh văn bản ở mép trái tại vị trí TAB",
      "Canh văn bản ở mép phải tại vị trí TAB"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 194,
    "num": 194,
    "text": "Trong Microsoft Word, ký hiệu ⊥ trên thanh thước có nghĩa là gì?",
    "options": [
      "Canh lề trái cho đoạn văn",
      "Canh lề phải cho đoạn văn",
      "Canh văn bản ở giữa tại vị trí TAB",
      "Canh văn bản ở mép phải tại vị trí TAB"
    ],
    "correctIndex": 2,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 195,
    "num": 195,
    "text": "Trong Microsoft Word, ký hiệu ⌋ trên thanh thước có nghĩa là gì?",
    "options": [
      "Canh lề trái cho đoạn văn",
      "Canh lề phải cho đoạn văn",
      "Canh văn bản ở mép trái tại vị trí TAB",
      "Canh văn bản ở mép phải tại vị trí TAB"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 196,
    "num": 196,
    "text": "Trong Microsoft Word, sau khi chọn toàn bộ văn bản trong bảng (table) và bấm nút Delete thì chuyện gì sẽ xảy ra?",
    "options": [
      "Xóa toàn bộ văn bản và table",
      "Chỉ xóa toàn bộ văn bản",
      "Chỉ xóa toàn bộ định dạng",
      "Chỉ xóa table"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 197,
    "num": 197,
    "text": "Trong Microsoft Word, muốn tạo chữ rơi cho văn bản, ta thực hiện",
    "options": [
      "Page layout – Dropcap",
      "View – Dropcap",
      "Home – Dropcap",
      "Insert – Dropcap"
    ],
    "correctIndex": 3,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 198,
    "num": 198,
    "text": "Trong Microsoft Word, phát biểu nào sau đây là đúng nhất ?",
    "options": [
      "Có thể đặt lại chỉ mục của chức năng Numbering nhưng phải qua trang văn bản khác",
      "Bullets và Numbering đều có chức năng tương tự nhau là đánh dấu đầu mỗi đoạn văn",
      "Canh lề của chức năng Bullets khi được tạo ra là cố định và không thể thay đổi",
      "Không thể sử dụng hình ảnh trong máy tính trong chức năng Bullets"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 199,
    "num": 199,
    "text": "Trong Microsoft Word, tạo Header cho văn bản có nghĩa là?",
    "options": [
      "Tạo tiêu đề bên lề trái của văn bản",
      "Tạo tiêu đề trên đầu văn bản",
      "Tạo tiêu đề bên lề phải của văn bản",
      "Tạo tiêu đề dưới chân văn bản"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 200,
    "num": 200,
    "text": "Chức năng Home -> Clear All Formatting được sử dụng để?",
    "options": [
      "Định dạng ký tự",
      "Loại bỏ toàn bộ định dạng",
      "Xóa văn bản",
      "Định dạng văn bản"
    ],
    "correctIndex": 1,
    "moduleNumber": 3,
    "moduleName": "Modul 3: Xử lý văn bản cơ bản (MS Word)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 201,
    "num": 201,
    "text": "Tập hợp các bảng tính trong một file Excel được gọi là một",
    "options": [
      "Document",
      "Presentation",
      "Sheet",
      "Book"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 202,
    "num": 202,
    "text": "Trong Microsoft Excel, câu nào sau đây là đúng nhất?",
    "options": [
      "Chiều cao của một ô là độc lập với các ô khác cùng hàng",
      "Có thể ẩn một hàng hoặc cột không cho hiển thị",
      "Có thể ẩn một ô không cho hiển thị",
      "Có thể tùy chỉnh độ rộng của các ô trong cùng một cột khác nhau"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 203,
    "num": 203,
    "text": "Trong Microsoft Excel, câu nào sau đây sai?",
    "options": [
      "Tính năng Auto Fill có thể dùng để sao chép dữ liệu",
      "Chỉ auto fill được với các giá trị số",
      "Chức năng AutoComplete có thể tắt đi được",
      "Có thể dùng chức năng Series với kiểu dữ liệu ngày"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 204,
    "num": 204,
    "text": "Khi nhập liệu ngày tháng trong Microsoft Excel ở Việt nam, cần phải nhập theo định dạng nào sau đây?",
    "options": [
      "dd/mm/yyyy",
      "mm/dd/yyyy",
      "Tuỳ theo định dạng ngày tháng của máy tính",
      "Tuỳ theo quy định ở Việt nam lúc đó"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 205,
    "num": 205,
    "text": "Đáp án nào sau đây sai? Khi nhập dữ liệu vào bảng tính Microsoft Excel thì:",
    "options": [
      "Dữ liệu kiểu số sẽ mặc định căn lề trái",
      "Dữ liệu kiểu ký tự sẽ mặc định căn lề trái",
      "Dữ liệu kiểu thời gian sẽ mặc định căn lề phải",
      "Dữ liệu kiểu ngày tháng sẽ mặc định căn lề phải"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 206,
    "num": 206,
    "text": "Trong bảng tính Microsoft Excel, các kiểu dữ liệu thông dụng là:",
    "options": [
      "Chuỗi, văn bản, ngày tháng",
      "Số, logic, ngày tháng",
      "Công thức, hàm, số, ngày tháng",
      "Chuỗi, số, logic, ngày tháng, kiểu công thức"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 207,
    "num": 207,
    "text": "Trong bảng tính Microsoft Excel, điều kiện trong hàm IF được phát biểu dưới dạng một phép so sánh. Khi cần so sánh khác nhau thì sử dụng ký hiệu nào?",
    "options": [
      "Dấu “#”",
      "Dấu “&”",
      "Dấu “<>”",
      "Dấu “><”"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 208,
    "num": 208,
    "text": "Trong khi làm việc với Microsoft Excel, để nhập vào công thức tính toán cho một ô, trước hết ta phải gõ",
    "options": [
      "Dấu chấm hỏi (?)",
      "Dấu hai chấm (:)",
      "Dấu bằng (=)",
      "Dấu đô la ($)"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 209,
    "num": 209,
    "text": "Trong Microsoft Excel, địa chỉ $A3$ là địa chỉ",
    "options": [
      "Tương đối",
      "Tuyệt đối",
      "Hỗn hợp",
      "Biểu diễn sai"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": true
  },
  {
    "id": 210,
    "num": 210,
    "text": "Trong Microsoft Excel, khi viết sai tên hàm trong tính toán, chương trình thông báo lỗi?",
    "options": [
      "#VALUE!",
      "#N/A",
      "#NAME?",
      "#DIV/0!"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 211,
    "num": 211,
    "text": "Trong Microsoft Excel, cho bảng tính có vùng dữ liệu (A1:A3 chứa 'A011', 'A010', 'A100'), sau khi thực hiện sắp xếp dữ liệu theo chiều tăng dần, thứ tự sắp xếp nào sau đây là đúng?",
    "options": [
      "A010 - A100 - A011",
      "A010 - A011 - A100",
      "A100 - A010 - A011",
      "A011 - A010 - A100"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 212,
    "num": 212,
    "text": "Trong Microsoft Excel, thành phần thứ 3 trong hàm VLOOKUP là gì?",
    "options": [
      "Bảng dò",
      "Cách dò",
      "Cột tham chiếu để lấy kết quả",
      "Dòng tham chiếu để lấy kết quả"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 213,
    "num": 213,
    "text": "Trong bảng tính Microsoft Excel, nếu trong một ô tính có các kí hiệu #####, điều đó có nghĩa là gì?",
    "options": [
      "Hàng chứa ô đó có độ cao quá thấp nên không hiển thị hết chữ số",
      "Cột chứa ô đó có độ rộng quá hẹp nên không hiển thị hết chữ số",
      "Tập tin chứa bảng tính bị nhiễm virus",
      "Công thức nhập vào ô bị sai và Excel thông báo lỗi"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 214,
    "num": 214,
    "text": "Trong bảng tính Microsoft Excel, để sửa dữ liệu trong một ô tính mà không cần nhập lại, ta thực hiện:",
    "options": [
      "Chọn ô tính cần sửa, rồi bấm phím F2",
      "Chọn ô tính cần sửa, rồi bấm phím F1",
      "Chọn ô tính cần sửa, rồi bấm phím F11",
      "Chọn ô tính cần sửa, rồi bấm phím F12"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 215,
    "num": 215,
    "text": "Trên thẻ Home của thanh công cụ Riboon trong Microsoft Excel, biểu tượng Increase Decimal (x.0 -> .00) có ý nghĩa gì cho vùng dữ liệu được lựa chọn",
    "options": [
      "Tăng số lẻ thập phân và làm tròn số",
      "Giảm số lẻ thập phân và làm tròn số",
      "Làm tròn số và lấy 2 số lẻ thập phân",
      "Định dạng số theo kiểu phân lớp"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 216,
    "num": 216,
    "text": "Trên thẻ Home của thanh công cụ Riboon trong Microsoft Excel, biểu tượng Decrease Decimal (.00 -> .0) có ý nghĩa gì cho vùng dữ liệu được lựa chọn",
    "options": [
      "Tăng số lẻ thập phân và làm tròn số",
      "Giảm số lẻ thập phân và làm tròn số",
      "Làm tròn số và lấy 2 số lẻ thập phân",
      "Định dạng số theo kiểu phân lớp"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 217,
    "num": 217,
    "text": "Cho bảng số liệu như sau trong Microsoft Excel: 10/8/2016  |  Saturday 08-Oct-2016 Cho biết kiểu định dạng hiển thị dữ liệu ngày nào sau đây được áp dụng tại ô B1",
    "options": [
      "ddd d-m-yy",
      "ddd dd-mm-yyyy",
      "dddd dd-mm-yyyy",
      "dddd dd-mmm-yyyy"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 218,
    "num": 218,
    "text": "Trong Microsoft Excel, để tìm các số thỏa điều kiện =5 và =10, ta dùng :",
    "options": [
      "Hàm IF và hàm AND",
      "Hàm IF và hàm OR",
      "Hàm IF và hàm NOT",
      "Hàm IF và ký tự &"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 219,
    "num": 219,
    "text": "Trong bảng tính Microsoft Excel, để biểu diễn số liệu dạng phần trăm, sử dụng biểu đồ kiểu nào dưới đây là hợp lý nhất:",
    "options": [
      "Biểu đồ cột đứng (Column)",
      "Biểu đồ dạng thanh (Bar)",
      "Biểu đồ đường gấp khúc (Line)",
      "Biểu đồ dạng quạt tròn (Pie)"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 220,
    "num": 220,
    "text": "Trong Microsoft Excel, hàm OR là một hàm logic. Hàm cho giá trị đúng (true) khi?",
    "options": [
      "Có ít nhất hai biểu thức điều kiện của hàm có giá trị đúng",
      "Tất cả các biểu thức điều kiện của hàm đều phải có giá trị đúng",
      "Chỉ cần một biểu thức điều kiện nào đó của hàm có giá trị đúng",
      "Tất cả các biểu thức điều kiện của hàm đều phải có giá trị sai"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 221,
    "num": 221,
    "text": "Tính năng nào sau đây không đúng là của Microsoft Excel?",
    "options": [
      "Lưu và đọc các tập tin văn bản dạng .xls, .xlsx",
      "Lưu và đọc các tập tin dạng .WMV",
      "Lưu và đọc các tập tin HTML",
      "Lưu và đọc các tập tin .XPS"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 222,
    "num": 222,
    "text": "Khi quản lý sheet trong Microsoft Excel, có thể ______",
    "options": [
      "Đổi màu sheet tab nhưng không được trùng màu nhau",
      "Xoá cùng lúc nhiều sheet miễn chúng gần nhau",
      "Sao chép/di chuyển/đổi tên một sheet",
      "Tạo thêm một Sheet mới với tên trùng với tên Sheet đã có"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 223,
    "num": 223,
    "text": "Trong Microsoft Excel, câu nào sau đây là sai?",
    "options": [
      "Có thể tìm kiếm một giá trị trong trang sheet hiện tại hay trong toàn workbook",
      "Có thể tìm kiếm các dữ liệu phù hợp với cả nội dung và định dạng",
      "Có thể tìm theo hàng trước hay cột trước",
      "Có thể tìm kiếm công thức"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 224,
    "num": 224,
    "text": "Trong Microsoft Excel, giải thích nào sau đây là sai?",
    "options": [
      "#####: không tính được kết quả",
      "#VALUE!: dữ liệu không đúng theo yêu cầu của công thức",
      "#DIV/0!: chia cho giá trị 0",
      "#N/A: không có dữ liệu để tính toán"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 225,
    "num": 225,
    "text": "Trong Microsoft Excel, giải thích nào sau đây là sai?",
    "options": [
      "#DIV/0! là lỗi chia cho số 0",
      "#NAME? là Excel không hiểu các tên tham khảo đến",
      "#REF! là tham khảo đến vùng không hợp lệ",
      "#N/A! Là công thức đưa vào bị lỗi"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 226,
    "num": 226,
    "text": "Giả sử bây giờ đang là 10 giờ 32 phút 00 giây, ngày 31/12/2016, các công thức Microsoft Excel nào sau cho kết quả sai?",
    "options": [
      "=TODAY() có kết quả 31/12/2016",
      "=NOW() có kết quả 31/12/2016 10:32:00",
      "=DATE(TODAY()) có kết quả 31",
      "=MONTH(NOW()) có kết quả là 12"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 227,
    "num": 227,
    "text": "Trong Microsoft Excel, khi sao chép ô A3 đang chứa công thức =$A1 + B$1 đến ô C5, công thức trong ô C5 sẽ là:",
    "options": [
      "=$A3 + D$1",
      "=$B3 + E$1",
      "=$C3 + F$1",
      "=$A3 + D1"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 228,
    "num": 228,
    "text": "Cho một worksheet, kết quả của công thức =VLOOKUP(4, A1:B5, 2, 0) với bảng tìm kiếm phân loại điểm là: (1-Giỏi, 2-Khá, 3-TB Khá, 4-TB, 5-Yếu)",
    "options": [
      "TB",
      "Khá",
      "Yếu",
      "#N/A"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 229,
    "num": 229,
    "text": "Trong Microsoft Excel, kết quả công thức nào sau đây là đúng nhất?",
    "options": [
      "=COUNT(“A”, “B”, 1,2) là 4",
      "=COUNTA(“A”, “B”, 1,2) là 2",
      "=COUNTA(“A”, “B”, 1,2) là 4",
      "=COUNT(“A”, “B”, 1, 2) là 3"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 230,
    "num": 230,
    "text": "Trong Microsoft Excel, để nhập một giá trị dạng ngày (date) vào một ô nào đó ta phải ______",
    "options": [
      "Nhập phù hợp với dạng ngày đã thiết lập trong Control Panel",
      "Nhập theo dạng dd/mm/yyyy",
      "Nhập theo dạng mm/dd/yyyy",
      "Nhập theo dạng yyyy/mm/dd"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 231,
    "num": 231,
    "text": "Công thức MIN(2*4, 24, 6, 9-3) cho kết quả là:",
    "options": [
      "8",
      "6",
      "4",
      "24"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 232,
    "num": 232,
    "text": "Cho biết kết quả công thức sau đây: LEFT (\"DANG THI TIN HOC\", 3)",
    "options": [
      "DAN",
      "THI",
      "HOC",
      "TIN"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 233,
    "num": 233,
    "text": "Cho biết giá trị của công thức sau đây: IF(AND(5>3, 2>=2), 2, 3)",
    "options": [
      "2",
      "3",
      "Công thức có lỗi cú pháp",
      "FALSE"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 234,
    "num": 234,
    "text": "Cho biết kết quả công thức sau đây: RIGHT(\"TIN HOC CAN BAN\", 3)",
    "options": [
      "TIN",
      "CAN",
      "BAN",
      "HOC CAN BAN"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 235,
    "num": 235,
    "text": "Giá trị của công thức MOD(45, 7)",
    "options": [
      "6",
      "0",
      "3",
      "1"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 236,
    "num": 236,
    "text": "Trong Microsoft Excel, câu lệnh =SUM(7, 5, -3, 2, 9, -4) có kết quả là:",
    "options": [
      "15",
      "16",
      "17",
      "18"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 237,
    "num": 237,
    "text": "Trong bảng tính Microsoft Excel, tại ô A2 có sẵn giá trị số 10; tại ô B2 gõ vào công thức =PRODUCT(A2,5) thì nhận được kết quả:",
    "options": [
      "#VALUE!",
      "2",
      "10",
      "50"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 238,
    "num": 238,
    "text": "Trong bảng tính Microsoft Excel, tại ô A2 có sẵn dữ liệu là dãy kí tự \"Tin hoc co ban\", tại ô B2 gõ vào công thức =PROPER(A2) thì nhận được kết quả?",
    "options": [
      "Tin hoc co ban",
      "Tin hoc Co ban",
      "TIN HOC CO BAN",
      "Tin Hoc Co Ban"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 239,
    "num": 239,
    "text": "Giả sử ngày hệ thống của máy tính là: 19/9/2013, khi đó tại ô A2 gõ vào công thức =Today()-1 thì nhận được kết quả là:",
    "options": [
      "18/9/2013",
      "#VALUE!",
      "#NAME!",
      "20/9/2013"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 240,
    "num": 240,
    "text": "Trong bảng tính Microsoft Excel, tại ô A2 có sẵn dữ liệu là dãy kí tự \"Tin hoc co ban\", tại ô B2 gõ vào công thức =LOWER(A2) thì nhận được kết quả?",
    "options": [
      "TIN HOC CO BAN",
      "Tin hoc co ban",
      "tin hoc co ban",
      "Tin Hoc Co Ban"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 241,
    "num": 241,
    "text": "Trong bảng tính Microsoft Excel, hàm nào sau đây cho phép tính tổng các giá trị kiểu số thỏa mãn một điều kiện cho trước?",
    "options": [
      "SUM",
      "COUNTIF",
      "COUNT",
      "SUMIF"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 242,
    "num": 242,
    "text": "Trong Microsoft Excel cú pháp hàm SUMIF nào là đúng?",
    "options": [
      "SumIf(range, criteria, [sum_range])",
      "SumIf(criteria, range, [sum_range])",
      "SumIf(range)",
      "SumIf(range, criteria)"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 243,
    "num": 243,
    "text": "Trong Microsoft Excel, giả sử ô A1 của bảng tính lưu trị ngày 15/10/2018. Kết quả hàm =MONTH(A1) là bao nhiêu?",
    "options": [
      "#VALUE!",
      "15",
      "10",
      "20"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 244,
    "num": 244,
    "text": "Với công thức = MAX(20, MIN(5,100)) cho kết quả là",
    "options": [
      "5",
      "100",
      "20",
      "#N/A"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 245,
    "num": 245,
    "text": "Trong Excel, tại ô A2 có giá trị là số 2018. Tại ô B2 gõ công thức =LEN(A2) thì nhận được kết quả?",
    "options": [
      "#Value!",
      "0",
      "4",
      "2018"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 246,
    "num": 246,
    "text": "Với bảng số liệu trong Microsoft Excel công thức để tính lương tại ô C2 như thế nào với yêu cầu: Lương = HSL * Lương cơ bản và làm tròn chẵn đơn vị nghìn đồng (Mức lương CB tại B4 là 540000):",
    "options": [
      "=ROUND(B2 *B$4, -4)",
      "=ROUND(B2 *B$4, 3)",
      "=ROUND(B2 *B4, -3)",
      "=ROUND(B2 *B$4, -3)"
    ],
    "correctIndex": 3,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 247,
    "num": 247,
    "text": "Trong Microsoft Excel, công thức nào sau đây sẽ cho lỗi #VALUE!?",
    "options": [
      "=MAX(\"A\",13,4)",
      "=COUNTIF(D7:D18,\"A\")",
      "=COUNTA(\"A\",13,4)",
      "=SUM(\"A\",13,4)"
    ],
    "correctIndex": 0,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": true,
    "isConfusing": false
  },
  {
    "id": 248,
    "num": 248,
    "text": "Trong Microsoft Excel, để xóa dữ liệu trong các ô đang chọn thì ta dùng cách nào?",
    "options": [
      "Tại thẻ Home, nhấn nút Delete trong nhóm Cells",
      "Nhấn phải chuột và chọn lệnh Clear contents",
      "Nhấn chuột phải lên vùng đang chọn, chọn lệnh Delete",
      "Nhấn phím BackSpace"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 249,
    "num": 249,
    "text": "Phát biểu nào sau đây là sai?",
    "options": [
      "Trong Microsoft Excel, để lập trình công thức tính toán thì phải bắt buộc nhập dấu = ở đầu",
      "Tất cả các hàm trong Microsoft Excel đều có đối số",
      "Các tham số trong hàm được phân cách nhau bằng dấu phẩy hoặc dấu chấm phẩy tùy theo cách thiết lập",
      "Trong một công thức có thể sử dụng nhiều hàm"
    ],
    "correctIndex": 1,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 250,
    "num": 250,
    "text": "Trong bảng tính Excel, muốn sắp xếp danh sách dữ liệu theo thứ tự tăng (giảm), ta thực hiện:",
    "options": [
      "Tools – Sort",
      "File – Sort",
      "Data – Sort",
      "Format – Sort"
    ],
    "correctIndex": 2,
    "moduleNumber": 4,
    "moduleName": "Modul 4: Sử dụng bảng tính cơ bản (MS Excel)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 251,
    "num": 251,
    "text": "Trong PowerPoint, các hiệu ứng động dạng Entrance(màu xanh lá) là hiệu ứng ______",
    "options": [
      "Xuất hiện",
      "Nhấn mạnh",
      "Biến mất",
      "Di chuyển"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 252,
    "num": 252,
    "text": "Trong PowerPoint, các hiệu ứng động dạng Emphasis(màu vàng) là hiệu ứng ______",
    "options": [
      "Xuất hiện",
      "Nhấn mạnh",
      "Biến mất",
      "Di chuyển"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 253,
    "num": 253,
    "text": "Trong PowerPoint, các hiệu ứng động dạng Exit (màu đỏ) là hiệu ứng ______",
    "options": [
      "Xuất hiện",
      "Nhấn mạnh",
      "Biến mất",
      "Di chuyển"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 254,
    "num": 254,
    "text": "Trong PowerPoint, các hiệu ứng động dạng Motion Path là hiệu ứng ______",
    "options": [
      "Xuất hiện",
      "Nhấn mạnh",
      "Biến mất",
      "Di chuyển"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 255,
    "num": 255,
    "text": "Chức năng nào sau đây không có trong PowerPoint?",
    "options": [
      "Column",
      "Equation",
      "Header & Footer",
      "DropCap"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 256,
    "num": 256,
    "text": "Trong PowerPoint, khẳng định nào sau đây là sai về vùng ghi chú (Note Page) của PowerPoint?",
    "options": [
      "Không được hiển thị khi thuyết trình ở chế độ bình thường",
      "Có thể chèn các đối tượng hình ảnh vào vùng ghi chú",
      "Có thể in vùng ghi chú khi in bài thuyết trình",
      "Người thuyết trình không thể xem nội dung trong vùng ghi chú khi bắt đầu thuyết trình"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 257,
    "num": 257,
    "text": "Trong PowerPoint, thông số nào không có trong chức năng Animation - Timing của PowerPoint?",
    "options": [
      "Time",
      "Repeat",
      "Duration",
      "Delay"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 258,
    "num": 258,
    "text": "Trong PowerPoint, phát biểu nào sau đây là sai ?",
    "options": [
      "SmartArt sẽ tự động tùy chỉnh kích cỡ chữ để vừa với kích thước",
      "Có thể chuyển đổi qua lại giữa SmartArt và Shapes",
      "Tùy chỉnh các đối tượng SmartArt cũng tương tự như Shapes",
      "Có thể thềm/bớt các thành phần trong SmartArt tùy ý"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 259,
    "num": 259,
    "text": "Chức năng Photo Album trong PowerPoint được dùng để",
    "options": [
      "Lưu tập tin trình chiếu dưới dạng danh sách các ảnh để xem",
      "Chèn 1 đối tượng hình ảnh vào Slide",
      "Tạo một danh sách ảnh để sử dụng cho buổi trình chiếu",
      "Đóng gói các slide trình chiếu thành một tập tin ảnh"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 260,
    "num": 260,
    "text": "PowerPoint không hỗ trợ lưu với định dạng nào dưới đây",
    "options": [
      "PDF",
      "PPTX",
      "TXT",
      "WMV"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 261,
    "num": 261,
    "text": "Chức năng nào vừa có trong Word vừa có trong PowerPoint?",
    "options": [
      "Action Buttons",
      "DropCap",
      "Subscript",
      "Column"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 262,
    "num": 262,
    "text": "Trong PowerPoint, chức năng Duration trong hiệu ứng chuyển Slide có ý nghĩa gì?",
    "options": [
      "Thời gian chờ để chạy qua Slide khác",
      "Thời gian để Slide xuất hiện hoàn chỉnh",
      "Thời gian để kết thúc Slide",
      "Thời gian chờ để chạy hiệu ứng cho các đối tượng trong slide"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 263,
    "num": 263,
    "text": "Trong PowerPoint, Effect Option là chức năng dùng để ______",
    "options": [
      "Thêm hiệu ứng động cho đối tượng",
      "Thêm hiệu ứng chuyển Slide",
      "Thêm liên kết cho đối tượng",
      "Thay đổi hướng di chuyển của hiệu ứng"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 264,
    "num": 264,
    "text": "Trong PowerPoint, phím nào được dùng để dừng bài trình chiếu khi đang trình diễn?",
    "options": [
      "End",
      "Page Down",
      "Home",
      "Esc"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 265,
    "num": 265,
    "text": "Trong PowerPoint, để chỉnh chiều của Slide, ta sử dụng chức năng",
    "options": [
      "Home - Arrange",
      "Design - Page Setup",
      "Preview - Compare",
      "View - Slide Master"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 266,
    "num": 266,
    "text": "Trong PowerPoint, Để thiết lập các thông số trang in ta thực hiện",
    "options": [
      "Chọn File -> Page Setup",
      "Chọn File -> Print",
      "Chọn File -> Print Preview",
      "Chọn File -> Properties"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 267,
    "num": 267,
    "text": "Trong PowerPoint, khi chèn một đối tượng âm thanh vào Slide, chức năng nào trong thẻ PlayBack được dùng để chạy bài nhạc qua tất cả các Slide?",
    "options": [
      "Start - On Click",
      "Start - Play across slides",
      "Loop Until Stopped",
      "Enter – Play across slides"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 268,
    "num": 268,
    "text": "Trong Powerpoint, muốn tạo ra 1 slide mới ta dùng lệnh nào trong thẻ Home – Slides không thể sử dụng được?",
    "options": [
      "New slide",
      "Duplicate selected",
      "Slide from text",
      "New Section"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 269,
    "num": 269,
    "text": "Trong Powerpoint, thao tác chọn File – Close dùng để",
    "options": [
      "Đóng tập tin hiện tại",
      "Thoát khỏi Powerpoint",
      "Lưu tập tin hiện tại",
      "Mở một tập tin có sẵn trong máy"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 270,
    "num": 270,
    "text": "Để tô màu nền cho Powerpoint ta thực hiện ______",
    "options": [
      "Insert – Background – Background Style",
      "Home – Background – Background Style",
      "Design – Background – Background Style",
      "View – Background – Background Style"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 271,
    "num": 271,
    "text": "Trong Powerpoint, chế độ view nào giúp ta làm việc tốt nhất với các chuyển cảnh khi thiết kế (Slide transitions)?",
    "options": [
      "Notes Pages",
      "Normal",
      "Reading View",
      "Slide Sorter"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 272,
    "num": 272,
    "text": "Chức năng nào trong nhóm công cụ sau dùng để trình chiếu slide đang thiết kế trong Powerpoint (biểu tượng ly rượu Slide show)",
    "options": [
      "Normal",
      "Slode sorter",
      "Reading view",
      "Slide show (biểu tượng ly)"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 273,
    "num": 273,
    "text": "Một đối tượng Powerpoint có thể có bao nhiêu hiệu ứng?",
    "options": [
      "Chỉ có 1 hiệu ứng",
      "Tối đa 3 hiệu ứng",
      "Tối đa 5 hiệu ứng",
      "Rất nhiều hiệu ứng"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 274,
    "num": 274,
    "text": "Trong PowerPoint, các tính năng nào sau đây là không đúng?",
    "options": [
      "Có thể chụp ảnh màn hình đang làm việc để chèn vào slide",
      "Các thành phần của một đối tượng SmartArt vẫn có thể thể hiện hoạt hình (animation)",
      "Có thể dễ dàng chuyển đổi một SmartArt này thành một dạng SmartArt khác",
      "Khi chèn một đồ thị (Chart) có thể không cần dùng một bảng Excel để chứa dữ liệu"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 275,
    "num": 275,
    "text": "Trong PowerPoint, câu nào sau đây là sai.",
    "options": [
      "Có nhiều dạng slide transition",
      "Một slide chỉ có tối đa một dạng transition",
      "Có thể thiết lập các thông số như thời gian bắt đầu, sự kiện bắt đầu của một slide transition cho một slide",
      "Không thể sắp xếp thứ tự chạy của các slide transition nếu không đổi thứ tự các slide"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": true
  },
  {
    "id": 276,
    "num": 276,
    "text": "Trong PowerPoint, câu nào sau đây là sai?",
    "options": [
      "Có thể tạo các liên kết (hyperlink) đến các slide trong cùng một tập tin",
      "Có thể nén video, audio dùng Compress Media",
      "Có thể lưu một tập tin trình chiếu thành một thiết kế (design theme)",
      "Không thể tạo một dạng layout mới cho một tập tin trình chiếu trong Slide Master"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 277,
    "num": 277,
    "text": "Trong PowerPoint, câu nào sau đây sai?",
    "options": [
      "Có thể chia bài thuyết trình thành nhiều section",
      "Vùng Content có thể chứa một bảng (table)",
      "Khi trình chiếu, phần notes của từng slide được hiện ra trên màn hình trình chiếu",
      "Có thể dùng nhiều layout khác nhau trong bài thuyết trình"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 278,
    "num": 278,
    "text": "Trong PowerPoint, Thành phần nào không thuộc một slide?",
    "options": [
      "Title",
      "Content",
      "Slide Footer Area",
      "Slide Hearder Area"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 279,
    "num": 279,
    "text": "Đâu không phải là cách để trình diễn một bài thuyết trình trong Powerpoint?",
    "options": [
      "Bấm vào nút Slide show ở góc dưới bên phải",
      "Thẻ Slide show – chọn From Beginning",
      "Thẻ Slide show – chọn From Custom Slide show",
      "Thẻ Slide show – chọn Set Up Slide show"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 280,
    "num": 280,
    "text": "Mục đích chính của chế độ xem Slide Sorter trong Powerpoint là gì?",
    "options": [
      "Thiết kế các nội dung trong Slide một cách dễ dàng",
      "Sắp xếp thứ tự các Slide một cách dễ dàng",
      "Xem bài thuyết trình dưới góc nhìn người nói",
      "Xem bài thuyết trình dưới góc nhìn khán giả"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 281,
    "num": 281,
    "text": "Để trình chiếu từ slide 2 đến slide 4 trong một bài thuyết trình trong Powerpoint 2010, cách nào dưới đây là sai?",
    "options": [
      "Ẩn các slide khác trừ slide 2, 3, 4",
      "Sử dụng chức năng Custom show và chọn slide 2, 3, 4",
      "Sử dụng chức năng Set Up Slide Show, chọn From 2 to 4 tại mục show slide trong cửa sổ hiện ra",
      "Đặt màu nền của các slide 2, 3, 4 khác so với các slide còn lại"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 282,
    "num": 282,
    "text": "Trong Powerpoint, chế độ trình chiếu Browsed by an individual (window) trong chức năng Set Up Slide Show tương đương với góc nhìn nào dưới đây ?",
    "options": [
      "Normal",
      "Slide Sorter",
      "Reading View",
      "Slide Master"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 283,
    "num": 283,
    "text": "Đang thiết kế giáo án điện tử, trước khi thoát khỏi PowerPoint nếu người sử dụng chưa lưu lại tập tin thì máy sẽ hiện một thông báo. Để lưu lại tập tin này ta sẽ kích chuột trái vào nút nào trong bảng thông báo này?",
    "options": [
      "Nút Yes",
      "Nút No",
      "Nút Cancel",
      "Nút Save"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 284,
    "num": 284,
    "text": "Trong Powerpoint, Để lưu tập tin với một tên khác ta chọn lệnh nào sau đây",
    "options": [
      "File -> Chọn Open -> Gõ tên tập tin vào phần File Name",
      "File -> Chọn Save as -> Gõ tên tập tin vào phần File Name",
      "File -> Chọn New as-> Gõ tên tập tin vào phần File Name",
      "File -> Chọn Save -> Gõ tên tập tin vào phần File Name"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 285,
    "num": 285,
    "text": "Trong Powerpoint, Vào Transition -> tích vào after -> gõ vào 00:05 giây, bấm Apply to all slide sẽ thực hiện được lệnh trình chiếu:",
    "options": [
      "Chỉ cần kích chuột một lần Slide được trình chiếu 00:05 giây bắt đầu từ Slide hiện hành được trình chiếu",
      "Mỗi Slide được trình chiếu 00:05 giây bắt đầu từ Slide hiện hành được trình chiếu",
      "Các Slide không tự động trình chiếu",
      "Các Slide phải tuần thủ sự theo trình tự là trình chiếu lâu hơn 00:05 giây"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 286,
    "num": 286,
    "text": "Trong Powerpoint, Để in Slide 1, 3, 6, 9 ta chọn File -> Chọn print:",
    "options": [
      "Chọn Current Range -> Gõ vào 1, 3, 6, 9",
      "Chọn Slide-> Gõ vào 1, 3, 6, 9",
      "Chọn All -> Gõ vào 1, 3, 6, 9",
      "Chọn Seletion -> Gõ vào 1, 3, 6, 9"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 287,
    "num": 287,
    "text": "Lệnh từ tổ hợp phím CTRL+N trong chương trình Microsoft Powerpoint nhằm để",
    "options": [
      "Tạo Presentation mới",
      "Không thực hiện được",
      "Mở Presentation đã có",
      "Đóng 1 Presentation"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": true,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 288,
    "num": 288,
    "text": "Trong Powerpoint, phát biểu nào sau đây là sai?",
    "options": [
      "Khi tạo hiệu ứng động cho một khối văn bản ta có thể cho xuất hiện lần lượt từng từ trong khối văn bản khi trình chiếu",
      "Sau khi đã tạo hiệu ứng động cho một đối tượng nào đó ta không thể thay đổi kiểu hiệu ứng cho đối tượng đó",
      "Có thể thực hiện hiệu ứng chuyển trang cho 1 slide bất kỳ trong bài trình diễn",
      "Có thể thực hiện hiệu ứng chuyển trang cho tất cả các slide trong bài trình diễn"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 289,
    "num": 289,
    "text": "Trong Powerpoint, sau khi thiết kế xong bài trình diễn, cách nào sau đây để trình chiếu ngay bài trình diễn đó?",
    "options": [
      "Chọn Slide Show -> Chọn Custom Show",
      "Nhấn phím F5",
      "Chọn View -> Chọn Slide Show",
      "Chọn Slide Show -> Chon View Show"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 290,
    "num": 290,
    "text": "Trong Powerpoint, âm thanh đưa vào bài trình diễn",
    "options": [
      "Thực hiện được chỉ khi tạo hiệu ứng động cho đối tượng trong slide",
      "Thực hiện được chỉ khi tạo hiệu ứng chuyển trang giữa các slide",
      "Thực hiện được cả khi tạo hiệu ứng động và hiệu ứng chuyển trang",
      "Không thực hiện được cả khi tạo hiệu ứng động và hiệu ứng chuyển trang"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 291,
    "num": 291,
    "text": "Trong Powerpoint, sử dụng siêu liên kết (Hyperlink) sẽ cho phép người dùng liên kết đến (trường hợp máy tính đang có kết nối Internet)",
    "options": [
      "Tất cả các tập tin, các slide đã có trong máy và các trang Web",
      "Chỉ các trang Web có trên mạng",
      "Chỉ các slide đã có trong tập tin thuyết trình đang soạn thảo",
      "Chỉ các tập tin có sẵn trong các ổ đĩa của máy tính đang soạn thảo"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 292,
    "num": 292,
    "text": "Trong Powerpoint, sau khi đã chèn một bảng biểu vào slide, muốn chia một ô nào đó thành 2 ô ta:",
    "options": [
      "Các cách nêu trong câu này đều đúng",
      "Chọn ô đó và nhấp chuột trái vào nút lệnh Split Cells trên thanh công cụ Tables and Borders",
      "Kích chuột phải vào ô đó và chọn Split Cells",
      "Chọn ô đó rồi chọn Table -> Split Cells"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 293,
    "num": 293,
    "text": "Trong Powerpoint, cho phép người sử dụng thiết kế một slide chủ chứa các định dạng chung của toàn bộ các slide trong bài trình diễn. Để thực hiện điều này, người dùng phải",
    "options": [
      "Chọn Insert -> Slide Master",
      "Chọn Insert -> Master Slide",
      "Chọn View -> Master Slide",
      "Chọn View -> Slide Master"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 294,
    "num": 294,
    "text": "Trong Powerpoint, khi tạo hiệu ứng động cho 2 đối tượng A và B trong một Slide, người thiết kế đã xác lập thời gian để B tự động xuất hiện sau A là 5 giây. Vậy khi trình chiếu:",
    "options": [
      "Khi A đã xuất hiện, cứ 5 giây sau thì B Xuất hiện 1 lần",
      "Sau khi a xuất hiện nếu người sử dụng nhấp chuột thì B lập tức xuất hiện",
      "B luôn luôn xuất hiện sau A là 5 giây bất chấp người sử dụng có nhấp chuột hay không",
      "Khi A đã xuất hiện nếu người sử dụng nhấp chuột thì 5 giây sau B mới xuất hiện."
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 295,
    "num": 295,
    "text": "Trong Powerpoint, để tạo thêm một Slide giống với Slide đang chọn, ta sử dụng chức năng",
    "options": [
      "Duplicate Slide",
      "New Slide",
      "Delete Slide",
      "Add Section"
    ],
    "correctIndex": 0,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 296,
    "num": 296,
    "text": "Trong Powerpoint, chức năng nào không có khi làm việc với Section?",
    "options": [
      "Rename Section",
      "Duplicate Section",
      "Remove Section",
      "Remove Section & Slides"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 297,
    "num": 297,
    "text": "Trong Powerpoint, nút công cụ nào không có khi trình chiếu?",
    "options": [
      "Pen",
      "Eraser",
      "Ink Color",
      "Border"
    ],
    "correctIndex": 3,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 298,
    "num": 298,
    "text": "Trong Powerpoint, chức năng nào sau đây không có?",
    "options": [
      "SmartArt",
      "ClipArt",
      "Wrap Text",
      "Text Box"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 299,
    "num": 299,
    "text": "Trong Powerpoint, mặc định có bao nhiêu Layout?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  },
  {
    "id": 300,
    "num": 300,
    "text": "Trong PowerPoint, chức năng “Don’t show on title slide” trong Header & footer có tác dụng gì?",
    "options": [
      "Không hiển thị Header & Footer ở Slide đầu tiên",
      "Không hiển thị Header&Footer ở tất cả các Slide có kiểu layout là title Slide",
      "Không hiển thị Header&Footer khi trình chiếu",
      "Không hiển thị Header&Footer khi thiết kế Slide nhưng sẽ hiển thị khi trình chiếu"
    ],
    "correctIndex": 1,
    "moduleNumber": 5,
    "moduleName": "Modul 5: Sử dụng trình chiếu cơ bản (MS PowerPoint)",
    "isShortcut": false,
    "isFormula": false,
    "isConfusing": false
  }
];
