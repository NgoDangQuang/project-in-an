import { AnPhamQuangCao } from "./anPhamQuangCao";
import { DanhThiep } from "./danhThiep";
import { InNhanhGiaCong } from "./inNhanhGiaCong";
import { TemNhanDecal } from "./temNhanDecal";
import { ThiepCuoiDamCuoi } from "./thiepCuoi";
import { ToRoi } from "./toRoi";
import BIB_01 from "./../asset/img/an-pham-quang-cao/BIB_CHAY_BO_01.jpg";
import BIB_02 from "./../asset/img/an-pham-quang-cao/BIB_CHAY_BO_02.jpg";
import epNhu01 from "./../asset/img/in-nhanh-gia-cong/ep-nhu-01.jpg";
import epNhu02 from "./../asset/img/in-nhanh-gia-cong/ep-nhu-02.jpg";
import sticker1 from "./../asset/img/slider/sticker1.jpg";
import sticker2 from "./../asset/img/slider/sticker2.jpg";
import thiepCuoi01 from "./../asset/img/thiep-cuoi/thiep-cuoi-01.jpg";
import thiepCuoi02 from "./../asset/img/thiep-cuoi/thiep-cuoi-02.jpg";
import card01 from "./../asset/img/card/card-01.jpg";
import card02 from "./../asset/img/card/card-02.jpg";
import toRoi01 from "./../asset/img/to-roi/to-roi-01.jpg";
import toRoi02 from "./../asset/img/to-roi/to-roi-02.jpg";

import VongTay01 from "./../asset/img/an-pham-quang-cao/vong_deo_tay_01.jpg";
import VongTay02 from "./../asset/img/an-pham-quang-cao/vong_deo_tay_02.jpg";

import Vong_Tay_Checkin_01 from "./../asset/img/an-pham-quang-cao/vong_tay_checkin_01.jpg";
import Vong_Tay_Checkin_02 from "./../asset/img/an-pham-quang-cao/vong_tay_checkin_02.jpg";

import sticker5 from "./../asset/img/slider/sticker5.jpg";
import sticker6 from "./../asset/img/slider/sticker6.jpg";
import sticker3 from "./../asset/img/slider/sticker3.jpg";
import sticker4 from "./../asset/img/slider/sticker4.jpg";

export const products = {
  anPhamQuangCao: {
    title: "Ấn phẩm quảng cáo",
    data: AnPhamQuangCao,
    img1: BIB_01,
    img2: BIB_02,
    url: "an-pham-quang-cao",
  },
  baoLiXi: {
    title: "Bao Lì Xì",
    data: AnPhamQuangCao,
    img1: BIB_01,
    img2: BIB_02,
    url: "an-pham-quang-cao",
  },
  temNhanDecal: {
    title: "Tem nhãn decal",
    data: TemNhanDecal,
    img1: sticker1,
    img2: sticker2,
    url: "tem-nhan-decal",
  },
  thiepCuoi: {
    title: "Thiệp cưới - Đám cưới",
    data: ThiepCuoiDamCuoi,
    img1: thiepCuoi01,
    img2: thiepCuoi02,
    url: "thiep-cuoi",
  },
  danhThiep: {
    title: "Danh thiếp",
    data: DanhThiep,
    img1: card01,
    img2: card02,
    url: "danh-thiep",
  },
  thiepMoi: {
    title: "Thiệp mời - Thiệp chúc tết",
    data: DanhThiep,
    img1: card01,
    img2: card02,
    url: "thiep-moi",
  },
  brochureCatalogue: {
    title: "Brochure, Catalogue, Kỷ yếu",
    data: ThiepCuoiDamCuoi,
    img1: thiepCuoi01,
    img2: thiepCuoi02,
    url: "catalogue-brochure",
  },
  toRoi: {
    title: "Tờ rơi, tờ gấp",
    data: ToRoi,
    img1: toRoi01,
    img2: toRoi02,
    url: "to-roi",
  },
  hoaDon: {
    title: "Hóa đơn, phiếu thu chi",
    data: TemNhanDecal,
    img1: thiepCuoi01,
    img2: thiepCuoi02,
    url: "hoa-don",
  },
  baoThu: {
    title: "Bao Thu, giấy tiêu đề",
    data: InNhanhGiaCong,
    img1: Vong_Tay_Checkin_02,
    img2: Vong_Tay_Checkin_01,
    url: "bao-thu-giay-tieu-de",
  },
  menu: {
    title: "Menu nhà hàng, quán ăn",
    data: DanhThiep,
    img1: thiepCuoi01,
    img2: thiepCuoi02,
    url: "menu-nha-hang",
  },
  hopGiay: {
    title: "Hộp giấy",
    data: InNhanhGiaCong,
    img1: Vong_Tay_Checkin_01,
    img2: Vong_Tay_Checkin_02,
    url: "hop-giay",
  },
  tuiGiay: {
    title: "Túi giấy",
    data: InNhanhGiaCong,
    img1: sticker3,
    img2: sticker4,
    url: "tui-giay",
  },
  voucher: {
    title: "Voucher, phiếu mua hàng",
    data: InNhanhGiaCong,
    img1: VongTay02,
    img2: VongTay01,
    url: "voucher-phieu-mua-hang",
  },
  tag: {
    title: "Thẻ treo - hang tag",
    data: InNhanhGiaCong,
    img1: sticker6,
    img2: sticker5,
    url: "the-treo-hang-tag",
  },
  book: {
    title: "Sách hướng dẫn sử dụng",
    data: InNhanhGiaCong,
    img1: sticker5,
    img2: sticker6,
    url: "sach-huong-dan-su-dung",
  },
};
