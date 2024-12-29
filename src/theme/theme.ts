import { Loader as RingLoader } from "@components/ui/loader";
import { createTheme, Loader } from "@mantine/core";

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.59,
  colors: {
    // Add your color
    primary: [
      "#f7ecff",
      "#e7d6fb",
      "#caaaf1",
      "#ac7ce8",
      "#9354e0",
      "#833bdb",
      "#7b2eda",
      "#6921c2",
      "#5d1cae",
      "#501599",
    ],
    // or replace default theme color
    blue: [
      "#f7ecff",
      "#e7d6fb",
      "#caaaf1",
      "#ac7ce8",
      "#9354e0",
      "#833bdb",
      "#7b2eda",
      "#6921c2",
      "#5d1cae",
      "#501599",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
  },

  components: {
    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },
    PasswordInput: { defaultProps: { radius: "md" } },
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Loader: {
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: "ring",
      },
    },
  },
});

export default theme;
