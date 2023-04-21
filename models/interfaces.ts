export interface Comment {
  email: string;
  name: string;
  text: string;
  eventId: string;
}

export interface NotificationDataInterface {
  title: string;
  message: string;
  status: string;
}

export interface NotificationContextInterface {
  notification: NotificationDataInterface | null;
  showNotification: (notificationData: NotificationDataInterface) => void;
  hideNofitfication: () => void;
}
