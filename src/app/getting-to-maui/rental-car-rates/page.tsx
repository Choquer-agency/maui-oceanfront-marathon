import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Special Rental Car Rates | Maui Oceanfront Marathon",
};

const rentalCompanies = [
  {
    name: "Alamo Rent A Car",
    description:
      "National chain with a large fleet at Kahului Airport (OGG). Convenient pick-up and drop-off right at the terminal.",
    tip: "Book early for MLK weekend — Maui rental cars sell out fast during peak season.",
  },
  {
    name: "National Car Rental",
    description:
      "Wide selection of vehicles including SUVs and convertibles. Counter located in the Kahului Airport rental car facility.",
    tip: "Consider an SUV if you have a large group or lots of gear.",
  },
  {
    name: "Enterprise Rent-A-Car",
    description:
      "Reliable option with multiple Maui locations beyond just the airport. Great customer service.",
    tip: "Off-airport locations sometimes have better availability.",
  },
];

const tips = [
  {
    title: "Book Early",
    text: "Maui rental cars are in high demand during MLK weekend. Book as soon as you register for the race to lock in the best rates.",
  },
  {
    title: "Why You Need a Car",
    text: "While MOM provides race-day shuttle service, a rental car gives you flexibility to explore Maui, get to bib pickup at the Shops at Wailea, and visit different parts of the island during your stay.",
  },
  {
    title: "Airport Pick-Up",
    text: "The consolidated rental car facility at Kahului Airport (OGG) is a short shuttle ride from the terminal. All major companies operate from this location.",
  },
  {
    title: "Race Day Parking",
    text: "If you drive to your start line on race day, remember that all races are point-to-point (except the Cookie Fun Run). Use the MOM shuttle to get back to your car after the race, or coordinate with friends and family.",
  },
];

export default function RentalCarRatesPage() {
  return (
    <>
      <PageHero
        title="Rental Car Rates"
        subtitle="Special rates and tips for MOM runners visiting Maui"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand/5 border border-brand/10 rounded-2xl p-8 md:p-10 text-center mb-12">
              <div className="w-14 h-14 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
                  <path d="M5 17h14M7 13h10M5 17a2 2 0 01-2-2v-3l2-5h14l2 5v3a2 2 0 01-2 2M7 17v2M17 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="7.5" cy="14" r="1" fill="currentColor" />
                  <circle cx="16.5" cy="14" r="1" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-3">
                A Rental Car is Recommended
              </h2>
              <p className="text-[15px] text-ink/50 leading-relaxed max-w-lg mx-auto">
                MOM provides race-day shuttle service, but a rental car gives
                you the flexibility to explore Maui, get to bib pickup, and
                enjoy the island at your own pace.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-display text-2xl uppercase tracking-tight text-ink text-center mb-6">
              Rental Companies
            </h3>
            <div className="space-y-4 mb-12">
              {rentalCompanies.map((company) => (
                <div
                  key={company.name}
                  className="bg-white border border-ink/5 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <h4 className="font-display text-lg uppercase tracking-tight text-ink mb-2">
                    {company.name}
                  </h4>
                  <p className="text-[14px] text-ink/50 leading-relaxed mb-2">
                    {company.description}
                  </p>
                  <p className="text-[13px] text-brand/70 font-medium">
                    Tip: {company.tip}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="font-display text-2xl uppercase tracking-tight text-ink text-center mb-6">
              Tips for Renting on Maui
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {tips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-white border border-ink/5 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-ink mb-2">{tip.title}</h4>
                  <p className="text-[14px] text-ink/50 leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <Link
                href="/getting-to-maui"
                className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
              >
                &larr; Back to Getting to Maui
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
