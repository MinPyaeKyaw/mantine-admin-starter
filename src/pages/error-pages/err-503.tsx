import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./err-500.module.css";
import { useNavigate } from "react-router-dom";

export function Err503() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>503</div>
        <Title className={classes.title}>All of our servers are busy</Title>
        <Text size="lg" ta="center" className={classes.description}>
          We cannot handle your request right now, please wait for a couple of
          minutes and refresh the page. Our team is already working on this
          issue.
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
