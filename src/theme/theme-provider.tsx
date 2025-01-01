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
      <ModalsProvider
        modalProps={{
          centered: true,
          padding: 0,
          shadow: "xs",
          size: "md",
          radius: "md",
        }}
      >
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}

export default ThemeProvider;
