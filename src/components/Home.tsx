import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About1 from "../pages/About1";
import About2 from "../pages/About2";
import About3 from "../pages/About3";
import About4 from "../pages/About4";
import About5 from "../pages/About5";
import About6 from "../pages/About6";
import About8 from "../pages/About8";
import Party from "../pages/Party";
import About7 from "../pages/About7";
import Footer from "../pages/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About1></About1>
      <About2></About2>
      {/* <About></About> */}
      <About3></About3>
      <About4></About4>
      <About5></About5>
      <About6></About6>
      <About7></About7>
      <About8></About8>
      {/* <Party></Party>
      <JoinPage></JoinPage> */}
      <Footer></Footer>
    </>
  );
};

export default Home;
