import { BarChart } from "@mantine/charts";
import { demoBarchartData } from "../mock-data/demo-barchart";
import { Paper } from "@mantine/core";
import classes from "./demo-barchart.module.css";

export function DemoBarchart() {
  return (
    <Paper className={classes.container} p="md" radius="md">
      <BarChart
        h={300}
        data={demoBarchartData}
        dataKey="month"
        series={[
          { name: "Smartphones", color: "violet.6" },
          { name: "Laptops", color: "blue.6" },
          { name: "Tablets", color: "teal.6" },
        ]}
        legendProps={{ verticalAlign: "bottom" }}
        tickLine="x"
      />
    </Paper>
  );
}
