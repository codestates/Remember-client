import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About from "../pages/About";
import TodoIntro from "../pages/TodoIntro";
import Party from "../pages/Party";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <TodoIntro></TodoIntro>
      <Party></Party>
    </>
  );
};

export default Home;
