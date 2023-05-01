import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import { RequestStatus } from '@/models/types';
import { sendContactData } from '@/lib/contact-utils';
import { INotificationData } from '@/models/interfaces';
import Error from 'next/error';
import Notification from '@/ui/notification';
import { request } from 'http';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [requestStatus, setRequestStatus] = useState<RequestStatus | null>();
  const [requestError, setRequestError] = useState<string | null>();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email,
        name,
        message,
      });
      setRequestStatus('success');
    } catch (error: any) {
      setRequestError(error.message as string);
      setRequestStatus('error');
      console.log(error);
    }
  };

  let notificationData: INotificationData = {} as INotificationData;

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'sending message',
      message: 'your message is on its way',
    };
  }

  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success',
      message: 'Message send successfully.',
    };
  }

  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error',
      message: requestError as string,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form
        action=""
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <label htmlFor="email">Your message</label>
        <textarea
          name="message"
          id="message"
          cols={5}
          rows={5}
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
