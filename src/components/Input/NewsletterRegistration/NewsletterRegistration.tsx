import { useRef, FC, FormEvent } from 'react';

import { Container, Control } from './style';

const NewsletterRegistration: FC = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch(`/api/newsletter`, {
      method: `POST`,
      body: JSON.stringify({
        email: emailInputRef.current?.value,
      }),
      headers: {
        'Content-Type': `application/json`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(`Response`, data));

    // fetch user Input (state or refs)
    // optional: validate Input
    // send valid data to API
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
