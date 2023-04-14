import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById, getFeaturedEvents } from '@/helpers/api-util';
import ErrorAlert from '@/ui/error-alert';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { Event } from '@/utils/interfaces';
import Head from 'next/head';

interface Props {
  event: Event;
}

const EventDetailPage = ({ event }: Props) => {
  if (!event) return <div className="">No event found</div>;

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description}
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const eventId = context.params?.eventId;
  const event = await getEventById(eventId as string);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
