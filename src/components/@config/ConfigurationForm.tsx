'use client';

import { Flex } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Button } from 'components/@common';

import { LargeSelect } from './LargeSelect';
import PartyLevelField from './PartyLevelField';
import PartySizeField from './PartySizeField';

const SCENARIOS = SCENARIO_DEFINITIONS.map((scenario) => ({
  label: scenario.name,
  value: `${scenario.id}`,
}));

const ConfigurationForm = () => {
  const [level, characterCount] = useStore(
    useShallow((state) => [state.level, state.characterCount]),
  );
  const { setLevel, setCharacterCount } = useStore((state) => state.actions);
  const [scenario, setScenario] = useState<string | undefined>();
  const router = useRouter();

  const handleChangeLevel = (value: number) => {
    setLevel(value);
  };

  const handleChangeCharacters = (value: number) => {
    setCharacterCount(value);
  };

  const onSubmit = () => {
    if (scenario === undefined) return;
    router.push(`/scenarios/${scenario}`);
  };

  return (
    <Flex
      align="center"
      flexDir="column"
      gap={{ lgDown: 4, base: 8 }}
      minWidth={{ smDown: '350px', base: '550px' }}
    >
      <PartySizeField
        partySize={characterCount}
        onChange={handleChangeCharacters}
      />

      <PartyLevelField
        partyLevel={level}
        onChange={handleChangeLevel}
        marginBottom={{ smDown: 8, base: 6 }}
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
