import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';
import { Event } from '@/utils/interfaces';

interface Props {
  featuredEvents: Event[];
}

export default function HomePage({ featuredEvents }: Props) {
  return (
    <>
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
