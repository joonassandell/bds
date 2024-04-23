import { type FilterTypes } from 'react-table';

// Can't use generic type if use like this
export const tableFilterTypes: FilterTypes<any> = {
  multiple: (rows, id, filterValue) =>
    rows.filter(row => {
      const rowValue = row.values[id[0]];
      return rowValue !== undefined ? filterValue.includes(rowValue) : true;
    }),
  text: (rows, id, filterValue) =>
    rows.filter((row: any) => {
      const rowValue = row.values[id[0]]; // changed from row.values[id], type not working before but somehow it worked
      return rowValue !== undefined
        ? (rowValue ?? '')
            .toLocaleLowerCase()
            .includes((filterValue || '').toLowerCase())
        : true;
    }),
};

export const getTableFilterTypes = <T extends object>(): FilterTypes<T> => ({
  multiple: (rows, id, filterValue) =>
    rows.filter(row => {
      const rowValue = row.values[id[0]];
      return rowValue !== undefined ? filterValue.includes(rowValue) : true;
    }),
  text: (rows, id, filterValue) =>
    rows.filter((row: any) => {
      const rowValue = row.values[id[0]];
      return rowValue !== undefined
        ? (rowValue ?? '')
            .toLocaleLowerCase()
            .includes((filterValue || '').toLowerCase())
        : true;
    }),
});
