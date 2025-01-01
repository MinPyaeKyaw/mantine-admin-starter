import { DataTable } from "@components/data-table/table";
import { Paper, Stack } from "@mantine/core";
import classes from "./table-view.module.css";
import { tableData } from "./mock-data/table-data";
import { columns } from "./components/columns";
import { useState } from "react";
import { TableActions } from "./components/table-actions";
import { TableFilters } from "./components/table-filters";
import { PageTitle } from "@components/ui/page-title";
import { RowSelectionState, SortingState } from "@tanstack/react-table";

export function TableViewPage() {
  const [paginationState, setPaginationState] = useState<PaginationType>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  console.log(rowSelection);

  return (
    <Stack>
      <PageTitle
        title="Sample CRUD Operations"
        description="Manage Create, Read, Update, and Delete operations with ease using this CRUD sample guide."
      />

      <Paper radius="md" className={classes.container}>
        <DataTable
          data={tableData}
          columns={columns}
          totalRowCount={tableData.length}
          onPaginationChange={setPaginationState}
          onSortingChange={setSorting}
          tableActions={<TableActions />}
          tableFilters={<TableFilters />}
          options={{
            state: {
              pagination: paginationState,
              sorting,
              rowSelection,
            },
            manualSorting: true,
            getRowId: (row) => row.id,
            onRowSelectionChange: setRowSelection,
          }}
          highlightOnHover
          verticalSpacing="sm"
        />
      </Paper>
    </Stack>
  );
}
