import { ActionIcon, Group, Text, Tooltip } from "@mantine/core";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { Column } from "@tanstack/react-table";

interface Props<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function ColHeader<TData, TValue>({
  column,
  title,
}: Props<TData, TValue>) {
  return (
    <Group w="100%" gap="xs">
      <Text size="sm" fw="bold">
        {title}
      </Text>

      {column.getCanSort() && column.getIsSorted() === "desc" ? (
        <Tooltip label="asc">
          <ActionIcon
            onClick={() => column.toggleSorting(false)}
            size="xs"
            variant="subtle"
            aria-label="Settings"
          >
            <IconArrowUp size={12} />
          </ActionIcon>
        </Tooltip>
      ) : (
        <Tooltip label="desc">
          <ActionIcon
            onClick={() => column.toggleSorting(true)}
            size="xs"
            variant="subtle"
            aria-label="Settings"
          >
            <IconArrowDown size={12} />
          </ActionIcon>
        </Tooltip>
      )}
    </Group>
  );
}
