import { Dialog as ArkDialog } from '@ark-ui/react/dialog';
import { type HTMLStyledProps, styled } from '@style/jsx';
import { dialog } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';

const { withProvider, withContext } = createStyleContext(dialog);

const DialogRoot = withProvider(ArkDialog.Root);
const DialogBackdrop = withContext(styled(ArkDialog.Backdrop), 'backdrop');
const DialogCloseTrigger = withContext(
  styled(ArkDialog.CloseTrigger),
  'closeTrigger',
);
const DialogContent = withContext(styled(ArkDialog.Content), 'content');
const DialogDescription = withContext(
  styled(ArkDialog.Description),
  'description',
);
const DialogPositioner = withContext(
  styled(ArkDialog.Positioner),
  'positioner',
);
const DialogTitle = withContext(styled(ArkDialog.Title), 'title');
const DialogTrigger = withContext(styled(ArkDialog.Trigger), 'trigger');

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});

export type DialogProps = HTMLStyledProps<typeof DialogRoot>;
export type DialogBackdropProps = HTMLStyledProps<typeof DialogBackdrop>;
export type DialogCloseTriggerProps = HTMLStyledProps<
  typeof DialogCloseTrigger
>;
export type DialogContentProps = HTMLStyledProps<typeof DialogContent>;
export type DialogDescriptionProps = HTMLStyledProps<typeof DialogDescription>;
export type DialogPositionerProps = HTMLStyledProps<typeof DialogPositioner>;
export type DialogTitleProps = HTMLStyledProps<typeof DialogTitle>;
export type DialogTriggerProps = HTMLStyledProps<typeof DialogTrigger>;
