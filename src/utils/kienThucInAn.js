import kham_pha_the_gioi_mau_sac from "./../asset/img/kien-thuc-in-an/kham-pha-the-gioi-mau-sac/kham-pha-the-gioi-mau-sac.jpg";
import in_rieng_in_ghep from "./../asset/img/kien-thuc-in-an/in-rieng-in-ghep/in-rieng-in-ghep.jpeg";
import giay_in from "./../asset/img/kien-thuc-in-an/tong-hop-cac-loai-giay-in/giay-bristol.jpg";
import quan_ly_mau_sac from "./../asset/img/kien-thuc-in-an/quan-ly-mau-sac-trong-in-an/quan-ly-mau-sac.jpg";
import { ThietKetDanhThiepDetail } from "./kienThucInAnDetail/thietKeDanhThiep";
import {
  KhamPhaTheGioiMauSac,
  KhamPhaTheGioiMauSacMucLuc,
} from "./kienThucInAnDetail/khamPhaTheGioiMauSac";
import {
  InRiengVaInGhep,
  InRiengVaInGhepMucLuc,
} from "./kienThucInAnDetail/inRiengVaInGhep";
import {
  TongHopGiayThongDung,
  TongHopGiayThongDungMucLuc,
} from "./kienThucInAnDetail/tongHopGiayThongDung";
import {
  QuanLyMauSac,
  QuanLyMauSacMucLuc,
} from "./kienThucInAnDetail/quanLyMauSac";

export const KienThucInAn = [
  {
    title: "Khám phá Thế Giới Màu Sắc",
    descriptions:
      "Màu sắc là một phần không thể thiếu trong cuộc sống của chúng ta, là ngôn ngữ diệu kỳ của tự nhiên, tô điểm cho thế giới bằng sự sống động và phong phú. Hiểu rõ về lý thuyết màu sắc và vấn đề độ phân giải sẽ mở ra cánh cửa đến với thế giới nghệ thuật đầy sáng tạo, giúp bạn sử dụng màu sắc một cách thông minh và hiệu quả trong mọi lĩnh vực.",
    img: kham_pha_the_gioi_mau_sac,
    content: KhamPhaTheGioiMauSac,
    mucLuc: KhamPhaTheGioiMauSacMucLuc,
    url: "kham-pha-the-gioi-mau-sac",
  },
  {
    title: "In riêng và in ghép là gì?",
    descriptions:
      "Dành cho doanh nghiệp, tổ chức và cá nhân có nhu cầu in ấn các sản phẩm như card visit, name card, tờ rơi, voucher, decal, phiếu quà tặng, catalog và nhiều sản phẩm in ấn khác với số lượng lớn, chất lượng và giá thành luôn là những yếu tố quan trọng. Tuy nhiên, không phải ai cũng có tài chính dồi dào để đầu tư vào một sản phẩm in ấn chất lượng vượt trội.",
    img: in_rieng_in_ghep,
    content: InRiengVaInGhep,
    mucLuc: InRiengVaInGhepMucLuc,
    url: "in-rieng-va-in-ghep-la-gi",
  },
  {
    title: "Tổng hợp các loại giấy thông dụng dùng trong in ấn",
    descriptions:
      "Để có một sản phẩm đẹp thì việc lựa chọn chất liệu giấy là cực quan trọng. Hiện nay trên thị trường có rất nhiều loại giấy. Mỗi loại có đặc điểm, định lượng, khả năng “bám” mực với các ứng dụng khác nhau. Bạn cần hiểu rõ những thông tin cơ bản của tất cả các loại giấy để chọn đúng chất liệu cho nhu cầu sử dụng của mình. Dưới đây là những thông tin tổng hợp giúp bạn có chọn lựa đúng nhất.",
    img: giay_in,
    content: TongHopGiayThongDung,
    mucLuc: TongHopGiayThongDungMucLuc,
    url: "tong-hop-cac-loai-giay-thong-dung-trong-in-an",
  },
  {
    title: "Quản lý màu sắc trong in ấn",
    descriptions:
      "Quản lý màu sắc trong in ấn, công việc chế bản trong in ấn đối mặt với những thách thức đặc biệt, đặc biệt là khi không thể kiểm soát hoàn toàn quá trình quản lý màu từ phía khách hàng. Dù quy trình làm việc của bạn được thiết lập cẩn thận, thỉnh thoảng vẫn có thể bạn gặp khó khăn khi nhận được file in từ khách hàng mà màu sắc trên đó không nhất quán. Trong tình huống này, việc giải quyết vấn đề trở nên cực kỳ quan trọng để đảm bảo sự thành công của dự án và hài lòng của khách hàng.",
    img: quan_ly_mau_sac,
    content: QuanLyMauSac,
    mucLuc: QuanLyMauSacMucLuc,
    url: "quan-ly-mau-sac-trong-in-an",
  },
];
