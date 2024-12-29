import {
  Box,
  Group,
  Pagination,
  Collapse,
  Button,
  Text,
  Stack,
  Checkbox,
} from "@mantine/core";
import {
  IconArrowsDownUp,
  IconChevronDown,
  IconSelector,
} from "@tabler/icons-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
// import { ColVisibleSelect } from "./col-visible-select";
import classes from "./toolbar.module.css";
import { useDisclosure } from "@mantine/hooks";
import { CustomDropdownSelect } from "@components/modals/custom-dropdown-select";

interface Props {
  tableActions?: ReactNode;
  tableFilters?: ReactNode;
  table: any;
  totalRowCount: number;
  disablePagination?: boolean;
  onPaginationChange: Dispatch<SetStateAction<PaginationType>>;
}

export function Toolbar({
  tableActions,
  tableFilters,
  table,
  totalRowCount,
  disablePagination = false,
  onPaginationChange,
}: Props) {
  const [actionOpened, { toggle: actionToggle }] = useDisclosure(false);
  const [filterOpened, { toggle: filterToggle }] = useDisclosure(false);

  return (
    <>
      <Box px="sm" pt="sm">
        <Group justify="space-between">
          <Group>
            <Group
              className={classes.tableAction}
              gap={3}
              onClick={actionToggle}
            >
              <Text size="sm">Table actions</Text>
              <IconChevronDown
                size={15}
                stroke={1.5}
                className={classes.chevron}
                style={{ transform: actionOpened ? "rotate(-180deg)" : "none" }}
              />
            </Group>

            <Group
              className={classes.tableAction}
              gap={3}
              onClick={filterToggle}
            >
              <Text size="sm">Filters</Text>
              <IconChevronDown
                size={15}
                stroke={1.5}
                className={classes.chevron}
                style={{ transform: filterOpened ? "rotate(-180deg)" : "none" }}
              />
            </Group>
          </Group>

          <Pagination
            disabled={disablePagination}
            value={table.getState().pagination.pageIndex || 1}
            total={totalRowCount / table.getState().pagination.pageSize}
            onChange={(e) =>
              onPaginationChange((prev) => ({ ...prev, pageIndex: e }))
            }
            radius="md"
            size="sm"
          />
        </Group>
      </Box>

      <Collapse in={actionOpened}>
        <Group p="sm" mt="sm" gap="sm" className={classes.actions}>
          {tableActions}

          <CustomDropdownSelect
            triggerCmp={
              <Button
                variant="default"
                size="xs"
                leftSection={<IconArrowsDownUp size={15} />}
              >
                Sort
              </Button>
            }
            dropdownCmp={
              <Stack>
                {table.getAllColumns().map((column: any) => {
                  return (
                    <Box key={column.id} className={classes.column}>
                      <Checkbox
                        size="xs"
                        label={
                          typeof column.columnDef.header === "string"
                            ? column.columnDef.header
                            : "Selector"
                        }
                        onChange={column.getToggleVisibilityHandler()}
                        checked={column.getIsVisible()}
                      />
                    </Box>
                  );
                })}
              </Stack>
            }
          />

          <CustomDropdownSelect
            triggerCmp={
              <Button
                variant="default"
                size="xs"
                leftSection={<IconSelector size={14} />}
              >
                Columns
              </Button>
            }
            dropdownCmp={
              <Stack>
                {table.getAllColumns().map((column: any) => {
                  return (
                    <Box key={column.id} className={classes.column}>
                      <Checkbox
                        size="xs"
                        label={
                          typeof column.columnDef.header === "string"
                            ? column.columnDef.header
                            : "Selector"
                        }
                        onChange={column.getToggleVisibilityHandler()}
                        checked={column.getIsVisible()}
                      />
                    </Box>
                  );
                })}
              </Stack>
            }
          />
        </Group>
      </Collapse>

      <Collapse in={filterOpened}>
        <Group p="sm" mt="sm" gap="sm" className={classes.actions}>
          {tableFilters}
        </Group>
      </Collapse>
    </>
  );
}