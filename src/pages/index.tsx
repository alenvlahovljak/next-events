import { List } from '@/components/events';

import { getFeaturedEvents } from '@/utils/events';

function HomePage() {
  return (
    <div>
      <List items={getFeaturedEvents()} />
    </div>
  );
}

export default HomePage;
