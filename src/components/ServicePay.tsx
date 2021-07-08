import React, { useState, useEffect } from "react";
import "./ServicePay.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Iamport from "./Iamport";

const ServicePay: React.FC = () => {
  const [values, setValues] = useState<any>({
    next_redirect_pc_url: "",
    tid: "",
    params: {
      
    }
  });

  // const getUrl = async () => {
  //   await axios.post(`/v1/payment/ready`, {
  //     cid: "TC0ONETIME",
  //     partner_order_id: "1001",
  //     partner_user_id: "test@test.com",
  //     item_name: "초코파이",
  //     quantity: 1,
  //     total_amount: 2200,
  //     vat_amount: 200,
  //     tax_free_amount: 0,
  //     approval_url: "http://localhost:3000",
  //     fail_url: "http://localhost:3000",
  //     cancel_url: "http://localhost:3000",
  //   },{
  //     headers: {
  //       Authorization: "KakaoAK 6cb58d0fb1af8bd7b2188f39953d5a68",
  //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //     }
  //   })
  //   .then((res) => {
  //     const { data: { next_redirect_pc_url, tid } } = res;
  //     console.log(next_redirect_pc_url);
  //     console.log(tid);
  //     setValues({...values, next_redirect_pc_url: next_redirect_pc_url, tid: tid });
  //   })
  // }

  // useEffect(() => {
  //   getUrl();
  // }, [])


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
            <input type="text" id="name" className="inp" />
            <label htmlFor="name" className="service__label">
              <i className="fas fa-user"></i> 성명
            </label>
          </div>
          <div className="input__group">
            <input type="text" id="number" className="inp" />
            <label htmlFor="number" className="service__label">
              <i className="fas fa-phone-alt"></i> 전화번호
            </label>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <input type="email" id="email" className="inp" />
            <label htmlFor="email" className="service__label">
              <i className="fas fa-envelope"></i> 이메일
            </label>
          </div>
          <div className="input__group">
            <input type="date" id="date" className="inp" />
            <label htmlFor="date" className="service__date">
              생년월일
            </label>
          </div>
        </div>
        <div className="input__group">
          <textarea id="message" className="inp" />
          <label htmlFor="message" id="service__label__textarea">
            <i className="fas fa-comments"></i> 후원동기
          </label>
        </div>
        <div className="button__area">
          <div className="button__group">
            {/* <a href={values.next_redirect_pc_url}>{values.next_redirect_pc_url}</a> */}
            <Iamport></Iamport>
            <button className="btn__first" type="submit">
              결제하기 <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="button__group">
            <Link to="/">
              <button type="submit" className="btn__first">
                취소하기 <i className="fas fa-window-close"></i>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ServicePay;
