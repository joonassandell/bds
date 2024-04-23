import {
  type Column,
  type TableInstance,
  type TableOptions,
  type UseFiltersColumnProps,
} from 'react-table';
import { type DebouncedInputProps } from '../DebouncedInput';
import { type MouseEvent, type PropsWithChildren, type ReactNode } from 'react';
import { type SelectProps } from '../Select';

export interface TableProps<T extends object> {
  /**
   * Align last column to the table end.
   */
  alignLastColumnEnd?: boolean;

  /**
   * Add `allColumns` from the `useTable` instance you've created. Mandatory when using hidden columns.
   * Only available if `data` isn't added.
   */
  allColumns?: TableInstance<T>['allColumns'];

  /**
   * Display border under each column.
   */
  border?: boolean;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Memoized columns w/ `useMemo`.
   */
  columns: Column<T>[];

  /**
   * Column widths in array like `[1, 2, '20%', 'minmax(5rem, 10%)']` to change
   * each columns width. Make sure the the array length equals the the amount
   * of columns you have. Higher number means wider column width. Uses CSS grid
   * under the hood. By default widhts are equal.
   */
  columnsWidth?: Array<number | string>;

  /**
   * Memoized data w/ `useMemo`.
   * Do not use data if you need to use filtering; create your own table instance instead w/
   * `getTableProps`, `prepareRow`, `headerGroups` and `rows`.
   * If you add data, Table assumes that you aren't creating the table instance in your component.
   */
  data?: T[];

  /**
   * Add `getTableProps` from the `useTable` instance you've created.
   * Only available if `data` isn't added.
   */
  getTableProps?: TableInstance<T>['getTableProps'];

  /**
   * Add `headerGroups` from the `useTable` instance you've created.
   * Only available if `data` isn't added.
   */
  headerGroups?: TableInstance<T>['headerGroups'];

  /**
   * Hide the header.
   */
  hideHeader?: boolean;

  /**
   * When using automatic pagination, pass `page` from the useTable instance
   * you've created, instead of `rows`. Only available if `data` isn't added.
   */
  page?: TableInstance<T>['rows'];

  /**
   * Add `prepareRow` from the `useTable` instance you've created.
   * Only available if `data` isn't added.
   */
  prepareRow?: TableInstance<T>['prepareRow'];

  /**
   * Add `rows` from the `useTable` instance you've created.
   * Only available if `data` isn't added.
   */
  rows?: TableInstance<T>['rows'];

  /**
   * Applies useSortBy hook. You can customize the sorting with table options.
   * https://react-table.tanstack.com/docs/api/useSortBy#table-options
   * Note: Don't conditionally change this in consumer application.
   */
  sort?: boolean;

  /**
   * https://react-table.tanstack.com/docs/api/useSortBy#table-options
   * Only available if `data` is added.
   */
  tableOptions?: TableOptions<T>;
}

export interface TableCellNameProps {
  href?: string;
  name: string;
  onClick?: (e: MouseEvent) => void;
  target?: '_blank' | '_self';
}

export interface TableCellButtonProps extends PropsWithChildren {
  buttons?: ReactNode[];
}

export type TableMultiSelectFilterProps<T extends object> = SelectProps & {
  column: UseFiltersColumnProps<T> & Column<T> & { header: string };
  /**
   * Sorting function for two elements in the target column (optional).
   * @param a Rendered value of the column for a row.
   * @param b Rendered value of the column for another row.
   * @returns
   */
  sortFn?: (a: string | number, b: string | number) => number;
};

export interface TableTextFilterProps<T extends object>
  extends Omit<DebouncedInputProps, 'id' | 'initialValue' | 'onChange'> {
  column: UseFiltersColumnProps<T> & Column<T> & { header: string };
}

export type ColumnAdditionalProps = {
  canSort?: boolean;
  disableSortBy?: boolean;
  getSortByToggleProps?: any;
  header?: (() => ReactNode) | ReactNode;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  suffix?: (() => ReactNode) | ReactNode;
};

export type TableColumn<T extends object> = Column<T> & ColumnAdditionalProps;
