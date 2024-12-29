import { Grid, GridCol } from "@mantine/core";
import { Stats } from "./components/stats";
import { Segments } from "./components/segments";
import { DemoBarchart } from "./components/demo-barchart";

export function Dashboard() {
  return (
    <Grid>
      <GridCol span={{ base: 12 }}>
        <Stats />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <Segments />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <DemoBarchart />
      </GridCol>
    </Grid>
  );
}
