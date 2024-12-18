import { Flex, type FlexProps } from '@style/jsx';

const Header = (props: FlexProps) => (
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

export default Header;
