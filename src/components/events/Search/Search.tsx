import { useRef, FC, FormEvent } from 'react';
import { getYears, getMonths } from '@/utils/helper';

import { Button } from '@/components/UI';
import { Form, Controls, Control } from './style';

export interface SearchProps {
  onSearch: (
    year: string | undefined,
    month: string | undefined,
  ) => Promise<void>;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement | null>(null);
  const monthInputRef = useRef<HTMLSelectElement | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;

    await onSearch(selectedYear, selectedMonth);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Controls>
        <Control>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {getYears(2021, 2022).map((year) => (
              <option key={Math.random()} value={year}>
                {year}
              </option>
            ))}
          </select>
        </Control>
        <Control>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {getMonths().map(({ id, month }) => (
              <option key={id} value={id}>
                {month}
              </option>
            ))}
          </select>
        </Control>
      </Controls>
      <Button>Find Events</Button>
    </Form>
  );
};

export default Search;
