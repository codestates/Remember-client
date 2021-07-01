import { FirebaseActionType } from "../action-types/firebaseActionTypes";
import { FirebaseAction } from "../actions/firebaseAction";

const initialState = {};

const firebaseReducer = (
  state: object = initialState, action: FirebaseAction) => {
    switch(action.type) {
      case FirebaseActionType.SET_AUTH:
         return Object.assign({}, state, action.payload);
        //return {...state, ...action.payload}
      case FirebaseActionType.GET_AUTH:
        return state;
      default:
        return state;
    }
  }

export default firebaseReducer;