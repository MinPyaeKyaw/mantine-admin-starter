import { Center, Group, Kbd, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconSearch } from "@tabler/icons-react";
import classes from "./app-search.module.css";
import { AppSearchModal } from "@components/modals/app-search-modal";
import { useNavigate } from "react-router-dom";
import { useHotkeys } from "@mantine/hooks";

export function AppSearch() {
  const navigate = useNavigate();

  const handleClickPageItem = (route: string) => {
    navigate(route);
    modals.closeAll();
  };

  useHotkeys([
    [
      "ctrl+K",
      () =>
        modals.open({
          centered: true,
          withCloseButton: false,
          padding: 0,
          shadow: "xs",
          size: "lg",
          radius: "md",
          children: <AppSearchModal onItemClick={handleClickPageItem} />,
        }),
    ],
  ]);

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
    <Group gap={40} className={classes.search} onClick={openModal}>
      <Group gap="sm">
        <IconSearch size={18} />
        <Text size="sm" variant="text">
          Search...
        </Text>
      </Group>

      <Center h="100%">
        <Kbd size="xs">Ctl</Kbd> + <Kbd size="xs">K</Kbd>
      </Center>
    </Group>
  );
}
