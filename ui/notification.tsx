import ReactDOM from 'react-dom';

import classes from './notification.module.css';
import { RequestStatus } from '@/models/types';

interface Props {
  title: string;
  message: string;
  status: RequestStatus;
}
function Notification({ title, status, message }: Props) {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
