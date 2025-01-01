import { LabelValue } from "@components/ui/label-value";
import { Divider, Paper, SimpleGrid, Title } from "@mantine/core";

interface Props {
  data: User;
}

export function DetailModal({ data }: Props) {
  return (
    <Paper radius="md" p="md">
      <Title order={3} mb="sm">
        Information Details
      </Title>

      <Divider />

      <SimpleGrid spacing="sm" mt="sm">
        <LabelValue label="ID" value={data.id} direction="vertical" />
        <LabelValue
          label="First Name"
          value={data.firstName}
          direction="vertical"
        />
        <LabelValue
          label="Last Name"
          value={data.lastName}
          direction="vertical"
        />
        <LabelValue
          label="Age"
          value={data.age.toString()}
          direction="vertical"
        />
        <LabelValue
          label="Visits"
          value={data.visits.toString()}
          direction="vertical"
        />
        <LabelValue
          label="Progress"
          value={data.progress.toString()}
          direction="vertical"
        />
      </SimpleGrid>
    </Paper>
  );
}
