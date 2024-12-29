import { Group, Loader } from "@mantine/core";
import classes from "./table-loading.module.css";

function TableLoading() {
  return (
    <Group
      align="center"
      justify="center"
      h="calc(100vh - 200px)"
      className={classes.loading}
    >
      <Loader />
    </Group>
  );
}

export default TableLoading;
