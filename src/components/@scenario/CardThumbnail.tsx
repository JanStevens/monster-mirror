import { Portal } from '@ark-ui/react';
import { Box } from '@style/jsx';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import slugify from 'slugify';

import { Dialog, IconButton } from 'components/@common';

interface Props {
  name: string;
}

const CardThumbnail = ({ name }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="75px"
          aspectRatio="128/147"
          bg="bg.default"
          position="relative"
        >
          <Image
            src={`/images/thumbnails/gh-${slugify(name, {
              trim: true,
              lower: true,
            })}.png`}
            alt="monster"
            fill
            sizes="128px"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Box
              position="relative"
              maxHeight="70vh"
              aspectRatio="5/7"
              overflow="hidden"
              borderRadius="l3"
            >
              <Image
                src={`/images/artwork/gh-${slugify(name, {
                  trim: true,
                  lower: true,
                })}.png`}
                alt="monster"
                fill
                sizes="100%"
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
              <IconButton
                aria-label="Close Dialog"
                variant="ghost"
                size="lg"
                css={{
                  filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.5))',
                }}
              >
                <XIcon strokeWidth="4" fontSize="24" />
              </IconButton>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CardThumbnail;
