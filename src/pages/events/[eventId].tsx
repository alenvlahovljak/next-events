import { GetStaticPropsContext } from 'next';
import { getFeaturedEvents, getEventById, IEvent } from '@/utils/events';

import Head from 'next/head';
import { Summary, Logistics, Content } from '@/components/EventDetail';
import { Comments } from '@/components/Input';

function EventDetailPage({ event }: { event: IEvent }) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((e: [id: string, event: IEvent]) => ({
    params: { eventId: e[0] },
  }));

  return {
    paths,
    fallback: `blocking`,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const eventId = ctx.params?.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export default EventDetailPage;
