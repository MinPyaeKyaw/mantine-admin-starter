import { Button, Group } from "@mantine/core";
import { IconPlus, IconReportAnalytics, IconTrash } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import CreateModal from "./create-modal";
import InvalidDeleteModal from "@components/modals/invalid-delete-modal";

export function TableActions() {
  const handleCreateClick = () =>
    modals.open({
      withCloseButton: false,
      children: <CreateModal />,
    });

  const handleConfirmDelete = () => {
    modals.open({
      withCloseButton: false,
      children: <InvalidDeleteModal />,
    });
  };

  return (
    <Group gap="xs">
      <Button
        variant="default"
        size="xs"
        leftSection={<IconReportAnalytics size={15} />}
      >
        Report
      </Button>

      <Button
        onClick={handleConfirmDelete}
        variant="default"
        size="xs"
        leftSection={<IconTrash size={15} />}
      >
        Delete
      </Button>

      <Button
        onClick={handleCreateClick}
        variant="default"
        size="xs"
        leftSection={<IconPlus size={15} />}
      >
        Create
      </Button>
    </Group>
  );
}
