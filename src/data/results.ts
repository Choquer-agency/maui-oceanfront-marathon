export interface YearResult {
  year: number;
  href: string;
  externalUrl?: string;
  description?: string;
}

export const results: YearResult[] = [
  {
    year: 2025,
    href: "/results/2025",
    externalUrl: "https://my.raceresult.com/323351/",
    description:
      "Full results for all distances from the 2025 Maui Oceanfront Marathon, hosted by RaceResult.",
  },
  {
    year: 2019,
    href: "/results/2019",
    description:
      "Results from the 2019 Maui Oceanfront Marathon — the last edition before the COVID-19 hiatus.",
  },
  {
    year: 2018,
    href: "/results/2018",
    description: "Results from the 2018 Maui Oceanfront Marathon.",
  },
  {
    year: 2017,
    href: "/results/2017",
    description: "Results from the 2017 Maui Oceanfront Marathon.",
  },
  {
    year: 2016,
    href: "/results/2016",
    description: "Results from the 2016 Maui Oceanfront Marathon.",
  },
  {
    year: 2015,
    href: "/results/2015",
    description: "Results from the 2015 Maui Oceanfront Marathon.",
  },
  {
    year: 2014,
    href: "/results/2014",
    description: "Results from the 2014 Maui Oceanfront Marathon.",
  },
  {
    year: 2013,
    href: "/results/2013",
    description: "Results from the 2013 Maui Oceanfront Marathon.",
  },
  {
    year: 2011,
    href: "/results/2011",
    description: "Results from the 2011 Maui Oceanfront Marathon.",
  },
  {
    year: 2010,
    href: "/results/2010",
    description: "Results from the 2010 Maui Oceanfront Marathon.",
  },
  {
    year: 2009,
    href: "/results/2009",
    description:
      "Results from the inaugural 2009 Maui Oceanfront Marathon.",
  },
];

export function getResultByYear(year: number): YearResult | undefined {
  return results.find((r) => r.year === year);
}
