import React, { useState, useEffect } from "react";
import "./ServicePay.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Iamport from 'react-iamport';
import { Root } from "../Store";
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { useParams } from 'react-router';
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import { getByTitle } from "@testing-library/react";

interface Values {
  mobile: any,
  amount: string | number,
  group: string,
  title: any,
  url: string
}

interface PostDetailParams {
  id: string;
}

const ServicePay: React.FC = () => {
  const params = useParams<PostDetailParams>();
  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchSingleData } = useActionDispatch();
  const token:any = useSelector((state: Root) => state.login);
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [values, setValues] = useState<Values>({
    mobile: {
      head: "",
      body: "",
      tail: ""
    },
    amount: "",
    group: "",
    title: "",
    url: ""
  });

  const getUserInfo = async () => {
    if(!token.OAuth.OAuth) {
      await axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
        headers: {
        authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((res) => {
        const { email, name } = res.data.data.userInfo;
        setName(name);
        setEmail(email);
      })
    } else {
      const { name, email} = token.OAuth;
      setName(name);
      setEmail(email);
    }
  }

  const getTitle = () => {
    fetchSingleData(params.id);
    setValues({...values, title: accidentState.accidentSingle?.data.title})
  }

  const setPaymentInfo = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/payment`, {
      name: name, email: email, amount: values.amount, title: values.title, 
    })
  }

  const sendReceipt = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/mail`, {
      name: name, email: email, amount: values.amount, title: values.title
    })
  }

  useEffect(() => {
    getUserInfo();
    getTitle();
    console.log(accidentState.accidentSingle?.data.title)
    setValues({...values, title: accidentState.accidentSingle?.data.title})
  }, [])

  // useEffect(() => {
  //   setPaymentInfo();
  //   sendReceipt();
  //   notify("후원이 완료되었습니다.")
  // }, [success])

  return (
    <section id="service__pay">
      <button onClick={() => console.log(values.title)}>버튼</button>
      <form className="service__pay__box">
        <h3 className="service__pay__title">후원인 정보를 입력해주세요</h3>
        <div className="radio__row">
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" onClick={() => setValues({...values, group: "개인"})}/>{" "}
            <span>개인</span>
          </div>
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" onClick={() => setValues({...values, group: "법인"})}/>{" "}
            <span>법인</span>
          </div>
          <div className="radio__group">
            <input type="radio" name="check" className="service__pay__radio" onClick={() => setValues({...values, group: "학교단체"})}/>{" "}
            <span>학교 & 단체</span>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <i className="fas fa-user"></i>
            <input readOnly value={name} className="input__group-input"/>
          </div>
          <div className="input__group">
            <i className="fas fa-envelope"></i>
            <input readOnly value={email} className="input__group-input"/>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <div>
            <i className="fas fa-phone-alt"></i>
            </div>
            <input placeholder="010" type="number" value={values.mobile.head} 
            className="input__group-mobile-head"
            onChange={(e) => {
              if(e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 4)
              } 
              else {
              setValues({...values, mobile: {
                head: e.target.value,
                body: values.mobile.body,
                tail: values.mobile.tail
              }})
            }
            }}></input>-
            <input type="number" value={values.mobile.body} className="input__group-mobile-bodytail"
            onChange={(e) => {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else {
              setValues({...values, mobile: {
                head: values.mobile.head,
                body: e.target.value,
                tail: values.mobile.tail
              }})
            }
            }}></input>-
            <input type="number" value={values.mobile.tail} className="input__group-mobile-bodytail"
            onChange={(e) => {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else {
              setValues({...values, mobile: {
                head: values.mobile.head,
                body: values.mobile.body,
                tail: e.target.value
              }})
            }
            }}></input>
          </div>
          <div className="input__group">
            <i className="fas fa-wallet"></i>
            <input type="number" placeholder="후원금액" value={values.amount} className="input__group-input"
            onChange={(e) => setValues({...values, amount: e.target.value})}></input>
          </div>
        </div>
        <div className="button__area">
          <div className="button__group">

            <Iamport
            identificationCode="imp20562153"
            params={{
              pg: 'nicepay',
              pay_method: 'card',
              merchant_uid: 'merchant_' + new Date().getTime(),
              name: values.title,
              amount: values.amount,
              buyer_email: email,
              buyer_name: name,
              buyer_tel: values.mobile.head + values.mobile.body + values.mobile.tail,
              m_redirect_url: `${process.env.IAMPORT_URL}`,
            }}
            onFailed={err => console.log(err)}
            onSuccess={res => {
              console.log(res)
              //setSuccess(true);
              setPaymentInfo();
              sendReceipt();
              notify("후원이 완료되었습니다.")
            }}
            jqueryLoaded={false}
            render={(renderProps) => (
              <button
                type="button"
                className="btn__first"
                onClick={() => {
                  if(!values.mobile || !values.amount) {
                    notify("모든 항목은 필수입니다.")
                  }
                  else if(values.mobile.head.length !== 3 ||
                    values.mobile.body.length !== 4 ||
                    values.mobile.tail.length !== 4) {
                    notify("전화번호 길이는 11자리입니다.")
                  } else {
                    renderProps.onClick()
                  }
                }}
              >
                후원하기 <i className="fas fa-paper-plane"></i>
              </button>
            )}
          />
          </div>
          <div className="button__group">
            <Link to="/accident">
              <button type="submit" className="btn__second">
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
