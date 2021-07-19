import { NotificationActionType } from "../action-types/notificationActionTypes";
import { NotificationAction } from "../actions/notificationAction";

const initialState = { notifications: []};

const notificationReducer = (
  state: any = initialState, action: NotificationAction) => {
    switch(action.type) {
      case NotificationActionType.ENQUEUE_NOTIFICATION:
        return Object.assign({}, state, {
          notifications: [...state.notifications, action.payload]
        });
      case NotificationActionType.DEQUEUE_NOTIFICATION:
        return Object.assign({}, state, {
          notifications: state.notifications.slice(1)
        });
      default:
        return state;
    }
  }

export default notificationReducer;