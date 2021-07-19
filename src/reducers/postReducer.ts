import { ActionType } from "../action-types/postActionTypes";
import { Action } from "../actions/postAction";

const initialState = { like: true};

const postReducer = (
  state: object = initialState, action: Action) => {
    switch(action.type) {
      case ActionType.SET_LIKE:
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
};

export default postReducer;