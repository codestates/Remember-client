import React from "react";
import "./Header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Header: React.FC = () => {
  return (
    <>
      <Carousel infiniteLoop>
        <div className="header__image">
          <div className="header__text">
            <h1 className="header__title">기억해 주세요.</h1>
            <h2 className="header__content__text">
              리멤버는 세상에 잊혀져가는<br></br> 안타까운 사건 사고들을 잊지
              않기 위해 시작되었습니다.
            </h2>
          </div>
        </div>
        <div className="header__image2">
          <div className="header__text2">
            <h1 className="header__title">쿠팡 물류센터 화재</h1>
            <h2 className="header__content__text">故 김동식 소방경 순직</h2>
          </div>
        </div>
        <div className="header__image3">
          <div className="header__text3">
            <h1 className="header__title">광주 재개발 지역 건물 붕괴사고</h1>
            <h2 className="header__content__text">승객 9명 사망 8명 중상</h2>
          </div>
        </div>
        <div className="header__image4">
          <div className="header__text4">
            <h1 className="header__title">연평도 포격 도발 사건</h1>
            <h2 className="header__content__text">
              해병대원 2명, 민간인 2명 사망 총 부상자 19명
            </h2>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Header;
