import { FC } from 'react';

import { Section, Title } from './style';

export interface EventSummaryProps {
  title: string;
}

const Summary: FC<EventSummaryProps> = ({ title }) => (
  <Section>
    <Title>{title}</Title>
  </Section>
);

export default Summary;
