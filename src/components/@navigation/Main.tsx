import { Flex, FlexProps } from '@style/jsx';

const Main = (props: FlexProps) => (
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

export default Main;
