import { ActionType } from "../action-types/postActionTypes";
import { Action } from "../actions/postAction";

const initialState = {data: []};

const postReducer = (
  state: object = initialState, action: Action) => {
    switch(action.type) {
      case ActionType.SET_DATA:
        return Object.assign({}, state, action.payload);
      case ActionType.GET_DATA:
        return state;
      default:
        return state;
    }
};

export default postReducer;