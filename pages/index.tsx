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
      <h1>Hello</h1>
    </>
  );
}
