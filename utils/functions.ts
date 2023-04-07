import { Event, Product } from '../utils/interfaces';
import fs from 'fs/promises';
import path from 'path';

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

export const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
};
