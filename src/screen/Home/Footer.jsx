import { Link } from "react-router-dom";
import "./../../scss/Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="infor-groups">
          <div className="infor-item">
            <div className="title company-name">CÔNG TY CỔ PHẦN IN AN NHÂN</div>
            <div className="content">
              Địa chỉ: 958 Nguyễn Kiệm, P. 3, Q. Gò Vấp, Tp. HCM
            </div>
            <div className="content">Email: annhangovap@gmail.com</div>
            <div className="content">
              Điện thoại: ĐT bàn (028) 3989 4779 - di động 089 89 89 443
            </div>
          </div>

          <div className="infor-item">
            <div className="title">THÔNG TIN THAM KHẢO</div>
            <div className="content">
              <Link to="/">Câu hỏi thường gặp</Link>
            </div>
            <div className="content">
              <Link to="/">Hướng dẫn đặt hàng và thanh toán</Link>
            </div>
            <div className="content">
              <Link to="/">Liên hệ với chúng tôi</Link>
            </div>
          </div>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7220655420283!2d106.61360127471171!3d10.832568789319632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be468bfb13d%3A0x4d953231314ffd6e!2zSW4gTmhhbmggRMawxqFuZyBHaWEgUGjDoXQ!5e0!3m2!1svi!2s!4v1715790538067!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            title="in-nhanh-duong-gia-phat"
            referrerpolicy="no-referrer-when-downgrade"
            className="google-iframe"
          />
        </div>
      </div>
    </div>
  );
};
