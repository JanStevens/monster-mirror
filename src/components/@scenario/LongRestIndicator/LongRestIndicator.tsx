import { Box, type BoxProps } from '@style/jsx';
import { BedIcon } from 'lucide-react';

const LongRestIndicator = (props: BoxProps) => {
  return (
    <Box
      borderRadius="50%"
      backgroundColor="accent.1"
      border="1px solid"
      borderColor="accent.11"
      p={1.5}
      {...props}
    >
      <BedIcon color="white" width="16px" height="16px" />
    </Box>
  );
};

export default LongRestIndicator;
