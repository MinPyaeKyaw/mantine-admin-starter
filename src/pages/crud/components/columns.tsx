import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";
import { Checkbox, Text } from "@mantine/core";
import { ColHeader } from "@components/data-table/col-header";

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
    meta: {
      title: "Checkbox",
    },
  },
  {
    id: "firstName",
    accessorKey: "firstName",
    header: ({ column }) => <ColHeader column={column} title="First Name" />,
    cell: ({ row }: any) => <Text size="sm">{row.getValue("firstName")}</Text>,
    meta: {
      title: "First Name",
    },
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    header: ({ column }) => <ColHeader column={column} title="Last Name" />,
    meta: {
      title: "Last Name",
    },
  },
  {
    id: "age",
    accessorKey: "age",
    header: ({ column }) => <ColHeader column={column} title="Age" />,
    meta: {
      title: "Age",
    },
  },
  {
    id: "visits",
    accessorKey: "visits",
    header: ({ column }) => <ColHeader column={column} title="Visits" />,
    meta: {
      title: "Visits",
    },
  },
  {
    id: "progress",
    accessorKey: "progress",
    header: ({ column }) => <ColHeader column={column} title="Progress" />,
    meta: {
      title: "Progress",
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <RowActions row={row.original} />,
    meta: {
      title: "Actions",
    },
  },
];
