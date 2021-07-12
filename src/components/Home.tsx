import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About from "../pages/About";
import About3 from "../pages/About3";
import About4 from "../pages/About4";
import About5 from "../pages/About5";
import About6 from "../pages/About6";
import Party from "../pages/Party";
import JoinPage from "../pages/JoinPage";
import Footer from "../pages/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      {/* <About></About> */}
      <About3></About3>
      <About4></About4>
      <About5></About5>
      <About6></About6>
      {/* <Party></Party>
      <JoinPage></JoinPage> */}
      <Footer></Footer>
    </>
  );
};

export default Home;
