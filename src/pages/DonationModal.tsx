import { useState, useEffect } from "react";
import { Root } from "../Store";
import { useSelector } from "react-redux";
import axios from "axios";

interface Props {
  setDonationClick: Function;
  donationClick: boolean;
}

const DonationModal = ({ setDonationClick, donationClick }: Props) => {
  const [donorInfo, setDonorInfo] = useState<any>([]);
  const token: any = useSelector((state: Root) => state.login);

  const userInfoHandler = async () => {
    if (token.OAuth.OAuth) {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/mypage`, {
          email: token.OAuth.email,
          name: token.OAuth.name,
        })
        .then((res) => {
          setDonorInfo(res.data.data.donorInfo);
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
          setDonorInfo(res.data.data.donorInfo);
        });
    }
  };

  useEffect(() => {
    if (token.accessToken) {
      userInfoHandler();
    }
  }, [token]);

  return (
    <div className={donationClick ? "show" : "hide"}>
      <div
        className="modal__overlay"
        onClick={() => {
          setDonationClick(false);
        }}
      />

      <div className="modal__content">
        <ul>
          <div className="modal__content-table-title">
            <h2>
              후원내역 <i className="fas fa-angle-double-down blink"></i>
            </h2>
            {donorInfo.length !== 0 ? (
              <button
                className="table-btn"
                onClick={() =>
                  window.open(
                    "https://npg.nicepay.co.kr/issue/CheckCardInfo.do?TID=nictest00m01012107091552004444&svcCd=01&sendMail=1&pass2ndConf=N&cart_type=0"
                  )
                }
              >
                영수증
              </button>
            ) : (
              ""
            )}
          </div>
          {donorInfo.length !== 0 ? (
            donorInfo.map((info: any) => (
              <li key={info.id} className="modal__content-table-list">
                <input
                  readOnly
                  className="table-title"
                  value={info.mainPost_title}
                ></input>
                <input
                  readOnly
                  className="table-amount"
                  value={`${info.donationAmount} 원`}
                ></input>
              </li>
            ))
          ) : (
            <div className="modal__content-nothing">후원 내역이 없습니다.</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DonationModal;
