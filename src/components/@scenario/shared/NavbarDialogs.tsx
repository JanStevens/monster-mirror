import { ScenarioDefinition } from 'data/scenarios';

import EnemySelectorModal from 'components/@config/EnemySelectorModal';
import AboutDialog from 'components/@scenario/AboutDialog';
import ChangeLevelDialog from 'components/@scenario/ChangeLevelDialog';
import ChangePartyDialog from 'components/@scenario/ChangePartyDialog';
import { InitiativeDialog } from 'components/@scenario/InitiativeList';
import NewRoundDialog from 'components/@scenario/NewRoundDialog';
import ScenarioInfoDialog from 'components/@scenario/ScenarioInfoDialog';
import ToolsDialog from 'components/@scenario/ToolsDialog';

import { DialogType } from './useNavbarDialogs';

interface Props {
  dialogOpen: DialogType | null;
  onClose: () => void;
  isRandomDungeon?: boolean;
  scenario: ScenarioDefinition;
}

const NavbarDialogs = ({
  dialogOpen,
  onClose,
  scenario,
  isRandomDungeon,
}: Props) => {
  return (
    <>
      <NewRoundDialog open={dialogOpen === 'new-round'} onClose={onClose} />

      <ChangeLevelDialog
        open={dialogOpen === 'change-level'}
        onClose={onClose}
      />

      <ChangePartyDialog
        open={dialogOpen === 'change-characters'}
        onClose={onClose}
      />

      <InitiativeDialog
        open={dialogOpen === 'show-initiative'}
        onClose={onClose}
      />

      {isRandomDungeon && (
        <EnemySelectorModal
          open={dialogOpen === 'change-monsters'}
          onClose={onClose}
        />
      )}

      {!isRandomDungeon && (
        <ScenarioInfoDialog
          scenario={scenario}
          open={dialogOpen === 'scenario-info'}
          onClose={onClose}
        />
      )}

      <AboutDialog open={dialogOpen === 'about'} onClose={onClose} />

      {!isRandomDungeon && (
        <ToolsDialog
          scenarioId={scenario?.id}
          open={dialogOpen === 'tools'}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default NavbarDialogs;
