import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./err-500.module.css";
import { useNavigate } from "react-router-dom";

export function Err404() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>Nothing to see here...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
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
