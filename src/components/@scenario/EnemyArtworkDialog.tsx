import { css } from '@style/css';
import { Box } from '@style/jsx';
import { Icon } from 'icons';

import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';

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
        <img
          src={`/images/artwork/${image}`}
          alt={name}
          sizes="100%"
          className={css({
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
            inset: 0,
          })}
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
