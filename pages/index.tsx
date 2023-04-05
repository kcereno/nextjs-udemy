import EventList from '@/components/events/EventList';
import { DUMMY_EVENTS } from '@/dummy-data';
import { getFeaturedEvents } from '@/utils/functions';
import Link from 'next/link';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents(DUMMY_EVENTS);

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}
