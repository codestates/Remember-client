import { combineReducers } from "redux";
import { accidentReducer } from "./accidentReducer";
import loginReducer from "./loginReducer";
import notificationReducer from "./notificationReducer";
import postReducer from "./postReducer";
import spinnerReducer from "./spinnerReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  noti: notificationReducer,
  post: postReducer,
  accident: accidentReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
