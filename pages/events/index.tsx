import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { getAllEvents } from '@/helpers/api-util';
import { Event } from '@/utils/interfaces';
import Head from 'next/head';

import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  events: Event[];
}

const AllEventsPage = ({ events }: Props) => {
  const router = useRouter();

  const handleFindEvents = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 60,
  };
};

export default AllEventsPage;
