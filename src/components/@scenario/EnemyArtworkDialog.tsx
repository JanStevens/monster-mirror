import { Box } from '@style/jsx';
import { Icon } from 'icons';
import Image from 'next/image';

import { Dialog, IconButton } from 'components/@common';

interface Props {
  name: string;
  image: string;
}

const EnemyArtworkDialog = ({ name, image }: Props) => {
  return (
    <Dialog.Content background="transparent" height="70vh">
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
        <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
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
  );
};

export default EnemyArtworkDialog;
