import { Portal } from '@ark-ui/react';
import { Box } from '@style/jsx';
import { Icon } from 'icons';
import Image from 'next/image';

import { Dialog, IconButton } from 'components/@common';

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
          <Dialog.Content background="transparent">
            <Box
              position="relative"
              maxHeight="70vh"
              margin="0 auto"
              aspectRatio="5/7"
              overflow="hidden"
              borderRadius="l3"
            >
              <Image
                src={`/images/artwork/${image}`}
                alt={name}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: 'cover',
                }}
              />
              <Dialog.CloseTrigger
                asChild
                position="absolute"
                top="2"
                right="2"
              >
                <IconButton
                  aria-label="Close Dialog"
                  variant="ghost"
                  size="lg"
                  background="transparent"
                >
                  <Icon name="close" />
                </IconButton>
              </Dialog.CloseTrigger>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CardThumbnail;
