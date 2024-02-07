import { css } from '@style/css';
import Link from 'next/link';

import AppIcon from './AppIcon';

interface Props {
  title: string;
  subtitle?: string;
}

const LogoLink = ({ title, subtitle }: Props) => {
  return (
    <Link
      href="/"
      aria-label={title}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '5',
      })}
    >
      <AppIcon height="32px" width="64px" />
      <div
        className={css({ display: 'flex', alignItems: 'flex-end', gap: '3' })}
      >
        <h1
          className={css({
            textWrap: 'nowrap',
            fontSize: { smDown: 'xl', base: '2xl' },
          })}
        >
          {title}
        </h1>
        {subtitle && (
          <h2
            className={css({
              color: 'fg.subtle',
              fontSize: { smDown: 'md', base: 'xl' },
              display: { mdDown: 'none', base: 'block' },
            })}
          >
            {subtitle}
          </h2>
        )}
      </div>
    </Link>
  );
};

export default LogoLink;
