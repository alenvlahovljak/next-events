import { useRouter } from 'next/router';
import { getAllEvents } from '@/utils/events';

import { List, Search } from '@/components/events';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

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

export default AllEventsPage;
