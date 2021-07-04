import React from 'react';
import SelectImg from './SelectImg';

interface Props {
  signUpClick: boolean;
  setSignInClick: Function;
  setModalOn: Function;
  setSignUpClick: Function;
  setOpen: Function;
  setImgUrl: Function;
  imgUrl: string;
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
          ></input>
          </div>
          <div>
          <input
          placeholder="PASSWORD"
          ></input>
          </div>
          <div>
          <input
          placeholder="NAME"
          ></input>
          </div>
          <div>
          <input
          placeholder="MOBILE"
          ></input>
          </div>
          {/* <div>
          <input
          placeholder="DATE OF BIRTH"
          ></input>
          </div> */}
          <button>회원가입</button>
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
