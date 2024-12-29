import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import classes from "./stats.module.css";

const data = [
  { title: "Revenue", value: "$13,456", diff: 34 },
  { title: "Profit", value: "$4,145", diff: -13 },
  { title: "Coupons usage", value: "745", diff: 18 },
];

export function Stats() {
  return (
    <Grid>
      {data.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
          <Grid.Col key={stat.title} span={{ base: 12, md: 4 }}>
            <Paper
              className={classes.container}
              p="md"
              radius="md"
              key={stat.title}
            >
              <Group justify="apart">
                <div>
                  <Text
                    c="dimmed"
                    tt="uppercase"
                    fw={700}
                    fz="xs"
                    className={classes.label}
                  >
                    {stat.title}
                  </Text>
                  <Text fw={700} fz="xl">
                    {stat.value}
                  </Text>
                </div>
                <ThemeIcon
                  color="gray"
                  variant="light"
                  style={{
                    color:
                      stat.diff > 0
                        ? "var(--mantine-color-teal-6)"
                        : "var(--mantine-color-red-6)",
                  }}
                  size={38}
                  radius="md"
                >
                  <DiffIcon size={28} stroke={1.5} />
                </ThemeIcon>
              </Group>
              <Text c="dimmed" fz="sm" mt="md">
                <Text
                  component="span"
                  c={stat.diff > 0 ? "teal" : "red"}
                  fw={700}
                >
                  {stat.diff}%
                </Text>{" "}
                {stat.diff > 0 ? "increase" : "decrease"} compared to last month
              </Text>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
