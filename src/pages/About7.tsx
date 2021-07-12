import React from "react";
import { Link } from "react-router-dom";
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
