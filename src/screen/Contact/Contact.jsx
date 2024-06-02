import "./../../scss/Contact.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-page">
        <div className="title">LIÊN HỆ VỚI CHÚNG TÔI</div>
        <div className="contact-content">
          <div className="content">
            <div className="name">CÔNG TY CỔ PHẦN IN AN NHÂN</div>
            <div className="content-item">
              Địa chỉ: 958 Nguyễn Kiệm, P3, Gò Vấp, TP.HCM
            </div>
            <div className="content-item">Điện thoại bàn: (028) 3989 4779</div>
            <div className="content-item">Email: annhangovap@gmail.com</div>
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
    </div>
  );
};
