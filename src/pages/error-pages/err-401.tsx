import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./err-500.module.css";
import { useNavigate } from "react-router-dom";

export function Err401() {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>401</div>
        <Title className={classes.title}>Unauthorized Access</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Sorry, you’re not authorized to view this page. It seems you don’t
          have the necessary permissions.
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
