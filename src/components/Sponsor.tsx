import React from "react";
import "./Sponsor.css";

const Sponsor: React.FC = () => {
  return (
    <section id="sponsor">
      <div className="sponsor__table">
        <table className="sponsor__container">
          <thead className="sponsor__thead">
            <tr className="sponsor__tr">
              <th className="sponsor__top__text">Id</th>
              <th className="sponsor__top__text">Avatar</th>
              <th className="sponsor__top__text">Name</th>
              <th className="sponsor__top__text">Sponsorship money</th>
              <th className="sponsor__top__text">Number of donations</th>
            </tr>
          </thead>
          <tbody className="sponsor__tbody">
            <tr className="sponsor__tr">
              <td className="sponsor__text">01</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="http://img.etoday.co.kr/pto_db/2017/11/20171114092528_1150866_700_526.PNG"
                  alt=""
                />
              </td>
              <td className="sponsor__text">빌게이츠</td>
              <td className="sponsor__text">3,000,000,000 원</td>
              <td className="sponsor__text">125 회</td>
            </tr>
            <tr className="sponsor__tr">
              <td className="sponsor__text">02</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg"
                  alt=""
                />
              </td>
              <td className="sponsor__text">아이유</td>
              <td className="sponsor__text">1,000,000,000원</td>
              <td className="sponsor__text">45 회</td>
            </tr>
            <tr className="sponsor__tr">
              <td className="sponsor__text">03</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="https://blog.kakaocdn.net/dn/S4iZA/btqMaFaS1Sm/3oVebA3gtK7hFRAGJCxRK1/img.png"
                  alt=""
                />
              </td>
              <td className="sponsor__text">스칼렛 요한슨</td>
              <td className="sponsor__text">1,800,000,000 원</td>
              <td className="sponsor__text">30 회</td>
            </tr>
            <tr className="sponsor__tr">
              <td className="sponsor__text">04</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB17FGN0.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=286&y=318"
                  alt=""
                />
              </td>
              <td className="sponsor__text">키아누 리브스</td>
              <td className="sponsor__text">2,500,000,000 원</td>
              <td className="sponsor__text">80 회</td>
            </tr>
            <tr className="sponsor__tr">
              <td className="sponsor__text">05</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F25179A4753E2211B15"
                  alt=""
                />
              </td>
              <td className="sponsor__text">유재석</td>
              <td className="sponsor__text">7,000,000,000 원</td>
              <td className="sponsor__text">25 회</td>
            </tr>
            <tr className="sponsor__tr">
              <td className="sponsor__text">06</td>
              <td className="sponsor__text">
                <img
                  className="avatar"
                  src="https://i1.sndcdn.com/artworks-QT7gfNVs3sjs6JBi-pk9R3w-t500x500.jpg"
                  alt=""
                />
              </td>
              <td className="sponsor__text">에미넴</td>
              <td className="sponsor__text">9,000,000,000 원</td>
              <td className="sponsor__text">10 회</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Sponsor;
