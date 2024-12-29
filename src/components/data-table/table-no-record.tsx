import { Text, Group } from "@mantine/core";
import { IconNoteOff } from "@tabler/icons-react";
import classes from "./table-no-record.module.css";

export function TableNoRecord() {
  return (
    <Group
      align="center"
      justify="center"
      h="calc(100vh - 200px)"
      className={classes.noRecord}
    >
      <IconNoteOff size={18} color="gray" />
      <Text size="sm" ta="center" c="gray">
        No Record
      </Text>
    </Group>
  );
}
