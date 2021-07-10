import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectImg from './SelectImg';
import WithdrawModal from './WithdrawModal';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { Root } from "../Store";
import axios from 'axios';
import SaveModal from './SaveModal';

interface Values {
  email: string;
  password: string;
  name: string;
  mobile: any;
  dateOfBirth: string;
}

interface Props {
  setMypageClick: Function;
  mypageClick: boolean
}

const Mypage = ({ setMypageClick, mypageClick }: Props) => {
  const token:any = useSelector((state: Root) => state.login);
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const [isOauth, setIsOauth] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    name: "",
    mobile: {
      head: "",
      body: "",
      tail: ""
    },
    dateOfBirth: ""
  })
  const [donorInfo, setDonorInfo] = useState<any>([]);
  const [withdrawClick, setWithdrawClick] = useState<boolean>(false);
  const [saveClick, setSaveClick] = useState<boolean>(false);

  const userInfoUpdate = async() => {
    const email = values.email;
    const password = values.password;
    const mobile = `${values.mobile.head}-${values.mobile.body}-${values.mobile.tail}`;
    const dateOfBirth = values.dateOfBirth;
    notify("저장 되었습니다.");
    await axios.put(`${process.env.REACT_APP_API_URL}/update-user`, {
        email: email,
        password: password,
        mobile: mobile,
        dateOfBirth: dateOfBirth,
        url: imgUrl
    })
    .then(() => {
      userInfoHandler();
    })
      
  }

  const saveHandler = () => {
    if(token.OAuth.OAuth) {
      if(!values.email || !values.mobile || !values.dateOfBirth) {
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
        setSaveClick(true);
      }
    } else {
      if(!values.email || !values.password || !values.mobile || !values.dateOfBirth) {
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
        setSaveClick(true);
      }
    }
    
  }

  const userInfoHandler = async() => {
    if(token.OAuth.OAuth) {
      
      await axios.post(`${process.env.REACT_APP_API_URL}/mypage`, {
        email: token.OAuth.email, name:token.OAuth.name
      })
      .then((res) => {
        console.log(res.data.data.donorInfo);
        setIsOauth(true);
        const { email, password, name, mobile, dateOfBirth, url } = res.data.data.userInfo;
        setDonorInfo(res.data.data.donorInfo);
        if(mobile) {
          setValues({...values, email: email, password: password, name: name, mobile: {
            head:mobile.slice(0,3),
            body:mobile.slice(4,8),
            tail:mobile.slice(9)
          }, dateOfBirth: dateOfBirth})
          setImgUrl(url);
        } else {
          setValues({...values, email: email, password: password, name: name, dateOfBirth: dateOfBirth});
          setImgUrl(url);
        }
      })
    } else {
      await axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
        headers: {
        authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((res) => {
        const { email, password, name, mobile, dateOfBirth, url } = res.data.data.userInfo;
        
        setDonorInfo(res.data.data.donorInfo);
        setValues({...values, email: email, password: password, name: name, mobile: {
          head:mobile.slice(0,3),
          body:mobile.slice(4,8),
          tail:mobile.slice(9)
        }, dateOfBirth: dateOfBirth})
        setImgUrl(url);
      })
    }
  }

  useEffect(() => {
    if(token.accessToken) {
      userInfoHandler()
    }
  }, [token])

  return (
    <div className={mypageClick? "show": "hide"}>
      <div className="modal__overlay" onClick={() => {
        setMypageClick(false);
      }}/>

          <div className="modal__content  modal__scroll">
            <h1>Remember</h1>
            <h3>마이페이지</h3>
            <SelectImg setImgUrl={setImgUrl} imgUrl={imgUrl}/>
          <input
            readOnly
            className="modal__signup" 
            placeholder="EMAIL" 
            value={values.email}
            onClick={() => notify("읽기 전용입니다.")}
          />
          <input
            className="modal__signup" 
            placeholder="PASSWORD"
            type="password"
            value={values.password ? values.password : ""}
            onClick={() => {
              if(isOauth) notify("일반회원 전용입니다.")
            }}
            onChange={(e) => {
              if(isOauth) {
                return;
              } else {
                setValues({...values, password:e.target.value})
              }
            }}/>
          <input 
            readOnly
            className="modal__signup" 
            placeholder="NAME"
            value={values.name}
            onClick={() => notify("읽기 전용입니다.")}
            />
          <input 
            className="modal__signup-mobile-head" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.head ? values.mobile.head : ""}
            onChange={(e) => {
              if(e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 4)
              } else {
                setValues({...values, mobile: {
                  head: e.target.value,
                  body: values.mobile.body,
                  tail: values.mobile.tail
                }})
              }
            }}/>-
            <input 
            className="modal__signup-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"

            value={values.mobile.body ? values.mobile.body : ""}
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
            }}/>-
            <input 
            className="modal__signup-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.tail ? values.mobile.tail : ""}
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
            }}/>
          <input 
            className="modal__signup" 
            placeholder="DATE OF BIRTH"
            type="date"
            value={values.dateOfBirth ? values.dateOfBirth : ""}
            onChange={(e) => setValues({...values, dateOfBirth:e.target.value})}
          />
          <div>
          <button className="modal__mypage-btn" onClick={() => {
            setWithdrawClick(true);
          }}>회원탈퇴</button>
          <button className="modal__mypage-btn" onClick={() => {
            saveHandler();
            }}>저장</button>
          </div>
          
          
          <ul>
            <div className="modal__content-table-title">
            
              <h2>
                후원내역 <i className="fas fa-angle-double-down blink"></i>
              </h2>
              {donorInfo.length !== 0 ?
              <button className="table-btn" onClick={() => window.open("https://npg.nicepay.co.kr/issue/CheckCardInfo.do?TID=nictest00m01012107091552004444&svcCd=01&sendMail=1&pass2ndConf=N&cart_type=0")}>영수증</button>
              : ""}
            </div>
            {donorInfo ? donorInfo.map((info:any) => (
              <li key={info.id} className="modal__content-table-list">
                <input readOnly className="table-title" value={info.mainPost_title}></input>
                <input readOnly className="table-amount" value={`${info.donationAmount} 원` }></input>
              </li>
            ))
          : ""}
          </ul>
      <WithdrawModal email={values.email} withdrawClick={withdrawClick} setWithdrawClick={setWithdrawClick}/>
      <SaveModal userInfoUpdate={userInfoUpdate} saveClick={saveClick} setSaveClick={setSaveClick}></SaveModal>
      </div>
    </div>
  )
}

export default Mypage;