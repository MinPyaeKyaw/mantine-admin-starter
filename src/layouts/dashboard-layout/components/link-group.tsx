import { useState } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import classes from "./link-group.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  link,
  links,
}: LinksGroupProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(hasActiveChild() || false);

  function isActive(): boolean {
    const parentPath = "/" + pathname.split("/")[1];
    return parentPath === link;
  }

  function hasActiveChild(): boolean {
    const splittedPaths = pathname.split("/");
    const child = splittedPaths.pop();

    const activeChild =
      links?.map((l) => l.link.split("/").pop()).includes(child) || false;

    return activeChild;
  }

  const items = (hasLinks ? links : []).map((childLink) => {
    const isActiveChild = () => {
      const splittedPaths = pathname.split("/");
      const child = splittedPaths.pop();
      const parent = splittedPaths[1];

      const activeChild = childLink.link.split("/").pop() === child;
      const activeParent = parent === childLink.link.split("/")[1];

      return activeParent && activeChild;
    };

    return (
      <Text<"a">
        component="a"
        href={childLink.link}
        className={clsx(classes.link, isActiveChild() && classes.activeLink)}
        onClick={(e) => {
          e.preventDefault();
          navigate(childLink.link);
        }}
        key={childLink.label}
      >
        {childLink.label}
      </Text>
    );
  });

  return (
    <>
      <UnstyledButton
        component="a"
        href={link}
        onClick={(e) => {
          e.preventDefault();
          if (link) navigate(link);
          setOpened((o) => !o);
        }}
        className={clsx(
          classes.control,
          (isActive() || hasActiveChild()) && classes.activeControl
        )}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={25}>
              <Icon size={18} />
            </ThemeIcon>
            <Text ml="md" size="sm">
              {label}
            </Text>
            {/* <Box ml="md">{label}</Box> */}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
