'use client';

import { Container, Flex } from '@style/jsx';
import { useRouter } from 'next/navigation';

import { Heading } from 'components/@common';
import { ConfigurationForm } from 'components/@config';
import { Main, MainNavigation } from 'components/@navigation';

export default function Home() {
  const router = useRouter();

  const handleScenarioLoad = (
    level: string | undefined,
    scenario: string | undefined,
  ) => {
    if (level === undefined || scenario === undefined) return;
    router.push(`/scenarios/${scenario}?level=${level}`);
  };

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
            <ConfigurationForm onSubmit={handleScenarioLoad} />
          </Container>
        </Flex>
      </Main>
    </>
  );
}
