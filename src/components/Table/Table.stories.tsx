import { Badge } from '../Badge';
import { Button } from '../Button';
import { type Column, useFilters, useSortBy, useTable } from 'react-table';
import { type Meta, type StoryObj } from '@storybook/react';
import { Progress } from '../Progress';
import { StackedBar } from '../StackedBar';
import {
  Table,
  TableCellButton,
  TableCellName,
  TableFilters,
  tableFilterTypes,
  TableMultiSelectFilter,
  TableTextFilter,
} from './';
import dissocPath from 'ramda/es/dissocPath';
import path from 'ramda/es/path';
import React, { type MouseEvent, useMemo } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    componentSubtitle:
      'Table component is used to organize and display data efficiently. It renders a `<table>` element.',
    docs: {
      description: {
        component:
          'This component uses `react-table` under the hood. View <a href="https://tanstack.com/table/v8" target="_blank">react-table</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    TableCellButton,
    TableCellName,
    TableFilters,
    TableMultiSelectFilter,
    TableTextFilter,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Data display/Table',
};

export default meta;

type Story = StoryObj<typeof Table>;

export const TableComponent: Story & any = {
  args: {
    columns: [
      {
        accessor: 'stage',
        header: 'Stage',
      },
      {
        accessor: 'amount',
        header: 'Amount',
        suffix: '(kg)',
      },
      {
        Cell: function Cell(value: any) {
          const { percent } = value.row.original;
          return <>{percent} %</>;
        },
        accessor: 'percent',
        header: 'Share',
        suffix: '(%)',
      },
    ],
    columnsWidth: [2, 1, 1],
    data: [
      {
        amount: '10',
        percent: '2.0',
        stage: 'Own wheat production',
      },
      {
        amount: '15',
        percent: '20.0',
        stage: 'Bought fodders',
      },
      {
        amount: '25',
        percent: '59.8',
        stage: 'Energy',
      },
      {
        amount: '5',
        percent: '17.3',
        stage: 'Manure',
      },
    ],
    sort: true,
    tableOptions: {
      initialState: {
        sortBy: [
          {
            desc: true,
            id: 'percent',
          },
        ],
      },
    },
  },
  name: 'Table',
  render: function Component({ data, columns, ...props }) {
    const memoData = useMemo(() => data, [data]);
    const memoColumns = useMemo(() => columns, [columns]);
    let memoSort;
    let restProps = props;
    const sortBy = path(['tableOptions', 'initialState', 'sortBy'], props);

    if (sortBy) {
      // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
      memoSort = useMemo(() => sortBy, []);
      restProps = dissocPath(['tableOptions', 'initialState', 'sortBy'], props);
    }

    return (
      <Table
        columns={memoColumns}
        data={memoData}
        {...{
          ...restProps,
          ...(sortBy && {
            tableOptions: {
              initialState: {
                ...restProps.tableOptions.initialState,
                sortBy: memoSort,
              },
            },
          }),
        }}
        sort={true}
      />
    );
  },
};

/* =======================================
 * Custom cells and filtering
 * ======================================= */

interface DataT {
  description: string;
  producerName: string;
  resultValue: string;
  rmName: string;
  totalAmount: string;
  year: number;
}

export const TableVersatile: Story = {
  name: 'Custom Cells & Filtering',
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how to create your own table instance w/ `getTableProps`, `prepareRow`, `headerGroups` and `rows`, which is needed if you need to use filtering. To use TableFilters you need to import Select component `@use '@biocode/ds/scss/Select';`",
      },
    },
  },
  render: function Component() {
    const memoData: DataT[] = useMemo(
      () => [
        {
          description: 'Joined the pilot group 1990',
          producerName: 'Producer 1',
          resultValue: '00.00',
          rmName: 'Pig® Slaughter pig',
          totalAmount: '0 animals',
          year: 2019,
        },
        {
          description: 'Project From field to table',
          producerName: 'Producer 2',
          resultValue: 'Pending',
          rmName: 'Raw material',
          totalAmount: '220 animals',
          year: 2020,
        },
      ],
      [],
    );

    const memoColumns: Column<DataT>[] = useMemo(
      () => [
        {
          Cell: function Cell(value: any) {
            const { producerName } = value.row.original;
            return (
              <TableCellName
                href="#"
                name={producerName}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                }}
              />
            );
          },
          Filter: TableMultiSelectFilter,
          accessor: 'producerName',
          filter: 'multiple',
          header: 'Producer name',
        },
        {
          Filter: TableMultiSelectFilter,
          accessor: 'year',
          filter: 'multiple',
          header: 'Year',
        },
        {
          Cell: function Cell(value: any) {
            const { rmName } = value.row.original;
            return (
              <TableCellButton
                buttons={[
                  <Button key="button" size="xSmall">
                    Overview
                  </Button>,
                ]}
              >
                {rmName}
              </TableCellButton>
            );
          },
          Filter: function (props) {
            return (
              <TableMultiSelectFilter
                noOptionsMessage={() => 'No raw materials…'}
                sortFn={(a: string, b: string) =>
                  (a ?? '').localeCompare(b ?? '') ?? 0
                }
                {...props}
              />
            );
          },
          accessor: 'rmName',
          filter: 'multiple',
          header: 'Raw material',
        },
        {
          Cell: function Cell(value: any) {
            const { resultValue } = value.row.original;
            const hasValue = !isNaN(resultValue);

            return hasValue ? (
              <TableCellButton
                buttons={[
                  <Button href="#" key="button" size="xSmall" target="blank">
                    Open
                  </Button>,
                ]}
              >
                {resultValue}
                {!hasValue && <Badge variant="warning">{resultValue}</Badge>}
              </TableCellButton>
            ) : (
              <Badge variant="warning">{resultValue}</Badge>
            );
          },
          accessor: 'resultValue',
          disableFilters: true,
          header: 'Status',
        },
        {
          accessor: 'totalAmount',
          disableFilters: true,
          header: 'Quantity',
        },
        {
          Filter: function (props) {
            return (
              <TableTextFilter
                column={props?.column}
                placeholder="Part of description"
              />
            );
          },
          accessor: 'description',
          filter: 'text',
          header: 'Description',
        },
      ],
      [],
    );
    const filterTypes = useMemo(() => tableFilterTypes, []);
    const memoSort = useMemo(
      () => [
        {
          desc: true,
          id: 'year',
        },
      ],
      [],
    );

    const { allColumns, headerGroups, rows, prepareRow, getTableProps } =
      useTable(
        {
          columns: memoColumns,
          data: memoData,
          filterTypes,
          initialState: {
            // @ts-ignore
            sortBy: memoSort,
          },
        },
        useFilters,
        useSortBy,
      );

    return (
      <>
        {allColumns && <TableFilters allColumns={allColumns} />}
        <Table
          columns={memoColumns}
          columnsWidth={[1.25, 0.5, 1.5, 1, 1, 1]}
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          prepareRow={prepareRow}
          rows={rows}
        />
      </>
    );
  },
};

/* =======================================
 * With stacked bar
 * ======================================= */

export const TableWithStackedBar: Story = {
  ...TableComponent,
  args: {
    columns: [
      {
        accessor: 'farm',
        header: 'Farm',
      },
      {
        Cell: function Cell(value: any) {
          return (
            <StackedBar
              data={{ ...value.row.original }}
              keys={[
                'manure',
                'energy',
                'fertilizers',
                'dummy',
                'dummy1',
                'dummy2',
                'dummy3',
                'dummy4',
                'dummy5',
                'dummy6',
                'dummy7',
                'dummy8',
                'dummy9',
                'dummy10',
              ]}
              labels={{
                energy: 'Energies',
                fertilizers: 'Fertilizers',
                manure: 'Manures',
              }}
              unit="kg CO₂e / kg"
            />
          );
        },
        accessor: 'details',
        disableSortBy: true,
        header: 'Details',
      },
    ],
    columnsWidth: [1, 3],
    data: [
      {
        dummy: 100,
        dummy10: 100,
        dummy2: 100,
        dummy3: 100,
        dummy4: 100,
        dummy5: 100,
        dummy6: 100,
        dummy7: 100,
        dummy8: 100,
        dummy9: 100,
        energy: 84,
        farm: 'Farm name',
        fertilizers: 92,
        manure: 127,
      },
      {
        energy: 50,
        farm: 'Another farm',
        fertilizers: 40,
        manure: 10,
      },
    ],
  },
  name: 'With Stacked Bar',
};

/* =======================================
 * With progress
 * ======================================= */

export const TableWithProgress: Story = {
  ...TableComponent,
  args: {
    columns: [
      { accessor: 'inventory', header: 'Inventory' },
      { accessor: 'partialFootprint', header: 'Partial Footprint' },
      {
        Cell: (value: any) => <Progress percent={value.value} />,
        accessor: 'share',
        header: 'Share',
      },
    ],
    data: [
      { inventory: 'Seeds', partialFootprint: 3.99, share: 5 },
      {
        inventory: 'Inorganic fertilisers',
        partialFootprint: 2.91,
        share: 3.6,
      },
      { inventory: 'Total', partialFootprint: 6.9, share: 4 },
    ],
  },
  name: 'With Progress',
};

/* =======================================
 * Table with hidden column
 * ======================================= */

export const TableWithHiddenColumn: Story = {
  name: 'Hidden Columns with Filtering',
  parameters: {
    docs: {
      description: {
        story: 'This table shows you how to use hidden columns with filters.',
      },
    },
  },
  render: function Component() {
    const memoData = useMemo(
      () => [
        {
          city: 'Helsinki',
          favourite: 'Star wars',
          isDeleted: false,
          name: 'Anna',
          phone: '050 123 4567',
        },
        {
          city: 'Helsinki',
          favourite: 'Star wars',
          isDeleted: false,
          name: 'Berta',
          phone: '040 123 4567',
        },
        {
          city: 'Rovaniemi',
          favourite: 'Finding Nemo',
          isDeleted: true,
          name: 'Cecilia',
          phone: '09 123 4567',
        },
        {
          city: 'London',
          favourite: 'Star wars',
          isDeleted: false,
          name: 'Dennis',
          phone: '',
        },
        {
          city: 'Helsinki',
          favourite: 'Avatar',
          isDeleted: true,
          name: 'Eetu',
          phone: '046 11 2222',
        },
        {
          city: 'London',
          favourite: 'Star wars',
          isDeleted: false,
          name: 'Felicia',
          phone: '050 222 1113',
        },
        {
          city: 'Turku',
          favourite: 'Avatar',
          isDeleted: false,
          name: 'Gary',
          phone: '09 332 6548',
        },
        {
          city: 'Ii',
          favourite: 'Star wars',
          isDeleted: true,
          name: 'Han',
          phone: '040 998 5676',
        },
      ],
      [],
    );

    const memoColumns = useMemo(
      () => [
        {
          Cell: function Cell(value: any) {
            const { name } = value.row.original;
            return (
              <TableCellName
                href="#"
                name={name}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                }}
              />
            );
          },
          Filter: function (props: any) {
            return (
              <TableMultiSelectFilter
                label="Name"
                placeholder="Select..."
                {...props}
              />
            );
          },
          accessor: 'name',
          filter: 'multiple',
          header: 'Name',
        },
        {
          accessor: 'phone',
          disableFilters: true,
          header: 'Phone',
        },
        {
          accessor: 'city',
          disableFilters: true,
          header: 'City',
        },
        // Hidden columns, only for filtering
        {
          Filter: function (props: any) {
            return (
              <TableMultiSelectFilter
                label="Active/Deleted"
                placeholder="Select..."
                {...props}
              />
            );
          },
          accessor: (originalRow: any) => {
            const { isDeleted } = originalRow;
            return isDeleted ? 'Deleted' : 'Active';
          },
          disableSortBy: true,
          filter: 'multiple',
          header: '',
          id: 'idIsDeleted',
        },
        // Hidden columns, only for filtering
        {
          Filter: function (props: any) {
            return (
              <TableMultiSelectFilter
                label="Favourite movie"
                placeholder="Select..."
                {...props}
              />
            );
          },
          accessor: 'favourite',
          disableSortBy: true,
          filter: 'multiple',
          header: '',
          id: 'idFavourite',
        },
      ],
      [],
    );

    const filterTypes = useMemo(() => tableFilterTypes, []);
    const memoSort = useMemo(
      () => [
        {
          desc: true,
          id: 'year',
        },
      ],
      [],
    );

    const { allColumns, headerGroups, rows, prepareRow, getTableProps } =
      useTable(
        {
          //@ts-ignore
          columns: memoColumns,
          data: memoData,
          filterTypes,
          initialState: {
            hiddenColumns: ['idIsDeleted', 'idFavourite'],
            //@ts-ignore
            sortBy: memoSort,
          },
        },
        useFilters,
        useSortBy,
      );

    return (
      <>
        {allColumns && <TableFilters allColumns={allColumns} />}
        <Table
          allColumns={allColumns}
          columns={[]}
          columnsWidth={[1.5, 1, 1]}
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          prepareRow={prepareRow}
          rows={rows}
        />
      </>
    );
  },
};
