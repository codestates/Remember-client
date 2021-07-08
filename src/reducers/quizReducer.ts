import { QuizState, QuizAction, QuizActionTypes } from "../types/Quiz";

interface initialStateI {
  loading: boolean;
  error: null | string;
  quiz?: QuizState;
}

const initialState: initialStateI = {
  loading: false,
  error: null,
};

export const quizReducer = (
  state: initialStateI = initialState,
  action: QuizAction
) => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUIZ:
      return {
        loading: true,
        error: null,
      };
    case QuizActionTypes.FETCH_QUIZ_SUCCESS:
      return {
        loading: false,
        error: null,
        quiz: action.payload,
      };
    case QuizActionTypes.FETCH_QUIZ_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
