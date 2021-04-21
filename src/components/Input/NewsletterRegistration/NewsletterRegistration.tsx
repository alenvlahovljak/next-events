import { FC } from 'react';

import { Container, Control } from './style';

const NewsletterRegistration: FC = () => {
  function registrationHandler(event: any) {
    event.preventDefault();

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
