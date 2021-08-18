import React, { useState, useEffect } from "react";
import "./AccidentListItem.css";
import { AccidentData } from "../types/accident";
import { useSelector } from "react-redux";
import axios from "axios";
import { Root } from "../Store";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
//
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
  const token: any = useSelector((state: Root) => state.login);
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

  // 사용하는 함수인가??
  const setLikeHandler = async () => {
    setLikeClick(!likeClick);

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

  const donationHandler = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/mainpage`, {
        title: data.title,
      })
      .then((res) => {
        const { percentage, totalAmount } = res.data.data;
        const amount = totalAmount
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        if (percentage > 50) {
          setDonation({
            ...values,
            percentage1: 50,
            percentage2: percentage - 50,
            totalAmount: amount,
          });
        } else {
          setDonation({
            ...values,
            percentage1: percentage,
            percentage2: 0,
            totalAmount: amount,
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
    <div>
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
                payClick(data);
              }}
            >
              후원하기
            </button>
          </div>
        </div>

        <h2 className="accident__title">{data.miniTitle}</h2>
        <p className="accident__orgize">{data.donationUsage}</p>
        <ProgressBar>
          <ProgressBar
            variant="success"
            now={donation?.percentage1}
          ></ProgressBar>
          <ProgressBar
            variant="warning"
            now={donation?.percentage2}
          ></ProgressBar>
        </ProgressBar>
        <span className="progress__percentage">
          {donation?.percentage1 + donation.percentage2}%{" "}
        </span>
        <span className="progress__amount">{donation?.totalAmount}원</span>
      </div>
    </div>
  );
};

export default AccidentListItem;

const Like = styled.div`
  margin-bottom: 5px;
  font-family: "open sans", sans-serif;
  i {
    cursor: pointer;
    background: transparent;
    color: #aaa;
    transition: 0.2s;
    position: relative;
    margin-left: 13px;
    font-size: 20px;
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
    position: relative;
    top: 3%;
    left: -2.5%;
    transition: 0.6s;
    font-size: 14px;
    font-weight: 400;
  }

  i.press {
    color: #e23b3b;
  }

  div.press {
    font-size: 14px;
    visibility: visible;
    animation: fade 1s;
  }

  .thumb {
    font-size: 17px;
    font-weight: 600;
    margin-left: 5px;
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
