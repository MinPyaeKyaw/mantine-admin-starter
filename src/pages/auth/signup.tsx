import { GoogleButton } from "@components/ui/btn-google";
import { TwitterButton } from "@components/ui/btn-twitter";
import {
  Anchor,
  Button,
  Checkbox,
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
import classes from "./signup.module.css";
import { signupSchema } from "./schemas/signup";

export function SignupPage(props: PaperProps) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: false,
    },

    validate: zodResolver(signupSchema),
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
        Welcome to Mantine, register with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="md">Google</GoogleButton>
        <TwitterButton radius="md">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            {...form.getInputProps("name")}
          />

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

          <Checkbox
            label="I accept terms and conditions"
            {...form.getInputProps("terms", { type: "checkbox" })}
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => navigate("/auth/login")}
            size="xs"
          >
            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="md">
            Sign up
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
