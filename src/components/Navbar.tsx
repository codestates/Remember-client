import React, { useState } from "react";
import './Navbar.css';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function Navbar() {
  // show={showSignIn} hide={() => setShowSignIn(false)}
  return (
    <header>
      <div className="header__box">
        <div className="header__title">Remember</div>
        <div className="header__list">사건사고</div>
          <div className="header__btn"> <SignUp/> </div>
          <div className="header__btn"> <SignIn/> </div>
      </div>
      
      
    </header>
  )
}

export default Navbar;