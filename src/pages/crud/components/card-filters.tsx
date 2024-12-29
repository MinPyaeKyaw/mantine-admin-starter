import { Button, Group } from "@mantine/core";
import {
  IconArrowsDownUp,
  IconPlus,
  IconReportAnalytics,
  IconTrash,
} from "@tabler/icons-react";
import classes from "./card-filters.module.css";

export function CardFilters() {
  return (
    <Group>
      <Button
        variant="default"
        size="xs"
        leftSection={<IconArrowsDownUp size={15} />}
        className={classes.filter}
      >
        Sort
      </Button>

      <Button
        variant="default"
        size="xs"
        leftSection={<IconReportAnalytics size={15} />}
        className={classes.filter}
      >
        Report
      </Button>

      <Button
        variant="default"
        size="xs"
        leftSection={<IconTrash size={15} />}
        className={classes.filter}
      >
        Delete
      </Button>

      <Button
        variant="default"
        size="xs"
        leftSection={<IconPlus size={15} />}
        className={classes.filter}
      >
        Create
      </Button>
    </Group>
  );
}
