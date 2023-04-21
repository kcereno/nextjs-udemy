import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '@/store/notification-context';

function NewsletterRegistration() {
  const { showNotification } = useContext(NotificationContext);
  const userEmailInputRef = useRef<HTMLInputElement>(null);

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = userEmailInputRef.current!.value;

    showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending',
    });

    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('handleRegister ~ data:', data);

    if (!response.ok) {
      showNotification({
        title: 'Error!',
        message: data.message || 'Something went wrong!',
        status: 'error',
      });
      return;
    } else {
      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter!',
        status: 'success',
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleRegister}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={userEmailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
