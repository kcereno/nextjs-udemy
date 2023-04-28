import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = () => {};

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
            />
            <label htmlFor="email">Your Name</label>
            <input
              type="email"
              name="name"
              id="name"
              required
            />
          </div>
        </div>
        <label htmlFor="email">Your message</label>
        <textarea
          name="message"
          id="message"
          cols={5}
          rows={5}
        />
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
