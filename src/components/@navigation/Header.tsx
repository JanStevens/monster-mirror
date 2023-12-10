import { Flex, FlexProps } from '@style/jsx';

export const Header = (props: FlexProps) => (
  <Flex
    // @ts-expect-error this works
    as="header"
    direction="column"
    bg="bg.canvas"
    left="0"
    position="fixed"
    right="0"
    top="0"
    zIndex="dropdown"
    borderBottomWidth="2px"
    {...props}
  />
);

export const Main = (props: FlexProps) => (
  <Flex
    // @ts-expect-error this works
    as="main"
    direction="column"
    flex={1}
    justify="center"
    pt={{ base: '48px', lg: '54px' }}
    {...props}
  />
);
