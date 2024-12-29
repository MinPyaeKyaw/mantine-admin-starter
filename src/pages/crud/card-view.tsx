import { PageTitle } from "@components/ui/page-title";
import { Grid, Group, Pagination, Stack } from "@mantine/core";
import { UserCard } from "./components/user-card";
import { CardFilters } from "./components/card-filters";
import { tableData } from "./mock-data/table-data";

export function CardViewPage() {
  return (
    <Stack>
      <PageTitle
        title="Sample CRUD Operations"
        description="Manage Create, Read, Update, and Delete operations with ease using this CRUD sample guide."
      />

      <Group justify="space-between">
        <CardFilters />

        <Pagination size="sm" radius="md" total={10} />
      </Group>

      <Grid w="100%">
        {tableData.map((user, i) => (
          <Grid.Col key={i} span={4}>
            <UserCard user={user} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
