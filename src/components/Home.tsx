import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About from "../pages/About";
import TodoIntro from "../pages/TodoIntro";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <TodoIntro></TodoIntro>
    </>
  );
};

export default Home;
