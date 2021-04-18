import { transformFirebaseData } from '@/utils/helper';
import { IEvent } from '@/utils/events';

export async function getAllEvents(noTransform = false): Promise<IEvent[]> {
  return transformFirebaseData(
    noTransform,
    await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_URI}/events.json`),
  );
}
