import classes from "./dashboard-layout.module.css";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { Box } from "@mantine/core";

export function DashboardLayout() {
  return (
    <div className={classes.layout}>
      <Box visibleFrom="md" pos="fixed" top={0} left={0} w={270}>
        <Sidebar />
      </Box>

      <Box
        ml={{
          xs: 0,
          sm: 0,
          md: 270,
        }}
        className={classes.content}
      >
        <Header />

        <Box mih="calc(100vh - 70px)" p="md" mt={70}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}
