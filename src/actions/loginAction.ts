import { ActionType } from "../action-types/loginActionTypes"

interface SetTokenAction {
  type: ActionType.SET_ACCESSTOKEN;
  payload: string;
}

interface GetTokenAction {
  type: ActionType.GET_ACCESSTOKEN;
}

interface Logout {
  type: ActionType.LOGOUT;
}

export type Action = SetTokenAction | GetTokenAction | Logout;