'use client';

import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { Card } from 'components/@common/card';

import EnemySelectorModal from './EnemySelectorModal/EnemySelectorModal';
import { LargeSelect } from './LargeSelect';
import PartyLevelField from './PartyLevelField';
import PartySizeField from './PartySizeField';

const SCENARIOS = [
  ...SCENARIO_DEFINITIONS.map((scenario) => ({
    label: scenario.name,
    value: `${scenario.id}`,
  })),
  {
    label: '#99 Random Dungeon',
    value: `99`,
  },
];

const ConfigurationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [level, party] = useStore(
    useShallow((state) => [state.level, state.party]),
  );
  const { resetState } = useStore((state) => state.actions);
  const [scenario, setScenario] = useState<string | undefined>();
  const router = useRouter();
  const isSubmitDisabled = !level || !scenario || party.length < 2;

  const onSubmit = () => {
    if (isSubmitDisabled) return;
    resetState();
    if (scenario === '99') {
      setIsModalOpen(true);
    } else {
      router.push(`/scenarios/${scenario}`);
    }
  };

  const handleMonstersSelected = () => {
    router.push('/random-dungeon');
  };

  return (
    <>
      <Card.Body
        alignItems="center"
        flexDir="column"
        gap={{ lgDown: 6, base: 8 }}
      >
        <PartySizeField />
        <PartyLevelField />
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
          disabled={isSubmitDisabled}
          onClick={onSubmit}
          width="100%"
          fontWeight="normal"
        >
          Start
        </Button>
      </Card.Footer>

      <EnemySelectorModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectedEnemies={handleMonstersSelected}
      />
    </>
  );
};

export default ConfigurationForm;
