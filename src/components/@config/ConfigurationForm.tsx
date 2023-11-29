import { Container, Flex } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useState } from 'react';

import { Button } from 'components/@common';

import { LargeSelect } from './LargeSelect';

const PARTY_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7].map((level) => ({
  label: `Party Level: ${level}`,
  value: `${level}`,
}));

const SCENARIOS = SCENARIO_DEFINITIONS.map((scenario) => ({
  label: scenario.name,
  value: `${scenario.id}`,
}));

interface Props {
  onSubmit: (level: string | undefined, scenario: string | undefined) => void;
}

const ConfigurationForm = ({ onSubmit }: Props) => {
  const [level, setLevel] = useState<string | undefined>();
  const [scenario, setScenario] = useState<string | undefined>();

  return (
    <Flex
      align="center"
      flexDir="column"
      gap={{ lgDown: 4, base: 8 }}
      minWidth="350px"
    >
      <LargeSelect
        size="md"
        items={PARTY_LEVELS}
        placeholder="Select level"
        onValueChange={({ value }) => setLevel(value[0])}
      />
      <LargeSelect
        size="md"
        items={SCENARIOS}
        placeholder="Select scenario"
        onValueChange={({ value }) => setScenario(value[0])}
      />

      <Button
        variant="solid"
        size="2xl"
        fontSize="3xl"
        disabled={!level || !scenario}
        onClick={() => onSubmit(level, scenario)}
        width="100%"
        fontWeight="normal"
      >
        Start
      </Button>
    </Flex>
  );
};

export default ConfigurationForm;
