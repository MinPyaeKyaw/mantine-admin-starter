import { ActionIcon, Group, Tooltip } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconEdit, IconEyeSearch, IconTrash } from "@tabler/icons-react";
import UpdateModal from "./update.modal";
import ConfirmDeleteModal from "@components/modals/confirm-delete-modal";
import { DetailModal } from "./detail-modal";

interface Props {
  row: User;
}

export function RowActions({ row }: Props) {
  const handleUpdateClick = () =>
    modals.open({
      withCloseButton: false,
      children: <UpdateModal data={row} />,
    });

  const handleDeleteClick = () =>
    modals.open({
      withCloseButton: false,
      children: (
        <ConfirmDeleteModal
          rowIds={["rowIds"]}
          description="This data will be deleted parmentently."
          onDelete={() => console.log("delete")}
          onCancel={() => console.log("cancel")}
        />
      ),
    });

  const handleDetailClick = () =>
    modals.open({
      withCloseButton: false,
      size: "lg",
      children: <DetailModal data={row} />,
    });

  return (
    <Group>
      <Tooltip label="Details" radius="md">
        <ActionIcon onClick={handleDetailClick} variant="light" size="sm">
          <IconEyeSearch size={12} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Edit" radius="md">
        <ActionIcon onClick={handleUpdateClick} variant="light" size="sm">
          <IconEdit size={12} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Delete" radius="sm">
        <ActionIcon
          onClick={handleDeleteClick}
          variant="light"
          c="red"
          size="sm"
        >
          <IconTrash size={12} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
