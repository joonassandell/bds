import { Select } from '../Select/Select';
import { type TableMultiSelectFilterProps } from './';
import React, { useMemo } from 'react';

export const TableMultiSelectFilter = <T extends object>({
  column,
  sortFn,
  ...props
}: TableMultiSelectFilterProps<T>) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => options.add(id ? row.values[id] : ''));
    return Array.from(options.values());
  }, [id, preFilteredRows]);

  const selectOptions = options
    .map((opt: any) => ({ label: opt, value: opt }))
    .sort((a, b) => {
      if (sortFn) {
        return sortFn(a.label, b.label);
      } else {
        return 0;
      }
    });
  const selectValue =
    filterValue &&
    filterValue.map((fv: any) => ({
      label: selectOptions.find((o: any) => o.value === fv)?.label,
      value: fv,
    }));

  return (
    <Select
      {...props}
      id={column.id}
      multi={true}
      onChange={(e: any) => {
        const allValues = e.map((o: any) => o.value).filter(Boolean);
        setFilter(allValues && allValues.length > 0 ? allValues : undefined);
      }}
      options={selectOptions}
      placeholder={props?.placeholder ?? column.header}
      value={selectValue && selectValue.length > 0 ? selectValue : null}
    />
  );
};
