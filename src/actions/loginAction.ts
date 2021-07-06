import { ActionType } from "../action-types/loginActionTypes"

interface SetTokenAction {
  type: ActionType.SET_ACCESSTOKEN;
  payload: object;
}

interface GetTokenAction {
  type: ActionType.GET_ACCESSTOKEN;
}

interface Logout {
  type: ActionType.LOGOUT;
}

interface SetOauth {
  type: ActionType.SET_OAUTH;
  payload: object;
}

export type Action = SetTokenAction | GetTokenAction | Logout | SetOauth;