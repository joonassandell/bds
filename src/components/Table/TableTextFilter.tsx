import { DebouncedInput } from '../DebouncedInput';
import { type TableTextFilterProps } from './';
import React from 'react';

export const TableTextFilter = <T extends object>({
  column,
  label,
  placeholder,
  ...props
}: TableTextFilterProps<T>) => {
  const { filterValue, setFilter, id } = column;

  return (
    <DebouncedInput
      {...props}
      id={'filter_' + id}
      initialValue={filterValue || ''}
      label={label ?? ''}
      onChange={(e: any) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={placeholder ?? column.header}
      type="text"
    />
  );
};
