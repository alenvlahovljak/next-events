import { useState, useEffect } from 'react';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getFilteredEvents, IEvent } from '@/utils/events';

import { List, ResultsTitle } from '@/components/events';
import { Button, Error } from '@/components/UI';

function FilteredEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<IEvent[]>([]);

  const filteredData = router.query.slug || [];

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_FIREBASE_URI}/events.json`,
  );

  useEffect(() => {
    if (data) {
      setEvents(Object.values(data));
    }
  }, [data]);

  if (!events) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    Number.isNaN(numYear) ||
    Number.isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
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

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() == numYear && eventDate.getMonth() == numMonth - 1
    );
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

  const resultDate = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={resultDate} />
      <List items={filteredEvents} />
    </>
  );
}

// Non sense to use it now
// make sense if we're looking into headers for example
// export async function getServerSideProps(ctx: GetStaticPropsContext) {
//   const { params } = ctx;
//
//   const filterData = params?.slug || [];
//
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;
//
//   if (
//     Number.isNaN(numYear) ||
//     Number.isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error',
//       // },
//     };
//   }
//
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });
//
//   return {
//     props: {
//       filteredEvents,
//       date: {
//         month: numMonth,
//         year: numYear,
//       },
//     },
//   };
// }

export default FilteredEventsPage;
