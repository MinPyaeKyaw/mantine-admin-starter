import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./page.module.css";
import { useNavigate } from "react-router-dom";
import { IconBlocks } from "@tabler/icons-react";

export function OnProgress() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>
          <IconBlocks size={200} />
        </div>
        <Title className={classes.title}>
          I'm Working on Something Amazing!
        </Title>
        <Text size="lg" ta="center" className={classes.description}>
          Currently crafting this page to deliver an exceptional experience.
          Stay tuned—great things are on the way!
        </Text>
        <Group justify="center">
          <Button onClick={() => navigate("/")} variant="white" size="md">
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
