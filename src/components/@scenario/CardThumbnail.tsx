import { Portal } from '@ark-ui/react';
import { Box } from '@style/jsx';
import Image from 'next/image';

import { Dialog } from 'components/@common/dialog';

import EnemyArtworkDialog from './EnemyArtworkDialog';

interface Props {
  name: string;
  image: string;
}

const CardThumbnail = ({ name, image }: Props) => {
  return (
    <Dialog.Root lazyMount unmountOnExit>
      <Dialog.Trigger asChild>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="75px"
          width="auto"
          aspectRatio="128/147"
          position="relative"
          cursor="pointer"
        >
          <Image
            src={`/images/thumbnails/${image}`}
            alt={name}
            fill
            sizes="92px"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <EnemyArtworkDialog name={name} image={image} />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CardThumbnail;
