import { ActionType } from "../action-types/postActionTypes";

interface setLikeAction {
  type: ActionType.SET_LIKE;
  payload: object;
}

export type Action = setLikeAction;