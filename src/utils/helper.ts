import { IEvent } from '@/utils/events';

export async function transformFirebaseData(
  noTransform: boolean,
  data: any,
): Promise<IEvent[]> {
  const jsonData = await data.json();
  return noTransform ? jsonData : Object.values(jsonData);
}

export function getHumanReadableDate(date: string, locale: string): string {
  return new Date(date).toLocaleDateString(locale, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  });
}

export function getHumanReadableShortDate(
  date: Date | string,
  locale: string,
): string {
  return new Date(date).toLocaleDateString(locale, {
    month: `long`,
    year: `numeric`,
  });
}

export function getAddressText(address: string): string {
  return address.replace(`, `, `\n`);
}

export function getExploreLink(id: string): string {
  return `/events/${id}`;
}

export function getYears(start: number, year: number) {
  let startYear = start;
  const years = [];
  while (startYear <= year) {
    years.push(startYear++);
  }
  return years;
}

export function getMonths(): { id: number; month: string }[] {
  return [
    { id: 1, month: `January` },
    { id: 2, month: `February` },
    { id: 3, month: `March` },
    { id: 4, month: `April` },
    { id: 5, month: `May` },
    { id: 6, month: `June` },
    { id: 7, month: `July` },
    { id: 8, month: `August` },
    { id: 9, month: `September` },
    { id: 10, month: `October` },
    { id: 11, month: `November` },
    { id: 12, month: `December` },
  ];
}
