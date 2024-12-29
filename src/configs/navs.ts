import {
  IconAdjustments,
  IconDeviceDesktop,
  IconFaceIdError,
  IconForms,
  IconGauge,
} from "@tabler/icons-react";

export const navs = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  {
    label: "Forms",
    icon: IconForms,
    links: [
      { label: "Log in", link: "/auth/login" },
      { label: "Sign up", link: "/auth/signup" },
      { label: "OTP", link: "/auth/otp" },
      { label: "Complex", link: "/forms/complex" },
      { label: "Stepper", link: "/forms/stepper" },
    ],
  },
  {
    label: "CRUDs",
    icon: IconDeviceDesktop,
    links: [
      { label: "Table View", link: "/crud/table-view" },
      { label: "Card View", link: "/crud/card-view" },
    ],
  },
  {
    label: "Errors",
    icon: IconFaceIdError,
    links: [
      { label: "500", link: "/err-500" },
      { label: "503", link: "/err-503" },
      { label: "401", link: "/err-401" },
      { label: "404", link: "/err-404" },
    ],
  },
  { label: "Settings", icon: IconAdjustments, link: "/on-progress" },
];
