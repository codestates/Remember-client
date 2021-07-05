import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  noti: notificationReducer,  
  post: postReducer
})

export default rootReducer;
