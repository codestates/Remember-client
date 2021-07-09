import {
  QuizAction,
  QuizActionTypes,
  QuizListState,
  QuizState,
} from "../types/Quiz";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchQuiz = () => async (dispatch: Dispatch<QuizAction>) => {
  try {
    dispatch({ type: QuizActionTypes.FETCH_QUIZ });

    const response = await axios.get<QuizState>(
      `${process.env.REACT_APP_API_URL}/quiz`
    );

    dispatch({
      type: QuizActionTypes.FETCH_QUIZ_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: QuizActionTypes.FETCH_QUIZ_ERROR,
      payload: "에러입니다",
    });
  }
};

export const fetchQuizList = () => async (dispatch: Dispatch<QuizAction>) => {
  try {
    dispatch({ type: QuizActionTypes.FETCH_QUIZ });

    const response = await axios.get<QuizListState>(
      `${process.env.REACT_APP_API_URL}/quiz`
    );

    dispatch({
      type: QuizActionTypes.FETCH_QUIZ_LIST,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: QuizActionTypes.FETCH_QUIZ_ERROR,
      payload: "에러입니다",
    });
  }
};
