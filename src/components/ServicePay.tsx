import React from "react";
import "./ServicePay.css";

const ServicePay: React.FC = () => {
  return (
    <section id="service__pay">
      <form className="service__pay__box">
        <h3 className="service__pay__title">후원인 정보를 입력해주세요</h3>
        <div className="radio__row">
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" />{" "}
            <span>개인</span>
          </div>
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" />{" "}
            <span>법인</span>
          </div>
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" />{" "}
            <span>학교 & 단체</span>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <input type="text" id="name" className="inp" required />
            <label htmlFor="name" className="service__label">
              <i className="fas fa-user"></i> 성명
            </label>
          </div>
          <div className="input__group">
            <input type="text" id="number" className="inp" required />
            <label htmlFor="number" className="service__label">
              <i className="fas fa-phone-alt"></i> 전화번호
            </label>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <input type="email" id="email" className="inp" required />
            <label htmlFor="email" className="service__label">
              <i className="fas fa-envelope"></i> 이메일
            </label>
          </div>
          <div className="input__group">
            <input type="date" id="date" className="inp" required />
            <label htmlFor="date" className="service__date">
              생년월일
            </label>
          </div>
        </div>
        <div className="input__group">
          <textarea id="message" className="inp" required />
          <label htmlFor="message" id="service__label__textarea">
            <i className="fas fa-comments"></i> 후원동기
          </label>
        </div>
        <div className="button__area">
          <div className="button__group">
            <button className="btn__first" type="submit">
              제출하기 <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="button__group">
            <button type="submit" className="btn__first">
              취소하기 <i className="fas fa-window-close"></i>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ServicePay;
