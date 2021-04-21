import { useContext, FC } from 'react';
import NotificationContext from '@/context/notification-context';

import { MainHeader, Notification } from '@/components/UI';

const Layout: FC = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);
  const { notification } = notificationCtx;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Layout;
