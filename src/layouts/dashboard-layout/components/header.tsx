import {
  IconBell,
  IconMoonStars,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import {
  Burger,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import { Logo } from "@components/ui/logo";
import { Sidebar } from "./sidebar";
import UserDropdown from "@components/ui/user-dropdown";
import { AppSearch } from "@components/ui/app-search";
import { AppSearchModal } from "@components/modals/app-search-modal";
import { useNavigate } from "react-router-dom";
import { modals } from "@mantine/modals";

export function Header() {
  const navigate = useNavigate();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleClickPageItem = (route: string) => {
    navigate(route);
    modals.closeAll();
  };

  const toggleTheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  };

  const openModal = () =>
    modals.open({
      centered: true,
      withCloseButton: false,
      padding: 0,
      shadow: "xs",
      size: "lg",
      radius: "md",
      children: <AppSearchModal onItemClick={handleClickPageItem} />,
    });

  return (
    <>
      <Group
        component="header"
        justify="space-between"
        align="center"
        px="md"
        hiddenFrom="md"
        pos="fixed"
        top={0}
        className={classes.mobileHeader}
      >
        <Box>
          <Logo style={{ width: 100 }} />
        </Box>

        <Group>
          <ActionIcon
            onClick={openModal}
            variant="transparent"
            size="sm"
            aria-label="Settings"
          >
            <IconSearch stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            onClick={toggleTheme}
            variant="transparent"
            size="sm"
            aria-label="Settings"
          >
            {colorScheme === "dark" ? (
              <IconSun stroke={1.5} />
            ) : (
              <IconMoonStars stroke={1.5} />
            )}
          </ActionIcon>

          <ActionIcon variant="transparent" size="sm" aria-label="Settings">
            <IconBell stroke={1.5} />
          </ActionIcon>

          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </Group>

      <Drawer
        size="xs"
        withCloseButton={false}
        padding={0}
        opened={opened}
        onClose={close}
      >
        <Sidebar />
      </Drawer>

      <Group
        component="header"
        visibleFrom="md"
        justify="space-between"
        className={classes.header}
      >
        <AppSearch />

        <Group gap="md" visibleFrom="sm">
          <ActionIcon
            onClick={toggleTheme}
            variant="subtle"
            size="md"
            radius="md"
            aria-label="Settings"
          >
            {colorScheme === "dark" ? (
              <IconSun size={20} stroke={1.5} />
            ) : (
              <IconMoonStars size={20} stroke={1.5} />
            )}
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            size="md"
            radius="md"
            aria-label="Settings"
          >
            <IconBell size={20} stroke={1.5} />
          </ActionIcon>

          <UserDropdown />
        </Group>
      </Group>
    </>
  );
}
