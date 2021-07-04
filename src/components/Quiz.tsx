import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "../data/dummyData";

export type isCorrectQuiz = {
  answerOptions: { [key: string]: string | boolean };
};

const QuizArea: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const selectClick = (isTrue: isCorrectQuiz | boolean) => {
    if (isTrue) {
      setScore(score + 1);
      alert("문제를 맞췄습니다!");
    } else {
      alert("틀렸습니다!");
    }

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
              <button className="quiz__btn">뒤로 가기</button>
              <button className="quiz__btn">퀴즈 다시 풀기</button>
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
                    key={index}
                    className="quiz__btn"
                    onClick={() => selectClick(select.answer)}
                  >
                    {select.selectText}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default QuizArea;