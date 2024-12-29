import { Button, Group, TextInput } from "@mantine/core";
import {
  IconPlus,
  IconReportAnalytics,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";

export function TableFilters() {
  return (
    <Group>
      <TextInput
        size="xs"
        placeholder="Search..."
        leftSection={<IconSearch size={15} />}
      />

      <Button
        variant="default"
        size="xs"
        leftSection={<IconReportAnalytics size={15} />}
      >
        Report
      </Button>

      <Button variant="default" size="xs" leftSection={<IconTrash size={15} />}>
        Delete
      </Button>

      <Button variant="default" size="xs" leftSection={<IconPlus size={15} />}>
        Create
      </Button>
    </Group>
  );
}
