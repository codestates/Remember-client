// Quiz
export type QuizState = {
  data: QuizData[];
};

export type QuizData = {
  quiz: string;
  detailText: {
    selectText: string;
    answer: boolean;
  }[];
};

export enum QuizActionTypes {
  FETCH_QUIZ = "FETCH_QUIZ",
  FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS",
  FETCH_QUIZ_ERROR = "FETCH_QUIZ_ERROR",
}

interface FetchQuizAction {
  type: QuizActionTypes.FETCH_QUIZ;
}

interface FetchQuizSuccessAction {
  type: QuizActionTypes.FETCH_QUIZ_SUCCESS;
  payload: QuizState;
}

interface FetchQuizErrorAction {
  type: QuizActionTypes.FETCH_QUIZ_ERROR;
  payload: string;
}

export type QuizAction =
  | FetchQuizAction
  | FetchQuizSuccessAction
  | FetchQuizErrorAction;
