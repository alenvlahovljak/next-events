import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IEvent } from '@/utils/events';

import Head from 'next/head';
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

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  let pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="A list of filtered events" />
    </Head>
  );

  if (!events || Number.isNaN(numMonth) || Number.isNaN(numYear)) {
    return (
      <>
        {pageHead}
        <p className="center">Loading...</p>;
      </>
    );
  }

  pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}`}
      />
    </Head>
  );

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
        {pageHead}
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
        {pageHead}
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
      {pageHead}
      <ResultsTitle date={resultDate} />
      <List items={filteredEvents} ids={Object.keys(data)} />
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
