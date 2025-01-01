import { AuthLayout, DashboardLayout, RootLayout } from "@layouts/index";
import { ContactUsPage } from "@pages/form/contact-us";
import {
  CardViewPage,
  Dashboard,
  Err401,
  Err404,
  Err500,
  Err503,
  ForgotPassword,
  LoginPage,
  OnProgress,
  OTPPage,
  ProfileUpdate,
  ProfileView,
  SettingPage,
  SignupPage,
  TableViewPage,
  UpdatePage,
} from "@pages/index";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "otp",
            element: <OTPPage />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <ProfileView />,
          },
          {
            path: "profile/:id/update",
            element: <ProfileUpdate />,
          },
          {
            path: "contact-us",
            element: <ContactUsPage />,
          },
          {
            path: "crud/table-view",
            element: <TableViewPage />,
          },
          {
            path: "crud/card-view",
            element: <CardViewPage />,
          },
          {
            path: "crud/:id/update",
            element: <UpdatePage />,
          },
          {
            path: "settings",
            element: <SettingPage />,
          },
        ],
      },
    ],
  },
  {
    path: "on-progress",
    element: <OnProgress />,
  },
  {
    path: "err-500",
    element: <Err500 />,
  },
  {
    path: "err-503",
    element: <Err503 />,
  },
  {
    path: "err-401",
    element: <Err401 />,
  },
  {
    path: "err-404",
    element: <Err404 />,
  },
  {
    path: "*",
    element: <Err404 />,
  },
]);

export default router;
