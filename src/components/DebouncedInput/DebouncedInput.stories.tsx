import { DebouncedInput } from './DebouncedInput';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof DebouncedInput> = {
  component: DebouncedInput,
  parameters: {
    componentSubtitle: 'Debounced version of the Input component',
  },
  title: 'Components/Forms/DebouncedInput',
};

export default meta;

type Story = StoryObj<typeof DebouncedInput>;

export const DebouncedInputComponent: Story & any = {
  args: {
    enableNegativeValues: true,
    id: 'debounded-input',
    initialValue: 10,
    label: 'Label',
  },
  name: 'DebouncedInput',
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
      <DebouncedInput
        beacon="info"
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
