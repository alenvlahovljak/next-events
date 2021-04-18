import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/api/client';
import type { IEvent } from '@/utils/events';

import { List, Search } from '@/components/events';

function AllEventsPage({ events }: { events: IEvent[] }) {
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
      <Search onSearch={findEventsHandler} />
      <List items={events} />
    </>
  );
}

export async function getStaticProps() {
  const rawEvents = await getAllEvents();
  const events = Object.values(rawEvents);

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
