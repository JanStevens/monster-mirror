import { Container, Flex } from '@style/jsx';

import { Heading } from 'components/@common';
import { ConfigurationForm } from 'components/@config';
import { Main, MainNavigation } from 'components/@navigation';

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Main>
        <Flex
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
        >
          <Container width={{ smDown: '100%', base: 'inherit' }}>
            <Heading
              textStyle={{ lgDown: '4xl', base: '5xl' }}
              fontWeight="normal"
              as="h1"
              mb={8}
            >
              Select scenario & level
            </Heading>

            <ConfigurationForm />
          </Container>
        </Flex>
      </Main>
    </>
  );
}
