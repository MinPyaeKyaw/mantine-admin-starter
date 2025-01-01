import { Button, Group, Paper, Stack, Title, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

interface Props {
  rowIds: string[];
  description?: string;
  title?: string;
  onDelete: () => void;
  onCancel: () => void;
}

function ConfirmDeleteModal({
  rowIds,
  title,
  description,
  onCancel,
  onDelete,
}: Props) {
  console.log(rowIds);

  const handleCancel = () => {
    if (onCancel) onCancel();
    modals.closeAll();
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
    modals.closeAll();
  };

  return (
    <Paper radius="md" p="md">
      <Stack>
        <Title c="red" order={3}>
          {title || "Are you sure?"}
        </Title>

        <Text size="sm">
          {description || "All these data will be deleted parmentently."}
        </Text>

        <Group mt="md" justify="flex-end">
          <Button
            onClick={handleCancel}
            type="button"
            variant="default"
            radius="md"
          >
            Cancel
          </Button>

          <Button color="red" onClick={handleDelete} type="button" radius="md">
            Delete
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

export default ConfirmDeleteModal;
