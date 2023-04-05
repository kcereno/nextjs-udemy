import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/ui/Button';
import ErrorAlert from '@/ui/error-alert';
import { getFilteredEvents } from '@/utils/functions';
import { useRouter } from 'next/router';
import React from 'react';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug as string[];

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [filteredYear, filteredMonth] = filterData;

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
    return (
      <>
        <ErrorAlert>
          <p className="text-center py-10">
            Invalid Filter. Please adjust your values!
          </p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents(numYear, numMonth);
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="text-center py-10">
            No events found for the chosen filter!
          </p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
