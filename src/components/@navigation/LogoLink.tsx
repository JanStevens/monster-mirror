import { css } from '@style/css';
import Link from 'next/link';

import AppIcon from './AppIcon';

interface Props {
  title: string;
}

const LogoLink = ({ title }: Props) => {
  return (
    <Link
      href="/"
      aria-label="Go to start page"
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '5',
      })}
    >
      <AppIcon height="32px" width="64px" />
      <h1
        className={css({
          textWrap: 'nowrap',
          fontSize: { smDown: 'xl', base: '2xl' },
        })}
      >
        {title}
      </h1>
    </Link>
  );
};

export default LogoLink;
