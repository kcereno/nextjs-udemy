import {
  NotificationContextInterface,
  NotificationDataInterface,
} from '@/models/interfaces';
import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext<NotificationContextInterface>(
  {} as NotificationContextInterface
);

interface Props {
  children: React.ReactNode;
}

export const NotificationContextProvider = ({ children }: Props) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationDataInterface | null>(null);

  useEffect(() => {
    if (
      (activeNotification && activeNotification.status === 'success') ||
      activeNotification?.status === 'error'
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const handleShowNotification = (
    notificationData: NotificationDataInterface
  ) => {
    setActiveNotification(notificationData);
  };

  const handleHideNotification = () => {
    setActiveNotification(null);
  };

  const contextValues = {
    notification: activeNotification,
    showNotification: handleShowNotification,
    hideNotification: handleHideNotification,
  };

  return (
    <NotificationContext.Provider value={contextValues}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
