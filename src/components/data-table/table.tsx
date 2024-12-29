import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  TableOptions,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Box, ScrollArea, Table, TableProps } from "@mantine/core";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Toolbar } from "./toolbar";
import clsx from "clsx";
import classes from "./table.module.css";
import { TableNoRecord } from "./table-no-record";
import TableLoading from "./table-loading";

interface Props {
  data: any;
  columns: any;
  totalRowCount: number;
  tableActions?: ReactNode;
  tableFilters?: ReactNode;
  isLoading?: boolean;
  onPaginationChange: Dispatch<SetStateAction<PaginationType>>;
  options?: Omit<
    TableOptions<any>,
    | "getCoreRowModel"
    | "data"
    | "columns"
    | "getPaginationRowModel"
    | "rowCount"
  >;
}

export function DataTable({
  data,
  columns = [],
  totalRowCount,
  tableActions,
  tableFilters,
  isLoading = false,
  onPaginationChange,
  options,
  ...props
}: Props & TableProps) {
  const table = useReactTable({
    data,
    columns,
    rowCount: totalRowCount,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange,
    ...options,
  });

  console.log("sorting", table.getState().sorting);

  return (
    <Box>
      <Toolbar
        tableActions={tableActions}
        tableFilters={tableFilters}
        table={table}
        totalRowCount={totalRowCount}
        disablePagination={data.length === 0 || isLoading}
        onPaginationChange={onPaginationChange}
      />

      <ScrollArea
        w={{
          base: "calc(100vw - 30px)",
          md: "calc(100vw - 300px)",
        }}
        mah={{
          base: "calc(100vh - 200px)",
        }}
      >
        <Table miw={700} {...props}>
          <Table.Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <Table.Th
                    key={header.id}
                    className={clsx(
                      header.column.getIsPinned() && classes.pinned,
                      header.column.getIsPinned() === "left" &&
                        classes.leftPinnedCol,
                      header.column.getIsPinned() === "right" &&
                        classes.rightPinnedCol
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Thead>

          <Table.Tbody>
            {isLoading ? (
              <Table.Tr>
                <Table.Td p={0} colSpan={table.getVisibleLeafColumns().length}>
                  <TableLoading />
                </Table.Td>
              </Table.Tr>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <Table.Tr key={row.id}>
                  {row.getVisibleCells().map((cell: any) => (
                    <Table.Td
                      key={cell.id}
                      className={clsx(
                        cell.column.getIsPinned() && classes.pinned,
                        cell.column.getIsPinned() === "left" &&
                          classes.leftPinnedCol,
                        cell.column.getIsPinned() === "right" &&
                          classes.rightPinnedCol
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td p={0} colSpan={table.getVisibleLeafColumns().length}>
                  <TableNoRecord />
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
}
