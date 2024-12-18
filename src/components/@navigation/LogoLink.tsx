import { css } from '@style/css';
import { Flex } from '@style/jsx';
import { Link } from 'react-router';

import { Heading } from 'components/@common/heading';

import AppIcon from './AppIcon';

interface Props {
  title: string;
  subtitle?: string;
}

const LogoLink = ({ title, subtitle }: Props) => {
  return (
    <Link
      to="/"
      aria-label={title}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        minWidth: 0,
      })}
    >
      <AppIcon height="32px" width="64px" />
      <Flex align="flex-end" gap="3" minWidth={0}>
        <Heading
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontWeight="normal"
          fontSize={{ smDown: 'xl', base: '2xl' }}
        >
          {title}
        </Heading>
        {subtitle && (
          <Heading
            textWrap="nowrap"
            color="fg.subtle"
            fontWeight="normal"
            fontSize={{ smDown: 'md', base: 'xl' }}
            display={{ mdDown: 'none', base: 'block' }}
          >
            {subtitle}
          </Heading>
        )}
      </Flex>
    </Link>
  );
};

export default LogoLink;
