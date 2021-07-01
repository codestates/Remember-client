import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import firebaseReducer from './firebaseReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  firebase: firebaseReducer,  
})

export default rootReducer;
