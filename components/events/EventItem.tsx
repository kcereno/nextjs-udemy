/* eslint-disable @next/next/no-img-element */
import { Event } from '@/utils/interfaces';
import React from 'react';
import styles from './EventItem.module.css';
import Button from '@/ui/Button';
import DateIcon from '@/components/icons/DateIcon';
import AddressIcon from '@/components/icons/AddressIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import Image from 'next/image';

const EventItem = ({
  id,
  title,
  description,
  location,
  date,
  image,
  isFeatured,
}: Event) => {
  const humanReableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image
        src={'/' + image}
        alt={title}
        width={250}
        height={160}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
