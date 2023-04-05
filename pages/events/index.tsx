import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { getAllEvents } from '@/utils/functions';
import { useRouter } from 'next/router';
import React from 'react';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleFindEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
};

export default AllEventsPage;
