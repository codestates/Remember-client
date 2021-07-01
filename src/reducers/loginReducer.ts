import { ActionType } from "../action-types/loginActionTypes";
import { Action } from "../actions/loginAction";

const initialState = {accessToken: ""};

const loginReducer = (
  state: object = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.SET_ACCESSTOKEN:
      return Object.assign({}, state, action.payload);
      // return state + action.payload;
    case ActionType.GET_ACCESSTOKEN:
      return state;
    case ActionType.LOGOUT:
      return {accessToken: ""};
    default:
      return state;
  }
};

export default loginReducer;