import React from "react";
import { Link } from "react-router-dom";
import "./About7.css";

const About7: React.FC = () => {
  return (
    <>
      <section id="join__container">
        <h1 className="join__title__big">우리와 함께 참여해주세요!</h1>
        <p className="join__text">
          과거에 발생한 사건들을 기억하고 <br></br>더 이상 피해자들이 생기지
          않도록 의견을 공유해주세요!
        </p>
        <div className="join__row">
          <div className="join__col">
            <img src="images/hush.jpg" alt="" />
            <div className="join__hover">
              <h3 className="join__title">사건 & 사고</h3>
            </div>
            <Link to="/accident">
              <button className="join__button">자세히 보기</button>
            </Link>
          </div>
          <div className="join__col">
            <img src="images/ch.jpg" alt="" />
            <div className="join__hover">
              <h3 className="join__title">후원</h3>
            </div>
            <Link to="/service">
              <button className="join__button">자세히 보기</button>
            </Link>
          </div>
          <div className="join__col">
            <img src="images/joel.jpg" alt="" />
            <div className="join__hover">
              <h3 className="join__title">커뮤니티</h3>
            </div>
            <button className="join__button">자세히 보기</button>
          </div>
        </div>
      </section>
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
              <p className="testimonial__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, rerum nesciunt. Dolorum doloremque voluptatibus ratione
                obcaecati doloribus ex voluptate quia optio placeat rerum?
                Corporis porro amet, ab totam saepe a?
              </p>
              <h3 className="testimonial__title">아이유</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="testimonial__col">
            <img
              className="testimonial__img"
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB17FGN0.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=286&y=318"
              alt=""
            />
            <div className="testimonial__text__area">
              <p className="testimonial__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, rerum nesciunt. Dolorum doloremque voluptatibus ratione
                obcaecati doloribus ex voluptate quia optio placeat rerum?
                Corporis porro amet, ab totam saepe a?
              </p>
              <h3 className="testimonial__title ">키아누 리브스</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About7;
