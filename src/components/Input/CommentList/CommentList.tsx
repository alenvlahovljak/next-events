import { FC } from 'react';

import { Container } from './style';

const CommentList: FC = () => (
  <Container>
    {/* Render list of comments - fetched from API */}
    <li>
      <p>My comment is amazing!</p>
      <div>
        By <address>Maximilian</address>
      </div>
    </li>
    <li>
      <p>My comment is amazing!</p>
      <div>
        By <address>Maximilian</address>
      </div>
    </li>
  </Container>
);

export default CommentList;
