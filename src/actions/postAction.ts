import { ActionType } from "../action-types/postActionTypes";

interface SetDataAction {
  type: ActionType.SET_DATA;
  payload: object;
}

interface GetDataAction {
  type: ActionType.GET_DATA;
}

export type Action = SetDataAction | GetDataAction;