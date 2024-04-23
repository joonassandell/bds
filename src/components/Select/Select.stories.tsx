import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { type Optional } from '../../types';
import { Select, type SelectOptions, type SelectProps } from './';
import React, { type FC, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Select> = {
  component: Select,
  excludeStories: ['SelectStory', 'options', 'optionsMulti'],
  parameters: {
    componentSubtitle: 'Displays a list of options for the user to pick from.',
    docs: {
      description: {
        component:
          'This component uses `react-select` under the hood. View <a href="https://react-select.com" target="_blank">react-select documentation</a> for additional properties and information.',
      },
    },
  },
  title: 'Components/Forms/Select',
};

export default meta;

type Story = StoryObj<typeof Select>;

export const options = [
  {
    label: 'Beer',
    options: [
      { label: 'Sandels', value: 1 },
      { label: 'Koff', value: 2 },
      { label: '101 california pale ale', value: 6 },
      { label: 'Rye rye my darling', value: 7 },
      { label: 'Faceplant IPA', value: 8 },
      { label: 'Stouty mcstoutface', value: 9 },
      { label: 'Hoppy joe american lager', value: 10 },
      { label: 'Lazy lizard summer ale', value: 11 },
      { label: 'Thunder chief double ipa', value: 12 },
      { label: 'Vanilla gorilla porter', value: 13 },
      { label: 'Electric mullet IPA', value: 14 },
      { label: 'Rosé saison', value: 15 },
    ],
  },
  {
    label: 'Juice',
    options: [
      { label: 'Orange juice', value: 3 },
      { label: 'Apple juice', value: 4 },
    ],
  },
  {
    label: 'Cocktail',
    options: [
      {
        label:
          'Blizzardy boozy snow-globe sipper: a whiskery winter wonderland concoction',
        value: 5,
      },
    ],
  },
];

export const SelectComponent: Story = {
  args: {
    helpOnClick: () => {
      alert('You clicked help');
    },
    id: 'select',
    label: 'Select drink',
    labelSuffix: '(Alcoholic & non-alcoholic)',
    // menuPortalTarget: document.body,
    noOptionsMessage: () => 'No options…',
    // open: true,
    options,
    placeholder: 'Choose a drink…',
    // placeholderIcon: 'copy',
  },
  name: 'Select',
  render: props => <Select {...props} />,
};

export const SelectStory: FC<Optional<SelectProps, 'id'>> = composeStory(
  SelectComponent,
  meta,
);

/* =======================================
 * Multiselect
 * ======================================= */

export const optionsMulti = [
  { label: 'Fat Lizard', value: 'fat-lizard' },
  { label: 'Sandels', value: 'sandels' },
  { label: 'Koff', value: 'koff' },
  { isDisabled: true, label: 'Lapin kulta', value: 'lapin-kulta' },
];

export const MultiSelect: Story = {
  args: {
    id: 'multi-select',
    label: 'Select your favourite',
    options: optionsMulti,
    placeholder: 'Select beer',
    // placeholderIcon: 'copy',
  },
  parameters: {
    docs: {
      description: {
        story: 'Set the `multi` property to use multi-select.',
      },
    },
  },
  render: function Component({ id, label, options, ...props }) {
    const [value, setValue] = useState(
      options && options?.length > 0 ? options[0] : [],
    );

    return (
      <Select
        id={id}
        label={label}
        multi
        onChange={value => setValue(value as SelectOptions)}
        options={options}
        value={value}
        {...props}
      />
    );
  },
};

/* =======================================
 * Creatable
 * ======================================= */

export const CreatableSelect: Story = {
  args: {
    id: 'creatable-select',
    label: 'Choose from list or type missing value.',
    options: [
      { label: 'Biocode Oy', value: 'biocode' },
      { label: 'Biosyn', value: 'biosyn' },
      { label: 'Cyberdyne Systems', value: 'cyberdyne-systems' },
      { isDisabled: true, label: 'Beer Company', value: 'beer-company' },
    ],
    placeholder: 'Select company or add new by typing',
  },
  name: 'Creatable',
  parameters: {
    docs: {
      description: {
        story:
          'Apply "creatable" prop to be able to create new select options.',
      },
    },
  },
  render: function Component({ id, label, options, placeholder, ...props }) {
    const createOption = (label: string) => ({
      label,
      value: label.toLowerCase().replace(/\W/g, ''),
    });

    const [value, setValue] = useState<SelectOptions>();
    const [opts, setOptions] = useState<SelectOptions[]>(
      options as SelectOptions[],
    );

    const handleCreate = (inputValue: string) => {
      const newOption = createOption(inputValue);
      setOptions(prev => [...prev, newOption]);
      setValue(newOption);
    };

    const handleCreateLabel = (inputValue: string) => `Create "${inputValue}"`;

    return (
      <Select
        creatable
        formatCreateLabel={handleCreateLabel}
        id={id}
        label={label}
        onChange={value => setValue(value as SelectOptions)}
        onCreateOption={handleCreate}
        options={opts}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    );
  },
};

/* =======================================
 * Input-like
 * ======================================= */

const inputOptions = undefined;

export const InputSelect: Story = {
  args: {
    id: 'input-select',
    label:
      'Case when there is no options. Mimics input component by hiding menu and dropdown indicator.',
    options: inputOptions,
    placeholder: inputOptions
      ? 'Select company from list or type contact email'
      : 'Type email address',
  },
  name: 'Input-like',
  parameters: {
    docs: {
      description: {
        story:
          'Apply the `creatable` prop to create new select options. This case mimics input component by hiding menu and dropdown indicators.',
      },
    },
  },
  render: function Component({ id, label, options, placeholder, ...props }) {
    const components = {
      DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
      label,
      value: label,
    });

    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState<SelectOptions[]>([]);

    const handleBlur = () => {
      if (!inputValue) return;
      setValue(prev => [...prev, createOption(inputValue)]);
      setInputValue('');
    };

    return (
      <Select
        components={options ? undefined : components}
        creatable
        enableMenu={!!options}
        id={id}
        inputValue={inputValue}
        isClearable
        label={label}
        onBlur={handleBlur}
        onChange={(newValue: any) => setValue([newValue])}
        onInputChange={newValue => setInputValue(newValue)}
        options={options}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    );
  },
};
