import { Stack, Title, Text } from "@mantine/core";

interface Props {
  title: string;
  description?: string;
}

export function PageTitle({ title, description }: Props) {
  return (
    <Stack gap="xs">
      <Title order={2}>{title}</Title>
      {description && <Text size="sm">{description}</Text>}
    </Stack>
  );
}
