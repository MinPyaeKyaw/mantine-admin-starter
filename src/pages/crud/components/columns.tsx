import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";
import { Checkbox } from "@mantine/core";

export const columns: ColumnDef<User>[] = [
  {
    id: "select-col",
    header: ({ table }) => (
      <Checkbox
        size="xs"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        size="xs"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    id: "firstName",
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    id: "age",
    accessorKey: "age",
    header: "Age",
  },
  {
    id: "visits",
    accessorKey: "visits",
    header: "Visits",
  },
  {
    id: "progress",
    accessorKey: "progress",
    header: "Progress",
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => <RowActions />,
  },
];
