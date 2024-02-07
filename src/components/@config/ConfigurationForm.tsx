'use client';

import { Flex } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'store/useStore';

import { Button } from 'components/@common';

import { LargeSelect } from './LargeSelect';

export const PARTY_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7].map((level) => ({
  label: `Party Level: ${level}`,
  value: `${level}`,
}));

const SCENARIOS = SCENARIO_DEFINITIONS.map((scenario) => ({
  label: scenario.name,
  value: `${scenario.id}`,
}));

const ConfigurationForm = () => {
  const [level, selectLevel] = useStore(
    useShallow((state) => [state.level, state.selectLevel]),
  );
  const [scenario, setScenario] = useState<string | undefined>();
  const { push } = useRouter();

  const handleChangeLevel = (value: string) => {
    selectLevel(value[0]);
  };

  const onSubmit = () => {
    if (scenario === undefined) return;
    push(`/scenarios/${scenario}`);
  };

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
        value={[`${level}`]}
        placeholder="Select level"
        onValueChange={({ value }) => handleChangeLevel(value[0])}
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
        onClick={onSubmit}
        width="100%"
        fontWeight="normal"
      >
        Start
      </Button>
    </Flex>
  );
};

export default ConfigurationForm;
