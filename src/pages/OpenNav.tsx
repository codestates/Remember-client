import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  div {
    padding: 100px 10px 60px 10px;
    background-color: #d7ccc8;
  }
  li {
    padding: 18px 20px;
    cursor: pointer;
    border-bottom: 1px solid #725b53;
    color: #260e04;
  }
  button {
    padding: 10px;
    width: 100px;
    border-radius: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
  .left {
    background-color: black;
    color: white;
    border: none;
  }
  .right {
    background-color: gray;
    border: none;
    color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media {
    flex-flow: column nowrap;
    background-color: #a69b97;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;

    transition: transform 0.3s ease-in-out;
  }
`;
interface Props {
  open: boolean;
  setOpen:any;
  auth: any;
};

const OpenNav = ({ open, setOpen, auth }:Props) => {
  const history = useHistory();
  const token:any = useSelector((state: Root) => state.login);
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("https://image.flaticon.com/icons/png/512/64/64572.png");
  const [modalOn, setModalOn] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { logout } =bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    console.log(imgUrl);
  }, [imgUrl])

  return (
    <div >
      <Ul open={open}>
        <div>
        {!token.accessToken ?
          <button className="left" onClick={() => {
          if(!modalOn) {
          setSignInClick(true);
          setModalOn(true);
          setOpen(false);
          }
        }}>로그인</button>
        :<button className="left" onClick={() => {
          logout();
          // auth.logout()
          setOpen(false)
          history.push('/')
        }}>로그아웃</button>}
        {!token.accessToken ?
        <button className="right" onClick={() => {
          if(!modalOn) {
          setSignUpClick(true);
          setModalOn(true);
          setOpen(false)
          }
        }}>회원가입</button>
        :<button className="right">
        <Link to="/mypage" onClick={() => setOpen(false)}>내정보</Link>
      </button>}
        </div>
        <li>게시물</li>
        <li>후원하기</li>
      </Ul>

      <SignInModal 
      signInClick={signInClick} 
      setSignInClick={setSignInClick}
      setModalOn={setModalOn}
      setSignUpClick={setSignUpClick}
      setOpen={setOpen}
      auth={auth}
      />
      <SignUpModal 
      signUpClick={signUpClick}
      setSignInClick={setSignInClick}
      setModalOn={setModalOn}
      setSignUpClick={setSignUpClick}
      setOpen={setOpen}
      setImgUrl={setImgUrl}
      imgUrl={imgUrl}
      />
      
    </div>
  )
}

export default OpenNav;