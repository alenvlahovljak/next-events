import { createContext, useState, useEffect, FC } from 'react';

type CtxState = {
  notification: Record<string, any> | null;
  showNotification: (data: Record<string, any>) => void;
  hideNotification: () => void;
};

const NotificationContext = createContext<CtxState>({
  notification: null,
  showNotification: () => null,
  hideNotification: () => null,
});

export const NotificationContextProvider: FC = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState<Record<
    string,
    any
  > | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (
      activeNotification?.status == `success` ||
      activeNotification?.status == `error`
    ) {
      timer = setTimeout(() => setActiveNotification(null), 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  const showNotificationHandler = (data: Record<string, any>) => {
    setActiveNotification(data);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const ctx = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={ctx}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
