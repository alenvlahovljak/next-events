import events from '@/fixtures/events';

export interface IEvents {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export function getFeaturedEvents() {
  return events.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return events;
}

export function getFilteredEvents(dateFilter: Record<string, any>) {
  const { year, month } = dateFilter;

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}

export function getEventById(id: string | string[] | undefined) {
  return events.find((event) => event.id === id);
}
