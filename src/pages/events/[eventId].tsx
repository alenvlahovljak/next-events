import { useRouter } from 'next/router';
import { getEventById } from '@/utils/events';

import { Error } from '@/components/UI';
import { Summary, Logistics, Content } from '@/components/EventDetail';

function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Error>
        <p>No event found!</p>
      </Error>
    );
  }

  return (
    <>
      <Summary title={event.title} />
      <Logistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <Content>
        <p>{event.description}</p>
      </Content>
    </>
  );
}

export default EventDetailPage;
