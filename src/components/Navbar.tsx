import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Hamburger from "../pages/Hamburger";
import Notification from "../components/Notification";

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

function Navbar({auth}:any) {
  return (
    <div>
      <Notification/>
      <div className="header__box">
        <div className="header__title">
          <Link to='/'>Remember</Link>
        </div>
      </div>

      <StyledMenu>
        <Hamburger auth={auth}/>
      </StyledMenu>
    </div>
  );
}

export default Navbar;
