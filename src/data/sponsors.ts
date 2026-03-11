export interface Sponsor {
  name: string;
  tier: "title" | "gold" | "silver" | "community";
}

export const sponsors: Sponsor[] = [
  { name: "Maui Paradise Properties", tier: "title" },
  { name: "Outrigger Ka'anapali", tier: "gold" },
  { name: "Days Inn Maui", tier: "gold" },
  { name: "Shops at Wailea", tier: "gold" },
  { name: "Maui Brewing Co.", tier: "silver" },
  { name: "Hawaiian Airlines", tier: "silver" },
  { name: "Gatorade", tier: "silver" },
  { name: "Maui Health", tier: "community" },
];
