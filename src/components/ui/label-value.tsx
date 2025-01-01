import { Flex, Text } from "@mantine/core";

interface Props {
  label: string;
  value: string;
  direction?: "horizontal" | "vertical";
}

export function LabelValue({ label, value, direction = "horizontal" }: Props) {
  return (
    <Flex direction={direction === "vertical" ? "column" : "row"}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
}
