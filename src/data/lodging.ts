export interface LodgingPartner {
  name: string;
  description: string;
  deal: string;
  location: string;
  phone?: string;
  website?: string;
}

export const lodgingPartners: LodgingPartner[] = [
  {
    name: "Outrigger Ka'anapali Beach Resort",
    description:
      "Oceanfront resort on Ka'anapali Beach. The runner's shuttle bus picks you up and takes you to various start lines, with post-race transportation included.",
    deal: "Special rates from $349/night (Courtyard View) and $399/night (Partial Oceanview)",
    location: "Ka'anapali, Maui",
    phone: "808-661-0011",
    website: "https://www.outrigger.com",
  },
  {
    name: "Days Inn Oceanfront",
    description:
      "Conveniently located on the marathon course — it's actually the first aid station! A budget-friendly option right on the ocean with easy race-day access.",
    deal: "25% off for all runners + goodie bag at check-in. Rate valid one week before & after the race.",
    location: "Kihei, Maui",
  },
  {
    name: "Maui Paradise Properties",
    description:
      "Title II sponsor offering vacation rentals ranging from beachfront condos to spacious multi-bedroom homes. Perfect for families and running groups who want more space and a full kitchen.",
    deal: "Exclusive accommodation rates for MOM runners and their families",
    location: "Various locations across Maui",
    website: "https://www.mppvacations.com",
  },
];
