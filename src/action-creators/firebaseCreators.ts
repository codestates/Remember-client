import { FirebaseActionType } from "../action-types/firebaseActionTypes";
import { Dispatch } from "redux";
import { FirebaseAction } from "../actions/firebaseAction";

export const setAuth =
  (auth: any) => (dispatch: Dispatch<FirebaseAction>) => {
    dispatch({
      type: FirebaseActionType.SET_AUTH,
      payload: auth,
    });
  };

  export const getAuth =
  () => (dispatch: Dispatch<FirebaseAction>) => {
    dispatch({
      type: FirebaseActionType.GET_AUTH,
    });
  };