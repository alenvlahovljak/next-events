import { FC } from 'react';
import { getHumanReadableShortDate } from '@/utils/helper';

import { Button } from '@/components/UI';
import { Title } from './style';

export interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: FC<ResultsTitleProps> = ({ date }) => (
  <Title>
    <h1>Events in {getHumanReadableShortDate(date, `en-US`)}</h1>
    <Button link="/events">Show all events</Button>
  </Title>
);

export default ResultsTitle;
