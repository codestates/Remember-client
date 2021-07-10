import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Hamburger from "../pages/Hamburger";
import Notification from "../components/Notification";
//import logo from '../images/remember.jpeg';
import logo from '../images/Vanilla-1s-286px.gif';

const StyledMenu = styled.nav`
  width: 100%;
  height: 0px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  /* 변경 사항 */
  position: relative;
  z-index: 3;

  .icon {
    padding: 15px 0;
  }
`;

function Navbar({ auth }: any) {
  return (
    <div>
      <Notification />
      <div className="header__box">
        <div className="header__title">
          <Link to="/"><img className="header__title-img" src={logo}></img></Link>
        </div>
      </div>

      <StyledMenu>
        <Hamburger auth={auth} />
      </StyledMenu>
    </div>
  );
}

export default Navbar;
