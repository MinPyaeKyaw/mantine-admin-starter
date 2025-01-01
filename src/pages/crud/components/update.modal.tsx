import {
  Button,
  Group,
  NumberInput,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { createSchema } from "../schemas/create";
import { modals } from "@mantine/modals";

interface Props {
  data: User;
}

function UpdateModal({ data }: Props) {
  const form = useForm({
    initialValues: data,

    validate: zodResolver(createSchema),
  });

  return (
    <Paper radius="md" p="md">
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <Title order={3}>Sample Update Form</Title>

          <TextInput
            required
            label="First Name"
            placeholder="First Name"
            {...form.getInputProps("firstName")}
          />

          <TextInput
            required
            label="Last Name"
            placeholder="Last Name"
            {...form.getInputProps("lastName")}
          />

          <NumberInput
            required
            label="Age"
            placeholder="Age"
            {...form.getInputProps("age")}
          />

          <NumberInput
            required
            label="Visits"
            placeholder="Visits"
            {...form.getInputProps("visits")}
          />

          <NumberInput
            required
            label="Progress"
            placeholder="Progress"
            {...form.getInputProps("progress")}
          />
        </Stack>

        <Group mt="md" justify="flex-end">
          <Button
            onClick={() => modals.closeAll()}
            type="button"
            variant="default"
            radius="md"
          >
            Cancel
          </Button>

          <Button type="submit" radius="md">
            Update
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

export default UpdateModal;
