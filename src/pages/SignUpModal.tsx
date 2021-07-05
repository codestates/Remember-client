import React, { useState } from 'react';
import SelectImg from './SelectImg';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";

interface Props {
  signUpClick: boolean;
  setSignInClick: Function;
  setModalOn: Function;
  setSignUpClick: Function;
  setOpen: Function;
  setImgUrl: Function;
  imgUrl: string;
}

interface Values {
  email: string;
  password: string;
  name: string;
  mobile: string;
}

const SignUpModal = ({ 
  signUpClick, 
  setSignInClick, 
  setModalOn, 
  setSignUpClick, 
  setOpen, 
  setImgUrl, 
  imgUrl 
}:Props) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )

  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    name: "",
    mobile: "",
  })

  const signUpHandler = () => {
    try {
      if(!values.email || !values.password || !values.name || !values.mobile) {
        notify("모든 항목은 필수입니다.")
      } else {
        toMainPage();
        setValues({ email: "", password: "", name: "", mobile: "" })
      }
    } catch (error) {
      
    }
  }

  const toMainPage = ():void => {
    setSignUpClick(false);
    setModalOn(false);
    notify("회원가입 되었습니다.")
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
          placeholder="EMAIL"
          value={values.email}
          onChange={(e) => setValues({...values, email:e.target.value})}
          ></input>
          </div>
          <div>
          <input
          placeholder="PASSWORD"
          value={values.password}
          onChange={(e) => setValues({...values, password:e.target.value})}
          ></input>
          </div>
          <div>
          <input
          placeholder="NAME"
          value={values.name}
          onChange={(e) => setValues({...values, name:e.target.value})}
          ></input>
          </div>
          <div>
          <input
          placeholder="MOBILE"
          value={values.mobile}
          onChange={(e) => setValues({...values, mobile:e.target.value})}
          ></input>
          </div>
          {/* <div>
          <input
          placeholder="DATE OF BIRTH"
          value={values.dataOfBirth}
          onChange={(e) => setValues({...values, dateOfBirth:e.target.value})}
          ></input>
          </div> */}
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
