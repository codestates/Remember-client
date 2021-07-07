import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "../data/dummyData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";

export type isCorrectQuiz = {
  answerOptions: { [key: string]: string | boolean };
};

const QuizArea: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const quizState = useTypedSelector((state) => state.quiz);
  const { fetchQuiz } = useActionDispatch();

  useEffect(() => {
    fetchQuiz();
  }, []);

  // console.log(JSON.parse(quizState.quiz?.data[0].quiz), "자 보자!!!?");
  console.log(quizState.quiz?.data, "자 보자!!!?");
  // const [quizdmmy, setQuizdmmy] = useState([]);

  // console.log(quizdmmy, "벡엔드 통신 되나?");

  // useEffect(() => {
  //   const quizList = async () => {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/quiz`);
  //     setQuizdmmy(JSON.parse(JSON.parse(response.data.data[0].quiz)));

  //     const resParse = response.data.quiz;
  //     // JSON.parse(resParse);
  //     console.log(resParse, "????");
  //   };
  //   quizList();
  // }, []);

  const selectClick = (isTrue: isCorrectQuiz | boolean) => {
    if (isTrue) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section id="quiz">
      <div className="quiz__container">
        {showScore ? (
          <div className="quiz__score__area">
            <h1 className="quiz__end">참여해주셔서 감사합니다!</h1>
            <p className="quiz__score__result">
              정답 개수: {score} / {questions.length}개 <br></br>점수 :{" "}
              {score * 25} / 100점
            </p>
            <div className="quiz__btn__area">
              <Link to="/">
                <button className="quiz__btn">Home으로 이동</button>
              </Link>
              <a href="/quiz">
                <button className="quiz__btn">다시 풀기</button>
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="quiz__section">
              <div className="quiz__count">
                <span>문제 {currentQuestion + 1} / 4</span>
              </div>
              <div className="quiz__text">
                {questions[currentQuestion].quiz}
              </div>
              <div className="quiz__answer__area">
                {questions[currentQuestion].detailText.map((select, index) => (
                  <button
                    disabled={clicked}
                    key={index}
                    className={`quiz__btn ${
                      clicked && select.answer
                        ? "correct"
                        : clicked && !select.answer
                        ? "false"
                        : ""
                    }`}
                    onClick={() => selectClick(select.answer)}
                  >
                    {select.selectText}
                  </button>
                ))}
              </div>
              <div className="quiz__btn__area__back">
                <button
                  className="quiz__btn__back"
                  onClick={handleNextQuestion}
                  disabled={!clicked}
                >
                  Next
                </button>
                <Link to="/">
                  <button className="quiz__btn__back">나가기</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default QuizArea;
