import { Box, Button, Checkbox, Popover, Stack } from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";
import classes from "./col-visible-select.module.css";

interface Props {
  cols: any;
}

export function ColVisibleSelect({ cols }: Props) {
  return (
    <Popover width="target" trapFocus position="bottom">
      <Popover.Target>
        <Button
          variant="default"
          size="xs"
          leftSection={<IconSelector size={14} />}
        >
          Columns
        </Button>
      </Popover.Target>

      <Popover.Dropdown p={4}>
        <Stack gap={0}>
          {cols.map((column: any) => (
            <Box key={column.id} className={classes.column}>
              <Checkbox
                size="xs"
                label={column.columnDef.header}
                onChange={column.getToggleVisibilityHandler()}
                checked={column.getIsVisible()}
              />
            </Box>
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
