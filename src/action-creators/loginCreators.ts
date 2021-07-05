import { ActionType } from "../action-types/loginActionTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/loginAction";

export const setToken =
  (accessToken: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_ACCESSTOKEN,
      payload: { accessToken: accessToken },
    });
  };

export const getToken =
  () => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ACCESSTOKEN,
    });
  };
export const logout =
  () => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT,
    });
  };