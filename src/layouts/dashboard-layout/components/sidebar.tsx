import { Box, Group, ScrollArea } from "@mantine/core";
import classes from "./sidebar.module.css";
import { Logo } from "@components/ui/logo";
import { LinksGroup } from "./link-group";
import { UserButton } from "./user-btn";
import { navs } from "@configs/navs";

export function Sidebar() {
  return (
    <Box className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: 120 }} />
        </Group>
      </div>

      <ScrollArea className={classes.links} scrollbarSize={0}>
        <div className={classes.linksInner}>
          {navs.map((item) => (
            <LinksGroup {...item} key={item.label} />
          ))}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </Box>
  );
}
