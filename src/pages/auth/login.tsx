import { GoogleButton } from "@components/ui/btn-google";
import { TwitterButton } from "@components/ui/btn-twitter";
import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { loginSchema } from "./schemas/login";

export function LoginPage(props: PaperProps) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: zodResolver(loginSchema),
  });

  return (
    <Paper
      className={classes.container}
      w={{
        xs: "95%",
        sm: 450,
      }}
      radius="md"
      p="xl"
      {...props}
    >
      <Text size="lg" fw={500}>
        Welcome to Mantine, log in with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="md">Google</GoogleButton>
        <TwitterButton radius="md">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            {...form.getInputProps("password")}
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => navigate("/auth/signup")}
            size="xs"
          >
            Don't have an account? Register
          </Anchor>
          <Button type="submit" radius="md">
            Log in
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
