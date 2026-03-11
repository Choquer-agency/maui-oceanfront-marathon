import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Getting to Maui | Maui Oceanfront Marathon",
};

const sections: { title: string; text: string; icon: ReactNode; link?: { href: string; label: string; internal?: boolean } }[] = [
  {
    title: "Flying to Maui",
    text: "Kahului Airport (OGG) is Maui\u2019s main airport with direct flights from many US mainland cities. Major airlines including Hawaiian Airlines, Alaska Airlines, Delta, United, American, and Southwest offer service. Book early for MLK weekend.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Rental Cars",
    text: "A rental car is recommended for getting to the various start locations. MOM provides shuttle service on race day, but a car gives flexibility to explore Maui during your stay.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand">
        <path d="M5 17h14M7 13h10M5 17a2 2 0 01-2-2v-3l2-5h14l2 5v3a2 2 0 01-2 2M7 17v2M17 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="14" r="1" fill="currentColor" />
        <circle cx="16.5" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    link: {
      href: "/getting-to-maui/rental-car-rates",
      label: "Special Rental Rates for Runners",
      internal: true,
    },
  },
  {
    title: "Race Day Shuttles",
    text: "MOM provides shuttle bus service on race morning from select lodging locations to the various start lines. Post-race shuttles are also available. Details provided with your race packet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand">
        <rect x="3" y="6" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M7 19v-3M17 19v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Weather & What to Expect",
    text: "January in Maui features temperatures in the low 70s\u00B0F at race start, warming to 75-85\u00B0F by midday. It\u2019s whale season, so you may spot humpbacks breaching offshore. Arrive 2+ days early to acclimate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const startLineGuide = [
  {
    race: "Marathon & Double Marathon",
    start: "Shops at Wailea",
    time: "5:00 AM (Marathon) / 12:00 AM (Double)",
    directions:
      "The Shops at Wailea is located at 3750 Wailea Alanui Dr. MOM shuttles depart from select hotels. If driving, park in the Shops at Wailea parking lot and the MOM shuttle will return you to your car after the race.",
  },
  {
    race: "Half Marathon",
    start: "Maalaea Harbor",
    time: "6:40 AM",
    directions:
      "Maalaea Harbor is on Highway 30, about 20 minutes from both Kihei and Lahaina. MOM shuttles available from select hotels. If driving, park at the harbor and take the post-race shuttle back.",
  },
  {
    race: "15K",
    start: "Papalaua Beach",
    time: "7:00 AM",
    directions:
      "Papalaua Beach is along Highway 30 between Maalaea and Lahaina. MOM shuttle recommended as roadside parking is limited.",
  },
  {
    race: "10K",
    start: "Highway 30",
    time: "7:30 AM",
    directions:
      "The 10K starts on Highway 30 between Papalaua and Ukumehame. MOM shuttle recommended as this is a highway start location with limited parking.",
  },
  {
    race: "6-Miler",
    start: "Ukumehame Beach Park",
    time: "8:00 AM",
    directions:
      "Ukumehame Beach Park is on Highway 30, about 10 minutes south of Lahaina. MOM shuttle recommended. Limited parking available at the beach park.",
  },
  {
    race: "5K Run-Walk",
    start: "Lone Palm Point",
    time: "8:30 AM",
    directions:
      "Lone Palm Point is 3.1 miles south of Lahaina on Highway 30. MOM shuttle recommended. The course is 100% closed to traffic for your safety.",
  },
  {
    race: "Cookie Fun Run",
    start: "Kalama Beach Park, Kihei",
    time: "11:00 AM (Thursday)",
    directions:
      "Kalama Beach Park is centrally located in Kihei on South Kihei Road. Free parking available at the park. This is a standalone event on Thursday before race weekend.",
  },
];

export default function GettingToMauiPage() {
  return (
    <>
      <PageHero
        title="Getting to Maui"
        subtitle="Everything you need to plan your trip to paradise"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6 text-center">
          {sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.1}>
              <div className="bg-white border border-ink/5 rounded-xl p-8 hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                  {section.icon}
                </div>
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
                  {section.title}
                </h2>
                <p className="mt-4 text-[15px] text-ink/50 leading-relaxed max-w-xl mx-auto">
                  {section.text}
                </p>
                {section.link && (
                  section.link.internal ? (
                    <Link
                      href={section.link.href}
                      className="mt-4 inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:translate-x-1 transition-all"
                    >
                      {section.link.label} &rarr;
                    </Link>
                  ) : (
                    <a
                      href={section.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:translate-x-1 transition-all"
                    >
                      {section.link.label} &rarr;
                    </a>
                  )
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Getting to Your Start Line */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
                Race Day Logistics
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
                Getting to Your Start Line
              </h2>
              <p className="mt-4 text-[15px] text-ink/50 leading-relaxed max-w-xl mx-auto">
                Each race starts at a different location along the Maui coast.
                Here&apos;s how to get to yours.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {startLineGuide.map((item, index) => (
              <ScrollReveal key={item.race} delay={index * 0.05}>
                <div className="bg-cream border border-ink/5 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg uppercase tracking-tight text-ink">
                      {item.race}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium bg-brand/10 text-brand px-2 py-1 rounded-full">
                        {item.time}
                      </span>
                      <span className="text-xs font-medium bg-ink/5 text-ink/50 px-2 py-1 rounded-full">
                        {item.start}
                      </span>
                    </div>
                  </div>
                  <p className="text-[14px] text-ink/50 leading-relaxed">
                    {item.directions}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
