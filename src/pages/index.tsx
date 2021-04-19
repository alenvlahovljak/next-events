import { getFeaturedEvents, IEvent } from '@/utils/events';

import Head from 'next/head';
import { List } from '@/components/events';

function HomePage({ events, ids }: { events: IEvent[]; ids: string[] }) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find a lot of events that allow you to evolve..."
        />
      </Head>
      <List items={events} ids={ids} />
    </div>
  );
}

export async function getStaticProps() {
  const rawEvents = await getFeaturedEvents();
  const events = rawEvents.map((e: [id: string, event: IEvent]) => e[1]);
  const ids = rawEvents.map((e: [id: string, event: IEvent]) => e[0]);

  return {
    props: {
      events,
      ids,
    },
    revalidate: 1800,
  };
}

export default HomePage;
