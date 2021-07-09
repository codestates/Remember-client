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

export type QuizListState = {
  data: QuizList[];
};

export type QuizList = {
  id: number;
  quiz: string;
  correct: string;
  wrong: string;
  boolean: boolean;
};

export enum QuizActionTypes {
  FETCH_QUIZ = "FETCH_QUIZ",
  FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS",
  FETCH_QUIZ_LIST = "FETCH_QUIZ_LIST",
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

interface FetchQuizListAction {
  type: QuizActionTypes.FETCH_QUIZ_LIST;
  payload: QuizListState;
}

export type QuizAction =
  | FetchQuizAction
  | FetchQuizSuccessAction
  | FetchQuizErrorAction
  | FetchQuizListAction;
