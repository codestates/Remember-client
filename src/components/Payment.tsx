import React from "react";
import "./Payment.css";

const Payment: React.FC = () => {
  return (
    <section id="payment">
      <div className="payment__container">
        <div className="payment__top">
          <p className="payment__title">후원금액: 30,000,000 원</p>
        </div>
        <div className="payment__box">
          <div className="payment__details">
            <div className="payment__card__field">
              <label className="payment__text">카드 번호</label>
              <input
                type="text"
                className="payment__card__num"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div className="payment__date">
              <label className="payment__text">카드만료일</label>
              <br />
              <input
                type="text"
                className="payment__date__field"
                placeholder="mm"
              />
              <input
                type="text"
                className="payment__date__field"
                placeholder="yyyy"
              />
            </div>
            <div className="payment__cvc__field">
              <label className="payment__text">CVC</label>
              <br />
              <input type="password" className="cvc__field" placeholder="xxx" />
            </div>
            <div className="payment__name__field">
              <label className="payment__text">카드명</label>
              <br></br>
              <input
                type="text"
                className="name__field"
                placeholder="Card name"
              />
              <button type="button" className="payment__btn1">
                결제하기
              </button>
              <button type="button" className="payment__btn2">
                PayPal 체크아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
