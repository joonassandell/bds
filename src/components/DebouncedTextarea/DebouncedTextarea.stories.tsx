import { DebouncedTextarea } from './DebouncedTextarea';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof DebouncedTextarea> = {
  component: DebouncedTextarea,
  parameters: {
    componentSubtitle: 'Debounced version of the Textarea component',
  },
  title: 'Components/Forms/DebouncedTextarea',
};

export default meta;

type Story = StoryObj<typeof DebouncedTextarea>;

export const DebouncedTextareaComponent: Story & any = {
  args: {
    id: 'debounded-textarea',
    initialValue: 'This is initial debounced textarea value…',
    label: 'Label',
  },
  name: 'DebouncedTextarea',
  render: function Component({ id, ...props }) {
    const [initialValue, setInitialValue] = useState<string | number>(
      props.initialValue,
    );
    const [loading, setLoading] = useState(false);

    const hints = {
      finished:
        'After the request finishes whether it successes or contains errors, the loading should stop.',
      loading:
        'When the input is saved to server, we will manually set it to loading. This happens after the debounce finishes.',
      start: 'Enter some value to start.',
    };
    const [hint, setHint] = useState(hints.start);

    useEffect(() => {
      hint === hints.finished &&
        setTimeout(() => {
          setHint(hints.start);
        }, 5000);
    }, [hint, hints.finished, hints.start]);

    return (
      <DebouncedTextarea
        hint={hint}
        id={id}
        loading={loading}
        onChange={e => {
          setHint(hints.loading);
          setLoading(true);
          setTimeout(() => {
            setInitialValue(e.target.value);
            setLoading(false);
            setHint(hints.finished);
          }, 3000);
        }}
        {...props}
        initialValue={initialValue}
      />
    );
  },
};
