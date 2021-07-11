import { ActionType } from "../action-types/spinnerActionTypes";
import { Action } from "../actions/spinnerAction";

const initialState = { loading: false };

const spinnerReducer = (
  state: object = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.LOADING_START:
      return Object.assign({}, state, action.payload);
    case ActionType.LOADING_END:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default spinnerReducer;