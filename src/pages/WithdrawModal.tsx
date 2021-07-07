import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import * as actionCreators from '../action-creators/loginCreators';
import './Modal.css';

interface Props {
  setWithdrawClick: Function,
  withdrawClick: boolean,
  email: string
}

const WithdrawModal = ({ setWithdrawClick, withdrawClick, email }:Props) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const { logout } =bindActionCreators(
    actionCreators,
    dispatch
  );
  const history = useHistory();
  const [input, setInput] = useState<string>("");
  const [value, setValue] = useState<string>("");
  
  const withdrawHandler = () => {
    if(input !== "회원 탈퇴") {
      notify("정확하게 입력해주세요.")
    } else {
      toMainPage();
      logout();
      setWithdrawClick(false);
      setInput("");
      history.push('/');
      notify("회원탈퇴 되었습니다.")
    }
  }

  const toMainPage = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/withdraw`, {
      email: value
    })
  }

  useEffect(() => {
    setValue(email);
  })

  return (
    <div className={withdrawClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => setWithdrawClick(false)}></div>
        <div className="withdrawmodal__content">
          <h1>회원 탈퇴 하시겠습니까?</h1>
          <h3>탈퇴를 확인하려면 텍스트 입력 필드에 회원 탈퇴를 입력합니다.</h3>
          <div className="withdrawmodal__content-body">
            <input
            className="withdrawmodal__input"
            placeholder="회원 탈퇴"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={withdrawHandler}>확인</button>
          </div>
        </div>
      </div>
  )
}

export default WithdrawModal;
