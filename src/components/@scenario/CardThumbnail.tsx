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
      width="61px"
      height="73px"
      bg="#BC1717"
      clipPath="polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="51px"
        height="62px"
        bg="bg.default"
        position="relative"
        clipPath="polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)"
      >
        <Image
          src={`/images/thumbnails/gh-${slugify(name, {
            trim: true,
            lower: true,
          })}.png`}
          alt="monster"
          width="62"
          height="62"
          style={{
            overflow: 'clip',
            objectFit: 'cover',
            width: '81px',
            height: '81px',
          }}
        />
      </Box>
    </Box>
  );
};

export default CardThumbnail;
