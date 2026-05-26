export type NavLinkItem = {
  label: string;
  path: string;
};

export const navLinks: NavLinkItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "POC Generator",
    path: "/poc-generator",
  },
  {
    label: "Playbook Generator",
    path: "/playbook-generator",
  },
  {
    label: "Templates",
    path: "/templates",
  },
  {
    label: "Docs",
    path: "/docs",
  },
];
