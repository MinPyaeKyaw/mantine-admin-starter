import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./err-500.module.css";
import { useNavigate } from "react-router-dom";

export function Err500() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
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
