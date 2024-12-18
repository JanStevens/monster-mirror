import { Flex } from '@style/jsx';

import { Card } from 'components/@common/card';
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
          <Card.Root
            width={{
              sm: 'xl',
              md: 'xl',
              lg: '2xl',
              xl: '2xl',
            }}
          >
            <Card.Header my={{ lgDown: 2, base: 4 }}>
              <Card.Title
                fontWeight="normal"
                fontSize={{ lgDown: '3xl', base: '5xl' }}
              >
                Select scenario & level
              </Card.Title>
            </Card.Header>

            <ConfigurationForm />
          </Card.Root>
        </Flex>
      </Main>
    </>
  );
}
