import { useContext, useRef, FC, FormEvent } from 'react';
import NotificationContext from '@/context/notification-context';

import { Container, Control } from './style';

const NewsletterRegistration: FC = () => {
  const notificationCtx = useContext(NotificationContext);

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: `Signing up...`,
      message: `Registering for newsletter`,
      status: `pending`,
    });

    fetch(`/api/newsletter`, {
      method: `POST`,
      body: JSON.stringify({
        email: emailInputRef.current?.value,
      }),
      headers: {
        'Content-Type': `application/json`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        // we're already in the error case
        return res.json().then((data) => {
          throw new Error(data.message || `Something went wrong!`);
        });
      })
      .then(() => {
        notificationCtx.showNotification({
          title: `Success!`,
          message: `Successfully registered from newsletter!`,
          status: `success`,
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: `Error!`,
          message: err.message || `Something went wrong!`,
          status: `error`,
        });
      });
  }

  return (
    <Container>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <Control>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button type="submit">Register</button>
        </Control>
      </form>
    </Container>
  );
};

export default NewsletterRegistration;
