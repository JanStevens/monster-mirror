'use client';

import { Badge } from 'components/@common';
import { Navigation } from 'components/@navigation';

interface Props {
  scenarioName: string;
  level: number;
}

const Navbar = ({ scenarioName, level }: Props) => {
  return (
    <Navigation>
      <Navigation.Logo title={scenarioName} />
      <Badge
        size="lg"
        variant="outline"
        color="grey"
        fontSize={{ smDown: 'xl', base: '2xl' }}
        height="9"
        display={{ smDown: 'none', base: 'flex' }}
      >
        lvl: {level}
      </Badge>
      {/* <h1 className={css({ fontSize: '2xl' })}>lvl: {level}</h1> */}
    </Navigation>
  );
};

export default Navbar;
