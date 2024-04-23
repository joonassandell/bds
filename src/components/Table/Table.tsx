import {
  type Cell,
  type Column,
  type HeaderGroup,
  type Row,
  useSortBy,
  useTable,
} from 'react-table';
import { type ColumnAdditionalProps, type TableProps } from './';
import { Icon } from '../Icon';
import { isNumber } from '../../lib/utils';
import { ScrollArea } from '../ScrollArea';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { useMemo } from 'react';

export const Table = <T extends object>({
  alignLastColumnEnd,
  allColumns,
  border = true,
  className,
  columns,
  columnsWidth,
  data,
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  rows,
  sort = false,
  tableOptions,
  hideHeader,
}: TableProps<T>) => {
  const classes = c(className, 'b-Table', {
    '-border:0': !border,
    '-column:align:last:end': alignLastColumnEnd,
  });
  const tableInstance = useMemo(
    () => ({
      allColumns,
      getTableProps,
      headerGroups,
      prepareRow,
      rows: page ? page : rows, // Override rows with page if it exists
    }),
    [allColumns, getTableProps, headerGroups, page, prepareRow, rows],
  );

  const tableInstanceFromHook = useTable(
    {
      columns,
      data: data || [],
      ...tableOptions,
    },
    sort ? useSortBy : () => null,
  );

  /**
   * If we use filtering, we will create our own table instances from react-table
   * in the consuming application, and thus there will be no data. Otherwise, we
   * will use built-in table instances created from hook.
   */
  const instance = useMemo(
    () => (data ? tableInstanceFromHook : tableInstance),
    [data, tableInstance, tableInstanceFromHook],
  );

  /**
   * Generate the default column width based on the visible columns, or, if we
   * don't have info on that, based on column definitions
   */
  let visibleColumns: Column<T>[] = [];

  if (instance.allColumns) {
    visibleColumns = instance.allColumns.filter(x => x.isVisible);
  } else if (columns) {
    visibleColumns = columns;
  }

  const defaultColumnWidth = `repeat(${visibleColumns.length}, 1fr)`;
  const customWidth = columnsWidth
    ?.map((col: any) => (isNumber(col) ? `${col}fr` : col))
    .join(' ');
  const columnWidth = customWidth ? customWidth : defaultColumnWidth;

  return (
    <ScrollArea orientation="horizontal">
      <table
        className={classes}
        style={{
          ['--b-Table-columns' as string]: columnWidth,
        }}
        {...(instance.getTableProps && instance.getTableProps())}
      >
        {!hideHeader && (
          <thead className="b-Table-head">
            {instance.headerGroups?.map(headerGroup => {
              const { key, ...headerGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr className="b-Table-row" key={key} {...headerGroupProps}>
                  {headerGroup.headers.map(
                    (column: HeaderGroup<T> & ColumnAdditionalProps) => {
                      const { key } = column.getHeaderProps();
                      let sortByProps = {};
                      if (column.getSortByToggleProps) {
                        sortByProps = omit(
                          ['title'],
                          column.getSortByToggleProps(),
                        );
                      }

                      return (
                        <th
                          className="b-Table-heading"
                          {...(column.getSortByToggleProps && {
                            ...column.getHeaderProps(sortByProps),
                          })}
                          key={key}
                        >
                          <Tooltip
                            content={
                              <>
                                {column.render('header')}{' '}
                                {typeof column.suffix === 'function'
                                  ? column.suffix()
                                  : column.suffix}
                              </>
                            }
                          >
                            <div className="b-Table-heading-text">
                              <>
                                <Text size="small" tag="span">
                                  {column.render('header')}
                                </Text>{' '}
                                <Text color="light" size="small" tag="span">
                                  {typeof column.suffix === 'function'
                                    ? column.suffix()
                                    : column.suffix}
                                </Text>
                              </>
                            </div>
                          </Tooltip>
                          {column.canSort && (
                            <div
                              className={`b-Table-heading-sort ${
                                column.isSorted ? 'is-sorted' : ''
                              }`}
                            >
                              <Icon name="select" size="small" />
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <Icon name="selectDesc" size="small" />
                                ) : (
                                  <Icon name="selectAsc" size="small" />
                                )
                              ) : (
                                ''
                              )}
                            </div>
                          )}
                        </th>
                      );
                    },
                  )}
                </tr>
              );
            })}
          </thead>
        )}
        <tbody className="b-Table-body">
          {instance.rows?.map((row: Row<T>) => {
            instance.prepareRow && instance.prepareRow(row);
            const { key, ...rowProps } = row.getRowProps();
            return (
              <tr className="b-Table-row" key={key} {...rowProps}>
                {row.cells.map((cell: Cell<T, any>) => {
                  const { key, ...cellProps } = cell.getCellProps();

                  return (
                    <td className="b-Table-cell" key={key} {...cellProps}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </ScrollArea>
  );
};
