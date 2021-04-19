import { useRouter } from 'next/router';
import { getAllEvents } from '@/api/client';
import type { IEvent } from '@/utils/events';

import Head from 'next/head';
import { List, Search } from '@/components/events';

function AllEventsPage({ events, ids }: { events: IEvent[]; ids: string[] }) {
  const router = useRouter();

  async function findEventsHandler(
    year: string | undefined,
    month: string | undefined,
  ) {
    const fullPath = `/events/${year}/${month}`;

    await router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of events that allow you to evolve..."
          // Next.js can find two meta tags
          key="description"
        />
        <meta
          name="description"
          content="Find your event..."
          // Next.js can find two meta tags
          key="description2"
        />
      </Head>
      <Search onSearch={findEventsHandler} />
      <List items={events} ids={ids} />
    </>
  );
}

export async function getStaticProps() {
  const rawEvents = await getAllEvents(true);
  const events = Object.values(rawEvents);
  const ids = Object.keys(rawEvents);

  return {
    props: {
      ids,
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
