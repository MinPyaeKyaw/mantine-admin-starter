import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode } from "react";
import theme from "./theme";

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: Props) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}

export default ThemeProvider;
