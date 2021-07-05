import { ActionType } from "../action-types/postActionTypes";
import { Action } from "../actions/postAction";
import { Dispatch } from "redux";

export const setData =
  (data: Array<string>) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_DATA,
      payload: { data: data },
    });
  };

export const getData =
  () => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_DATA,
    });
  };