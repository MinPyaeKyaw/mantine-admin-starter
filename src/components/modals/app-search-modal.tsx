import {
  Box,
  Center,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./app-search-modal.module.css";
import { pages } from "@configs/pages";
import { useState } from "react";

interface PageCardProps {
  page: PageType;
  onItemClick: (route: string) => void;
}

function PageCard({ page, onItemClick }: PageCardProps) {
  return (
    <UnstyledButton
      component="a"
      href={page.route}
      onClick={(e) => {
        e.preventDefault();
        onItemClick(page.route);
      }}
    >
      <Stack gap={0} p="md" className={classes.pageCard}>
        <Text size="lg">{page.name}</Text>
        <Text size="xs" c="gray.6">
          {page.desc}
        </Text>
      </Stack>
    </UnstyledButton>
  );
}

interface AppSearchModalProps {
  onItemClick: (route: string) => void;
}

export function AppSearchModal({ onItemClick }: AppSearchModalProps) {
  const [value, setValue] = useState<string>("");
  const [pageList, setPageList] = useState<PageType[]>(pages);

  return (
    <Stack gap={0}>
      <Box>
        <TextInput
          autoFocus
          variant="unstyled"
          leftSection={<IconSearch />}
          size="lg"
          placeholder="Search..."
          className={classes.searchInput}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (e.target.value === "") {
              setPageList(pages);
            } else {
              setPageList(
                pages.filter((p) =>
                  p.name.toLowerCase().includes(value.toLowerCase())
                )
              );
            }
          }}
        />
      </Box>

      <Box>
        <ScrollArea h="50vh">
          <Stack h="50vh" gap={0}>
            {pageList.length > 0 ? (
              pageList.map((p) => (
                <PageCard key={p.id} page={p} onItemClick={onItemClick} />
              ))
            ) : (
              <Center h="100%">
                <Text size="lg" c="gray.6" ta="center">
                  Nothing found...
                </Text>
              </Center>
            )}
          </Stack>
        </ScrollArea>
      </Box>
    </Stack>
  );
}
