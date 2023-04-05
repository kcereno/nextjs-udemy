import { Event } from '../utils/interfaces';

import { DUMMY_EVENTS } from '../dummy-data';

export function getFeaturedEvents(events: Event[]) {
  return events.filter((event: Event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(year: number, month: number) {
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
