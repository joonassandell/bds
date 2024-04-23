import { type TableInstance } from 'react-table';
import React from 'react';

export const TableFilters = <T extends object>({
  allColumns,
}: {
  allColumns: TableInstance<T>['allColumns'];
}) => {
  const filters = allColumns.map((column: any) => {
    const { key } = column.getHeaderProps();

    return (
      column.canFilter && (
        <div className="b-TableFilters-filter" key={key}>
          {column.render('Filter')}
        </div>
      )
    );
  });

  return <div className="b-TableFilters">{filters}</div>;
};
