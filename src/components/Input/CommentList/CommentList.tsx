import { FC } from 'react';

import { Container } from './style';

export interface ComponentListProps {
  items: Record<string, string>[];
}

const CommentList: FC<ComponentListProps> = ({ items }) => (
  <Container>
    {items.map(({ _id, text, name }) => (
      <li key={_id}>
        <p>{text}</p>
        <div>
          By <address>{name}</address>
        </div>
      </li>
    ))}
  </Container>
);

export default CommentList;
