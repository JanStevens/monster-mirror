import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useNavigate } from "react-router";
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { Card } from 'components/@common/card';

import { LargeSelect } from './LargeSelect';
import PartyLevelField from './PartyLevelField';
import PartySizeField from './PartySizeField';

const SCENARIOS = SCENARIO_DEFINITIONS.map((scenario) => ({
  label: scenario.name,
  value: `${scenario.id}`,
}));

const ConfigurationForm = () => {
  const [level, party] = useStore(
    useShallow((state) => [state.level, state.party]),
  );
  const { resetState } = useStore((state) => state.actions);
  const [scenario, setScenario] = useState<string | undefined>();
  const navigate = useNavigate();
  const isSubmitDisabled = !level || !scenario || party.length < 2;

  const onSubmit = () => {
    if (isSubmitDisabled) return;
    resetState();
    navigate(`/scenarios/${scenario}`);
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
    </>
  );
};

export default ConfigurationForm;
