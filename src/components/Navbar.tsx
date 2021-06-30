import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Hamburger from "../pages/Hamburger";

const StyledMenu = styled.nav`
  width: 100%;
  height: 0px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .icon {
    padding: 15px 0;
  }
`;

function Navbar() {
  return (
    <div>
      <div>
        <div className="header__box">
          <div className="header__title">
            <Link to='/'>Remember</Link>
          </div>
          {/* <div className="header__btn"><SignUp/></div>
          <div className="header__btn"><SignIn/></div> */}
        </div>

        <StyledMenu>
          <Hamburger />
        </StyledMenu>
      </div>

      <StyledMenu>
        <Hamburger />
      </StyledMenu>
    </div>
  );
}

export default Navbar;
