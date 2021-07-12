import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About from "../pages/About";
import TodoIntro from "../pages/TodoIntro";
import Party from "../pages/Party";
import About7 from "../pages/About7";
import Footer from "../pages/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <TodoIntro></TodoIntro>
      <Party></Party>
      <About7></About7>
      <Footer></Footer>
    </>
  );
};

export default Home;
