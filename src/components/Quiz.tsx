import { useState } from "react";
import "./Quiz.css";
import { questions } from "../data/dummyData";

export type isCorrectQuiz = {
  answerOptions: { [key: string]: string | boolean };
};

interface Props {
  setQuizClick: Function;
  quizClick: boolean;
}

const QuizArea = ({ setQuizClick, quizClick }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

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
    <div className={quizClick ? "show__quiz" : "hide"}>
      <div
        className="quizmodal__overlay"
        onClick={() => setQuizClick(false)}
      ></div>
      {showScore ? (
        <div className="quizmodal__content">
          <h1 className="quiz__end">참여해주셔서 감사합니다!</h1>
          <p className="quiz__score__result">
            <span className="quiz__black">정답 개수 : </span>
            {score} / {questions.length}개
          </p>
          <p className="quiz__score__result">
            <span className="quiz__black">점수 : </span>
            {score * 20} / 100점
          </p>
        </div>
      ) : (
        <>
          <div className="quizmodal__content">
            <div className="quiz__count">
              <span>
                문제 {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="quiz__text">{questions[currentQuestion].quiz}</div>
            <div className="quiz__answer__area">
              {questions[currentQuestion].detailText.map((select, index) => (
                <button
                  disabled={clicked}
                  key={index}
                  className={`quiz__btn ${
                    clicked && select.answer ? " correct" : ""
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
  );
};

export default QuizArea;
