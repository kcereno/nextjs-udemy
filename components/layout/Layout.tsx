import React, { useContext } from 'react';
import MainHeader from './MainHeader';
import Notification from '@/ui/notification';
import NotificationContext from '@/store/notification-context';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <header>
        <MainHeader />
      </header>
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
