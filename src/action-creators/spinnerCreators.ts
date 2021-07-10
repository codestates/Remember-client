import { ActionType } from "../action-types/spinnerActionTypes";
import { Action } from "../actions/spinnerAction";
import { Dispatch } from "redux";

export const loadingStart =
  (loading: boolean) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING_START,
      payload: { loading: loading },
    });
  };

export const loadingEnd =
  (loading: boolean) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING_END,
      payload: { loading: loading },
    });
  };