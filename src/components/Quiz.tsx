import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "../data/dummyData";
import { useEffect } from "react";
import axios from "axios";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";

export type isCorrectQuiz = {
  answerOptions: { [key: string]: string | boolean };
};

interface Props {
  setQuizClick: Function;
  quizClick: boolean;
}

const QuizArea = ({ setQuizClick, quizClick}: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const quizState = useTypedSelector((state) => state.quiz);
  const { fetchQuiz } = useActionDispatch();
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )


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
    <section className={quizClick? "show__quiz": "hide"}>
      <div className="modal__overlay" onClick={() => setQuizClick(false)}></div>
      <div>
        {showScore ? (
          <div className="quizmodal__content">
            <h1 className="quiz__end">참여해주셔서 감사합니다!</h1>
            <p className="quiz__score__result">
              <span className="quiz__black">정답 개수: </span>{score} / {questions.length}개
            </p>
            <p className="quiz__score__result">
            <span className="quiz__black">점수 : </span>
              {score * 25} / 100점
            </p>
            <div>
              {/* <button className="quiz__btn__back">Home으로 이동</button>
              <button className="quiz__btn__back">다시 풀기</button> */}
            </div>
          </div>
        ) : (
          <>
            <div className="quizmodal__content">
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
                        : ""
                    }`}
                    onClick={() => selectClick(select.answer)}
                  >
                    {select.selectText}
                  </button>
                ))}
              </div>
              <div>
                <button
                  className="quiz__btn__back"
                  onClick={handleNextQuestion}
                  disabled={!clicked}
                >
                  Next
                </button>
              </div>
            </div>
          </>
         )}
      </div>
    </section>
  );
};

export default QuizArea;
