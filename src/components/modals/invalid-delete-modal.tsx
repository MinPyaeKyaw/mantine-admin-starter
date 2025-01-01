import { Button, Stack, Title, Text, Group } from "@mantine/core";
import { modals } from "@mantine/modals";

function InvalidDeleteModal() {
  return (
    <Stack p="md">
      <Title order={3}>Please select at least one row!</Title>

      <Text size="sm">
        You need to select at least one row to perform this task.
      </Text>

      <Group justify="flex-end" gap="sm">
        <Button variant="default" onClick={() => modals.closeAll()}>
          Cancel
        </Button>
        <Button onClick={() => modals.closeAll()}>OK</Button>
      </Group>
    </Stack>
  );
}

export default InvalidDeleteModal;
