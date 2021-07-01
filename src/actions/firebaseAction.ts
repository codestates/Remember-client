import { FirebaseActionType } from "../action-types/firebaseActionTypes";

interface SetAuthAction {
  type: FirebaseActionType.SET_AUTH;
  payload: any;
}

interface GetAuthAction {
  type: FirebaseActionType.GET_AUTH;
}

export type FirebaseAction = SetAuthAction | GetAuthAction;