'use client';

import { Flex } from '@style/jsx';
import { useRouter } from 'next/navigation';

import { Heading } from 'components/@common';
import { ConfigurationForm } from 'components/@config';

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
    <Flex
      align="center"
      justify="center"
      direction="column"
      height="100svh"
      textAlign="center"
      ml="8"
      mr="8"
    >
      <Heading
        textStyle={{ lgDown: '4xl', base: '5xl' }}
        fontWeight="normal"
        as="h1"
        mb={12}
      >
        Select scenario & level
      </Heading>
      <ConfigurationForm onSubmit={handleScenarioLoad} />
    </Flex>
  );
}
