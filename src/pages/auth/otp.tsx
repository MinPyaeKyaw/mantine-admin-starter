import { IconRefresh } from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  PinInput,
  Text,
  Title,
} from "@mantine/core";
import classes from "./otp.module.css";

export function OTPPage() {
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper
        className={classes.container}
        p="lg"
        radius="md"
        mt="xl"
        w={{
          xs: "95%",
          sm: 450,
        }}
      >
        {/* <TextInput label="Your email" placeholder="me@mantine.dev" required /> */}

        <Center>
          <PinInput length={6} type="number" />
        </Center>

        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor c="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <IconRefresh size={12} stroke={1.5} />
              <Box ml={5}>Resend code</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Verify</Button>
        </Group>
      </Paper>
    </Container>
  );
}
