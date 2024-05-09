import { cva } from '@style/css';

import { useStore } from 'services/stores';

import { Badge, BadgeProps } from 'components/@common';

const StatusMapping = {
  initial: undefined,
  connected: 'Live',
  reconnecting: 'Reconnecting',
  connecting: 'Reconnecting',
  disconnected: 'Disconnected',
} as const;

const indicatorIcon = cva({
  base: {
    borderRadius: '100%',
    display: 'inline-block',
    width: '8px',
    height: '8px',
    mr: '0.5',
  },
  variants: {
    status: {
      initial: { bg: 'transparent' },
      connected: { bg: 'green.700' },
      reconnecting: { bg: 'orange.700' },
      connecting: { bg: 'orange.700' },
      disconnected: { bg: 'neutral.600' },
    },
  },
});

const ConnectionBadge = (props: BadgeProps) => {
  const status = useStore((state) => state.liveblocks.status);

  const mappedStatus = StatusMapping[status];

  if (!mappedStatus) return null;

  return (
    <Badge size="lg" fontWeight="normal" {...props}>
      <span className={indicatorIcon({ status })} />
      {mappedStatus}
    </Badge>
  );
};

export default ConnectionBadge;
