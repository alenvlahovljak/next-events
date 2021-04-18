import { useRouter } from 'next/router';

import { List, ResultsTitle } from '@/components/events';
import { Button, Error } from '@/components/UI';

import { getFilteredEvents } from '@/utils/events';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    Number.isNaN(numYear) ||
    Number.isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <Error>
          <p>Invalid filter. Please adjust your values!</p>
        </Error>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <>
        <Error>
          <p>No events found for the chosen filter!</p>
        </Error>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <List items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
