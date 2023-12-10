import { Dialog as ArkDialog } from '@ark-ui/react';
import { type HTMLStyledProps, styled } from '@style/jsx';
import { dialog } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';

const { withProvider, withContext } = createStyleContext(dialog);

const Dialog = withProvider(ArkDialog.Root);
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

const Root = Dialog;
const Backdrop = DialogBackdrop;
const CloseTrigger = DialogCloseTrigger;
const Content = DialogContent;
const Description = DialogDescription;
const Positioner = DialogPositioner;
const Title = DialogTitle;
const Trigger = DialogTrigger;

export {
  Backdrop,
  CloseTrigger,
  Content,
  Description,
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
  Positioner,
  Root,
  Title,
  Trigger,
};

export type DialogProps = HTMLStyledProps<typeof Dialog>;
export type DialogBackdropProps = HTMLStyledProps<typeof DialogBackdrop>;
export type DialogCloseTriggerProps = HTMLStyledProps<
  typeof DialogCloseTrigger
>;
export type DialogContentProps = HTMLStyledProps<typeof DialogContent>;
export type DialogDescriptionProps = HTMLStyledProps<typeof DialogDescription>;
export type DialogPositionerProps = HTMLStyledProps<typeof DialogPositioner>;
export type DialogTitleProps = HTMLStyledProps<typeof DialogTitle>;
export type DialogTriggerProps = HTMLStyledProps<typeof DialogTrigger>;
