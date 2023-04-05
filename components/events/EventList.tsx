import { Event } from '@/utils/interfaces';
import EventItem from './EventItem';
import styles from './EventList.module.css';

interface Props {
  events: Event[];
}

const EventList = ({ events }: Props) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          {...event}
        />
      ))}
    </ul>
  );
};

export default EventList;
