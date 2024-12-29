import { Center } from "@mantine/core";
import { Outlet } from "react-router-dom";
import classes from "./auth-layout.module.css";

export function AuthLayout() {
  return (
    <Center className={classes.container} w="100%" h="100vh">
      <Outlet />
    </Center>
  );
}
