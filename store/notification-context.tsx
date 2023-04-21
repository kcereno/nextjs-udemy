import {
  NotificationContextInterface,
  NotificationDataInterface,
} from '@/models/interfaces';
import { createContext, useState } from 'react';

const NotificationContext = createContext<NotificationContextInterface>(
  {} as NotificationContextInterface
);

interface Props {
  children: React.ReactNode;
}

export const NotificationContextProvider = ({ children }: Props) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationDataInterface | null>(null);

  const handleShowNotification = (
    notificationData: NotificationDataInterface
  ) => {
    setActiveNotification(notificationData);
  };

  const handleHideNotification = () => {
    setActiveNotification(null);
  };

  const contextValues = {
    notification: null,
    showNotification: handleShowNotification,
    hideNofitfication: handleHideNotification,
  };

  return (
    <NotificationContext.Provider value={contextValues}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
