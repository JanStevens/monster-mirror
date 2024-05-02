'use client';

import { Editable } from '@ark-ui/react/editable';
import { styled } from '@style/jsx';
import { editable } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(editable);

export const Root = withProvider(styled(Editable.Root), 'root');
export const Area = withContext(styled(Editable.Area), 'area');
export const CancelTrigger = withContext(
  styled(Editable.CancelTrigger),
  'cancelTrigger',
);
export const EditableControl = withContext(styled(Editable.Control), 'control');
export const EditTrigger = withContext(
  styled(Editable.EditTrigger),
  'editTrigger',
);
export const EditableInput = withContext(styled(Editable.Input), 'input');
export const EditableLabel = withContext(styled(Editable.Label), 'label');
export const Preview = withContext(styled(Editable.Preview), 'preview');
export const SubmitTrigger = withContext(
  styled(Editable.SubmitTrigger),
  'submitTrigger',
);

export type RootProps = ComponentProps<typeof Root>;
export type AreaProps = ComponentProps<typeof Area>;
export type CancelTriggerProps = ComponentProps<typeof CancelTrigger>;
export type EditableControlProps = ComponentProps<typeof EditableControl>;
export type EditTriggerProps = ComponentProps<typeof EditTrigger>;
export type EditableInputProps = ComponentProps<typeof EditableInput>;
export type EditableLabelProps = ComponentProps<typeof EditableLabel>;
export type PreviewProps = ComponentProps<typeof Preview>;
export type SubmitTriggerProps = ComponentProps<typeof SubmitTrigger>;
