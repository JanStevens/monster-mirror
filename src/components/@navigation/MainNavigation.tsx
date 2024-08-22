import { Link } from 'components/@common/link';

import Navigation from './Navigation';

const MainNavigation = () => (
  <Navigation>
    <Navigation.Logo title="Monster Mirror" />
    <Link
      color="fg.subtle"
      href={`https://github.com/JanStevens/monster-mirror/releases/tag/${process.env.NEXT_PUBLIC_APP_VERSION}`}
    >
      v{process.env.NEXT_PUBLIC_APP_VERSION}
    </Link>
  </Navigation>
);

export default MainNavigation;
