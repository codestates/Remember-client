import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  noti: notificationReducer,  
})

export default rootReducer;
