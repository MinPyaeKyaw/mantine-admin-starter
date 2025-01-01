import { Button, Group, Paper, Stack, Title, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

function ConfirmDeleteModal() {
  return (
    <Paper radius="md" p="md">
      <Stack>
        <Title c="red" order={3}>
          Are you sure?
        </Title>

        <Text size="sm">All these data will be deleted parmentently.</Text>

        <Group mt="md" justify="flex-end">
          <Button
            onClick={() => modals.closeAll()}
            type="button"
            variant="default"
            radius="md"
          >
            Cancel
          </Button>

          <Button
            color="red"
            onClick={() => modals.closeAll()}
            type="button"
            radius="md"
          >
            Delete
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

export default ConfirmDeleteModal;
