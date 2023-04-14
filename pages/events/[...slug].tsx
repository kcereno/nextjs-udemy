import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import { getFilteredEvents } from '@/helpers/api-util';
import Button from '@/ui/Button';
import ErrorAlert from '@/ui/error-alert';

import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Event } from '@/utils/interfaces';

interface Props {
  hasError?: boolean;
  filteredEvents: Event[];
  date: {
    year: number;
    month: number;
  };
}

const FilteredEventsPage = ({
  hasError,
  filteredEvents,
  date: { year, month },
}: Props) => {
  // const filterData = router.query.slug as string[];

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const [filteredYear, filteredMonth] = filterData;

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (hasError)
    return (
      <>
        <ErrorAlert>
          <p className="py-10 text-center">
            Invalid Filter. Please adjust your values!
          </p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  // const filteredEvents = getFilteredEvents(numYear, numMonth);

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p className="py-10 text-center">
            No events found for the chosen filter!
          </p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const [filteredYear, filteredMonth] = params!.slug as string[];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return;
    {
      props: {
        hasError: true;
      }
    }
  }

  const filteredEvents = await getFilteredEvents(numYear, numMonth);

  return {
    props: {
      filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
