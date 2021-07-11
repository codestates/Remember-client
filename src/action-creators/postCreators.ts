import { ActionType } from "../action-types/postActionTypes";
import { Action } from "../actions/postAction";
import { Dispatch } from "redux";

export const setLike =
  (like: boolean) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_LIKE,
      payload: { like: like },
    });
  };
