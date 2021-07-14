import React, { useState, useEffect } from "react";
import "./AccidentListItem.css";
import { AccidentData } from "../types/accident";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import * as postCreators from "../action-creators/postCreators";
import axios from "axios";
import { Root } from "../Store";
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar'

interface AccidentListItemProps {
  data: AccidentData;
  onClick: (data: AccidentData) => void;
  payClick: (data: AccidentData) => void;
}

interface Values {
  name: string;
  url: string;
}

interface Donation {
  percentage1: number;
  percentage2: number;
  totalAmount: number;
}

const AccidentListItem: React.FC<AccidentListItemProps> = ({
  data,
  onClick,
  payClick,
}) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(notificationCreators, dispatch);
  const { setLike } = bindActionCreators(postCreators, dispatch);
  const token: any = useSelector((state: Root) => state.login);
  const post: any = useSelector((state: Root) => state.post);
  const [values, setValues] = useState<Values>({
    name: "",
    url: "",
  });

  const [thumb, setThumb] = useState<number>(0);
  const [likeClick, setLikeClick] = useState<boolean>(false);
  const [donation, setDonation] = useState<Donation>({
    percentage1: 0,
    percentage2: 0,
    totalAmount: 0,
  });

  const setLikeHandler = async () => {
    setLikeClick(!likeClick);
    // if (post.like) {
    //   setThumb(thumb + 1);
    // } else if(!post.like) {
    //   setThumb(thumb - 1);
    // }

    await axios.put(`${process.env.REACT_APP_API_URL}/put-like`, {
      name: values.name,
      title: data.title,
    });
  };

  const userInfoHandler = async () => {
    if (token.OAuth.OAuth) {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/mypage`,
          {
            email: token.OAuth.email,
            name: token.OAuth.name,
            OAuth: token.OAuth.OAuth,
          },
          {
            headers: {
              authorization: `Bearer ${token.accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          const { name, url } = res.data.data.userInfo;
          setValues({ ...values, name: name, url: url });
        });
    } else {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/mypage`, {
          headers: {
            authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          const { name, url } = res.data.data.userInfo;
          setValues({ ...values, name: name, url: url });
        });
    }
  };

  const getLikeHandler = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/post-like`, {
        title: data.title,
      })
      .then((res) => {
        const likeNum = res.data.data.likeTable.length;
        setThumb(likeNum);
      });
  };

  const isLoginHandler = () => {
    if (!token.accessToken) {
      notify("로그인이 필요합니다.");
    } else {
      return true;
    }
  };

  const donationHandler = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/mainpage`, {
        title: data.title,
      })
      .then((res) => {
        const { percentage, totalAmount } = res.data.data;
        if (percentage > 50) {
          setDonation({
            ...values,
            percentage1: 50,
            percentage2: percentage - 50,
            totalAmount: totalAmount,
          });
        } else {
          setDonation({
            ...values,
            percentage1: percentage,
            percentage2: 0,
            totalAmount: totalAmount,
          });
        }
      });
  };

  useEffect(() => {
    if (token.accessToken) {
      userInfoHandler();
    }
    getLikeHandler();
    donationHandler();
  }, []);

  return (
    <div className="accident__detail">

      <div className="click">
        <img src={data.url} alt="" className="accident__img"></img>
        <div className="overlay"></div>
        <div className="acc__btn__group">
          <button className="detail__btn" onClick={() => onClick(data)}>
            자세히보기
          </button>
          <button
            className="detail__btn"
            onClick={() => {
              let result = isLoginHandler();
              if (result) {
                payClick(data);
                //console.log(data)
              }
            }}
          >
            후원하기
          </button>
        </div>
      </div>

      <h2 className="accident__title">{data.title}</h2>
      <ProgressBar>
        <ProgressBar variant="success" now={donation?.percentage1} ></ProgressBar>
        <ProgressBar variant="warning" now={donation?.percentage2}></ProgressBar>
      </ProgressBar>
      <span className="progress__percentage">
        {donation?.percentage1 + donation.percentage2}%{" "}
      </span>
      <span className="progress__amount">{donation?.totalAmount}원</span>
      <Like>
        <span>
          <div
            className={likeClick ? "press" : ""}
            onClick={() => setLikeClick(!likeClick)}
          >
            Remember!
          </div>
          <i
            className={likeClick ? "press" : ""}
            onClick={() => setLikeClick(!likeClick)}
          ></i>
        </span>
      </Like>
    </div>
  );
};

export default AccidentListItem;

const Like = styled.div`
  font-family: "open sans", sans-serif;
  text-align: center;
  i {
    cursor: pointer;
    background: transparent;
    color: #aaa;
    transition: 0.2s;
    position: absolute;
    left: 48%;
  }

  i:hover {
    color: #666;
  }

  i:before {
    font-family: fontawesome;
    content: "\f4d6";
    font-style: normal;
  }

  div {
    visibility: hidden;
    color: transparent;
    transition: 0.6s;
    font-size: 10px;
    font-weight: 400;
  }

  span {
    
  }

  i.press {
    color: #e23b3b;
  }

  div.press {
    font-size: 14px;
    visibility: visible;
    animation: fade 1s;
  }

  @keyframes fade {
    0% {
      color: transparent;
    }
    50% {
      color: #e23b3b;
    }
    100% {
      color: transparent;
    }
  }
`;
