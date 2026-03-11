export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  items?: NavItem[];
  href?: string;
  external?: boolean;
}

export const navigation: NavGroup[] = [
  {
    label: "Races",
    items: [
      { label: "Marathon", href: "/races/marathon" },
      { label: "Half Marathon", href: "/races/half-marathon" },
      { label: "15K", href: "/races/15k" },
      { label: "10K", href: "/races/10k" },
      { label: "6-Miler", href: "/races/6-miler" },
      { label: "5K", href: "/races/5k" },
      { label: "Double Marathon", href: "/races/double-marathon" },
      { label: "Cookie Fun Run", href: "/races/cookie-fun-run" },
    ],
  },
  {
    label: "Event Info",
    items: [
      { label: "Schedule", href: "/schedule" },
      { label: "Course Maps", href: "/course-maps" },
      { label: "Results", href: "/results" },
      { label: "Records", href: "/records" },
    ],
  },
  {
    label: "Travel",
    items: [
      { label: "Getting to Maui", href: "/getting-to-maui" },
      { label: "Lodging", href: "/lodging" },
      { label: "Dinner Cruise", href: "/dinner-cruise" },
    ],
  },
  {
    label: "Media",
    href: "https://www.sportograf.com/en/event/19927",
    external: true,
  },
];
