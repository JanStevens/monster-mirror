import { Portal } from '@ark-ui/react';
import { css } from '@style/css';
import { Box } from '@style/jsx';
import { thumbnailFor } from 'images';

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
          <img
            src={thumbnailFor(image)}
            alt={name}
            decoding="async"
            className={css({
              objectFit: 'cover',
              position: 'absolute',
              width: '100%',
              height: '100%',
              inset: 0,
            })}
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
