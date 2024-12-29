import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import router from "@configs/routes";
import ThemeProvider from "@theme/theme-provider";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
