import { NotificationActionType } from "../action-types/notificationActionTypes";
import { Dispatch } from "redux";
import { NotificationAction } from "../actions/notificationAction";

export const enqueueNotification =
(message:string, dismissTime:number, uuid:number):any => (dispatch: Dispatch<NotificationAction>) => {
  dispatch({
    type: NotificationActionType.ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  });
};

export const dequeueNotification =
():any => (dispatch:Dispatch<NotificationAction>) => {
  dispatch({
    type: NotificationActionType.DEQUEUE_NOTIFICATION,
  });
}

export const notify =
  (message: string, dismissTime = 3000) => (dispatch: Dispatch<NotificationAction>) => {
    const uuid = Math.random();
    dispatch(enqueueNotification(message, dismissTime, uuid))
    setTimeout(() => {
      dispatch(dequeueNotification())
    }, dismissTime)
  };