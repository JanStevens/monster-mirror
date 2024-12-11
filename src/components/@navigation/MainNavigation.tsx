import { Link } from 'components/@common/link';

import Navigation from './Navigation';

const MainNavigation = () => (
  <Navigation>
    <Navigation.Logo title="Monster Mirror" />
    <Link
      color="fg.subtle"
      href={`https://github.com/JanStevens/monster-mirror/releases/tag/${import.meta.env.VITE_VERSION}`}
    >
      v{import.meta.env.VITE_VERSION}
    </Link>
  </Navigation>
);

export default MainNavigation;
