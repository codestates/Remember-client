import React, { useState } from 'react';
import SelectImg from './SelectImg';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import axios from 'axios';
import './Modal.css';

interface Props {
  signUpClick: boolean;
  setSignInClick: Function;
  setModalOn: Function;
  setSignUpClick: Function;
  setOpen: Function;
}

interface Values {
  email: string;
  password: string;
  name: string;
  mobile: any;
  dateOfBirth: string;
  cert: string;
}

const SignUpModal = ({ 
  signUpClick, 
  setSignInClick, 
  setModalOn, 
  setSignUpClick, 
  setOpen,
}:Props) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const [certClick, setCertClick] = useState<boolean>(false);
  const [certNum, setCertNum] = useState<string>("&#$@%@FSdsf");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("https://image.flaticon.com/icons/png/512/64/64572.png");
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    name: "",
    mobile: {
      head: "",
      body: "",
      tail: ""
    },
    dateOfBirth: "",
    cert: ""
  })

  const signUpHandler = () => {
    try {
      if( !values.email || !values.password || !values.name || !values.mobile || !values.dateOfBirth ) {
        notify("모든 항목은 필수입니다.")
      } 
      else if(
        values.mobile.head.length !== 3 ||
        values.mobile.body.length !== 4 ||
        values.mobile.tail.length !== 4
      ) {
        notify("전화번호 길이는 11자리입니다.")
      }
      else if(!values.email.includes("@") || !values.email.includes(".") || values.email[values.email.length -1] === ".") {
        notify("올바르지 않은 이메일 형식입니다.")
      }
      
      else {
        toMainPage();
        setValues({ email: "", password: "", name: "", mobile: {head: "", body: "", tail: ""}, dateOfBirth: "", cert: "" })
      }
    } catch (error) {
      
    }
  }

  const toMainPage = async() => {
    await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      email: values.email,
      password: values.password,
      name: values.name,
      mobile: `${values.mobile.head}-${values.mobile.body}-${values.mobile.tail}`,
      dateOfBirth: values.dateOfBirth,
      url: imgUrl
    })
    .then(() => {
      setSignUpClick(false);
      setModalOn(false);
      notify("회원가입 되었습니다.")
    })
  }

  const sendMailHandler = async () => {
    if( !values.email ) {
      notify("이메일을 입력해주세요.")
    } 
    else if(!values.email.includes("@") || !values.email.includes(".") || values.email[values.email.length -1] === ".") {
      notify("올바르지 않은 이메일 형식입니다.")
    } else {
      notify("인증 메일이 전송되었습니다.")
      setCertClick(!certClick);
      await axios.post(`${process.env.REACT_APP_API_URL}/mail`, {
        mail: values.email
      })
      .then((res) => {
        const num = res.data.data
        console.log(num)
        setCertNum(`${num}`);
      })
    }
  }

  const checkNumHandler = () => {
    if(values.cert === certNum) {
      setIsValid(true);
      notify("인증되었습니다.")
    } else {
      notify("올바르지 않은 인증번호입니다.")
    }
  }

  return (
    <div className={signUpClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignUpClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
          <h1>Remember</h1>
          <h3>회원가입</h3>
          <SelectImg setImgUrl={setImgUrl} imgUrl={imgUrl}/>
          <div>
          <input
          className="modal__signup"
          placeholder="EMAIL"
          value={values.email}
          onChange={(e) => {
            if(!certClick) {
              setValues({...values, email:e.target.value});
            } else {
              return;
            }
          }}
          ></input>
          </div>
          <div>
          <input
          className="modal__signup-cert"
          placeholder="인증번호"
          value={values.cert}
          onChange={(e) => {
            if(isValid) {
              return;
            } else {
              setValues({...values, cert:e.target.value})
            }
          }}
          ></input>
          <button 
          className={certClick ? "modal__signup-cert-btn hide" : "modal__signup-cert-btn"}
          onClick={() => {
            sendMailHandler();
          }}
          >전송</button>
          <button 
          className={certClick ? "modal__signup-cert-btn" : "modal__signup-cert-btn hide"}
          onClick={() => {
            checkNumHandler();
          }}
          >확인</button>
          </div>
          
          <div>
          <input
          className="modal__signup"
          placeholder="PASSWORD"
          type="password"
          value={values.password}
          onChange={(e) => {
            if(isValid) {
              setValues({...values, password:e.target.value})
            } else {
              setValues({...values, password: ""})
            }
          }}
          ></input>
          </div>
          
          <div>
          <input
          className="modal__signup"
          placeholder="NAME"
          value={values.name}
          onChange={(e) => {
            if(isValid) {
              setValues({...values, name:e.target.value})
            } else {
              return;
            }
          }}
          ></input>
          </div>
           
          <div className="mobile-font">
          <input
          className="modal__signup-mobile-head"
          placeholder="010"
          type="number"
          value={values.mobile.head}
          onChange={(e) => {
            if(isValid) {
              if(e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 4)
                console.log(values.mobile.head)
              } else {
                setValues({...values, mobile: {
                  head: e.target.value,
                  body: values.mobile.body,
                  tail: values.mobile.tail
                }})
              }
            } else {
              return;
            }
          }}></input>-
          <input
          className="modal__signup-mobile-bodytail"
          type="number"
          value={values.mobile.body}
          onChange={(e) => {
            if(isValid) {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else { 
                setValues({...values, mobile: {
                  head: values.mobile.head,
                  body: e.target.value,
                  tail: values.mobile.tail
                }})
              }
            } else {
              return;
            }
          }}></input>-
          <input
          className="modal__signup-mobile-bodytail"
          type="number"
          value={values.mobile.tail}
          onChange={(e) => {
            if(isValid) {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else {
                setValues({...values, mobile: {
                  head: values.mobile.head,
                  body: values.mobile.body,
                  tail: e.target.value
                }})
              }
            } else {
              return;
            }
          }}></input>
          </div>
          
          <div>
          <input
          className="modal__signup"
          placeholder="DATE OF BIRTH"
          type="date"
          value={values.dateOfBirth}
          onChange={(e) => {
            if(isValid) {
              setValues({...values, dateOfBirth:e.target.value})
            } else {
              return;
            }
          }}
          ></input>
          </div> 
          
          <button onClick={signUpHandler}>회원가입</button> 
          <div className="modal__content-switch">이미 가입하셨나요?
          <span onClick={() => {
            setSignUpClick(false);
            setModalOn(false);
            setSignInClick(true);
            setModalOn(true);
            setOpen(false);
          }}>로그인</span>
          </div>
        </div>
      </div>
  )
}

export default SignUpModal
