import { getAllEvents } from '@/api/client';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export async function getFeaturedEvents(): Promise<any> {
  return getAllEvents(true).then((events) =>
    Object.entries(events).filter((event) => event[1].isFeatured),
  );
}

export async function getFilteredEvents(dateFilter: Record<string, any>) {
  const events = await getAllEvents();
  const { year, month } = dateFilter;

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}

export function getEventById(id: string | string[] | undefined) {
  return getAllEvents(true).then((events) => events[(id as unknown) as number]);
}
