import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin-right: 220px;
    cursor: pointer;
  }
  @media {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
type Props = {
  open: boolean;
};

const OpenNav = ({ open }:Props) => {
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  return (
    <div>
      <Ul open={open}>
        <li>게시물</li>
        <li>후원하기</li>
        <li onClick={() => setSignInClick(true)}>로그인</li>
        <li onClick={() => setSignUpClick(true)}>회원가입</li>
      </Ul>

      <div className={signUpClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => setSignUpClick(false)}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <button>SignIn</button>
        </div>
      </div>

      <div className={signInClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => setSignInClick(false)}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <input
          placeholder="NAME"
          ></input>
          <input
          placeholder="DATA OF BIRTH"
          ></input>
          <button>SignUp</button>
        </div>
      </div>

    </div>
  )
}

export default OpenNav;