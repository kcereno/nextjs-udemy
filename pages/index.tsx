import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';
import { Event } from '@/utils/interfaces';
import Head from 'next/head';

interface Props {
  featuredEvents: Event[];
}

export default function HomePage({ featuredEvents }: Props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList events={featuredEvents} />
    </>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
};
