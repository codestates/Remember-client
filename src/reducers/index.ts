import { combineReducers } from "redux";
import { accidentReducer } from "./accidentReducer";
import loginReducer from "./loginReducer";
import notificationReducer from "./notificationReducer";
import postReducer from "./postReducer";
import spinnerReducer from "./spinnerReducer";
import { quizReducer } from "./quizReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  noti: notificationReducer,
  post: postReducer,
  accident: accidentReducer,
  quiz: quizReducer,
  spinner: spinnerReducer
});

export default rootReducer;
