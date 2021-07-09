import {
  QuizState,
  QuizAction,
  QuizActionTypes,
  QuizListState,
} from "../types/Quiz";

interface initialStateI {
  loading: boolean;
  error: null | string;
  quiz?: QuizState;
  quizList?: QuizListState;
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
    case QuizActionTypes.FETCH_QUIZ_LIST:
      return {
        loading: false,
        error: null,
        quizList: action.payload,
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
