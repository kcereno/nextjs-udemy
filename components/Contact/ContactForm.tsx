import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState();
  console.log('ContactForm ~ status:', status);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('handleSubmit ~ response:', response);

    if (response.status) {
      const { message } = await response.json();
      setStatus(message);
    }
  };

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
      {status === 'Success' && <p>Success</p>}
    </section>
  );
};

export default ContactForm;
