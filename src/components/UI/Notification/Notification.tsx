import { useContext, FC } from 'react';
import NotificationContext from '@/context/notification-context';

import classes from './Notification.module.css';

export interface NotificationProps {
  title: string;
  message: string;
  status: string;
}

const Notification: FC<NotificationProps> = ({ title, message, status }) => {
  const notificationCtx = useContext(NotificationContext);

  let statusClasses = ``;

  if (status === `success`) {
    statusClasses = classes.success;
  }

  if (status === `error`) {
    statusClasses = classes.error;
  }

  if (status === `pending`) {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div
      role="button"
      tabIndex={0}
      className={activeClasses}
      onClick={notificationCtx.hideNotification}
      onKeyDown={notificationCtx.hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
