import { FirebaseActionType } from "../action-types/firebaseActionTypes";

interface SetAuthAction {
  type: FirebaseActionType.SET_AUTH;
  payload: object;
}

interface GetAuthAction {
  type: FirebaseActionType.GET_AUTH;
}

export type FirebaseAction = SetAuthAction | GetAuthAction;