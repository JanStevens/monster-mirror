import { Flex, type FlexProps } from '@style/jsx';

const Main = (props: FlexProps) => (
  <Flex
    // @ts-expect-error this works
    as="main"
    direction="column"
    flex={1}
    justify="center"
    pt="56px"
    {...props}
  />
);

export default Main;
