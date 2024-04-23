import { MenuItem, type MenuSelectProps } from './';
import { Select } from '../Select';
import c from 'clsx';
import React, { type FC } from 'react';

export const MenuSelect: FC<MenuSelectProps> = ({ className, ...props }) => {
  const classes = c('b-Menu-select', className);

  return (
    <MenuItem className={classes} onSelect={e => e.preventDefault()} skipFocus>
      <Select
        animate={false}
        autoFocus
        backspaceRemovesValue={false}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        icon="search"
        open
        tabSelectsValue={false}
        tooltip={false}
        variant="outline"
        {...props}
      />
    </MenuItem>
  );
};
