'use client';

import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';

import { Button, Card } from 'components/@common';

import { LargeSelect } from './LargeSelect';
import PartyLevelField from './PartyLevelField';
import PartySizeField from './PartySizeField';

const SCENARIOS = SCENARIO_DEFINITIONS.map((scenario) => ({
  label: scenario.name,
  value: `${scenario.id}`,
}));

const ConfigurationForm = () => {
  const [level, characters] = useStore(
    useShallow((state) => [state.level, state.characters]),
  );
  const { setLevel, toggleCharacter } = useStore((state) => state.actions);
  const [scenario, setScenario] = useState<string | undefined>();
  const router = useRouter();

  const handleChangeLevel = (value: number) => {
    setLevel(value);
  };

  const handleChangeCharacters = (character: CharacterNames) => {
    toggleCharacter(character);
  };

  const onSubmit = () => {
    if (scenario === undefined) return;
    router.push(`/scenarios/${scenario}`);
  };

  return (
    <>
      <Card.Body
        alignItems="center"
        flexDir="column"
        gap={{ lgDown: 6, base: 8 }}
      >
        <PartySizeField party={characters} onChange={handleChangeCharacters} />

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
      </Card.Body>

      <Card.Footer>
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
      </Card.Footer>
    </>
  );
};

export default ConfigurationForm;
