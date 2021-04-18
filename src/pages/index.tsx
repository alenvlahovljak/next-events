import { List } from '@/components/events';

import { getFeaturedEvents, IEvent } from '@/utils/events';

function HomePage({ events }: { events: IEvent[] }) {
  return (
    <div>
      <List items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const rawEvents = await getFeaturedEvents();
  const events = rawEvents.map((e: [id: string, event: IEvent]) => e[1]);

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
