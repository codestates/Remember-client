import { ActionType } from "../action-types/spinnerActionTypes";

interface LoadingStartAction {
  type: ActionType.LOADING_START;
  payload: object;
}

interface LoadingEndAction {
  type: ActionType.LOADING_END;
  payload: object;
}

export type Action = LoadingStartAction | LoadingEndAction;