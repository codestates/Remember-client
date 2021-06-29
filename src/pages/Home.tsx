import React from "react";
import "./Home.css";
import Header from "../pages/Header";
import About from "../pages/About";
import TodoIntro from "../pages/TodoIntro";
// import JoinPage from "../pages/JoinPage";
import Party from "../pages/Party";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <TodoIntro></TodoIntro>
      <Party></Party>
      {/* <JoinPage></JoinPage> */}
    </>
  );
};

export default Home;
