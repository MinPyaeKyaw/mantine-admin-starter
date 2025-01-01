import { Button, Group } from "@mantine/core";
import { IconPlus, IconReportAnalytics, IconTrash } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import InvalidDeleteModal from "@components/modals/invalid-delete-modal";
import { RowSelectionState } from "@tanstack/react-table";
import CreateModal from "./create-modal";
import ConfirmDeleteModal from "@components/modals/confirm-delete-modal";

interface Props {
  selectedRows: RowSelectionState;
}

export function TableActions({ selectedRows }: Props) {
  const getSelectedRowIds = (): string[] => {
    return Object.keys(selectedRows);
  };

  const handleCreateClick = () =>
    modals.open({
      withCloseButton: false,
      children: <CreateModal />,
    });

  const handleConfirmDelete = () => {
    const rowIds = getSelectedRowIds();

    if (!rowIds.length) {
      modals.open({
        withCloseButton: false,
        children: <InvalidDeleteModal />,
      });
    } else {
      modals.open({
        withCloseButton: false,
        children: (
          <ConfirmDeleteModal
            rowIds={rowIds}
            onDelete={() => console.log("delete")}
            onCancel={() => console.log("cancel")}
          />
        ),
      });
    }
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
