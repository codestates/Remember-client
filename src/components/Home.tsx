import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About1 from "../pages/About1";
import About2 from "../pages/About2";
import About8 from "../pages/About8";
import TodoIntro from "../pages/TodoIntro";
import Party from "../pages/Party";
import JoinPage from "../pages/JoinPage";
import Footer from "../pages/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About1></About1>
      <About2></About2>
      <About8></About8>
      <TodoIntro></TodoIntro>
      <Party></Party>
      <JoinPage></JoinPage>
      <Footer></Footer>
    </>
  );
};

export default Home;
