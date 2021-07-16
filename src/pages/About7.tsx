import React from "react";
import "./About7.css";

const About7: React.FC = () => {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials__service">서비스 후기</div>
        <div className="testimonials__row">
          <div className="testimonial__col">
            <img
              className="testimonial__img"
              src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg"
              alt=""
            />
            <div className="testimonial__text__area">
              <h3 className="testimonial__title">무야호</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <p className="testimonial__text">
                너무 너무 좋았어요 마음이 따뜻해지는 서비스 최고입니다~!
                후원금을 냈는데 바로 후원처 정보도 볼 수 있어서 다른 사이트와
                차별이 되어 좋았습니다.
              </p>
            </div>
          </div>
          <div className="testimonial__col">
            <img
              className="testimonial__img"
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB17FGN0.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=286&y=318"
              alt=""
            />
            <div className="testimonial__text__area">
              <h3 className="testimonial__title ">키아누 리브스</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <p className="testimonial__text">
                안타까운 사건 사고들을 모아 볼 수 있어서 좋았습니다.
                후원자님들의 따듯한 마음이 잘 전달 되었으면 좋겠네요 ^^.
                서비스를 종종 이용하며 잊지 않도록 노력하겠습니다.
              </p>
            </div>
          </div>
          <div className="testimonial__col">
            <img
              className="testimonial__img"
              src="https://newsimg.hankookilbo.com/cms/articlerelease/2018/10/11/201810111638721435_5.jpg"
              alt=""
            />
            <div className="testimonial__text__area">
              <h3 className="testimonial__title">간디 환생</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <p className="testimonial__text">
                요즘 시대에 정말 필요한 서비스 인 것 같습니다. 정기적 후원도
                있었으면 좋을 것 같습니다!!! + 굿즈도 같이 판매하여 기부금으로
                사용해도 좋을 것 같네요 ㅎㅎ
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About7;
