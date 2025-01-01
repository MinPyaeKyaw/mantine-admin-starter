import { Popover } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  triggerCmp: ReactNode;
  dropdownCmp: ReactNode;
}

export function CustomDropdownSelect({ triggerCmp, dropdownCmp }: Props) {
  return (
    <Popover width={200} position="bottom-start" trapFocus radius="md">
      <Popover.Target>{triggerCmp}</Popover.Target>
      <Popover.Dropdown>{dropdownCmp}</Popover.Dropdown>
    </Popover>
  );
}
