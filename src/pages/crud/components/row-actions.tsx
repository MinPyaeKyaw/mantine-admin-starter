import { ActionIcon, Group, Tooltip } from "@mantine/core";
import { IconEdit, IconEyeSearch, IconTrash } from "@tabler/icons-react";

export function RowActions() {
  return (
    <Group>
      <Tooltip label="Details" radius="md">
        <ActionIcon variant="light" size="sm">
          <IconEyeSearch size={12} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Edit" radius="md">
        <ActionIcon variant="light" size="sm">
          <IconEdit size={12} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Delete" radius="sm">
        <ActionIcon variant="light" c="red" size="sm">
          <IconTrash size={12} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
