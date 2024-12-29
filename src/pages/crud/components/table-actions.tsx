import { Button, Group } from "@mantine/core";
import { IconPlus, IconReportAnalytics, IconTrash } from "@tabler/icons-react";

export function TableActions() {
  return (
    <Group>
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
