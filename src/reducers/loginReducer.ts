import { ActionType } from "../action-types/loginActionTypes";
import { Action } from "../actions/loginAction";

const initialState = "";

const loginReducer = (
  state: string = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.SET_ACCESSTOKEN:
      return state + action.payload;
    case ActionType.GET_ACCESSTOKEN:
      return state;
    case ActionType.LOGOUT:
      return "";
    default:
      return state;
  }
};

export default loginReducer;