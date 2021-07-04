import { useSelector } from 'react-redux';
import React from 'react';
import { Root } from "../Store";
import Toast from '../pages/Toast';
import './Notification.css'

const Notification = () => {
  const state = useSelector((state:Root) => state.noti);

  return (
    <div className="notification__container">
      {state.notifications.map((n:any) =>
        <Toast key={n.uuid} text={n.message} dismissTime={n.dismissTime} />
      )}
    </div>
  )
}

export default Notification
