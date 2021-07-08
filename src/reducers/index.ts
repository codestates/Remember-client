import { combineReducers } from "redux";
import { accidentReducer } from "./accidentReducer";
import loginReducer from "./loginReducer";
import notificationReducer from "./notificationReducer";
import postReducer from "./postReducer";
import { quizReducer } from "./quizReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  noti: notificationReducer,
  post: postReducer,
  accident: accidentReducer,
  quiz: quizReducer,
});

export default rootReducer;
