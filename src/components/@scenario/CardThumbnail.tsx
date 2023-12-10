import { Box } from '@style/jsx';
import Image from 'next/image';
import slugify from 'slugify';

interface Props {
  name: string;
}

const CardThumbnail = ({ name }: Props) => {
  return (
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
        style={{
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default CardThumbnail;
