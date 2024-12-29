import { Card, Group, Title, Text, Stack, ThemeIcon } from "@mantine/core";
import {
  IconActivity,
  IconHeartSpark,
  IconOld,
  IconUser,
} from "@tabler/icons-react";

interface Props {
  user: User;
}

export function UserCard({ user }: Props) {
  return (
    <Card padding="md" radius="md">
      <Stack>
        <Title order={3}>{`${user.firstName} ${user.lastName}`}</Title>

        <Group gap="lg">
          <Group gap="xs">
            <ThemeIcon variant="light" c="primary" size="sm">
              <IconOld size={13} />
            </ThemeIcon>
            <Text size="sm">Age: {user.age}</Text>
          </Group>

          <Group gap="xs">
            <ThemeIcon variant="light" c="primary" size="sm">
              <IconHeartSpark size={13} />
            </ThemeIcon>
            <Text size="sm">Status: {user.status}</Text>
          </Group>
        </Group>

        <Group gap="lg">
          <Group gap="xs">
            <ThemeIcon variant="light" c="primary" size="sm">
              <IconActivity size={18} />
            </ThemeIcon>
            <Text size="sm">Visits: {user.visits}</Text>
          </Group>

          <Group gap="xs">
            <ThemeIcon variant="light" c="primary" size="sm">
              <IconUser size={18} />
            </ThemeIcon>
            <Text size="sm">First Name: Tanner</Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}
