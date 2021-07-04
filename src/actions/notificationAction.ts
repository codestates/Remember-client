import { NotificationActionType } from "../action-types/notificationActionTypes";

interface EnqueueNotification {
  type: NotificationActionType.ENQUEUE_NOTIFICATION
  payload: object
}

interface DequeueNotification {
  type: NotificationActionType.DEQUEUE_NOTIFICATION;
}

export type NotificationAction = EnqueueNotification | DequeueNotification;